---
title: At-rules
slug: Web/CSS/CSS_syntax/At-rules
---

{{cssref}}

**At-rules** (@-правила) это [CSS выражения](/ru/docs/Web/CSS/CSS_syntax/Syntax#css_statements), которые показывают CSS как себя вести. Они начинаются со знака '`@`' (`U+0040 КОММЕРЧЕСКОЕ AT`), сопровождается идентификатором, и включает в себя всё до следующей точки с запятой, '`;`' (`U+003B ТОЧКА С ЗАПЯТОЙ`), или до следующего [CSS блока](/ru/docs/Web/CSS/CSS_syntax/Syntax#блоки_объявлений_css), в зависимости от того, что наступит раньше.

```css
/* Общая структура */
@идентификатор (ПРАВИЛО);

/* Пример: говорит браузеру использовать UTF-8 кодировку символов */
@charset "utf-8";
```

Существует несколько @-правил, обозначаемые идентификаторами, каждое из которых имеет свой синтаксис:

- {{cssxref("@charset")}} — Определяет кодировку символов, используемый таблицей стилей.
- {{cssxref("@import")}} — Сообщает движку CSS включить внешнюю таблицу стилей.
- {{cssxref("@namespace")}} — Сообщает механизму CSS, что все его содержимое должно рассматриваться с приставкой пространства имён XML.
- **_Вложенные @-правила_** — Подмножество вложенных операторов, которые могут использоваться как оператор таблицы стилей, а также внутри правил условной группы.
  - {{cssxref("@media")}} — Условное групповое правило, которое будет применять его содержимое, если устройство соответствует критериям условия, определённого с помощью медиавыражения.
  - {{cssxref("@supports")}} — Условное групповое правило, которое будет применять его содержимое, если браузер соответствует критериям данного условия.
  - {{cssxref("@document")}} {{experimental_inline}} — Условное групповое правило, которое будет применять его содержимое, если документ, в котором применяется таблица стилей, соответствует критериям данного условия.
  - {{cssxref("@page")}} — Описывает аспект изменений макета, который будет применён при печати документа.
  - {{cssxref("@font-face")}} — Описывает аспект внешнего шрифта для загрузки.
  - {{cssxref("@keyframes")}} — Описывает аспект промежуточных шагов в последовательности анимации CSS.
  - {{cssxref("@counter-style")}} — Определяет конкретные counter-styles, которые не являются частью предопределённого набора стилей.
  - {{cssxref("@font-feature-values")}} (плюс `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` и `@character-variant`)
    — Определите общие имена в {{cssxref("font-option-alternates")}} для функции, которая по-разному активируется в OpenType _(at the Candidate Recommendation stage, but only implemented in Gecko as of writing)_

## Условные групповые правила

Как и значения свойств, каждое @-правило имеет свой синтаксис. Тем не менее, некоторые из них могут быть сгруппированы в специальную категорию, называемую Условные групповые правила. Эти операторы имеют общий синтаксис, и каждый из них может включать вложенные операторы - либо наборы правил, либо вложенные правила. Кроме того, все они передают общее семантическое значение - все они связывают некоторый тип условия, которое в любой момент оценивается как истинное или ложное. Если условие оценивается как истинное, то будут применяться все операторы в группе. Условные групповые правила описываются в [CSS Conditionals Level 3](https://dev.w3.org/csswg/css3-conditional/) и в:

- {{cssxref("@media")}},
- {{cssxref("@supports")}},
- {{cssxref("@document")}}. _(deferred to Level 4 of CSS Spec)_

Поскольку каждая условная группа может также содержать вложенные операторы, может быть неопределённое количество вложений.

## Характеристики

{{Specifications}}

## Смотрите также

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
