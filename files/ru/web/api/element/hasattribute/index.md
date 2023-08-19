---
title: Element.hasAttribute()
slug: Web/API/Element/hasAttribute
---

{{APIRef("DOM")}}

**`Element.hasAttribute()`** метод возвращает {{Glossary("Boolean")}} значение указывающее, имеет ли указанный элемент указанный атрибут или нет.

## Синтаксис

```
var result = element.hasAttribute(attName);
```

- `Переменная result` хранит возвращённое значение `true` или `false`.
- `attName` это {{Glossary("String")}} представляющая имя атрибута.

## Пример

```js
// проверка, существует ли атрибут, перед тем как задать значение
var d = document.getElementById("div1");

if (d.hasAttribute("align")) {
  d.setAttribute("align", "center");
}
```

## Замечания

{{DOMAttributeMethods}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
