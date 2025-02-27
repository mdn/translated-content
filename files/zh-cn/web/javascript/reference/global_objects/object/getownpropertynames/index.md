---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---

{{JSRef}}

**`Object.getOwnPropertyNames()`** 静态方法返回一个数组，其包含给定对象中所有自有属性（包括不可枚举属性，但不包括使用 symbol 值作为名称的属性）。

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertyNames()")}}

```js interactive-example
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1));
// Expected output: Array ["a", "b", "c"]
```

## 语法

```js-nolint
Object.getOwnPropertyNames(obj)
```

### 参数

- `obj`
  - : 一个对象，其自有的可枚举和不可枚举属性的名称被返回。

### 返回值

在给定对象上找到的自有属性对应的字符串数组。

## 描述

`Object.getOwnPropertyNames()` 返回一个数组，其元素是与给定对象 `obj` 直接关联的可枚举和不可枚举属性对应的字符串。数组中可枚举属性的顺序与使用 {{jsxref("Statements/for...in", "for...in")}} 循环（或 {{jsxref("Object.keys()")}}）遍历对象属性时所暴露的顺序一致。对象的非负整数键（包括可枚举和不可枚举的）首先按升序添加到数组中，然后是按插入顺序排列的字符串键。

在 ES5 中，如果该方法的参数不是一个对象（而是基本类型值），则会导致 {{jsxref("TypeError")}}。在 ES2015 中，非对象参数会被强制转换为对象。

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (ES2015 code)
```

## 示例

### 使用 Object.getOwnPropertyNames()

```js
const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// 类数组对象
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]

Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
  console.log(`${val} -> ${obj[val]}`);
});
// 0 -> a
// 1 -> b
// 2 -> c

// 不可枚举属性
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
myObj.foo = 1;

console.log(Object.getOwnPropertyNames(myObj).sort()); // ["foo", "getFoo"]
```

如果你只想获取可枚举属性，请参见 {{jsxref("Object.keys()")}} 或使用 {{jsxref("Statements/for...in", "for...in")}} 循环（请注意，这也将返回对象原型链中找到的可枚举属性，除非使用 {{jsxref("Object.hasOwn()", "hasOwn()")}} 过滤）。

原型链上的属性不会被列出：

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

console.log(Object.getOwnPropertyNames(new ChildClass()));
// ["prop", "method"]
```

### 只获取不可枚举的属性

这个方法使用 {{jsxref("Array.prototype.filter()")}} 函数从所有键（使用 `Object.getOwnPropertyNames()` 获得）的列表中过滤可枚举键（使用 {{jsxref("Object.keys()")}} 获得），从而仅以不可枚举键作为输出。

```js
const target = myObject;
const enumAndNonenum = Object.getOwnPropertyNames(target);
const enumOnly = new Set(Object.keys(target));
const nonenumOnly = enumAndNonenum.filter((key) => !enumOnly.has(key));

console.log(nonenumOnly);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.getOwnPropertyNames` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
