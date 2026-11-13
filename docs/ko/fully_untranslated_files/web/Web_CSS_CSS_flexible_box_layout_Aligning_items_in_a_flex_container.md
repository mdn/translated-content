---
title: Aligning Items in a Flex Container
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
---

{{CSSRef}}

flexbox가 웹 개발자들의 관심 받게된 이유 중 하나는 웹 최초로 최초로 적절한 정렬 기능을 제공했기 때문입니다. flexbox의 수직 정렬 기능을 이용하여 우리는 드디어 쉽게 박스(역주: 여기서 박스는 **flex 컨테이너**를 의미합니다) 내부를 중앙 정렬 할 수 있게 되었습니다. 이 가이드에서 우리는 flexbox의 정렬 및 끝 맞추기 기능에 대해 자세히 살펴볼 것입니다.

박스 내부를 중앙 정렬 하기 위해 박스에 `align-items` 속성을 지정하면 교차 축에 대해 flex 항목을 정렬할 수 있습니다. 아래 경우, 교차 축은 수직 축입니다. `justify-content` 속성을 지정하면 flex 항목을 주축에 대해 정렬 할 수 있습니다. 아래 경우, 주축은 수평 방향입니다.

![A containing element with another box centered inside it.](align1.png)

아래 예제의 코드를 살펴보세요. flex 컨테이너(역주: .box로 지정된 div 태그)나 flex 항목(역주: .box div로 지정된 div 태그)의 크기를 조절해도 flex 컨테이너 내부는 중앙 정렬됨을 보실 수 있습니다.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## 정렬 제어용 속성 목록

이 글에서 살펴볼 속성들은 다음과 같습니다.

- {{cssxref("justify-content")}} — 주축에 대해 flex 항목들을 정렬하는 방식을 제어. flex 컨테이너에 지정하는 속성.
- {{cssxref("align-items")}} — 교차축에 대해 flex 항목들을 정렬하는 방식을 제어. flex 컨테이너에 지정하는 속성.
- {{cssxref("align-self")}} — 개별 flex 항목을 교차 축에 대해 정렬 하는 방식을 제어. flex 항목에 지정하는 속성.
- {{cssxref("align-content")}} — described in the spec as for "packing flex lines"; controls space between flex lines on the cross axis.

또한, 이글에서 flexbox기반 정렬에서 margin 속성 값이 어떨게 쓰이는지 살펴볼 것입니다.

