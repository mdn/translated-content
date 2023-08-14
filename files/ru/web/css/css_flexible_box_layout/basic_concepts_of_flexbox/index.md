---
title: Основные понятия Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
---

{{CSSRef}}

**CSS модуль раскладки Flexible Box**, обычно называемый флексбокс или flexbox или просто flex (флекс), был разработан как модель одномерного-направленного макета и как один из методов распределения пространства между элементами в интерфейсе, с мощными возможностями выравнивания. В этой статье даётся краткое описание основных функций flexbox, которые мы рассмотрим более подробно в остальных руководствах.

Когда мы описываем flexbox как одномерно-направленный, мы имеем в виду, что flexbox имеет дело с макетом в одной плоскости за раз – либо в виде строки, либо в виде столбца. Как альтернативу можно упомянуть двумерную модель CSS Grid Layout, которая управляет и столбцами и строками одновременно.

## Flexbox: две оси

При работе с flexbox нужно мыслить с точки зрения двух осей – главной оси и побочной оси. Главная ось определяется свойством {{cssxref ("flex-direction")}}, а побочная ось проходит перпендикулярно ей. Все, что мы делаем с flexbox, относится к этим осям, поэтому стоит с самого начала понять, как они работают.

### Главная ось

Главная ось определяется свойством `flex-direction`, которая может принимать одно из следующих значений:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Если вы выберете `row` или `row-reverse`, ваша главная ось будет проходить в горизонтальном направлении **(inline direction)**.

![If flex-direction is set to row the main axis runs along the row in the inline direction.](basics1.png)

Если вы выберете `column` или `column-reverse`, ваша главная ось будет проходить в вертикальном направлении **(block direction)**.

![If flex-direction is set to column the main axis runs in the block direction.](basics2.png)

### Побочная ось

Побочная ось проходит перпендикулярно главной оси, поэтому, если свойство `flex-direction` (главная ось) задано как `row` или `row-reverse`, побочная ось будет проходить в вертикальном направлении.

![If flex-direction is set to row then the cross axis runs in the block direction.](basics3.png)

Если свойство `flex-direction` задано как `column` или `column-reverse`, побочная ось будет проходить в горизонтальном направлении.

![If flex-direction is set to column then the cross axis runs in the inline direction.](basics4.png)

Понимание того, с какой осью вы работаете (главная или побочная) очень важно для дальнейшего изучения Flexbox.

## Начало и конец строки

Важно понимать, что flexbox не делает никаких предположений о режиме написания документа. Раньше CSS был сильно ориентирован на горизонтальный режим и режим письма слева направо. Современные методы вёрстки охватывают полный диапазон режимов письма, и поэтому мы больше не предполагаем, что строка текста будет начинаться в верхнем левом углу документа и будет проходить по направлению к правой стороне, а новые строки будут появляться одна под другой.

Вы можете прочитать больше о взаимосвязи между flexbox и спецификацией Writing Modes в следующей статье, однако следующее описание должно помочь объяснить, почему мы не говорим о левом, правом, верхнем и нижнем направлениях наших flex-элементов.

Если свойству `flex-direction` задано значение `row` и вы работаете с английским языком, то начало главной оси будет слева, а конец главной оси – справа.

![Working in English the start edge is on the left.](basics5.png)

Если бы вы работаете с арабским языком, то начало главной оси будет справа, а конец главной оси – слева.

![The start edge in a RTL language is on the right.](basics6.png)

В обоих случаях начало побочной оси находится вверху flex контейнера, а конец – внизу, поскольку оба языка имеют режим горизонтальной записи.

Спустя некоторое время становится естественным думать о начале и конце оси, а не о левом и правом краях. Это будет полезно для вас при работе с другими методами, такими как CSS Grid Layout, которые следуют тем же шаблонам.

## Flex контейнер

Область документа, использующая flexbox, называется flex контейнером. Чтобы создать flex контейнер, мы задаём значение `flex` или `inline-flex` для свойства {{cssxref ("display")}} контейнера. Как только мы делаем это, прямые потомки этого контейнера становятся flex элементами. Как и для всех свойств в CSS, некоторые начальные значения уже определены, поэтому при создании flex-контейнера все содержащиеся в нем flex-элементы будут вести себя следующим образом.

- Элементы отображаются в ряд (свойство `flex-direction` по умолчанию имеет значение `row`).
- Позиционирование элементов начинается от начала главной оси.
- Элементы не растягиваются по основной оси, но могут сжиматься.
- Элементы будут растягиваться, чтобы заполнить размер побочной оси.
- Свойству {{cssxref("flex-basis")}} задано значение `auto`.
- Свойству {{cssxref("flex-wrap")}} задано значение `nowrap`.

Результатом этого является то, что все ваши элементы будут выстроены в ряд, используя размер содержимого в качестве их размера на главной оси. Если в контейнере больше элементов, чем можно уместить, они не будут обёрнуты и контейнер будет переполнен. Если некоторые элементы выше других, все элементы будут вытянуты вдоль побочной оси, чтобы заполнить ось в полный размер.

