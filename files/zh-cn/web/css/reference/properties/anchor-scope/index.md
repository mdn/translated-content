---
title: "`anchor-scope` CSS 属性"
slug: Web/CSS/Reference/Properties/anchor-scope
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

**`anchor-scope`** [CSS](/zh-CN/docs/Web/CSS) 属性可以将定位元素与锚点元素建立关联的范围限制在特定子树中。

## 语法

```css
/* Single values */
anchor-scope: none;
anchor-scope: all;
anchor-scope: --anchor-name;

/* Multiple <dashed-ident> values */
anchor-scope: --anchor-name, --another-name;

/* Global values */
anchor-scope: inherit;
anchor-scope: initial;
anchor-scope: revert;
anchor-scope: revert-layer;
anchor-scope: unset;
```

### 值

此属性指定为关键字 `none` 或 `all`，或以逗号分隔的 `<dashed-ident>` 值列表：

- `none` -：不限制元素的锚点范围。这是默认值。
- `all` -：设置范围，使子树中设置的_任何_ `anchor-name` 值只能由同一子树中的定位元素绑定。
- {{cssxref("dashed-ident", "&lt;dashed-ident&gt;#")}} -：表示锚点名称的一个或多个以逗号分隔的 {{cssxref("dashed-ident")}}。设置范围，使指定的 `anchor-name` 值在子树中设置时，只能由同一子树中的定位元素绑定。

## 描述

当页面中的多个[锚点元素](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements)被赋予相同的 {{cssxref("anchor-name")}} 值，并且定位元素与该锚点名称建立关联（将该名称指定为其 {{cssxref("position-anchor")}} 属性值）时，定位元素会与源代码顺序中该锚点名称对应的_最后一个_锚点元素建立关联。

这在某些情况下可能会造成问题。例如，如果文档包含多个重复组件，每个组件都有一个与锚点连接的定位元素，那么除非每个组件使用不同的锚点名称，否则所有定位元素都会锚定到页面上的最后一个锚点。这通常不是期望的行为。

`anchor-scope` 属性可以将 `anchor-name` 值的可见性（或称“范围”）限制在特定子树中，从而解决此问题。结果是，每个定位元素只能锚定到设置了该范围的元素所在子树中的元素。

- `anchor-scope: all` 设置范围，使子树中设置的_任何_ `anchor-name` 值只能由同一子树中的定位元素绑定。假设文档中包含多个锚点，它们都设置了 `anchor-name: --my-anchor`，并且分别放在不同容器中。然后我们在每个容器上设置 `anchor-scope: all`。如果在其中一个容器中添加定位元素，并将其 `position-anchor` 属性值设为 `--my-anchor`，它就会相对于同一容器中的锚点进行定位。

  此外，如果在容器外创建另一个定位元素，并为其指定相同或不同的锚点名称，则无论这些锚点的 `anchor-name` 值中是否包含相应名称，该元素都不会相对于任何锚点进行锚点定位。`anchor-scope: all` 会对设置它的容器限制_所有_锚点的锚点范围（与 `anchor-name` 无关），使其只能作用于同一容器中的定位元素。

- `anchor-scope: <dashed-ident>#` 设置范围，使子树中设置的指定 `anchor-name` 值只能由同一子树中的定位元素绑定。回到上一项中的示例，将容器上的 `anchor-scope` 值改为 `--my-anchor`：
  - 设置了 `position-anchor: --my-anchor` 的定位元素会受到 `anchor-scope` 设置所施加范围的限制。只有放在容器中的定位元素才会相对于这些锚点进行定位。
  - 但是，具有不同 `position-anchor` 名称（例如 `--another-anchor`）的定位元素_可以_相对于其中一个锚点进行定位，无论它位于容器内还是容器外，前提是将 `--another-anchor` 锚点名称添加到锚点的 `anchor-name` 属性中。`anchor-scope` 属性只限制 `--my-anchor` 锚点名称的范围，因此不会影响其他锚点名称。

    如果多个锚点被赋予 `--another-anchor` 锚点名称，则具有该 `position-anchor` 值的定位元素会相对于源代码顺序中具有该名称的最后一个锚点进行定位。

例如，如果子树中设置了三个 `anchor-name` 值（比如 `--anchor1`、`--anchor2` 和 `--anchor3`），在该子树的顶层元素上设置 `anchor-scope: --anchor1, --anchor2, --anchor3`，其效果等同于设置 `anchor-scope: all`。

