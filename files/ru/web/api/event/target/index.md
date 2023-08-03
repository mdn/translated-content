---
title: Event.target
slug: Web/API/Event/target
---

{{ApiRef("DOM")}}

Свойство **`target`** интерфейса {{domxref ("Event")}} является ссылкой на объект, который был инициатором события. Он отличается от {{domxref ("Event.currentTarget")}}, если обработчик события вызывается во время всплытия (bubbling) или захвата события.

Синтаксис

```
theTarget = event.target
```

Значение:

{{domxref("EventTarget")}}

## Пример

Свойство `event.target` может быть использовано для реализации **делегирования событий**.

```
// Создадим список
var ul = document.createElement('ul');
document.body.appendChild(ul);

var li1 = document.createElement('li');
var li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e){
  // e.target ссылается на кликнутый <li> элемент
  // Он отличается от e.currentTarget который будет ссылаться на родительский <ul> в этом контексте
  e.target.style.visibility = 'hidden';
}

// Назначим обработчик к списку
// Он будет вызван когда кликнут на любой <li>
ul.addEventListener('click', hide, false);
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
  var target = e.target || e.srcElement;
  target.style.visibility = "hidden";
}
```

## Смотрите также

- [Comparison of Event Targets](/ru/docs/Web/API/Event/Comparison_of_Event_Targets)
