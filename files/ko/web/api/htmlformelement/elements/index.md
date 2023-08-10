---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLFormElement")}} 의 **{{domxref("HTMLFormElement.elements")}}** 속성은 {{HTMLElement("form")}} 요소에 포함된 모든 컨트롤 폼을 나열하는 {{domxref("HTMLFormControlsCollection")}}을 반환합니다.

{{domxref("HTMLFormElement.length")}} 속성을 독립적으로 사용하면 컨트롤 폼의 수만 얻을 수 있습니다.

인덱스나 요소의 `name` 또는 `id` 속성을 사용하여 반환된 컬렉션의 특정 컨트롤 폼에 액세스할 수 있습니다.

HTML 5 이전에는 `HTMLFormControlsCollection`을 기반으로 하는 {{domxref("HTMLCollection")}}을 반환하였습니다.

> **참고:** 문서의 {{HTMLElement("form")}} 속성을 사용해도 마찬가지로 주어진 문서에 포함된 모든 컨트롤 폼의 목록을 얻을 수 있습니다.

{{InheritanceDiagram(600,120)}}

## 값

이미지가 아닌 모든 컨트롤을 포함한 {{domxref("HTMLFormControlsCollection")}}를 가집니다. 이것은 라이브 컬렉션입니다. 컨트롤 폼이 컬렉션에 추가되거나 제거되면 이 컬렉션은 변경 사항을 반영하도록 업데이트됩니다.

반환된 컬렉션의 컨트롤 폼은 사전 순서, 깊이 우선 트리 순회를 따라 양식에 나타나는 순서와 동일합니다. 이것을 **트리 오더**라고 합니다.

다음 요소들만 반환합니다:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (단, [`type`](/ko/docs/Web/HTML/Element/input#type)이 `"image"`인 경우는 역사적으로 다른 기능을 위해 작동했기 때문에 생략됩니다.)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

## 예제

### 빠른 구문 예제

이 예제에서는 컨트롤 폼 목록을 얻는 방법과 인덱스 및 이름 또는 ID별로 해당 요소에 액세스하는 방법을 알아봅니다.

```html
<form id="my-form">
  <input type="text" name="username" />
  <input type="text" name="full-name" />
  <input type="password" name="password" />
</form>
```

```js
var inputs = document.getElementById("my-form").elements;
var inputByIndex = inputs[0];
var inputByName = inputs["username"];
```

### 컨트롤 폼에 액세스하기

이 예제에서는 폼의 요소 목록을 가져온 다음 목록을 반복하면서 {{HTMLElement("input/text", "text")}} 유형의 {{HTMLElement("input")}} 요소를 찾아 일부 형식의 처리를 수행할 수 있도록 합니다.

```js
var inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // Update text input
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### 폼 컨트롤 비활성화

```js
var inputs = document.getElementById("my-form").elements;

// Iterate over the form controls
for (i = 0; i < inputs.length; i++) {
  // Disable all form controls
  inputs[i].setAttribute("disabled", "");
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- The HTML element implementing this interface: {{ HTMLElement("form") }}.
