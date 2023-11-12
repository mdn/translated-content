---
title: "Document: readystatechange event"
slug: Web/API/Document/readystatechange_event
---

{{APIRef}}

**`readystatechange`** 이벤트는 현재 페이지의 {{domxref("Document.readyState", "readyState")}} 속성값이 변할 때 발생한다.

| Bubbles                | No                   |
| ---------------------- | -------------------- |
| Cancelable             | No                   |
| Interface              | {{domxref("Event")}} |
| Event handler property | `onreadystatechange` |

## Examples

### Live example

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
</div>

<div class="event-log">
  <label>Event log:</label>
  <textarea readonly class="event-log-contents" rows="8" cols="30"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control  log";
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

#### JS

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent = log.textContent + "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent = log.textContent + `DOMContentLoaded\n`;
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- Related events: [`DOMContentLoaded`](/ko/docs/Web/API/Document/DOMContentLoaded_event), [`load`](/ko/docs/Web/API/Window/load_event), [`beforeunload`](/ko/docs/Web/API/Window/beforeunload_event), [`unload`](/ko/docs/Web/API/Window/unload_event)
