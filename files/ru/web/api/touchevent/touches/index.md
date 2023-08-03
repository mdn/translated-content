---
title: TouchEvent.touches
slug: Web/API/TouchEvent/touches
---

{{ APIRef("Touch Events") }}

**`touches`** это доступный только для чтения список {{ domxref("TouchList") }}, в котором перечислены все объекты {{ domxref("Touch") }} для точек контакта с сенсорной поверхностью, независимо от того, изменились ли они и какой целевой элемент был у них во время события {{event("touchstart")}}.

Вы можете воспринимать это как перечисление отдельных пальцев, которые могут быть идентифицированы при касании экрана.

## Синтаксис

```
var touches = touchEvent.touches;
```

### Возвращаемое значение

- `touches`
  - : Список {{ domxref("TouchList") }} всех объектов {{ domxref("Touch") }} для точек контакта с сенсорной поверхностью, независимо от того, изменились ли они и какой целевой элемент был у них во время события {{event("touchstart")}}.

## Пример

Этот пример демонстрирует свойство {{domxref("TouchEvent.touches")}} объекта {{domxref("TouchEvent")}}. Свойство {{domxref("TouchEvent.touches")}} это объект {{domxref("TouchList")}}, который содержит список объектов {{domxref("Touch")}} для каждой активной точки контакта с сенсорной поверхностью.

В следующем фрагменте кода обработчик события {{event("touchstart")}} проверяет длину списка {{domxref("TouchEvent.touches")}} для определения количества точек касаний, которые были активированы, а затем вызывает разные обработчики в зависимости от количества таких точек.

```js
someElement.addEventListener(
  "touchstart",
  function (e) {
    // Вызов определённого обработчика, в зависимости от
    // количества точек касания
    switch (e.touches.length) {
      case 1:
        handle_one_touch(e);
        break;
      case 2:
        handle_two_touches(e);
        break;
      case 3:
        handle_three_touches(e);
        break;
      default:
        console.log("Not supported");
        break;
    }
  },
  false,
);
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
