---
title: "Window: DOMContentLoaded 이벤트"
slug: Web/API/Document/DOMContentLoaded_event
---

{{APIRef}}

**`DOMContentLoaded`** 이벤트는 HTML 문서가 완전히 구문 분석되고 모든 지연된 스크립트(`<script defer src="…">`와 `<script type="module">`)가 다운로드되고 실행될 때 발생합니다. 이미지, 서브프레임, 비동기 스크립트와 같은 다른 항목의 로드가 끝날 때까지 기다리지 않습니다.

`DOMContentLoaded`는 스타일시트의 로드를 기다리지 않습니다. 하지만 지연된 스크립트는 스타일시트를 기다리며 `DOMContentLoaded` 이벤트는 지연된 스크립트 이후에 대기열로 추가됩니다. 또한, 지연되지 않거나 비동기가 아닌 스크립트(예: `<script>`)는 이미 구문 분석된 스타일시트가 로드될 때까지 기다립니다.

이 이벤트의 원래 대상은 로드된 {{domxref("Document", "문서")}}입니다. `Window` 인터페이스에서 이 이벤트를 수신하여 캡처 혹은 버블링 단계에서 다룰 수 있습니다. 이 이벤트에 대한 자세한 설명은 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 페이지를 참조하시길 바랍니다.

다른 이벤트인 {{domxref("Window/load_event", "load")}}는 오직 완전히 로드된 페이지를 감지할 때만 사용되어야 합니다. `DOMContentLoaded`가 더 적절한 위치에서 `load`를 사용하는 것은 흔한 실수입니다.

이 이벤트는 취소할 수 없습니다.

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}}와 같은 메서드에서 이벤트 이름을 사용하거나 이벤트 핸들러 속성을 설정합니다.

```js
addEventListener("DOMContentLoaded", (event) => {});

onDOMContentLoaded = (event) => {};
```

## 이벤트 타입

제네릭 {{domxref("Event", "이벤트")}}.

## 예제

### 기본 용도

```js
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련된 이벤트: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}

- {{domxref("Document", "문서")}} 대상에 대한 이벤트: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
