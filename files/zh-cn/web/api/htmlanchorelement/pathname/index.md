---
title: HTMLHyperlinkElementUtils.pathname
slug: Web/API/HTMLAnchorElement/pathname
---

{{ApiRef("URL API")}}

**`HTMLHyperlinkElementUtils.pathname`** 属性是一个 {{domxref("USVString")}} ，其中包含一个初始的'/'后跟 URL 的路径。

## Syntax

```plain
string = object.pathname;
object.pathname = string;
```

## Examples

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/docs/HTMLHyperlinkElementUtils.pathname"> element be in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.pathname; // Returns:'/zh-CN/docs/HTMLHyperlinkElementUtils.pathname'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLHyperlinkElementUtils")}} mixin it belongs to.
