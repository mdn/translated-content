---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
---

{{ APIRef("DOM") }}

`removeAttribute` удаляет атрибут с элемента.

## Синтаксис

```
element.removeAttribute(attrName);
```

- `attrName` строка, имя атрибута который должен быть удалён с _element_.

## Пример

```
// <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// now: <div id="div1" width="200px">
```

## Примечания

Вы должны использовать removeAttribute вместо того, чтобы устанавливать значение атрибута в null, используя [setAttribute](/en/DOM/element.setAttribute).

Попытка удаления атрибута, которого нет на элементе не вызывает ошибки.

{{ DOMAttributeMethods() }}

## Спецификация

[DOM Level 2 Core: removeAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute))
