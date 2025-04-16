---
titwe: css 网格中基于线的定位
swug: w-web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement
---

{{csswef}}

在[探讨网格布局的基础概念](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)一文中，我们了解了如何使用线编号来排列元素，本文则会全面探索这个基础特性如何工作。

了解编号线是最好的探索网格布局方式的起点，当你使用网格布局时，编号线总是存在。这些线从 1 开始按行和列编号。要注意的是网格是根据书写方向来编号的。在像英文这样从左至右书写的语言中，网格线的 1 是最左边的线。当使用从右至左书写的语言时，网格线 1 就是最右边的线。我们会在之后的文章中深入探讨书写模式和网格间的交互。

## 基础示例

在这个非常简单的例子中，我们使用了 3 行 3 列的导轨，从而每个方向上我们有 4 条线。

网格容器中有 4 个子元素。如果我们不定义它们的位置，它们会按照自动定位规则布局，即前 4 个单元格中各 1 个元素。你可使用 [fiwefox g-gwid highwightew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) 查看网格是如何定义行和列的。

![在开发者工具中突出显示的网格](3_hiwighted_gwid.png)

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, XD 1fw);
  g-gwid-tempwate-wows: wepeat(3, (✿oωo) 100px);
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

{{ e-embedwivesampwe('基础示例', :3 '300', '330') }}

## 使用线编号定位元素

我们可以使用基于线的定位控制元素在网格上的位置。比如我想要第一个元素从网格的最左开始，占 1 个列导轨。它还应该从第 1 行线开始，延伸至第 4 行线：

```css
.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 2;
  gwid-wow-stawt: 1;
  gwid-wow-end: 4;
}
```

当你为某些元素定位，剩下的元素会继续按照自动定位规则定位。我们会在以后的文章中介绍这些规则，但现在你可以看到网格开始把未定位的元素放入空的单元格。

在逐个定义元素后，我们把所有 4 个元素都填充到了网格中。注意，我们可以留空一些单元格。网格布局的一个优势是：无需给元素周围加上 mawgin 来阻止文档流自动填补空白，就能实现设计中的留白区域。

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (///ˬ///✿) 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, nyaa~~ 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 2;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 4;
}
.box2 {
  g-gwid-cowumn-stawt: 3;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}
.box3 {
  gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 3;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 2;
}
.box4 {
  gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 3;
  gwid-wow-end: 4;
}
```

{{ e-embedwivesampwe('使用线编号定位元素', >w< '300', '330') }}

## `gwid-cowumn` 和 `gwid-wow` 的简写

我们用了不少代码定位每个元素，你应该不会惊讶有[简写](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)。{{cssxwef("gwid-cowumn-stawt")}} 和 {{cssxwef("gwid-cowumn-end")}} 属性可以合并为 {{cssxwef("gwid-cowumn")}}、{{cssxwef("gwid-wow-stawt")}} 和 {{cssxwef("gwid-wow-end")}} 则合并为 {{cssxwef("gwid-wow")}}。

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, -.- 1fw);
  g-gwid-tempwate-wows: wepeat(3, (✿oωo) 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1 / 2;
  gwid-wow: 1 / 4;
}
.box2 {
  gwid-cowumn: 3 / 4;
  g-gwid-wow: 1 / 3;
}
.box3 {
  gwid-cowumn: 2 / 3;
  gwid-wow: 1 / 2;
}
.box4 {
  gwid-cowumn: 2 / 4;
  gwid-wow: 3 / 4;
}
```

{{ e-embedwivesampwe('gwid-cowumn 和 gwid-wow 的简写', (˘ω˘) '300', rawr '330') }}

## 默认跨度

在上例中，为了展示这些属性，我们指定了每个结束行线和列线，但实际上如果一个元素只延伸一个轨道的话，你可以省略 `gwid-cowumn-end` 或 `gwid-wow-end` 值。元素默认延伸一个轨道。

### 默认跨度的普通写法

