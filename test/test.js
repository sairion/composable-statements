/*
switch_({
    a: (break_) => { },
    b: (break_) => c: (break_) =>
*/
import { IfStatement as if_ } from '../index';

var cond = 'foo';

console.log(
    if_(cond === 'foo', () => 'foofoo')
        .elif_(cond === 'bar', () => 'barbar')
    .fi()
);
