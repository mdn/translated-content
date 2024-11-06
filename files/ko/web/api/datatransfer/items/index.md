---
title: "DataTransfer: items 속성"
short-title: items
slug: Web/API/DataTransfer/items
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

읽기 전용 {{domxref("DataTransfer")}}의 `items` 속성은 드래그 작업에서 {{domxref("DataTransferItem","데이터 전송 항목", "", "nocode")}}의 {{domxref("DataTransferItemList","목록")}}입니다. 목록은 작업의 각 항목에 대해 하나의 항목이 포함되며 작업에 항목이 없으면 목록은 비어 있습니다.

## 값

드래그 작업에서 드래그되는 항목을 나타내는 {{domxref("DataTransferItem")}} 객체를 포함하는 {{domxref("DataTransferItemList")}} 객체입니다. 드래그되는 각 객체에 대해 하나의 목록 항목이 있습니다. 드래그 작업에 데이터가 없으면 목록은 비어 있습니다.

## 예제

### 드래그된 항목 로깅

이 예제는 드래그된 항목에 대한 정보를 기록하기 위해 `items`를 사용합니다.

#### HTML

```html
<ul>
  <li id="source1" draggable="true">Drag Item 1 to the Drop Zone</li>
  <li id="source2" draggable="true">Drag Item 2 to the Drop Zone</li>
</ul>
<div id="target">Drop Zone</div>

<button id="reset">Reset</button>
```

#### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#target {
  border: 1px solid black;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  console.log(`dragstart: target.id = ${ev.target.id}`);
  // 요소의 id를 드래그 페이로드에 추가합니다.
  // 그러면 드롭 핸들러가 트리에 추가할 요소를 알 수 있습니다.
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  ev.preventDefault();
  // 대상의 id를 가져오고 이동된 요소를 대상의 DOM에 추가합니다.
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  // 각 항목의 "kind"와 "type"을 출력합니다.
  if (ev.dataTransfer.items) {
    for (const item of ev.dataTransfer.items) {
      console.log(`kind = ${item.kind}, type = ${item.type}`);
    }
  }
}

function dragoverHandler(ev) {
  ev.preventDefault();
  // 이동할 dropEffect를 설정합니다.
  ev.dataTransfer.dropEffect = "move";
}

const source1 = document.querySelector("#source1");
const source2 = document.querySelector("#source2");
const target = document.querySelector("#target");

source1.addEventListener("dragstart", dragstartHandler);
source2.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 결과

{{EmbedLiveSample("Logging dragged items", 0, 400)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTML 드래그 앤 드롭 API](/ko/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
