---
title: inline-size
slug: Web/CSS/Reference/Properties/inline-size
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`inline-size`** 根据元素的书写模式定义了元素区块的横向或纵向尺寸。根据 {{CSSXref("writing-mode")}} 的值，此属性对应于 {{CSSXref("width")}} 或 {{CSSXref("height")}} 属性。

若为纵向书写模式，则 `inline-size` 的值对应于元素的高度；否则对应于元素的宽度。与此相关的属性为 {{CSSXref("block-size")}}，此属性定义了元素另一方向的尺度。

{{InteractiveExample("CSS Demo: inline-size")}}

```css interactive-example-choice
inline-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the inline-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

## 语法

```css
/* <length> 值 */
inline-size: 300px;
inline-size: 25em;

/* <percentage> 值 */
inline-size: 75%;

/* 关键词值 */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content(20em);
inline-size: auto;

/* 全局值 */
inline-size: inherit;
inline-size: initial;
inline-size: revert;
inline-size: revert-layer;
inline-size: unset;
```

### 取值

`inline-size` 属性的取值与 {{CSSXref("width")}} 和 {{CSSXref("height")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 以像素为单位设置行向尺寸

#### HTML

```html
<p class="exampleText">示例文本</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

#### 结果

{{EmbedLiveSample("以像素为单位设置行向尺寸")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 对应的实体属性：{{CSSXref("width")}} 和 {{CSSXref("height")}}
- {{CSSXref("writing-mode")}}
