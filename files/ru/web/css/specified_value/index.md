---
title: Указанное значение
slug: Web/CSS/specified_value
---

{{CSSRef}}

**Указанное значение** CSS-свойства может устанавливаться одним из 3 следующих способов.

1. Если в таблице стилей документа указано значение свойства, которое будет использоваться. Например, если свойство {{cssxref("color")}} устанавливается в `green`, то цвет текста соответствующего элемента становится зелёным.
2. Если в таблице стилей документа указано значение, которое может наследоваться от родительского элемента (если возможно). Например, у нас есть параграф ({{HTMLElement("p")}}) внутри {{HTMLElement("div")}}, а к {{HTMLElement("div")}} применено CSS-свойство `font` со значением "Arial", а у {{HTMLElement("p")}} не установлено свойство `font`, то он унаследует значение шрифта "Arial".
3. Если не выполняется не то, не другое, начальное значение элемента применяется из CSS спецификации.

## Спецификации

| Спецификация                                                             | Статус              | Комментарий             |
| ------------------------------------------------------------------------ | ------------------- | ----------------------- |
| {{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.1")}} | Изначальное определение |

## Смотрите также

- [Руководство по CSS](/ru/docs/Web/CSS/Reference)
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
