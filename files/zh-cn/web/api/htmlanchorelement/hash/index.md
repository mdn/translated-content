---
title: HTMLHyperlinkElementUtils.hash
slug: Web/API/HTMLAnchorElement/hash
---

{{ APIRef("URLUtils") }}

**`HTMLHyperlinkElementUtils.hash`** 属性返回一个包含“＃”的 {{domxref("DOMString")}} , 后跟 URL 的片段标识符。

片段没有[百分比解码](/zh-CN/docs/Glossary/percent-encoding)。如果 URL 没有包含片段标识符，这个属性为一个空的字符串，`""`.

## Syntax

```plain
string = object.hash;
object.hash = string;
```

## Examples

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/docs/HTMLHyperlinkElementUtils.href#youhou"> element be in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.hash; // Returns:'#youhou'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLHyperlinkElementUtils")}} interface it belongs to.
