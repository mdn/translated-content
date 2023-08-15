---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
---

{{JSRef("Global_Objects", "String")}} {{deprecated_header}}

## Сводка

Метод **`italics()`** создаёт HTML-элемент {{HTMLElement("i")}}, заставляющий строку отображаться курсивом.

## Синтаксис

```
str.italics()
```

## Описание

Метод `italics()` заключает строку в тег `<i>`: `"<i>str</i>"`.

## Примеры

### Пример: использование метода `italics()`

В следующем примере демонстрируется использование нескольких строковых методов для изменения форматирования строки:

```js
var worldString = "Привет, мир";

document.write(worldString.blink());
document.write(worldString.bold());
document.write(worldString.italics());
document.write(worldString.strike());
```

Этот пример генерирует такой же вывод, как и следующий HTML:

```html
<blink>Привет, мир</blink>
<b>Привет, мир</b>
<i>Привет, мир</i>
<strike>Привет, мир</strike>
```

## Спецификации

| Спецификация                                                                     | Статус           | Комментарии                                                                                                                                                 |
| -------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.italics', 'String.prototype.italics')}} | {{Spec2('ES6')}} | Изначальное определение. Реализована в JavaScript 1.0. Определена в (нормативном) Приложении B по Дополнительным возможностям ECMAScript для веб-браузеров. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
