---
title: max-content
slug: Web/CSS/max-content
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{CSSRef}}

`max-content` 尺寸关键字表示内容的最大{{glossary("intrinsic size", "固有尺寸")}}。对于文本内容，这意味着即使内容会导致溢出，它也不会换行。

可以使用 {{cssxref("interpolate-size")}} 属性和 {{cssxref("calc-size()")}} 函数来启用由 `max-content` 开始或结束的动画。

## 语法

```css
/* 作为长度使用 */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* 在 grid track 中使用 */
grid-template-columns: 200px 1fr max-content;
```

## 示例

### 使用 max-content 调整盒子大小

#### HTML

```html
<div id="container">
  <div class="item">选项</div>
  <div class="item">包含更多文本的项目将超出固定宽度盒子。</div>
</div>
```

#### CSS

```css
#container {
  background-color: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: max-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 结果

{{EmbedLiveSample("使用 max-content 调整盒子大小", "100%", 200)}}

### 使用 max-content 调整网格列的大小

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
  grid-template-columns: max-content max-content 1fr;
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

{{EmbedLiveSample("使用 max-content 调整网格列的大小", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关尺寸关键字：{{cssxref("min-content")}}、{{cssxref("fit-content")}}
- [CSS 盒子大小设置](/zh-CN/docs/Web/CSS/CSS_box_sizing)模块
