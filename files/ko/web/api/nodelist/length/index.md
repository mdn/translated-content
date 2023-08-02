---
title: element.length
slug: Web/API/NodeList/length
---

{{ ApiRef() }}

## 요약

`length`는 `NodeList`의 항목수를 반환합니다.

## 구문

```js
numItems = nodeList.length;
```

- `numItems`은 `NodeList`의 항목수를 나타내는 정수값입니다.

## 예

```js
// 문서의 모든 paragraph
var items = document.getElementsByTagName("p");
// 목록의 각 항목에,
// HTML의 문자열로 전체 요소를 추가
var gross = "";
for (var i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}
// gross는 이제 모두 paragraph을 위한 HTML
```

## 주의

reference에서 이 페이지의 위치에도 불구하고, `length`는 [Element](/ko/DOM/element)의 프로퍼티가 아니고, `NodeList`의 프로퍼티입니다. NodeList 개체는 [document.getElementsByTagName](/ko/DOM/document.getElementsByTagName)과 같은 많은 DOM 메소드에서 반환됩니다.

`length`는 DOM 프로그래밍에서 아주 흔한 프로퍼티입니다. 위 예에서처럼 목록의 길이(적어도 있는 지 보기 위해)를 조사하고 for 루프에서 훑개(반복자, iterator)로 널리 쓰입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
