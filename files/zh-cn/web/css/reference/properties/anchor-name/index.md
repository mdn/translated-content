---
title: "`anchor-name` CSS 属性"
slug: Web/CSS/Reference/Properties/anchor-name
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

**`anchor-name`** [CSS](/zh-CN/docs/Web/CSS) 属性可以为元素指定一个或多个用于标识的**锚点名称**，从而将其定义为**锚点元素**。每个名称都可以作为定位元素 {{cssxref("position-anchor")}} 属性的值，以将该元素与锚点关联起来。

## 语法

```css
/* 单个值 */
anchor-name: none;
anchor-name: --name;

/* 多个值 */
anchor-name: --name, --another-name;

/* 全局值 */
anchor-name: inherit;
anchor-name: initial;
anchor-name: revert;
anchor-name: revert-layer;
anchor-name: unset;
```

### 值

此属性指定为下列列表中的单个值：

- `none`
  - : 默认值。在元素上设置 `anchor-name: none` 表示该元素未被定义为锚点元素。如果该元素之前已被定义为锚点并与定位元素关联，那么设置 `anchor-name: none` 会解除二者的关联。

- {{cssxref("dashed-ident")}}
  - : 一个或多个以逗号分隔的任意自定义标识符，用于定义锚点的名称，之后可以在 {{cssxref("position-anchor")}} 属性中引用这些名称。

## 描述

要相对于锚点元素定位一个元素，定位元素需要具备三个特征：关联、定位方式和位置。`anchor-name` 和 {{cssxref("position-anchor")}} 属性提供了显式关联。

锚点元素可以通过 `anchor-name` 属性接受一个或多个设置在其上的 `<dashed-ident>` 锚点名称。当其中一个名称被设置为某个元素的 `position-anchor` 属性值，且该元素的 {{cssxref("position")}} 设置为 `absolute` 或 `fixed` 时，这两个元素就会关联起来。通过设置关联元素相对于锚点的位置，两个元素会彼此绑定，使其成为“锚点定位元素”。

如果多个锚点元素设置了相同的锚点名称，且定位元素的 `position-anchor` 属性值引用了该名称，那么该定位元素将与源代码顺序中最后一个具有该锚点名称的锚点元素关联。

锚点定位会改变锚点定位元素的[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)，使其 `position` 相对于锚点，而不是相对于最近的定位祖先元素。

要将定位元素绑定到锚点元素，并将其放置在相对于锚点的特定位置，需要使用锚点定位功能，例如 {{cssxref("anchor()")}} 函数（设置在 {{glossary("inset properties", "inset 属性")}} 值中）或 {{cssxref("position-area")}} 属性。

如果锚点被隐藏（例如使用 {{cssxref("display", "display: none")}} 或 {{cssxref("visibility", "visibility: hidden")}}），或者由于另一个元素设置了 {{cssxref("content-visibility", "content-visibility: hidden")}} 而使锚点成为该元素[跳过的内容](/zh-CN/docs/Web/CSS/Guides/Containment/Using#跳过其内容)的一部分，则无法将定位元素与锚点元素关联。

所有生成主框的元素都支持 `anchor-name` 属性。这意味着[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)（包括使用 {{cssxref("::before")}} 和 {{cssxref("::after")}} 创建的生成内容）以及 [`range` 输入框](/zh-CN/docs/Web/HTML/Reference/Elements/input/range)滑块（{{cssxref("::-webkit-slider-thumb")}}）等用户界面功能都可以成为锚点元素。除非另有指定，伪元素会隐式锚定到与其所属元素相同的元素。

有关锚点功能及其用法的更多信息，请参阅 [CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning)模块和[使用 CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using)指南。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 基本用法

此示例将定位元素绑定到锚点，并将该元素定位在锚点的右侧。

#### HTML

我们指定两个 {{htmlelement("div")}} 元素：一个 class 为 `anchor` 的锚点元素，以及一个 class 为 `infobox` 的定位元素。

我们还在两个 `<div>` 周围加入一些填充文本，使 {{htmlelement("body")}} 变高并产生滚动条。

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>这是一个信息框。</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

首先通过 `anchor-name` 属性为 `anchor` `<div>` 设置锚点名称，将其声明为锚点元素：

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}
```

通过将锚点名称设置为定位元素 {{cssxref("position-anchor")}} 属性的值，我们将第二个 `<div>` 与锚点元素关联。然后设置定位元素的：

- 将 {{cssxref("position")}} 属性设置为 `fixed`，使其成为_锚点定位元素_，从而可以相对于锚点在页面上的位置进行定位。
- 将 {{cssxref("left")}} 和 {{cssxref("top")}} 属性分别设置为值为 `right` 和 `top` 的 {{cssxref("anchor()")}} 函数。这会使信息框的左边缘紧贴锚点的右边缘，并使其上边缘相对于锚点的上边缘定位。
- 将 {{cssxref("margin-left")}} 设置为 `10px`，在锚点定位元素与锚点之间创建间距。

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  left: anchor(right);
  top: anchor(top);
  margin-left: 10px;
}
```

#### 结果

滚动页面，查看信息框如何相对于锚点定位。当锚点向上滚动时，定位元素会随之移动。

{{ EmbedLiveSample("基本用法", "100%", "225") }}

### 多个定位元素

此示例演示如何将多个定位元素与一个锚点关联。

#### HTML

HTML 与前一个示例相同，但这次有多个定位的 `<div>` 元素，并使用不同的 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 来标识它们。

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>这是一个信息框。</p>
</div>

<div class="infobox" id="infobox2">
  <p>这是另一个信息框。</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

我们使用 `anchor-name` 属性将 `anchor` `<div>` 声明为锚点元素，并像之前一样为其指定锚点名称。

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}
```

通过将锚点名称设置为定位元素 {{cssxref("position-anchor")}} 属性的值，两个定位元素分别与锚点元素关联。二者还都设置了 `fixed` 定位，因此成为**锚点定位元素**。然后，定位元素结合使用上面示例中的内嵌属性，以及值为 `anchor-center` 的 {{cssxref("align-self")}} / {{cssxref("justify-self")}} 属性，相对于锚点定位在不同位置，并分别在行向和块向上将信息框居中到锚点中心。

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
}

#infobox1 {
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### 结果

滚动页面，查看两个信息框如何绑定到锚点。

{{ EmbedLiveSample("多个定位元素", "100%", "225") }}

### 多个锚点名称

此示例演示锚点元素如何拥有多个锚点名称。

#### HTML

HTML 与前一个示例相同。

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>这是一个信息框。</p>
</div>

<div class="infobox" id="infobox2">
  <p>这是另一个信息框。</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

CSS 也与前一个示例相同，但我们在目标元素的 `anchor-name` 属性值中加入了两个以逗号分隔的名称，并为每个定位元素设置不同的 `position-anchor` 值。

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.anchor {
  anchor-name: --anchor1, --anchor2;
}

.infobox {
  position: fixed;
}

#infobox1 {
  position-anchor: --anchor1;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --anchor2;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### 结果

滚动页面，查看两个信息框如何绑定到锚点。

{{ EmbedLiveSample("多个锚点名称", "100%", "225") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("position-anchor")}}
- {{cssxref("anchor-scope")}}
- HTML [`anchor`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/anchor) 属性
- [CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning)模块
- [使用 CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using)指南
