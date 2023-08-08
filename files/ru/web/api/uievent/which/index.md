---
title: KeyboardEvent.which
slug: Web/API/UIEvent/which
---

{{APIRef ("События DOM")}} {{Deprecated_header}}
Свойство which только для чтения интерфейса {{domxref ("KeyboardEvent")}} возвращает числовой код клавиши нажатой клавиши или код символа (charCode) для нажатой буквенно-цифровой клавиши.

## Синтаксис

```
var keyResult = event.which;
```

### Параметры

- `keyResult содержит числовой код для конкретной нажатой клавиши, в зависимости от того, была ли нажата буквенно-цифровая или не буквенно-цифровая клавиша. Пожалуйста, смотрите {{domxref ("KeyboardEvent.charCode")}} и {{domxref ("KeyboardEvent.keyCode")}} для получения дополнительной информации.`

## Примеры

```html
<html>
  <head>
    <title>charCode/keyCode/which example</title>

    <script type="text/javascript">
      function showKeyPress(evt) {
        alert(
          "onkeypress handler: \n" +
            "keyCode property: " +
            evt.keyCode +
            "\n" +
            "which property: " +
            evt.which +
            "\n" +
            "charCode property: " +
            evt.charCode +
            "\n" +
            "Character Key Pressed: " +
            String.fromCharCode(evt.charCode) +
            "\n",
        );
      }

      function keyDown(evt) {
        alert(
          "onkeydown handler: \n" +
            "keyCode property: " +
            evt.keyCode +
            "\n" +
            "which property: " +
            evt.which +
            "\n",
        );
      }
    </script>
  </head>

  <body onkeypress="showKeyPress(event);" onkeydown="keyDown(event);">
    <p>Please press any key.</p>
  </body>
</html>
```

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("KeyboardEvent")}}, the interface this property belongs too.
