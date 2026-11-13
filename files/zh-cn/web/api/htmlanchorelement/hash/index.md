---
title: HTMLAnchorElement：hash 属性
short-title: hash
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLAnchorElement")}} 接口的 **`hash`** 属性是一个包含 `"#"` 符号，后面跟着 `<a>` 元素的 `href` 的片段标识符的字符串。如果 URL 没有片段标识符，则此属性包含一个空字符串，即 `""`。

参见 {{domxref("URL.hash")}} 以获取更多信息。

## 值

字符串。

## 示例

### 从锚点链接中获取散列值

给定 HTML

```html
<a id="myAnchor" href="/zh-CN/docs/Web/API/HTMLAnchorElement/hash#示例">
  示例
</a>
```

你可以像这样获取锚点散列值：

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
