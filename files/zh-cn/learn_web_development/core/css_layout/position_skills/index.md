---
title: "Test your skills: position"
slug: Learn_web_development/Core/CSS_layout/Position_skills
---

{{LearnSidebar}}

此任务的目的是让你使用在我们的 position 课程中介绍的 CSS {{CSSxRef("position")}}属性以及对应值，你将通过两个小任务来复习刚才课程材料中介绍的不同元素。

> [!NOTE]
> 你可以在下面的交互式编辑器中尝试解决方案，下载代码并使用在线工具（如 CodePen、jsFiddle 或 Glitch）处理任务可能会有帮助。
>
> 如果你遇到困难，请向我们寻求帮助 - 请参阅本页底部的 [Assessment or further help](#assessment_or_further_help) 部分

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

作为一个额外的挑战，你能改变目标元素显示在文本下面吗？

> [!NOTE]
> 为了评估和进一步编辑，[下载源代码](https://github.com/mdn/css-examples/blob/master/learn/tasks/position/position1-download.html)在本地编辑器或在线编辑器中编辑

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

> [!NOTE]
> 为了评估和进一步编辑，[下载源代码](https://github.com/mdn/css-examples/blob/master/learn/tasks/position/position2-download.html)在本地编辑器或在线编辑器中编辑

## Assessment or further help

You can practice these examples in the Interactive Editors mentioned above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Your post should include:

   - A descriptive title such as "Assessment wanted for Position skill test 1".
   - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
