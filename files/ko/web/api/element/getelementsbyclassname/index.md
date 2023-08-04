---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
---

{{APIRef("DOM")}}

{{domxref("Element")}}의 메소드 **`getElementsByClassName()`** 는 주어진 클래스를 가진 모든 자식 엘리먼트의 실시간 {{domxref("HTMLCollection")}} 을 반환합니다.

{{domxref("Document")}}의 {{domxref("Document.getElementsByClassName", "getElementsByClassName()")}} 메소드는 도큐먼트 루트로부터 도큐먼트 전체를 탐색한다는 점을 제외하고는 동일하게 작동합니다.

## Syntax

```js
var elements = element.getElementsByClassName(names);
```

### Parameters

- `names`
  - : 검색할 클래스 혹은 클래스들을 띄어쓰기로 구분한 {{domxref("DOMString")}}

### Return value

실시간으로 업데이트되는 해당 클래스명을 가진 요소 목록의 {{domxref("HTMLCollection")}} 이 반환됩니다.

## Usage notes

항상 그렇듯, 반환되는 collection은 실시간입니다. 즉, 함수가 호출된 이후에도 DOM 트리의 현재 상태가 반영됩니다. `names` 에 해당하는 클래스를 가진 요소가 하위에 추가되면, 그 요소는 즉시 collection에 나타납니다. 비슷하게, `names` 에 매칭되는 클래스를 갖고 있지 않은 요소에 매칭되는 클래스명이 적용되면, 그 요소 역시 즉시 collection에 나타나게 됩니다.

반대도 역시 마찬가지입니다. 클래스명이 더 이상 `names` 와 일치하지 않게 되면, collection으로 부터 즉시 제거됩니다.

> **참고:** [호환모드](/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)에서는 클래스명의 대소문자를 구분하지 않습니다. 그 외의 경우에는, 대소문자를 구분합니다.

## Examples

### 단일 클래스 찾기

요소들 중 하나의 클래스를 포함하고 있는 요소를 검색하기 위해서는, 그 클래스명을 `getElementsByClassName()`의 인자로 넣으세요:

```js
element.getElementsByClassName("test");
```

아래의 예시는 `main` 이라는 `id` 를 가진 요소의 하위 요소들 중 `test`라는 클래스를 가진 모든 요소를 탐색합니다.

```js
document.getElementById("main").getElementsByClassName("test");
```

### 여러개의 클래스로 탐색하기

`red` 와 `test` 라는 클래스를 모두 포함하고 있는 요소를 탐색하기 위해서는 다음과 같이 합니다:

```js
element.getElementsByClassName("red test");
```

### 결과값 검토하기

collection의 개별 요소를 가져오기 위해 `HTMLCollection` 의{{domxref("HTMLCollection.item", "item()")}} 메소드를 이용하거나 표준 배열 문법을 사용할 수 있습니다. 아래는 잘못된 코드의 예시입니다. `"matches"` 는 `"colorbox"` 클래스가 삭제됨에 따라 바로 변경될것이기 때문에 **아래의 코드는 작동하지 않습니다.**

```js
var matches = element.getElementsByClassName("colorbox");

for (var i = 0; i < matches.length; i++) {
  matches[i].classList.remove("colorbox");
  matches.item(i).classList.add("hueframe");
}
```

대신 다른 방법을 사용하세요. 예시:

```js
var matches = element.getElementsByClassName("colorbox");

while (matches.length > 0) {
  matches.item(0).classList.add("hueframe");
  matches[0].classList.remove("colorbox");
}
```

위 코드는 `"colorbox"` 클래스를 가진 모든 자식 요소를 찾고, `item(0)` 을 호출해 `"hueframe"`이라는 클래스를 추가합니다 . 그리고 `"colorbox"` 클래스를 제거합니다(배열 표기법을 사용하여). 다른 요소 (만약 남아있다면) 가 `item(0)` 이 될 것입니다.

### 배열 함수를 이용해 결과값을 필터링하기

{{domxref("HTMLCollection")}}을 `this` 로 사용하면 {{jsxref("Array.prototype")}} 을 어떤 {{ domxref("HTMLCollection") }}에서든 사용할 수 있습니다. 아래의 예제에서는 `test` 클래스를 가진 모든 {{HTMLElement("div")}} 요소를 찾아봅니다 :

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "DIV";
  },
);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
