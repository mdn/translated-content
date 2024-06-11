---
title: "KeyboardEvent: location 속성"
slug: Web/API/KeyboardEvent/location
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`KeyboardEvent.location`** 은 키보드 혹은
다른 입력 장치에서의 키의 위치를 나타내는 `unsigned long` 을
반환하는 읽기 전용 속성입니다.

가능한 값은 다음과 같습니다:

<table class="standard-table">
  <thead>
    <tr>
      <th>상수</th>
      <th>값</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0</td>
      <td>
        키는 단 하나의 버전만 보유하고 있거나,
         왼쪽과 오른쪽 버전의 키를 구분할 수 없으며,
         숫자 키패드나 키패드의 일부분으로 간주되는 키에서 눌려진 것이 아닙니다.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>1</td>
      <td>
        이 키는 해당 키의 왼쪽 버전이었습니다.
         예를 들어, 표준 101 키의 미국 키보드에서는
         왼쪽 <kbd>Control</kbd> 키가 눌렸습니다.
         이 값은 키보드에서의 하나 이상의 가능한 위치를 가진 키에서만 사용됩니다.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>2</td>
      <td>
        이 키는 해당 키의 오른쪽 버전이었습니다.
         예를 들어, 표준 101 키의 미국 키보드에서는
         오른쪽 <kbd>Control</kbd> 키가 눌렸습니다.
         이 값은 키보드에서의 하나 이상의 가능한 위치를 가진 키에서만 사용됩니다.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>3</td>
      <td>
        <p>
          숫자 키패드 위에 있었거나,
           숫자 키패드에 상응하는 가상의 키 코드를 가지고 있었습니다.
        </p>
        <div class="note">
          <p>
            <strong>참고:</strong> <kbd>NumLock</kbd> 키가 잠겨 있을 때,
             Firefox는 숫자 키패드의 키에게
             항상 <code>DOM_KEY_LOCATION_NUMPAD</code> 를 반환합니다.
             반면에, <kbd>NumLock</kbd> 키가 잠겨 있지 않을 때,
             그리고 숫자 키패드가 실제로 있는 경우에도 <code>DOM_KEY_LOCATION_NUMPAD</code> 를 반환합니다.
             다른 경우에는, 노트북 컴퓨터처럼 키보드에 키패드가 없는 경우
             일부 키는 NumLock 키가 잠겨 있을 때 숫자 키패드가 됩니다.
             이러한 키들이 이벤트를 발생시킬 때, 위치 속성 값은 해당 키에 의존합니다.
             즉, <code>DOM_KEY_LOCATION_NUMPAD</code> 가 아니어야 합니다.
          </p>
        </div>
        <div class="note">
          <p>
            <strong>참고:</strong> <kbd>NumLock</kbd> key's key events indicate
            <code>DOM_KEY_LOCATION_STANDARD</code> both on Firefox and Internet
            Explorer.
            <strong>참고:</strong> <kbd>NumLock</kbd> 키의
             키 이벤트는 Internet Explorer와 Firefox 모두에서
             <code>DOM_KEY_LOCATION_STANDARD</code> 를 나타냅니다.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>DOM_KEY_LOCATION_MOBILE</code>
        {{Non-standard_inline()}} {{deprecated_inline}}
      </td>
      <td>4</td>
      <td>
        <p>
          키가 모바일 기기에 있을 때입니다.
           이는 물리적인 키패드나 가상 키보드 모두에 해당될 수 있습니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>DOM_KEY_LOCATION_JOYSTICK</code> {{Non-standard_inline()}}
        {{deprecated_inline}}
      </td>
      <td>5</td>
      <td>
        <p>
          이 키는 게임 컨트롤러 혹은
           모바일 기기의 조이스틱 버튼의 키 버튼이었습니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 값

숫자입니다.

## 예제

```js
function keyEvent(event) {
  console.log(`눌려진 키의 위치: ${event.location}`);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("KeyboardEvent")}}
