---
title: "KeyboardEvent: code property"
slug: Web/API/KeyboardEvent/code
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}

`KeyboardEvent.code` 속성은 키보드의 물리적 키(키를 누름으로써 생성되는 문자와는 반대)를 나타냅니다. 다시 말해서, 이 속성은 키보드의 레이아웃이나 수정 키의 상태에 변형되는 영향을 받지 않은 값을 반환합니다.

입력 장치가 물리적 키보드가 아닌 가상 키보드 혹은 접근성 장치인 경우, 브라우저는 물리적 입력 장치와 가상 입력 장치 사이의 호환성을 최대화하기 위해 물리적 키보드로 일어날 수 있는 가장 높은 가능성을 가진 값을 반환 값으로 설정합니다.

이 속성은 키와 연관된 문자보다는 입력 장치 상 키의 물리적인 위치를 기반으로 처리하고자 할 때 유용합니다. 이는 특히 키보드의 키를 사용하여 게임패드와 같은 환경을 시뮬레이션하는 게임의 입력을 처리하기 위한 코드를 작성할 때 흔히 사용됩니다. 그러나, 키 코드의 이름이 실제 키에 인쇄된 문자나 키를 눌렀을 때 생성된 문자와 일치하지 않을 수 있기 때문에 `KeyboardEvent.code`로 보고된 값으로 키스트로크에 의해 생성된 문자를 결정하려고는 하는 것은 주의가 필요합니다.

예를 들어, 쿼티 레이아웃 키보드에서 <kbd>Q</kbd> 키에 대해 반환되는 `code`는 "`KeyQ`" 인 동시에 드보락 키보드의 <kbd>'</kbd> 키나 애저티 키보드의 <kbd>A</kbd> 키를 눌러 나타나는 `code` 이기도 합니다. 이로 인해 사용자가 예상된 키보드 레이아웃을 사용하지 않는 경우, `code` 값으로 키의 이름을 파악하는 것이 불가능해집니다.

키 이벤트에 대응되는 문자를 결정하기 위해서는 {{domxref("KeyboardEvent.key")}} 속성을 대신 사용하여야 합니다.

## 값

윈도우, 리눅스, 맥 운영체제에 대한 코드 값은 [KeyboardEvent: code values](/ko/docs/Web/API/UI_Events/Keyboard_event_code_values) 페이지에 나열되어 있습니다.

## 예제

### KeyboardEvent 연습하기

#### HTML

```html
<p>
  키보드의 각 키를 눌러 키보드 이벤트에서 키와 코드가 각각 어떤 값으로
  나타나는지 확인해 보세요.
</p>
<div id="output" tabindex="0"></div>
```

#### CSS

```css
#output {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
  width: 95%;
  margin: auto;
}
#output:focus-visible {
  outline: 3px solid dodgerblue;
}
```

#### JavaScript

```js
window.addEventListener(
  "keydown",
  (event) => {
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    document.getElementById("output").appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
  },
  true,
);
```

#### 결과

키 입력이 예제에 제대로 전달되는지 확인하려면, 키를 누르기 전에 아래에 표시된 상자를 클릭하거나 포커스하세요.

{{ EmbedLiveSample('Exercising_KeyboardEvent', 600, 300) }}

### 게임으로 키보드 이벤트 처리하기

이 예제는 "WASD" 키를 사용하여 게임에서 전진, 좌로 이동, 후진, 우로 이동으로 조종하는 입력을 처리하는 {{domxref("Element/keydown_event", "keydown")}} 이벤트에 대한 이벤트 리스너를 처리합니다. 이 설정은 애저티 키보드를 사용하는 경우처럼 실제 해당 문자와 관계없이 동일한 네 개의 물리적 키를 사용하여 동작합니다.

#### HTML

```html
<p>WASD (AZERTY 키보드에서는 ZQSD) 키를 이용하여 움직이거나 조종해보세요.</p>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  class="world"
  tabindex="0">
  <polygon id="spaceship" points="15,0 0,30 30,30" />
</svg>
```

#### CSS

```css
.world {
  margin: 0px;
  padding: 0px;
  background-color: black;
  width: 400px;
  height: 400px;
}
.world:focus-visible {
  outline: 5px solid dodgerblue;
}
#spaceship {
  fill: orange;
  stroke: red;
  stroke-width: 2px;
}
```

#### JavaScript

