---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
---

{{ApiRef("DOM")}}

{{domxref("Event")}} 인터페이스의 **`eventPhase`** 읽기 전용 속성은 현재 평가 중인 이벤트 흐름 단계를 나타냅니다.

## 값

이벤트 흐름의 단계를 나타내는 정수 값을 반환합니다. 가능한 값은 다음과 같습니다.

- `Event.NONE (0)`
  - : 이 이벤트는 현재 처리 중이 아닙니다.
- `Event.CAPTURING_PHASE (1)`
  - : 이벤트가 대상의 부모 객체를 통해 전파 중입니다. 이 단계는 {{domxref("Window")}}에서 시작해서, {{domxref("Document")}}, {{domxref("HTMLHtmlElement")}}를 거쳐 이벤트가 대상의 부모에 도달할 때까지 지속됩니다. {{domxref("EventTarget.addEventListener()")}}로 등록한 [이벤트 수신기](/ko/docs/Web/API/EventListener) 중 캡처 모드로 등록한 수신기는 이 단계에서 발동합니다.
- `Event.AT_TARGET (2)`
  - : 이벤트가 [이벤트 대상](/ko/docs/Web/API/EventTarget)에 도착했습니다. {{domxref("Event.bubbles")}}가 `false`면 `Event.AT_TARGET` 단계가 끝남과 동시에 이벤트 처리도 마칩니다.
- `Event.BUBBLING_PHASE (3)`
  - : 이벤트가 대상의 조상을 따라 역순으로 전파 중입니다. 이 단계는 대상의 부모에서 시작해서 마침내 {{domxref("Window")}}에 도달할 때까지 지속됩니다. 이 동작을 버블링이라고 부르며, {{domxref("Event.bubbles")}}가 `true`여야 발생합니다. [이벤트 수신기](/ko/docs/Web/API/EventListener) 중 캡처 모드가 아닌 수신기는 이 단계에서 발동합니다.

## 예제

### HTML

```html
<h4>이벤트 전파 체인</h4>
<ul>
  <li>'d1'을 클릭하세요</li>
  <li>이벤트의 전파 과정을 확인하세요</li>
  <li>다음 div를 클릭해서 위의 과정을 반복하세요</li>
  <li>캡처 모드를 변경하세요</li>
  <li>위의 과정을 반복하세요</li>
</ul>
<input type="checkbox" id="chCapture" />
<label for="chCapture">캡처 사용</label>
<div id="d1">
  d1
  <div id="d2">
    d2
    <div id="d3">
      d3
      <div id="d4">d4</div>
    </div>
  </div>
</div>
<div id="divInfo"></div>
```

### CSS

```css
div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color: white;
  font-size: 80%;
}
```

### JavaScript

```js
let clear = false,
  divInfo = null,
  divs = null,
  useCapture = false;

window.onload = function () {
  divInfo = document.getElementById("divInfo");
  divs = document.getElementsByTagName("div");
  chCapture = document.getElementById("chCapture");
  chCapture.onclick = function () {
    RemoveListeners();
    AddListeners();
  };
  Clear();
  AddListeners();
};

function RemoveListeners() {
  for (let i = 0; i < divs.length; i++) {
    let d = divs[i];
    if (d.id != "divInfo") {
      d.removeEventListener("click", OnDivClick, true);
      d.removeEventListener("click", OnDivClick, false);
    }
  }
}

function AddListeners() {
  for (let i = 0; i < divs.length; i++) {
    let d = divs[i];
    if (d.id != "divInfo") {
      if (chCapture.checked) {
        d.addEventListener("click", OnDivClick, true);
      } else {
        d.addEventListener("click", OnDivClick, false);
        d.onmousemove = function () {
          clear = true;
        };
      }
    }
  }
}

function OnDivClick(e) {
  if (clear) {
    Clear();
    clear = false;
  }
  if (e.eventPhase == 2) e.currentTarget.style.backgroundColor = "red";
  const level =
    e.eventPhase == 0
      ? "없음"
      : e.eventPhase == 1
      ? "캡처"
      : e.eventPhase == 2
      ? "대상"
      : e.eventPhase == 3
      ? "버블"
      : "오류";
  const p = document.createElement("p");
  p.textContent = `${e.currentTarget.id}; eventPhase: ${level}`;
  divInfo.appendChild(p);
}

function Clear() {
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id != "divInfo") {
      divs[i].style.backgroundColor = i & 1 ? "#f6eedb" : "#cceeff";
    }
  }
  divInfo.textContent = "";
}
```

### 결과

{{EmbedLiveSample('예제', '', '700')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
