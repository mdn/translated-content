---
title: GlobalEventHandlers.onkeydown
slug: conflicting/Web/API/Element/keydown_event
original_slug: Web/API/GlobalEventHandlers/onkeydown
---

{{ApiRef("HTML DOM")}}

Свойство **`onkeydown`** возвращает обработчик события {{event("keydown")}} на текущем элементе.

Событие `keydown` вызывается, когда пользователь нажал клавишу на клавиатуре.

## Синтаксис

```
element.onkeydown = event handling code
```

### Значение

Имя функции `functionRef` или [function expression](/ru/docs/Web/JavaScript/Reference/Operators/function). Функция получает объект {{domxref("KeyboardEvent")}} в качестве единственного аргумента.

## Пример

Этот пример показывает значение {{domxref("KeyboardEvent.code")}}, когда вы нажимаете клавишу внутри элемента {{HtmlElement("input")}}.

### HTML

```html
<input>
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.onkeydown = logKey;

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

### Результат

{{EmbedLiveSample("Пример")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Событие {{Event("keydown")}}
- Похожие обработчики событий

  - {{domxref("GlobalEventHandlers.onkeypress")}}
  - {{domxref("GlobalEventHandlers.onkeyup")}}