Вы можете увидеть принцип работы в живом примере ниже. Попробуйте отредактировать или добавить дополнительные элементы, чтобы проверить поведение flexbox.

{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}}

### Изменение flex-direction

Добавление свойства {{cssxref ("flex-direction")}} в контейнер позволяет нам изменять направление, в котором отображаются наши элементы flex. Установка `flex-direction: row-reverse` сохранит порядок отображения элементов вдоль строки, однако начало и конец строки поменяются местами.

Если изменить значение свойства `flex-direction` на `column`, главная ось изменится, и наши элементы будут отображаются в столбец. При установке параметра `column-reverse`, начало и конец столбца поменяются местами.

В приведённом ниже примере значение свойства `flex-direction` установлено как `row-reverse`. Попробуйте другие значения — `row`, `column` и `column-reverse`, чтобы посмотреть как изменятся элементы контейнера.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}

## Многострочный флекс-контейнер с flex-wrap

Несмотря на то, что флекс-бокс - это однонаправленная модель, есть возможность завернуть наши флекс-элементы в несколько строк. При этом вы должны рассматривать каждую строку как новый флекс контейнер. Распределение пространства будет происходить на этой конкретной линии, не привязываясь к соседним линиям.

Чтобы включить такое поведение, добавьте параметр {{cssxref("flex-wrap")}} со значением `wrap`. Теперь, как только ваши элементы будут слишком большими для того, чтобы влезать на одну строчку, они будут переноситься на новые строки. Живой пример ниже содержит широкие элементы, у которых общая ширина больше, чем размер контейнера. Так как параметр `flex-wrap` установлен в значение `wrap`, элементы переносятся. Если вы установите значение `nowrap`, то есть в начальное значение, то элементы ужмутся так, чтобы все элементы поместились на одной строке, потому что у них установлено значение, позволяющее им ужиматься при необходимости. Если им запретить ужиматься, или если они не смогут ужаться достаточно сильно, то при установленном значении `nowrap` будет происходить переполнение контейнера.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}

Более подробно эту тема разбирается в статье [Разбираемся с обёртыванием Flex элементов](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items).

## Краткая запись направления и многострочности: flex-flow

Вы можете указать два свойства `flex-direction` и `flex-wrap` в одном {{cssxref("flex-flow")}}. Первое значение свойства определяет `flex-direction`, второе `flex-wrap`.

В приведённом ниже примере вы можете изменить первое значение на одно из доступных для `flex-direction` - `row`, `row-reverse`, `column` or `column-reverse`, а второе на `wrap` или `nowrap`, чтобы посмотреть как изменятся элементы контейнера.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}

## Свойства, применяемые к флекс-элементам

Управлять поведением флекс-элементов более детально мы можем с помощью их собственных свойств:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

В этом обзоре мы лишь кратко рассмотрим эти свойства. Чтобы получить более глубокое понимание обратитесь к руководству [Управление соотношением элементов вдоль главной оси](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%81%D0%BE%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D1%8F_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_%D0%B2%D0%B4%D0%BE%D0%BB%D1%8C_%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BE%D1%81%D0%B8).

Чтобы понять как работают эти свойства, прежде нам необходимо разобраться с концепцией **доступного пространства**. Изменяя значения этих флекс свойств, мы влияем на то, как доступное пространство распределяется между нашими элементами. Эта концепция так же важна для выравнивания элементов.

Если наш контейнер шириной 500 пикселей содержит три элемента шириной 100 пикселей каждый, для их размещения нам потребуется пространство шириной в 300 пикселей. Остаётся 200 пикселей свободного пространства. Если мы не изменим исходные значения этих свойств, флексбокс разместит это пространство за последним элементом.

![This flex container has available space after laying out the items.](basics7.png)

Если вместо этого мы хотим чтобы элементы росли и заполняли собой свободное пространство, нам нужно указать способ распределения оставшегося пространства между элементами. Это как раз то для чего предназначены `flex` свойства.

### Свойство `flex-basis`

Свойство `flex-basis` определяет размер доступного пространства элемента. Начальное значение этого свойства - `auto` - в этом случае браузер проверяет, имеют ли элементы размер. В приведённом выше примере все элементы имеют ширину 100px, и этот размер читается браузером как `flex-basis`.
Если элементы не имеют размера, то для размера `flex-basis` используется размер контента. Вот почему, когда мы просто объявляем `display: flex` на родительском элементе для создания flex-элементов, все элементы перемещаются в ряд и занимают столько места, сколько им нужно для отображения их содержимого.

### Свойство `flex-grow`

With the `flex-grow` property set to a positive integer, flex items can grow along the main axis from their `flex-basis`. This will cause the item to stretch and take up any available space on that axis, or a proportion of the available space if other items are allowed to grow too.

If we gave all of our items in the example above a `flex-grow` value of 1 then the available space in the flex container would be equally shared between our items and they would stretch to fill the container on the main axis.

