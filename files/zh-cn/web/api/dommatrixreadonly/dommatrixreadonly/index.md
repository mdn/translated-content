---
title: DOMMatrixReadOnly：DOMMatrixReadOnly() 构造函数
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMMatrixReadOnly`** 构造函数创建一个新的表示适合于二维和三维操作的 4x4 矩阵的 {{domxref("DOMMatrixReadOnly")}} 对象。

## 语法

```js-nolint
DOMMatrixReadOnly()
DOMMatrixReadOnly(init)
```

### 参数

- `init` {{optional_inline}}
  - : 包含数字序列的字符串或指定要创建的矩阵的数字数组。

    如果传递数字数组，则行为取决于数组的长度：
    - 对于形式为 `[a, b, c, d, e, f]` 的 6 元素数组，将创建一个二维只读矩阵，并使用提供的元素进行初始化。
    - 对于形式为 `[m11, m12, m13, …, m42, m43, m44]` （按列优先顺序）的 16 元素数组，将创建一个三维只读矩阵，并使用提供的元素进行初始化。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
