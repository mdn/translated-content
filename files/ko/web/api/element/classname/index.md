---
title: Element.className
slug: Web/API/Element/className
---

{{APIRef("DOM")}}

## 개요

**className** 특정 엘리먼트의 클래스 속성의 값을 가져오거나 설정할 수 있다.

## 문법

```js
var cName = elementNodeReference.className;
elementNodeReference.className = cName;
```

- _cName은 현재 요소의 클래스 혹은 공백으로 구분된 클래스들을 표현하는 문자열 변수이다._

## 예제

```js
let elm = document.getElementById("item");

if (elm.className === "active") {
  elm.className = "inactive";
} else {
  elm.className = "active";
}
```

## 주의

많은 언어에서 DOM 조작을 위해 사용되는 "class " 키워드와의 혼란을 줄이기 위하여 class 대신 className이라는 프로퍼티 명을 사용한다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 살펴보기

- {{domxref("element.classList")}}
