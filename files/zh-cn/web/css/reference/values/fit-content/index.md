---
title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

**`fit-content`** 关键字相当于 {{cssxref("fit-content_function", "fit-content(stretch)")}}。在实际应用中，这意味着盒子会使用可用空间，但绝不会超过 {{cssxref("max-content")}}。

当用作 {{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("min-width")}}、{{cssxref("min-height")}}、{{cssxref("max-width")}} 和 {{cssxref("max-height")}} 的布局盒子尺寸时，最大和最小尺寸指的是内容尺寸。

可以使用 {{cssxref("interpolate-size")}} 属性和 {{cssxref("calc-size()")}} 函数来启用由 `fit-content` 开始或结束的动画。

> [!NOTE]
> CSS 尺寸规范另外还定义了 {{cssxref("fit-content_function", "fit-content()")}} 函数。本页详细介绍了该关键字的用法。

## 语法

```css
width: fit-content;
block-size: fit-content;
```

## 示例

### 使用 fit-content 调整盒子大小

#### HTML

```html
<div class="container">
  <div class="item">项目</div>
  <div class="item">项目中包含更多文本。</div>
  <div class="item">
    项目中包含更多文本，希望我们已经添加了足够的文本，以便文本开始换行。
  </div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #ccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 结果

{{EmbedLiveSample("使用 fit-content 调整盒子大小", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关尺寸关键字：{{cssxref("min-content")}}、{{cssxref("max-content")}}
- [CSS 盒子大小设置](/zh-CN/docs/Web/CSS/Guides/Box_sizing)模块
