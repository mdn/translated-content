---
title: Document.createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
---

{{ApiRef("DOM")}}

새로운 빈 {{domxref("DocumentFragment")}} 를 생성합니다.

## Syntax

```js
var docFragment = document.createDocumentFragment();
```

`docFragment` 는 빈 {{domxref("DocumentFragment")}} 객체를 나타냅니다.

## Description

`DocumentFragment`s 는 DOM 노드들 입니다. 이것들은 메인 DOM 트리의 일부가 되지 않습니다. 일반적인 유즈 케이스는 다큐먼트 조각을 생성하고, 엘리먼트들을 다큐먼트 조각에 추가하고 그 다큐먼트 조각을 DOM 트리에 추가하는 것입니다. DOM 트리 내에서 다큐먼트 조각은 그것의 모든 자식들로 대체됩니다.

메모리 내에 다큐먼트 조각이 존재하고 메인 DOM 트리의 일부가 아니라면, 이것에 자식들을 추가하는 것은 페이지 [reflow](https://developers.google.com/speed/articles/reflow?csw=1) (엘리먼트의 위치와 좌표의 계산) 를 유발하지 않습니다. 따라서, 다큐먼트 조각을 사용하는 것은 보통 [better performance](http://ejohn.org/blog/dom-documentfragments/) 의 결과를 가져옵니다.

## Example

```js
var ul = document.getElementsByTagName("ul")[0]; // assuming it exists
var docfrag = document.createDocumentFragment();
var browserList = ["Internet Explorer", "Firefox", "Safari", "Chrome", "Opera"];

browserList.forEach(function (e) {
  var li = document.createElement("li");
  li.textContent = e;
  docfrag.appendChild(li);
});

ul.appendChild(docfrag);
// a list with well-known web browsers
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
