---
title: flex
slug: Web/CSS/flex
---

{{CSSRef}}

`flex` [CSS 简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。

{{EmbedInteractiveExample("pages/css/flex.html")}}

## 成分属性

此属性是以下 CSS 属性的简写：

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## 语法

```css
/* 关键字值 */
flex: auto;
flex: initial;
flex: none;

/* 单值，无单位数字：flex-grow
flex-basis 此时等于 0。 */
flex: 2;

/* 单值，宽度/高度：flex-basis */
flex: 10em;
flex: 30px;
flex: min-content;

/* 双值：flex-grow | flex-basis */
flex: 1 30px;

/* 双值：flex-grow | flex-shrink */
flex: 2 2;

/* 三值：flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* 全局值 */
flex: inherit;
flex: initial;
flex: revert;
flex: revert-layer;
flex: unset;
```

可以使用一个，两个或三个值来指定 `flex` 属性。

- **单值语法**：值必须是以下之一：

  - 一个 {{cssxref("&lt;flex-grow&gt;")}} 的有效值：此时简写会扩展为 `flex: <flex-grow> 1 0`。
  - 一个 {{cssxref("&lt;flex-basis&gt;")}} 的有效值：此时简写会扩展为 `flex: 1 1 <flex-basis>`。
  - 关键字 `none` 或者全局关键字之一。

- **双值语法**：

  - 第一个值必须是一个 {{cssxref("flex-grow")}} 的有效值。
  - 第二个值必须是以下之一：

    - 一个 {{cssxref("flex-shrink")}} 的有效值：此时简写会扩展为 `flex: <flex-grow> <flex-shrink> 0`。
    - 一个 {{cssxref("flex-basis")}} 的有效值：此时简写会扩展为 `flex: <flex-grow> 1 <flex-basis>`。

- **三值语法**：值必须按照以下顺序指定：

  1. 一个 {{cssxref("flex-grow")}} 的有效值。
  2. 一个 {{cssxref("flex-shrink")}} 的有效值。
  3. 一个 {{cssxref("flex-basis")}} 的有效值。

### 取值

- `initial`
  - : 元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器。相当于将属性设置为"`flex: 0 1 auto`"。
- `auto`
  - : 元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "`flex: 1 1 auto`".
- `none`
  - : 元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"`flex: 0 0 auto`"。
- `<'flex-grow'>`
  - : 定义 flex 项目的 {{cssxref("flex-grow")}} 。负值无效。省略时默认值为 1。 (初始值为 `0`)
- `<'flex-shrink'>`
  - : 定义 flex 元素的 {{cssxref("flex-shrink")}} 。负值无效。省略时默认值为`1`。 (初始值为 `1`)
- `<'flex-basis'>`
  - : 定义 flex 元素的 {{cssxref("flex-basis")}} 属性。若值为`0`，则必须加上单位，以免被视作伸缩性。省略时默认值为 0。(初始值为 auto)

### 描述

大多数情况下，开发者需要将 `flex` 设置为以下值之一： `auto`，`initial`，`none`，或一个无单位正数。要查看这些值的效果，请尝试调整以下 flex 容器的大小：

```html hidden
<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item initial">initial</div>
  <div class="item initial">initial</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item initial">initial</div>
  <div class="item none">none</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item four">4</div>
  <div class="item two">2</div>
  <div class="item one">1</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.flex-container {
  background-color: #f4f7f8;
  resize: horizontal;
  overflow: hidden;
  display: flex;
  margin: 1em;
}

.item {
  margin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  background-color: #1b5385;
  color: white;
  font-family: monospace;
  font-size: 13px;
}

.initial {
  flex: initial;
}

.auto {
  flex: auto;
}

.none {
  flex: none;
}

.four {
  flex: 4;
}

.two {
  flex: 2;
}

.one {
  flex: 1;
}
```

{{EmbedLiveSample("描述", 1200, 370, "", "", "example-outcome-frame")}}

默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的{{cssxref("min-width")}} 与 {{cssxref("min-height")}}属性。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置 flex: auto

#### HTML

```html
<div id="flex-container">
  <div class="flex-item" id="flex">Flex box (click to toggle raw box)</div>
  <div class="raw-item" id="raw">Raw box</div>
</div>
```

#### CSS

```css
#flex-container {
  display: flex;
  flex-direction: row;
}

#flex-container > .flex-item {
  flex: auto;
}

#flex-container > .raw-item {
  width: 5rem;
}
```

```js hidden
var flex = document.getElementById("flex");
var raw = document.getElementById("raw");
flex.addEventListener("click", function () {
  raw.style.display = raw.style.display == "none" ? "block" : "none";
});
```

```css hidden
#flex-container {
  width: 100%;
  font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
  border: 1px solid #f00;
  padding: 1rem;
}

#flex-container > .raw-item {
  border: 1px solid #000;
}
```

### Result

{{EmbedLiveSample('示例','100%','60')}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS Flexbox 指南：_[Flexbox 基本概念](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS Flexbox 指南：_[控制 Flex 子元素在主轴上的比例](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
