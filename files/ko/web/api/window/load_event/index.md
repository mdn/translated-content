---
title: load
slug: Web/API/Window/load_event
---

`load` 이벤트는 리소스와 그것에 의존하는 리소스들의 로딩이 완료되면 실행됩니다.

## 예제

<h3 class="brush: html" id="Window">Window</h3>

```html
<script>
  window.addEventListener("load", function (event) {
    console.log("All resources finished loading!");
  });
</script>
```

<h3 class="brush: html" id="script_엘리먼트"><code>script</code> 엘리먼트</h3>

```html
<script>
  var script = document.createElement("script");
  script.addEventListener("load", function (event) {
    console.log("Script finished loading and executing");
  });
  script.src = "http://example.com/example.js";
  script.async = true;
  document.getElementsByTagName("script")[0].parentNode.appendChild(script);
</script>
```

## 일반 정보

- 스펙
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)
- 인터페이스
  - : UIEvent
- Bubbles
  - : No
- 취소가능 여부
  - : No
- 타겟
  - : Window,Document,Element
- 기본 동작
  - : None.

## 속성

| 속성                            | 타입                         | 설명                                                                                     |
| ------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | `{{domxref("EventTarget")}}` | The event target (the topmost target in the DOM tree).                                   |
| `type` {{readonlyInline}}       | `{{domxref("DOMString")}}`   | The type of event.                                                                       |
| `bubbles` {{readonlyInline}}    | `{{domxref("Boolean")}}`     | Whether the event normally bubbles or not.                                               |
| `cancelable` {{readonlyInline}} | `{{domxref("Boolean")}}`     | Whether the event is cancellable or not.                                                 |
| `view` {{readonlyInline}}       | `{{domxref("WindowProxy")}}` | `{{domxref("Document.defaultView", "document.defaultView")}}` (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)             | 0.                                                                                       |

## 명세서

{{Specifications}}

## 관련 이벤트

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
