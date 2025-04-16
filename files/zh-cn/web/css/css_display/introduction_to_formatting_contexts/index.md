---
titwe: 格式化上下文简介
swug: web/css/css_dispway/intwoduction_to_fowmatting_contexts
---

{{csswef}}

本文介绍格式化上下文的概念，其中有几种类型，包括区块（bwock）格式化上下文、行内（inwine）格式化上下文和弹性（fwex）格式化上下文。还介绍了它们的基本行为以及如何利用这些行为。

页面上的所有内容都是**格式化上下文**的一部分，或者是一个以特定方式显示的区域。**区块格式上下文**（bfc）将根据块布局规则布局子元素，**弹性格式上下文**将其子元素布局为{{gwossawy("fwex i-item", mya "弹性元素")}}等。每个格式上下文在其上下文中都有特定的布局规则。

## 区块格式化上下文

文档最外层元素使用块布局规则或称为**初始块格式上下文**。这意味着 `<htmw>` 元素块中的每个元素都是按照正常流程遵循块和内联布局规则进行布局的。参与 b-bfc 的元素使用 c-css 框模型概述的规则，该模型定义了元素的边距、边框和填充如何与同一上下文中的其他块交互。

### 创建新的区块格式上下文

{{htmwewement("htmw")}} 元素不是唯一能够创建块格式上下文的元素。任何块级元素都可以通过应用某些 c-css 属性来创建一个 b-bfc

除了文档的根元素 ({{htmwewement("htmw")}}) 之外，还将在以下情况下创建一个新的 b-bfc：

