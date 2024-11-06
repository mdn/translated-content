---
title: "Element: copy 이벤트"
slug: Web/API/Element/copy_event
---

{{APIRef}}

**`copy`** 이벤트는 사용자가 브라우저의 사용자 인터페이스를 통해 복사했을 때 발생합니다.

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
      <th scope="row">인터페이스</th>
      <td>{{domxref("ClipboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">이벤트 처리기 속성</th>
      <td>{{domxref("HTMLElement/oncopy", "oncopy")}}</td>
    </tr>
  </tbody>
</table>

이벤트의 기본 동작은 선택한 영역(존재하는 경우)을 클립보드로 복사하는 것입니다.

`copy` 이벤트 처리기는 이벤트의 {{domxref("ClipboardEvent.clipboardData")}} 속성에 대해 {{domxref("DataTransfer.setData", "setData(format, data)")}} 메서드를 호출해 클립보드로 복사할 콘텐츠를 수정할 수 있고, {{domxref("Event/preventDefault", "event.preventDefault()")}}를 호출해 기본 동작을 취소할 수도 있습니다.

그러나, 처리기에서 클립보드 데이터를 읽을 수는 없습니다.

[합성](/ko/docs/Web/Events/Creating_and_triggering_events) `copy` 이벤트를 생성해서 발송할 수는 있지만, 이 방법으로는 시스템 클립보드에 영향을 줄 수 없습니다.

## 예제

### HTML

```html
<div class="source" contenteditable="true">
  이 상자에서 텍스트를 복사해보세요...
</div>
<div class="target" contenteditable="true">...여기에 붙여 넣어 보세요.</div>
```

```css hidden
div.source,
div.target {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1rem;
  background-color: #e9eef1;
}
```

### JS

```js
const source = document.querySelector("div.source");

source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  const reversed = Array.from(selection.toString()).reverse().join("");

  event.clipboardData.setData("text/plain", reversed);
  event.preventDefault();
});
```

### 결과

{{ EmbedLiveSample('예제', '100%', '120px') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 이벤트: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}}를 대상으로 한 같은 이벤트: {{domxref("Document/copy_event", "copy")}}
- {{domxref("Window")}}를 대상으로 한 같은 이벤트: {{domxref("Window/copy_event", "copy")}}
