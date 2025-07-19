---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`position`** [CSS](/zh-CN/docs/Web/CSS) 属性用于指定一个元素在文档中的定位方式。{{Cssxref("top")}}、{{Cssxref("right")}}、{{Cssxref("bottom")}}、{{Cssxref("left")}} 物理属性和 {{cssxref("inset-block-start")}}、{{cssxref("inset-block-end")}}、{{cssxref("inset-inline-start")}}、{{cssxref("inset-inline-end")}} 流相对逻辑属性则可用于决定定位元素的最终位置。

{{InteractiveExample("CSS 演示：position")}}

```css interactive-example-choice
position: static;
```

```css interactive-example-choice
position: relative;
top: 40px;
left: 40px;
```

```css interactive-example-choice
position: absolute;
inset-inline-start: 40px;
inset-block-start: 40px;
```

```css interactive-example-choice
position: sticky;
top: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element-container">
    <p>
      在此演示中你可以控制黄色盒子的 <code>position</code> 属性。
    </p>
    <div class="box"></div>
    <div class="box" id="example-element"></div>
    <div class="box"></div>
    <p class="clear">
      要观察 <code>sticky</code> 定位的效果，选择 <code>position: sticky</code> 选项并滚动此容器。
    </p>
    <p>
       元素将随着容器滚动，直到位于容器顶部（或达到 <code>top</code> 中指定的偏移量），然后停止滚动，保持可见。
    </p>
    <p>
      剩下的文字只是为了确保容器溢出，以便滚动容器查看效果。
    </p>
    <hr />
    <p>
      在银河系西旋臂不时髦的一端，遥远的无人知晓的后方，有一个无人问津的黄色小太阳。在距离太阳大约九千二百万英里的地方，有一颗极其微不足道的蓝绿色小行星，它的猿人后裔生命形式原始得令人吃惊，以至于他们仍然认为电子表是个相当不错的主意。
    </p>
  </div>
</section>
```

```css interactive-example
section {
  align-items: flex-start;
  overflow: auto;
}

.box {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  float: left;
  width: 65px;
  height: 65px;
}

.box + .box {
  margin-left: 10px;
}

.clear {
  clear: both;
  padding-top: 1em;
}

#example-element-container {
  position: relative;
  text-align: left;
}

#example-element {
  background-color: yellow;
  border: 3px solid red;
  z-index: 1;
}
```

