---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
---

{{JSRef}}

**`Object.values()`** 方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用 {{jsxref("Statements/for...in", "for...in")}} 循环的顺序相同（区别在于 for-in 循环枚举原型链中的属性）。

## 语法

```plain
Object.values(obj)
```

### 参数

- `obj`
  - : 被返回可枚举属性值的对象。

### 返回值

一个包含对象自身的所有可枚举属性值的数组。

## 描述

`Object.values()`返回一个数组，其元素是在对象上找到的可枚举属性值。属性的顺序与通过手动循环对象的属性值所给出的顺序相同。

## 示例

```js
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

## Polyfill

如果要 `Object.values`兼容不支持它的旧环境，可在 [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) 或 [es-shims/Object.values](https://github.com/es-shims/Object.values) 中找到 Polyfill。

根据**Object.keys()**的 Polyfill 仿写一个：

```js
if (!Object.values) Object.values = function(obj) {
    if (obj !== Object(obj))
        throw new TypeError('Object.values called on a non-object');
    var val=[],key;
    for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj,key)) {
            val.push(obj[key]);
        }
    }
    return val;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Enumerability and ownership of properties](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}} {{experimental_inline}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
