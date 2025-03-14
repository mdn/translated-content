---
title: "Window: paste 이벤트"
slug: Web/API/Window/paste_event
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

`paste` 이벤트의 원 대상은 붙여넣기 동작의 대상인 {{domxref("Element")}}입니다. {{domxref("Window")}}에서 수신할 경우 캡처 또는 버블링 단계의 이벤트를 받게 됩니다. 이벤트에 대한 자세한 정보는 [Element: paste 이벤트](/ko/docs/Web/API/Element/paste_event)에서 확인하세요.

## 예제

```js
window.addEventListener("paste", (event) => {
  console.log("붙여넣기 동작 실행");
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 이벤트: {{domxref("Window/copy_event", "copy")}}, {{domxref("Window/cut_event", "cut")}}
- {{domxref("Element")}}를 대상으로 한 같은 이벤트: {{domxref("Element/paste_event", "paste")}}
- {{domxref("Document")}}를 대상으로 한 같은 이벤트: {{domxref("Document/paste_event", "paste")}}
