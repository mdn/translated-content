---
title: keyup
slug: Web/API/Element/keyup_event
---

{{APIRef}}

Событие **`keyup`** срабатывает, когда клавиша была отпущена.

<table class="properties">
  <thead></thead>
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("KeyboardEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onkeyup", "onkeyup")}}
      </td>
    </tr>
  </tbody>
</table>

События [`keydown`](/ru/docs/Web/API/Element/keydown_event) и `keyup` показывают то, что клавиша была нажата, в то время как `keypress` показывает то, какой символ был введён. Например, прописную "a" `keydown` и `keyup` сообщат как 65, а `keypress` сообщит как 97. Заглавную же "A" все события сообщают как 65.

## Примеры

### Примеры addEventListener keyup

Этот пример отображает значение {{domxref("KeyboardEvent.code")}} всякий раз, когда вы отпускаете клавишу внутри {{HtmlElement("input")}} элемента.

```html
<input
  placeholder="Кликните здесь, затем нажмите и отпустите клавишу."
  size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("Примеры_addEventListener_keyup")}}

### Аналог onkeyup

```js
input.onkeyup = logKey;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`input`](/ru/docs/Web/API/HTMLElement/input_event)
- [`keydown`](/ru/docs/Web/API/Element/keydown_event)
- [`keypress`](/ru/docs/Web/API/Element/keypress_event)
- [Document `keyup` event](/ru/docs/Web/API/Document/keyup_event)