锚点范围只影响[显式锚点关联](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using#explicit_css_anchor_association)，也就是在设置了 `anchor-name` 的锚点元素与通过 `position-anchor` 值引用该锚点元素名称的定位元素之间建立的关联。锚点范围不影响[隐式锚点关联](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using#implicit_anchor_association)。

有关锚点功能及其用法的更多信息，请参阅 [CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning)模块和[使用 CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using)指南。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 基本用法

此示例演示锚点范围的基本工作方式。它展示了如何将范围容器中的锚点元素限制为只能与同一范围容器中的定位元素连接。

#### HTML

我们指定一个要设置锚点范围的 {{htmlelement("section")}} 元素。它包含两个 {{htmlelement("div")}} 元素，一个用作锚点，另一个用作锚点定位元素。

我们还在 `<section>` 外添加第三个 `<div>`，也将其用作锚点定位元素。

```html live-sample___basic-usage
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">定位元素 1</div>
</section>

<div class="positioned">定位元素 2</div>
```

#### CSS

我们首先在 `<section>` 上设置 `anchor-scope: --my-anchor`。这会限制其范围，使 `<section>` 的后代锚点元素在名称为 `--my-anchor` 时，只能由同样是 `<section>` 后代的定位元素绑定。

为了进行测试，我们将 `anchor` `<div>` 的 {{cssxref("anchor-name")}} 设置为 `--my-anchor`，将其声明为锚点元素。然后将 `.positioned` 元素绝对定位，将其 {{cssxref("position-anchor")}} 值设为 `--my-anchor` 以连接到锚点，并将其 {{cssxref("position-area")}} 值设为 `right`，使其定位在锚点右侧：

```css hidden live-sample___basic-usage
.scoped {
  padding: 20px;
  background: #eeeeee;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned {
  background: orange;
  width: fit-content;
  padding: 3px;
}
```

```css live-sample___basic-usage
.scoped {
  anchor-scope: --my-anchor;
}

.anchor {
  anchor-name: --my-anchor;
}

.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}
```

#### 结果

示例渲染结果如下：

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

注意，第一个定位元素位于锚点右侧。由于它位于设置了 `anchor-scope: --my-anchor` 的 `<section>` 元素内，因此处于相对于 `--my-anchor` 锚点定位的范围内。

但是，第二个定位元素没有相对于锚点进行定位。它不是 `<section>` 元素的后代，因此位于锚点范围之外。

### 比较不同的 `anchor-scope` 值

此示例通过允许你为多个容器应用不同的 `anchor-scope` 值，演示不同 `anchor-scope` 值的效果。这些容器中的锚点都具有相同的 `anchor-name` 值。

#### HTML

我们指定三个要设置锚点范围的 {{htmlelement("section")}} 元素。每个 `<section>` 包含两个 {{htmlelement("div")}} 元素，一个用作锚点，另一个用作锚点定位元素。

我们还在 `<section>` 元素外添加另一个 `<div>`，也将其用作锚点定位元素。它的锚点定位设置与其他元素不同。

最后，我们添加一个 {{htmlelement("form")}}，其中包含三个不同的 [`<input type="radio">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/radio) 元素，以便为 `<section>` 元素设置不同的 `anchor-scope` 值。

```html live-sample___comparing-values
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">定位元素 1</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">定位元素 2</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">定位元素 3</div>
</section>

<div class="positioned2">定位元素 4</div>

<form>
  <fieldset>
    <legend>选择一个 <code>anchor-scope</code> 值</legend>

    <input type="radio" id="all" name="scope" value="all" checked />
    <label for="all"><code>all</code></label>
    <input type="radio" id="my-anchor" name="scope" value="--my-anchor" />
    <label for="my-anchor"><code>--my-anchor</code></label>
    <input type="radio" id="none" name="scope" value="none" />
    <label for="none"><code>none</code></label>
  </fieldset>
</form>
```

#### CSS

我们首先为锚点元素指定两个 {{cssxref("anchor-name")}} 值：`--my-anchor` 和 `--another-anchor`，将它们声明为锚点。

```css hidden live-sample___comparing-values
body {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5px;
}

.scoped {
  padding: 20px;
  background: #eeeeee;
  border: 2px solid #dddddd;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned,
.positioned2 {
  border: 1px solid black;
  border-radius: 3px;
  width: fit-content;
  padding: 3px 6px;
  box-shadow: 3px 3px 3px rgb(0 0 0 / 0.2);
}

form {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
```

```css live-sample___comparing-values
.anchor {
  anchor-name: --my-anchor, --another-anchor;
}
```

接下来，我们将 `.positioned` 元素相对于锚点元素进行定位。我们将它们绝对定位，将 {{cssxref("position-anchor")}} 值设为 `--my-anchor` 以与锚点建立关联，并将 {{cssxref("position-area")}} 值设为 `right`，使其相对于锚点定位。

`.positioned2` 元素的定位方式类似，不过它将另一个可用锚点名称 `--another-anchor` 作为 `position-anchor` 值，并改为定位在锚点的 `bottom`。我们还将其 {{cssxref("bottom")}} 值设为 `5px`，这样如果锚点定位未生效，它就会定位在 `<body>` 底部。该元素不包含在任何范围元素中，因此只有在范围元素上设置某些 `anchor-scope` 值时才会进行锚点定位，后文会对此进行说明。

```css live-sample___comparing-values
.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}

.positioned2 {
  position: absolute;
  bottom: 5px;
  position-anchor: --another-anchor;
  position-area: bottom;
}
```

我们使用 JavaScript 在按下不同单选按钮时为 `<section>` 元素设置 `anchor-scope`；为简洁起见，相关代码已隐藏。

```js hidden live-sample___comparing-values
const sections = document.querySelectorAll("section");
const form = document.querySelector("form");

function updateScope(val) {
  sections.forEach((section) => (section.style.anchorScope = val));
}

form.addEventListener("input", (e) => {
  updateScope(e.target.value);
});

updateScope("all");
```

#### 结果

示例渲染结果如下：

{{ EmbedLiveSample("comparing-values", "100%", "225") }}

请先查看 `<section>` 元素设置 `anchor-scope: all` 时对定位元素产生的初始定位效果，然后尝试选择其他可用的 `anchor-scope` 值，观察它们的效果。你应该会看到以下结果：

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见
