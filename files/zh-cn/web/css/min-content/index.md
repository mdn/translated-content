---
title: min-content
slug: Web/CSS/min-content
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{CSSRef}}

`min-content` 尺寸关键字表示内容的最小{{glossary("intrinsic size", "固有尺寸")}}。对于文本内容而言，这意味着内容会利用所有软换行的机会，变得尽可能的小。

可以使用 {{cssxref("interpolate-size")}} 属性和 {{cssxref("calc-size()")}} 函数来启用由 `min-content` 开始或结束的动画。

## 语法

```css
/* 作为长度使用 */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* 在 grid track 中使用 */
grid-template-columns: 200px 1fr min-content;
```

## 示例

### 使用 min-content 调整盒子的大小

#### HTML

```html
<div class="item">项目</div>
<div class="item">项目中包含更多文本。</div>
```

#### CSS

```css
.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

### 结果

{{EmbedLiveSample("使用 min-content 调整盒子的大小", "100%", 200)}}

### 通过 min-content 调整网格列的大小

#### HTML

```html
<div id="container">
  <div>项目</div>
  <div>项目中包含更多文本。</div>
  <div>弹性项目</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### 结果

{{EmbedLiveSample("通过 min-content 调整网格列的大小", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关尺寸关键字：{{cssxref("max-content")}}、{{cssxref("fit-content")}}
- [CSS 盒子大小设置](/zh-CN/docs/Web/CSS/CSS_box_sizing)模块
