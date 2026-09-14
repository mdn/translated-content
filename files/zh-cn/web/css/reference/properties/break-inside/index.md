---
title: break-inside
slug: Web/CSS/Reference/Properties/break-inside
l10n:
  sourceCommit: e633202a8cda3c340a0510c27f3902f743275140
---

**`break-inside`** [CSS](/zh-CN/docs/Web/CSS) 属性设置生成的盒子内部的页面、栏或区域应有的中断行为。如果没有生成盒子，则该属性将被忽略。

{{InteractiveExample("CSS Demo: break-inside")}}

```css interactive-example-choice
break-inside: auto;
```

```css interactive-example-choice
break-inside: avoid;
```

```html interactive-example
<section id="default-example">
  <div>
    <p>
      The effect of this property can be noticed when the document is being
      printed or a preview of a print is displayed.
    </p>
    <button id="print-btn">Show Print Preview</button>
    <div class="box-container">
      <div class="box">Content before the property</div>
      <div class="box" id="example-element">Content with 'break-inside'</div>
      <div class="box">Content after the property</div>
    </div>
  </div>
</section>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}

.hide-element {
  display: none;
}

@media print {
  #example-element {
    height: 25cm;
  }
}
```

```js interactive-example
const btn = document.getElementById("print-btn");
const editorContainer = document.getElementsByClassName(
  "css-editor-container",
)[0];
const exampleHTMLElement = document.getElementById("default-example");

const printableSection = document.createElement("div");
printableSection.setAttribute("id", "printable-section");
printableSection.classList.add("hide-element");
document.body.appendChild(printableSection);

btn.addEventListener("click", () => {
  const exampleContent = exampleHTMLElement.innerHTML;

  editorContainer.classList.add("hide-element");
  printableSection.innerHTML = exampleContent;
  printableSection.classList.remove("hide-element");

  window.print();

  printableSection.classList.add("hide-element");
  printableSection.innerHTML = "";
  editorContainer.classList.remove("hide-element");
});
```

## 语法

```css
/* 关键字值 */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* 全局值 */
break-inside: inherit;
break-inside: initial;
break-inside: revert;
break-inside: revert-layer;
break-inside: unset;
```

每一个可能的中断点（换句话说，元素的边界）受三个属性的影响。前一个元素 {{cssxref("break-after")}} 的值、后一个元素 {{cssxref("break-before")}} 的值，以及包含元素 `break-inside` 的值。

会应用以下规则来确定是否必须产生中断点：

1. 如果这三个中断属性的值有一个是*强制中断值*（`always`、`left`、`right`、`page`、`column` 或 `region`），则该属性具有优先权。如果其中有多个这样的中断，则使用流中最后出现的元素的值。因此，`break-before` 值优先于 `break-after` 值，而后者又优先于 `break-inside` 值。
2. 如果三个相关值中的任何一个是*避免中断值*（`avoid`、`avoid-page`、`avoid-region` 或 `avoid-column`），则不在该点应用此类中断。

一旦应用了强制中断，如果需要，可以添加软中断，除了相应值解析为 `avoid` 的元素边界。

{{cssinfo}}

### 值

- `auto`
  - : 允许（但不强制）在主框中插入任何中断（页、栏或区域）。
- `avoid`
  - : 避免在主框中插入任何中断（页、栏或区域）。
- `avoid-page`
  - : 避免主框中的任何页中断。
- `avoid-column`
  - : 避免主框中的任何栏中断。
- `avoid-region` {{experimental_inline}}
  - : 避免主框中的任何区域中断。

## 页中断的别名

由于兼容性原因，旧的 {{cssxref("page-break-inside")}} 属性应该被浏览器视为 `break-inside` 的别名。这样可以确保使用 `page-break-inside` 的站点继续按设计运行。只有一部分值可使用别名，如下所示：

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 避免中断 `<figure>`

在下面的示例中，我们有一个容器，其中包含一个横跨所有栏的 `<h1>`（使用 `column-span: all` 实现），以及在多栏中使用 `column-width: 200px` 布局的一系列段落。我们还有一个包含图像和标题的 `<figure>`。

默认情况下，图像和其标题之间可能会发生中断，这不是我们想要的。为了避免这种情况，我们在 `<figure>` 上设置了 `break-inside: avoid`，这样它们就会始终保持在一起。

#### HTML

```html
<article>
  <h1>主标题</h1>

  <p>
    地球生命真的是宇宙中偶然里的偶然，宇宙是个空荡荡的大宫殿，人类是这宫殿中唯一的一只小蚂蚁。这想法让我的后半辈子有一种很矛盾的心态：有时觉得生命真珍贵，一切都重如泰山；有时又觉得人是那么渺小，什么都不值一提。反正日子就在这种奇怪的感觉中一天天过去，不知不觉人就老了……
  </p>

  <figure>
    <img
      src="https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png" />
    <figcaption>Firefox 标识——绕世界一圈的狐狸</figcaption>
  </figure>

  <p>
    唯一不可阻挡的是时间，它像一把利刃，无声地切开了坚硬和柔软的一切，恒定的向前推进着，没有任何东西能够使它的行径产生丝毫颠簸，它却改变着一切。
  </p>

  <p>
    如果不去遍历世界，我们就不知道什么是我们精神和情感的寄托，但我们一旦遍历了世界，却发现我们再也无法回到那美好的地方去了。当我们开始寻求，我们就已经失去，而我们不开始寻求，我们根本无法知道自己身边的一切是如此可贵。
  </p>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
}

body {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h1 + p {
  margin-top: 0;
}

p {
  line-height: 1.5;
  break-after: column;
}

figure {
  break-inside: avoid;
}

img {
  max-width: 70%;
  display: block;
  margin: 0 auto;
}

figcaption {
  font-style: italic;
  font-size: 0.8rem;
  width: 70%;
}

article {
  column-width: 200px;
  gap: 20px;
}
```

### 结果

{{EmbedLiveSample('避免中断 figure', '100%', 600)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [多栏布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [使用 CSS 片段分割盒子](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
