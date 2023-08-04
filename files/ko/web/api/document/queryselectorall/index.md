---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
---

{{APIRef("DOM")}}

{{domxref("Document")}} 메소드 **`querySelectorAll()`** 는 지정된 셀렉터 그룹에 일치하는 다큐먼트의 엘리먼트 리스트를 나타내는 정적(살아 있지 않은) {{domxref("NodeList")}} 를 반환합니다.

> **참고:** **노트:** 이 메소드는 {{domxref("ParentNode")}} 믹스인의 {{domxref("ParentNode.querySelectorAll", "querySelectorAll()")}} 메소드를 기반으로 구현되었습니다.

## 구문

```js
elementList = parentNode.querySelectorAll(selectors);
```

### 파라미터

- `selectors`
  - : 매칭할 하나 이상의 셀렉터를 포함하는 {{domxref("DOMString")}}. 이 스트링은 반드시 유효한 [CSS 셀렉터](/ko/docs/Web/CSS/CSS_Selectors)여야 합니다; 그렇지 않을 경우, `SyntaxError` 예외가 발생합니다. 엘리먼트 식별을 위한 셀렉터 사용의 자세한 내용은 [셀렉터로 DOM 엘리먼트 찾기](/ko/docs/Gecko_DOM_Reference/Locating_DOM_elements_using_selectors) 문서를 확인하세요. 콤마를 사용해 분리하여 다중 셀렉터를 지정할수도 있습니다.

> **참고:** **노트:** 표준 CSS 구문이 아닌 문자들은 역슬래시를 사용해 이스케이프해야 합니다. 자바스크립트가 역슬래시 이스케이핑을 사용한 이후로, 그러한 문자들을 사용하는 문자열 리터럴을 작성할 때 특별히 신경써야 합니다. 자세한 내용은 [이스케이프 표현](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84_%ED%91%9C%ED%98%84)을 확인하세요.

### 반환 값

지정한 셀렉터와 하나라도 일치하는 각 엘리먼트에 대한 하나의 {{domxref("Element")}} 를 포함하는 살아 있지 않은 {{domxref("NodeList")}}. 일치하는 것이 없는 경우에는 비어 있는 {{domxref("NodeList")}}.

> **참고:** **노트:** 지정한 `selectors` 가 [CSS 가상 엘리먼트](/ko/docs/Web/CSS/Pseudo-elements)를 포함하면, 반환 리스트는 항상 비어있습니다.

### 예외

- `SyntaxError`
  - : 지정한 `selectors` 문자열의 구문이 유효하지 않습니다.

## 예시

### 일치하는 리스트 얻기

다큐먼트에서 모든 {{HTMLElement("p")}} 엘리먼트의 {{domxref("NodeList")}} 를 얻으려면:

```js
var matches = document.querySelectorAll("p");
```

이 예시는 다큐먼트 내의 클래스가 "`note`" 또는 "`alert`" 인 모든 {{HTMLElement("div")}} 엘리먼트의 목록을 반환합니다.

```js
var matches = document.querySelectorAll("div.note, div.alert");
```

여기에서는, ID 가 `"test"` 인 컨테이너안에 위치하고 부모 엘리먼트가 {{domxref("div")}} 엘리먼트이며 클래스가 `"highlighted"` 인 `<p>` 엘리먼트의 리스트를 얻습니다.

```js
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

이 예시는 [속성 셀렉터](/ko/docs/Web/CSS/Attribute_selectors)를 사용해 다큐먼트에서 `"data-src"` 속성을 포함하는 {{domxref("iframe")}} 엘리먼트의 리스트를 반환합니다:

```js
var matches = document.querySelectorAll("iframe[data-src]");
```

여기에서는, ID 가 `"userlist"` 인 리스트 내에서 `"data-active"` 속성 값이 `"1"` 인 리스트 항목의 목록을 반환하는데 속성 셀렉터가 사용되었습니다:

```js
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");
```

### 일치 항목에 접근하기

일치하는 항목의 {{domxref("NodeList")}} 가 반환되면, 배열처럼 확인하실 수 있습니다. 배열이 비어있다면(`length` 프로퍼티가 0), 일치한 것을 발견하지 못한 것입니다.

다른 방법으로, 리스트의 컨텐츠에 접근하기위한 표준 배열 노테이션을 사용하실수도 있습니다. 다음과 같이 일반적인 모든 반복문을 사용하실 수 있습니다:

```js
var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function (userItem) {
  deleteUser(userItem);
});
```

## 사용자 노트

`querySelectorAll()` 은 대부분의 일반적인 자바스크립트 DOM 라이브러리와 다르게 동작하여 예상치못한 결과를 가져올 수 있습니다.

### HTML

세 번 중첩된 {{HTMLElement("div")}} 블록을 갖는 다음 HTML 을 고려해봅시다.

```html
<div class="outer">
  <div class="select">
    <div class="inner"></div>
  </div>
</div>
```

### 자바스크립트

```js
var select = document.querySelector(".select");
var inner = select.querySelectorAll(".outer .inner");
inner.length; // 1 입니다. 0 이 아닙니다!
```

클래스 `"select"` 를 갖는 `<div>` 컨텍스트에서 `".outer .inner"` 를 셀렉팅할 때, .outer 가 탐색을 수행하는 기본 엘리먼트(`".select"`)의 자손이 아님에도 클래스 `".inner"` 가 탐색됩니다. 기본적으로 `querySelectorAll()` 은 탐색 범위 내에서 셀렉터의 마지막 엘리먼트만을 검증합니다.

{{cssxref(":scope")}} 가상 클래스는 예상된 동작을하도록 하지만, 베이스 엘리먼트의 자손에 일치하는 셀렉터로만 제한됩니다:

```js
var select = document.querySelector(".select");
var inner = select.querySelectorAll(":scope .outer .inner");
inner.length; // 0
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- [셀렉터를 사용해 DOM 엘리먼트 찾기](/ko/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- CSS 가이드의 [속성 셀렉터](/ko/docs/Web/CSS/Attribute_selectors)
- MDN 학습 영역의 [속성 셀렉터](/ko/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors)
- {{domxref("Element.querySelector()")}} 와 {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} 와 {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} 와 {{domxref("ParentNode.querySelectorAll()")}}
- [`querySelector()` 코드 조각](/ko/docs/Archive/Add-ons/Code_snippets/QuerySelector)
