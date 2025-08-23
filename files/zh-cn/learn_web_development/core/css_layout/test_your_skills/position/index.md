---
title: 技能测试：定位
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Position
---

此任务的目的是让你使用在我们的 position 课程中介绍的 CSS {{CSSxRef("position")}}属性以及对应值，你将通过两个小任务来复习刚才课程材料中介绍的不同元素。

> [!NOTE]
> 你可以在下面的交互式编辑器中尝试解决方案，下载代码并使用在线工具（如 CodePen、jsFiddle 或 Glitch）处理任务可能会有帮助。如果你遇到了困难，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 定位练习一

在这项任务中，你需要将目标类别为 5px 灰色边框的元素定位到外部容器的右上角。

![The green box is at the top right of a container with a grey border.](position-task1.png)

尝试更改下面的代码示例，重新完成的上述任务：

```html live-sample___position1
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <div class="target">Target</div>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css hidden live-sample___position1
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.container {
  padding: 0.5em;
  border: 5px solid #ccc;
}

.target {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: #663398;
  padding: 1em;
  color: white;
}
```

```css live-sample___position1
.container {
}

.target {
}
```

{{EmbedLiveSample("position1", "", "400px")}}

<details>
<summary>Click here to show the solution</summary>

This requires `position: relative` and `position: absolute` and understanding how they relate to each other in terms of relative positioning creating a new positioning context.
A likely issue could be that you add `position: absolute` to the child without applying `position: relative` to the container. In that case, the target will end up being positioned according to the viewport.

```css
.container {
  position: relative;
}

.target {
  position: absolute;
  top: 0;
  right: 0;
}
```

For the bonus question, you need to add a negative `z-index` to the target, for example `z-index: -2`.

</details>

## 定位练习二

在下面的示例中，滚动条滚动时侧边栏将随内容一起滚动。更改它使滚动条滚动时侧边栏保持原位并且只滚动内容。

![The content is scrolled but the sidebar has stayed in place.](position-task2.png)

尝试更改下面的代码示例，重新完成的上述任务：

```html live-sample___position2
<div class="container">
  <div class="sidebar">
    <p>
      This is the sidebar. It should remain in position as the content scrolls.
    </p>
  </div>
  <div class="content">
    <p>
      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
      onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
    </p>
    <p>
      Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
      tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
      Dandelion cucumber earthnut pea peanut soko zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo
      shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki
      bean chickweed potato bell pepper artichoke.
    </p>
  </div>
</div>
```

```css hidden live-sample___position2
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.container {
  height: 400px;
  padding: 0.5em;
  border: 5px solid #ccc;
  overflow: auto;
}

.sidebar {
  color: white;
  background-color: #663398;
  padding: 1em;
  float: left;
  width: 150px;
}

.content {
  padding: 1em;
  margin-left: 160px;
}
```

```css live-sample___position2
.container {
}

.sidebar {
}
```

{{EmbedLiveSample("position2", "", "400px")}}

<details>
<summary>Click here to show the solution</summary>

We're testing your understanding of `position: fixed` with a slightly different example to the ones in the learning materials.

```css
.sidebar {
  position: fixed;
}
```

</details>
