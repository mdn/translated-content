---
title: "Document: drag 이벤트"
slug: Web/API/HTMLElement/drag_event
---

{{APIRef}}

`drag` 이벤트는 사용자가 요소 또는 텍스트를 드래그하는 동안 매 수백 밀리초마다 발생합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">버블링</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">취소 가능</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">기본 동작</th>
      <td>드래그 앤 드롭 작업을 지속합니다.</td>
    </tr>
    <tr>
      <th scope="row">인터페이스</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">이벤트 처리기 속성</th>
      <td>
        {{domxref("GlobalEventHandlers/ondrag", "ondrag")}}
      </td>
    </tr>
  </tbody>
</table>

## 예제

### 드래그 앤 드롭 예제

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">드래그 가능</div>
</div>
<div class="dropzone"></div>
```

#### CSS

```css
body {
  /* 사용자가 예제의 텍스트를 선택하지 못하도록 */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}

.dropzone.dragover {
  background-color: purple;
}

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
let dragged;

/* 드래그 가능한 대상에서 발생하는 이벤트 */
document.addEventListener("drag", (event) => {
  console.log("dragging");
});

document.addEventListener("dragstart", (event) => {
  // 드래그한 요소에 대한 참조 저장
  dragged = event.target;
  // 반투명하게 만들기
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", (event) => {
  // 투명도 초기화
  event.target.classList.remove("dragging");
});

/* 드롭 대상에서 발생하는 이벤트 */
document.addEventListener(
  "dragover",
  (event) => {
    // 드롭을 허용하기 위해 기본 동작 취소
    event.preventDefault();
  },
  false,
);

document.addEventListener("dragenter", (event) => {
  // 드래그 가능한 요소가 대상 위로 오면 강조
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

document.addEventListener("dragleave", (event) => {
  // 드래그 가능한 요소가 대상 밖으로 나가면 강조 제거
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

document.addEventListener("drop", (event) => {
  // 일부 요소의 링크 열기와 같은 기본 동작 취소
  event.preventDefault();
  // 드래그한 요소를 선택한 드롭 대상으로 이동
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### 결과

{{EmbedLiveSample('드래그 앤 드롭 예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 드래그 앤 드롭 이벤트:

  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- 이 이벤트의 다른 대상:

  - {{domxref("Window")}}: {{domxref("Window/drag_event", "drag")}} 이벤트
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/drag_event", "drag")}} 이벤트
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/drag_event", "drag")}} 이벤트
