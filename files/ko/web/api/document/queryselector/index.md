---
title: Document.querySelector()
slug: Web/API/Document/querySelector
---

{{ApiRef("DOM")}}

**`Document.querySelector()`** 는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 {{domxref("Element")}}를 반환합니다. 일치하는 요소가 없으면 `null`을 반환합니다.

> **참고:** 탐색은 깊이우선depth-first 전위pre-order순회로, 문서의 첫 번째 요소부터 시작해 자식 노드의 수를 기준으로 순회합니다.

## 구문

```js
document.querySelector(selectors);
```

### 매개변수

- `selectors`
  - : 하나 이상의 선택자를 포함한 {{domxref("DOMString")}}. 유효한 CSS 선택자여야만 하며 아닐 경우 `SYNTAX_ERR` 예외가 발생합니다. [선택자로 DOM 요소 선택하기](/ko/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) 문서를 참고해 선택자와 선택자 작성 방법을 더 알아보세요.

> **참고:** CSS 표준 구문이 포함하는 문자가 아닌 경우 역슬래시(`\`)로 이스케이프해야 합니다.
>
> JavaScript 또한 역슬래시로 이스케이프를 하기 때문에 특히 주의를 기울여야 합니다. 자세한 내용은 [특수 문자 이스케이프](#특수_문자_이스케이프) 항목을 참고하세요.

### 반환값

제공한 [CSS 선택자](/ko/docs/Web/CSS/CSS_%EC%84%A0%ED%83%9D%EC%9E%90)를 만족하는 첫 번째 {{domxref("Element")}} 객체. 결과가 없다면 `null`.

선택자를 만족하는 모든 요소의 목록이 필요하다면 {{domxref("Document.querySelectorAll", "querySelectorAll()")}}을 대신 사용하세요.

### 예외

- `SYNTAX_ERR`
  - : `selectors`의 구문이 유효하지 않음.

## 참고

만약 `selector`가 ID 선택자인데, 해당 ID를 잘못 사용하여 문서 내에 여러 번 사용했으면 첫 번째로 그 ID를 사용한 요소를 반환합니다.

[CSS 의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 [선택자 API](http://www.w3.org/TR/selectors-api/#grammar)가 명시한 대로 어떠한 요소도 반환하지 않습니다.

### 특수 문자 이스케이프

CSS 구문을 따르지 않는, 예컨대 콜론이나 공백을 포함한 선택자나 ID를 사용해야 하면 반드시 백슬래시("`\`")를 사용해 해당 문자를 이스케이프해야 합니다. 백슬래시는 JavaScript의 이스케이프 문자이기 때문에, 백슬래시를 문자로 입력하려면 반드시 두 번 이스케이프해야 합니다. 한 번은 JavaScript 문자열에 필요하고, 또 다른 한 번은 `querySelector()`에 필요합니다.

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log("#foo\bar"); // "#fooar" ('\b'는 백스페이스 컨트롤 문자)
  document.querySelector("#foo\bar"); // 일치하는 요소 없음

  console.log("#foo\\bar"); // "#foo\bar"
  console.log("#foo\\\\bar"); // "#foo\\bar"
  document.querySelector("#foo\\bar"); // 첫 번째 <div>

  document.querySelector("#foo:bar"); // 일치하는 요소 없음
  document.querySelector("#foo\\:bar"); // 두 번째 <div>
</script>
```

## 예제

### 클래스를 만족하는 첫 번째 요소 검색

아래 예제는 문서에서 "`myclass`"라는 클래스를 사용하는 첫 번째 요소를 반환합니다.

```js
var el = document.querySelector(".myclass");
```

### 좀 더 복잡한 선택자

아래 예제처럼 정말 강력한 선택자도 사용할 수 있습니다. 예제의 결과는 클래스가 "`user-panel main`"인 {{HTMLElement("div")}}(`<div class="user-panel main">`) 안의, 이름이 "`login`"인 {{HTMLElement("input")}} 중 첫 번째 요소입니다.

```js
var el = document.querySelector("div.user-panel.main input[name=login]");
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- [선택자로 DOM 요소 선택하기](/ko/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- {{domxref("element.querySelector()")}}
- {{domxref("document.querySelectorAll()")}}
- {{domxref("element.querySelectorAll()")}}
