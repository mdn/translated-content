---
title: "Document: keyup event"
slug: Web/API/Element/keyup_event
---

{{APIRef}}

**`keyup`**키를 놓을 때 이벤트가 발생합니다.

| 거품               | 예                                                      |
| ------------------ | ------------------------------------------------------- |
| 취소 가능          | 예                                                      |
| 상호 작용          | {{domxref ( "KeyboardEvent")}}                          |
| 이벤트 핸들러 속성 | {{domxref ( "GlobalEventHandlers.onkeyup", "onkeyup")}} |

{{domxref ( "Document / keydown_event", "keydown")}} 및 `keyup`이벤트는 어떤 키를 눌렀는지 나타내는 코드를 제공하고 {{domxref ( "Document / keypress_event", "keypress")}} 는 입력 된 _문자를_ 나타냅니다. . 예를 들어, 소문자 "a"는 `keydown`및 `keyup`에서는 65로보고 되지만에서는 97 로보고 됩니다 `keypress`. 모든 이벤트에서 대문자 "A"는 65로보고됩니다.

> **참고 :** 입력 값의 변경에 대응하는 방법을 찾고 있다면 `[input event](/ko/docs/Web/API/HTMLElement/input_event)`를 사용해야합니다. `keyup` 예를 들어 컨텍스트 메뉴의 텍스트를 텍스트 입력에 붙여 넣는 등의 일부 변경 사항은에서 감지 할 수 없습니다.

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // 무언가를합니다
});
```

## 예

이 예에서는 키를 놓을 때마다 {{domxref ( "KeyboardEvent.code")}} 값을 기록합니다.

### addEventListener 키업 예제

```html
<p>먼저 IFrame에 초점을 맞춘 다음 (예 : 클릭하여) 몇 가지 키를 눌러보십시오.</p>
<p id="log"></p>
```

```js
const log = document.getElementById ( 'log');

document.addEventListener ( 'keyup', logKey);

function logKey (e) {
  log.textContent + =`$ {e.code}`;
}
```

{{EmbedLiveSample ( "addEventListener_keyup_example")}}

### onkeyup 해당

```js
document.onkeyup = logKey;
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 또한보십시오

- {{domxref ( "Document / keydown_event", "keydown")}}
- {{domxref ( "Document / keypress_event", "keypress")}}
- {{domxref ( "Element")}} : {{domxref ( "Element / keyup_event", "keyup")}} 이벤트
