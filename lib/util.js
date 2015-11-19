export function result(value) {
    if (typeof value === 'function') {
        return value();
    }
    return value;
}