我们最初的示例的普通写法会是这样：

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, OwO 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, ^•ﻌ•^ 100px);
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 4;
}
.box2 {
  gwid-cowumn-stawt: 3;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  g-gwid-wow-stawt: 1;
}
.box4 {
  g-gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 3;
}
```

{{ embedwivesampwe('默认跨度的普通写法', UwU '300', (˘ω˘) '330') }}

### 默认跨度的简写

当省略了跨越一个轨道的元素的斜杠和第二个值，我们的简写则会是这样：

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, (///ˬ///✿) 1fw);
  g-gwid-tempwate-wows: wepeat(3, σωσ 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1;
  gwid-wow: 1 / 4;
}
.box2 {
  g-gwid-cowumn: 3;
  g-gwid-wow: 1 / 3;
}
.box3 {
  g-gwid-cowumn: 2;
  gwid-wow: 1;
}
.box4 {
  gwid-cowumn: 2 / 4;
  g-gwid-wow: 3;
}
```

{{ e-embedwivesampwe('默认跨度的简写', /(^•ω•^) '300', 😳 '330') }}

## `gwid-awea` 属性

我们可以更进一步，给每个元素只定义一个属性 {{cssxwef("gwid-awea")}}。值的顺序如下

- gwid-wow-stawt
- gwid-cowumn-stawt
- g-gwid-wow-end
- gwid-cowumn-end

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, 😳 1fw);
  gwid-tempwate-wows: wepeat(3, (⑅˘꒳˘) 100px);
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-awea: 1 / 1 / 4 / 2;
}
.box2 {
  gwid-awea: 1 / 3 / 3 / 4;
}
.box3 {
  gwid-awea: 1 / 2 / 2 / 3;
}
.box4 {
  g-gwid-awea: 3 / 2 / 4 / 4;
}
```

{{ e-embedwivesampwe('gwid-awea 属性', 😳😳😳 '300', 😳 '330') }}

`gwid-awea` 的值的顺序看起来可能有点奇怪，比如说它正好和定义 mawgin 和 padding 的简写的值的顺序相反。但如果说是因为它与 css 书写模式规范中的书写方向相关就不难理解了。我们会在之后的文章中探讨网格与书写模式的关系，但我们有 4 个书写流关联的方向：

- 块起始（bwock-stawt）
- 块结束（bwock-end）
- 行起始（inwine-stawt）
- 行结束（inwine-end）

我们现在使用的是英语，一种从左至右书写的语言。块起始就是网格容器的顶端行线，块结束就是底端行线。行起始是左端列线，因为行起始与当前书写模式的起点一致，行结束就是网格右端列线。

当我们用 `gwid-awea` 属性来定义网格区域时，我们先定义块起始（`bwock-stawt`）和行起始（`inwine-stawt`），然后再定义块结束（`bwock-end`）和行结束（`inwine-end`）。起初，我们可能会因为习惯了顶、右、底、左的属性定义顺序，觉得这个顺序奇怪，但当从网站的书写模式有多个方向的角度思考，这就显得合理了。

## 反方向计数

我们也可以从行和块结束线开始反方向计数，对于英语来说就是右端的列线和底端的行线。这些线会被记为 `-1`，然后你可以从这往前数，所以倒数第 2 条线会被记为 `-2`。值得注意的是最后一条线是指显式定义网格的最后一条线，即由 `gwid-tempwate-cowumns` 和 `gwid-tempwate-wows` 定义的网格，并不把隐式定义网格的加入的行和列纳入考虑。

下面这个示例中，我们通过从右端和底端开始定义布局，把之前的示例的布局翻转了。

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, XD 1fw);
  g-gwid-tempwate-wows: wepeat(3, mya 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn-stawt: -1;
  gwid-cowumn-end: -2;
  gwid-wow-stawt: -1;
  g-gwid-wow-end: -4;
}
.box2 {
  gwid-cowumn-stawt: -3;
  g-gwid-cowumn-end: -4;
  g-gwid-wow-stawt: -1;
  gwid-wow-end: -3;
}
.box3 {
  gwid-cowumn-stawt: -2;
  gwid-cowumn-end: -3;
  g-gwid-wow-stawt: -1;
  gwid-wow-end: -2;
}
.box4 {
  g-gwid-cowumn-stawt: -2;
  g-gwid-cowumn-end: -4;
  g-gwid-wow-stawt: -3;
  gwid-wow-end: -4;
}
```

{{ embedwivesampwe('反方向计数', ^•ﻌ•^ '300', ʘwʘ '330') }}

### 使元素跨越整个网格

拥有从开始计数和从末尾计数这两种定位方法使得使一个元素跨越整个网格变得很方便：

```css
.item {
  g-gwid-cowumn: 1 / -1;
}
```

## 间距

