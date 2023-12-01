---
title: MouseEvent.shiftKey
slug: Web/API/MouseEvent/shiftKey
---

{{APIRef("DOM Events")}}

**`MouseEvent.shiftKey`** атрибут только для чтения , который указывает была ли нажата клавиша <kbd>shift</kbd> . Возвращает (`true`) если нажата <kbd>shift</kbd>, (`false`) если нет.

## Синтаксис

```
var shiftKeyPressed = instanceOfMouseEvent.shiftKey
```

### Возвращаемое значение

Логический

## Пример

```js
<html>
<head>
<title>shiftKey example</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "SHIFT key pressed: " + e.shiftKey + "\n"
    + "ALT key pressed: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>Нажмите на любую символьную клавишу удерживая или не удерживая клавишу SHIFT.<br />
Вы также можете использовать клавишу SHIFT вместе с клавишей ALT.</p>
</body>
</html>
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ domxref("MouseEvent") }}
