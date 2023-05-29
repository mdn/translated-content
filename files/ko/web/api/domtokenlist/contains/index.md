---
title: DOMTokenList.contains()
slug: Web/API/DOMTokenList/contains
---

{{APIRef("DOM")}}

The **`contains()`** method of the {{domxref("DOMTokenList")}} interface returns a {{domxref("Boolean")}} — `true` if the underlying list contains the given _token_, otherwise `false`.

## Syntax

```js
tokenList.contains(token);
```

### Parameters

- token
  - : A {{domxref("DOMString")}} representing the token you want to check for the existance of in the list.

### Return value

A {{domxref("Boolean")}} — `true` if the underlying list contains the given _token_, otherwise `false`.

## Examples

In the following example we retrieve the list of classes set on a {{htmlelement("span")}} element as a `DOMTokenList` using {{domxref("Element.classList")}}. We then test for the existance of "c" in the list, and write the result into the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
var span = document.querySelector("span");
var classes = span.classList;
var result = classes.contains("c");
if(result) {
  span.textContent = "The classList contains 'c'";
} else {
   span.textContent = "The classList does not contain 'c'";
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
