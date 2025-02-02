---
title: "Window: focus event"
short-title: focus
slug: Web/API/Window/focus_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

**`focus`** 이벤트는 포커스가 된 요소에 발생합니다.

`focus` 이벤트의 반대 이벤트는 {{domxref("Window/blur_event", "blur")}} 입니다.

이 이벤트는 취소할 수 없고, 전파되지도 않습니다.

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}} 와 같은 메서드의 이벤트 이름을 사용하거나 이벤트 핸들러 속성을 설정합니다.

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## 이벤트 타입

{{domxref("FocusEvent")}} 입니다. {{domxref("UIEvent")}} 와 {{domxref("Event")}} 를 상속 받습니다.

{{InheritanceDiagram("FocusEvent")}}

## 이벤트 속성

이 인터페이스는 부모인 {{domxref("UIEvent")}} 를 상속받으며 간접적으로 {{domxref("Event")}} 또한 상속 받습니다.

- {{domxref("FocusEvent.relatedTarget")}}
  - : {{domxref("EventTarget")}}는 이 이벤트의 보조 대상을 나타냅니다. (페이지 내부나 외부에서 클릭하는 것과 같은) 일부 경우에는, 이 속성이 보안상의 이유로 `null` 로 설정됩니다.

## 예제

### 라이브 예제

이 예제는 문서에 포커스가 유실되었을 때의 모양이 어떻게 바뀌는지를 보여줍니다. `focus` 와 {{domxref("Window/blur_event", "blur")}} 를 확인하기 위해 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 가 사용되었습니다.

#### HTML

```html
<p id="log">문서를 클릭하여 포커스해 보세요.</p>
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
  log.textContent = "포커스 유실!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "이 문서는 포커스되었습니다. 문서의 바깥을 클릭하여 포커스를 유실시켜 보세요.";
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

## 같이 보기

- 연관 이벤트: {{domxref("Window/blur_event", "blur")}}
- `Element` 을 대상으로 하는 이벤트: {{domxref("Element/focus_event", "focus")}} 이벤트
