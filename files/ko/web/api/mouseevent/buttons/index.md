---
title: "MouseEvent: buttons property"
short-title: buttons
slug: Web/API/MouseEvent/buttons
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

**`MouseEvent.buttons`** 읽기 전용 속성은 마우스 이벤트가 트리거되었을 때, 마우스 (혹은 다른 입력 장치) 에서 어떤 버튼이 눌렸는지를 나타냅니다.

눌린 각 버튼은 아래 보는 것처럼 숫자로 표현됩니다.
만일 하나 이상의 버튼이 눌리면 버튼 값은 더해져 새로운 숫자를 생성합니다.
예를 들어, 예를 들어, 추가 버튼(`2`)과 보조 버튼(`4`)이 동시에 눌리면, 값은 `6` 이 됩니다(`2` + `4`).

> [!NOTE]
> 속성 {{domxref("MouseEvent.button")}} 과 이 속성을 혼동하지 마세요.
> `MouseEvent.buttons` 속성은 어느 종류의 마우스 이벤트 동안 눌린 버튼의 상태를 나타내고,
> {{domxref("MouseEvent.button")}} 속성은 하나 혹은 여러 버튼을 누르거나 놓는 것으로 인해 발생하는 마우스 이벤트에 대해서만 올바른 값을 보장합니다.

## 값

하나 혹은 그 이상의 버튼을 나타내는 숫자입니다.
하나 이상의 버튼이 함께 눌리면 그 값은 더해집니다. (예시, `3` 는 주 버튼과 추가 버튼이 함께 눌린 값).

- `0`: 버튼이 눌리지 않았습니다.
- `1`: 주 버튼 (주로 왼쪽 버튼)
- `2`: 추가 버튼 (주로 오른쪽 버튼)
- `4`: 보조 버튼 (주로 마우스 휠 버튼이나 가운데 버튼)
- `8`: 네번째 버튼 (일반적으로 브라우저 뒤로가기 버튼)
- `16` : 다섯번째 버튼 (일반적으로 브라우저 앞으로 가기 버튼)

## 예제

이 예제는 {{domxref("Element/mousedown_event", "mousedown")}} 를 트리거했을 때의 `buttons` 속성의 기록입니다.

### HTML

```html
<p>마우스 버튼 하나 혹은 이상으로 아무 곳이나 클릭해 보세요.</p>
<pre id="log">[아직 클릭되지 않았습니다.]</pre>
```

### JavaScript

```js
const buttonNames = ["left", "right", "wheel", "back", "forward"];
function mouseButtonPressed(event, buttonName) {
  // 주어진 버튼이 눌렸는지 확인하기 위해 관련된 2의 거듭제곱과 이진 & 연산을 사용합니다.
  return Boolean(event.buttons & (1 << buttonNames.indexOf(buttonName)));
}

function format(event) {
  const { type, buttons } = event;
  const obj = { type, buttons };
  for (const buttonName of buttonNames) {
    obj[buttonName] = mouseButtonPressed(event, buttonName);
  }
  return JSON.stringify(obj, null, 2);
}

const log = document.getElementById("log");
function logButtons(event) {
  log.textContent = format(event);
}

document.addEventListener("mouseup", logButtons);
document.addEventListener("mousedown", logButtons);
```

### 결과

{{EmbedLiveSample("Examples")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

### 파이어폭스 일람

파이어폭스는 윈도우, 리눅스 (GTK) 그리고 Mac OS 에서 다음과 같은 제한과 함께 `buttons` 특성을 지원합니다.

- 유틸리티로 버튼 동작을 사용자화합니다.
  즉, 주 버튼은 기기의 왼쪽 버튼이 아닐 수도 있으며, 추가 버튼 역시 오른쪽 버튼이 아닐 수도 있습니다.
  또한, 가운데 (휠) 버튼, 네번째 버튼, 다섯번째 버튼이 눌렸을 때에도 값이 지정되지 않을 수 있습니다.
- 단일 버튼을 가진 기기는 버튼과 키보드를 누르는 것을 조합하여 추가 버튼을 수행할 수도 있습니다.
- 터치 기기는 수행할 수 있는 동작으로 버튼을 수행할 수 있습니다. (예시, 한 손가락 터치는 주 버튼, 두 손가락 터치는 보조 버튼 등)
- 리눅스 (GTK)에서는 네번째 버튼과 다섯번째 버튼이 지원되지 않습니다.
  또한, {{domxref("Element/mouseup_event", "mouseup")}} 이벤트는 항상 `buttons` 값에 놓인 버튼 정보를 포함합니다.
- Mac OS X 10.5 에서는 `buttons` 특성은 항상 `0` 을 반환하는데, 이는 해당 기능을 구현할 플랫폼 API 가 존재하지 않기 때문입니다.

## 같이 보기

- {{domxref("MouseEvent")}}
