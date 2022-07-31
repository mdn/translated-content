---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.assign
translation_of: Web/JavaScript/Reference/Global_Objects/Object/assign
---
{{JSRef}}

**`Object.assign()`** 方法将所有{{jsxref("Object/propertyIsEnumerable", "可枚举", "", 1)}}（`Object.propertyIsEnumerable()` 返回 true）和{{jsxref("Object/hasOwnProperty", "自有", "", 1)}}（`Object.hasOwnProperty()` 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。

{{EmbedInteractiveExample("pages/js/object-assign.html")}}

## 语法

```js
Object.assign(target, ...sources)
```

### 参数

- `target`
  - : 目标对象，接收源对象属性的对象，也是修改后的返回值。
- `sources`
  - : 源对象，包含将被合并的属性。

### 返回值

目标对象。

## 描述

如果目标对象与源对象具有相同的 {{jsxref("Object/keys", "key", "", 1)}}，则目标对象中的属性将被源对象中的属性覆盖，后面的源对象的属性将类似地覆盖前面的源对象的属性。

`Object.assign` 方法只会拷贝源对象 _可枚举的_ 和 _自身的_ 属性到目标对象。该方法使用源对象的 `[[Get]]` 和目标对象的 `[[Set]]`，它会调用 [getters](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 和 [setters](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。故它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含 getters，这可能使其不适合将新属性合并到原型中。

为了将属性定义（包括其可枚举性）复制到原型，应使用 {{jsxref("Object.getOwnPropertyDescriptor()")}} 和 {{jsxref("Object.defineProperty()")}}，基本类型 {{jsxref("Global_Objects/String", "String")}} 和 {{jsxref("Symbol")}} 的属性会被复制。

如果赋值期间出错，例如如果属性不可写，则会抛出 {{jsxref("TypeError")}}；如果在抛出异常之前添加了任何属性，则会修改 `target` 对象（译者注：换句话说，`Object.assign()` 没有“回滚”之前赋值的概念，它是一个尽力而为、可能只会完成部分复制的方法）。

> **备注：** `Object.assign()` 不会在 `source` 对象值为 {{jsxref("null")}} 或 {{jsxref("undefined")}} 时抛出错误。

## 示例

### 复制对象

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### 深拷贝问题

针对[深拷贝](/zh-CN/docs/Glossary/Deep_copy), 需要使用其他办法，因为 `Object.assign()` 只复制属性值。

假如源对象是一个对象的引用，它仅仅会复制其引用值。

```js
function test() {
  'use strict';

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}

  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();
```

### 合并对象

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

### 合并具有相同属性的对象

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

属性会被后续参数中具有相同属性的其他对象覆盖。

### 拷贝 Symbol 类型属性

```js
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### 原型链上的属性和不可枚举属性不能被复制

```js
const obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### 基本类型会被包装为对象

```js
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### 异常会打断后续拷贝任务

```js
const target = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: false
}); // target.foo is a read-only property

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// The Exception is thrown when assigning target.foo

console.log(target.bar);  // 2, the first source was copied successfully.
console.log(target.foo2); // 3, the first property of the second source was copied successfully.
console.log(target.foo);  // 1, exception is thrown here.
console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(target.baz);  // undefined, the third source will not be copied either.
```

### 拷贝访问器

```js
const obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

let copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }
// The value of copy.bar is obj.bar's getter's return value.

// This is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // By default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Object.assign` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperties()")}}
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- [构造字面量对象时使用展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax#构造字面量对象时使用展开语法)
