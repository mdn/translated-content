---
title: Document.links
slug: Web/API/Document/links
---

{{ APIRef("DOM") }}

`links` 속성은 document 내에서 [href](/ko/docs/Web/API/URLUtils.href) attribute 를 가지는 모든 {{HTMLElement("area")}} 과 {{HTMLElement("a")}} element 들의 collection 을 반환한다.

## Syntax

```js
nodeList = document.links;
```

## Example

```js
var links = document.links;
for (var i = 0; i < links.length; i++) {
  var linkHref = document.createTextNode(links[i].href);
  var lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
