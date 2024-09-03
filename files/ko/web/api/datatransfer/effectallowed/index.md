---
title: "DataTransfer: effectAllowed property"
short-title: effectAllowed
slug: Web/API/DataTransfer/effectAllowed
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.effectAllowed`** 속성은 드래그 작업 시 허용되는 효과를 명시합니다.
_copy_ 작업은 드래그 중인 데이터가 현재 위치에서 드롭되는 위치로 복사되는 것을 나타내는데 사용됩니다.
_move_ 작업은 드래그 중인 데이터가 이동되는 것을 나타내는데 사용되며, _link_ 작업은 원본 위치와
드롭되는 위치 간에 어떤 형태의 관계나 연결이 생성될 것을 나타내는데 사용됩니다.

이 속성은 드래그하는 원본에 원하는 드래그 효과를 설정하기 위해 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 이벤트에 설정해야 합니다.
{{domxref("HTMLElement/dragenter_event", "dragenter")}}와 {{domxref("HTMLElement/dragover_event", "dragover")}} 이벤트 핸들러 내에서, 이 속성은 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 이벤트에서 할당된 값으로 설정되므로 `effectAllowed`가 어떤 효과가 허용될 지 결정하게 됩니다.

{{domxref("HTMLElement/dragstart_event", "dragstart")}}가 아닌 이벤트에서 `effectAllowed` 값을 할당하는 것은 아무 효과가 없습니다.

Assigning a value to `effectAllowed` in events other than
{{domxref("HTMLElement/dragstart_event", "dragstart")}} has no effect.

## 값

허용되는 드래그 작업을 나타내는 문자열. 가능한 값들은 다음과 같습니다. 

- `none`
  - : 아이템이 드랍되지 않을 수 있습니다.
- `copy`
  - : 복사: 원본 아이템의 복사본이 새로운 위치에 만들어질 수 있습니다.
- `copyLink`
  - : 복사 또는 링크 작업이 허용됩니다.
- `copyMove`
  - : 복사 또는 이동 작업이 허용됩니다.
- `link`
  - : 링크: 원본 링크가 새로운 위치에 설정될 수 있습니다.
- `linkMove`
  - : 링크 또는 이동 작업이 허용됩니다.
- `move`
  - : 이동: 새로운 위치로 아이템이 이동될 수 있습니다.
- `all`
  - : 모든 작업이 허용됩니다.
- `uninitialized`
  - : 효과가 설정되지 않았을 때의 기본값, `all`과 동일합니다.

다른 값을 `effectAllowed`에 할당하는 것은 아무 효과가 없으며 이전 값이 유지됩니다.

## 예제

### effectAllowed 설정

이 예제에서 우리는 `dragstart`핸들러에 `effectAllowed`의 값을 `"move"`로 설정합니다.

#### HTML

```html
<div>
  <p id="source" draggable="true">
    요소를 이동하려면, 이 요소를 선택하고 드랍 영역으로 드래그하여 놓습니다.
  </p>
</div>
<div id="target">드랍 영역</div>
<pre id="output"></pre>
<button id="reset">재설정</button>
```

#### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#source {
  color: blue;
  border: 1px solid black;
}

#target {
  border: 1px solid black;
}

#output {
  height: 100px;
  overflow: scroll;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  // 이 요소의 id를 드래그 페이로드에 추가하면
  // 드랍 핸들러가 어떤 요소를 트리에 추가할 지 알 수 있습니다.
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  log(`drop: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  ev.preventDefault();
  // 대상의 id를 받아 그 DOM에 요소를 추가하세요.
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragoverHandler(ev) {
  log(`dragover: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  ev.preventDefault();
}

const source = document.querySelector("#source");
const target = document.querySelector("#target");

source.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

function log(message) {
  const output = document.querySelector("#output");
  output.textContent = `${output.textContent}\n${message}`;
  output.scrollTop = output.scrollHeight;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 결과

{{EmbedLiveSample("Setting effectAllowed", 0, 400)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Drag and drop](/ko/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
