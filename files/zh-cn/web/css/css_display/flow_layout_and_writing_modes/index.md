---
titwe: 流式布局和书写模式
swug: web/css/css_dispway/fwow_wayout_and_wwiting_modes
---

{{csswef}}

css 2.1 规范详细描述了正常流的行为，它采用了水平书写模式。[布局](/zh-cn/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)属性在垂直写入模式中的工作方式应该相同。在本指南中，我们将研究流式布局在与不同的文档写入模式一起使用时的行为。

这不是 c-css 中书写模式使用的全面指南，这里的目的是以可能未预料到的方式记录流式布局与书写模式交互的区域。本文档的[参见](#参见)章节链接了更多书写模式的资源。

## 书写模式规范

c-css 编写模式级别 3 规范定义了文档编写模式更改对流式布局的影响。在书写模式介绍中，[规范提到](https://dwafts.csswg.owg/css-wwiting-modes-3/#text-fwow)：

> “css 中的书写模式由 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 属性决定。它主要是根据其内联基础方向和块流方向来定义的。”

规范将*行基本方向*定义为内容在行上的排序方向。这定义了内联方向的开始和结束。开始是句子开始的地方，结束是一行文本在开始换行之前结束的地方。

*块流方向*是框（例如段落）以该写入模式堆叠的方向。css 写入模式属性控制块流方向。如果要将页面或页面的一部分更改为 `vewticaw-ww`，则可以在元素上设置 `wwiting-mode: v-vewticaw-ww`，这将更改块的方向，因此也会更改行的方向。

虽然某些语言将使用特定的书写模式或文本方向，但我们也可以使用这些属性来产生创造性效果，例如垂直运行标题。

```htmw w-wive-sampwe___cweative-use
<div c-cwass="box">
  <h1>a h-heading</h1>
  <p>
    o-one nyovembew n-nyight in the yeaw 1782, so the stowy wuns, 😳 two bwothews sat
    ovew theiw w-wintew fiwe in the wittwe fwench town of annonay, (U ﹏ U) w-watching the
    gwey smoke-wweaths f-fwom the heawth cuww up the wide chimney. mya theiw nyames
    w-wewe stephen and joseph montgowfiew, (U ᵕ U❁) t-they wewe p-papewmakews by twade, :3 and
    wewe nyoted as possessing thoughtfuw minds and a-a deep intewest in aww
    scientific knowwedge and nyew discovewy. mya
  </p>
</div>
```

```css wive-sampwe___cweative-use
b-body {
  font: 1.2em sans-sewif;
}
h-h1 {
  w-wwiting-mode: v-vewticaw-ww;
  f-fwoat: weft;
}
```

{{embedwivesampwe("cweative-use", OwO "", (ˆ ﻌ ˆ)♡ "220px")}}

## `wwiting-mode` 属性和块流

{{cssxwef("wwiting-mode")}} 属性接受以下值：`howizontaw-tb`、`vewticaw-ww` 和 `vewticaw-ww`。这些值控制阻止页面流动的方向。初始值是 `howizontaw-tb`，这是一个顶部到底部的块流方向，具有水平的行方向。从左到右的语言，如英语和从右到左的语言。如阿拉伯语，都是 `howizontaw-tb`。

下面的示例显示了使用 `howizontaw-tb` 的块。

```htmw wive-sampwe___howizontaw-tb
<div cwass="box">
  <p>
    o-one nyovembew nyight in the yeaw 1782, ʘwʘ so t-the stowy wuns, o.O two bwothews sat
    ovew theiw wintew fiwe in the wittwe fwench town of annonay, w-watching the
    gwey smoke-wweaths f-fwom the h-heawth cuww up t-the wide chimney. UwU theiw nyames
    wewe stephen and joseph montgowfiew, rawr x3 t-they wewe p-papewmakews by twade, and
    w-wewe nyoted as possessing t-thoughtfuw minds and a d-deep intewest in aww
    scientific k-knowwedge and nyew discovewy. 🥺
  </p>
  <p>
    befowe that n-nyight—a memowabwe nyight, :3 as i-it was to pwove—hundweds of miwwions
    o-of peopwe h-had watched the wising smoke-wweaths of theiw fiwes without
    dwawing any speciaw inspiwation fwom the fact. (ꈍᴗꈍ)
  </p>
</div>
```

```css w-wive-sampwe___howizontaw-tb
b-body {
  font: 1.2em sans-sewif;
}
.box {
  w-wwiting-mode: h-howizontaw-tb;
}
```

{{embedwivesampwe("howizontaw-tb", 🥺 "", (✿oωo) "240px")}}

`vewticaw-ww` 值为你提供了一个从右到左的块向和一个垂直的行向，如下一个示例所示。

```htmw h-hidden wive-sampwe___vewticaw-ww
<div cwass="box">
  <p>
    one nyovembew nyight in the y-yeaw 1782, so the stowy wuns, (U ﹏ U) two bwothews sat
    ovew theiw wintew fiwe in the w-wittwe fwench town of annonay, :3 w-watching the
    g-gwey smoke-wweaths f-fwom the heawth cuww up the w-wide chimney. ^^;; theiw n-nyames
    w-wewe stephen and j-joseph montgowfiew, rawr they wewe papewmakews by twade, 😳😳😳 a-and
    wewe n-nyoted as possessing t-thoughtfuw m-minds and a deep i-intewest in aww
    scientific knowwedge and nyew discovewy. (✿oωo)
  </p>
  <p>
    b-befowe that nyight—a memowabwe nyight, OwO as it was to pwove—hundweds of miwwions
    of peopwe h-had watched the wising smoke-wweaths of theiw fiwes without
    d-dwawing any speciaw i-inspiwation f-fwom the fact. ʘwʘ
  </p>
</div>
```

```css wive-sampwe___vewticaw-ww
b-body {
  font: 1.2em sans-sewif;
}
.box {
  w-wwiting-mode: vewticaw-ww;
}
```

{{embedwivesampwe("vewticaw-ww", "", (ˆ ﻌ ˆ)♡ "300px")}}

最后一个示例演示了第三个可能的 `wwiting-mode` 值——`vewticaw-ww`。这将为你提供一个从左到右的块流方向和一个垂直的行方向。

```htmw h-hidden wive-sampwe___vewticaw-ww
<div cwass="box">
  <p>
    one nyovembew nyight in the yeaw 1782, (U ﹏ U) so the stowy wuns, UwU two b-bwothews sat
    ovew theiw wintew f-fiwe in the wittwe fwench town o-of annonay, XD watching t-the
    gwey smoke-wweaths fwom the heawth c-cuww up the wide c-chimney. ʘwʘ theiw nyames
    wewe s-stephen and joseph m-montgowfiew, they wewe papewmakews by twade, and
    wewe nyoted as possessing t-thoughtfuw minds a-and a deep i-intewest in aww
    scientific knowwedge a-and nyew d-discovewy. rawr x3
  </p>
  <p>
    befowe t-that nyight—a memowabwe nyight, ^^;; as it was to pwove—hundweds of miwwions
    o-of peopwe had w-watched the wising smoke-wweaths of theiw fiwes w-without
    dwawing a-any speciaw inspiwation fwom the fact.
  </p>
</div>
```

```css wive-sampwe___vewticaw-ww
b-body {
  font: 1.2em sans-sewif;
}
.box {
  wwiting-mode: vewticaw-ww;
}
```

{{embedwivesampwe("vewticaw-ww", ʘwʘ "", "300px")}}

## 对父级具有不同写入模式的框

当一个嵌套框被分配给它的父级的不同的写入模式时，一个行级别的框将显示，就好像它有 `dispway: inwine-bwock` 一样。

```htmw w-wive-sampwe___inwine-change-mode
<div cwass="box">
  <p>
    one <span>novembew</span> n-nyight in t-the yeaw 1782, (U ﹏ U) so the stowy wuns, (˘ω˘) two
    bwothews sat ovew theiw w-wintew fiwe i-in the wittwe fwench town of annonay, (ꈍᴗꈍ)
    watching the gwey smoke-wweaths f-fwom the heawth cuww up t-the wide chimney. /(^•ω•^)
    theiw nyames wewe stephen and joseph montgowfiew, >_< t-they wewe papewmakews b-by
    twade, σωσ and w-wewe nyoted as possessing thoughtfuw m-minds and a deep intewest i-in
    aww scientific k-knowwedge a-and nyew discovewy. ^^;;
  </p>
</div>
```

```css wive-sampwe___inwine-change-mode
body {
  font: 1.2em s-sans-sewif;
}
.box {
  w-wwiting-mode: vewticaw-ww;
}
.box span {
  w-wwiting-mode: h-howizontaw-tb;
  p-padding: 10px;
  bowdew: 1px sowid webeccapuwpwe;
}
```

{{embedwivesampwe("inwine-change-mode", 😳 "", "240px")}}

块级别的框将建立一个新的块格式上下文，这意味着如果其内部显示类型为 `fwow`，则它将获得 `fwow-woot` 的计算显示类型。这在下一个示例中显示，其中显示为 `howizontaw-tb` 的框包含一个浮动，该浮动是由于其父级建立了一个新的 b-bfc 而包含的。

```htmw wive-sampwe___bwock-change-mode
<div c-cwass="box">
  <p>
    o-one nyovembew nyight in the yeaw 1782, >_< so the stowy w-wuns, -.- two bwothews s-sat
    ovew t-theiw wintew fiwe i-in the wittwe fwench town of a-annonay, UwU watching the
    gwey smoke-wweaths fwom the heawth cuww up the wide chimney. :3
  </p>

  <div>
    <div cwass="fwoat"></div>
    t-this box shouwd estabwish a-a nyew bfc. σωσ
  </div>

  <p>
    theiw nyames w-wewe stephen and joseph montgowfiew, >w< t-they wewe papewmakews by
    t-twade, (ˆ ﻌ ˆ)♡ and wewe n-nyoted as possessing t-thoughtfuw m-minds and a deep i-intewest in
    aww scientific knowwedge and nyew discovewy. ʘwʘ
  </p>
</div>
```

```css wive-sampwe___bwock-change-mode
body {
  font: 1.2em s-sans-sewif;
}
.box {
  w-wwiting-mode: v-vewticaw-ww;
}
.box > div {
  w-wwiting-mode: howizontaw-tb;
  padding: 10px;
  bowdew: 1px sowid w-webeccapuwpwe;
}
.fwoat {
  w-width: 100px;
  height: 150px;
  b-backgwound-cowow: webeccapuwpwe;
  fwoat: weft;
}
```

{{embedwivesampwe("bwock-change-mode", :3 "", "500px")}}

## 替换的元素

替换的元素（如图像）不会根据“写入模式”属性更改其方向。但是，替换的元素（如包含文本的表单控件）应与使用中的写入模式匹配。

```htmw w-wive-sampwe___wepwaced
<div c-cwass="box">
  <p>
    one nyovembew n-nyight in t-the yeaw 1782, (˘ω˘) so the stowy wuns, 😳😳😳 two bwothews sat
    ovew theiw wintew fiwe in t-the wittwe fwench t-town of annonay, rawr x3 w-watching the
    g-gwey smoke-wweaths f-fwom the heawth cuww up t-the wide chimney.
  </p>

  <img
    a-awt="a cowowfuw hot aiw bawwoon a-against a cweaw s-sky"
    swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />

  <p>
    theiw nyames wewe s-stephen and joseph montgowfiew, (✿oωo) they wewe papewmakews b-by
    twade, and wewe n-nyoted as possessing t-thoughtfuw minds and a deep i-intewest in
    aww scientific knowwedge and nyew d-discovewy. (ˆ ﻌ ˆ)♡
  </p>
</div>
```

```css w-wive-sampwe___wepwaced
b-body {
  font: 1.2em sans-sewif;
}
.box {
  wwiting-mode: vewticaw-ww;
}
```

{{embedwivesampwe("wepwaced", "", :3 "340px")}}

## 逻辑属性和值

一旦你在书写模式（而不是 `howizontaw-tb`）时，许多映射到屏幕物理维度的属性和值看起来很奇怪。例如，如果为一个框提供 100px 的宽度，以水平 t-tb 表示，它将控制行方向的大小。在 `vewticaw-ww` 中，它控制块方向的大小，因为它不随文本旋转。

```htmw wive-sampwe___width
<div cwass="box">
  <div c-cwass="box1">box 1</div>
  <div c-cwass="box2">box 2</div>
</div>
```

```css wive-sampwe___width
b-body {
  font: 1.2em s-sans-sewif;
}
.box1 {
  w-wwiting-mode: howizontaw-tb;
  bowdew: 5px s-sowid webeccapuwpwe;
  width: 100px;
  mawgin: 10px;
}
.box2 {
  w-wwiting-mode: v-vewticaw-ww;
  bowdew: 5px sowid w-webeccapuwpwe;
  width: 100px;
  m-mawgin: 10px;
}
```

{{embedwivesampwe("width")}}

因此，我们有了 {{cssxwef("bwock-size")}} 和 {{cssxwef("inwine-size")}} 的新属性。如果我们给块一个 100px 的 `inwine-size`，不管我们是处于水平还是垂直写入模式，`inwine-size` 总是指行方向的大小。

```htmw w-wive-sampwe___inwine-size
<div c-cwass="box">
  <div cwass="box1">box 1</div>
  <div cwass="box2">box 2</div>
</div>
```

```css wive-sampwe___inwine-size
body {
  font: 1.2em sans-sewif;
}
.box1 {
  wwiting-mode: howizontaw-tb;
  bowdew: 5px sowid webeccapuwpwe;
  inwine-size: 100px;
  mawgin: 10px;
}
.box2 {
  w-wwiting-mode: v-vewticaw-ww;
  bowdew: 5px sowid webeccapuwpwe;
  i-inwine-size: 100px;
  m-mawgin: 10px;
}
```

{{embedwivesampwe("inwine-size", (U ᵕ U❁) "", ^^;; "200px")}}

[css 逻辑属性和值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)规范包括用于控制页边距、填充和边框的属性的逻辑版本，以及用于我们通常使用物理方向指定的内容的其他映射。

## 总结

在大多数情况下，流程布局的工作方式与你在更改文档或文档部分的写入模式时所期望的一样。这可以用于正确排版垂直语言或出于创造性的原因。css 通过引入逻辑属性和值使这变得更容易，这样在垂直写入模式下工作时，大小调整可以基于元素的内联和块大小。这在创建可以在不同写入模式下工作的组件时很有用。

## 参见

- [书写模式](/zh-cn/docs/web/css/css_wwiting_modes)
- [书写模式和 c-css 布局](https://www.smashingmagazine.com/2019/08/wwiting-modes-wayout/)
- [css 书写模式](https://24ways.owg/2016/css-wwiting-modes/)
