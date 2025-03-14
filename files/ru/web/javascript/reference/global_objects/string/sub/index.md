---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`sub()`** создаёт HTML-элемент {{HTMLElement("sub")}}, заставляющий строку отображаться подстрочным текстом (нижним индексом).

## Синтаксис

```
str.sub()
```

## Описание

Метод `sub()` заключает строку в тег `<sub>`: `"<sub>str</sub>"`.

## Примеры

### Пример: использование методов `sub()` и `sup()`

В следующем примере для форматирования строки используются методы `sub()` и {{jsxref("String.prototype.sup()", "sup()")}}:

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

- {{jsxref("String.prototype.sup()")}}
