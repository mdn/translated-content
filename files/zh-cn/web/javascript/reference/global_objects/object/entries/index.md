---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
---

{{JSRef}}

**`Object.entries()`**方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 {{jsxref("Statements/for...in", "for...in")}} 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

{{EmbedInteractiveExample("pages/js/object-entries.html", "taller")}}

## 语法

```plain
Object.entries(obj)
```

### 参数

- `obj`
  - : 可以返回其可枚举属性的键值对的对象。

### 返回值

给定对象自身可枚举属性的键值对数组。

## 描述

`Object.entries()`返回一个数组，其元素是与直接在`object`上找到的可枚举属性键值对相对应的数组。属性的顺序与通过手动循环对象的属性值所给出的顺序相同。

## 示例

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

### 将`Object`转换为`Map`

{{jsxref("Map", "new Map()")}} 构造函数接受一个可迭代的`entries`。借助`Object.entries`方法你可以很容易的将{{jsxref("Object")}}转换为{{jsxref("Map")}}:

```js
var obj = { foo: "bar", baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

## Polyfill

要在较旧环境中添加兼容的`Object.entries`支持，你可以在 [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) 中找到 Object.entries 的示例（如果你不需要任何对 IE 的支持），在 [es-shims/Object.entries](https://github.com/es-shims/Object.entries) 资料库中的一个 polyfill，或者你可以使用下面列出的简易 polyfill。

```js
if (!Object.entries)
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
```

对于上述 polyfill 代码片段，如果你需要 IE9 以下的支持，那么你还需要一个 Object.keys polyfill（如 {{jsxref("Object.keys")}}页面上的）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}} {{experimental_inline}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
