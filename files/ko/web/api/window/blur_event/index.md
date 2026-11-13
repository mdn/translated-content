---
title: "Window: blur event"
short-title: blur
slug: Web/API/Window/blur_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

**`blur`** 이벤트는 요소가 포커스를 잃었을 때 실행되는 이벤트입니다.

`blur` 이벤트의 반대 이벤트는 {{domxref("Window/focus_event", "focus")}} 입니다.

이 이벤트는 취소될 수 없고 버블링 효과를 일으키지 않습니다.

## 구문

이벤트 이름을 {{domxref("EventTarget.addEventListener", "addEventListener()")}}와 같은 메서드에서 사용하거나 이벤트 핸들러 속성을 설정해야 합니다.

```js
addEventListener("blur", (event) => {});

onblur = (event) => {};
```

## 이벤트 타입

{{domxref("FocusEvent")}} 입니다. {{domxref("UIEvent")}} 와 {{domxref("Event")}} 를 상속 받습니다.

{{InheritanceDiagram("FocusEvent")}}

## 이벤트 프로퍼티

이 인터페이스는 부모인 {{domxref("UIEvent")}} 의 속성을 상속 받지만, {{domxref("Event")}} 를 간접적으로 상속받기도 합니다.

- {{domxref("FocusEvent.relatedTarget")}}
  - : {{domxref("EventTarget")}} 는 이 이벤트의 보조 대상을 나타냅니다. (페이지를 탭으로 이동하거나 페이지에서 나갈 때와 같은) 몇 가지 경우에서 이 속성은 보안상의 이유로 `null` 로 설정될 수 있습니다.

## 예제

### 라이브 예제

이 예제는 포커스를 잃었을 때 문서의 형태를 바꿉니다. {{domxref("Window/focus_event", "focus")}} 와 `blur` 이벤트를 모니터하기 위해 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 가 사용됩니다.

#### HTML

```html
<p id="log">문서를 클릭하여 포커스 해 보세요.</p>
```

#### CSS

```css
.paused {
  background: #ddd;
  color: #555;
}
```

#### JavaScript

```js
function pause() {
  document.body.classList.add("paused");
  log.textContent = "FOCUS LOST!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "이 문서는 포커스되어 있습니다. 문서의 바깥을 클릭하여 포커스를 제거해 보세요.";
}

const log = document.getElementById("log");

window.addEventListener("blur", pause);
window.addEventListener("focus", play);
```

#### 결과

{{EmbedLiveSample("Live_example")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

{{DOMxRef("Document.activeElement")}} 의 값은 해당 이벤트가 처리되는 동안 브라우저마다 다른 양상을 띕니다. ([파이어폭스 버그 452307](https://bugzil.la/452307))에서는 IE10은 포커스가 이동할 요소로 설정이 되는 반면, 파이어폭스와 크롬은 주로 문서의 `body` 로 포커스를 설정합니다.

## 같이 보기

- 연관 이벤트: {{domxref("Window/focus_event", "focus")}}
- `Element` 타겟의 이벤트: {{domxref("Element/blur_event", "blur")}} 이벤트
