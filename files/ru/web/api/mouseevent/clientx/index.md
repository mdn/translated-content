---
title: MouseEvent.clientX
slug: Web/API/MouseEvent/clientX
---

{{APIRef("DOM Events")}}

**`MouseEvent.clientX`** свойство доступное только для чтения. Это свойство является горизонтальной координатой в пределах клиентской области приложения, на которой произошло событие (в отличие от координат внутри страницы). Для примера, нажатие в верхнем левом углу клиентской области будет всегда приводить к событию со значением свойства `clientX` равным 0, независимо от того, прокручена страницы по горизонтали или нет.

## Синтаксис

```
var x = instanceOfMouseEvent.clientX
```

### Возвращаемое значение

Числовое значение горизонтальной координаты

## Пример

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
- {{domxref("MouseEvent.clientY","clientY")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
