# Composable Statements for JavaScript

Usually statements like `IfStatement` is not composable within expression like function call. This package provides alternative way to express statements as composable function call expression. This may be useful when you are using stuff like JSX, which uses tons of nested expressions.

Currently `IfStatement` is only implementation so far, but more is to come! Feel free to suggest improvements, features, or report bugs. There is no NPM dependency.

## Is this recommended way to express conditional logic?

I do not think so, for the most of case. But I don't like putting `&&` or ternery operator everywhere, this is way better than doing such for the readability's sake, IMHO.

## Installation

    npm install composable-statements

## Usage

start with `IfStatement()` (`if_`) and end with `fi()`. You can chain `elif()` and `else()` after `if_`.

JavaScript
```JavaScript
import {
    IfStatement as if_
} from 'composable-statements';

if_(foo, () => 'foo')
    .elif_(bar, () => 'bar')
    .else_(() => 'baz')
.fi();
```

JSX:
```jsx
// Conditional event handler
<div onClick={
    if_(foo, () => (e) => { $('#foo').append('<div className="this-is-if" />'); })
        .elif(bar, () => (e) => { $('#bar').append('<div className="this-is-elif" />'); })
        .else(() => (e) => { $('#baz').append('<div className="this-is-else" />'); })
    .fi()
    }
/>

// conditional element
<div>
    {
        if_(foo, <div className="foo" />)
            .elif(foo, <div className="bar-is-complicated"><ul></ul></div>)
        .fi()
    }
</div>
```
