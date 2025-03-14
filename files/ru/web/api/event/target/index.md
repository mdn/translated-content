---
title: "Event: свойство target"
slug: Web/API/Event/target
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Доступное только для чтения свойство **`target`** интерфейса {{domxref("Event")}} содержит ссылку на элемент, в котором возникло событие.
Он может отличаться от {{domxref("Event.currentTarget")}}, на котором сработал обработчик события в фазе всплытия или захвата события.

## Значение

Связанный {{domxref("EventTarget")}}.

## Примеры

Свойство `event.target` может быть использовано для реализации **делегирования событий**.

```js
// Создадим список
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target будет указывать на элемент <li>, по которому был произведён клик
  // evt.currentTarget будет указывать на родительский элемент <ul>
  evt.target.style.visibility = "hidden";
}

// Добавим обработчик события на список
// Он будет вызываться при клике на каждом элементе <li>
ul.addEventListener("click", hide, false);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Всплытие событий](/ru/docs/Learn_web_development/Core/Scripting/Event_bubbling)
