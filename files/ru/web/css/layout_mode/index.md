---
title: Способ разметки
slug: Web/CSS/Layout_mode
---

{{CSSRef}}

[CSS](/ru/docs/CSS) **способ разметки** (или _раскладки,_ или англ. _layout_) — это алгоритм определения позиции и размеров блоков, основанный на способе, которым они взаимодействуют с родственными блоками. Существует несколько типов разметки:

- _Обычная (Normal Flow)_ — все элементы являются частью обычного потока до тех пор, пока вы не переопределите это каким-либо образом. Обычный _layout_ включает в себя _блочную раскладку_, созданную для расположения отдельных блоков, таких как параграфы, и _линейную_, — для строчных элементов;
- _[Табличная](/ru/docs/Web/CSS/CSS_Table)_, спроектированная для расположения таблиц;
- _Float layout_ — для возможности обозначить элементы _[плавающими](/ru/docs/CSS/float)._ Такой элемент начинает позиционироваться слева или справа относительно содержимого обычного потока, элементы которого начинают обтекать него;
- _[Позиционированная](/ru/docs/Web/CSS/CSS_Positioning) _— для позиционирования элементов без особого взаимодействия с другими элементами;
- _[Множественные столбцы](/ru/docs/Web/CSS/CSS_Columns)_ — для расположения контента колонками, как в газетах;
- _[Флексбокс](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout) (CSS Flexible Box Layout)_ — для расположения сложных страниц, которые плавно могут изменять свой размер; {{ experimental_inline() }}
- _[Сеточная](/ru/docs/Web/CSS/CSS_Grid_Layout)_ — для расположения элементов относительно фиксированной сетки. {{ experimental_inline() }}

> [!NOTE]
> Не все [CSS-свойства](/ru/docs/Web/CSS/Reference) применимы ко всем способам разметки. Большинство из них применяются к одному или двум из них и не действуют, если применяются на элементе, участвующем в другом режиме разметки.

## Смотрите также

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
