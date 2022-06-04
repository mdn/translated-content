---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
tags:
  - CSS
  - CSS Property
  - Graphics
  - Layout
  - NeedsContent
  - Reference
  - SVG
  - SVG Filter
  - Web
  - recipe:css-property
translation_of: Web/CSS/backdrop-filter
---
{{CSSRef}}

**`backdrop-filter`** [CSS](/zh-CN/docs/Web/CSS) 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素*背后*的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

```css
/* 关键词值 */
backdrop-filter: none;

/* 指向 SVG 滤镜的 URL */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> 滤镜函数值 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* 多重滤镜 */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* 全局值 */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: unset;
```

## 语法

### 值

- `none`
  - : 没有应用于背景的滤镜。
- `<filter-function-list>`
  - : 一个以空格分隔的滤镜函数（{{cssxref("&lt;filter-function&gt;")}}）或是要应用到背景上的 [SVG 滤镜](/zh-CN/docs/Web/SVG/Element/filter)。

## 形式化定义

{{cssinfo}}

## 形式化语法

{{csssyntax}}

## 示例

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
 -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url(https://picsum.photos/id/1080/6858/4574), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### 结果

{{EmbedLiveSample("示例", 600, 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("filter")}}
