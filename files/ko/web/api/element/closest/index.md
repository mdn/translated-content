---
title: Element.closest()
slug: Web/API/Element/closest
---

{{APIRef('DOM')}}

{{domxref("Element")}}의 **`closest()`** 메서드는 주어진 [CSS 선택자](/ko/docs/Learn/CSS/Building_blocks/Selectors)와 일치하는 요소를 찾을 때까지, 자기 자신을 포함해 위쪽(부모 방향, 문서 루트까지)으로 문서 트리를 순회합니다.

## 구문

```js
closest(selectors);
```

### 매개변수

- `selectors`
  - : {{domxref("Element")}}와 그 조상 요소들에 테스트할, 유효한 [CSS 선택자](/ko/docs/Learn/CSS/Building_blocks/Selectors) 문자열입니다.

### 반환 값

`selectors`에 일치하는 가장 가까운 조상 {{domxref("Element")}} 또는 자기 자신, 일치하는 요소가 없으면 `null`.

### 예외

- `SyntaxError` {{domxref("DOMException")}}
  - : `selectors`가 유효한 CSS 선택자가 아니면 발생합니다.

## 예제

### HTML

```html
<article>
  <div id="div-01">
    Here is div-01
    <div id="div-02">
      Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
const el = document.getElementById("div-03");

// ID가 "div-02"인 가장 가까운 조상
console.log(el.closest("#div-02")); // <div id="div-02">

// div 안에 놓인 div인 가장 가까운 조상
console.log(el.closest("div div")); // <div id="div-03">

// div면서 article을 부모로 둔 가장 가까운 조상
console.log(el.closest("article > div")); // <div id="div-01">

// div가 아닌 가장 가까운 조상
console.log(el.closest(":not(div)")); // <article>
```

## 폴리필

`element.closest()`는 지원하지 않지만, `element.matches()`(또는 공급자 접두사를 포함한 동일 메서드, 즉 IE9+)는 지원하는 브라우저를 위한 폴리필입니다.

```js
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
```

정말 IE 8을 지원해야 하는 경우, 아래의 폴리필을 사용하면 비록 느리게나마 같은 작업을 할 수 있습니다. 하지만 IE 8에서는 CSS 2.1 선택자만 사용할 수 있고, 이 폴리필을 실제 운영하는 웹 사이트에 적용하면 심각한 지연 시간의 원인이 될 수 있습니다.

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i,
      el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

### 호환성 참고사항

- Edge 15-18에서는 요소가 컨텍스트 객체(일반 DOM의 경우, {{domxref("Document")}})와 연결되지 않은 경우 `null`을 반환합니다. 따라서 `document.createElement(tagName).closest(tagName)`의 결과는 항상 `null`입니다.

## 같이보기

- [CSS 선택자 참고서](/ko/docs/Web/CSS/CSS_Selectors)
- 선택자를 받는 {{domxref("Element")}} 메서드: {{domxref("Element.querySelector()")}}, {{domxref("Element.querySelectorAll()")}}, {{domxref("Element.matches()")}}
