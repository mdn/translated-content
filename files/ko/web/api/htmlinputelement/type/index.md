---
title: "HTMLInputElement: type property"
short-title: type
slug: Web/API/HTMLInputElement/type
l10n:
  sourceCommit: e7bb84d5c6e135acde81d6dbeb2ea004e662070b
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLInputElement")}} 인터페이스의 **`type`** 속성은 숫자, 날짜, 이메일처럼 {{HTMLElement("input")}} 요소에 허용되는 데이터의 유형을 나타냅니다. 브라우저는 사용자가 유효한 값을 입력하도록 돕기 위해 적절한 위젯과 동작을 선택합니다.

{{HTMLElement("input")}} 요소의 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성을 반영합니다.

## 값

유형을 나타내는 문자열입니다.

가능한 값은 속성의 [input types](/ko/docs/Web/HTML/Element/input#input_types) 구획에 나열되어 있습니다.

## 예제

### HTML

```html
<input id="input1" type="date" />
```

### JavaScript

```js
const inputElement = document.querySelector("#input1");
console.log(inputElement.type); // 출력: "date"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLTextAreaElement.type")}} 속성
- {{domxref("HTMLButtonElement.type")}} 속성
