---
title: blur (event)
slug: Web/API/Element/blur_event
---

Событие `blur` вызывается когда элемент теряет фокус. Главное отличие между этим событием и [`focusout`](/ru/docs/Mozilla_event_reference/focusout) только в том что у последнего есть фаза всплытия.

## Основная информация

- Спецификация
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-blur)
- Интерфейс
  - : {{domxref("FocusEvent")}}
- Всплытие
  - : Нет
- Отменяемый
  - : Нет
- Цель
  - : Элемент
- Действие по умолчанию
  - : Нет

Значение {{domxref("Document.activeElement")}} меняется в зависимости от браузера во время выполнения этого события ({{bug(452307)}}): IE10 устанавливает его к элементу на который будет перемещён фокус, в то время как Firefox и Chrome обычно устанавливают его к `body` документа

## Свойства

| Property                           | Type                                     | Description                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target (DOM element)                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | null                                       |

## Делегирование события

Есть два способа реализовать делегирование этого события: использовать событие `focusout` в браузерах которые поддерживают его (все браузеры, Firefox с 52+), или установить параметр "useCapture" метода [`addEventListener`](/ru/docs/DOM/element.addEventListener) на `true`:

### HTML Content

```html
<form id="form">
  <input type="text" placeholder="text input" />
  <input type="password" placeholder="password" />
</form>
```

### JavaScript Content

```js
var form = document.getElementById("form");
form.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
  },
  true,
);
form.addEventListener(
  "blur",
  function (event) {
    event.target.style.background = "";
  },
  true,
);
```

{{EmbedLiveSample('Делегирование_события')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Похожие события

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
