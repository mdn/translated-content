---
title: Замещаемый элемент
slug: Web/CSS/Guides/Images/Replaced_element_properties
---

{{CSSRef}}

В [CSS](/ru/docs/Web/CSS), **замещаемый элемент** — это элемент, чьё представление выходит за рамки CSS. Другими словами, это внешний объект, чьё представление независимо от модели форматирования CSS.

## Замещаемые элементы

Типичные замещаемые элементы:

- {{HTMLElement("iframe")}}
- {{HTMLElement("video")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("img")}}

Некоторые элементы рассматриваются как замещаемые только в некоторых случаях:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}

Спецификация HTML также указывает, что элемент {{HTMLElement("input")}} может быть замещаемым, поскольку элемент {{HTMLElement("input")}} с типом image является замещаемым элементом наподобие {{HTMLElement("img")}}. Однако другие элементы форм, включая другие типы элементов {{HTMLElement("input")}}, явно отнесены к незамещаемым элементам (для описания их отображения по умолчанию, которое может быть разным на разных платформах, спецификация использует термин «Виджеты»).

Объекты, добавляемые с помощью CSS-свойства {{cssxref("content")}} являются _анонимными замещаемыми элементами_. Они «анонимные», так как они не существуют в HTML-разметке.

## Использование CSS с замещаемыми элементами

CSS обрабатывает замещаемые элементы особым образом в некоторых случаях, например при расчёте внешних отступов и некоторых значений `auto`.

Заметим, что у некоторых замещаемых элементов, но не у всех, есть внутренние размеры или определённая базовая линия, которая используется CSS-свойствами вроде {{cssxref("vertical-align")}}.

## Смотрите также

- [Спецификация HTML](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/Guides/Syntax/Introduction)
  - [@-правила](/ru/docs/Web/CSS/Guides/Syntax/At-rules)
  - [комментарии](/ru/docs/Web/CSS/Guides/Syntax/Comments)
  - [специфичность](/ru/docs/Web/CSS/Guides/Cascade/Specificity)
  - [наследование](/ru/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [блочная модель](/ru/docs/Web/CSS/Guides/Box_model/Introduction)
  - [режимы компоновки](/ru/docs/Glossary/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Значения
    - [начальные](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
    - [вычисленные](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/ru/docs/Web/CSS/Guides/Cascade/Property_value_processing)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/Guides/Images/Replaced_element_properties)
