---
title: inset
slug: Web/CSS/Reference/Properties/inset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`inset`** 是一个对应于 {{cssxref("top")}}、{{cssxref("right")}}、{{cssxref("bottom")}} 和 {{cssxref("left")}} 属性的简写属性。它的多值语法与 {{cssxref("margin")}} 简写属性相同。

{{glossary("inset properties", "inset 属性")}}（包括 `inset`）对非定位元素无效。

{{InteractiveExample("CSS 演示：inset")}}

```css interactive-example-choice
inset: 1em;
```

```css interactive-example-choice
inset: 5% 0;
```

```css interactive-example-choice
inset: 2em 50px 20px;
```

```css interactive-example-choice
inset: 10px 30% 20px 0;
```

```css interactive-example-choice
inset: 0;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">我处于绝对定位状态。</div>
    <p>
      街道上四处泥泞，像是洪水刚刚从大地上退去一般，倘若此时你在霍尔本山腰间遇上一只大约四十英尺长的斑龙，如同巨象一般横冲直撞地进入山中，那也不足为奇。
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid #ad1457;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #07136c;
  border: 6px solid #ffa000;
  color: white;
  position: absolute;
  inset: 0;
}
```

虽然该属性属于 [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)模块，但它并不定义*逻辑*偏移量。它定义的是*物理*偏移量，与元素的书写模式、文本方向或文字排列方向无关。

## 组成属性

该属性是以下 CSS 属性的简写：

- {{Cssxref("top")}}
- {{Cssxref("right")}}
- {{Cssxref("bottom")}}
- {{Cssxref("left")}}

## 语法

```css
/* <length> 值 */
inset: 10px; /* 所有边距都应用相同的值 */
inset: 4px 8px; /* 上/下 左/右 */
inset: 5px 15px 10px; /* 上 左/右 下 */
inset: 2.4em 3em 3em 3em; /* 上 右 下 左 */
inset: calc(anchor(50%) + 10px) anchor(self-start) auto auto;
inset: anchor-size(block) calc(anchor(50%) + 10px) auto
  calc(anchor-size(width) / 4);

/* <percentage> 值表示相对于包含区块的宽度（左/右）或高度（上/下）的百分比 */
inset: 10% 5% 5% 5%;

/* 关键字值 */
inset: auto;

/* 全局值 */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;
```

### 值

`inset` 属性的取值与 {{cssxref("left")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为元素设置偏移

#### HTML

```html
<div>
  <span class="exampleText">示例文本</span>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.exampleText {
  writing-mode: sideways-rl;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("为元素设置偏移", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("top")}}、{{cssxref("right")}}、{{cssxref("bottom")}} 和 {{cssxref("left")}}
- {{cssxref("inset-block")}} 和 {{cssxref("inset-inline")}}
- {{cssxref("position")}}
- [CSS 定位布局](/zh-CN/docs/Web/CSS/Guides/Positioned_layout)模块
- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
