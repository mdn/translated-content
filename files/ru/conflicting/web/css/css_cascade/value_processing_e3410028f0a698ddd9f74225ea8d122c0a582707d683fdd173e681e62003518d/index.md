---
title: Вычисленное значение
slug: conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d
original_slug: Web/CSS/CSS_cascade/computed_value
---

{{cssref}}

**Вычисленное значение** CSS-свойства вычисляется из указанного значения посредством:

- Обработки специальных значений {{cssxref("inherit")}} и {{cssxref("initial")}}, а также
- Выполнения вычислений необходимых для получения значения, описанного в строке "Обработка значения" в описании свойства.

Вычисления необходимые для получения **вычисленного значения** для свойства обычно включают в себя преобразование относительных значений (например, находящиеся в единицах `em` или в процентах) в абсолютные значения.

Например, если у элемента указаны значения `font-size: 16px` и `padding-top: 2em`, то вычисленное значение `padding-top` будет `32px` (двойной размер шрифта).

Однако, для некоторых свойств _(таких, где проценты относительны к чему-то, что может потребовать лэйаут определять(переопределить) границы, например, `width`, `margin-right`, `text-indent` и `top`)_, процентно указанные значения преобразуются в процентно вычисляемые значения. Кроме того, безразмерные числа, указанные в свойстве `line-height` становятся вычисленными значениями. Эти относительные единицы, которые остались в вычисленных значениях, становятся абсолютными, когда [используемое значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b) установлено.

Основная сфера применения _**вычисленного значения** (кроме как использования его как "шага" между [указанным](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1) и [используемым](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b) значением)_ является [наследование](/ru/docs/Web/CSS/CSS_cascade/Inheritance), включая ключевое слово {{cssxref("inherit")}}.

## Замечания

DOM API {{domxref("Window.getComputedStyle", "getComputedStyle()")}} возвращает {{cssxref("resolved_value", "решённое значение")}}, которое может быть либо {{cssxref("computed_value", "вычисляемым")}} или {{cssxref("used_value", "используемым")}} значением, в зависимости от свойства.

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
