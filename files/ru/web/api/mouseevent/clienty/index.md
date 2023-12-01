---
title: MouseEvent.clientY
slug: Web/API/MouseEvent/clientY
---

{{APIRef("DOM Events")}}

**`MouseEvent.clientY`** свойство доступное только для чтения. Это свойство является вертикальной координатой в пределах клиентской области приложения, на которой произошло событие (в отличие от координат внутри страницы). Для примера, нажатие в верхнем левом углу клиентской области будет всегда приводить к событию со значением свойства `clientY` равным 0, независимо от того, прокручена страницы по вертикали или нет.

## Синтаксис

```
var y = instanceOfMouseEvent.clientY
```

### Возвращаемое значение

Числовое значение вертикальной координаты

## Example

```html
<!doctype html>
<html>
  <head>
    <title>Пример для clientX\clientY</title>

    <script>
      function showCoords(evt) {
        alert(
          "clientX value: " +
            evt.clientX +
            "\n" +
            "clientY value: " +
            evt.clientY +
            "\n",
        );
      }
    </script>
  </head>

  <body onmousedown="showCoords(event)">
    <p>Для показа координат мышки нажмите в любом месте страницы.</p>
  </body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ domxref("MouseEvent") }}
- {{domxref("MouseEvent.clientX","clientX")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
