---
title: DOMContentLoaded
slug: Web/API/Window/DOMContentLoaded_event
original_slug: Web/Events/DOMContentLoaded
---
{{APIRef}}

**`DOMContentLoaded`** 이벤트는 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생합니다. 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않습니다.

| 확산               | 예                                                              |
| ------------------ | --------------------------------------------------------------- |
| 취소 가능          | 예 (although specified as a simple event that isn't cancelable) |
| 인터페이스         | {{domxref("Event")}}                                    |
| 이벤트 처리기 속성 | 아니오                                                          |

`DOMContentLoaded`의 원본 대상은 다 불러온 {{domxref("Document")}}입니다. You can listen for this event on the `Window` interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the Document: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event.

A different event, {{domxref("Window/load_event", "load")}}, should be used only to detect a fully-loaded page. It is a common mistake to use `load` where `DOMContentLoaded` would be more appropriate.

## 예제

### 기본 용도

```js
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- Related events: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
