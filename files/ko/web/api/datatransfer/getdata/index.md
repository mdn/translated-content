---
title: DataTransfer.getData()
slug: Web/API/DataTransfer/getData
---

{{APIRef("HTML DOM")}}

**`DataTransfer.getData()`** 메소드는 특정 형태를 위해 ({{domxref("DOMString")}}로) 끌어낸 데이터를 회수한다. 가령, 끌어내는 동작이 데이터를 포함하지 않는다면, 이 메소드는 빈 문자열을 반환한다.

예시 데이터 형식으로는 `text/plain` 와 `text/uri-list` 이 있다.

## 구문

```js
dataTransfer.getData(format);
```

### 매개변수

- `format`
  - : 회수할 데이터 형식을 나타내는 {{domxref("DOMString")}}

### 반환 값

- {{domxref("DOMString")}}
  - : 특정 `format`을 위해 끌어낸 데이터를 나타내는 {{domxref("DOMString")}}. 만약 끌어내는 동작이 데이터를 가지고 있지 않거나 동작이 특정 `format` 에 대한 데이터를 가지고 있지 않다면, 이 메소드는 빈 문자열을 반환한다.

## 예제

이 예시는 {{domxref("DataTransfer")}} 객체의 {{domxref("DataTransfer.getData()","getData()")}} 와 {{domxref("DataTransfer.setData()","setData()")}} 메소드의 사용을 보여준다.

### HTML 내용

```html
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <span id="drag" draggable="true" ondragstart="drag(event)"
    >drag me to the other box</span
  >
</div>
<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
```

### CSS 내용

```css
#div1,
#div2 {
  width: 100px;
  height: 50px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
```

### JavaScript 내용

```js
function allowDrop(allowdropevent) {
  allowdropevent.target.style.color = "blue";
  allowdropevent.preventDefault();
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  dragevent.target.style.color = "green";
}

function drop(dropevent) {
  dropevent.preventDefault();
  var data = dropevent.dataTransfer.getData("text");
  dropevent.target.appendChild(document.getElementById(data));
  document.getElementById("drag").style.color = "black";
}
```

### 결과

{{EmbedLiveSample('예제', 600) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Drag and drop](/ko/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Dragging and Dropping Multiple Items](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
