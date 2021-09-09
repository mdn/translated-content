---
title: Главная ось
slug: Glossary/Main_Axis
translation_of: Glossary/Main_Axis
original_slug: Глоссарий/Main_Axis
---
Главная ось в {{glossary("flexbox")}} определяется направлением, установленным в свойстве {{cssxref("flex-direction")}}. Это свойство может принимать одно из четырёх значений:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Если вы выберите `row` или `row-reverse`, то главная ось будет проходить вдоль направления строк.

![In this image the flex-direction is row which forms the main axis](https://mdn.mozillademos.org/files/15708/Basics1.png)

Выберите `column` или `column-reverse`, и главная ось будет проходить сверху вниз в направлении блоков.

![](https://mdn.mozillademos.org/files/15709/Basics2.png)

На главной оси вы можете контролировать размеры flex элементов, добавляя к ним свободное пространство с помощью свойства `flex` на самих элементах. Также, вы можете контролировать пространство между и вокруг элементов свойством `justify-content`.

## Узнать больше

### Связанные свойства

<div class="index"><ul><li>{{cssxref("flex-basis")}}</li><li>{{cssxref("flex-direction")}}</li><li>{{cssxref("flex-grow")}}</li><li>{{cssxref("flex-shrink")}}</li><li>{{cssxref("justify-content")}}</li><li>{{cssxref("flex")}}</li></ul></div>

### Дальнейшее чтение

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
