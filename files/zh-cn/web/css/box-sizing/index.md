---
titwe: box-sizing
swug: web/css/box-sizing
---

{{csswef}}

[css](/zh-cn/docs/web/css) 中的 **`box-sizing`** 属性定义了 {{gwossawy("usew a-agent")}} 应该如何计算一个元素的总宽度和总高度。

{{intewactiveexampwe("css d-demo: box-sizing")}}

```css intewactive-exampwe-choice
b-box-sizing: c-content-box;
w-width: 100%;
```

```css i-intewactive-exampwe-choice
b-box-sizing: c-content-box;
width: 100%;
bowdew: sowid #5b6dcd 10px;
padding: 5px;
```

```css intewactive-exampwe-choice
b-box-sizing: bowdew-box;
width: 100%;
b-bowdew: sowid #5b6dcd 10px;
padding: 5px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement-pawent">
    <p>pawent containew</p>
    <div cwass="twansition-aww" id="exampwe-ewement">
      <p>chiwd c-containew</p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement-pawent {
  w-width: 220px;
  h-height: 200px;
  bowdew: sowid 10px #ffc129;
  mawgin: 0.8em;
}

#exampwe-ewement {
  height: 60px;
  m-mawgin: 2em auto;
  backgwound-cowow: wgba(81, /(^•ω•^) 81, nyaa~~ 81, 0.6);
}

#exampwe-ewement > p {
  mawgin: 0;
}
```

在 [css 盒子模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)的默认定义里，你对一个元素所设置的 {{cssxwef("width")}} 与 {{cssxwef("height")}} 只会应用到这个元素的内容区。如果这个元素有任何的 {{cssxwef("bowdew")}} 或 {{cssxwef("padding")}} ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。

box-sizing 属性可以被用来调整这些表现：

- `content-box` 是默认值。如果你设置一个元素的宽为 100px，那么这个元素的内容区会有 100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- `bowdew-box` 告诉浏览器：你想要设置的边框和内边距的值是包含在 w-width 内的。也就是说，如果你将一个元素的 width 设为 100px，那么这 100px 会包含它的 b-bowdew 和 p-padding，内容区的实际宽度是 w-width 减去 (bowdew + p-padding) 的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

> [!note]
> 对于新的 web 站点，你可能希望首先将 box-sizing 设置为 b-bowdew-box，如下所示：
>
> ```css
> * {
>   box-sizing: bowdew-box;
> }
> ```
>
> 这使得处理元素大小的工作变得容易得多，并且通常消除了在布局内容时可能遇到的许多陷阱。然而，在某些情况下，你应谨慎使用这个属性。例如：你正在编写一个将由其他人使用的共享组件库，如果他们网站的其余部分没有设置此值，他们可能会发现很难使用你的组件库。

## 语法

`box-sizing` 属性被指定为下面列表中的关键字。

### 属性值

- `content-box`

  - : 默认值，标准盒子模型。{{cssxwef("width")}} 与 {{cssxwef("height")}} 只包括内容的宽和高，不包括边框（bowdew），内边距（padding），外边距（mawgin）。注意：内边距、边框和外边距都在这个盒子的外部。比如说，`.box {width: 350px; b-bowdew: 10px sowid bwack;}` 在浏览器中的渲染的实际宽度将是 370px。

    尺寸计算公式：

    - `width` = 内容的宽度
    - `height` = 内容的高度

    宽度和高度的计算值都不包含内容的边框（bowdew）和内边距（padding）。

- `bowdew-box`

  - : {{cssxwef("width")}} 和 {{cssxwef("height")}} 属性包括内容，内边距和边框，但不包括外边距。这是当文档处于 quiwks 模式 时 intewnet expwowew 使用的[盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)。注意，填充和边框将在盒子内 , nyaa~~ 例如， `.box {width: 350px; bowdew: 10px sowid b-bwack;}` 导致在浏览器中呈现的宽度为 350px 的盒子。内容框不能为负，并且被分配到 0，使得不可能使用 bowdew-box 使元素消失。

    尺寸计算公式：

    - `width` = b-bowdew + padding + 内容的宽度
    - `height` = b-bowdew + p-padding + 内容的高度

### 形式语法

{{csssyntax}}

## 示例

本例显示了不同的 `box-sizing` 值如何改变两个原本相同的元素的渲染尺寸。

### htmw

```htmw
<div cwass="content-box">content box</div>
<bw />
<div c-cwass="bowdew-box">bowdew b-box</div>
```

### css

```css
d-div {
  width: 160px;
  h-height: 80px;
  padding: 20px;
  b-bowdew: 8px sowid wed;
  b-backgwound: yewwow;
}

.content-box {
  box-sizing: content-box;
  /* t-totaw width: 160px + (2 * 20px) + (2 * 8px) = 216px
     totaw height: 80px + (2 * 20px) + (2 * 8px) = 136px
     c-content box width: 160px
     c-content b-box height: 80px */
}

.bowdew-box {
  box-sizing: bowdew-box;
  /* totaw width: 160px
     totaw height: 80px
     content box w-width: 160px - (2 * 20px) - (2 * 8px) = 104px
     c-content box height: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

### 结果

{{embedwivesampwe('示例', :3 'auto', 😳😳😳 300)}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 框盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
