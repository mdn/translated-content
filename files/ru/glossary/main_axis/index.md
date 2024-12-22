---
title: Главная ось
slug: Glossary/Main_Axis
---

{{GlossarySidebar}}

Главная ось в {{glossary("flexbox")}} определяется направлением, установленным в свойстве {{cssxref("flex-direction")}}. Это свойство может принимать одно из четырёх значений:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Если вы выберите `row` или `row-reverse`, то главная ось будет проходить вдоль направления строк.

![In this image the flex-direction is row which forms the main axis](basics1.png)

Выберите `column` или `column-reverse`, и главная ось будет проходить сверху вниз в направлении блоков.

![](basics2.png)

На главной оси вы можете контролировать размеры flex элементов, добавляя к ним свободное пространство с помощью свойства `flex` на самих элементах. Также, вы можете контролировать пространство между и вокруг элементов свойством `justify-content`.

## Узнать больше

### Связанные свойства

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### Дальнейшее чтение

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/ru/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/ru/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
