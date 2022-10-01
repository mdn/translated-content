---
title: Atomics.load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
---

{{JSRef}}

静态方法 **`Atomics.load()`** 返回一个数组当中给定位置的值。

{{EmbedInteractiveExample("pages/js/atomics-load.html")}}

## 语法

```plain
Atomics.load(typedArray, index)
```

### 参数

- `typedArray`
  - : 一个共享的整型数组。可以是 {{jsxref("Int8Array")}}，{{jsxref("Uint8Array")}}，{{jsxref("Int16Array")}}，{{jsxref("Uint16Array")}}，{{jsxref("Int32Array")}} 或 {{jsxref("Uint32Array")}}.
- `index`
  - : 在 `typedArray` 中需要加载的位置。

### 返回值

给定位置的值 (`typedArray[index]`)。

### 异常

- 抛出 {{jsxref("TypeError")}}, 如果 `typedArray` 不是一个被允许的整型。
- 抛出 {{jsxref("TypeError")}}, 如果 `typedArray` 不是一个共享数组。
- 抛出 {{jsxref("RangeError")}}, 如果 `index` 超出 `typedArray` 的界限。

## 示例

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.store()")}}
