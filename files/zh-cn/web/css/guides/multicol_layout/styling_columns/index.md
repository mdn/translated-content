---
title: 多列布局的样式
slug: Web/CSS/Guides/Multicol_layout/Styling_columns
---

由于在多列（_multicol_）容器中创建的列盒子是匿名盒子，我们可以对其进行的样式设置非常有限。然而，我们还是有一些可以做的事情。本指南解释了如何更改列之间的间距和样式规则。

## 为列盒子设置样式

非常遗憾，目前无法为列盒子设置样式。构成你的列盒子的匿名盒子无法以任何方式定位，这意味着无法更改盒子的背景颜色或使一个列大于其他列。也许在未来的规范版本中可以实现。然而，目前我们可以更改列之间的间距并在列之间添加线条。

## 列间距

列之间的间距由 `column-gap` 属性控制。该属性最初在多列布局规范中定义。然而，现在它在[盒子对齐](/zh-CN/docs/Web/CSS/Guides/Box_alignment)中定义，以便统一其他规范（如 [CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Box_alignment)）中的盒子间距。

在多列中，`column-gap` 的初始值为 `1em`。这意味着你的列不会相互挤压。在其他布局方法中，`column-gap` 的初始值为 0。如果使用关键字值 "normal"，间距将设置为 1em。

你可以通过将 `column-gap` 的值设置为任何长度单位来更改间距。在下面的示例中，`column-gap` 设置为 40px。

```html live-sample___column-gap
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___column-gap
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-gap: 40px;
}
```

{{EmbedLiveSample("column-gap", "", "300px")}}

`column-gap` 允许的值是 `<length-percentage>`，这意味着允许使用百分比。`column-gap` 的百分比值是根据多列容器宽度的百分比计算的。

## 分栏线条

该标准定义了 `column-rule-width`、`column-rule-style` 和 `column-rule-color`，并提供了简写 `column-rule`。这些属性的工作方式与 `border` 属性完全相同：任何有效的 `border-style` 都可以用作 `column-rule-style`。

这些属性应用于多列容器元素，因此所有列将具有相同的分栏线条。分栏线条仅在列之间绘制，而不在外部边缘绘制。分栏线条还应仅在具有内容的列之间绘制。

在接下来的示例中，使用长格式值创建了一个宽度为 5px、颜色为 `rebeccapurple` 的点状分栏线条。

```html hidden live-sample___column-rule
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___column-rule
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-rule-width: 5px;
  column-rule-style: dotted;
  column-rule-color: rebeccapurple;
}
```

{{EmbedLiveSample("column-rule", "", "300px")}}

请注意，分栏线条本身不占用任何空间：宽分栏线条不会将列分开以为分栏线条腾出空间。相反，分栏线条覆盖了间隙。

下面的示例使用了非常宽的 40px 分栏线条和 10px 间距。分栏线条在列内容的下方显示。为了在分栏线条两侧腾出空间，间距需要增加到大于 40px。

```html hidden live-sample___column-rule-wide
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___column-rule-wide
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-gap: 10px;
  column-rule: 40px solid rebeccapurple;
}
```

{{EmbedLiveSample("column-rule-wide", "", "300px")}}

## 下一步

本文详细介绍了目前可以为列盒子设置样式的所有方法。在下一篇指南中，我们将讨论如何让容器内的元素[跨越所有列](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Spanning_Columns)。
