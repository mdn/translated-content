---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
---

{{JSRef("Global_Objects", "String")}} {{deprecated_header}}

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

| Спецификация                                                                 | Статус           | Комментарии                                                                                                                                                 |
| ---------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.small', 'String.prototype.small')}} | {{Spec2('ES6')}} | Изначальное определение. Реализована в JavaScript 1.0. Определена в (нормативном) Приложении B по Дополнительным возможностям ECMAScript для веб-браузеров. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
