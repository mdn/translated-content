---
title: KeyboardEvent.key
slug: Web/API/KeyboardEvent/key
---

{{APIRef("UI Events")}}

{{domxref("KeyboardEvent")}} 인터페이스의 읽기 전용 속성인 **`key`** 는 키보드 로케일과 레이아웃뿐만 아니라 <kbd>Shift</kbd>와 같은 보조 키의 상태까지 고려하여, 사용자가 누른 키의 값을 반환합니다.

## 값

문자열입니다.

이 값은 다음과 같이 결정됩니다.

- 만약 눌린 키의 값이 인쇄 가능할 경우, 반환되는 값은 키의 인쇄 가능한 값을 나타내는 비어 있지 않은 유니코드 문자열입니다.
- 만약 눌린 키가 제어 문자 또는 특수 문자라면, 반환되는 값은 [사전 정의된 key 값들의 목록](/ko/docs/Web/API/KeyboardEvent/key/Key_Values) 중의 하나입니다.
- 만약 `KeyboardEvent` 가 [dead key](https://wikipedia.org/wiki/Dead_key)의 눌림을 나타낸다면, 키의 값은 "`Dead`"여야 합니다.
- Windows에서는 일부 특수 키보드의 키(멀티미디어 키보드에서 미디어를 제어하는 확장 키 등)들의 키 코드가 만들어지지 않습니다. 대신에 이 키들은 `WM_APPCOMMAND` 이벤트를 발생시킵니다. 이 이벤트들은 실제 키 코드가 아니더라도 DOM 키보드 이벤트에 매핑되어 있으며, Windows의 "Virtual key codes"에 명시되어 있습니다.
- 키를 식별할 수 없는 경우, 반환되는 값은 `Unidentified`입니다.

> **콜아웃:**
>
> [key 값들의 전체 목록을 확인하려면 누르세요](/ko/docs/Web/API/KeyboardEvent/key/Key_Values).

## KeyboardEvent 시퀀스

모든 `KeyboardEvent` 는 미리 정해진 시퀀스 안에서 발생합니다. 키가 눌렸을 때, {{domxref("Event.preventDefault")}}가 호출되지 않았다고 가정하면 `KeyboardEvent` 의 시퀀스는 다음과 같습니다.

1. {{domxref("Element/keydown_event", "keydown")}} 이벤트가 먼저 발생합니다. 만약 키가 추가로 눌리고 그 키가 문자 키를 생성한다면, 이벤트는 플랫폼 구현에 의존하는 간격으로 계속 발생하고, 읽기 전용 속성인 {{domxref("KeyboardEvent.repeat")}}는 `true`로 설정됩니다.
2. 만약 키가 {{HTMLElement("input")}}, {{HTMLElement("textarea")}} 또는 {{domxref("HTMLElement.contentEditable")}}이 true로 설정된 요소 안에 삽입될 수 있는 문자 키를 생성하는 경우, {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} 과 {{domxref("HTMLElement/input_event", "input")}} 이벤트 타입이 순서대로 실행됩니다. 일부 다른 구현에서는 `keypress` 이벤트가 지원된다면 {{domxref("Element/keypress_event", "keypress")}}를 발생시킬 수 있음에 주의해야 합니다. 이 이벤트들은 키를 누르고 있는 동안 반복해서 발생하게 됩니다.
3. 키를 떼면 {{domxref("Element/keyup_event", "keyup")}} 이벤트가 발생합니다. 이것으로 프로세스가 완료됩니다.

시퀀스 1과 3에서 `KeyboardEvent.key` 속성이 정의되고, 앞서 정의되어 있는 규칙에 따라 적절한 값으로 설정됩니다.

## KeyboardEvent 시퀀스 예제

영국식 키보드 레이아웃을 사용할 때와 비교해서, 미국식 키보드 레이아웃을 사용한 <kbd>Shift</kbd> 와 <kbd>2</kbd> 키의 상호작용에서 발생하는 이벤트 시퀀스에 대해 고려해 보겠습니다.

다음의 두 개의 테스트 케이스를 사용하여 실험해 보세요.

1. <kbd>Shift</kbd> 키를 누르면서,

   <kbd>2</kbd> 키를 누른 다음 떼세요. 그 다음

   <kbd>Shift</kbd> 키를 떼세요.

2. <kbd>Shift</kbd> 키를 누르면서,

   <kbd>2</kbd> 키를 누르고 있으세요. 그 다음

   <kbd>Shift</kbd> 키를 떼세요. 마지막으로

   <kbd>2</kbd> 키를 떼세요.

### HTML

```html
<div class="fx">
  <div>
    <textarea rows="5" name="test-target" id="test-target"></textarea>
    <button type="button" name="btn-reset" id="btn-reset">Reset</button>
  </div>
  <div class="flex">
    <pre id="console-log"></pre>
  </div>
</div>
```

### CSS

```css
.fx {
  -webkit-display: flex;
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
}

.fx > div {
  padding-left: 20px;
  padding-right: 20px;
}

.fx > div:first-child {
  width: 30%;
}

.flex {
  -webkit-flex: 1;
  flex: 1;
}

#test-target {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
```

### JavaScript

```js
let textarea = document.getElementById("test-target"),
  consoleLog = document.getElementById("console-log"),
  btnReset = document.getElementById("btn-reset");

function logMessage(message) {
  consoleLog.innerHTML += message + "<br>";
}

textarea.addEventListener("keydown", (e) => {
  if (!e.repeat) logMessage(`Key "${e.key}" pressed [event: keydown]`);
  else logMessage(`Key "${e.key}" repeating [event: keydown]`);
});

textarea.addEventListener("beforeinput", (e) => {
  logMessage(`Key "${e.data}" about to be input [event: beforeinput]`);
});

textarea.addEventListener("input", (e) => {
  logMessage(`Key "${e.data}" input [event: input]`);
});

textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);
});

btnReset.addEventListener("click", (e) => {
  let child = consoleLog.firstChild;
  while (child) {
    consoleLog.removeChild(child);
    child = consoleLog.firstChild;
  }
  textarea.value = "";
});
```

### 결과

{{EmbedLiveSample('KeyboardEvent_sequence_example')}}

> **참고:** {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} 과 {{domxref("HTMLElement/input_event", "input")}} 이벤트에 사용되는 {{domxref("InputEvent")}} 인터페이스가 완전히 구현되지 않은 브라우저에서는 잘못된 출력 결과를 얻을 수도 있습니다.

### Case 1

`shift` 키가 눌렸을 때 {{domxref("Element/keydown_event", "keydown")}} 이벤트가 먼저 발생하고, `key` 속성의 값은 문자열 `Shift`가 됩니다. `shift` 키를 계속 누르고 있더라도, 문자 키가 아니기 때문에 {{domxref("Element/keydown_event", "keydown")}} 이벤트가 반복적으로 발생하지는 않습니다.

`key 2`가 눌리면 또 하나의 새로운 {{domxref("Element/keydown_event", "keydown")}} 이벤트가 발생하고, 활성화된 보조 키 `shift` 때문에 이 이벤트의 `key` 속성의 값은 미국식 키보드에서의 `@` 또는 영국식 키보드에서의 `"`로 변경됩니다. 문자 키가 생성되었기 때문에 그 다음은 {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} 와 {{domxref("HTMLElement/input_event", "input")}} 이벤트들이 발생합니다.

`key 2`를 떼면 {{domxref("Element/keyup_event", "keyup")}} 이벤트가 발생하고, `key` 속성은 키보드 레이아웃에 따라서 `@` 나 `"` 의 문자열 값을 유지합니다.

마지막으로 `shift` 키를 떼면 또 다른 {{domxref("Element/keyup_event", "keyup")}} 이벤트가 발생하고, `key` 속성의 값은 `Shift`로 유지됩니다.

### Case 2

`shift` 키가 눌렸을 때 {{domxref("Element/keydown_event", "keydown")}} 이벤트가 먼저 발생하고, `key` 속성의 값은 문자열 `Shift`가 됩니다. `shift` 키를 계속 누르고 있더라도, 문자 키가 아니기 때문에 {{domxref("Element/keydown_event", "keydown")}} 이벤트가 반복적으로 발생하지는 않습니다.

`key 2`가 눌리면 또 하나의 새로운 {{domxref("Element/keydown_event", "keydown")}} 이벤트가 발생하고, 활성화된 보조 키 `shift` 때문에 이 이벤트의 `key` 속성의 값은 미국식 키보드에서의 `@` 또는 영국식 키보드에서의 `"`로 변경됩니다. 문자 키가 생성되었기 때문에 그 다음은 {{domxref("HTMLElement/beforeinput_event", "beforeinput")}} 와 {{domxref("HTMLElement/input_event", "input")}} 이벤트들이 발생합니다. 키가 계속 눌리는 동안 {{domxref("Element/keydown_event", "keydown")}} 이벤트가 반복적으로 발생하고, {{domxref("KeyboardEvent.repeat")}} 속성은 `true`가 됩니다. 또한 {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}과 {{domxref("HTMLElement/input_event", "input")}} 이벤트도 반복적으로 발생합니다.

`shift` 키를 떼면 {{domxref("Element/keyup_event", "keyup")}} 이벤트가 발생하고, `key` 속성은 `Shift`로 유지됩니다. 이 때, 보조 키인 `shift`가 더 이상 활성화되어 있지 않기 때문에 `key 2`의 반복되는 {{domxref("Element/keydown_event", "keydown")}} 이벤트에 대한 `key` 속성의 값이 이제 "2"가 되었다는 것에 주의해야 합니다. 이것은 {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}과 {{domxref("HTMLElement/input_event", "input")}} 이벤트의 {{domxref("InputEvent.data")}} 속성에도 똑같이 적용됩니다.

마지막으로 `key 2`를 떼면 {{domxref("Element/keyup_event", "keyup")}} 이벤트가 발생하지만, 보조 키인 `shift`가 더 이상 활성화되어 있지 않으므로 `key` 속성은 두 키보드 모두에서 문자열 `2`로 설정됩니다.

## 예제

이 예제는 {{domxref("Element/keydown_event", "keydown")}} 이벤트를 처리하기 위해 {{domxref("EventTarget.addEventListener()")}}를 사용합니다. 이벤트가 발생하면 키의 값이 코드에서 언급된 키 중의 하나인지 확인하고, 만약 그렇다면 각각의 방식(게임에서 우주선을 조종하거나, 스프레드시트에서 선택한 셀을 변경하는 등)으로 처리됩니다.

```js
window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // 이미 이벤트가 실행되는 중이라면 아무 동작도 하지 않습니다.
    }

    switch (event.key) {
      case "Down": // IE/Edge에서 사용되는 값
      case "ArrowDown":
        // "아래 화살표" 키가 눌렸을 때의 동작입니다.
        break;
      case "Up": // IE/Edge에서 사용되는 값
      case "ArrowUp":
        // "위 화살표" 키가 눌렸을 때의 동작입니다.
        break;
      case "Left": // IE/Edge에서 사용되는 값
      case "ArrowLeft":
        // "왼쪽 화살표" 키가 눌렸을 때의 동작입니다.
        break;
      case "Right": // IE/Edge에서 사용되는 값
      case "ArrowRight":
        // "오른쪽 화살표" 키가 눌렸을 때의 동작입니다.
        break;
      case "Enter":
        // "enter" 또는 "return" 키가 눌렸을 때의 동작입니다.
        break;
      case "Esc": // IE/Edge에서 사용되는 값
      case "Escape":
        // "esc" 키가 눌렸을 때의 동작입니다.
        break;
      default:
        return; // 키 이벤트를 처리하지 않는다면 종료합니다.
    }

    // 두 번 동작하는 것을 막기 위해 기본 동작을 취소합니다.
    event.preventDefault();
  },
  true,
);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
