---
title: Document：URL 属性
slug: Web/API/Document/URL
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 **`URL`** 只读属性以字符串形式返回文档位置。

## 值

包含文档 URL 的字符串。

## 示例

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
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

- 返回相同值的 {{domxref("document.documentURI")}} 属性。
