---
title: "Event: свойство currentTarget"
slug: Web/API/Event/currentTarget
l10n:
  sourceCommit: 435d49ec4d4d828a1f9a4e6c0b292b48c332aa22
---

{{APIRef("DOM")}}

Доступное только для чтения свойство **`currentTarget`** интерфейса {{domxref("Event")}} указывает на элемент, к которому был прикреплён обработчик события.

Это не всегда будет тот же элемент, на котором сработало событие, потому что событие могло быть вызвано на потомке элемента, а затем [всплыть](/ru/docs/Learn/JavaScript/Building_blocks/Events#всплытие_и_перехват_событий) выше к элементу с обработчиком. Элемент, на котором было вызвано событие, можно получить с помощью {{domxref("Event.target")}}.

## Значение

{{domxref("EventTarget")}}, представляющий объект, к которому прикреплён текущий обработчик событий.

## Примеры

### currentTarget и target

Этот пример иллюстрирует разницу между `currentTarget` и `target`.

#### HTML

На странице есть «родительский» {{htmlelement("div")}}, содержащий «дочерний» `<div>`.

```html
<div id="parent">
  Нажатие внутри родительского элемента
  <div id="child">Нажатие внутри дочернего элемента</div>
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
Также есть кнопка «Сбросить», которая просто перезагружает страницу с примером.

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

Если происходит нажатие внутри дочернего элемента `<div>`, тогда `target` указывает на дочерний элемент. Если внутри родительского `<div>`, тогда `target` указывает на родительский элемент.

В обоих случаях `currentTarget` указывает на родительский элемент, потому что к нему прикреплён обработчик события.

{{EmbedLiveSample("currentTarget и target", 100, 250)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Сравнение разных Event Targets](/ru/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
- [Всплытие и перехват событий](/ru/docs/Learn/JavaScript/Building_blocks/Events#всплытие_и_перехват_событий)
