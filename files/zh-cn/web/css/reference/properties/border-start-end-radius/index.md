---
title: border-start-end-radius
slug: Web/CSS/Reference/Properties/border-start-end-radius
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-start-end-radius`** 定义了元素的逻辑边框半径，并根据元素的书写模式、行内方向和文本朝向对应至实体边框半径。此属性便于构建适应各种[文本朝向](/zh-CN/docs/Web/CSS/Reference/Properties/text-orientation)和[书写模式](/zh-CN/docs/Web/CSS/Guides/Writing_modes)的样式。

{{InteractiveExample("CSS Demo: border-start-end-radius")}}

```css interactive-example-choice
border-start-end-radius: 80px 80px;
```

```css interactive-example-choice
border-start-end-radius: 250px 100px;
direction: rtl;
```

```css interactive-example-choice
border-start-end-radius: 50%;
writing-mode: vertical-lr;
```

```css interactive-example-choice
border-start-end-radius: 50%;
writing-mode: vertical-rl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a top right rounded corner.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

此属性影响元素块首与行末之间的拐角。例如在 `horizontal-tb` 书写模式和 `ltr` 行内方向下，此属性对应于 {{CSSXref("border-top-right-radius")}} 属性。

## 语法

```css
/* 长度值 */
/* 使用一个值所得拐角为圆形 */
border-start-end-radius: 10px;
border-start-end-radius: 1em;

/* 使用两个值所得拐角为椭圆形 */
border-start-end-radius: 1em 2em;

/* 全局值 */
border-start-end-radius: inherit;
border-start-end-radius: initial;
border-start-end-radius: revert;
border-start-end-radius: revert-layer;
border-start-end-radius: unset;
```

### 取值

- `<length-percentage>`
  - : 表示圆的半径或者椭圆半长轴和半短轴的尺寸。表示绝对尺寸可用 CSS {{CSSXref("&lt;length&gt;")}} 数据类型所允许的任意单位。水平轴的百分比参照盒的宽度，竖直轴的百分比参照盒的高度。负值无效。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 竖排文本的边框半径

#### HTML

```html
<div>
  <p class="exampleText">示例</p>
</div>
```

#### CSS

```css
div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-start-end-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-start-end-radius: 10px;
}
```

#### 结果

{{EmbedLiveSample("竖排文本的边框半径", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- 对应的实体属性：{{CSSXref("border-bottom-left-radius")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
