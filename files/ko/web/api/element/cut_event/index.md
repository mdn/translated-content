---
title: "Element: cut 이벤트"
slug: Web/API/Element/cut_event
---

{{APIRef}}

**`copy`** 이벤트는 사용자가 브라우저의 사용자 인터페이스를 통해 잘라내기를 했을 때 발생합니다.

사용자가 수정 불가능한 콘텐츠에 대해 잘라내기를 시도할 경우에도 `cut` 이벤트는 발생하지만, 데이터는 비어있을 것입니다.

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
      <td>{{domxref("HTMLElement/oncut", "oncut")}}</td>
    </tr>
  </tbody>
</table>

이벤트의 기본 동작은 선택한 영역(존재하는 경우)을 클립보드로 복사한 후 문서에서 제거하는 것입니다.

`cut` 이벤트 처리기는 이벤트의 {{domxref("ClipboardEvent.clipboardData")}} 속성에 대해 {{domxref("DataTransfer.setData", "setData(format, data)")}} 메서드를 호출해 클립보드로 복사할 콘텐츠를 수정할 수 있고, {{domxref("Event/preventDefault", "event.preventDefault()")}}를 호출해 기본 동작을 취소할 수도 있습니다.

기본 동작을 취소할 경우 잘라낸 영역을 문서에서 제거하지도 않는다는 점에 주의하세요. 따라서 기본 잘라내기 동작을 흉내내는 처리기를 구현하는 경우, 문서의 수정도 직접 해줘야 합니다.

처리기에서 클립보드 데이터를 읽을 수는 없습니다.

[합성](/ko/docs/Web/Events/Creating_and_triggering_events) `cut` 이벤트를 생성해서 발송할 수는 있지만, 이 방법으로는 시스템 클립보드나 문서 내용에 영향을 줄 수 없습니다.

## 예제

### HTML

```html
<div class="source" contenteditable="true">
  이 상자에서 텍스트를 잘라내 보세요...
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

source.addEventListener("cut", (event) => {
  const selection = document.getSelection();
  const reversed = Array.from(selection.toString()).reverse().join("");

  event.clipboardData.setData("text/plain", reversed);
  selection.deleteFromDocument();
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

- 관련 이벤트: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}}를 대상으로 한 같은 이벤트: {{domxref("Document/cut_event", "cut")}}
- {{domxref("Window")}}를 대상으로 한 같은 이벤트: {{domxref("Window/cut_event", "cut")}}
