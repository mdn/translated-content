---
title: HTML anchor 全局属性
short-title: anchor
slug: Web/HTML/Reference/Global_attributes/anchor
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

{{Non-standard_Header}}{{SeeCompatTable}}

**`anchor`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)用于将定位元素与锚点元素相关联。该属性的值即为用于指定定位元素的锚定目标元素 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性值。随后可通过 [CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using)对该元素进行定位。

> [!NOTE]
> 或者，你可以通过 CSS 的 {{cssxref("anchor-name")}} 和 {{cssxref("position-anchor")}} 属性将定位元素与锚点元素相关联。如果同一个元素上同时使用了以上两种技术，则 CSS 定位技术优先于 HTML 定位技术。

## 示例

### 基本的 `anchor` 属性用法

以下示例使用 HTML 将定位元素与锚点关联。随后通过 CSS 将定位元素固定在锚点的右侧。

#### HTML

我们创建一个具有 `id` 为 `example-anchor` 的 {{htmlelement("div")}} 元素，此即锚点元素。随后添加另一个 `<div>`，将其 `anchor` 属性设置为 `example-anchor`。此设计将第一个 `<div>` 指定为第二个 `<div>` 的锚点，从而将两者关联起来。

我们在两个 `<div>` 周围添加了填充文本，使 {{htmlelement("body")}} 的高度增加，从而实现滚动效果。

```html
<p>
  但我得向你解释，所有这些谴责快乐和颂扬痛苦的错误观念是如何产生的。为此，我会向你一五一十地说明这一体系，并阐述伟大的真理探索者、人类幸福的杰出建设者的真实教义。没有人因为快乐是快乐而拒绝、厌恶或回避快乐本身，而是因为不知道如何理性地追求快乐的人会遭遇极其痛苦的后果。
</p>

<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>这是一个信息框。</p>
</div>

<p>
  也没有人因痛苦是痛苦而喜欢或追求或渴望获得痛苦本身，但也偶有辛劳和痛苦能带来极大的快乐的情景。举个微不足道的例子，若不是从中获得好处，我们当中有谁会进行艰苦的体育锻炼？但是，倘若没有恼人的后果，谁有权利指责选择享受快乐的人呢？或者倘若得不到相应快乐，谁能谴责选择避免痛苦的人呢？
</p>

<p>
  另一方面，我们以正义的愤慨谴责并厌恶那些被及时行乐迷惑得萎靡不振，被欲望蒙蔽得看不见大难临头的人；因意志软弱而不能履行职责的人，也应受到同样的谴责，这无异于在辛劳和痛苦前退缩。这些情况非常简单且容易区分。闲暇时，当我们的选择权不受限制，当没有什么可以阻止我们做自己最喜欢的事情时，任何快乐都应该受到欢迎，任何痛苦都应该避免。但是在某些情况下，由于责任或商业义务的要求，不时会有不得不拒绝享乐而接受烦恼的情况。因此，智者在这些事情上总是坚持选择的原则：拒绝快乐以获得更大的快乐，或者忍受痛苦以避免更重的痛苦。
</p>
```

#### CSS

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

我们使用 CSS 将 `infobox` 元素转换为*锚定位元素*，并使其相对于锚点定位。我们设置其：

- {{cssxref("position")}} 属性为 `fixed`，将其转换为定位元素以便相对于锚点位置定位。
- 将 {{cssxref("left")}} 属性设置为 {{cssxref("anchor()")}} 函数并赋值 `right`。此操作将定位元素与锚点绑定，使其左边缘与锚点右边缘齐平。
- {{cssxref("align-self")}} 属性设置为 [`anchor-center`](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)。这将使信息框在行内方向上居中对齐于锚点的中心。
- 将 {{cssxref("margin-left")}} 设置为 `10px`，在锚定位元素与其锚点之间创建间距。

```css
.infobox {
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}
```

#### 结果

滚动示例可查看信息框如何与锚点绑定。当支持 `anchor` 属性时，信息框将固定在锚点的右侧；若不支持该属性，则信息框将固定在视口位置。

{{EmbedLiveSample("基本的 `anchor` 属性用法", "100%", 225)}}

## 规范

该属性目前尚未纳入 HTML 规范。有关添加 `anchor` 属性的讨论，请参阅 [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144)。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.anchorElement")}}
- CSS {{cssxref("anchor-name")}} 属性
- CSS {{cssxref("position-anchor")}} 属性
- [CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning)模块
