---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
---

{{JSRef}}

**`Uint8Array`** 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。

## 语法格式

```plain
new Uint8Array(); // ES2017 最新语法
new Uint8Array(length); // 创建初始化为 0 的，包含 length 个元素的无符号整型数组
new Uint8Array(typedArray);
new Uint8Array(object);
new Uint8Array(buffer [, byteOffset [, length]]);
```

构造语法和参数的更多信息请参见 _[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#syntax)_.

## 静态属性

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8Array.BYTES_PER_ELEMENT")}}
  - : 返回数组中元素的字节数，Uint8Array 中返回 1 字节。
- Uint8Array.length
  - : 静态属性 length 一直为 0。想获知其真实长度（元素个数），请参阅 {{jsxref("TypedArray.prototype.length", "Uint8Array.prototype.length")}}。
- {{jsxref("TypedArray.prototype", "Uint8Array.prototype")}}
  - : _TypedArray_ 对象的原型。

## 静态方法

- {{jsxref("TypedArray.from", "Uint8Array.from()")}}
  - : 从一个数组或可迭代的对象创建一个新的`Uint8Array`数组，可参见{{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Uint8Array.of()")}}
  - : 通过一个可变数目的参数创建一个新的`Uint8Array`数组，可参见{{jsxref("Array.of()")}}.

## 实例属性

_还从其父接口 {{jsxref("TypedArray")}} 继承实例属性。_

- `Uint8Array.prototype.constructor`
  - : 返回创建实例属性的函数，默认为 `Uint8Array` 构造器。
- {{jsxref("TypedArray.prototype.buffer", "Uint8Array.prototype.buffer")}} {{readonlyInline}}
  - : 返回由 `Uint8Array`引用的 {{jsxref("ArrayBuffer")}} ，在构造时期固定，所以是**只读**的。
- {{jsxref("TypedArray.prototype.byteLength", "Uint8Array.prototype.byteLength")}} {{readonlyInline}}
  - : 返回`Uint8Array`长度（字节数）。在构造时期固定，所以是 **只读的**。
- {{jsxref("TypedArray.prototype.byteOffset", "Uint8Array.prototype.byteOffset")}} {{readonlyInline}}
  - : 返回`Uint8Array` 距离其 {{jsxref("ArrayBuffer")}} 起始位置的偏移（字节数）。在构造时期固定，所以是 **只读的**。
- {{jsxref("TypedArray.prototype.length", "Uint8Array.prototype.length")}} {{readonlyInline}}
  - : 返回保存在 `Uint8Array`中的元素数量。在构造时期固定，所以是 **只读的**。

## 实例方法

_从其父接口 {{jsxref("TypedArray")}} 继承实例方法。_

## 示例

```js
// 来自长度
var uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// 来自数组
var arr = new Uint8Array([21, 31]);
console.log(arr[1]); // 31

// 来自另一个 TypedArray
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21

// 来自 ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8Array(buffer, 1, 4);

// 来自一个迭代器
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var uint8 = new Uint8Array(iterable);
// Uint8Array[1, 2, 3]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性说明

从 ECMAScript 2015 开始，`Uint8Array` 构造函数需要通过 {{jsxref("Operators/new", "new")}} 操作符调用。即日起如果没有使用 `new` 调用 `Uint8Array` 的构造函数，将会抛出 {{jsxref("TypeError")}} 。

```js example-bad
var dv = Uint8Array([1, 2, 3]);
// TypeError: calling a builtin Uint8Array constructor
// 不使用 new 将会被禁止
```

```js example-good
var dv = new Uint8Array([1, 2, 3]);
```

## 相关内容

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
