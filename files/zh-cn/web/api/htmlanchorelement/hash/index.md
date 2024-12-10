---
title: HTMLAnchorElement：hash 属性
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: 3e301467a02808e9fc488d7012f1f49eb66a5980
---

{{ APIRef("HTML DOM") }}

**`HTMLAnchorElement.hash`** 属性返回一个字符串，该字符串包含一个 `'#'` 符号，后面跟着 URL 的片段标识符。

片段是[百分号编码](/zh-CN/docs/Glossary/Percent-encoding)的。如果 URL 没有片段标识符，则此属性包含一个空字符串，即 `""`。

## 值

一个字符串。

## 示例

### 从锚点链接中获取哈希值

给定 HTML

```html
<a id="myAnchor" href="/zh-CN/docs/Web/API/HTMLAnchorElement/hash#示例">
  示例
</a>
```

你可以像这样获取锚点哈希值：

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // “#%E7%A4%BA%E4%BE%8B”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
