---
title: HTMLHyperlinkElementUtils.password
slug: Web/API/HTMLAnchorElement/password
---

{{ApiRef("URL API")}}

HTMLHyperlinkElementUtils**`.password`** property 属性是一个{{domxref("USVString")}} ，包含域名前面指定的密码。

如果在没有首先设置[`用户名`](/zh-CN/docs/Web/API/HTMLHyperlinkElementUtils/username)属性的情况下设置，则会静默失败。

## Syntax

```plain
string = object.password;
object.password = string;
```

## Examples

```js
// Let's <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/zh-CN/docs/HTMLHyperlinkElementUtils.username"> be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.password; // Returns:'flabada'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLHyperlinkElementUtils")}} mixin it belongs to.
