---
title: Замещаемый элемент
slug: Web/CSS/Replaced_element
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
- {{HTMLElement("applet")}}

Спецификация HTML также указывает, что элемент {{HTMLElement("input")}} может быть замещаемым, поскольку элемент {{HTMLElement("input")}} с типом image является замещаемым элементом наподобие {{HTMLElement("img")}}. Однако другие элементы форм, включая другие типы элементов {{HTMLElement("input")}}, явно отнесены к незамещаемым элементам (для описания их отображения по умолчанию, которое может быть разным на разных платформах, спецификация использует термин «Виджеты»).

Объекты, добавляемые с помощью CSS-свойства {{cssxref("content")}} являются _анонимными замещаемыми элементами_. Они «анонимные», так как они не существуют в HTML-разметке.

## Использование CSS с замещаемыми элементами

CSS обрабатывает замещаемые элементы особым образом в некоторых случаях, например при расчёте внешних отступов и некоторых значений `auto`.

Заметим, что у некоторых замещаемых элементов, но не у всех, есть внутренние размеры или определённая базовая линия, которая используется CSS-свойствами вроде {{cssxref("vertical-align")}}.

## Смотрите также

- [Спецификация HTML](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/Syntax)
  - [@-правила](/ru/docs/Web/CSS/At-rule)
  - [комментарии](/ru/docs/Web/CSS/Comments)
  - [специфичность](/ru/docs/Web/CSS/Specificity)
  - [наследование](/ru/docs/Web/CSS/inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Web/CSS/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/Web/CSS/initial_value)
    - [вычисленные](/ru/docs/Web/CSS/computed_value)
    - [используемые](/ru/docs/Web/CSS/used_value)
    - [действительные](/ru/docs/Web/CSS/actual_value)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/Replaced_element)
