---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
---

{{APIRef("DOM")}}

## 摘要

`getAttribute()` 函式會回傳該網頁元素的屬性。 如果該屬性不存在，其回傳值會是`null或` `""` (空字串); 詳見 [Notes](#notes) 。

## 語法

```plain
var attribute = element.getAttribute(attributeName);
```

where

- `attribute` is a string containing the value of `attributeName`.
- `attributeName` is the name of the attribute whose value you want to get.

## Example

```js
var div1 = document.getElementById("div1");
var align = div1.getAttribute("align");

alert(align); // shows the value of align for the element with id="div1"
```

## Notes

When called on an HTML element in a DOM flagged as an HTML document, `getAttribute()` lower-cases its argument before proceeding.

Essentially all web browsers (Firefox, Internet Explorer, recent versions of Opera, Safari, Konqueror, and iCab, as a non-exhaustive list) return `null` when the specified attribute does not exist on the specified element and this is what [the current DOM specification draft](http://dom.spec.whatwg.org/#dom-element-getattribute) specifies. The old DOM 3 Core specification, on the other hand, says that the correct return value in this case is actually the _empty string_, and some DOM implementations implement this behavior. The implementation of getAttribute in XUL (Gecko) actually follows the DOM 3 Core specification and returns an empty string. Consequently, you should use {{domxref("element.hasAttribute()")}} to check for an attribute's existence prior to calling `getAttribute()` if it is possible that the requested attribute does not exist on the specified element.

## Browser compatibility

{{Compat}}

## Specification

- [DOM Level 2 Core: getAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-666EE0F9) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute))
- [HTML 5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
