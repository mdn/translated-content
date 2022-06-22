---
title: 'Document: drag 이벤트'
slug: Web/API/Document/drag_event
tags:
  - API
  - DOM
  - Document
  - Drag
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
browser-compat: api.Document.drag_event
translation_of: Web/API/Document/drag_event
---
{{APIRef}}

`drag` 이벤트는 사용자가 요소 또는 텍스트를 드래그할 때 수백 밀리초마다 발생합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">이벤트 버블링</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">이벤트 취소</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">기본 액션</th>
      <td>드래그 앤 드롭을 계속한다.</td>
    </tr>
    <tr>
      <th scope="row">인터페이스</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">이벤트 핸들러 속성</th>
      <td>
        {{domxref("GlobalEventHandlers/ondrag", "ondrag")}}
      </td>
    </tr>
  </tbody>
</table>

## 예제

[JSFiddle demo](http://jsfiddle.net/zfnj5rv4/)에서 이 코드를 보거나 아래에서 상호작용 하십시오.

### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
    This div is draggable
  </div>
</div>
<div class="dropzone"></div>
<div class="dropzone"></div>
<div class="dropzone"></div>
```

### CSS

```css
#draggable {
  width: 200px;
  height: 20px;
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin-bottom: 10px;
  padding: 10px;
}
```

### JavaScript

```js
var dragged;

/* 드래그 가능한 대상에서 이벤트 발생 */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // 드래그한 요소에 대한 참조 변수
  dragged = event.target;
  // 요소를 반투명하게 함
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // 투명도를 리셋
  event.target.style.opacity = "";
}, false);

/* 드롭 대상에서 이벤트 발생 */
document.addEventListener("dragover", function(event) {
  // 드롭을 허용하도록 preventDefault() 호출
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // 요소를 드롭하려는 대상 위로 드래그했을 때 대상의 배경색 변경
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // 요소를 드래그하여 드롭하려던 대상으로부터 벗어났을 때 배경색 리셋
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // 기본 액션을 막음 (링크 열기같은 것들)
  event.preventDefault();
  // 드래그한 요소를 드롭 대상으로 이동
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);
```

{{EmbedLiveSample('예제', '300', '200', '')}}

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
  - {{domxref("Document/dragexit_event", "dragexit")}}
  - {{domxref("Document/drop_event", "drop")}}

- 다른 대상의 `drag` 이벤트:

  - {{domxref("Window")}}: {{domxref("Window/drag_event", "drag")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/drag_event", "drag")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/drag_event", "drag")}} event
