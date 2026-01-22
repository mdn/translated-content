---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

**`Atomics.isLockFree()`** 静态方法用于判断 `Atomics` 在将具有给定字节大小的元素应用于类型化数组时是否会使用锁或原子硬件操作。如果给定的大小不是整数类型化数组类型的 [BYTES_PER_ELEMENT](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) 属性之一，则返回 `false`。

{{InteractiveExample("JavaScript Demo: Atomics.isLockFree()")}}

```js interactive-example
console.log(Atomics.isLockFree(3));
// 3 is not one of the BYTES_PER_ELEMENT values
// Expected output: false

console.log(Atomics.isLockFree(4));
// 4 is one of the BYTES_PER_ELEMENT values
// Expected output: true
```

## 语法

```js-nolint
Atomics.isLockFree(size)
```

### 参数

- `size`
  - : 要检查的大小（以字节为单位）。

### 返回值

`true` 或 `false`，指示操作字节是否不涉及锁。

## 示例

### 使用 isLockFree()

```js
Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
