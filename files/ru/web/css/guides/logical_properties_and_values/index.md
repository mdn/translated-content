---
title: Логические свойства и значения CSS
short-title: Логические свойства и значения
slug: Web/CSS/Guides/Logical_properties_and_values
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

{{CSSRef}}

Модуль **логических свойств и значений CSS** определяет логические свойства и значения, которые позволяют управлять раскладкой через логические, а не физические направления и размеры. Логические свойства — это эквиваленты соответствующих физических свойств, заданные относительно направления.

Начало строки — не всегда её левый край. В разных системах письма текст идёт в разных направлениях. Например:

- В английском и португальском языках текст пишется слева направо, а новые строки добавляются под предыдущими.
- Иврит и арабский пишутся справа налево, а новые строки также добавляются под предыдущими.
- В некоторых режимах письма строки текста вертикальные и пишутся сверху вниз. Китайский, вьетнамский, корейский и японский языки традиционно пишутся вертикально, сверху вниз, и каждая новая вертикальная строка добавляется слева от предыдущей.
- Традиционная монгольская письменность тоже пишется сверху вниз, но новые строки добавляются справа от предыдущих.

Логические свойства, определённые в этом модуле, позволяют задавать свойства относительно направления письма содержимого, а не физического направления. Благодаря этому содержимое, переведённое на языки с другими режимами письма, будет отображаться так, как задумано.

Логические свойства и значения описывают направление потока абстрактными терминами _блочный_ (block) и _строчный_ (inline). Физический смысл этих терминов зависит от [режима письма](/ru/docs/Web/CSS/Guides/Writing_modes).

**Блочное измерение** перпендикулярно направлению текста в строке: в горизонтальных режимах письма это вертикальное измерение, а в вертикальных — горизонтальное. Для обычного текста на русском или английском языке это вертикальное измерение.

**Строчное измерение** параллельно направлению текста в строке: в горизонтальных режимах письма это горизонтальное измерение, а в вертикальных — вертикальное. Для обычного текста на русском или английском языке это горизонтальное измерение.

Изначально CSS проектировался только с физическими координатами. Модуль логических свойств и значений определяет эквиваленты относительно потока для многих [значений](/ru/docs/Web/CSS/Guides/Values_and_units) и [свойств](/ru/docs/Glossary/Property/CSS). Свойства, которые раньше принимали только физические значения (`top`, `bottom`, `left`, `right`), теперь принимают и логические значения относительно потока (`block-start`, `block-end`, `inline-start`, `inline-end`).

## Справка

### Свойства

- {{cssxref("block-size")}}
- {{cssxref("border-block")}}
- {{cssxref("border-block-color")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("inline-size")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-inline")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("margin-block")}}
- {{cssxref("margin-block-end")}}
- {{cssxref("margin-block-start")}}
- {{cssxref("margin-inline")}}
- {{cssxref("margin-inline-end")}}
- {{cssxref("margin-inline-start")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("padding-block")}}
- {{cssxref("padding-block-end")}}
- {{cssxref("padding-block-start")}}
- {{cssxref("padding-inline")}}
- {{cssxref("padding-inline-end")}}
- {{cssxref("padding-inline-start")}}

### Типы данных и значения

{{glossary("Flow relative values", "Значения относительно потока")}}:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`
- `start`
- `end`

### Термины глоссария

- {{glossary("Flow relative values")}}
- {{glossary("Inset properties")}}
- {{glossary("Logical properties")}}
- {{glossary("Physical properties")}}

## Руководства

- [Основные понятия логических свойств и значений](/ru/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts)
  - : Обзор свойств и значений относительно потока.

- [Логические свойства для размеров](/ru/docs/Web/CSS/Guides/Logical_properties_and_values/Sizing)
  - : Соответствие между физическими и логическими свойствами, задающими размеры элементов на странице.

- [Логические свойства для внешних отступов, рамок и внутренних отступов](/ru/docs/Web/CSS/Guides/Logical_properties_and_values/Margins_borders_padding)
  - : Соответствие относительно потока для различных свойств внешних отступов, рамок и внутренних отступов и их сокращённых форм.

- [Логические свойства для обтекания и позиционирования](/ru/docs/Web/CSS/Guides/Logical_properties_and_values/Floating_and_positioning)
  - : Подробное описание соответствия между физическими и логическими значениями для `float` и `clear`, [свойств смещения](/ru/docs/Glossary/Inset_properties) и `resize`.

## Связанные понятия

- {{CSSxRef("caption-side")}}
- {{CSSxRef("clear")}}
- {{CSSxRef("float")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("text-align")}}

Модуль [Блочная модель CSS](/ru/docs/Web/CSS/Guides/Box_model)

- Сокращённое свойство {{CSSxRef("margin")}}
- Сокращённое свойство {{CSSxRef("padding")}}

Модуль [Размеры блоков CSS](/ru/docs/Web/CSS/Guides/Box_sizing)

- {{CSSxRef("max-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-width")}}

Модуль [Фоны и рамки CSS](/ru/docs/Web/CSS/Guides/Backgrounds_and_borders)

- {{CSSxRef("border-color")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}
- Сокращённое свойство {{CSSxRef("border")}}
- {{CSSxRef("border-radius")}}

Модуль [Позиционирование CSS](/ru/docs/Web/CSS/Guides/Positioned_layout)

- {{CSSxRef("top")}}
- {{CSSxRef("right")}}
- {{CSSxRef("bottom")}}
- {{CSSxRef("left")}}

Модуль [Режимы письма CSS](/ru/docs/Web/CSS/Guides/Writing_modes)

- {{CSSxRef("direction")}}
- {{CSSxRef("text-orientation")}}
- {{CSSxRef("writing-mode")}}

Модуль [Изоляция CSS](/ru/docs/Web/CSS/Guides/Containment)

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

Модуль [Переполнение CSS](/ru/docs/Web/CSS/Guides/Overflow)

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}

Модуль [Поведение при прокрутке за границы CSS](/ru/docs/Web/CSS/Guides/Overscroll_behavior)

- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}

## Спецификации

{{Specifications}}

## Смотрите также

- [Поточная раскладка и режимы письма](/ru/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)
- Модуль [Раскладка CSS Flexbox](/ru/docs/Web/CSS/Guides/Flexible_box_layout)
- Модуль [Раскладка CSS Grid](/ru/docs/Web/CSS/Guides/Grid_layout)
