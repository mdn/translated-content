---
title: 层叠上下文
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
---

{{CSSRef}}

我们假定用户正面向（浏览器）视窗或网页，而 HTML 元素沿着其相对于用户的一条虚构的 z 轴排开，**层叠上下文**就是对这些 HTML 元素的一个三维构想。众 HTML 元素基于其元素属性按照优先级顺序占据这个空间。

## 层叠上下文

在本篇之前的部分——[运用 z-index](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index)，（我们认识到）某些元素的渲染顺序是由其 `z-index` 的值影响的。这是因为这些元素具有能够使他们形成一个*层叠上下文*的特殊属性。

文档中的层叠上下文由满足以下任意一个条件的元素形成：

- 文档根元素（`<html>`）；
- {{cssxref("position")}} 值为 `absolute`（绝对定位）或 `relative`（相对定位）且 {{cssxref("z-index")}} 值不为 `auto` 的元素；
- {{cssxref("position")}} 值为 `fixed`（固定定位）或 `sticky`（粘滞定位）的元素（沾滞定位适配所有移动设备上的浏览器，但老的桌面浏览器不支持）；
- flex ({{cssxref("flex")}}) 容器的子元素，且 {{cssxref("z-index")}} 值不为 `auto`；
- grid ({{cssxref("grid")}}) 容器的子元素，且 {{cssxref("z-index")}} 值不为 `auto`；
- {{cssxref("opacity")}} 属性值小于 `1` 的元素（参见 [the specification for opacity](https://www.w3.org/TR/css3-color/#transparency)）；
- {{cssxref("mix-blend-mode")}} 属性值不为 `normal` 的元素；
- 以下任意属性值不为 `none` 的元素：

  - {{cssxref("transform")}}
  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- {{cssxref("isolation")}} 属性值为 `isolate` 的元素；
- {{cssxref("will-change")}} 值设定了任一属性而该属性在 non-initial 值时会创建层叠上下文的元素（参考[这篇文章](https://dev.opera.com/articles/css-will-change-property/)）；
- {{cssxref("contain")}} 属性值为 `layout`、`paint` 或包含它们其中之一的合成值（比如 `contain: strict`、`contain: content`）的元素。

在层叠上下文中，子元素同样也按照上面解释的规则进行层叠。重要的是，其子级层叠上下文的 `z-index` 值只在父级中才有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。

总结：

- 层叠上下文可以包含在其他层叠上下文中，并且一起创建一个层叠上下文的层级。
- 每个层叠上下文都完全独立于它的兄弟元素：当处理层叠时只考虑子元素。
- 每个层叠上下文都是自包含的：当一个元素的内容发生层叠后，该元素将被作为整体在父级层叠上下文中按顺序进行层叠。

> **备注：** 层叠上下文的层级是 HTML 元素层级的一个子级，因为只有某些元素才会创建层叠上下文。可以这样说，没有创建自己的层叠上下文的元素会被父层叠上下文*同化*。

## 示例

![Example of stacking rules modified using z-index](understanding_zindex_04.png)

在这个例子中，每个被定位的元素都创建了独自的层叠上下文，因为他们被指定了定位属性和 `z-index` 值。我们把层叠上下文的层级列在下面：

- Root

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

请一定要注意 DIV #4，DIV #5 和 DIV #6 是 DIV #3 的子元素，所以它们的层叠完全在 DIV #3 中被处理。一旦 DIV #3 中的层叠和渲染处理完成，DIV #3 元素就被作为一个整体传递与兄弟元素的 DIV 在 root（根）元素进行层叠。

> **备注：**
>
> - DIV #4 被渲染在 DIV #1 之下，因为 DIV #1 的 z-index (5) 在 root 元素的层叠上下文中生效，而 DIV #4 的 z-index (6) 在 DIV #3 的层叠上下文中生效。因此，DIV #4 在 DIV #1 之下，因为 DIV #4 归属于 z-index 值较低的 DIV #3 元素。
> - 由此可得 DIV #2 (z-index 2) 被渲染在 DIV #5 (z-index 1) 之下，因为 DIV #5 归属于 z-index 较高的 DIV #3 元素。
> - DIV #3 的 z-index 值是 4，但是这个值独立于 DIV #4，DIV #5 和 DIV #6 的 z-index 值，因为他们从属于不同的层叠上下文。
> - 分辨出层叠的元素在 Z 轴上的*渲染顺序*的一个简单方法是将它们想象成一系列的版本号，子元素是其父元素版本号之下的次要版本。通过这个方法我们可以轻松地看出为什么一个 z-index 为 1 的元素（DIV #5）层叠于一个 z-index 为 2 的元素（DIV #2）之上，而一个 z-index 为 6 的元素（DIV #4）层叠于 z-index 为 5 的元素（DIV #1）之下。在我们的例子中（依照最终渲染次序排列）：
>
>   - Root
>
>     - DIV #2 - z-index 为 2
>     - DIV #3 - z-index 为 4
>
>       - DIV #5 - z-index 为 1，在一个 z-index 为 4 的元素内层叠，所以渲染次序为 4.1
>       - DIV #6 - z-index 为 3，在一个 z-index 为 4 的元素内层叠，所以渲染次序为 4.3
>       - DIV #4 - z-index 为 6，在一个 z-index 为 4 的元素内层叠，所以渲染次序为 4.6
>
>     - DIV #1 - z-index 为 5

## 示例源码

### HTML

```
<div id="div1">
  <h1>Division Element #1</h1>
  <code>position: relative;<br/>
  z-index: 5;</code>
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code>position: relative;<br/>
  z-index: 2;</code>
</div>

<div id="div3">
  <div id="div4">
    <h1>Division Element #4</h1>
    <code>position: relative;<br/>
    z-index: 6;</code>
  </div>

  <h1>Division Element #3</h1>
  <code>position: absolute;<br/>
  z-index: 4;</code>

  <div id="div5">
    <h1>Division Element #5</h1>
    <code>position: relative;<br/>
    z-index: 1;</code>
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code>position: absolute;<br/>
    z-index: 3;</code>
  </div>
</div>
```

### CSS

```css
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px Arial,
    sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}
```

### Result

{{EmbedLiveSample('示例源码', '100%', '396') }}

## 参考

- [Stacking without the z-index property](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
- [Stacking with floated blocks](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): How floating elements are handled with stacking.
- [Using z-index](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): How to use `z-index` to change default stacking.
- [Stacking context example 1](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

## 原始文档信息

- 作者：Paolo Lombardi
- 此文是我用意大利语写给 [YappY](http://www.yappy.it) 的英文版本。我授权以 [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) 将所有内容分享。
- 上次更新时间：July 9th, 2005
