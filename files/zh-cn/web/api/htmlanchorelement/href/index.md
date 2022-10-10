---
title: HTMLHyperlinkElementUtils.href
slug: Web/API/HTMLAnchorElement/href
---

{{ApiRef("URL API")}}

**`HTMLHyperlinkElementUtils.href`** 属性是一个包含整个 URL 的 {{domxref("USVString")}}。

## Syntax

```plain
string = object.href;
object.href = string;
```

## Examples

```js
// Lets imagine an <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLHyperlinkElementUtils/href"> element is in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.href; // Returns: 'https://developer.mozilla.org/en-US/HTMLHyperlinkElementUtils/href'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLHyperlinkElementUtils")}} mixin it belongs to.
