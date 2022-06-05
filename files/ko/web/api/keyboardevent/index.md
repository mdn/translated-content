---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
tags:
  - API
  - DOM
  - Event
  - Input
  - Interface
  - Key Events
  - Keyboard Events
  - KeyboardEvent
  - MakeBrowserAgnostic
  - Reference
  - UI Events
  - keyboard
  - user input
browser-compat: api.KeyboardEvent
---
{{APIRef("UI Events")}}

**`KeyboardEvent`** 객체는 키보드와 사용자의 상호 작용을 나타냅니다. 각 이벤트는 사용자와 키보드의 키(또는 보조 키를 같이 눌렀을 때의 결합)를 나타냅니다. 이벤트 타입 ({{event('keydown')}}, {{event('keypress')}} 또는 {{event('keyup')}})은 키보드에서 어떤 행동이 일어났는지 식별합니다.

> **참고:** `KeyboardEvent` 이벤트는 로우 레벨에서 사용자가 키보드의 키와 어떤 상호 작용을 했는지를 식별할 뿐이며, 그 상호 작용에 대한 맥락적 의미는 담고 있지 않습니다. 텍스트 입력이 필요할 때는 {{event("input")}} 를 대신 사용하세요. 사용자가 태블릿으로 손글씨를 쓰거나, 태블릿으로 그래픽 텍스트를 입력하는 등의 대체 방법을 사용하는 경우에는 키보드 이벤트가 실행되지 않을 수 있습니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : 새로운 `KeyboardEvent` 객체를 생성합니다.

## 상수

`KeyboardEvent` 인터페이스는 다음 상수를 정의합니다.

### Keyboard locations

다음의 상수들은 키보드에서 이벤트가 일어난 키의 위치가 어디인지를 식별합니다. 이 상수들은 `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` 등으로 접근할 수 있습니다.

<table class="standard-table">
  <caption>
    Keyboard location 식별자
  </caption>
  <thead>
    <tr>
      <th scope="col">상수</th>
      <th scope="col">값</th>
      <th scope="col">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0x00</td>
      <td>
        <p>
          이벤트가 발생한 키가 키보드의 특정한 영역에 있지 않다고 판단됩니다. 숫자 키패드에 있지 않은 키거나(NumLock 키는 숫자 키패드에 있지만 여기에 포함됨), 키보드의 왼쪽과 오른쪽 중 어느 한 쪽으로 구분되지 않는 키가 이에 해당됩니다.
        </p>
        <p>
          표준 PC 101 US 키보드의 알파벳 키, NumLock 키, 스페이스 바 키를 예로 들 수 있습니다.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>0x01</td>
      <td>
        <p>
          키보드의 여러 위치에 존재할 수 있지만, 그 중에서 왼쪽에 존재하는 키입니다.
        </p>
        <p>
          왼쪽 Control 키, Macintosh 키보드의 왼쪽 Command 키, 또는 왼쪽 Shift 키를 예로 들 수 있습니다.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>0x02</td>
      <td>
        <p>
          키보드의 여러 위치에 존재할 수 있지만, 그 중에서 오른쪽에 존재하는 키입니다.
        </p>
        <p>
          오른쪽 Shift 키와 오른쪽 Alt 키(Mac 키보드의 Option 키)를 예로 들 수 있습니다.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>0x03</td>
      <td>
        <p>
          키가 두 개 이상의 위치에서 시작될 수 있는 경우, 숫자 키패드에 위치한 키 또는 숫자 키패드와 연관된 가상 키입니다. NumLock 키는 이 그룹에 포함되지 않고 언제나 <code>DOM_KEY_LOCATION_STANDARD</code>로 인코딩됩니다.
        </p>
        <p>
          숫자 키패드의 숫자 키, 숫자 키패드의 Enter 키, 숫자 키패드의 소수점(.) 키를 예로 들 수 있습니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 속성

