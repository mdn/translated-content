---
title: 'Document: dragend event'
slug: Web/API/Document/dragend_event
tags:
  - API
  - DOM
  - Document
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
  - dragend
translation_of: Web/API/Document/dragend_event
---
{{APIRef}}

`dragend`는 드래그 작업이 끝났을 때 발생합니다(마우스 버튼을 떼거나 <kbd>ESC</kbd> 키를 누른 경우).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">이벤트 버블링</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">이벤트 취소</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">기본 액션</th>
      <td>Varies</td>
    </tr>
    <tr>
      <th scope="row">인터페이스</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">이벤트 핸들러 속성</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragend", "ondragend")}}
      </td>
    </tr>
  </tbody>
</table>

## 예제

[drag](/en-US/docs/Web/API/Document/drag_event) 이벤트의 예제 코드나 이 [JSFiddle demo](http://jsfiddle.net/zfnj5rv4/)를 참고하세요.

{{EmbedLiveSample('Examples', '300', '200', '', 'Web/API/Document/drag_event')}}

## 명세

| 명세                                                                                         | 상태                             | 비고 |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName("HTML WHATWG", "interaction.html#dndevents", "dragend")}} | {{Spec2("HTML WHATWG")}} |      |

## 브라우저 호환성

{{Compat("api.Document.dragend_event")}}

## 더보기

- 다른 드래그 앤 드롭 이벤트:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/dragexit_event", "dragexit")}}
  - {{domxref("Document/drop_event", "drop")}}

- 다른 대상의 `drag` 이벤트:

  - {{domxref("Window")}}: {{domxref("Window/dragend_event", "dragend")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragend_event", "dragend")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragend_event", "dragend")}} event
