---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`sup()`** создаёт HTML-элемент {{HTMLElement("sup")}}, заставляющий строку отображаться надстрочным текстом (верхним индексом).

## Синтаксис

```
str.sup()
```

## Описание

Метод `sup()` заключает строку в тег `<sup>`: `"<sup>str</sup>"`.

## Примеры

### Пример: использование методов `sub()` и `sup()`

В следующем примере для форматирования строки используются методы {{jsxref("String.prototype.sub()", "sub()")}} и `sup()`:

```js
var superText = "надстрочный";
var subText = "подстрочный";

document.write("Вот так выглядит " + superText.sup() + " текст.");
document.write("Вот так выглядит " + subText.sub() + " текст.");
```

Этот пример генерирует такой же вывод, как и следующий HTML:

```html
Вот так выглядит <sup>надстрочный</sup> текст. Вот так выглядит
<sub>подстрочный</sub> текст.
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.sub()")}}
