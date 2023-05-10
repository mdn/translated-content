---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
---

{{JSRef}}

静态的 Atomics.store() 方法将给定的值存储在数组中的指定位置，并返回该值。

{{EmbedInteractiveExample("pages/js/atomics-store.html")}}

## 语法

```plain
Atomics.store(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个指定类型的 shared 数组。类型为 {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, 或者 {{jsxref("Uint32Array")}}其中一个。
- `index`
  - : typedArray 中用来存储 value 的位置。
- `value`
  - : 要存储的数字。

### 返回值

被存储的值。

### 异常

- 抛出一个{{jsxref("TypeError")}}异常，如果 `typedArray` 不是上述给定的类型之一。
- 抛出一个{{jsxref("TypeError")}}异常，如果 `typedArray` 不是一个指定类型的 shared 类型数组。
- 抛出一个{{jsxref("RangeError")}}异常，如果 `index` 在 `typedArray`中越界了。

## 示例

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
