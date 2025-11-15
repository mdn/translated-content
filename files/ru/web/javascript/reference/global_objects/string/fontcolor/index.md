---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
---

{{JSRef}} {{deprecated_header}}

## Сводка

Метод **`fontcolor()`** создаёт HTML-элемент {{HTMLElement("font")}}, заставляющий строку отображаться шрифтом указанного цвета.

> [!NOTE]
> Элемент \<font> был удалён из [HTML5](/ru/docs/Glossary/HTML5) и больше не должен использоваться. Вместо него веб-разработчикам следует использовать свойства [CSS](/ru/docs/Web/CSS).

## Синтаксис

```
str.fontcolor(color)
```

### Параметры

- `color`
  - : Строка, выражающая цвет в виде шестнадцатеричного триплета RGB, либо в виде названия цвета. Названия цветов перечислены в [справочнике по значению цвета в CSS](/ru/docs/Web/CSS/Reference/Values/color_value).

## Описание

Если вы выразили цвет в виде шестнадцатеричного триплета RGB, вы должны использовать формат `rrggbb`. Например, шестнадцатеричные значения RGB для оранжево-розового цвета такие: красный=FA, зелёный=80 и синий=72, так что RGB-триплет для оранжево-розового цвета будет следующим `"FA8072"`.

## Примеры

### Пример: использование метода `fontcolor()`

В следующем примере метод `fontcolor()` используется для изменения цвета строки путём генерирования строки с HTML-тегом `<font>`.

```js
var worldString = "Привет, мир";

console.log(worldString.fontcolor("red") + " на этой строке красный");
// '<font color="red">Привет, мир</font> на этой строке красный'

console.log(
  worldString.fontcolor("FF00") +
    " на этой строке красный в шестнадцатеричной форме",
);
// '<font color="FF00">Привет, мир</font> на этой строке красный в шестнадцатеричной форме'
```

При помощи объекта {{domxref("HTMLElement.style", "element.style")}} вы можете получить значение атрибута `style` элемента и управлять им более обобщённым способом, например:

```js
document.getElementById("yourElemId").style.color = "red";
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.fontsize()")}}
