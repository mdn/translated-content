---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`bold()`** создаёт HTML-элемент {{HTMLElement("b")}}, заставляющий строку отображаться полужирным шрифтом.

## Синтаксис

```
str.bold()
```

## Описание

Метод `bold()` заключает строку в тег `<b>`: `"<b>str</b>"`.

## Примеры

### Пример: использование метода `bold()`

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
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
