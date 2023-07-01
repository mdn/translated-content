---
title: Object initializer
slug: Web/JavaScript/Reference/Operators/Object_initializer
---

{{JsSidebar("Operators")}}

Objects can be initialized using [`new Object()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object), `Object.create()`, or using the _literal_ notation (_initializer_ notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

## 語法

```js
var o = {};
var o = { a: "foo", b: 42, c: {} };

var a = "foo",
  b = 42,
  c = {};
var o = { a: a, b: b, c: c };

var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {},
};
```

### New notations in ECMAScript 2015

Please see the compatibility table for support for these notations. In non-supporting environments, these notations will lead to syntax errors.

```js
// Shorthand property names (ES2015)
var a = "foo",
  b = 42,
  c = {};
var o = { a, b, c };

// Shorthand method names (ES2015)
var o = {
  property([parameters]) {},
};

// Computed property names (ES2015)
var prop = "foo";
var o = {
  [prop]: "hey",
  ["b" + "ar"]: "there",
};
```

## 說明

An object initializer is an expression that describes the initialization of an {{jsxref("Object")}}. Objects consist of _properties_, which are used to describe an object. Values of object properties can either contain {{Glossary("primitive")}} data types or other objects.

### 建立物件

An empty object with no properties can be created like this:

```js
var object = {};
```

However, the advantage of the _literal_ or _initializer_ notation is, that you are able to quickly create objects with properties inside the curly braces. You simply notate a list of `key: value` pairs delimited by comma. The following code creates an object with three properties and the keys are `"foo"`, `"age"` and `"baz"`. The values of these keys are a string `"bar"`, a number `42` and the third property has another object as its value.

```js
var object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### 存取屬性

Once you have created an object, you might want to read or change them. Object properties can be accessed by using the dot notation or the bracket notation. See [property accessors](/zh-TW/docs/Web/JavaScript/Reference/Operators/Property_Accessors) for detailed information.

```js
object.foo; // "bar"
object["age"]; // 42

object.foo = "baz";
```

### 屬性定義

We have already learned how to notate properties using the initializer syntax. Oftentimes, there are variables in your code that you would like to put into an object. You will see code like this:

```js
var a = "foo",
  b = 42,
  c = {};

var o = {
  a: a,
  b: b,
  c: c,
};
```

With ECMAScript 2015, there is a shorter notation available to achieve the same:

```js
var a = "foo",
  b = 42,
  c = {};

// Shorthand property names (ES2015)
var o = { a, b, c };

// In other words,
console.log(o.a === { a }.a); // true
```

#### Duplicate property names

When using the same name for your properties, the second property will overwrite the first.

```js
var a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

In ECMAScript 5 strict mode code, duplicate property names were considered a {{jsxref("SyntaxError")}}. With the introduction of computed property names making duplication possible at runtime, ECMAScript 2015 has removed this restriction.

```js
function haveES2015DuplicatePropertySemantics() {
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch (e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}
```

### 方法定義

A property of an object can also refer to a [function](/zh-TW/docs/Web/JavaScript/Reference/Functions) or a [getter](/zh-TW/docs/Web/JavaScript/Reference/Functions/get) or [setter](/zh-TW/docs/Web/JavaScript/Reference/Functions/set) method.

```js
var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {},
};
```

In ECMAScript 2015, a shorthand notation is available, so that the keyword "function" is no longer necessary.

```js
// Shorthand method names (ES2015)
var o = {
  property([parameters]) {},
  *generator() {},
};
```

In ECMAScript 2015 There is a way to concisely define properties whose values are generator functions:

```js
var o = {
  *generator() {
    ...........
  }
};
```

Which is equivalent to this ES5-like notation (but note that ECMAScript 5 has no generators):

```js
var o = {
  generator: function* () {
    ...........
  }
};
```

For more information and examples about methods, see [method definitions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Computed property names

Starting with ECMAScript 2015, the object initializer syntax also supports computed property names. That allows you to put an expression in brackets `[]`, that will be computed as the property name. This is symmetrical to the bracket notation of the [property accessor](/zh-TW/docs/Web/JavaScript/Reference/Operators/Property_Accessors) syntax, which you might have used to read and set properties already. Now you can use the same syntax in object literals, too:

```js
// Computed property names (ES2015)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = "size";
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### Spread properties

The [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) proposal (stage 3) adds [spread](/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator) properties to object literals. It copies own enumerable properties from a provided object onto a new object.

Shallow-cloning (excluding prototype) or merging objects is now possible using a shorter syntax than {{jsxref("Object.assign()")}}.

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Note that {{jsxref("Object.assign()")}} triggers [setters](/zh-TW/docs/Web/JavaScript/Reference/Functions/set) whereas the spread operator doesn't.

### Prototype mutation

A property definition of the form `__proto__: value` or `"__proto__": value` does not create a property with the name `__proto__`. Instead, if the provided value is an object or [`null`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/null), it changes the `[[Prototype]]` of the created object to that value. (If the value is not an object or null, the object is not changed.)

```js
var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { __proto__: protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
```

Only a single prototype mutation is permitted in an object literal: multiple prototype mutations are a syntax error.

Property definitions that do not use "colon" notation are not prototype mutations: they are property definitions that behave identically to similar definitions using any other name.

```js
var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = {
  __proto__() {
    return "hello";
  },
};
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
```

## Object literal notation vs JSON

Object literal notation 與**J**ava**S**cript **O**bject **N**otation ([JSON](/zh-TW/docs/Glossary/JSON))是不一樣的東西. 儘管它們看起來很相似，但還是有以下的不同:

- JSON 只允許屬性透過`"property": value`格式定義. 屬性名稱必須使用雙引號包起來，且不能是速記。
- JSON 的數值僅能為 string, numbers, arrays, `true`, `false`, `null`, 或另一個 JSON 物件.
- A function value (see "Methods" above) can not be assigned to a value in JSON.
- Objects like {{jsxref("Date")}} will be a string after {{jsxref("JSON.parse()")}}.
- {{jsxref("JSON.parse()")}} will reject computed property names and an error will be thrown.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Property accessors](/zh-TW/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [`get`](/zh-TW/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/zh-TW/docs/Web/JavaScript/Reference/Functions/set)
- [Method definitions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexical grammar](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar)
