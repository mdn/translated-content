---
title: overflow-y
slug: Web/CSS/Reference/Properties/overflow-y
l10n:
  sourceCommit: f89df1bb60b0d71d3e41bf5b1c0d8cb4eac45a27
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`overflow-y`** 设置当内容溢出块级元素的上下两侧时所显示的内容。可以不显示，或显示滚动条，或显示溢出内容。也可以使用 [`overflow`](/zh-CN/docs/Web/CSS/Reference/Properties/overflow) 简写属性来设置该属性。

{{InteractiveExample("CSS Demo: overflow-y")}}

```css interactive-example-choice
overflow-y: visible;
```

```css interactive-example-choice
overflow-y: hidden;
```

```css interactive-example-choice
overflow-y: clip;
```

```css interactive-example-choice
overflow-y: scroll;
```

```css interactive-example-choice
overflow-y: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's
    Inn Hall. Implacable November weather. As much mud in the streets as if the
    waters had but newly retired from the face of the earth.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## 语法

```css
/* 关键字值 */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;

/* 全局值 */
overflow-y: inherit;
overflow-y: initial;
overflow-y: revert;
overflow-y: revert-layer;
overflow-y: unset;
```

`overflow-y` 属性可指定为下列 {{CSSXref("overflow_value", "&lt;overflow&gt;")}} 关键字值之一。

当 {{cssxref("overflow-x")}} 的值为 `hidden`、`scroll` 或者 `auto`，而 `overflow-y` 属性的值为 `visible`（默认值）时，该值会被隐式地计算为 `auto`。

### 取值

- `visible`
  - : 溢出的内容不会被截断，且可以显示在元素边距（padding）框的上下边缘之外。元素盒子不是{{glossary("scroll container", "滚动容器")}}。
- `hidden`
  - : 如有必要，溢出的内容会被截断以从垂直方向适应元素的边距框，不会显示滚动条。
- `clip`
  - : 在*溢出截断边缘*（使用 [`overflow-clip-margin`](/zh-CN/docs/Web/CSS/Reference/Properties/overflow-clip-margin) 属性定义）上的溢出内容会被截断。即，距元素内边距框指定宽度（为 `overflow-clip-margin` 的 {{cssxref("&lt;length&gt;")}} 值，若未设置则为 `0px`）范围内的内容会溢出。`clip` 和 `hidden` 的区别是 `clip` 关键字还禁止所有滚动，包括程序性滚动（programmatic scrolling）。其不会创建新的格式化上下文。如果要创建新的格式化上下文，请将 `overflow: clip` 与 {{cssxref("display", "display: flow-root", "#flow-root")}} 一起使用。元素盒子不是滚动容器。
- `scroll`
  - : 如有必要，溢出的内容会被截断以从垂直方向适应元素的边距框。无论内容是否发生溢出，浏览器总是显示滚动条。（这可以避免滚动条的显示与消失所导致的元素尺寸不确定的问题。）而打印机可能会打印溢出的内容。
- `auto`
  - : 元素边距框中的溢出内容会被截断，且溢出内容可通过滚动以进行浏览。与 `scroll` 关键字值不同的是，用户代理*只在*内容溢出时显示滚动条，默认不会显示滚动条。如果内容可以适应元素的边距框，则看起来与 `visible` 相同，但仍然会创建新的格式化上下文。

> [!NOTE]
> 关键字值 `overlay` 是 `auto` 的一个遗留别名。使用 `overlay` 时，滚动条会绘制在内容上方，而不占用空间。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置 overflow-y 行为

#### HTML

```html
<ul>
  <li>
    <code>overflow-y:hidden</code>——在盒外隐藏文本
    <div id="div1">
      歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </li>

  <li>
    <code>overflow-y:scroll</code>——总是添加滚动条
    <div id="div2">
      歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </li>

  <li>
    <code>overflow-y:visible</code>——必要时在盒外显示文本
    <div id="div3">
      歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </li>

  <li>
    <code>overflow-y:auto</code>——在多数浏览器上等价于 <code>scroll</code>
    <div id="div4">
      歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </li>
</ul>
```

#### CSS

```css
div {
  border: 1px solid black;
  width: 350px;
  height: 100px;
}

#div1 {
  overflow-y: hidden;
  margin-bottom: 12px;
}
#div2 {
  overflow-y: scroll;
  margin-bottom: 12px;
}
#div3 {
  overflow-y: visible;
  margin-bottom: 150px;
}
#div4 {
  overflow-y: auto;
  margin-bottom: 120px;
}
```

#### 结果

{{EmbedLiveSample("设置_overflow-y_行为", "100%", "780")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("clip")}}、{{Cssxref("display")}}、{{cssxref("text-overflow")}}、{{cssxref("white-space")}}
- [CSS 溢出](/zh-CN/docs/Web/CSS/Guides/Overflow)模块
- [CSS 构建：溢出的内容](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Overflow)
