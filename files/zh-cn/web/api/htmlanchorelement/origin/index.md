---
title: HTMLHyperlinkElementUtils.origin
slug: Web/API/HTMLAnchorElement/origin
---

{{APIRef("URL API")}}

**`HTMLHyperlinkElementUtils.origin`** 只读属性是一个 {{domxref("USVString")}} ，其中包含代表 URL 的原始码的 Unicode 序列化，即：

- for URL using the `http` or `https`, the scheme followed by `'://'`, followed by the domain, followed by `':'`, followed by the port (the default port, `80` and `443` respectively, if explicitely specified);
- for URL using `file:` scheme, the value is browser dependant;
- for URL using the `blob:` scheme, the origin of the URL following `blob:`. E.g `"blob:https://mozilla.org"` will have `"https://mozilla.org".`

{{AvailableInWorkers}}

## Syntax

```plain
string = object.origin;
```

## Examples

```js
// On this page, returns the origin
var result = window.location.origin; // Returns:'https://developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLHyperlinkElementUtils")}} mixin it belongs to.