_이 인터페이스는 부모인 {{domxref("UIEvent")}} 와 {{domxref("Event")}}의 속성을 상속받습니다._

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}

  - : 키 이벤트가 일어났을 때 <kbd>Alt</kbd> (macOS의 <kbd>Option</kbd> 또는 <kbd>⌥</kbd>) 키가 활성화되어 있다면 `true` 를 반환합니다.

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}

  - : 이벤트가 일어난 키의 물리적인 코드 값을 문자열로 반환합니다.

    > **경고:** 이는 사용자의 키보드 레이아웃을 무시하므로, 사용자가 QWERTY 키보드의 "Y" 위치의 키를 누르면, 사용자가 QWERTZ 키보드(사용자는 "Y" 대신 "Z"값을 기대함) 또는 Dvorak 키보드(사용자는 "Y" 대신 "F"값을 기대함)를 사용하더라도 항상 "KeyY" 값을 리턴합니다. 만약 사용자에게 맞는 키 값을 보여주길 원한다면, {{domxref("Keyboard.getLayoutMap()")}}를 사용하세요.

- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}

  - : 키 이벤트가 일어났을 때 <kbd>Ctrl</kbd> 키가 활성화되어 있다면 `true` 를 반환합니다.

- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}

  - : 키 이벤트가 `compositionstart`이후에 그리고 `compositionend` 이전에 발생했다면 `true` 를 반환합니다.

- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : 이벤트가 일어난 키의 키 값을 나타내는 문자열을 반환합니다.

- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}

  - : 키보드가 구성된 로케일을 나타내는 로케일 문자열을 반환합니다. 브라우저나 기기가 키보드의 로케일을 알 수 없는 경우에는 빈 문자열일 수도 있습니다.

    > **참고:** 이 속성은 입력되는 데이터의 로케일을 설명하지 않습니다. 사용자는 다른 언어로 텍스트를 적으면서도 하나의 키보드 레이아웃을 사용할 수 있습니다.

- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}

  - : 키보드 또는 기타 입력 장치의 키의 위치를 나타내는 {{jsxref("Number")}}를 반환합니다. 위치를 식별하는 상수 값 목록은 [Keyboard locations](#keyboard_locations) 에서 확인할 수 있습니다.

- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}

  - : 키 이벤트가 일어났을 때 <kbd>Meta</kbd>키 (Mac 키보드의 <kbd>⌘ Command</kbd> 키, Windows 키보드의 Windows 키 (<kbd>⊞</kbd>))가 활성화되어 있다면 `true`를 반환합니다.

- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}

  - : 키를 자동으로 반복되도록 누르고 있다면 `true`를 반환합니다.

- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}

  - : 키 이벤트가 일어났을 때 <kbd>Shift</kbd>키가 활성화되어 있다면 `true`를 반환합니다.

## 메서드

_이 인터페이스는 부모인 {{domxref("UIEvent")}} 와 {{domxref("Event")}}의 메서드를 상속받습니다._

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : 이벤트가 발생했을 때 <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, 또는 <kbd>Meta</kbd> 등의 보조 키가 눌렸는지를 나타내는 부울 값을 반환합니다.

## 더 이상 사용하지 않는 메서드

- {{domxref("KeyboardEvent.initKeyEvent()")}} {{deprecated_inline}}
  - : `KeyboardEvent` 객체를 초기화합니다. 이 메서드는 Firefox에서만 구현되었고, 이제는 Firefox에서도 더 이상 지원되지 않습니다. 대신 {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} 생성자를 사용해야 합니다.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}} {{deprecated_inline}}
  - : `KeyboardEvent` 객체를 초기화합니다. 이 메서드는 이제 더 이상 사용되지 않습니다. 대신 {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} 생성자를 사용해야 합니다.

## 더 이상 사용하지 않는 속성

- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline}}{{Deprecated_inline}}{{Readonlyinline}}

  - : 키의 문자 값을 나타내는 문자열을 반환합니다. 키가 인쇄 가능한 문자일 경우, 이 값은 해당 문자를 포함하는 비어 있지 않은 유니코드 값입니다. 키가 인쇄 불가능한 문자일 경우, 이 값은 빈 문자열입니다.

    > **참고:** 키를 여러 문자를 삽입하는 매크로로 사용하는 경우, 이 특성의 값은 첫 번째 문자가 아니라 전체 문자열입니다.

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}}{{Readonlyinline}}

  - : 키의 유니코드 숫자를 나타내는 {{jsxref("Number")}}를 리턴합니다. 이 속성은 `keypress` 이벤트에서만 사용됩니다. `char` 특성이 여러 개의 문자를 포함하고 있는 키의 경우, 이 값은 첫 번째 문자의 유니코드 값입니다. Firefox 26에서는 인쇄 가능한 문자의 코드를 반환합니다.

    > **경고:** 이 특성은 더 이상 사용되지 않습니다. 가능하다면, 대신 {{domxref("KeyboardEvent.key")}} 특성을 사용하세요.

- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}}{{Readonlyinline}}

  - : 누른 키의 수정되지 않은 값을 식별하는 시스템 및 구현 종속 숫자 코드를 나타내는 {{jsxref("Number")}}를 반환합니다.

    > **경고:** 이 특성은 더 이상 사용되지 않습니다. 가능하다면, 대신 {{domxref("KeyboardEvent.key")}} 특성을 사용하세요.

- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : 이 속성은 비표준이고 더 이상 {{domxref("KeyboardEvent.key")}}를 위해 사용되지 않습니다. 이 속성은 이전 버전의 DOM Level 3 이벤트의 일부였습니다.
- {{domxref("KeyboardEvent.keyLocation")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : 이 속성은 {{domxref("KeyboardEvent.location")}}의 비표준이고 사용되지 않는 별칭입니다. 이 속성은 이전 버전의 DOM Level 3 이벤트의 일부였습니다.
- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}} {{Readonlyinline}}

  - : 누른 키의 수정되지 않은 값을 식별하는 시스템 및 구현 종속 숫자 코드를 나타내는 {{jsxref("Number")}}를 반환합니다. 보통은 `keyCode`와 같습니다.

    > **경고:** 이 특성은 더 이상 사용되지 않습니다. 가능하다면, 대신 {{domxref("KeyboardEvent.key")}} 특성을 사용하세요.

## 이벤트

다음의 이벤트들은 `KeyboardEvent` 타입을 기반으로 합니다. 이 이벤트들은 {{domxref("Element")}}, {{domxref("Document")}}, 그리고 {{domxref("Window")}}를 포함해서 {{domxref("GlobalEventHandlers")}}를 구현하는 모든 개체로 전달될 수 있습니다. 아래의 리스트에서, 각 이벤트는 일반적으로 모든 수신자에게 적용되는 이벤트 처리기에 대한 `Document`로 연결됩니다.

- {{domxref("Document.keydown_event", "keydown")}}
  - : 키가 눌렸을 때 발생합니다.
- {{domxref("Document.keyup_event", "keyup")}}
  - : 키를 떼었을 때 발생합니다.

### 더 이상 사용하지 않는 이벤트

- {{domxref("Document.keypress_event", "keypress")}} {{deprecated_inline}}
  - : 일반적으로 문자 값을 생성하는 키가 눌렸을 때 발생합니다. 이 이벤트는 매우 장치 의존적이며 더 이상 사용되지 않습니다. 사용해서는 안 됩니다.

## 사용 일람

키보드 이벤트의 타입은 {{event("keydown")}}, {{event("keypress")}}, 그리고 {{event("keyup")}}의 3가지 타입이 있습니다. 대부분의 키에서, Gecko는 다음과 같은 키 이벤트를 전송합니다.

1. 키가 처음 눌렸을 때는, `keydown` 이벤트가 전송됩니다.
2. 그 키가 보조 키가 아니라면, `keypress` 이벤트가 전송됩니다.
3. 사용자가 키를 떼면, `keyup` 이벤트가 전송됩니다.

### 특수한 경우

일부 키는 키보드의 표시등 상태를 전환시키는 기능을 합니다. Caps Lock, Num Lock, 그리고 Scroll Lock 같은 키가 이에 해당됩니다. 윈도우와 리눅스에서는, 이 키들은 `keydown` 와 `keyup` 이벤트만을 전송합니다.

> **참고:** 리눅스에서는, Firefox 12와 그 이전 버전에서는 이 키들의 `keypress` 이벤트도 전송했습니다.

그러나, macOS의 이벤트 모델의 제한으로 인해 Caps Lock은 `keydown` 이벤트만 전송합니다. Num Lock은 일부 오래된(2007년 이전의) 노트북 모델에서는 지원되었지만, 그 이후로는 macOS에선 외부 키보드에서도 Num Lock을 지원하지 않습니다. Num Lock 키가 있는 옛 맥북에서는 Num Lock은 어떤 이벤트도 생성하지 않습니다. Gecko는 F14 키가 있는 외부 키보드가 연결되어 있다면 Scroll Lock 키를 지원합니다. Firefox의 일부 이전 버전에서는 Scroll Lock 키도 `keypress` 이벤트를 발생시켰습니다. 이 일관성 없는 동작은 {{bug(602812)}}였습니다.

