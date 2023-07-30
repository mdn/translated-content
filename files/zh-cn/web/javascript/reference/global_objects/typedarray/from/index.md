---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
---

{{JSRef}}

`TypedArray.from()` 方法 从一个类数组或者可迭代对象中创建一个新[类型数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)。这个方法和 {{jsxref("Array.from()")}} 类似。

## 语法

```js-nolint
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)
```

上面代码中的 `TypedArray` 需要替换为下面的任何一个构造函数：

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### 参数

- _`source`_
  - : 想要转换为类型数组的类数组或者可迭代对象。
- _`mapFn`_
  - : 可选参数。如果指定了该参数，则最后生成的类型数组会经过该函数的加工处理后再返回。
- _`thisArg`_
  - : 可选参数。执行 `mapFn` 函数时 `this` 的值。

### 返回值

一个新的 {{jsxref("TypedArray")}} 实例。

## 描述

`TypedArray.from()` 允许你从下面两者来创建数组：

- 类数组对象（拥有一个 `length` 属性和若干索引属性的任意对象）
- [可迭代对象](/zh-CN/docs/Web/JavaScript/Guide/iterable)（你可以从它身上迭代出若干个元素的对象，比如有 {{jsxref("Map")}} 和 {{jsxref("Set")}} 等）。

`TypedArray.from()` 方法有一个可选参数 `mapFn`, 让你可以在最后生成的类型数组上再执行一次 {{jsxref("Array.prototype.map", "map")}} 方法后再返回。也就是说以下两种形式是等价的：

- `TypedArray.from(obj, mapFn, thisArg)`
- `TypedArray.from(Array.prototype.map.call(obj, mapFn, thisArg))`

`from()` 的 `length` 属性值为 `1`。

{{jsxref("Array.from()")}} 和 `TypedArray.from()` 之间有一些微妙的区别：

- 如果 `|this|` 的值传递给 `TypedArray.from` 不是一个构造器，`TypedArray.from` 将抛出{jsxref("TypeError")}}, 而 `Array.from` 默认将创建一个 {{jsxref("Array")}}.
- `TypedArray.from` 使用`[Put]` 而 `rray.from` 使用`[DefineProperty]]`. 因此，当和 {{jsxref("Proxy")}} 对象一起时，它调用 {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}} 创建一个新的元素而非 {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty")}}.
- 当 `from` 获得一个迭代器时，`TypedArray` 一开始收集迭代器中的所有值，此时创建一个 `|this|` 的实例用于计数，然后在实例中设置值。 `Array.from` 设置每个从迭代器其中获取的值，最后设置它的长度。
- 当 `Array.from` 获得一个不可迭代的类数组时，it respects holes, 而 `TypedArray.from` 将确保结果是 dense.

## 示例

```js
// 使用 Set (可迭代对象)
var s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]

// 使用字符串
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]

// 使用箭头函数对数组元素进行映射
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]

// 生成一个数字序列
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

## Polyfill

在不支持 `from()` 的环境中，你可以在你代码的起始位置插入以下代码，来实现对其功能的大部分支持。

```js
if (!Int8Array.__proto__.from) {
  (function () {
    Int8Array.__proto__.from = function (obj, func, thisObj) {
      var typedArrayClass = Int8Array.__proto__;
      if (typeof this !== "function") {
        throw new TypeError("# is not a constructor");
      }
      if (this.__proto__ !== typedArrayClass) {
        throw new TypeError("this is not a typed array.");
      }

      func =
        func ||
        function (elem) {
          return elem;
        };

      if (typeof func !== "function") {
        throw new TypeError("specified argument is not a function");
      }

      obj = Object(obj);
      if (!obj["length"]) {
        return new this(0);
      }
      var copy_data = [];
      for (var i = 0; i < obj.length; i++) {
        copy_data.push(obj[i]);
      }

      copy_data = copy_data.map(func, thisObj);

      var typed_array = new this(copy_data.length);
      for (var i = 0; i < typed_array.length; i++) {
        typed_array[i] = copy_data[i];
      }
      return typed_array;
    };
  })();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Array.prototype.map()")}}
