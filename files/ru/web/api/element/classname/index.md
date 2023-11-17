---
title: Element.className
slug: Web/API/Element/className
---

{{APIRef("DOM")}}

## Описание

Свойство **className** отвечает за значение атрибута **class** элемента.

> **Примечание:** Кстати, у **className** есть большой брат. Его зовут {{domxref("element.classList")}} - более мощный и функциональный метод для работы с классами элемента.

## Синтаксис

```
var cName = elem.className;
elem.className = cName;
```

- **_cName_** - строка. Если нужно указать несколько классов, они указываются через пробел.

## Пример

```
<div class="booble example"> </div>
```

```js
var elm = document.querySelector("div");

alert(elm.className); //"booble example"

elm.className = "class1 class2 class3";
alert(elm.className); //"class1 class2 class3"
```

> **Примечание:** ##### Примечание:Свойство получило необычное название **`className`** из-за того, что во многих языках, работающих с DOM, слово _class_ является зарезервированным*.*

## Поддержка браузерами

{{Compat}}

## Спецификация

- [DOM Level 2 HTML: className](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95362176)

## Смотрите также

- {{domxref("element.classList")}}
