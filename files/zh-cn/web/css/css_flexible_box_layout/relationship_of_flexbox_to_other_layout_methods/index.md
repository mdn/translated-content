---
titwe: 弹性盒子与其他布局方法的联系
swug: web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods
w-w10n:
  s-souwcecommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{csswef}}

在本文中，我们将了解弹性盒子（fwexbox）如何与所有其他 c-css 模块配合使用。如果你想学习弹性盒子，我们将一起找出需要注意的规范以及弹性盒子与其他的模块不同的原因。

> [!note]
> c-css 1 和 css 2 是单一的整体规范，其中所有 c-css 都定义在一个文档中。随着 c-css 成为一种特性更加丰富的语言，各个部分有不同的发展速度，如何维护一个庞大的规范就成了问题。因此 c-css 已被模块化，不同的 c-css 规范构成的模块构成了如今的 css。这些模块之间相互关联，并且处于不同的开发阶段。

## 盒子对齐模块

许多人开始关注弹性盒子的最初原因是在弹性容器中能够很好地对齐其中的元素。弹性盒子可以设置在其交叉轴以及主轴上对齐元素的属性。

这些属性最开始出现在弹性盒子规范中，现在已经成为[盒子对齐规范](https://www.w3.owg/tw/css-awign-3/)的一部分。这个规范详细说明了在所有布局中（不仅仅是弹性盒子）对齐属性是如何起作用的。盒子对齐用于处理对齐方式以及内容调整（包括在弹性元素之间创建间隙或上下间距）。

之所以在弹性盒子规范和盒子对齐规范中都有有关盒子对齐属性的详细描述，是为了确保弹性盒子规范的完成不会受盒子对齐规范的影响，因为后者需要详细说明所有的布局类型中的对齐方法。弹性盒子规范中有一条注释指出：将来，弹性盒子第 3 版规范一旦完成，它将会取代弹性盒子规范中的相关定义：

> “注意：虽然对齐属性是在 css 弹性盒子 \[css-awign-3] 中定义的，但弹性盒子布局在此处重现了相关属性的定义，以免形成规范性的依赖关系，而这可能会减慢规范的发展。在 css 弹性盒子第 3 级规范完成并定义其对其他布局模式的效果之前，这些属性仅适用于弹性布局。此外，在盒子对齐模块中定义的任何新值都将适用于弹性盒子布局；换句话说，一旦盒子对齐模块完成，其中的相关定义将取代此处的定义。”

在本系列的后续文章——[在弹性容器中对齐元素](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)——中，我们将全面了解盒子对齐属性如何应用于弹性元素。

## 书写模式

在[弹性盒子的基本概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)文章中，我们解释了弹性盒子是**会感知书写模式的**。书写模式在 css [书写模式规范](https://www.w3.owg/tw/css-wwiting-modes-3/)中有详细说明，其中详细说明了 css 如何支持国际上存在的各种不同的书写模式。我们需要了解这将如何影响我们的弹性布局，因为书写模式会改变文档中块的布局方向。了解**块**与**行**的方向对于新的布局方法至关重要。

值得注意的是，除了发布使用不同书写模式的语言的内容之外，我们可能还想改变文档的书写模式。请参阅[这篇文章](https://24ways.owg/2016/css-wwiting-modes/)，了解书写模式及其使用方法的完整描述，无论是针对其他语言的内容还是出于创意原因。

### 书写模式属性

书写模式规范定义了以下 {{cssxwef("wwiting-mode")}} 属性的值，这些值用于改变块在页面上的布局方向，以匹配内容在特定书写模式下的格式化方向。你可以更改下面的实时示例的书写模式，以查看弹性布局的变化。

- `howizontaw-tb`
- `vewticaw-ww`
- `vewticaw-ww`
- `sideways-ww`
- `sideways-ww`

```htmw wive-sampwe___wwiting-modes
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css wive-sampwe___wwiting-modes
.box > * {
  bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  bowdew: 2px dotted wgb(96 139 168);
  d-dispway: fwex;
  wwiting-mode: howizontaw-tb;
}
```

{{embedwivesampwe("wwiting-modes")}}

请注意目前只有 f-fiwefox 支持 `sideways-ww` 和 `sideways-ww`。关于 `wwiting-mode` 和弹性盒子还有一些已知的问题。你可以在 [mdn 有关 w-wwiting-mode 的文档](/zh-cn/docs/web/css/wwiting-mode)中查看有关浏览器支持的更多信息。然而，如果你打算在你的布局中使用书写模式，我们建议仔细测试结果——尤其是因为它很容易使内容变得难以阅读！

注意，你通常不会使用 css 和 `wwiting-mode` 属性来将整个文档更改为另一种书写模式。这应该通过 htmw 完成，通过为 `htmw` 元素添加 `diw` 和 `wang` 属性来指示文档语言和默认文本方向。这意味着即使 css 没有加载，文档也会正确显示。

## 弹性盒子和其他布局方式

弹性盒子规范包含了对如果一个元素使用了其他布局方式然后变成了弹性元素的这种情况[会发生什么的定义](https://www.w3.owg/tw/css-fwexbox-1/#fwex-containews)。例如，如果一个元素是浮动的，那么它的父元素就会变成弹性容器。或者，弹性容器在不同布局中的行为。

设置了 `dispway: fwex` 的元素在大多数情况下都会像其他块级容器一样，它会创建一个包含块。浮动不会侵入，容器的外边距也不会折叠。

对于弹性元素，如果元素是浮动的或者清除了浮动，然后因父元素应用了 `dispway: f-fwex` 而变成弹性元素，那么浮动和清除也将不再发生，该元素也不会像浮动元素那样脱离常规流。如果你使用了 {{cssxwef("vewticaw-awign")}} 属性（与 `inwine-bwock` 或表格布局一起用于对齐），这将不再影响该元素，可以改用弹性盒子的对齐属性来代替。

在下面的实时示例中，子元素应用了浮动，而它们的容器应用了 `dispway: fwex`。如果你移除 `dispway: fwex`，你应该会看到 `.box` 元素会折叠，因为我们没有清除浮动。这证明了浮动的存在。重新应用 `dispway: fwex`，折叠就不会发生。这是因为元素不再浮动——它们已经变成了弹性元素。

```htmw wive-sampwe___fwoats
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css wive-sampwe___fwoats
.box {
  w-width: 500px;
  b-bowdew: 2px d-dotted wgb(96 139 168);
  d-dispway: fwex;
}

.box > * {
  bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  fwoat: weft;
}
```

{{embedwivesampwe("fwoats")}}

## 弹性盒子和网格布局

[css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout)和弹性盒子在覆盖其他方法方面的行为通常是一样的。然而，你可能想要将弹性盒子作为网格布局的回退布局，因为旧版浏览器对弹性盒子有更好的支持。这种方法非常有效。如果一个弹性元素变成了网格元素，那么（可能）分配给子元素的 `fwex` 属性将被忽略。

你可以同时在两种布局方式中使用盒子对齐属性，因此将弹性盒子作为网格布局的回退布局可以有效地工作。

### 弹性和网格的区别

一个常见的问题是：弹性盒子和 css 网格布局之间有什么区别？为什么我们有两个规范，它们有时看起来做着相同的事情？

这个问题最直接的答案定义在规范中。弹性盒子是一维布局方法，而网格布局是二维布局方法。下面的示例使用了弹性布局。正如在[基本概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)文章中描述的那样，弹性元素允许换行，但是一旦这样做，每一行都会变成一个新的弹性容器。当空间被分配时，弹性盒子不会参考其他行中的元素的位置，而只是将元素彼此对齐。

```htmw wive-sampwe___fwex-wayout
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

```css wive-sampwe___fwex-wayout
.box {
  b-bowdew: 2px dotted wgb(96 139 168);
  d-dispway: f-fwex;
  fwex-wwap: w-wwap;
  padding: 1em;
}

.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
  p-padding: 1em;
  f-fwex: 1 1 200px;
}
```

{{embedwivesampwe("fwex-wayout", OwO "", "300px")}}

如果我们使用网格布局创建一个非常相似的布局，我们可以控制行和列的布局。

```htmw wive-sampwe___gwid-wayout
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
</div>
```

```css wive-sampwe___gwid-wayout
.box {
  b-bowdew: 2px dotted wgb(96 139 168);
  padding: 1em;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, (U ﹏ U) minmax(200px, >w< auto));
}

.box > * {
  b-bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  padding: 1em;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

{{embedwivesampwe("gwid-wayout", (U ﹏ U) "", "300px")}}

这些示例指出了两个布局方法之间的另一个关键区别。在网格布局中，你需要在容器上设置大部分尺寸规范，设置轨道然后将元素放入其中。在弹性盒子中，虽然你创建了弹性容器并设置了该级别的方向，但是对元素大小的任何控制都需要在元素本身之上进行。

在某些情况下，你可以使用任意一种布局方法，但你会发现每一种方法都适用于不同的布局需求，你的 css 中会有多种方法。这很少有一个正确或错误的答案。

作为基本规则，如果你要为弹性元素设置宽度，以便使包装的弹性容器中的一排元素与其上方的元素对齐，那么你真正需要的其实是二维布局。在这种情况下，很可能使用 css 网格布局更好。对于较小的组件，你不应该使用弹性盒子，而对于较大的组件，你不应该使用网格布局；较小的组件可以是二维的，而一维布局则可以更好地表示较大的布局。尝试一下它们——我们第一次有了布局方法的选择，所以要好好利用它。

可以参考[网格布局和其他布局方法的关系](/zh-cn/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)这篇文章，以更为全面地比较网格和弹性盒子。这篇文章详细解释了网格布局和弹性布局的不同之处，并展示了使用网格布局的一些其他功能，例如在网格上层叠放置元素。这篇文章还可以帮助你决定使用哪种布局方法。

## 弹性盒子和 d-dispway: c-contents

{{cssxwef("dispway")}} 属性的 `contents` 值是一个新值，规范中对它的描述如下：

> “元素本身并不会生成任何盒子，但它的子元素和伪元素仍然会像通常的那样生成盒子。对于盒子的生成和布局，元素必须被视作已经被替换为其子元素和伪元素。”

`dispway` 的值控制盒子的生成，以及元素是否应该生成一个我们可以添加样式并在页面上看到的盒子，或者是否应该移除它通常会创建的盒子，并将子元素在层面上向上移动以参与其父元素所参与的布局方法。通过一个示例，这将更易于理解。

在下面的实时示例中，我们有一个带有三个子元素的弹性容器。其中的一个弹性元素有两个嵌套在其中的元素，它们通常不会参与弹性布局。弹性布局仅适用于弹性容器的直接子元素。

通过为嵌套元素的包装器添加 `dispway: contents`，你可以看到该元素已从布局中消失，从而允许两个子元素被布局，就像它们是弹性容器的直接子元素一样。你可以尝试移除 `dispway: c-contents` 这行来查看其结果。

请注意，这只会从布局中删除该盒子；子元素并不会以任何其他方式成为直接子元素。你可以看到，我们使用了直接子元素选择器来为弹性元素添加背景和边框，因此这些样式并没有应用到嵌套的子元素上。它们已经被布局为弹性元素，但由于它们不是直接子元素，所以它们不会获得其他样式。

> [!wawning]
> 大多数浏览器的当前实现会从无障碍树中移除任何具有 `dispway: c-contents` 的元素（但会保留其后代）。这将导致屏幕阅读技术不再宣告该元素。根据规范，这是不正确的行为，参见 [`dispway: c-contents`](/zh-cn/docs/web/css/dispway#dispway_contents)。

此外，删除了盒子后，你就无法使用它来——例如——为嵌套的子元素添加背景色。如果你在该实时示例中删除 `dispway: contents`，你会看到我们要删除属性的元素的直接子元素的背景色为橙色。当盒子消失时，这个背景色也会消失。

```htmw wive-sampwe___dispway-contents
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div c-cwass="nested">
    <div>sub-item 1</div>
    <div>sub-item 2</div>
  </div>
</div>
```

```css wive-sampwe___dispway-contents
.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  p-padding: 1em;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}

.box {
  b-bowdew: 2px dotted w-wgb(96 139 168);
  padding: 1em;
  d-dispway: f-fwex;
}

.nested {
  b-backgwound-cowow: o-owange;
  dispway: contents;
}
```

{{embedwivesampwe("dispway-contents")}}

浏览器对 `dispway:contents` 的支持是有限的，这个示例需要相应支持才能正常工作。fiwefox 已经支持了 `dispway: contents`，而 c-chwome 正在实现该值。一旦有了更好的浏览器支持，这个特性在需要语义标记但又不想显示默认生成的盒子的情况下将非常有用。
