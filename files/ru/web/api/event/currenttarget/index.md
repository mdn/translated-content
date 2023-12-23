---
title: "Event: свойство currentTarget"
slug: Web/API/Event/currentTarget
---

{{ APIRef("DOM") }}

Доступное только для чтения свойство **`currentTarget`** интерфейса {{ domxref("Event") }} идентифицирует элемент, к которому был прикреплён обработчик события.

Это не всегда будет тот же элемент, для которого событие было запущено, потому что событие могло быть запущено на потомке элемента с обработчиком, а затем [всплыть](/ru/docs/Learn/JavaScript/Building_blocks/Events#всплытие_и_перехват_событий) выше к элементу с обработчиком. Элемент, на котором было запущено событие, предоставляется {{ domxref("Event.target") }}.

## Значение

{{ domxref("EventTarget") }}, представляющий объект, к которому текущий обработчик событий прикреплён.

## Примеры

### currentTarget против target

Этот пример иллюстрирует разницу между `currentTarget` и `target`.

#### HTML

На странице есть "родительский" {{ htmlelement("div") }}, содержащий "дочерний" `<div>`.

```html
<div id="parent">
  Нажать родительский
  <div id="child">Нажать дочерний</div>
</div>

<button id="reset">Сбросить</button>
<pre id="output"></pre>
```

```css hidden
button,
div,
pre {
  margin: 0.5rem;
}

div {
  padding: 1rem;
  border: 1px solid black;
}
```

#### JavaScript

Обработчик событий прикрепляется к родительскому элементу. Он регистрирует значение `event.currentTarget` и `event.target`.

У нас также есть кнопка "Сбросить", которая просто перезагружает пример.

```js
const output = document.querySelector("#output");
const parent = document.querySelector("#parent");
parent.addEventListener("click", (event) => {
  const currentTarget = event.currentTarget.getAttribute("id");
  const target = event.target.getAttribute("id");
  output.textContent = `Current target: ${currentTarget}\n`;
  output.textContent += `Target: ${target}`;
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Результат

Если вы нажимаете внутри дочернего элемента `<div>`, тогда `target` идентифицирует дочерний элемент. Если вы нажимаете внутри родительского `<div>`, тогда `target` идентифицирует родительский элемент.

В обоих случаях `currentTarget` идентифицирует родительский элемент, потому что это элемент, к которому прикреплён обработчик.

{{ EmbedLiveSample("currentTarget против target", 100, 250) }}

## Спецификации

{{ Specifications }}

## Совместимость с браузерами

{{ Compat }}

## Смотрите также

- [Comparison of Event Targets](/ru/docs/Web/API/Event/Comparison_of_Event_Targets)
- [Event bubbling](/ru/docs/Learn/JavaScript/Building_blocks/Events#всплытие_и_перехват_событий)
