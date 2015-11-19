import { result } from './util';


export default function IfStatement(condition, block, options) {
    // Otherwise, wrap it with wrapper
    return new IfStatementWrapper({ condition, block }, options);
}

class IfStatementWrapper {
    constructor(ifFeed, options) {
        var optionIsObject = typeof options === 'object';
        // Non old-browser compatible option
        if (!optionIsObject ||
            (optionIsObject && !options.compat)) {
            this['else'] = this.else_;
            this['elif'] = this.elif_;
        }
        // map prototype
        this._map = {
            if_: ifFeed,
            elif_: [],
            else_: null
        };
    }

    _excute() {
        var if_ = this._map.if_;
        var elif_ = this._map.elif_;
        var else_ = this._map.else_;

        if (if_.condition) {
            return result(if_.block);
        }
        for (var i = 0; i < elif_.length; i++) {
            if (elif_[i].condition) {
                return result(elif_[i].block);
            }
        }
        if (else_.condition) {
            return result(else_.block);
        }
    }

    elif_(condition, block) {
        this._map.elif_.push({ condition, block });
        return this;
    }

    else_(condition, block) {
        this._map.else_ = { condition, block };
        return this;
    }

    fi() {
        return this._excute.apply(this);
    }
}
