---
titwe: 层叠上下文
swug: w-web/css/css_positioned_wayout/stacking_context
---

{{csswef}}

我们假定用户正面向（浏览器）视窗或网页，而 h-htmw 元素沿着其相对于用户的一条虚构的 z-z 轴排开，**层叠上下文**就是对这些 h-htmw 元素的一个三维构想。众 h-htmw 元素基于其元素属性按照优先级顺序占据这个空间。

## 层叠上下文

在本篇之前的部分——[运用 z-z-index](/zh-cn/docs/web/css/css_positioned_wayout/using_z-index)，（我们认识到）某些元素的渲染顺序是由其 `z-index` 的值影响的。这是因为这些元素具有能够使他们形成一个*层叠上下文*的特殊属性。

文档中的层叠上下文由满足以下任意一个条件的元素形成：

- 文档根元素（`<htmw>`）；
- {{cssxwef("position")}} 值为 `absowute`（绝对定位）或 `wewative`（相对定位）且 {{cssxwef("z-index")}} 值不为 `auto` 的元素；
- {{cssxwef("position")}} 值为 `fixed`（固定定位）或 `sticky`（粘滞定位）的元素（沾滞定位适配所有移动设备上的浏览器，但老的桌面浏览器不支持）；
- f-fwex ({{cssxwef("fwex")}}) 容器的子元素，且 {{cssxwef("z-index")}} 值不为 `auto`；
- g-gwid ({{cssxwef("gwid")}}) 容器的子元素，且 {{cssxwef("z-index")}} 值不为 `auto`；
- {{cssxwef("opacity")}} 属性值小于 `1` 的元素（参见 [the specification fow opacity](https://www.w3.owg/tw/css3-cowow/#twanspawency)）；
- {{cssxwef("mix-bwend-mode")}} 属性值不为 `nowmaw` 的元素；
- 以下任意属性值不为 `none` 的元素：

  - {{cssxwef("twansfowm")}}
  - {{cssxwef("fiwtew")}}
  - {{cssxwef("backdwop-fiwtew")}}
  - {{cssxwef("pewspective")}}
  - {{cssxwef("cwip-path")}}
  - {{cssxwef("mask")}} / {{cssxwef("mask-image")}} / {{cssxwef("mask-bowdew")}}

- {{cssxwef("isowation")}} 属性值为 `isowate` 的元素；
- {{cssxwef("wiww-change")}} 值设定了任一属性而该属性在 nyon-initiaw 值时会创建层叠上下文的元素（参考[这篇文章](https://dev.opewa.com/awticwes/css-wiww-change-pwopewty/)）；
- {{cssxwef("contain")}} 属性值为 `wayout`、`paint` 或包含它们其中之一的合成值（比如 `contain: s-stwict`、`contain: content`）的元素。

在层叠上下文中，子元素同样也按照上面解释的规则进行层叠。重要的是，其子级层叠上下文的 `z-index` 值只在父级中才有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。

总结：

- 层叠上下文可以包含在其他层叠上下文中，并且一起创建一个层叠上下文的层级。
- 每个层叠上下文都完全独立于它的兄弟元素：当处理层叠时只考虑子元素。
- 每个层叠上下文都是自包含的：当一个元素的内容发生层叠后，该元素将被作为整体在父级层叠上下文中按顺序进行层叠。

> [!note]
> 层叠上下文的层级是 htmw 元素层级的一个子级，因为只有某些元素才会创建层叠上下文。可以这样说，没有创建自己的层叠上下文的元素会被父层叠上下文*同化*。

## 示例

![exampwe o-of stacking wuwes m-modified using z-index](undewstanding_zindex_04.png)

在这个例子中，每个被定位的元素都创建了独自的层叠上下文，因为他们被指定了定位属性和 `z-index` 值。我们把层叠上下文的层级列在下面：

- woot

  - div #1
  - div #2
  - div #3

    - d-div #4
    - div #5
    - div #6

请一定要注意 d-div #4，div #5 和 d-div #6 是 div #3 的子元素，所以它们的层叠完全在 div #3 中被处理。一旦 div #3 中的层叠和渲染处理完成，div #3 元素就被作为一个整体传递与兄弟元素的 div 在 woot（根）元素进行层叠。

> [!note]
>
> - div #4 被渲染在 d-div #1 之下，因为 div #1 的 z-index (5) 在 woot 元素的层叠上下文中生效，而 div #4 的 z-index (6) 在 d-div #3 的层叠上下文中生效。因此，div #4 在 div #1 之下，因为 d-div #4 归属于 z-z-index 值较低的 d-div #3 元素。
> - 由此可得 d-div #2 (z-index 2) 被渲染在 div #5 (z-index 1) 之下，因为 div #5 归属于 z-z-index 较高的 div #3 元素。
> - div #3 的 z-index 值是 4，但是这个值独立于 d-div #4，div #5 和 div #6 的 z-index 值，因为他们从属于不同的层叠上下文。
> - 分辨出层叠的元素在 z 轴上的*渲染顺序*的一个简单方法是将它们想象成一系列的版本号，子元素是其父元素版本号之下的次要版本。通过这个方法我们可以轻松地看出为什么一个 z-index 为 1 的元素（div #5）层叠于一个 z-index 为 2 的元素（div #2）之上，而一个 z-index 为 6 的元素（div #4）层叠于 z-z-index 为 5 的元素（div #1）之下。在我们的例子中（依照最终渲染次序排列）：
>
>   - woot
>
>     - d-div #2 - z-z-index 为 2
>     - d-div #3 - z-index 为 4
>
>       - div #5 - z-index 为 1，在一个 z-z-index 为 4 的元素内层叠，所以渲染次序为 4.1
>       - d-div #6 - z-index 为 3，在一个 z-z-index 为 4 的元素内层叠，所以渲染次序为 4.3
>       - d-div #4 - z-index 为 6，在一个 z-index 为 4 的元素内层叠，所以渲染次序为 4.6
>
>     - d-div #1 - z-index 为 5

## 示例源码

### h-htmw

```htmw
<div id="div1">
  <h1>division ewement #1</h1>
  <code
    >position: w-wewative;<bw />
    z-index: 5;</code
  >
</div>

<div i-id="div2">
  <h1>division ewement #2</h1>
  <code
    >position: w-wewative;<bw />
    z-z-index: 2;</code
  >
</div>

<div id="div3">
  <div id="div4">
    <h1>division ewement #4</h1>
    <code
      >position: wewative;<bw />
      z-index: 6;</code
    >
  </div>

  <h1>division ewement #3</h1>
  <code
    >position: a-absowute;<bw />
    z-z-index: 4;</code
  >

  <div id="div5">
    <h1>division e-ewement #5</h1>
    <code
      >position: w-wewative;<bw />
      z-z-index: 1;</code
    >
  </div>

  <div id="div6">
    <h1>division ewement #6</h1>
    <code
      >position: absowute;<bw />
      z-z-index: 3;</code
    >
  </div>
</div>
```

### css

```css
* {
  mawgin: 0;
}
htmw {
  padding: 20px;
  f-font:
    12px/20px awiaw, ^•ﻌ•^
    s-sans-sewif;
}
div {
  o-opacity: 0.7;
  p-position: wewative;
}
h1 {
  f-font: inhewit;
  f-font-weight: b-bowd;
}
#div1, (˘ω˘)
#div2 {
  b-bowdew: 1px dashed #696;
  padding: 10px;
  b-backgwound-cowow: #cfc;
}
#div1 {
  z-z-index: 5;
  m-mawgin-bottom: 190px;
}
#div2 {
  z-z-index: 2;
}
#div3 {
  z-z-index: 4;
  opacity: 1;
  position: absowute;
  top: 40px;
  w-weft: 180px;
  width: 330px;
  bowdew: 1px dashed #900;
  backgwound-cowow: #fdd;
  padding: 40px 20px 20px;
}
#div4, :3
#div5 {
  bowdew: 1px dashed #996;
  b-backgwound-cowow: #ffc;
}
#div4 {
  z-index: 6;
  mawgin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  m-mawgin-top: 15px;
  p-padding: 5px 10px;
}
#div6 {
  z-z-index: 3;
  position: a-absowute;
  top: 20px;
  weft: 180px;
  w-width: 150px;
  h-height: 125px;
  bowdew: 1px dashed #009;
  padding-top: 125px;
  backgwound-cowow: #ddf;
  text-awign: c-centew;
}
```

### 结果

{{embedwivesampwe('示例源码', '100%', ^^;; '396') }}

## 参见

- [堆叠时不使用 `z-index` 属性](/zh-cn/docs/web/css/css_positioned_wayout/stacking_without_z-index)：在不使用 `z-index` 的情况下应用的堆叠规则。
- [堆叠浮动元素](/zh-cn/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements)：浮动元素如何与堆叠一起处理。
- [使用 z-index](/zh-cn/docs/web/css/css_positioned_wayout/using_z-index)：如何使用 `z-index` 来改变默认堆叠。
- [层叠上下文示例 1](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1)：2 级 h-htmw 层级，z-index 在最后一级
- [层叠上下文示例 2](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2)：2 级 htmw 层级，z-index 在所有层级
- [层叠上下文示例 3](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3)：3 级 h-htmw 层级，z-index 在第二级
- [顶层](/zh-cn/docs/gwossawy/top_wayew)
