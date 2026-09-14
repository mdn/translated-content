---
title: Document：createProcessingInstruction() 方法
slug: Web/API/Document/createProcessingInstruction
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

`createProcessingInstruction()` 生成新的[处理指令](/zh-CN/docs/Web/API/ProcessingInstruction)节点并返回。

新节点通常会被插入 XML 文档，以便完成任何操作，例如 {{ domxref("node.insertBefore") }}。

## 语法

```js-nolint
createProcessingInstruction(target, data)
```

### 参数

- `piNode` 是生成的 {{ domxref("ProcessingInstruction") }} 节点。
- `target` 是包含处理指令的第一部分字符串（即 `<?target … ?>`）。
- `data` 是包含处理指令在目标之后应携带的任何信息字符串，数据由你决定，但不能包含 `?>`，因为这会关闭处理指令。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 如果满足以下任意条件，则抛出该异常：
    - [`target`](#target) 值不是有效的 [XML 名称](https://www.w3.org/TR/REC-xml/#dt-name)；例如，以数字、连字符或句号开头，或包含字母数字字符、下划线、连字符或句号以外的字符。
    - _闭合处理指令序列_（`?>`）是 [`data`](#data) 值的一部分。

## 示例

```js
const doc = new DOMParser().parseFromString("<foo />", "application/xml");
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css"',
);

doc.insertBefore(pi, doc.firstChild);

console.log(new XMLSerializer().serializeToString(doc));
// 显示：<?xml-stylesheet href="mycss.css" type="text/css"?><foo/>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
