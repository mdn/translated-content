---
title: Вычисленное значение
slug: Web/CSS/computed_value
---

{{cssref}}

**Вычисленное значение** CSS-свойства вычисляется из указанного значения посредством:

- Обработки специальных значений {{cssxref("inherit")}} и {{cssxref("initial")}}, а также
- Выполнения вычислений необходимых для получения значения, описанного в строке "Обработка значения" в описании свойства.

Вычисления необходимые для получения **вычисленного значения** для свойства обычно включают в себя преобразование относительных значений (например, находящиеся в единицах `em` или в процентах) в абсолютные значения.

Например, если у элемента указаны значения `font-size: 16px` и `padding-top: 2em`, то вычисленное значение `padding-top` будет `32px` (двойной размер шрифта).

Однако, для некоторых свойств _(таких, где проценты относительны к чему-то, что может потребовать лэйаут определять(переопределить) границы, например, `width`, `margin-right`, `text-indent` и `top`)_, процентно указанные значения преобразуются в процентно вычисляемые значения. Кроме того, безразмерные числа, указанные в свойстве `line-height` становятся вычисленными значениями. Эти относительные единицы, которые остались в вычисленных значениях, становятся абсолютными, когда [используемое значение](/ru/docs/Web/CSS/used_value) установлено.

Основная сфера применения _**вычисленного значения** (кроме как использования его как "шага" между [указанным](/ru/docs/Web/CSS/specified_value) и [используемым](/ru/docs/Web/CSS/used_value) значением)_ является [наследование](/ru/docs/Web/CSS/Inheritance), включая ключевое слово {{cssxref("inherit")}}.

## Замечания

DOM API {{domxref("Window.getComputedStyle", "getComputedStyle()")}} возвращает {{cssxref("resolved_value", "решённое значение")}}, которое может быть либо {{cssxref("computed_value", "вычисляемым")}} или {{cssxref("used_value", "используемым")}} значением, в зависимости от свойства.

## Спецификации

{{Specifications}}

## Смотрите также

- [Руководство по CSS](/ru/docs/Web/CSS/Reference)
- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/Syntax)
  - [@-правила](/ru/docs/Web/CSS/At-rule)
  - [комментарии](/ru/docs/Web/CSS/Comments)
  - [специфичность](/ru/docs/Web/CSS/Specificity)
  - [наследование](/ru/docs/Web/CSS/Inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Web/CSS/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/Web/CSS/initial_value)
    - [вычисленные](/ru/docs/Web/CSS/computed_value)
    - [используемые](/ru/docs/Web/CSS/used_value)
    - [действительные](/ru/docs/Web/CSS/actual_value)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/Replaced_element)
