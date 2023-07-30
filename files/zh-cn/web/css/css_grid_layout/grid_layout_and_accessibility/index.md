---
title: CSS 网格布局和无障碍
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility
---

{{CSSRef}}

我们这些做 web 开发多年的人和比我们更早入行的人，可能都觉得 CSS 网格有一点像曾经用过的“表格布局”。在 web 设计的早期，构建页面布局的方式是使用 HTML 表格，通过把设计分割成表格的单元格来创建布局。这比后来的“CSS 定位”的优势在于，可以利用表格显示能力提供的对齐和全高度的列。最大的负面影响在于它将设计和 HTML 标记绑在一起，经常会造成无障碍的问题。为了将设计摆到表格中，内容被打散了，如果用屏幕阅读器去读它，读出来的内容就是毫无意义的。

在转向 CSS 布局时，我们经常说 CSS 把内容标记与内容表现分离了。最终的目标是，我们可以创建一个语义和结构良好的文档，然后应用 CSS 来创建我们想要的布局。[CSS Zen Garden](http://www.csszengarden.com/) 等网站展示了这种能力，[CSS Zen Garden](http://www.csszengarden.com/) 提供的挑战是，对于一个具有固定标记的 HTML 页面，却能用 CSS 来创建各种独特的设计。

[CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_grid_layout)没有表格布局的那种问题，网格结构是在 CSS 中而不是在 HTML 标记中定义的。如果我们需要添加一个元素，我们可以使用一些没有语义的标记。理论上，网格可以帮助我们延续 CSS 的承诺——标记与表现分离，但是这个方案有可能会做得过火吗？是否会因为使用了网格而导致无障碍问题？

## 在 CSS 网格布局中重排内容

我们已经看到，网格使我们有能力以各种方式重新排列页面的内容。通过 {{cssxref("order")}} 属性来改变项目自动定位，可以使用 `grid-auto-flow: dense` 使项目在视觉上脱离 DOM 顺序，还可以使用网格模板区域的基于线的定位来定位项目，这些方法都不用考虑标记位于 HTML 源代码中的位置。

[CSS 网格布局规范](https://drafts.csswg.org/css-grid/#order-accessibility)包括一个涵盖重新排序和无障碍的部分。该部分详细介绍了当使用网格布局对内容进行可视化重新排序时，规范期望浏览器执行的操作。

> 网格布局赋予了 web 开发者重新排列文档内容的强大能力，但是，这并不能取代 HTML 源代码中自身的排序。order 属性和网格定位不影响非可视媒体（例如语音）的排序。同样，可视化地重新排列网格项目不会影响顺序导航模式的默认遍历顺序（例如通过 TAB 键循环选取链接，参见 [tabindex](/zh-CN/docs/Web/HTML/Global_attributes/tabindex) HTML5）。

虽然使用网格布局对内容进行了可视化重新排列，但是在通过屏幕阅读器或其他文本到语音的用户代理读取内容时，并不会改变项目的排列方式。另外，重新排序不会改变 tab 键顺序，这意味着使用键盘进行导航的用户，通过按 TAB 键来引导阅读顺序，但由于下一个项目是在源代码的下一行，而这个项目正好被重新排序过，那他就会从网站的顶部一下子跳转到网站的底部。

所以规范警告作者（CSSWG 称呼 web 开发者的术语）不要对内容重新排序。

> 作者必须仅把 order 和网格布局属性用于内容的视觉排序而非逻辑排序。使用这些功能执行逻辑重新排序的样式表是不符合标准的。

这在网格布局设计中意味着什么呢？

### 视觉的而非逻辑的排序

无论何时，当使用网格布局重新排序或使用 flex 布局重新排序时，只能执行视觉的重新排序。真实的源代码顺序是语音阅读器的顺序，以及文档的 Tab 键顺序。下面是一个非常简单的例子。

在这个例子中，用网格布局了一组包含链接的盒子，使用基于线的布局属性把 box1 放置在了网格的第 2 行。虽然 box1 看起来呈现为列表的第四个项目，但如果此时用 tab 链切换链接，仍然是从 box1 开始，因为它在源代码中排得最靠前。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column: 1;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="box box1"><a href="">One</a></div>
  <div class="box box2"><a href="">Two</a></div>
  <div class="box box3"><a href="">Three</a></div>
  <div class="box box4"><a href="">Four</a></div>
  <div class="box box5"><a href="">Five</a></div>
</div>
```

{{ EmbedLiveSample('视觉的而非逻辑的排序', '500', '330') }}

规范声称在这种情况下，如果 box1 在此位置确的有逻辑上的意义，那就应该返回去修改源代码，而不是使用网格布局来重新排序。此例就是视觉的排序与逻辑的排序的对比，逻辑排序对于文档的意义和结构非常重要，一定要确保文档中的逻辑顺序正确。

### Firefox 中 flex 布局的排序 bug

Firefox 中一个[久已存在的 bug](https://bugzilla.mozilla.org/show_bug.cgi?id=812687) 因此变得非常显眼。虽然这个问题在 Firefox 的 CSS 网格布局实现中不存在，但它确实暴露了一个我们在使用网格时需要考虑的问题。

目前，在使用 flex 布局时，Firefox 将遵循视觉顺序而不是逻辑顺序浏览文档。[有人认为](http://tink.uk/flexbox-the-keyboard-navigation-disconnect/)，这实际上是一个更好的方法 —— 使 tab 键顺序遵循文档的视觉顺序。然而，事实证明，这是 Firefox 实现中的一个 bug。两种规范都声明逻辑顺序就是源文档的结构顺序，而 tab 键顺序和语音浏览器应遵循文档的逻辑顺序。

## 如何处理网格布局的无障碍？

从规范中我们知道需要确保文档内容的逻辑顺序。我们应该如何开发，才能对不同用户以及他们与页面的交互都保持良好的无障碍？

- 从结构化的、可访问的文档开始
  - : 网格布局意味着不需要改变文档源代码，就可以获得想要的布局。因此，开发页面的起点应该是一个结构良好的，可访问的源文档。正如 CSS 网格布局规范指出的，这通常也要求为最小的屏幕设备提供一个良好的文档结构。如果用户在移动设备上滚动长文档，那么用户优先要看到的内容也应在文档中位于优先的位置。
- 创建响应式的、自适应的网格
  - : 有了一个结构稳固的文档，就可以创建布局了，很可能要使用[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)来创建额外的列，并对不同的屏幕尺寸和设备改变布局。网格此时大有用武之地，例如，在移动设备上优先级不高的元素，在桌面设备上会被移到边栏中显示。此时的关键环节是要持续测试，一个非常简单的测试方法就是用 tab 键浏览文档。这个浏览顺序还有意义吗？检查是否有什么奇怪的从布局顶部跳到底部的情况，如果有的话，这就是一个信号，要赶快找找布局哪里出了问题。
- 回到源代码
  - : 如果在设计布局的过程中发现自己在使用网格重新定位元素的位置，就要考虑是否应该返回到文档并对逻辑顺序进行更改。使用 CSS 网格布局的一大好处是能够移动源文档中的项目以匹配逻辑顺序，而无需对布局进行大的更改。例如，对于基于 {{cssxref("float")}} 的布局，这是一个巨大的改进，其中文档的源代码非常重要，以便在不同的断点处获取布局。然而，作为开发人员，我们需要记得回到源代码并更新它以维护逻辑顺序。

## 网格和标记变平的危险

CSS 网格布局中需要注意的另一个问题（在 CSS Flex 布局中程度较轻），是标记*变平*的诱惑。我们已经知道，一个项目要成为一个网格项目，它需是网格容器的直接子项目，因此，如果在网格容器中有一个 {{HTMLElement("ul")}} 元素，那么*这个* `ul` 是一个网格项目，但子元素 {{HTMLElement("li")}} 并不是网格项目。

如果 {{cssxref("display")}} 属性的 `subgrid` 值得以实现，则可以通过将 `ul` 元素声明为 _subgrid_ 来使网格项目的这些子元素参与到整个网格布局中。目前唯一的解决方法是使用 `display：contents` 使 `ul` 生成的方框从 DOM 中消失。有关此相互影响的更多信息，请参阅本指南的[网格布局与其他布局方法的关系](/zh-CN/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)一文及文中的 [`display: contents`](/zh-CN/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods#Grid_and_display_contents) 部分。

由于对可互相影响的 `display: contents` 的支持有限，而且 subgrid 还没得到支持，所以当开发一个使用 CSS 网格布局的网站时，为了简单地创建布局，不可避免地要受到标签扁平化和移除语义元素的诱惑。例如，某些内容在语义上被标记为列表，但是为了通过 `display: grid` 将这些元素设置为容器的直接子元素，可能会决定用一组 {{HTMLElement("div")}} 标签来替代。要抵抗这种诱惑，找到不删除标记的设计方法。从一个结构良好的文档开始，是避免这个问题是一个好办法，当不得已去修改文档时，你就会意识到，你将仅是为了让布局工作而要删除语义元素！

## 延伸阅读

目前关于无障碍和 CSS 网格布局的资料并不多。许多问题与 CSS Flex 布局遇到的问题类似，也提出了使用 {{cssxref("flex-direction")}} 和 {{cssxref("order")}} 属性重新排序内容的方法。

依据文档源代码顺序进行可视化显示的概念在 _WCAG（无障碍网页内容指引）成熟标准技巧 - [技巧 C27](https://www.w3.org/TR/WCAG20-TECHS/C27.html)_ 中有详细描述。

作为一种开始思考这些问题的方式，当使用 CSS 网格布局时，建议阅读 Leonie Watson 的 _[Flexbox & the Keyboard Navigation Disconnect](http://tink.uk/flexbox-the-keyboard-navigation-disconnect/)。[来自 ffconf 的 Leoie 的演示视频](https://www.youtube.com/watch?v=spxT2CmHoPk)有助于了解屏幕阅读器如何使用 CSS 的视觉表示进行工作。Adrian Roselli 也发表了 [tab order in various browsers](http://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) —— 尽管这是在 Firefox 完全实现网格支持之前。_
