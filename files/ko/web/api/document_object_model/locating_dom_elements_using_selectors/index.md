---
title: 선택자로 DOM 요소 선택하기
slug: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
---

{{DefaultAPISidebar("DOM")}}

선택자 API는 DOM에서 {{domxref("Element")}} 노드를 선택자를 통해 빠르고 쉽게 가져올 수 있는 메서드를 제공합니다. 이 방법은 JavaScript 코드에서 반복문을 통해 특성 요소를 탐색하던 이전 방법보다 훨씬 빠릅니다.

## NodeSelector 인터페이스

본 명세는 {{domxref("Document")}}, {{domxref("DocumentFragment")}}, {{domxref("Element")}} 인터페이스를 구현하는 모든 객체에 메서드 두 개를 추가합니다.

- `querySelector`
  - : 노드의 하위 트리에서 첫 번째로 일치하는 {{domxref("Element")}} 노드를 반환합니다. 결과가 없으면 `null`을 반환합니다.
- `querySelectorAll`
  - : 노드의 하위 트리 안에서 일치하는 모든 `Element`를 포함한 {{domxref("NodeList")}}를 반환합니다. 결과가 없으면 빈 `NodeList`를 반환합니다.

> **참고:** The [`NodeList`](/ko/docs/DOM/NodeList) returned by [`querySelectorAll()`](/ko/docs/DOM/Element.querySelectorAll) is not live, which means that changes in the DOM are not reflected in the collection. This is different from other DOM querying methods that return live node lists.

You may find examples and details by reading the documentation for the [`querySelector()`](/ko/docs/DOM/Element.querySelector) and [`querySelectorAll()`](/ko/docs/DOM/Element.querySelectorAll) methods, as well as in the article [Code snippets for querySelector](/ko/docs/Code_snippets/QuerySelector).

## 선택자

The selector methods accept one or more comma-separated selectors to determine what element or elements should be returned. For example, to select all paragraph (`p`) elements in a document whose CSS class is either `warning` or `note`, you can do the following:

```js
var special = document.querySelectorAll("p.warning, p.note");
```

You can also query by ID. For example:

```js
var el = document.querySelector("#main, #basic, #exclamation");
```

After executing the above code, `el` contains the first element in the document whose ID is one of `main`, `basic`, or `exclamation`.

You may use any CSS selectors with the `querySelector()` and `querySelectorAll()` methods.

## 같이 보기

- [Selectors API](http://www.w3.org/TR/selectors-api/)
- [`element.querySelector`](/ko/docs/DOM/Element.querySelector)
- [`element.querySelectorAll`](/ko/docs/DOM/Element.querySelectorAll)
- [`document.querySelector`](/ko/docs/DOM/Document.querySelector)
- [`document.querySelectorAll`](/ko/docs/DOM/Document.querySelectorAll)
- [Code snippets for querySelector](/ko/docs/Code_snippets/QuerySelector)