### 자동 반복 처리

키를 누르고 있는 동안에는 자동으로 반복하기 시작합니다. 그 결과 다음과 같은 이벤트가 전송됩니다.

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<사용자가 키를 뗄 때까지 반복>>
6. `keyup`

이 동작은 DOM Level 3 명세에서 발생해야 합니다. 그러나 아래에 명시된 것처럼 몇 가지 주의 사항이 있습니다.

#### Ubuntu 9.4 등의 일부 GTK 환경에서의 자동 반복

일부 GTK 기반 환경에서는 자동 반복 중에 고유 `keyup` 이벤트를 자동으로 전송하므로, Gecko는 키를 반복해서 누르는 것과 자동 반복의 차이를 알 수 없습니다. 그래서 이런 플랫폼에서는 다음의 이벤트가 생성됩니다.

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<사용자가 키를 뗄 때까지 반복>>
8. `keyup`

불행하게도 이러한 환경에서는 웹 컨텐츠가 이 키가 자동 반복되고 있는 키인지, 아니면 반복해서 눌리고 있는 키인지를 구별할 수 있는 방법이 없습니다.

#### Gecko 5.0 이전의 자동 반복 처리

Gecko 5.0 {{geckoRelease('5.0')}} 이전에는, 플랫폼 간의 키보드 처리의 일관성이 떨어졌습니다.

- Windows
  - : 자동 반복은 Gecko 4.0 이후와 동일합니다.
- Mac
  - : 첫 `keydown` 이벤트 이후에는 `keyup` 이벤트가 발생하기 전까진 `keypress` 이벤트만 전송됩니다. 간격을 두고 발생하는 `keydown` 이벤트는 전송되지 않습니다.
- Linux
  - : 플랫폼에 따라 이벤트 동작이 다릅니다. 기본 이벤트 모델의 동작에 따라 Windows 또는 Mac 처럼 동작합니다.

> **참고:** 이벤트를 수동으로 실행하더라도 해당 이벤트와 관련된 기본 동작을 생성하지 않습니다.
> 예를 들어, 키 이벤트를 수동으로 실행해도 포커스된 텍스트 입력 부분에 해당 문자가 표시되지는 않습니다.
> UI 이벤트의 경우, 브라우저와 상호 작용하는 사용자의 작업 시뮬레이션 스크립트를 막으므로 보안상의 이유로 중요합니다.

## 예제

```js
<!DOCTYPE html>
<html>
<head>
<script>
'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'Control') {
    // do not alert when only Control key is pressed.
    return;
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the same time.
    alert(`Combination of ctrlKey + ${keyName}`);
  } else {
    alert(`Key pressed ${keyName}`);
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === 'Control') {
    alert('Control key was released');
  }
}, false);

</script>
</head>

<body>
</body>
</html>
```

## 명세

{{Specifications}}

`KeyboardEvent` 인터페이스 명세는 처음에는 합의가 이루어지지 않아서 DOM Level 2 이벤트에서 폐기되었다가, DOM Level 3 이벤트에서 수많은 초안 버전을 거치게 되었습니다. 이는 초기 DOM Level 2 버전의 이벤트인 Gecko 브라우저의 {{domxref("KeyboardEvent.initKeyEvent()")}}와 초기 DOM Events Level 3 버전의 이벤트인 다른 브라우저들의 {{domxref("KeyboardEvent.initKeyboardEvent()")}}의 비표준적인 초기화 메서드의 구현으로 이어졌습니다. 둘 다 현대적인 {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} 생성자로 대체되었습니다.

## 브라우저 호환성

{{Compat}}

### 호환성 참고 사항

- Firefox 65부터는 <kbd>Enter</kbd>

  키, 그리고

  <kbd>Shift</kbd>

  \+

  <kbd>Enter</kbd>

  와

  <kbd>Ctrl</kbd>

  \+

  <kbd>Enter</kbd>

  키의 조합(상호 호환성을 위해 유지됨)을 제외한 [non-printable keys](</en-US/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>)에 대해서는 `keypress` 이벤트가 발생하지 않습니다 ({{bug(968056)}}).

## 같이 보기

- {{domxref("KeyboardEvent.code")}}.
- {{domxref("KeyboardEvent.key")}}.
- {{domxref("KeyboardEvent.getModifierState()")}}
