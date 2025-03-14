---
title: UI 이벤트
slug: Web/API/UI_Events
l10n:
  sourceCommit: 8c60ba86d4c10250eb80265a3be59add51540a82
---

{{DefaultAPISidebar("UI Events")}}

## 개념 및 사용법

UI 이벤트 API는 마우스 및 키보드 입력과 같은 사용자 상호 작용을 처리하기 위한 시스템을 정의합니다. 여기에는 다음이 포함됩니다.

- 키 입력이나 마우스 클릭과 같은 특정 사용자 동작에 대해 발생하는 이벤트. 이러한 이벤트의 대부분은 {{domxref("Element")}} 인터페이스에서 발생하지만, 리소스 로딩 및 언로딩과 관련된 이벤트는 {{domxref("Window")}} 인터페이스에서 발생합니다.
- 이러한 이벤트의 핸들러에 전달되는 이벤트 인터페이스. 이 인터페이스들은 {{domxref("Event")}}를 상속받고 사용자 상호 작용 유형에 특화된 추가 정보를 제공합니다. 예를 들어, {{domxref("KeyboardEvent")}}는 {{domxref("Element.keydown_event", "keydown")}} 이벤트 핸들러에 전달되어 누른 키에 대한 정보를 제공합니다.

## 인터페이스

- {{domxref("CompositionEvent")}}
  - : 조합 이벤트의 핸들러에 전달됩니다. 조합 이벤트는 사용자가 물리적 키보드에서 사용할 수 없는 문자를 입력할 수 있게 해줍니다.
- {{domxref("FocusEvent")}}
  - : 요소가 포커스를 받거나 잃는 것과 관련된 포커스 이벤트의 핸들러에 전달됩니다.
- {{domxref("InputEvent")}}
  - : 사용자가 입력을 하는 것과 관련된 입력 이벤트의 핸들러에 전달됩니다. 예를 들어, {{HTMLElement("input")}} 요소를 사용할 때입니다.
- {{domxref("KeyboardEvent")}}
  - : 키보드 up/down 이벤트의 핸들러에 전달됩니다.
- {{domxref("MouseEvent")}}
  - : 마우스 이동, 마우스 오버 및 아웃, 마우스 버튼 업 또는 다운을 포함한 마우스 이벤트의 이벤트 핸들러에 전달됩니다. {{domxref("Element.auxclick_event", "auxclick")}}, {{domxref("Element.click_event", "click")}}, 및 {{domxref("Element.dblclick_event", "dblclick")}} 이벤트는 {{domxref("PointerEvent")}} 객체를 전달받습니다.
- {{domxref("MouseScrollEvent")}} {{deprecated_inline}}
  - : 스크롤 이벤트를 위한 더 이상 사용되지 않는 Firefox 전용의 비표준 인터페이스입니다. 대신 {{domxref("WheelEvent")}}를 사용하세요.
- {{domxref("MutationEvent")}} {{deprecated_inline}}
  - : DOM 변경 사항에 대한 알림을 제공하도록 설계된 변경 이벤트 핸들러에 전달됩니다. 현재는 더 이상 사용되지 않습니다. 대신 {{domxref("MutationObserver")}}를 사용하세요.
- {{domxref("UIEvent")}}
  - : 다른 UI 이벤트가 상속받는 기본 인터페이스이며, {{domxref("Window.load_event", "load")}}와 {{domxref("Window.unload_event", "unload")}}와 같은 일부 이벤트에 전달되는 이벤트 인터페이스이기도 합니다.
- {{domxref("WheelEvent")}}
  - : 사용자가 마우스 휠이나 터치패드와 같은 유사한 사용자 인터페이스 컴포넌트를 회전시킬 때 발생하는 {{domxref("Element.wheel_event", "wheel")}} 이벤트의 핸들러에 전달됩니다.

## 이벤트

- {{domxref("Window.abort_event", "abort")}}
  - : 리소스 로딩이 중단되었을 때 발생합니다(예: 사용자가 취소한 경우).
- {{domxref("Element.auxclick_event", "auxclick")}}
  - : 사용자가 주 포인터 버튼이 아닌 다른 버튼을 클릭했을 때 발생합니다.
