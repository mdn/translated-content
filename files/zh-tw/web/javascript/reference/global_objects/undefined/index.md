---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
---

{{jsSidebar("Objects")}}

The global **`undefined`** property represents the primitive value `{{Glossary("Undefined", "undefined")}}`. It is one of JavaScript's {{Glossary("Primitive", "primitive types")}}.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## 語法

```plain
undefined
```

## 描述

`undefined` is a property of the _global object_; i.e., it is a variable in global scope. The initial value of `undefined` is the primitive value `{{Glossary("Undefined", "undefined")}}`.

In modern browsers (JavaScript 1.8.5 / Firefox 4+), `undefined` is a non-configurable, non-writable property per the ECMAScript 5 specification. Even when this is not the case, avoid overriding it.

A variable that has not been assigned a value is of type undefined. A method or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value. A function returns `undefined` if a value was not {{jsxref("Statements/return", "returned")}}.

> **警告：** While it is possible to use it as an {{Glossary("Identifier", "identifier")}} (variable name) in any scope other than the global scope (because `undefined` is not a {{jsxref("Reserved_Words", "reserved word")}}), doing so is a very bad idea that will make your code difficult to maintain and debug.
>
> ```js
> //DON'T DO THIS
>
> // logs "foo string"
> (function() { var undefined = 'foo'; console.log(undefined, typeof undefined); })();
>
> // logs "foo string"
> (function(undefined) { console.log(undefined, typeof undefined); })('foo');
> ```

## 範例

### Strict equality and `undefined`

You can use `undefined` and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable `x` is not defined, and the `if` statement evaluates to true.

```js
var x;
if (x === undefined) {
   // these statements execute
}
else {
   // these statements do not execute
}
```

> **備註：** The strict equality operator rather than the standard equality operator must be used here, because `x == undefined` also checks whether `x` is `null`, while strict equality doesn't. `null` is not equivalent to `undefined`. See {{jsxref("Operators/Comparison_Operators", "comparison operators")}} for details.

### `Typeof` operator and `undefined`

Alternatively, {{jsxref("Operators/typeof", "typeof")}} can be used:

```js
var x;
if (typeof x === 'undefined') {
   // these statements execute
}
```

One reason to use {{jsxref("Operators/typeof", "typeof")}} is that it does not throw an error if the variable has not been declared.

```js
// x has not been declared before
if (typeof x === 'undefined') { // evaluates to true without errors
   // these statements execute
}

if (x === undefined) { // throws a ReferenceError

}
```

However, this kind of technique should be avoided. JavaScript is a statically scoped language, so knowing if a variable is declared can be read by seeing whether it is declared in an enclosing context. The only exception is the global scope, but the global scope is bound to the global object, so checking the existence of a variable in the global context can be done by checking the existence of a property on the _global object_ (using the {{jsxref("Operators/in", "in")}} operator, for instance).

### `Void` operator and `undefined`

The {{jsxref("Operators/void", "void")}} operator is a third alternative.

```js
var x;
if (x === void 0) {
   // these statements execute
}

// y has not been declared before
if (y === void 0) {
   // throws a - Uncaught ReferenceError: y is not defined
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
