---
title: "Document: dragstart 이벤트"
slug: Web/API/HTMLElement/dragstart_event
---

{{APIRef}}

`dragstart` 이벤트는 사용자가 요소나 선택한 텍스트를 드래그하기 시작할 때 발생합니다.

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
      <td>드래그 앤 드롭 작업 시작을 시작합니다.</td>
    </tr>
    <tr>
      <th scope="row">인터페이스</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">이벤트 처리기 속성</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragstart", "ondragstart")}}
      </td>
    </tr>
  </tbody>
</table>

## 예제

### 드래그 시작 시 투명도 설정

이 예제에서는 컨테이너 안에 드래그 가능한 요소를 배치했습니다. 이 요소를 잡아 드래그한 후 놓아보세요.

`dragstart` 이벤트를 수신해서, 요소가 드래그 되기 시작하면 반투명하게 설정하는 예제입니다.

[`drag`](/ko/docs/Web/API/Document/drag_event) 이벤트 문서에서 드래그 앤 드롭의 더 완전한 예제를 확인할 수 있습니다.

#### HTML

```html
<div id="container">
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

#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
document.addEventListener("dragstart", (event) => {
  // 반투명하게 만들기
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", (event) => {
  // 불투명하게 초기화
  event.target.classList.remove("dragging");
});
```

#### 결과

{{EmbedLiveSample('드래그 시작 시 투명도 설정')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 드래그 앤 드롭 이벤트:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- 이 이벤트의 다른 대상:

  - {{domxref("Window")}}: {{domxref("Window/dragstart_event", "dragstart")}} 이벤트
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragstart_event", "dragstart")}} 이벤트
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragstart_event", "dragstart")}} 이벤트
