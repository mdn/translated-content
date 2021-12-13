---
title: WeakMap() constructor
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
tags:
  - Constructor
  - JavaScript
  - Reference
  - WeakMap
  - Polyfill
browser-compat: javascript.builtins.WeakMap.WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
---

{{JSRef}}

**`WeakMap()`** 会创建一个 `WeakMap` 对象，该对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

你可以从这里了解更多关于 `WeakMap` 的内容 [WeakMap 对象](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections)

## 语法

```js
new WeakMap();
new WeakMap([iterable]);
```

## 参数

- `iterable`
  - Iterable 是一个数组（二元数组）或者其他可迭代的且其元素是键值对的对象。每个键值对会被加到新的 WeakMap 里。null 会被当做 undefined。

## 示例

### 使用 `WeakMap`

```JavaScript
const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function(){},
      o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value可以是任意值,包括一个对象或一个函数
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 键和值可以是任意对象,甚至另外一个WeakMap对象

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined,wm2中没有o2这个键
wm2.get(o3); // undefined,值就是undefined

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (即使值是undefined)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("javascript.builtins.WeakMap")}}

## 相关链接

- A polyfill of `WeakMap` is available in [`core-js`](https://github.com/zloirock/core-js#weakmap)
- [`WeakMap` in the JavaScript guide](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#weakmap对象)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgeraldnick.com/weblog/53/)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
