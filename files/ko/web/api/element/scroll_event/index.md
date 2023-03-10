---
title: GlobalEventHandlers.onscroll
slug: Web/API/Element/scroll_event
original_slug: Web/API/GlobalEventHandlers/onscroll
---

{{ApiRef("HTML DOM")}}{{domxref("GlobalEventHandlers")}} 의 **`onscroll`** 이벤트는 {{event("Event_handlers", "event handler")}} 의 `scroll` 이벤트를 상속받았습니다.document view 나 element 가 스크롤이 됬을 때 이벤트가 발생합니다.

> **참고:** `onscroll` 과 {{domxref("GlobalEventHandlers.onwheel", "onwheel")}} 이벤트를 혼동하지 마세요. `onwheel` 보통 휠의 회전을 처리하고, `onscroll`은 객체의 내용의 스크롤을 처리합니다.

## Syntax

```js
target.onscroll = functionRef;
```

### Value

`functionRef` 은(는) 함수 표현식 또는 함수 이름 이며, 이 객체는 오직 {{domxref("UIEvent")}} 객체만 인수로 받습니다.

오직 하나의 `onscroll` 이벤트만 하나의 객체에 할당 할 수 있습니다. [`EventTarget.addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener) 를 사용하여 [`scroll`](/ko/docs/Web/Reference/Events/scroll) 이벤트를 정의 할 수 있습니다.

## Example

다음 예제는 {{HtmlElement("textarea")}}에 발생한 스크롤 이벤트 결과를 출력해 줍니다.

### HTML

```html
<textarea>1 2 3 4 5 6 7 8 9</textarea>
<p id="log"></p>
```

### CSS

```css
textarea {
  width: 4rem;
  height: 8rem;
  font-size: 3rem;
}
```

### JavaScript

```js
const textarea = document.querySelector('textarea');
const log = document.getElementById('log');

textarea.onscroll = logScroll;

function logScroll(e) {
  log.textContent = `Scroll position: ${e.target.scrollTop}`;
}
```

### Result

{{EmbedLiveSample("Example", 700, 200)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Document: `scroll` event](/ko/docs/Web/API/Document/scroll_event)
- [Element: `scroll` event](/ko/docs/Web/API/Element/scroll_event)
