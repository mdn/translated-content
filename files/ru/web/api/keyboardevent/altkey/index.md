---
title: KeyboardEvent.altKey
slug: Web/API/KeyboardEvent/altKey
---

{{APIRef("DOM Events")}}

**`KeyboardEvent.altKey`** свойство только для чтения, возвращает {{jsxref("Boolean")}}, если клавиша <kbd>alt</kbd> (<kbd>Option</kbd> или <kbd>⌥</kbd> на OS X) была нажата (`true`) или не нажата (`false`), когда событие произошло.

## Синтаксис

```
var altKeyPressed = instanceOfKeyboardEvent.altKey
```

## Пример

```js
<html>
<head>
<title>altKey example</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Нажата клавиша: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "клавиша ALT нажата: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>
Нажмите любую клавишу с зажатой клавишей ALT или без неё<br />
Вы можете также использовать SHIFT вместе с ALT.
</p>
</body>
</html>
```

## Спецификация

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{ domxref("KeyboardEvent") }}
