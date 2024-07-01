---
title: keydown
slug: Web/API/Element/keydown_event
---

{{APIRef}}

Событие **`keydown`** срабатывает, когда клавиша была нажата.

В отличии от события {{Event("keypress")}}, событие keydown срабатывает на всех клавишах, независимо от того, есть ли у них значение.

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
        {{domxref("GlobalEventHandlers.onkeydown", "onkeydown")}}
      </td>
    </tr>
  </tbody>
</table>

События `keydown` и [`keyup`](/ru/docs/Web/API/Element/keyup_event) показывают то, что клавиша была нажата, в то время как `keypress` показывает то, какой символ был введён. Например, прописную "a" `keydown` и `keyup` сообщат как 65, а `keypress` сообщит как 97. Заглавную же "A" все события сообщают как 65.

События клавиатуры генерируются только в `<inputs>`, `<textarea>` и любых элементах с атрибутом `contentEditable` или `tabindex="-1"`.

## Примеры

### Примеры addEventListener keydown

Этот пример отображает значение [`KeyboardEvent.code`](/ru/docs/Web/API/KeyboardEvent/code) всякий раз, когда вы нажимаете клавишу внутри [`<input>`](/ru/docs/Web/HTML/Element/input) элемента.

```html
<input placeholder="Кликните здесь, затем нажмите клавишу." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("Примеры_addEventListener_keydown")}}

### Аналог onkeydown

```js
input.onkeydown = logKey;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`input`](/ru/docs/Web/API/HTMLElement/input_event)
- [`keypress`](/ru/docs/Web/API/Element/keypress_event)
- [`keyup`](/ru/docs/Web/API/Element/keyup_event)
- [Document `keydown` event](/ru/docs/Web/API/Document/keydown_event)