- {{domxref("Element.beforeinput_event", "beforeinput")}}
  - : DOM이 사용자 입력으로 업데이트되기 직전에 발생합니다.
- {{domxref("Element.blur_event", "blur")}}
  - : 요소가 포커스를 잃었을 때 발생합니다.
- {{domxref("Element.click_event", "click")}}
  - : 사용자가 주 포인터 버튼을 클릭했을 때 발생합니다.
- {{domxref("Element.compositionend_event", "compositionend")}}
  - : 텍스트 조합 시스템(예: 음성-텍스트 변환기)이 세션을 종료했을 때 발생합니다. 예를 들어, 사용자가 이를 닫았을 때입니다.
- {{domxref("Element.compositionstart_event", "compositionstart")}}
  - : 사용자가 텍스트 조합 시스템과 새 세션을 시작했을 때 발생합니다.
- {{domxref("Element.compositionupdate_event", "compositionupdate")}}
  - : 텍스트 조합 시스템이 새 문자로 텍스트를 업데이트할 때 발생하며, {{domxref("CompositionEvent")}}의 `data` 속성 업데이트에 반영됩니다.
- {{domxref("Element.contextmenu_event", "contextmenu")}}
  - : 컨텍스트 메뉴가 호출되기 직전에 발생합니다.
- {{domxref("Element.dblclick_event", "dblclick")}}
  - : 사용자가 주 포인터 버튼을 더블 클릭했을 때 발생합니다.
- {{domxref("HTMLElement/error_event", "error")}}
  - : 리소스 로딩에 실패하거나 처리할 수 없을 때 발생합니다(예: 이미지가 잘못되었거나 스크립트에 오류가 있는 경우).
- {{domxref("Element.focus_event", "focus")}}
  - : 요소가 포커스를 받았을 때 발생합니다.
- {{domxref("Element.focusin_event", "focusin")}}
  - : 요소가 포커스를 받기 직전에 발생합니다.
- {{domxref("Element.focusout_event", "focusout")}}
  - : 요소가 포커스를 잃기 직전에 발생합니다.
- {{domxref("Element.input_event", "input")}}
  - : DOM이 사용자 입력으로 업데이트된 직후에 발생합니다(예: 일부 텍스트 입력).
- {{domxref("Element.keydown_event", "keydown")}}
  - : 사용자가 키를 눌렀을 때 발생합니다.
- {{domxref("Element.keypress_event", "keypress")}} {{deprecated_inline}}
  - : 사용자가 키를 눌렀을 때 발생하지만, 키가 문자 값을 생성하는 경우에만 발생합니다. 대신 {{domxref("Element.keydown_event", "keydown")}}을 사용하세요.
- {{domxref("Element.keyup_event", "keyup")}}
  - : 사용자가 키를 놓았을 때 발생합니다.
- {{domxref("Window.load_event", "load")}}
  - : 전체 페이지가 로드되었을 때 발생합니다. 스타일시트와 이미지 같은 모든 종속 리소스를 포함합니다.
- {{domxref("Element.mousedown_event", "mousedown")}}
  - : 포인터가 요소 위에 있는 동안 사용자가 마우스나 다른 포인팅 장치의 버튼을 눌렀을 때 발생합니다.
- {{domxref("Element.mouseenter_event", "mouseenter")}}
  - : 마우스나 다른 포인팅 장치가 요소나 그 자손 중 하나의 경계 안으로 이동했을 때 발생합니다.
- {{domxref("Element.mouseleave_event", "mouseleave")}}
  - : 마우스나 다른 포인팅 장치가 요소와 그 모든 자손의 경계 밖으로 이동했을 때 발생합니다.
- {{domxref("Element.mousemove_event", "mousemove")}}
  - : 요소 위에서 마우스나 다른 포인팅 장치가 이동할 때 발생합니다.
- {{domxref("Element.mouseout_event", "mouseout")}}
  - : 마우스나 다른 포인팅 장치가 요소의 경계 밖으로 이동했을 때 발생합니다.
- {{domxref("Element.mouseover_event", "mouseover")}}
  - : 마우스나 다른 포인팅 장치가 요소 위로 이동했을 때 발생합니다.
