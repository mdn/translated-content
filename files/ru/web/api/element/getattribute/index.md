---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
---

{{ ApiRef("DOM") }}

## Описание

`getAttribute()` возвращает значение указанного атрибута элемента. Если элемент не содержит данный атрибут, могут быть возвращены `null` или `""` (пустая строка); подробнее [Notes](#notes).

## Синтаксис

```
var attribute = element.getAttribute(attributeName);
```

где

- `attribute` - переменная, которой будет присвоено значение `attributeName`.
- `attributeName` - имя атрибута, значение которого необходимо получить.

## Пример

```
var div1 = document.getElementById("div1");
var align = div1.getAttribute("align");
alert(align); // отобразит значение атрибута align элемента с id="div1"
```

## Примечания

Когда метод `getAttribute` вызывается применительно к HTML-элементу, в DOM HTML-документа, значение аргумента приводится к нижнему регистру.

В действительности все браузеры (Firefox, Internet Explorer, последние версии Opera, Safari, Konqueror, iCab и т.д.) возвращают `null`, когда выбранный элемент не содержит атрибута с переданным именем. Спецификация DOM определяет, что корректное возвращаемое значение в данном случае - _пустая строка_ и некоторые реализации DOM придерживаются такого поведения. Реализация getAttribute в XUL (Gecko) в настоящее время следует спецификации и возвращает пустую строку. Следовательно, имеет смысл использовать [hasAttribute](/en/DOM/element.hasAttribute), чтобы проверять наличие атрибутов перед вызовом `getAttribute()`, если может быть такое, что выбранный элемент не будет содержать искомого атрибута.

{{ DOMAttributeMethods() }}

## Спецификации

- [DOM Level 2 Core: getAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-666EE0F9) (представлено в [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute))
- [HTML 5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
