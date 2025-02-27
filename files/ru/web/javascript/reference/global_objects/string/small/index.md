---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`small()`** создаёт HTML-элемент {{HTMLElement("small")}}, заставляющий строку отображаться маленьким шрифтом.

## Синтаксис

```
str.small()
```

## Описание

Метод `small()` заключает строку в тег `<small>`: `"<small>str</small>"`.

## Примеры

### Пример: использование метода `small()`

В следующем примере демонстрируется использование нескольких строковых методов для изменения размера строки:

```js
var worldString = "Привет, мир";

console.log(worldString.small()); // <small>Привет, мир</small>
console.log(worldString.big()); // <big>Привет, мир</big>
console.log(worldString.fontsize(7)); // <fontsize=7>Привет, мир</fontsize>
```

При помощи объекта {{domxref("HTMLElement.style", "element.style")}} вы можете получить значение атрибута `style` элемента и управлять им более обобщённым способом, например:

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