- {{domxref("Element.mouseup_event", "mouseup")}}
  - : 포인터가 요소 위에 있는 동안 사용자가 마우스나 다른 포인팅 장치의 버튼을 놓았을 때 발생합니다.
- {{domxref("Window.unload_event", "unload")}}
  - : 문서나 자식 리소스가 언로드될 때 발생합니다.
- {{domxref("Element.wheel_event", "wheel")}}
  - : 사용자가 마우스 휠이나 터치패드와 같은 유사한 사용자 인터페이스 컴포넌트를 회전시킬 때 발생합니다.

## 예제

### 마우스 이벤트

이 예제는 이벤트가 생성된 X와 Y 좌표와 함께 마우스 이벤트를 기록합니다. 노란색과 빨간색 사각형 안으로 마우스를 이동하고, 클릭하거나 더블 클릭해 보세요.

#### HTML

```html
<div id="outer">
  <div id="inner"></div>
</div>

<div id="log">
  <pre id="contents"></pre>
  <button id="clear">로그 지우기</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 1rem;
}

#outer {
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
}

#inner {
  height: 100px;
  width: 100px;
  background-color: red;
}

#contents {
  height: 150px;
  width: 250px;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### JavaScript

```js
const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const contents = document.querySelector("#contents");
const clear = document.querySelector("#clear");
let lines = 0;

outer.addEventListener("click", (event) => {
  log(event);
});

outer.addEventListener("dblclick", (event) => {
  log(event);
});

outer.addEventListener("mouseover", (event) => {
  log(event);
});

outer.addEventListener("mouseout", (event) => {
  log(event);
});

outer.addEventListener("mouseenter", (event) => {
  log(event);
});

outer.addEventListener("mouseleave", (event) => {
  log(event);
});

function log(event) {
  const prefix = `${String(lines++).padStart(3, "0")}: `;
  const line = `${event.type}(${event.clientX}, ${event.clientY})`;
  contents.textContent = `${contents.textContent}${prefix}${line}\n`;
  contents.scrollTop = contents.scrollHeight;
}

clear.addEventListener("click", () => {
  contents.textContent = "";
  lines = 0;
});
```

#### 결과

{{EmbedLiveSample("Mouse events", 0, 250)}}

### 키보드 및 입력 이벤트

이 예제는 {{domxref("Element.keydown_event", "keydown")}}, {{domxref("Element.beforeinput_event", "beforeinput")}}, 그리고 {{domxref("Element.input_event", "input")}} 이벤트를 기록합니다. 텍스트 영역에 입력해 보세요. <kbd>Shift</kbd>와 같은 키는 `keydown` 이벤트는 생성하지만 `input` 이벤트는 생성하지 않는다는 점에 주목하세요.

#### HTML

```html
<textarea id="story" rows="5" cols="33"></textarea>

<div id="log">
  <pre id="contents">
  <button id="clear">로그 지우기</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 1rem;
}

#story {
  padding: 0.5rem;
}

#contents {
  height: 150px;
  width: 250px;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### JavaScript

```js
const story = document.querySelector("#story");
const contents = document.querySelector("#contents");
const clear = document.querySelector("#clear");
let lines = 0;

story.addEventListener("keydown", (event) => {
  log(`${event.type}(${event.key})`);
});

story.addEventListener("beforeinput", (event) => {
  log(`${event.type}(${event.data})`);
});

story.addEventListener("input", (event) => {
  log(`${event.type}(${event.data})`);
});

function log(line) {
  const prefix = `${String(lines++).padStart(3, "0")}: `;
  contents.textContent = `${contents.textContent}${prefix}${line}\n`;
  contents.scrollTop = contents.scrollHeight;
}

clear.addEventListener("click", () => {
  contents.textContent = "";
  lines = 0;
});
```

#### 결과

{{EmbedLiveSample("Keyboard and input events", 0, 250)}}

## 명세서

{{Specifications}}

## 같이 보기

- [포인터 이벤트 API](/ko/docs/Web/API/Pointer_events)
- [터치 이벤트](/ko/docs/Web/API/Touch_events)
