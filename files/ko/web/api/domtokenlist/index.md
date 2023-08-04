---
title: DOMTokenList
slug: Web/API/DOMTokenList
---

{{APIRef("DOM")}}

The **`DOMTokenList`** interface represents a set of space-separated tokens. Such a set is returned by {{domxref("Element.classList")}}, {{domxref("HTMLLinkElement.relList")}}, {{domxref("HTMLAnchorElement.relList")}}, {{domxref("HTMLAreaElement.relList")}}, {{domxref("HTMLIframeElement.sandbox")}}, or {{domxref("HTMLOutputElement.htmlFor")}}. It is indexed beginning with `0` as with JavaScript {{jsxref("Array")}} objects. `DOMTokenList` is always case-sensitive.

## Properties

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : Is an `integer` representing the number of objects stored in the object.
- {{domxref("DOMTokenList.value")}}
  - : The value of the list as a {{domxref("DOMString")}}.

## Methods

- {{domxref("DOMTokenList.item()")}}
  - : Returns an item in the list by its index (returns `undefined` if the number is greater than or equal to the length of the list).
- {{domxref("DOMTokenList.contains()")}}
  - : Returns `true` if the list contains the given _token_, otherwise `false`.
- {{domxref("DOMTokenList.add()")}}
  - : Adds the given _token_ to the list.
- {{domxref("DOMTokenList.remove()")}}
  - : Removes the specified _token_ from the list.
- {{domxref("DOMTokenList.replace()")}}
  - : Replaces an existing _token_ with a new token.
- {{domxref("DOMTokenList.supports()")}}
  - : Returns `true` if a given _token_ is in the associated attribute's supported tokens.
- {{domxref("DOMTokenList.toggle()")}}
  - : Removes a given _token_ from the list and returns `false`. If _token_ doesn't exist it's added and the function returns `true`.
- {{domxref("DOMTokenList.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}} allowing you to go through all key/value pairs contained in this object.
- {{domxref("DOMTokenList.forEach()")}}
  - : Executes a provided function once per `DOMTokenList` element.
- {{domxref("DOMTokenList.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing you to go through all keys of the key/value pairs contained in this object.
- {{domxref("DOMTokenList.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing you to go through all values of the key/value pairs contained in this object.

## Examples

In the following simple example we retrieve the list of classes set on a {{htmlelement("p")}} element as a `DOMTokenList` using {{domxref("Element.classList")}}, add a class using {{domxref("DOMTokenList.add()")}}, and then update the {{domxref("Node.textContent")}} of the `<p>` to equal the `DOMTokenList`.

First, the HTML:

```html
<p class="a b c"></p>
```

Now the JavaScript:

```js
var para = document.querySelector("p");
var classes = para.classList;
para.classList.add("d");
para.textContent = 'paragraph classList is "' + classes + '"';
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Trimming of whitespace and removal of duplicates

Methods that modify the `DOMTokenList` (such as {{domxref("DOMTokenList.add()")}}) automatically trim any excess {{Glossary("Whitespace")}} and remove duplicate values from the list. For example:

```html
<span class="    d   d e f"></span>
```

```js
var span = document.querySelector("span");
var classes = span.classList;
span.classList.add("x");
span.textContent = 'span classList is "' + classes + '"';
```

The output looks like this:

{{ EmbedLiveSample('Trimming_of_whitespace_and_removal_of_duplicates', '100%', 60) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("DOMSettableTokenList")}} (object that extends `DOMTokenList` with settable _.value_ property)
