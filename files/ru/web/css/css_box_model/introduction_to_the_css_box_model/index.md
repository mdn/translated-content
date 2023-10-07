---
title: Блоковая модель (боксовая модель, box model)
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
---

## Описание

В HTML-документе каждому элементу на странице соответствует прямоугольная область (бокс или блок). Движок рендеринга в браузере определяет размеры и положение боксов на странице, а также их свойства вроде цвета, фоновой картинки для того, чтобы отобразить их на экране.

В языке CSS есть специальная боксовая модель (также блоковая модель или блочная модель, англ. box model), которая описывает, из чего состоит бокс и какие свойства влияют на его размеры. В ней у каждого бокса есть 4 области: **margin** (внешние отступы), **border** (рамка), **padding** (внутренние поля), и **content** (контент или содержимое).

![CSS Box model](<boxmodel-(3).png>)

**Внутренняя область** элемента (**content area**) содержит текст и другие элементы, расположенные внутри (_контент_ или _содержимое_). У неё часто бывает фон, цвет или изображение (в таком порядке: фоновый цвет скрывается под непрозрачным изображением), и она находится внутри _content edge_; её размеры называются _ширина контента_ (_content width_ или _content-box width)_, и _высота контента_ (_content height_ или content-box height). Иногда ещё говорят «внутренняя ширина/высота элемента»

По умолчанию, если CSS-свойство {{ cssxref("box-sizing") }} не задано, размер внутренней области с содержимым задаётся свойствами {{ cssxref("width") }}, {{ cssxref("min-width") }}, {{ cssxref("max-width") }}, {{ cssxref("height") }}, {{ cssxref("min-height") }} и {{ cssxref("max-height") }}. Если же свойство {{ cssxref("box-sizing") }} задано, то оно определяет, для какой области указаны размеры.

Поля элемента (**padding area)** — это пустая область, окружающая контент. Она может быть залита каким-то цветом, покрыта фоновый картинкой, а её границы называются края полей (_padding edge)_.

Размеры полей задаются по отдельности с разных сторон свойствами {{ cssxref("padding-top") }}, {{ cssxref("padding-right") }}, {{ cssxref("padding-bottom") }}, {{ cssxref("padding-left") }} или общим свойством {{ cssxref("padding") }}.

Область рамки (**border area)** окружает поля элемента, а её граница называется края рамки (_border edge)._ Ширина рамки задаётся отдельным свойством {{ cssxref("border-width") }} или в составе свойства {{ cssxref("border") }}. Размеры элемента с учётом полей и рамки иногда называют внешней шириной/высотой элемента.

Отступы (**margin area)** добавляют пустое пространство вокруг элемента и определяют расстояние до соседних элементов.

Величина отступов задаётся по отдельности в разных направлениях свойствами {{ cssxref("margin-top") }}, {{ cssxref("margin-right") }}, {{ cssxref("margin-bottom") }}, {{ cssxref("margin-left") }} или общим свойством {{ cssxref("margin") }}.

Отступы двух соседних элементов, расположенных друг над другом или вложенных друг в друга, могут накладываться. Это называется схлопывание границ ([margin collapsing](/ru/docs/Web/CSS/margin_collapsing)). Схлопываются только вертикальные отступы.

Для элементов с {{ cssxref("display") }}`: inline` (или `inline-block, inline-table`) на занимаемое по высоте место также влияет значение свойства {{ cssxref('line-height') }}.

## Стандарты

| Стандарт                                                                       | Статус                | Примечание                                                 |
| ------------------------------------------------------------------------------ | --------------------- | ---------------------------------------------------------- |
| [CSS Level 2 (revision 1)](http://www.w3.org/TR/CSS21/box.html#box-dimensions) | {{ Spec2('CSS2.1') }} | Though more precisely worded, there is no practical change |
| [CSS Level 1](http://www.w3.org/TR/REC-CSS1/#formatting-model)                 | {{ Spec2('CSS1') }}   |                                                            |

## Смотрите также

- [Справочник по CSS](/ru/CSS/CSS_Reference)
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
- Связанные свойства: {{ cssxref("box-sizing") }}, {{ cssxref("background-clip") }}, {{ cssxref("height") }}, {{ cssxref("max-height") }}, {{ cssxref("min-height") }}, {{ cssxref("width") }}, {{ cssxref("max-height") }}, {{ cssxref("min-height") }}, {{ cssxref("padding") }}, {{ cssxref("padding-top") }}, {{ cssxref("padding-right") }}, {{ cssxref("padding-bottom") }}, {{ cssxref("padding-left") }}, {{ cssxref("border") }}, {{ cssxref("border-top") }}, {{ cssxref("border-right") }}, {{ cssxref("border-bottom") }}, {{ cssxref("border-left") }}, {{ cssxref("border-width") }}, {{ cssxref("border-top-width") }}, {{ cssxref("border-right-width") }}, {{ cssxref("border-bottom-width") }}, {{ cssxref("border-left-width") }}, {{ cssxref("margin") }}, {{ cssxref("margin-top") }}, {{ cssxref("margin-right") }}, {{ cssxref("margin-bottom") }}, {{ cssxref("margin-left") }}