> **참고:** The alignment properties in Flexbox have been placed into their own specification — [CSS Box Alignment Level 3](https://www.w3.org/TR/css-align-3/). It is expected that this spec will ultimately supersede the properties as defined in Flexbox Level One.

## 교차축

`align-items`와 `align-self` 속성들은 flex 항목들을 교차축으로 정렬하는 것을 제어합니다. 만약, `flex-direction`이 `row`로 설정되어있다면 열 (column) 아래로 정렬을 하게되고, `flex-direction`이 `column`으로 설정되어있다면 행 (row)을 따라 정렬됩니다.

가장 간단한 flex예시는 교차축을 이용합니다. `display: flex`를 컨테이너에 추가하게되면, 모든 자식 항목들이 열 (row), 즉 가로 방향으로 정렬이 되는 flex 항목이 됩니다. 이 경우 가장 큰 y축의 크기, 즉 높이가 가장 큰 자식 항목이 교차축의 높이를 정의하게 되고, 나머지 자식 항목들은 이 높이에 맞추어 높이가 늘어나게 됩니다. 만약 flex 컨테이너의 높이가 지정이 되어있다면, 자식 항목 내용에 상관없이 지정된 높이 만큼 모든 자식 항목들이 늘어나게됩니다.

![Three items, one with additional text causing it to be taller than the others.](align2.png)

![Three items stretched to 200 pixels tall](align3.png)

모든 항목들이 같은 높이를 갖게되는 이유는 교차축을 중심으로 정렬을 제어하는 속성인 `align-items`에 지정된 초기값이 `stretch`로 설정이 되어있기 때문입니다.

이외에도 다른 값을 지정해서 항목들이 정렬되는 방식을 다르게 정의 할 수 있습니다:

- `align-items: flex-start`
- `align-items: flex-end`
- `align-items: center`
- `align-items: stretch`
- `align-items: baseline`

아래의 예시를 보면, `align-items`값이 `stretch`로 지정이 되어있습니다. 여기에 다른 값들을 넣어서 항목들이 flex 컨테이너 안에서 어떻게 정렬이 되는지 확인해보세요.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-items.html", '100%', 520)}}

### `align-self`로 항목 한 개를 정렬하기

The `align-items` property sets the `align-self` property on all of the flex items as a group. This means you can explicitly declare the `align-self` property to target a single item. The `align-self` property accepts all of the same values as `align-items` plus a value of `auto`, which will reset the value to that which is defined on the flex container.

In this next live example, the flex container has `align-items: flex-start`, which means the items are all aligned to the start of the cross axis. I have targeted the first item using a `first-child` selector and set that item to `align-items: stretch`; another item has been selected using its class of `selected` and given `align-self: center`. You can change the value of `align-items` or change the values of `align-self` on the individual items to see how this works.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self.html", '100%', 650)}}

### Changing the main axis

So far we have looked at the behaviour when our `flex-direction` is `row`, and while working in a language written top to bottom. This means that the main axis runs along the row horizontally, and our cross axis alignment moves the items up and down.

![Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the vertical axis.](align4.png)

If we change our `flex-direction` to column, `align-items` and `align-self` will align the items to the left and right.

![Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the horizontal axis.](align5.png)

You can try this out in the example below, which has a flex container with `flex-direction: column` yet otherwise is exactly the same as the previous example.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self-column.html", '100%', 730)}}

## Aligning content on the cross axis — the align-content property

So far we have been aligning the items, or an individual item inside the area defined by the flex-container. If you have a wrapped multiple-line flex container then you might also want to use the `align-content` property to control the distribution of space between the rows. In the specification this is described as [packing flex lines](https://drafts.csswg.org/css-flexbox/#align-content-property).

For `align-content` to work you need more height in your flex container than is required to display the items. It then works on all the items as a set, and dictates what happens with that free space, and the alignment of the entire set of items within it.

The `align-content` property takes the following values:

- `align-content: flex-start`
- `align-content: flex-end`
- `align-content: center`
- `align-content: space-between`
- `align-content: space-around`
- `align-content: stretch`
- `align-content: space-evenly` (not defined in the Flexbox specification)

In the live example below, the flex container has a height of 400 pixels, which is more than needed to display our items. The value of `align-content` is `space-between`, which means that the available space is shared out _between_ the flex lines, which are placed flush with the start and end of the container on the cross axis.

Try out the other values to see how the `align-content` property works.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content.html", '100%', 850)}}

Once again we can switch our `flex-direction` to `column` in order to see how this property behaves when we are working by column. As before, we need enough space in the cross axis to have some free space after displaying all of the items.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content-column.html", '100%', 860)}}

> **참고:** the value `space-evenly` is not defined in the flexbox specification and is a later addition to the Box Alignment specification. Browser support for this value is not as good as that of the values defined in the flexbox spec.

See the [documentation for `justify-content` on MDN](/ko/docs/Web/CSS/justify-content) for more details on all of these values and browser support.

## Aligning content on the main axis

Now that we have seen how alignment works on the cross axis, we can take a look at the main axis. Here we only have one property available to us — `justify-content`. This is because we are only dealing with items as a group on the main axis. With `justify-content` we control what happens with available space, should there be more space than is needed to display the items.

In our initial example with `display: flex` on the container, the items display as a row and all line up at the start of the container. This is due to the initial value of `justify-content` being `flex-start`. Any available space is placed at the end of the items.

![Three items, each 100 pixels wide in a 500 pixel container. The available space is at the end of the items.](align6.png)

The `justify-content` property accepts the same values as `align-content`.

- `justify-content: flex-start`
- `justify-content: flex-end`
- `justify-content: center`
- `justify-content: space-between`
- `justify-content: space-around`
- `justify-content: stretch`
- `justify-content: space-evenly` (not defined in the Flexbox specification)

In the example below, the value of `justify-content` is `space-between`. The available space after displaying the items is distributed between the items. The left and right item line up flush with the start and end.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content.html", '100%', 480)}}

If the main axis is in the block direction because `flex-direction` is set to `column`, then `justify-content` will distribute space between items in that dimension as long as there is space in the flex container to distribute.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-column.html", '100%', 880)}}

### Alignment and Writing Modes

Remember that with all of these alignment methods, the values of `flex-start` and `flex-end` are writing mode-aware. If the value of `justify-content` is `start` and the writing mode is left-to-right as in English, the items will line up starting at the left side of the container.

![Three items lined up on the left](basics5.png)

However if the writing mode is right-to-left as in Arabic, the items will line up starting at the right side of the container.

![Three items lined up from the right](basics6.png)

The live example below has the `direction` property set to `rtl` to force a right-to-left flow for our items. You can remove this, or change the values of `justify-content` to see how flexbox behaves when the start of the inline direction is on the right.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-writing-mode.html", '100%', 440)}}

## Alignment and flex-direction

The start line will also change if you change the `flex-direction` property — for example using `row-reverse` instead of `row`.

In this next example I have items laid out with `flex-direction: row-reverse` and `justify-content: flex-end`. In a left to right language the items all line up on the left. Try changing `flex-direction: row-reverse` to `flex-direction: row`. You will see that the items now move to the right hand side.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-reverse.html", '100%', 440)}}

While this may all seem a little confusing, the rule to remember is that unless you do something to change it, flex items lay themselves out in the direction that words are laid out in the language of your document along the inline, row axis. `flex-start` will be where the start of a sentence of text would begin.

![Diagram showing start on the left and end on the right.](align8.png)

You can switch them to display in the block direction for the language of your document by selecting `flex-direction: column`. Then `flex-start` will then be where the top of your first paragraph of text would start.

![Diagram showing start at the top and end at the bottom.](align10.png)

If you change flex-direction to one of the reverse values, then they will lay themselves out from the end axis and in the reverse order to the way words are written in the language of your document. `flex-start` will then change to the end of that axis — so to the location where your lines would wrap if working in rows, or at the end of your last paragraph of text in the block direction.

![Diagram showing start on the right and end on the left.](align9.png)

![Diagram showing end at the top and start at the bottom](align11.png)

## Using auto margins for main axis alignment

We don't have a `justify-items` or `justify-self` property available to us on the main axis as our items are treated as a group on that axis. However it is possible to do some individual alignment in order to separate an item or a group of items from others by using auto margins along with flexbox.

A common pattern is a navigation bar where some key items are aligned to the right, with the main group on the left. You might think that this should be a use case for a `justify-self` property, however consider the image below. I have three items on one side and two on the other. If I were able to use `justify-self` on item _d_, it would also change the alignment of item _e_ that follows, which may or may not be my intention.

![Five items, in two groups. Three on the left and two on the right.](align7.png)

Instead we can target item 4 and separate it from the first three items by giving it a `margin-left` value of `auto`. Auto margins will take up all of the space that they can in their axis — it is how centering a block with margin auto left and right works. Each side tries to take as much space as it can, and so the block is pushed into the middle.

In this live example, I have flex items arranged simply into a row with the basic flex values, and the class `push` has `margin-left: auto`. You can try removing this, or adding the class to another item to see how it works.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/auto-margins.html", '100%', 470)}}

## Future alignment features for Flexbox

At the beginning of this article I explained that the alignment properties currently contained in the Level 1 flexbox specification are also included in Box Alignment Level 3, which may well extend these properties and values in the future. We have already seen one place where this has happened, with the introduction of the `space-evenly` value for `align-content` and `justify-content` properties.

The Box Alignment module also includes other methods of creating space between items, such as the `column-gap` and `row-gap` feature as seen in [CSS Grid Layout](/ko/docs/Web/CSS/CSS_Grid_Layout). The inclusion of these properties in Box Alignment means that in future we should be able to use `column-gap` and `row-gap` in flex layouts too, and in Firefox 63 you will find the first browser implementation of the gap properties in flex layout.

My suggestion when exploring flexbox alignment in depth is to do so alongside looking at alignment in Grid Layout. Both specifications use the alignment properties as detailed in the Box Alignment specification. You can see how these properties behave when working with a grid in the MDN article [Box Alignment in Grid Layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout), and I have also compared how alignment works in these specifications in my [Box Alignment Cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment).

## See Also

- [Box Alignment](/ko/docs/Web/CSS/CSS_Box_Alignment)
- [Box Alignment in Flexbox](/ko/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [Box Alignment in Grid Layout](/ko/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout)
