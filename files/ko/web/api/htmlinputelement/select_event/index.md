---
title: 'Element: select event'
slug: Web/API/HTMLInputElement/select_event
original_slug: Web/API/Element/select_event
---

{{APIRef}}

**`select`** 이벤트는 어떤 텍스트가 선택되었을 때 발생됩니다.

| Bubbles                | Yes                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| Cancelable             | No                                                                                                    |
| Interface              | 유저 인터페이스로부터 발생된 경우 {{domxref("UIEvent")}}, 아니라면 {{domxref("Event")}} |
| Event handler property | {{domxref("GlobalEventHandlers.onselect", "onselect")}}                              |

The event is not available for all elements in all languages. For example, in HTML, `select` events can be dispatched only on form `{{HtmlElement('input/text', '&lt;input type="text"&gt;')}}` and {{HtmlElement("textarea")}} elements.

## Examples

### Selection logger

```html
<input value="Try selecting some text in this element.">
<p id="log"></p>
```

```js
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### onselect equivalent

You can also set up the event handler using the {{domxref("GlobalEventHandlers.onselect", "onselect")}} property:

```js
input.onselect = logSelection;
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
