---
title: HTMLAnchorElement：hash 属性
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLHyperlinkElementUtils.hash`** 属性返回一个字符串，其中包含一个 `'#'`，后面是 URL 的片段标识符。

片段没有经过[百分号编码](https://zh.wikipedia.org/wiki/百分号编码)。如果 URL 没有包含片段标识符，这个属性为一个空的字符串，`""`。

## 值

一个字符串。

## 示例

### 从锚点链接获取 hash 值

给定 HTML 代码如下：

```html
<a id="myAnchor" href="/zh-CN/docs/HTMLAnchorElement#示例">示例</a>
```

你可以像这样获取锚点的 hash 值：

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // 返回 '#示例'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
