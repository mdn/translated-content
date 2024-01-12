---
title: Text：Text() 构造函数
slug: Web/API/Text/Text
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ APIRef("DOM")}}

**`Text()`** 构造函数返回一个新创建的 {{domxref("Text")}} 对象，其文本内容为参数中给出的可选字符串。

## 语法

```js-nolint
new Text()
new Text(string)
```

### 参数

- `string` {{optional_inline}}

### 返回值

一个新的 {{domxref("Text")}} 对象，包含参数 `string` 的内容，如果没有给定参数，则为空字符串。

## 示例

```js
let text = new Text("Test");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)