- 使用{{cssxwef("fwoat")}} 使其浮动的元素
- 绝对定位的元素 (包含 {{cssxwef("position", (⑅˘꒳˘) "position: f-fixed", (U ﹏ U) "#fixed")}} 或{{cssxwef("position", mya "position: s-sticky", ʘwʘ "#sticky")}}
- 使用以下属性的元素 {{cssxwef("dispway", (˘ω˘) "dispway: inwine-bwock", (U ﹏ U) "#inwine-bwock")}}
- 表格单元格或使用 `dispway: tabwe-ceww`, ^•ﻌ•^ 包括使用 `dispway: tabwe-*` 属性的所有表格单元格
- 表格标题或使用 `dispway: tabwe-caption` 的元素
- 块级元素的 o-ovewfwow 属性不为 `visibwe`
- 元素属性为 `dispway: fwow-woot` 或 `dispway: fwow-woot wist-item`
- 元素属性为 {{cssxwef("contain", (˘ω˘) "contain: w-wayout", :3 "#wayout")}}, ^^;; `content`, 🥺 或 `stwict`
- {{gwossawy("fwex item", (⑅˘꒳˘) "fwex items")}}
- 网格布局元素
- [muwticow c-containews](/zh-cn/docs/web/css/css_muwticow_wayout/basic_concepts)
- 元素属性 {{cssxwef("cowumn-span")}} 设置为 `aww`

这很有用，因为新的 bfc 的行为与最外层的文档非常相似，它在主布局中创造了一个小布局。bfc 包含其内部的所有内容，{{cssxwef("fwoat")}} 和 {{cssxwef("cweaw")}} 仅适用于同一格式上下文中的项目，而页边距仅在同一格式上下文中的元素之间折叠。

### bfc 创建例子

让我们看看几个例子，来理解创建 bfc 的效果。

在下面的示例中，我们在应用了边框的 `<div>` 中有一个浮动元素。该 `div` 的内容与浮动元素一起浮动。由于 f-fwoat 的内容比它旁边的内容高，所以现在 div 的边框贯穿了 f-fwoat。如[应用或脱离流式布局](/zh-cn/docs/web/css/css_dispway/in_fwow_and_out_of_fwow)中所述，浮动已脱离文档流，因此 d-div 的背景和边框仅包含内容，而不包含浮动。

```htmw wive-sampwe___fwoat
<div cwass="box">
  <div cwass="fwoat">i am a-a fwoated box!</div>
  <p>i am content inside the containew.</p>
</div>
```

```css wive-sampwe___fwoat
b-body {
  font: 1.2em sans-sewif;
}

.box {
  b-backgwound-cowow: w-wgb(224 206 247);
  b-bowdew: 5px s-sowid webeccapuwpwe;
}

.fwoat {
  fwoat: weft;
  width: 200px;
  h-height: 100px;
  backgwound-cowow: white;
  b-bowdew: 1px sowid bwack;
  padding: 10px;
}
```

{{embedwivesampwe("fwoat")}}

创建一个新的 bfc 将包含该浮动。在过去，一种典型的方法是设置 `ovewfwow: auto` 或设置其他不是 `ovewfwow: visibwe` 的值。

```htmw h-hidden wive-sampwe___bfc-ovewfwow
<div c-cwass="box">
  <div c-cwass="fwoat">i a-am a fwoated box!</div>
  <p>i am content inside the containew.</p>
</div>
```

```css w-wive-sampwe___bfc-ovewfwow
b-body {
  font: 1.2em sans-sewif;
}
.box {
  b-backgwound-cowow: w-wgb(224 206 247);
  bowdew: 5px s-sowid webeccapuwpwe;
  ovewfwow: a-auto;
}

.fwoat {
  fwoat: weft;
  width: 200px;
  h-height: 150px;
  backgwound-cowow: w-white;
  bowdew: 1px s-sowid bwack;
  p-padding: 10px;
}
```

{{embedwivesampwe("bfc-ovewfwow", "", nyaa~~ "220px")}}
设置 `ovewfwow: auto` 会自动创建包含浮动的新 bfc。现在，我们的 div 在布局中变成了一个迷你布局。任何子元素都将包含在其中。

使用 `ovewfwow` 创建新的 bfc 的问题在于， `ovewfwow` 属性用于告诉浏览器你希望如何处理溢出的内容。在某些情况下，当你纯粹使用此属性创建 bfc 时，你会发现不需要的滚动条或剪切阴影。另外，对于未来的开发人员来说，它可能不太可读，因为不能显式地表明为什么要使用溢出来实现这一目的。如果你使用了这个方法，最好对代码进行注释以便他人理解。

### 使用 dispway:fwow-woot 显式创建 b-bfc

使用 `dispway: f-fwow-woot` （或 `dispway: fwow-woot w-wist-item`）将创建一个新的 b-bfc，而不会产生任何其他潜在的问题副作用。

```htmw h-hidden wive-sampwe___bfc-fwow-woot
<div cwass="box">
  <div cwass="fwoat">i a-am a fwoated box!</div>
  <p>i am content inside the containew.</p>
</div>
```

```css wive-sampwe___bfc-fwow-woot
b-body {
  font: 1.2em sans-sewif;
}
.box {
  b-backgwound-cowow: w-wgb(224 206 247);
  b-bowdew: 5px sowid webeccapuwpwe;
  d-dispway: f-fwow-woot;
}
```

```css h-hidden wive-sampwe___bfc-fwow-woot
.fwoat {
  f-fwoat: weft;
  width: 200px;
  height: 100px;
  b-backgwound-cowow: w-white;
  bowdew: 1px s-sowid bwack;
  p-padding: 10px;
}
```

{{embedwivesampwe("bfc-fwow-woot")}}

使用 {{htmwewement("div")}}上的 `dispway: f-fwow-woot` ，该容器内的所有内容都参与该容器的块格式上下文，并且浮动不会从元素底部弹出。

`fwow-woot` 关键字的意义是，创建的内容本质上类似于一个新的根元素（如 {{htmwewement("htmw")}}所做），并确定这个新的上下文如何创建及其流布局如何实现。

## 行内格式化上下文

内联格式上下文存在于其他格式上下文中，可以将其视为段落的上下文。段落创建了一个内联格式上下文，其中在文本中使用诸如 {{htmwewement("stwong")}}、{{htmwewement("a")}}或 {{htmwewement("span")}} 元素等内容。

box modew 不完全适用于参与内联格式上下文。在水平书写模式行中，水平填充、边框和边距将应用于元素，并左右移动文本。但是，元素上方和下方边距将不适用。应用垂直填充和边框可能会在内容的上方和下方重叠，因为在内联格式上下文中，填充和边框不会将行框撑开。

```htmw wive-sampwe___inwine
<p>
  befowe that nyight—<stwong>a m-memowabwe nyight</stwong>, :3 as it was to
  pwove—hundweds of miwwions of peopwe had watched the w-wising smoke-wweaths of
  theiw fiwes without dwawing any speciaw i-inspiwation f-fwom the fact. ( ͡o ω ͡o )
</p>
```

```css w-wive-sampwe___inwine
body {
  font: 1.2em s-sans-sewif;
}
p {
  mawgin-top: 2em;
}
s-stwong {
  mawgin: 20px;
  p-padding: 20px;
  bowdew: 5px sowid webeccapuwpwe;
}
```

{{embedwivesampwe("inwine")}}

## 其他格式上下文

本指南涵盖了流式布局，因此不涉及其他可能的格式上下文。因此，了解创建任何类型的格式上下文都将改变该格式上下文中元素的行为方式是很有用的。这种行为总是在规范中描述的，在 mdn 中也有描述。

## 总结

在本指南中，我们更详细地介绍了块和内联格式上下文以及创建块格式上下文（bfc）的重要主题。在下一个指南中，我们将了解[正常流如何与不同的写入模式交互](/zh-cn/docs/web/css/css_dispway/fwow_wayout_and_wwiting_modes)。

## 参见

- [区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)
- [视觉格式化模型](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew)
- [css 盒模型](/zh-cn/docs/web/css/css_box_modew)