The flex-grow property can be used to distribute space in proportion. If we give our first item a `flex-grow` value of 2 and the other items a value of 1, 2 parts will be given to the first item (100px out of 200px in the case of the example above), 1 part each the other two (50px each out of the 200px total).

### Свойство `flex-shrink`

Where the `flex-grow` property deals with adding space in the main axis, the `flex-shrink` property controls how it is taken away. If we do not have enough space in the container to lay out our items and `flex-shrink` is set to a positive integer the item can become smaller than the `flex-basis`. As with `flex-grow` different values can be assigned in order to cause one item to shrink faster than others — an item with a higher value set for `flex-shrink` will shrink faster than its siblings that have lower values.

The minimum size of the item will be taken into account while working out the actual amount of shrinkage that will happen, which means that flex-shrink has the potential to appear less consistent than flex-grow in behavior. We'll therefore take a more detailed look at how this algorithm works in the article Controlling Ratios of items along the main axis.

> **Примечание:** Note that these values for `flex-grow` and `flex-shrink` are proportions. Typically if we had all of our items set to flex: `1 1 200px` and then wanted one item to grow at twice the rate, we would set that item to flex: `2 1 200px`. However you could use flex: `10 1 200px` and flex: `20 1 200px` if you wanted.

### Краткая запись значений флекс свойств

You will very rarely see the `flex-grow`, `flex-shrink`, and `flex-basis` properties used individually; instead they are combined into the {{cssxref("flex")}} shorthand. The `flex` shorthand allows you to set the three values in this order — `flex-grow`, `flex-shrink`, `flex-basis`.

The live example below allows you to test out the different values of the flex shorthand; remember that the first value is `flex-grow`. Giving this a positive value means the item can grow. The second is `flex-shrink` — with a positive value the items can shrink, but only if their total values overflow the main axis. The final value is `flex-basis`; this is the value the items are using as their base value to grow and shrink from.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}

There are also some predefined shorthand values which cover most of the use cases. You will often see these used in tutorials, and in many cases these are all you will need to use. The predefined values are as follows:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Setting `flex: initial` resets the item to the initial values of Flexbox. This is the same as `flex: 0 1 auto`. In this case the value of `flex-grow` is 0, so items will not grow larger than their `flex-basis` size. The value of `flex-shrink` is 1, so items can shrink if they need to rather than overflowing. The value of `flex-basis` is `auto`. Items will either use any size set on the item in the main dimension, or they will get their size from the content size.

Using `flex: auto` is the same as using `flex: 1 1 auto`; everything is as with `flex:initial` but in this case the items can grow and fill the container as well as shrink if required.

Using `flex: none` will create fully inflexible flex items. It is as if you wrote `flex: 0 0 auto`. The items cannot grow or shrink but will be laid out using flexbox with a `flex-basis` of `auto`.

The shorthand you often see in tutorials is `flex: 1` or `flex: 2` and so on. This is as if you used `flex: 1 1 0`. The items can grow and shrink from a `flex-basis` of 0.

Try these shorthand values in the live example below.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}

## Alignment, justification and distribution of free space between items

A key feature of flexbox is the ability to align and justify items on the main- and cross-axes, and to distribute space between flex items.

### `align-items`

The {{cssxref("align-items")}} property will align the items on the cross axis.

The initial value for this property is `stretch` and this is why flex items stretch to the height of the tallest one by default. They are in fact stretching to fill the flex container — the tallest item is defining the height of that.

You could instead set `align-items` to `flex-start` in order to make the items line up at the start of the flex container, `flex-end` to align them to the end, or `center` to align them in the centre. Try this in the live example — I have given the flex container a height in order that you can see how the items can be moved around inside the container. See what happens if you set the value of align-items to:

- `stretch`
- `flex-start`
- `flex-end`
- `center`

{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}

### `justify-content`

The {{cssxref("justify-content")}} property is used to align the items on the main axis, the direction in which `flex-direction` has set the flow. The initial value is `flex-start` which will line the items up at the start edge of the container, but you could also set the value to `flex-end` to line them up at the end, or `center` to line them up in the centre.

You can also use the value `space-between` to take all the spare space after the items have been laid out, and share it out evenly between the items so there will be an equal amount of space between each item. To cause an equal amount of space on the right and left of each item use the value `space-around`. With `space-around`, items have a half-size space on either end. Or, to cause items to have equal space around them use the value `space-evenly`. With `space-evenly`, items have a full-size space on either end.

Try the following values of `justify-content` in the live example:

- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`
- `space-evenly`

{{EmbedGHLiveSample("css-examples/flexbox/basics/justify-content.html", '100%', 380)}}

In the article [Aligning Items in a Flex Container](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) we will explore these properties in more depth, in order to have a better understanding of how they work. These simple examples however will be useful in the majority of use cases.

## Next steps

After reading this article you should have an understanding of the basic features of Flexbox. In the next article we will look at [how this specification relates to other parts of CSS](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods).
