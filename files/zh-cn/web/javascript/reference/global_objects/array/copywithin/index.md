---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---

{{JSRef}}**`copyWithin()`** 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## 语法

```js
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
```

### 参数

- `target`
  - : 0 为基底的索引，复制序列到该位置。如果是负数，`target` 将从末尾开始计算。如果 `target` 大于等于 `arr.length`，将不会发生拷贝。如果 `target` 在 `start` 之后，复制的序列将被修改以符合 `arr.length`。
- `start`
  - : 0 为基底的索引，开始复制元素的起始位置。如果是负数，`start` 将从末尾开始计算。如果 `start` 被忽略，`copyWithin` 将会从 0 开始复制。
- `end`
  - : 0 为基底的索引，开始复制元素的结束位置。`copyWithin` 将会拷贝到该位置，但不包括 `end` 这个位置的元素。如果是负数， `end` 将从末尾开始计算。如果 `end` 被忽略，`copyWithin` 方法将会一直复制至数组结尾（默认为 `arr.length`）。

### 返回值

改变后的数组。

## 描述

参数 target、start 和 end 必须为整数。

如果 start 为负，则其指定的索引位置等同于 length+start，length 为数组的长度。end 也是如此。

copyWithin 方法不要求其 this 值必须是一个数组对象；除此之外，copyWithin 是一个可变方法，它可以改变 this 对象本身，并且返回它，而不仅仅是它的拷贝。

`copyWithin` 就像 C 和 C++ 的 `memcpy` 函数一样，且它是用来移动 {{jsxref("Array")}} 或者 {{jsxref("TypedArray")}} 数据的一个高性能的方法。复制以及粘贴序列这两者是为一体的操作;即使复制和粘贴区域重叠，粘贴的序列也会有拷贝来的值。

`copyWithin` 函数被设计为通用式的，其不要求其 `this` 值必须是一个{{jsxref("Array", "数组")}}对象。

`copyWithin` 是一个可变方法，它不会改变 this 的长度 length，但是会改变 this 本身的内容，且需要时会创建新的属性。

## 例子

```plain
[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.copyWithin` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
