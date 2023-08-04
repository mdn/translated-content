---
title: MouseEvent.ctrlKey
slug: Web/API/MouseEvent/ctrlKey
---

{{APIRef("DOM Events")}}

Свойство только для чтения **`MouseEvent.ctrlKey`** возвращает true, когда клавиша Ctrl была нажата, а если нет - false.

## Синтаксис

```
var ctrlKeyPressed = instanceOfMouseEvent.ctrlKey
```

### Возвращаемое значение

Boolean

## Пример

```js
<html>
<head>
<title>Пример с ctrlKey</title>

<script type="text/javascript">
document.addEventListener('click', function(e) {
  console.log('Нажата клавиша Ctrl?', e.ctrlKey);
})
</script>
</head>

<body>
<p>
Кликните в любое место на странице и откройте консоль разработчика, чтобы узнать - нажата ли клавиша Ctrl?
</p>
</body>
</html>
```

## Спецификации

{{Specifications}}

## Поддержка браузеров

{{Compat}}

## Смотрите также

- {{ domxref("MouseEvent") }}
