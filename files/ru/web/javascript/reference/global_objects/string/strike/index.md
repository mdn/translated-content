---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`strike()`** создаёт HTML-элемент {{HTMLElement("strike")}}, заставляющий строку отображаться зачёркнутым текстом.

## Синтаксис

```
str.strike()
```

## Описание

Метод `strike()` заключает строку в тег `<strike>`: `"<strike>str</strike>"`.

## Примеры

### Пример: использование метода `strike()`

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

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
