---
title: "Element: paste 이벤트"
slug: Web/API/Element/paste_event
---

{{APIRef}}

**`paste`** 이벤트는 사용자가 브라우저의 사용자 인터페이스를 통해 붙여넣기를 했을 때 발생합니다.

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
      <td>{{domxref("HTMLElement/onpaste", "onpaste")}}</td>
    </tr>
  </tbody>
</table>

현재 커서가 편집 가능한 맥락 ({{htmlelement("textarea")}} 등, 또는 [`contenteditable`](/ko/docs/Web/HTML/Global_attributes/contenteditable) 특성이 `true`인 요소) 내에 위치한 경우, 이벤트의 기본 동작은 커서 위치에 클립보드의 내용을 삽입하는 것입니다.

`paste` 이벤트 처리기는 이벤트의 {{domxref("ClipboardEvent.clipboardData")}} 속성에 대해 {{domxref("DataTransfer.getData", "getData()")}} 메서드를 호출해 클립보드 콘텐츠를 읽을 수 있습니다.

데이터 가공 등을 위해 기본 동작을 재정의해야 할 필요가 있는 경우 {{domxref("Event.preventDefault", "event.preventDefault()")}}을 호출해 취소하고, 직접 데이터를 삽입하면 됩니다.

[합성](/ko/docs/Web/Events/Creating_and_triggering_events) `paste` 이벤트를 생성해서 발송할 수는 있지만, 이 방법으로는 문서 내용에 영향을 줄 수 없습니다.

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
const target = document.querySelector("div.target");

target.addEventListener("paste", (event) => {
  const paste = (event.clipboardData || window.clipboardData).getData("text");
  const reversed = Array.from(paste).reverse().join("");

  const selection = window.getSelection();
  if (!selection.rangeCount) return false;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(reversed));

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

- 관련 이벤트: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}
- {{domxref("Document")}}를 대상으로 한 같은 이벤트: {{domxref("Document/paste_event", "paste")}}
- {{domxref("Window")}}를 대상으로 한 같은 이벤트: {{domxref("Window/paste_event", "paste")}}
