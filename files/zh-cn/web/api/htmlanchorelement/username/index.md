---
title: HTMLHyperlinkElementUtils.username
slug: Web/API/HTMLAnchorElement/username
---

{{ApiRef("URL API")}}

**`HTMLHyperlinkElementUtils.username`** 属性是一个 {{domxref("USVString")}}包含域名前面指定的用户名。

## Syntax

```plain
string = object.username;
object.username = string;
```

## Examples

```js
// Let's <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/zh-CN/docs/HTMLHyperlinkElementUtils.username"> be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.username; // Returns:'anonymous'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLHyperlinkElementUtils")}} interface it belongs to.
