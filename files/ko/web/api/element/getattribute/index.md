---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
---
{{APIRef}}

## 요약

`getAttribute()` 은 해당 요소에 지정된 값을 반환 합니다. 만약 주어진 속성이 존재 하지 않는 다면, null 값이나 ""(빈문자열); 을 반환 할 것입니다. 자세한 사항은 [Notes](#notes) 참조 하십시오.

## 문법

```js
var attribute = element.getAttribute(attributeName);
```

- `attribute`는 `attributeName`의 값을 가지고 있는 문자열입니다.
- `attributeName`은 값을 얻고자 하는 속성의 이름입니다.

## 예제

```js
let div1 = document.getElementById("div1");
let align = div1.getAttribute("align");

alert(align); // id가 "div1"인 요소(element)의 align 값을 보여줍니다.
```

## Notes

When called on an HTML element in a DOM flagged as an HTML document, `getAttribute()` lower-cases its argument before proceeding.

Essentially all web browsers (Firefox, Internet Explorer, recent versions of Opera, Safari, Konqueror, and iCab, as a non-exhaustive list) return `null` when the specified attribute does not exist on the specified element; this is what [the current DOM specification draft](http://dom.spec.whatwg.org/#dom-element-getattribute) specifies. The old DOM 3 Core specification, on the other hand, says that the correct return value in this case is actually the _empty string_, and some DOM implementations implement this behavior. The implementation of `getAttribute()` in XUL (Gecko) actually follows the DOM 3 Core specification and returns an empty string. Consequently, you should use {{domxref("element.hasAttribute()")}} to check for an attribute's existence prior to calling `getAttribute()` if it is possible that the requested attribute does not exist on the specified element.

## 브라우저 호환성

{{Compat}}

## Specification

- [DOM Level 2 Core: getAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-666EE0F9) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute))
- [HTML 5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
