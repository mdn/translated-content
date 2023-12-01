---
title: scroll
slug: Web/API/Document/scroll_event
---

document view 나 element가 스크롤 될 때, **`scroll`** 이벤트가 발생합니다.

## 개요

| 인터페이스   | {{domxref("UIEvent")}}                                          |
| ------------ | --------------------------------------------------------------- |
| 버블         | element에는 없지만, document에서 실행될 때 버블링이 발생합니다. |
| 취소가능여부 | 불가                                                            |
| 타겟         | DefaultView, {{domxref("Document")}}, {{domxref("Element")}}    |
| 기본 액션    | 없음                                                            |

## 속성

| 속성                            | 타입                       | 설명                                                      |
| ------------------------------- | -------------------------- | --------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | 이벤트 대상 (DOM 트리의 최상위 타겟)                      |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | 이벤트의 타입                                             |
| `bubbles` {{readonlyInline}}    | {{domxref("Boolean")}}     | 이벤트가 버블이 되는지                                    |
| `cancelable` {{readonlyInline}} | {{domxref("Boolean")}}     | 이벤트 취소가 가능한지                                    |
| `view` {{readonlyInline}}       | {{domxref("WindowProxy")}} | {{domxref("Document.defaultView")}} (document의 `window`) |
| `detail` {{readonlyInline}}     | `long` (`float`)           | `0`.                                                      |

## 예제

### 스크롤 이벤트의 조절

`scroll` 이벤트가 빠른 속도로 실행될 수 있기 때문에, 이벤트 핸들러는 DOM 수정과 같이 느린 작업을 실행하지 말아야 합니다. 대신, 다음을 사용하여 이벤트를 제한하는 것을 권장합니다.
{{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{domxref("setTimeout()")}}, 혹은, {{domxref("CustomEvent")}}

그러나 입력 이벤트와 애니메이션 프레임은 거의 동일한 속도로 실행되므로 아래 최적화는 종종 불필요합니다. 다음은 `requestAnimationFrame`에 대한 `scroll`이벤트를 최적화하는 예제입니다.

```js
// 참조: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // scroll 위치에 대한 작업을 하세요
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Document: `scrollend` event](/ko/docs/Web/API/Document/scrollend_event)
- [Element: `scroll` event](/ko/docs/Web/API/Element/scroll_event)
- [Element: `scrollend` event](/ko/docs/Web/API/Element/scrollend_event)
