---
title: "Document: DOMContentLoaded 이벤트"
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef}}

`DOMContentLoaded` 이벤트는 HTML 문서가 완전히 파싱되고, 모든 지연된 스크립트([`<script defer src="…">`](/ko/docs/Web/HTML/Reference/Elements/script#defer)와 [`<script type="module">`](/ko/docs/Web/HTML/Reference/Elements/script#module))가 다운로드되어 실행된 후에 발생합니다. 이 이벤트는 이미지, 하위 프레임, 비동기 스크립트 등의 로딩이 완료될 때까지 기다리지 않습니다.

`DOMContentLoaded`는 스타일시트가 로드되기를 기다리지 않지만, 지연된 스크립트는 스타일시트 로드를 기다린 후 실행되며, `DOMContentLoaded` 이벤트는 이러한 스크립트 실행이 끝난 뒤에 큐에 등록됩니다. 또한 지연되거나 비동기 처리되지 않은 스크립트(예: `<script>`)는 이미 파싱된 스타일시트가 로드될 때까지 기다립니다.

다른 이벤트인 {{domxref("Window/load_event", "load")}}는 페이지가 완전히 로드된 시점을 감지할 때만 사용해야 합니다. `DOMContentLoaded`가 더 적절한 상황에서 `load` 이벤트를 사용하는 것은 흔한 실수입니다.

일반적으로 DOM이 완전히 구성되기 전에 스크립트가 실행되는 것을 방지하기 위해, 스크립트를 이벤트 리스너로 감싸지 않고 문서의 `<body>` 닫는 태그(`</body>`) 바로 앞에 배치하는 것으로 충분합니다.

이 이벤트는 취소할 수 없습니다.

## 구문

{{domxref("EventTarget.addEventListener", "addEventListener()")}}와 같은 메서드에서 이벤트 이름을 사용합니다.

```js-nolint
addEventListener("DOMContentLoaded", (event) => {});
```

> [!NOTE]
> 이 이벤트에는 `onDOMContentLoaded` 이벤트 핸들러 프로퍼티가 없습니다.

## 이벤트 타입

제네릭 {{domxref("Event", "이벤트")}}.

## 예제

### 기본 용도

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
```

### DOMContentLoaded 지연시키기

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

  for (let i = 0; i < 1_000_000_000; i++);
  // 이 동기적인 스크립트는 DOM 파싱을 지연시키므로,
  // DOMContentLoaded 이벤트가 더 늦게 실행됩니다.
</script>
```

### 로딩이 이미 완료되었는지 확인하기

때때로 스크립트가 `DOMContentLoaded` 이벤트가 이미 발생한 후에 실행될 수 있습니다. 이는 보통 스크립트가 비동기적으로 실행될 때 발생합니다. 대표적인 경우는 다음과 같습니다.

- 문서가 이미 로드된 후 동적으로 import된 모듈
- `<script async>`로 포함된 스크립트
- 페이지에 동적으로 삽입된 스크립트
- 모듈의 최상위 await 이후를 포함하여, `await fetch(...)`와 같은 비동기 작업 이후에 다시 실행되는 코드.

이런 경우에는 `DOMContentLoaded` 리스너를 추가하기 전에 문서의 `readyState`를 확인해야 합니다.
그렇지 않으면 초기화 로직이 전혀 실행되지 않을 수 있습니다. 반면, 초기 마크업에 포함된 동기적 스크립트(`async`가 없는 경우)에서는 이런 문제가 발생하지 않습니다. 문서는 `DOMContentLoaded` 이벤트를 발생시키기 전에 스크립트 실행을 기다리기 때문에, 리스너 내부의 초기화 로직이 반드시 실행된다는 점이 보장됩니다.

아래는 이를 보여주는 독립적인 예시입니다.

```js
function doSomething() {
  console.info("DOM loaded");
}

if (document.readyState === "loading") {
  // 아직 로딩이 완료되지 않음
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded`가 이미 발생함
  doSomething();
}
```

스크립트는 HTML에서 어떻게 포함되는지를 강제할 수 없습니다. 만약 `<script async>`로 포함되었거나 동적으로 삽입된 경우, 실행 시점에는 이미 `DOMContentLoaded` 이벤트가 발생했을 수 있습니다. 스크립트가 로드될 때 항상 `doSomething()`이 실행되도록 하려면, 문서가 이미 로드된 경우 즉시 `doSomething`을 실행하는 경로와, 문서가 로드된 후에 `doSomething`을 실행하는 두 가지 경로가 필요합니다.

> [!NOTE]
> 여기에는 경쟁 상태(race condition)가 없습니다. 즉, `if` 검사와 `addEventListener()` 호출 사이에 문서가 로드될 가능성은 없습니다. 자바스크립트는 완료될 때까지 실행하는 특성을 가지므로, 이벤트 루프의 한 틱에서 문서가 로딩 중이라면, 다음 사이클이 오기 전까지는 로드가 완료되지 않습니다. 따라서 그때까지 `doSomething` 핸들러가 이미 등록되어 있으며, 이후 이벤트가 발생하면 정상적으로 실행됩니다.

> [!NOTE]
> `document.readyState`는 HTML 파서가 완료된 후, `defer` 속성이나 `type="module"`을 가진 스크립트가 실행되기 전에 `"interactive"`로 설정됩니다. `DOMContentLoaded` 이벤트는 이러한 스크립트들이 실행된 후, `async` 스크립트가 실행되기 전에 발생합니다. 그리고 `document.readyState`는 `async` 스크립트가 모두 실행된 후 `"complete"`로 설정됩니다. 즉, `defer`나 모듈 스크립트가 실행되는 동안 `document.readyState`는 `"interactive"`이지만, 여전히 `DOMContentLoaded` 리스너를 등록해 정상적으로 동작시킬 수 있습니다. 실제로 대부분의 경우, `doSomething()`을 약간 일찍 실행하는 것은 문제가 되지 않으며, 다른 `defer`나 모듈 스크립트가 설정한 전역 상태에 의존하지 않는 한 괜찮습니다.

### 실시간 예제

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += "DOMContentLoaded\n";
});
```

#### 결과

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련된 이벤트: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
