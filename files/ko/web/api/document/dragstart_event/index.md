---
title: dragstart
slug: Web/API/Document/dragstart_event
tags:
  - DOM
  - Event
  - Reference
  - drag and drop
translation_of: Web/API/Document/dragstart_event
---
{{APIRef}}

**`dragstart`** 이벤트는 사용자가 요소나 선택한 텍스트를 드래그하기 시작할 때 발생합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">버블링</th>
      <td>가능</td>
    </tr>
    <tr>
      <th scope="row">취소</th>
      <td>가능</td>
    </tr>
    <tr>
      <th scope="row">기본 액션</th>
      <td>드래그 앤 드랍 작업 초기화.</td>
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

[드래그 이벤트](/ko/docs/Web/API/Document/drag_event)의 예제를 참고하세요.

{{EmbedLiveSample('Examples', '300', '200', '', 'Web/API/Document/drag_event')}}

## 명세

| 명세                                                                                         | 상태                             | 비고 |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName("HTML WHATWG", "interaction.html#dndevents", "dragstart")}} | {{Spec2("HTML WHATWG")}} |      |

## 브라우저 호환성

{{Compat("api.Document.dragstart_event")}}

## 같이 보기

- 다른 드래그 앤 드랍 이벤트

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/dragexit_event", "dragexit")}}
  - {{domxref("Document/drop_event", "drop")}}

- 다른 대상의 같은 이벤트

  - {{domxref("Window")}}: {{domxref("Window/dragstart_event", "dragstart")}} 이벤트
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragstart_event", "dragstart")}} 이벤트
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragstart_event", "dragstart")}} 이벤트
