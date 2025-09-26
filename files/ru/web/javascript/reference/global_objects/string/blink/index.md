---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`blink()`** создаёт HTML-элемент `<blink>`, заставляющий строку мерцать.

> [!WARNING]
> Мерцающий текст осуждается некоторыми стандартами доступности. Сам элемент `<blink>` является нестандартным и устаревшим!

## Синтаксис

```
str.blink()
```

## Описание

Метод `blink()` заключает строку в тег `<blink>`: `"<blink>str</blink>"`.

## Примеры

### Пример: использование метода `blink()`

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

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
