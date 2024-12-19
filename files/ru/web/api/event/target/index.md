---
title: Event.target
slug: Web/API/Event/target
---

{{APIRef("DOM")}} {{AvailableInWorkers}}

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

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Comparison of Event Targets](/ru/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
