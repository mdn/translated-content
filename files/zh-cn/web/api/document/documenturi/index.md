---
title: Document：documentURI 属性
slug: Web/API/Document/documentURI
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

{{domxref("Document")}} 接口的 **`documentURI`** 只读属性以字符串形式返回文档位置。

## 值

字符串。

## 示例

### JavaScript

```js
document.getElementById("url").textContent = document.documentURI;
```

### HTML

```html
<p id="urlText">
  URL：<br />
  <span id="url">URL 在此处</span>
</p>
```

### 结果

{{EmbedLiveSample("示例", "100%", 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 返回相同值的 {{domxref("document.URL")}} 属性。
