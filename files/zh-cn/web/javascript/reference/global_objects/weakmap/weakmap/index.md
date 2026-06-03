---
title: WeakMap() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
---

**`WeakMap()`** 构造函数创建 {{jsxref("WeakMap")}} 对象。

## 语法

```js-nolint
new WeakMap()
new WeakMap(iterable)
```

> [!NOTE]
> `WeakMap()` 构造函数只能使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用。不使用 `new` 而直接调用会抛出 {{jsxref("TypeError")}}。

## 参数

- `iterable`
  - : 一个 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 或者其他实现了 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) 方法的可迭代对象，该方法返回一个迭代器对象，该对象会产生一个二元类数组对象，其第一个元素是将被用作 `WeakMap` 键的对象，第二个元素是与该键相关联的值。每个键值对都会被添加到新的 `WeakMap` 对象中。`null` 会被视为 `undefined`。

## 示例

### 使用 WeakMap

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value 可以是任何值，包括对象或函数
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 键和值可以是任何对象，甚至是 WeakMap！

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined，因为 wm2 上没有 o2 的键
wm2.get(o3); // undefined，因为设置的值就是 undefined

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true（即使值是 undefined）

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `WeakMap` 的 polyfill](https://github.com/zloirock/core-js#weakmap)
- [JavaScript 指南中的 `WeakMap`](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_对象)
- [使用 ECMAScript 6 WeakMap 隐藏实现细节](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
