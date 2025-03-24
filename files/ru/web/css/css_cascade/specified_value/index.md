---
title: Указанное значение
slug: Web/CSS/CSS_cascade/specified_value
---

{{CSSRef}}

**Указанное значение** CSS-свойства может устанавливаться одним из 3 следующих способов.

1. Если в таблице стилей документа указано значение свойства, которое будет использоваться. Например, если свойство {{cssxref("color")}} устанавливается в `green`, то цвет текста соответствующего элемента становится зелёным.
2. Если в таблице стилей документа указано значение, которое может наследоваться от родительского элемента (если возможно). Например, у нас есть параграф ({{HTMLElement("p")}}) внутри {{HTMLElement("div")}}, а к {{HTMLElement("div")}} применено CSS-свойство `font` со значением "Arial", а у {{HTMLElement("p")}} не установлено свойство `font`, то он унаследует значение шрифта "Arial".
3. Если не выполняется не то, не другое, начальное значение элемента применяется из CSS спецификации.

## Спецификации

{{Specifications}}

## Смотрите также

- [Руководство по CSS](/ru/docs/Web/CSS/Reference)
- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/CSS_syntax/Syntax)
  - [@-правила](/ru/docs/Web/CSS/CSS_syntax/At-rule)
  - [комментарии](/ru/docs/Web/CSS/CSS_syntax/Comments)
  - [специфичность](/ru/docs/Web/CSS/CSS_cascade/Specificity)
  - [наследование](/ru/docs/Web/CSS/CSS_cascade/Inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Web/CSS/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/Web/CSS/CSS_cascade/initial_value)
    - [вычисленные](/ru/docs/Web/CSS/CSS_cascade/computed_value)
    - [используемые](/ru/docs/Web/CSS/CSS_cascade/used_value)
    - [действительные](/ru/docs/Web/CSS/CSS_cascade/actual_value)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/CSS_images/Replaced_element_properties)