자바스크립트 코드의 첫번째 부분에서는 우리가 사용할 변수를 정의합니다. `shipSize` 는 편의성을 위해 플레이어가 조종하는 우주선의 크기를 포함합니다. `position` 는 플레이 필드 내에서 우주선이 움직이는 위치를 추적하기 위해 사용됩니다. `moveRate` 는 키 입력에 따라서 우주선이 전방이나 후방으로 이동하는 픽셀의 수를, `turnRate` 는 키를 눌러 왼쪽이나 오른쪽으로 조종하는 컨트롤로 인하여 얼마나 회전했는지 각도를 나타냅니다. `angle` 은 현재 우주선에 적용된 회전 각도로, 이는 0° 도 (직진)에서 시작합니다. 마지막으로, `spaceship` 은 플레이어가 조종하는 우주선을 SVG 폴리곤 요소의 ID인 `"spaceship"` 을 참조합니다.

```js
let shipSize = {
  width: 30,
  height: 30,
};

let position = {
  x: 200,
  y: 200,
};

let moveRate = 9;
let turnRate = 5;

let angle = 0;

let spaceship = document.getElementById("spaceship");
```

다음은 `updatePosition()` 함수입니다. 이 함수는 우주선이 움직인 거리를 인자로 입력받으며 전방으로 이동한다면 인자는 양수로, 후방으로 이동한다면 인자는 음수로 지정됩니다. 이 함수는 현재 우주선이 향하고 있는 방향의 거리를 기반으로 새로운 위치를 계산합니다. 또한 우주선이 플레이 필드 내에서 사라지지 않게 경계를 넘을 경우 반대쪽에서 나타날 수 있도록 처리합니다.

```js
function updatePosition(offset) {
  let rad = angle * (Math.PI / 180);
  position.x += Math.sin(rad) * offset;
  position.y -= Math.cos(rad) * offset;

  if (position.x < 0) {
    position.x = 399;
  } else if (position.x > 399) {
    position.x = 0;
  }

  if (position.y < 0) {
    position.y = 399;
  } else if (position.y > 399) {
    position.y = 0;
  }
}
```

`refresh()` 함수는 [SVG transform](/ko/docs/Web/SVG/Attribute/transform) 을 사용하여 우주선의 회전과 위치를 적용합니다.

```js
function refresh() {
  let x = position.x - shipSize.width / 2;
  let y = position.y - shipSize.height / 2;
  let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

  spaceship.setAttribute("transform", transform);
}
refresh();
```

마지막으로, `addEventListener()` 메서드는 {{domxref("Element/keydown_event", "keydown")}} 이벤트를 감지하기 시작하는 데에 사용되며, 각 키에 따라 우주선의 위치와 회전 각도를 업데이트한 뒤, `refresh()` 함수를 호출하여 우주선의 새로운 위치와 각도를 그려줍니다.

```js
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // 이벤트가 이미 실행되었다면 아무 일도 일어나지 않습니다
    }

    switch (event.code) {
      case "KeyS":
      case "ArrowDown":
        // "후방 전진" 처리
        updatePosition(-moveRate);
        break;
      case "KeyW":
      case "ArrowUp":
        // "전방 전진" 처리
        updatePosition(moveRate);
        break;
      case "KeyA":
      case "ArrowLeft":
        // "왼쪽으로 이동" 처리
        angle -= turnRate;
        break;
      case "KeyD":
      case "ArrowRight":
        // "오른쪽으로 이동" 처리
        angle += turnRate;
        break;
    }

    refresh();

    if (event.code !== "Tab") {
      // 이벤트를 소비하여 사용자가 포커스를 이동하려고 하지 않는 한
      // 이벤트가 두 번 처리되지 않도록 합니다.
      event.preventDefault();
    }
  },
  true,
);
```

#### 결과

키 입력이 예제에 제대로 전달되는지 확인하려면, 키를 누르기 전에 아래에 표시된 검은색의 플레이 필드 클릭하거나 포커스하세요.

{{EmbedLiveSample("Handle_keyboard_events_in_a_game", 420, 460)}}

이 코드를 개선할 수 있는 몇 가지 방법이 있습니다. 대부분의 실제 게임들은 키를 반복하는 대신 {{domxref("Element/keydown_event", "keydown")}} 이벤트를 감지하며, 해당 이벤트가 발생하면 움직임을 시작하고, {{domxref("Element/keyup_event", "keyup")}} 이벤트가 발생하면 움직임을 멈춥니다. 이로 인해 이동은 부드럽고 빨라지지만, 동시에 플레이어가 이동하면서 조종할 수 있게 됩니다. 우주선의 움직임을 더 부드럽게 처리하기 위해 전환이나 애니메이션 이벤트도 사용될 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
