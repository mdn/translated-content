---
title: Комментарии
slug: Web/CSS/CSS_syntax/Comments
---

{{CSSRef}}

## Описание

Комментарии используются для добавления поясняющих заметок или для того, чтобы предотвратить интеграцию части кода в браузер.

## Синтаксис

```css
/* Комментарий */
```

## Примеры

```css
/* Однострочный комментарий */

/*
Комментарий
который содержит
несколько
строк
*/
```

## Замечания

Данный `/* */` синтаксис комментария используется для обоих вариантов, и однострочного и многострочного комментария. Нет других способов добавить комментарий во внешнюю таблицу стилей. Также, когда используется элемент \<style>, вы можете использовать \<!-- -->, чтобы спрятать CSS от старых браузеров, но это не рекомендуется. Как и в большинстве языков программирования, которые используют синтаксис комментариев /\* \*/ , комментарии нельзя вкладывать друг в друга. Другими словами, данная часть синтаксиса \*/, которая следует за /\* закрывает комментарий.

## Спецификации

- [CSS 2.1 Синтаксис и базовые типы данных #комментарии](https://www.w3.org/TR/CSS21/syndata.html#comments)

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