## 语法

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* 全局值 */
position: inherit;
position: initial;
position: revert;
position: revert-layer;
position: unset;
```

### 值

- `static`
  - : 该关键字指定元素使用正常的布局行为，即元素在文档[正常布局流](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Introduction#正常布局流)中当前的布局位置。此时 {{cssxref("top")}}、{{cssxref("right")}}、{{cssxref("bottom")}}、{{cssxref("left")}} 和 {{cssxref("z-index")}} 属性*无效*。这是默认值。
- `relative`
  - : 元素根据文档的正常流程定位，然后根据 `top`、`right`、`bottom` 和 `left` 的值相对于自身偏移。偏移量不会影响任何其他元素的位置；因此，在页面布局中为该元素提供的空间与位置为 `static` 时相同。
 
    当 `z-index` 的值不是 `auto` 时，该值会创建一个新的[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Stacking_context)。它对 `table-*-group`、`table-row`、`table-column`、`table-cell` 和 `table-caption` 元素的影响未定义。

- `absolute`
  - : 该元素将从正常文档流程中移除，页面布局中不会为该元素创建任何空间。元素的位置是相对于其位置最近的祖先（如果有）或初始[包含块](/zh-CN/docs/Web/CSS/CSS_display/Containing_block#确定包含块)。其最终位置由 `top`、`right`、`bottom` 和 `left` 的值决定。
    当 `z-index` 的值不是 `auto` 时，该值会创建一个新的[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Stacking_context)。绝对定位盒子的边距不会与其他边距[折叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)。

- `fixed`
  - : 元素会被移出正常文档流，并不为元素预留空间。元素的位置是相对于其初始[包含块](/zh-CN/docs/Web/CSS/CSS_display/Containing_block#确定包含块)，也就是视觉媒体的视口。其最终位置由 `top`、`right`、`bottom` 和 `left` 的值决定。
    该值总会创建一个新的[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Stacking_context)。在打印的文档中，该元素在*每一页*上的位置都是相同的。

- `sticky`
  - : 元素根据正常文档流进行定位，然后相对它的*最近滚动祖先*和[包含块](/zh-CN/docs/Web/CSS/CSS_display/Containing_block)（最近块级祖先），包括表格相关元素，基于 `top`、`right`、`bottom` 和 `left` 的值进行偏移。偏移值不会影响任何其他元素的位置。
    该值总是创建一个新的[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Stacking_context)。注意，一个 sticky 元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的 `overflow` 是 `hidden`、`scroll`、`auto` 或 `overlay` 时），即便这个祖先不是最近的真实可滚动祖先。

    > [!NOTE]
    > 至少有一个 [inset](/zh-CN/docs/Web/CSS/inset) 属性（{{cssxref("top")}}、{{cssxref("inset-block-start")}}、{{cssxref("right")}}、{{cssxref("inset-inline-end")}} 等）需要设置为非 `auto` 值。如果某个轴的两个 `inset` 属性都设置为 `auto`，则该轴上的 `sticky` 值将表现为 `relative`。

## 描述

### 定位类型

- **定位元素**（positioned element）是其[计算后](/zh-CN/docs/Web/CSS/CSS_cascade/Value_processing#计算值) `position` 属性为 `relative`、`absolute`、`fixed` 或 `sticky` 的一个元素（换句话说，除 `static` 以外的任何东西）。
- **相对定位元素**（relatively positioned element）是[计算后](/zh-CN/docs/Web/CSS/CSS_cascade/Value_processing#计算值) `position` 属性为 `relative` 的元素。{{Cssxref("top")}} 和 {{Cssxref("bottom")}} 属性指定了与正常位置的垂直偏移；{{Cssxref("left")}} 和 {{Cssxref("right")}} 指定了水平偏移。
- **绝对定位元素**（absolutely positioned element）是[计算后](/zh-CN/docs/Web/CSS/CSS_cascade/Value_processing#计算值) `position` 属性为 `absolute` 或 `fixed` 的元素。{{Cssxref("top")}}、{{Cssxref("right")}}、{{Cssxref("bottom")}} 和 {{Cssxref("left")}} 属性指定了从元素[包含块](/zh-CN/docs/Web/CSS/CSS_display/Containing_block)边缘的偏移量。(包含块是相对于该元素定位的祖先块）。如果元素有边距，则边距会添加到偏移量中。该元素将为其内容建立一个新的[区块格式化上下文](/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)（BFC）。
- **粘性定位元素**（stickily positioned element）是[计算后](/zh-CN/docs/Web/CSS/CSS_cascade/Value_processing#计算值) `position` 属性为 `sticky` 的元素。在其[包含块](/zh-CN/docs/Web/CSS/CSS_display/Containing_block)在其流根（或其滚动的容器）内越过指定临界值（例如将 {{Cssxref("top")}} 设置为 auto 以外的值）之前，它被视为相对定位，此时它被视为“卡住”，直到遇到其[包含块](/zh-CN/docs/Web/CSS/CSS_display/Containing_block)的对边。

大多数情况下，{{Cssxref("height")}}和{{Cssxref("width")}} 被设定为 `auto` 的绝对定位元素，按其内容大小调整尺寸。但是，非[替换的](/zh-CN/docs/Glossary/Replaced_elements)绝对定位元素可以通过指定 {{Cssxref("top")}} 和{{Cssxref("bottom")}}，保留{{Cssxref("height")}} 未指定（即 `auto`），来填充可用的垂直空间。它们同样可以通过指定 {{Cssxref("left")}} 和 {{Cssxref("right")}} 并将 {{Cssxref("width")}} 指定为 `auto` 来填充可用的水平空间。

除了刚刚描述的情况（绝对定位元素填充可用空间）：

- 如果 `top` 和 `bottom` 都被指定（严格来说，这里指定的值不能为 `auto`），`top` 优先。
- 如果指定了 `left` 和 `right` ，当 {{Cssxref("direction")}} 设置为 `ltr`（英语、水平书写的中文）时 `left` 优先，当 {{Cssxref("direction")}} 设置为 `rtl`（阿拉伯语、希伯来语、波斯语由右向左书写）时 `right` 优先。

## 无障碍

确保使用 `absolute` 或 `fixed` 值定位的元素在页面缩放以增大文字大小时不会遮挡其他内容。

- [MDN 理解 WCAG，指南 1.4 的解释](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [视觉演示：理解 SC 1.4.8 | 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### 性能和无障碍

包含 `fixed` 或 `sticky` 内容的滚动元素会导致性能和无障碍问题。当用户滚动时，浏览器必须在新的位置重新绘制粘性或固定内容。根据需要重新绘制的内容、浏览器的性能和设备的处理速度，浏览器可能无法以 60 fps 的速度管理重新绘制。这种情况可能会导致[卡顿](/zh-CN/docs/Glossary/Jank)，更重要的是，会给敏感人群带来无障碍问题。一种解决方案是在定位元素中添加 {{cssxref("will-change", "will-change: transform")}}，以在独立层中渲染元素，提高重绘速度，从而改善性能和无障碍性。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 相对定位

相对定位的元素是在文档中的正常位置偏移给定的值，但是不影响其他元素的偏移。下面的例子中，注意未应用定位的其他元素是按照“二”在正常位置的情况下进行布局的。

#### HTML

```html
<div class="box" id="one">一</div>
<div class="box" id="two">二</div>
<div class="box" id="three">三</div>
<div class="box" id="four">四</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