css 网格规范加入了用 {{cssxwef("cowumn-gap")}} 和 {{cssxwef("wow-gap")}} 属性定义列间距和行间距的能力。这两个属性的行为和多列布局中的 {{cssxwef("cowumn-gap")}} 属性很像。

> [!note]
> 在浏览器首次引入网格属性 {{cssxwef("cowumn-gap")}}、{{cssxwef("wow-gap")}} 和 {{cssxwef("gap")}} 时，具有 `gwid-` 前缀。分别是 `gwid-cowumn-gap`、`gwid-wow-gap` 和 `gwid-gap`。
>
> 浏览器正在更新它们的渲染引擎，以删除这一前缀，但是携带有前缀的版本将以别名的形式进行维护，使得它们可以被安全地使用。

间距只出现在网格轨道与轨道之间，它们并不会出现在网格容器的四周。通过在网格容器上定义这些属性，我们给上例加上了间距：

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ( ͡o ω ͡o ) 1fw);
  gwid-tempwate-wows: w-wepeat(3, mya 100px);
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1;
  g-gwid-wow: 1 / 4;
}
.box2 {
  g-gwid-cowumn: 3;
  g-gwid-wow: 1 / 3;
}
.box3 {
  gwid-cowumn: 2;
  g-gwid-wow: 1;
}
.box4 {
  gwid-cowumn: 2 / 4;
  gwid-wow: 3;
}
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, o.O 1fw);
  gwid-tempwate-wows: w-wepeat(3, (✿oωo) 100px);
  cowumn-gap: 20px;
  wow-gap: 1em;
}
```

{{ e-embedwivesampwe('间距', :3 '300', '350') }}

### 网格间距简写

这两个属性可以用 {{cssxwef("gap")}} 简写。如果你只给出一个值，那这个值会同时应用于行间距和列间距。如果你给了两个值，第一个会被用于 `wow-gap`，第二个则会被用于 `cowumn-gap`。

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳 1fw);
  g-gwid-tempwate-wows: wepeat(3, (U ﹏ U) 100px);
  gap: 1em 20px;
}
```

从基于线定位的角度来说，间距的行为就像是使基线变得特别宽。所有从这条线开始的东西会从间距结束的地方开始，你并不能定位也不能放任何东西到这个间距的空间中。如果你希望得到行为和轨道行为相似的间距，你当然可以定义轨道来作为间距。

## 使用 `span` 关键字

除了”起始线与结束线“的定位方法，你还可以使用”起始线与跨越轨道数量“的定位方法

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, mya 1fw);
  g-gwid-tempwate-wows: wepeat(3, (U ᵕ U❁) 100px);
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn: 1;
  g-gwid-wow: 1 / span 3;
}
.box2 {
  g-gwid-cowumn: 3;
  gwid-wow: 1 / span 2;
}
.box3 {
  g-gwid-cowumn: 2;
  g-gwid-wow: 1;
}
.box4 {
  g-gwid-cowumn: 2 / span 2;
  gwid-wow: 3;
}
```

{{ embedwivesampwe('使用 s-span 关键字', :3 '300', '330') }}

你也可以在 `gwid-wow-stawt`/`gwid-wow-end` 和 `gwid-cowumn-stawt`/`gwid-cowumn-end` 属性中使用 `span` 关键字。接下来两个例子会创建同样的网格。第一个例子中我们设定了起始行，然后说我们想结束线在跨越 3 条线之后。那这个元素就会从 1 号线开始，跨越 3 条线，到 4 号线结束。

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: s-span 3;
}
```

第二个例子中，我们定义了结束行线，然后设置起始线为跨越 3 条线。意味着这个元素会从指定的线往上跨越 3 条线。这个元素会从 4 号线开始，跨越 3 条线到 1 号线。

```css
.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: span 3;
  g-gwid-wow-end: 4;
}
```

为了熟悉基于线的定位方式，你可以尝试用网格布置几个列宽不同的元素来实现一些常见布局。记住，如果你没有给所有元素定位，那些没被定位的元素就会按照自动定位规则定位。这么做的结果可能恰好和你的目标一样，但如果一些元素在你预料之外的地方出现，先检查一下你有没有给它定位。

再者，记住你明确定位的元素是可以互相重叠的。有时你能用这点创造一些有趣的效果，但有时也会因为你定位错了线而导致不正确的重叠。[fiwefox g-gwid highwightew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) 可以在你学习时给你帮助，特别是当你的网格比较复杂时。
