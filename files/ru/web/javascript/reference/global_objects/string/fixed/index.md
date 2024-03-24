---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`fixed()`** создаёт HTML-элемент {{HTMLElement("tt")}}, заставляющий строку отображаться моноширинным шрифтом.

## Синтаксис

```
str.fixed()
```

## Описание

Метод `fixed()` заключает строку в тег `<tt>`: `"<tt>str</tt>"`.

## Примеры

### Пример: использование метода `fixed()`

В следующем примере для изменения форматирования строки используется метод `fixed()`:

```js
var worldString = "Привет, мир";

document.write(worldString.fixed());
```

Этот пример генерирует такой же вывод, как и следующий HTML:

```html
<tt>Привет, мир</tt>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
