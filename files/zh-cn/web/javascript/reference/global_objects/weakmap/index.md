---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
---

{{JSRef}}

**`WeakMap`** 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

你可以从这里了解更多关于 `WeakMap` 的内容：[WeakMap 对象](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object)。

## 描述

WeakMap 的 key 只能是 `Object` 类型。 {{Glossary("Primitive", "原始数据类型")}} 是不能作为 key 的（比如 {{jsxref("Symbol")}}）。

### Why *Weak*Map ？

在 JavaScript 里，map API _可以_ 通过使其四个 API 方法共用两个数组（一个存放键，一个存放值）来实现。给这种 map 设置值时会同时将键和值添加到这两个数组的末尾。从而使得键和值的索引在两个数组中相对应。当从该 map 取值的时候，需要遍历所有的键，然后使用索引从存储值的数组中检索出相应的值。

但这样的实现会有两个很大的缺点：

1. 首先赋值和搜索操作都是 *O(*n*)* 的时间复杂度（_n_ 是键值对的个数），因为这两个操作都需要遍历全部整个数组来进行匹配。

2. 另外一个缺点是可能会导致内存泄漏，因为数组会一直引用着每个键和值。这种引用使得垃圾回收算法不能回收处理他们，即使没有其他任何引用存在了。

相比之下，原生的 `WeakMap` 持有的是每个键对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行。原生 `WeakMap` 的结构是特殊且有效的，其用于映射的 key *只有*在其没有被回收时才是有效的。

**正由于这样的弱引用，`WeakMap` 的 key 是不可枚举的**（没有方法能给出所有的 key）。如果 key 是可枚举的话，其列表将会受垃圾回收机制的影响，从而得到不确定的结果。因此，如果你想要这种类型对象的 key 值的列表，你应该使用 {{jsxref("Map")}}。

## 构造函数

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : 创建一个新的 `WeakMap` 对象。

## 实例方法

- {{jsxref("WeakMap.delete", "WeakMap.prototype.delete(<var>key</var>)")}}
  - : 删除 WeakMap 中与 `key` 相关联的值。删除之后， `WeakMap.prototype.has(key)` 将会返回 `false`。
- {{jsxref("WeakMap.get", "WeakMap.prototype.get(<var>key</var>)")}}
  - : 返回 WeakMap 中与 `key` 相关联的值，如果 `key` 不存在则返回 `undefined`。
- {{jsxref("WeakMap.has", "WeakMap.prototype.has(<var>key</var>)")}}
  - : 返回一个布尔值，断言一个值是否已经与 `WeakMap` 对象中的 `key` 关联。
- {{jsxref("WeakMap.set", "WeakMap.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : 给 `WeakMap` 中的 `key` 设置一个 `value`。该方法返回一个 `WeakMap` 对象。

## 示例

### 使用 WeakMap

```js
const wm1 = new WeakMap(),
  wm2 = new WeakMap(),
  wm3 = new WeakMap();
const o1 = {},
  o2 = function () {},
  o3 = window;
wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value 可以是任意值，包括一个对象或一个函数
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 键和值可以是任意对象，甚至另外一个 WeakMap 对象
wm1.get(o2); // "azerty"
wm2.get(o2); // undefined，wm2 中没有 o2 这个键
wm2.get(o3); // undefined，值就是 undefined
wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (即使值是 undefined)
wm3.set(o1, 37);
wm3.get(o1); // 37
wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### 实现一 个带有 .clear() 方法的类 WeakMap 类

```js
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- A polyfill of `WeakMap` is available in [`core-js`](https://github.com/zloirock/core-js#weakmap)
- [`WeakMap` in the JavaScript guide](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](http://fitzgeraldnick.com/weblog/53/)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
