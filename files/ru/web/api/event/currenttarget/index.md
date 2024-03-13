---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
---

{{APIRef("DOM")}}

Определяет элемент, в котором в данный момент обрабатывается событие, при движении события внутри DOM. Всегда совпадает элементом, на котором обработчик события был назначен, в отличие от свойства `event.target`, идентифицирующего элемент, на котором событие возникло.

## Пример

`event.currentTarget` используется, когда один и тот же обработчик события присваивается нескольким элементам.

```js
function hide(e) {
  e.currentTarget.style.visibility = "hidden";
  // Когда данная функция используется в качестве обработчика события: this === e.currentTarget
}

var ps = document.getElementsByTagName("p");

for (var i = 0; i < ps.length; i++) {
  ps[i].addEventListener("click", hide, false);
}

// click around and make paragraphs disappear
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Comparison of Event Targets](/ru/docs/Web/API/Event/Comparison_of_Event_Targets)