{{EmbedLiveSample('相对定位', '', '200px')}}

### 绝对定位

相对定位的元素会保持在文档的正常流中。与此相反，绝对定位的元素会被移出流程；因此，其他元素的定位就好像它不存在一样。绝对定位的元素是相对于其*最近定位的祖先*（即非 `sticky` 的最近祖先）定位的。如果定位祖先不存在，则相对于 ICB（[初始包含块](https://drafts.csswg.org/css-display/#initial-containing-block)）定位，ICB 是文档根元素的包含块。

#### HTML

```html
<h1>绝对定位</h1>

<p>
  我是一个基本块级元素。相邻的块级元素位于我下方新的一行上。
</p>

<p class="positioned">
  默认情况下，我们的宽度是父元素宽度的 100%，高度与子元素的内容相同。我们的总宽度和高度为内容 + 内边距 + 边框宽度/高度。
</p>

<p>
  我们被外边距分开了。由于外边距折叠，我们是被其中一个外边距的宽度分开，而不是两个边距都分开。
</p>

<p>
  如果同一行有空白，<span>像这样</span>和<span>那样</span>的行级元素和相邻的文本节点会位于同一行。如果可能的话，溢出的行内元素<span>会折行——就像这个包含文本的元素</span>，如果不可能的话，就换行，就像这个图片一样：
  <img src="https://mdn.github.io/shared-assets/images/examples/long.jpg" />
</p>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

#### 结果

{{EmbedLiveSample('绝对定位', '', '420px')}}

### 固定定位

固定定位与绝对定位类似，但元素的[包含块](/zh-CN/docs/Web/CSS/CSS_display/Containing_block)是*视口*建立的初始包含块，除非任何祖先的 `transform`、`perspective` 或 `filter` 属性设置为除 `none` 以外的其他属性（请参阅[固定定位包含块](https://drafts.csswg.org/css-position/#fixed-positioning-containing-block)），这样就会使该祖先取代元素[包含块](/zh-CN/docs/Web/CSS/CSS_display/Containing_block)。这可以用来创建一个“浮动”元素，无论滚动与否，它都会保持在同一位置。在下面的示例中，盒子“一”被固定在距离页面顶部 80 像素和左侧 10 像素的位置。即使滚动后，它也会保持在相对于视口的同一位置。此外，当 [`will-change`](/zh-CN/docs/Web/CSS/will-change) 属性设置为 `transform` 时，会建立一个新的包含块。

#### HTML

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <div class="box" id="one">一</div>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

.box {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#one {
  position: fixed;
  top: 80px;
  left: 10px;
  background: blue;
}

.outer {
  width: 500px;
  height: 300px;
  overflow: scroll;
  padding-left: 150px;
}
```

#### 结果

{{ EmbedLiveSample('固定定位', '', '300px') }}

### 粘性定位

以下 CSS 规则将 id 为 `one` 的元素相对定位，直到视口滚动到距离顶部 10 像素为止。超过该阈值后，元素将固定在距顶部 10 像素的位置。

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### 具有粘性标题的列表

粘性定位的一个常见用途是按字母顺序排列的列表中的标题。“B”标题将出现在以“A”开头的项目下方，直到它们被滚动到屏幕之外。“B”标题不会与其他内容一起滑出屏幕，而是固定在视口顶部，直到所有“B”项都滚动到屏幕之外，然后再被“C”标题覆盖，以此类推。

必须指定一个阈值，该阈值至少包含 `top`、`right`、`bottom` 或 `left` 中的一个，这样粘性定位才会按照预期运行。否则，它将与相对定位无异。

##### HTML

```html
<dl>
  <div>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </div>
  <div>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </div>
  <div>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </div>
  <div>
    <dt>T</dt>
    <dd>Ted Leo &amp; The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </div>
</dl>
```

##### CSS

```css
* {
  box-sizing: border-box;
}

dl > div {
  background: #fff;
  padding: 24px 0 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font:
    bold 18px/21px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font:
    bold 20px/45px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #ccc;
}
```

##### 结果

{{EmbedLiveSample('具有粘性标题的列表', '', '300px')}}

#### 设置了所有嵌入边界的粘性定位

下面的示例演示了设置所有嵌入边界时元素的行为。这里，我们在一个段落中有两个灯泡表情符号。灯泡使用粘性定位，嵌入边界指定为距顶部 50px、距右侧 100px、距底部 50px 和距左侧 50px。父 div 元素上的灰色背景标记了嵌入区域。

##### HTML

```html
使用滚动条将灯泡（💡）放到下面文字的正确位置：
<div>
  <p>
    用灯泡（<span class="bulb">💡</span>）来代表一个想法是一个常用的比喻，象征着灵感迸发或新想法诞生的时刻。灯泡与创意之间的联系可以追溯到 19 世纪末托马斯-爱迪生发明的白炽灯泡（<span
      class="bulb"
      >💡</span
    >）。灯泡是一个强有力的象征，因为它代表着照明、清晰和思想或理解的突然明亮。当一个人有了一个想法时，通常会被描述为他脑海中的灯泡亮了起来，象征着洞察力或创造力的迸发。灯泡的形象也暗示了能量、力量以及成长和发展潜力的概念。
  </p>
</div>
```

##### CSS

```css hidden
div {
  width: 400px;
  height: 200px;
  overflow: scroll;
  scrollbar-width: thin;
  font-size: 16px;
  font-family: Verdana;
  border: 1px solid;
}

p {
  width: 600px;
  user-select: none;
  margin: 0;
  border: 110px solid transparent;
}
```

```css
.bulb {
  position: sticky;
  inset: 50px 100px 50px 100px;
}

div {
  /* 使用灰色标记插入边界所定义的区域 */
  background: linear-gradient(#9999, #9999) 100px 50px / 192px 100px no-repeat;
}
```

##### 结果

{{EmbedLiveSample('设置了所有嵌入边界的粘性定位', '', '300px')}}

将两个灯泡放在适当的位置后，你会发现它们相对位于嵌入区域内。当将它们移出嵌入区时，它们就会固定（粘住）在嵌入区边界的那个方向上。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{glossary("Inset properties", "Inset 属性")}}
- [学习 CSS：定位](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [定位布局的 Inset 属性](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning#示例：定位布局的偏移属性)
- [CSS 定位布局](/zh-CN/docs/Web/CSS/CSS_positioned_layout)模块
