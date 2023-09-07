---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
---

{{JSRef("Global_Objects", "String")}} {{deprecated_header}}

## Сводка

Метод **`big()`** создаёт HTML-элемент {{HTMLElement("big")}}, заставляющий строку отображаться большим шрифтом.

> **Примечание:** элемент \<big> был удалён из [HTML5](/ru/docs/Web/Guide/HTML/HTML5) и больше не должен использоваться. Вместо него веб-разработчикам следует использовать свойства [CSS](/ru/docs/Web/CSS).

## Синтаксис

```
str.big()
```

## Описание

Метод `big()` заключает строку в тег `<big>`: `"<big>str</big>"`.

## Примеры

### Пример: использование метода `big()`

В следующем примере демонстрируется использование нескольких строковых методов для изменения размера строки:

```js
var worldString = "Привет, мир";

console.log(worldString.small()); // <small>Привет, мир</small>
console.log(worldString.big()); // <big>Привет, мир</big>
console.log(worldString.fontsize(7)); // <font size=7>Привет, мир</font>
```

При помощи объекта {{domxref("HTMLElement.style", "element.style")}} вы можете получить значение атрибута `style` элемента и управлять им более обобщённым способом, например:

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Спецификации

| Спецификация                                                             | Статус           | Комментарии                                                                                                                                                 |
| ------------------------------------------------------------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.big', 'String.prototype.big')}} | {{Spec2('ES6')}} | Изначальное определение. Реализована в JavaScript 1.0. Определена в (нормативном) Приложении B по Дополнительным возможностям ECMAScript для веб-браузеров. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
