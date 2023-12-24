---
title: "Event: свойство target"
slug: Web/API/Event/target
---

{{ApiRef("DOM")}}

Доступное только для чтения свойство **`target`** интерфейса {{domxref ("Event")}} является ссылкой на объект, который был инициатором события. Он отличается от {{domxref ("Event.currentTarget")}}, если обработчик события вызывается во время всплытия (bubbling) или захвата события.

Синтаксис:

```js
const theTarget = event.target;
```

## Значение

Связано с {{domxref("EventTarget")}}.

## Пример

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
  // evt.target ссылается на элемент <li>, на котором произошло нажатие
  // Он отличается от evt.currentTarget, который будет ссылаться на родительский <ul> в этом контексте
  evt.target.style.visibility = "hidden";
}

// Назначим обработчик к списку
// Он будет вызван, когда нажатие произошло на любом из <li>
ul.addEventListener("click", hide, false);
```

## Спецификации

{{Specifications}}

## Поддержка браузеров

{{Compat}}

## Примечания

В IE 6-8 модель событий отличается. Обработчики событий назначаются с помощью нестандартного {{domxref('EventTarget.attachEvent')}} метода. При этом в объекте события есть свойство {{domxref('Event.srcElement')}}, вместо `target` свойства, но по смыслу оно идентично `event.target`.

```js
function hide(e) {
  // Поддержка IE 6-8
  const target = e.target || e.srcElement;
  target.style.visibility = "hidden";
}
```

## Смотрите также

- [Сравнение разных Event Targets](/ru/docs/Web/API/Event/Comparison_of_Event_Targets)
