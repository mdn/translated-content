---
title: Element.closest()
slug: Web/API/Element/closest
translation_of: Web/API/Element/closest
---
{{APIRef('DOM')}}기준 {{domxref("Element")}} 에서부터 **`closest()`** 메소드를 통해 자신부터 부모 요소 단위로 출발하여 각 요소가 지정한 선택자에 만족할 때까지 탐색한다(문서 루트까지 이동). 이 중 가장 가깝게 조건에 만족한 부모 요소가 반환되며, 조건에 만족한 요소가 없으면 `null` 값을 반환한다.

## Syntax

    var closestElement = targetElement.closest(selectors);

### Parameters

- `selectors` CSS 선택자가 들어가는 {{domxref("DOMString")}} 개체 문자열, 예)
  `"p:hover, .toto + q"`.

### Result value

- `closestElement` 기준 요소를 포함하여 부모 요소 단위로 선택자 조건에 가장 가까운 {{domxref("Element")}} 객체를 가져오며, `null` 값이 될 수 있다.

### Exceptions

- {{exception("SyntaxError")}} : CSS 선택자 (`selectors`)가 올바른 선택자 식이 아닐 경우.

## Example

### HTML

```html
<article>
  <div id="div-01">Here is div-01
    <div id="div-02">Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// id=div-02 조건이 만족하므로 속성을 가진 부모 요소가 반환된다.

var r2 = el.closest("div div");
// div 요소에 만족한 요소 중 div 자식을 가리키므로, id=div-03 자신이 만족된다.

var r3 = el.closest("article > div");
// 가장 가까운 article 요소 바로 하위의 div 요소 id=div-01 속성을 가진 요소가 반환된다.

var r4 = el.closest(":not(div)");
// div 요소가 아닌 가장 가까운 부모 article 요소가 반환된다.
```

## Polyfill

아래 폴리필은 `Element.closest()`, 메소드를 지원하지 않는 브라우저를 위한 방법이지만, `element.matches()` 메소드를 사용하므로 IE 9 이상에서 동작한다.

```js
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
```

만약 정말 IE 8 지원을 고려해야 한다면, 아래 폴리필을 사용할 수 있다. 그러나 해당 폴리필은 성능이 매우 느리며, IE 8 특성 상 CSS 2.1 사양의 선택자까지밖에 사용할 수 없다. 또한 실제 운영 시 약간의 지연이 발생할 수 있다.

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement));
    return el;
  };
}
```

## 규격

| Specification                                                                                    | Status                           | Comment             |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-closest', 'Element.closest()')}} | {{Spec2('DOM WHATWG')}} | Initial definition. |

## 브라우저 호환성

{{Compat("api.Element.closest")}}

### Compatibility notes

- Edge 15-18 브라우저에서는, `document.createElement(tagName).closest(tagName)` 식이 직접적이던 간접적이던 요소와 연결되지 않았다면 `null` 값을 반환한다. 예를 들면, [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document "The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.")객체 내에서 생성한 일반 DOM 요소에서 일어난다.

## 같이보기

- {{domxref("Element")}} 인터페이스.
- <div class="syntaxbox"><a href="/en-US/docs/Web/Guide/CSS/Getting_started/Selectors">선택자 구문</a></div>
- <div class="syntaxbox">선택자 구문을 사용하는 다른 메소드: {{domxref("element.querySelector()")}} 및 {{domxref("element.matches()")}}.</div>
