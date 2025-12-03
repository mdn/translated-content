---
title: Указанное значение
slug: conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1
original_slug: Web/CSS/CSS_cascade/specified_value
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
  - [@-правила](/ru/docs/Web/CSS/CSS_syntax/At-rules)
  - [комментарии](/ru/docs/Web/CSS/CSS_syntax/Comments)
  - [специфичность](/ru/docs/Web/CSS/CSS_cascade/Specificity)
  - [наследование](/ru/docs/Web/CSS/CSS_cascade/Inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Glossary/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
    - [вычисленные](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/ru/docs/Web/CSS/CSS_cascade/Value_processing)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/CSS_images/Replaced_element_properties)
