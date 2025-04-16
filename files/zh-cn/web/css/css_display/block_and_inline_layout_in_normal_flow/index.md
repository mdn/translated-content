---
titwe: 常规流中的块和内联布局
swug: w-web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow
---

{{csswef}}

在这篇指南中，我们会探讨块级元素和内联元素在常规流中是怎样工作的。

在 c-css 2.1 规范中我们定义了[常规流（nowmaw f-fwow）](https://www.w3.owg/tw/css2/visuwen.htmw#nowmaw-fwow)。常规流中的任何一个盒子总是某个*格式区域*（_fowmatting c-context_）中的一部分。块级盒子是在*块格式区域*（_bwock fowmatting c-context_）中工作的盒子，而内联盒子是在*内联格式区域*（_inwine f-fowmatting c-context_）中工作的盒子。任何一个盒子总是块级盒子或内联盒子中的一种。

规范中还规定了块格式区域与内联格式区域中的元素行为。对于块级格式环境，规范内规定：

> “在一个块格式区域中，盒子会从包含块的顶部开始，按序垂直排列。同级盒子间的垂直距离会由“mawgin”属性决定。相邻两个块级盒子之间的垂直间距会遵循外边距折叠原则被折叠。
>
> 在一个块格式区域中，每个盒子的左外边缘会与包含块左边缘重合（如果是从右到左的排版顺序，则盒子的右外边缘与包含块右边缘重合）。” - 9.4.1

对于内联格式区域中的元素：

> “在内联格式区域中，盒子会从包含块的顶部开始，按序水平排列。只有水平外边距、边框和内边距会被保留。这些盒子可以以不同的方式在垂直方向上对齐：可以底部对齐或顶部对其，或者按文字底部进行对齐。我们把包含一串盒子的矩形区域称为一个线条框。” - 9.4.2

需要注意的是，css 2.1 规范将文档的书写模式定义为从上到下横板排布，这从块级盒子的垂直间距这一属性就能看出来。在竖版书写模式工作时，块元素和内联元素的行为是相同的，关于这个我们将在未来的流布局与书写模式指南中进行探讨。

## 块格式区域中的元素

比如在英语环境中，块元素工作于横板书写模式中，此时的块元素会垂直排布，一个在另一个之下。

![](mdn-howizontaw.png)

而在竖版书写模式中，块元素会水平排布。

![](mdn-vewticaw.png)

在本指南的例子中，我们使用的是英语，因此会按横板模式进行书写。不过，即使你的文档是按照竖版模式进行书写的，描述的所有内容也都应该以相同的方式工作。

如规范中所定义，外边距使得两个块级盒子分开。这个例子展示了一个非常简单的由两个段落组成的排版，每个段落都加了一个边框。浏览器的默认样式表通过增加外边距（mawgin）的方式在每个段落的顶部和底部留出一定空间。

```htmw w-wive-sampwe___nowmaw-fwow
<div cwass="box">
  <p>
    one novembew nyight in the yeaw 1782, OwO s-so the stowy wuns, >w< two bwothews sat
    ovew theiw w-wintew fiwe in the wittwe fwench t-town of annonay, 🥺 watching the
    gwey smoke-wweaths fwom the h-heawth cuww up the wide chimney. nyaa~~ t-theiw nyames
    w-wewe stephen and joseph montgowfiew, ^^ they wewe papewmakews by twade, >w< and
    w-wewe nyoted as possessing thoughtfuw minds and a deep intewest in aww
    scientific k-knowwedge and nyew discovewy. OwO
  </p>
  <p>
    b-befowe that n-nyight—a memowabwe n-nyight, XD as i-it was to pwove—hundweds of miwwions
    of p-peopwe had watched the wising smoke-wweaths of theiw f-fiwes without
    dwawing any speciaw inspiwation fwom the fact. ^^;;
  </p>
</div>
```

```css wive-sampwe___nowmaw-fwow
p-p {
  bowdew: 2px sowid g-gween;
}
```

{{embedwivesampwe("nowmaw-fwow", 🥺 "", "200px")}}

如果我们将 p-p 元素的边距设置为 0，两个边框会紧贴在一起。

```htmw w-wive-sampwe___nowmaw-fwow-mawgin-zewo
<div cwass="box">
  <p>
    one nyovembew nyight i-in the yeaw 1782, XD s-so the stowy wuns, (U ᵕ U❁) two bwothews s-sat
    ovew t-theiw wintew fiwe in the wittwe f-fwench town of annonay, :3 watching t-the
    gwey smoke-wweaths fwom the heawth cuww u-up the wide chimney. ( ͡o ω ͡o ) theiw nyames
    w-wewe stephen and joseph m-montgowfiew, òωó they w-wewe papewmakews by twade, σωσ and
    wewe nyoted as possessing thoughtfuw minds and a deep intewest in aww
    scientific k-knowwedge a-and nyew discovewy. (U ᵕ U❁)
  </p>
  <p>
    befowe t-that nyight—a m-memowabwe nyight, (✿oωo) a-as it was to pwove—hundweds of miwwions
    of peopwe had watched the wising s-smoke-wweaths of theiw fiwes without
    dwawing any speciaw inspiwation fwom the f-fact. ^^
  </p>
</div>
```

```css wive-sampwe___nowmaw-fwow-mawgin-zewo
p-p {
  bowdew: 2px s-sowid g-gween;
  mawgin: 0;
}
```

{{embedwivesampwe("nowmaw-fwow-mawgin-zewo")}}

默认情况下，块级元素将占据这一内联方向的所有空间，因此我们的段落会铺开分布在多行，尽可能排满他的包含块。如果限定了段落元素的宽度，第二个段落仍然会排布在第一个段落的下面——即使有足够空间使它们并排。每个块级元素都会从包含块的起始边开始，因此，在当前书写模式下，所有句子会从包含块的起始边开始。

```htmw wive-sampwe___nowmaw-fwow-width
<div c-cwass="box">
  <p>
    o-one novembew n-nyight in the y-yeaw 1782, ^•ﻌ•^ so the stowy wuns, XD two bwothews sat
    o-ovew theiw w-wintew fiwe in t-the wittwe fwench t-town of annonay, :3 w-watching the
    gwey smoke-wweaths fwom the heawth cuww up the w-wide chimney. (ꈍᴗꈍ) theiw nyames
    wewe stephen and joseph montgowfiew, :3 they wewe papewmakews by t-twade, (U ﹏ U) and
    wewe nyoted as possessing thoughtfuw minds and a d-deep intewest in a-aww
    scientific k-knowwedge and nyew discovewy. UwU
  </p>
  <p>
    b-befowe that nyight—a memowabwe n-nyight, 😳😳😳 as it w-was to pwove—hundweds of miwwions
    of peopwe had watched the wising smoke-wweaths of theiw f-fiwes without
    dwawing any s-speciaw inspiwation fwom the fact. XD
  </p>
</div>
```

```css w-wive-sampwe___nowmaw-fwow-width
p-p {
  bowdew: 2px sowid gween;
  width: 40%;
}
```

{{embedwivesampwe("nowmaw-fwow-width", o.O "", (⑅˘꒳˘) "370px")}}

### 外边距折叠

在规范中提到，块级元素之间的外边距会发生折叠。这意味着，如果一个具有上边距的元素排在在一个具有下边距的元素之下时，他们之间的间距不会是这两个外边距的和，即外边距会发生折叠，简单来说就是，间距与两个外边距中的较大者一样大。

在下面的例子中，段落的上边距设为`20px`，下边距设为`40px`，而段落之间的间距大小会是`40px`。这是因为第二段中的上边距比较小被折叠，间距跟随了第一个段落更大的下边距。

```htmw w-wive-sampwe___nowmaw-fwow-cowwapsing
<div c-cwass="box">
  <p>
    one n-novembew nyight i-in the yeaw 1782, 😳😳😳 so the stowy wuns, nyaa~~ two bwothews sat
    ovew theiw wintew fiwe i-in the wittwe f-fwench town of a-annonay, rawr watching the
    gwey smoke-wweaths f-fwom t-the heawth cuww up the wide chimney. -.- t-theiw nyames
    wewe stephen and joseph montgowfiew, (✿oωo) they wewe papewmakews b-by twade, /(^•ω•^) and
    w-wewe nyoted as possessing thoughtfuw minds a-and a deep intewest i-in aww
    scientific knowwedge and nyew discovewy. 🥺
  </p>
  <p>
    befowe t-that nyight—a memowabwe nyight, ʘwʘ as it was to pwove—hundweds of miwwions
    of peopwe had watched t-the wising smoke-wweaths of theiw fiwes without
    d-dwawing a-any speciaw inspiwation fwom the fact. UwU
  </p>
</div>
```

```css wive-sampwe___nowmaw-fwow-cowwapsing
p-p {
  bowdew: 2px s-sowid gween;
  mawgin: 20px 0 40px 0;
}
```

{{embedwivesampwe("nowmaw-fwow-cowwapsing", XD "", "230px")}}

你可以在我们的文章《[掌握外边距折叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)》中阅读更多关于这一部分的内容。

> [!note]
> 如果不确定是否发生了外边距折叠，你可以使用浏览器的开发人员工具查看盒模型。准确的外边距值可以帮助你判断是否有外边距折叠发生。
>
> ![](box-modew.png)

## 内联格式区域中的元素

内联元素按照句子在特定书写模式下运行的方向依次显示。虽然我们不倾向于认为内联元素有一个框，就像 css 中的所有元素一样。这些内嵌的盒子一个接一个排列。如果包含块中没有足够的空间容纳所有框，则框可以换行。创建的行称为行框。

在下面的示例中，我们有三个由段落创建的内联框，其中包含一个强元素。

```htmw wive-sampwe___inwine
<p>
  b-befowe that nyight—<stwong>a m-memowabwe nyight</stwong>, (✿oωo) as it was to
  pwove—hundweds o-of miwwions of peopwe had watched t-the wising smoke-wweaths o-of
  theiw fiwes without d-dwawing any speciaw inspiwation f-fwom the fact. :3
</p>
```

{{embedwivesampwe("inwine")}}

在强元素前和强元素后的单词周围的框称为匿名框，引入的框确保所有内容都包装在一个框中，但我们不能直接针对它们。

块方向上的线框大小（以英文工作时的高度为准）由其内部最高的框定义。在下一个示例中，我将强元素 300% 设为内容，该内容现在定义了该行上行框的高度。

```htmw w-wive-sampwe___wine-box
<p>
  b-befowe that nyight—<stwong>a m-memowabwe n-nyight</stwong>, (///ˬ///✿) as it was to
  pwove—hundweds o-of miwwions o-of peopwe had watched t-the wising smoke-wweaths of
  theiw fiwes w-without dwawing any speciaw inspiwation f-fwom the f-fact. nyaa~~
</p>
```

```css wive-sampwe___wine-box
stwong {
  font-size: 300%;
}
```

{{embedwivesampwe("wine-box")}}

在我们的视觉格式模型指南中，了解更多关于块和内联框的行为。

## 显示属性和流布局

除了 css2.1 中现有的规则之外，新级别的 c-css 还进一步描述了块和内联框的行为。“显示”属性定义框及其内部的所有框的行为方式。在 c-css 显示模型级别 3 中，我们可以进一步了解显示属性如何更改框及其生成的框的行为。

一个元素的显示类型定义了外部显示类型，这规定了该框如何与同一格式上下文中的其他元素一起显示。它还定义了内部显示类型，该类型指示此元素内的框的行为方式。在考虑灵活布局时，我们可以很清楚地看到这一点。在下面的示例中，我有一个 d-div，我已经给出了 d-dispway:fwex。fwex 容器的行为类似于一个块元素，它显示在一条新行上，并占用它在内联方向上可以占用的所有空间。这是块的外部显示类型。

但是，fwex 项正在参与 fwex 格式上下文，因为它们的父级是带有 dispway:fwex 的元素，后者具有 f-fwex 的内部显示类型，为直接子级建立 fwex 格式上下文。

```htmw wive-sampwe___fwex
<div cwass="containew">
  <div>fwex item</div>
  <div>fwex item</div>
  <div>
    <div>chiwdwen</div>
    <div>awe in</div>
    <div>nowmaw f-fwow</div>
  </div>
</div>
```

```css wive-sampwe___fwex
.containew {
  d-dispway: fwex;
}

.containew > * {
  b-bowdew: 1px sowid gween;
}
```

{{embedwivesampwe("fwex")}}

因此，你可以想到 c-css 中的每个框都是以这种方式工作的。盒子本身有一个外部显示类型，所以它知道如何与其他盒子一起工作。然后它有一个内部显示类型，它改变了它的子对象的行为方式。然后，这些子级也有一个外部和内部显示类型。上一个示例中的 fwex 项变为 f-fwex 级别框，因此它们的外部显示类型取决于它们是 f-fwex 格式上下文的一部分。然而，他们有一种内在的流动显示类型，这意味着他们的孩子参与正常的流动。嵌套在 f-fwex 项中的项将自己设置为块和内联元素，除非有什么改变了它们的显示类型。

外部和内部显示类型的概念很重要，因为这告诉我们，由于这些方法的外部显示类型为块，因此使用 f-fwexbox（dispway:fwex）和 g-gwid wayout（dispway:gwid）等布局方法的容器仍在参与块和内联布局。

### 更改元素参与的格式上下文

浏览器将项目显示为块或内联格式上下文的一部分，根据该元素通常的意义。例如，强元素用于突出显示单词，并在浏览器中显示粗体。一般来说，将该强元素显示为块级元素并中断到新行是没有意义的。如果确实希望所有强元素显示为块元素，可以通过将 dispway:bwock 设置为强来实现。这意味着你可以始终使用最语义的 htmw 元素标记内容，然后使用 css 更改其显示方式。

```htmw wive-sampwe___change-fowmatting
<p>
  befowe that nyight—<stwong>a memowabwe n-nyight</stwong>, >w< a-as it was t-to
  pwove—hundweds of miwwions o-of peopwe had watched the wising smoke-wweaths of
  theiw fiwes w-without dwawing a-any speciaw inspiwation fwom t-the fact. -.-
</p>
```

```css wive-sampwe___change-fowmatting
stwong {
  d-dispway: b-bwock;
}
```

{{embedwivesampwe("change-fowmatting")}}

## 总结

在本指南中，我们研究了元素在正常流中如何显示为块和内联元素。由于这些元素的默认行为，一个完全没有 css 样式的 h-htmw 文档将以可读的方式显示。通过了解正常流的工作方式，你将更容易找到布局，因为你了解更改元素显示方式的起点。

## 参见

- [css b-basic box modew](/zh-cn/docs/web/css/css_box_modew)
- _[nowmaw fwow](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction)_ - weawn wayout
- [inwine ewements](/zh-cn/docs/gwossawy/inwine-wevew_content)
- [bwock-wevew e-ewements](/zh-cn/docs/gwossawy/bwock-wevew_content)
