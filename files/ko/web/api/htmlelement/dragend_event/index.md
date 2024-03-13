---
title: "Document: dragend 이벤트"
slug: Web/API/HTMLElement/dragend_event
---

{{APIRef}}

`dragend` 이벤트는 마우스 버튼을 놓거나 이스케이프 키를 눌러 드래그 작업이 끝나게 되면 발생합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">버블링</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">취소 가능</th>
      <td>아니오</td>
    </tr>
    <tr>
      <th scope="row">기본 동작</th>
      <td>다양함</td>
    </tr>
    <tr>
      <th scope="row">인터페이스</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">이벤트 처리기 속성</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragend", "ondragend")}}
      </td>
    </tr>
  </tbody>
</table>

## 예제

### 드래그 종료 시 투명도 초기화

이 예제에서는 컨테이너 안에 드래그 가능한 요소를 배치했습니다. 이 요소를 잡아 드래그한 후 놓아보세요.

요소가 드래그 되기 시작하면 반투명하게 설정했다가, `dragend` 이벤트를 수신해서 드래그가 끝나면 다시 불투명하게 만드는 예제입니다.

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

{{EmbedLiveSample('드래그 종료 시 불투명도 초기화')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 드래그 앤 드롭 이벤트:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- 이 이벤트의 다른 대상:

  - {{domxref("Window")}}: {{domxref("Window/dragend_event", "dragend")}} 이벤트
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragend_event", "dragend")}} 이벤트
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragend_event", "dragend")}} 이벤트
