---
title: TouchEvent.altKey
slug: Web/API/TouchEvent/altKey
---

{{APIRef("Touch Events") }}

## Сводка

Логическое ({{jsxref("Boolean")}}) значение, показывающее, была ли активирована клавиша <kbd>alt</kbd> (Alternate), когда событие касания было создано. Если клавиша <kbd>alt</kbd> активирована, значение равно `true`. В противном случае оно равно `false`.

Данное свойство предназначено {{readonlyInline}}.

## Синтаксис

```
var altEnabled = touchEvent.altKey;
```

### Возвращаемое значение

- `altEnabled`

  - : `true` если клавиша&#x20;

    <kbd>alt</kbd>

    &#x20;активирована для данного события; и `false` если нет.

## Пример

Данный пример демонстрирует доступ к свойствам клавиш-модификаторов события {{domxref("TouchEvent")}}: {{domxref("TouchEvent.altKey")}}, {{domxref("TouchEvent.ctrlKey")}}, {{domxref("TouchEvent.metaKey")}} и {{domxref("TouchEvent.shiftKey")}}.

В фрагменте кода ниже обработчик события {{event("touchstart")}} логирует состояние клавиш-модификаторов события.

```js
someElement.addEventListener(
  "touchstart",
  function (e) {
    // Log the state of this event's modifier keys
    console.log("altKey = " + e.altKey);
    console.log("ctrlKey = " + e.ctrlKey);
    console.log("metaKey = " + e.metaKey);
    console.log("shiftKey = " + e.shiftKey);
  },
  false,
);
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
