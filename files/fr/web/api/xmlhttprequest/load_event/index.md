---
title: XMLHttpRequestEventTarget.onload
slug: Web/API/XMLHttpRequest/load_event
---

{{APIRef("XMLHttpRequest")}}

The **`XMLHttpRequestEventTarget.onload`** is the function called when an {{domxref("XMLHttpRequest")}} transaction completes successfully.

## Syntaxe

```js
XMLHttpRequest.onload = callback;
```

### Values

- `callback` is the function to be executed when the request completes successfully. It receives a {{domxref("ProgressEvent")}} object as its first argument. The value of _this_ (i.e. the context) is the same {{domxref("XMLHttpRequest")}} this callback is related to.

## Example

```js
var xmlhttp = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";

xmlhttp.open(method, url, true);
xmlhttp.onload = function () {
  // Do something with the retrieved data ( found in xmlhttp.response )
};
xmlhttp.send();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
