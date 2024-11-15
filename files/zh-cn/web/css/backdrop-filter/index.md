---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
---

{{CSSRef}}

**`backdrop-filter`** [CSS](/zh-CN/docs/Web/CSS) 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素*背后*的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

```css
/* 关键词值 */
backdrop-filter: none;

/* 指向 SVG 滤镜的 URL */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> 滤镜函数值 */
/* 模糊背景，值越大越模糊 */
backdrop-filter: blur(2px);
/* 调整背景亮度，值越小越暗 */
backdrop-filter: brightness(60%);
/* 调整背景对比度，值越小对比度越低 */
backdrop-filter: contrast(40%);
/* 为背景添加阴影，参数分别为水平偏移、垂直偏移、模糊半径和阴影颜色 */
backdrop-filter: drop-shadow(4px 4px 10px blue);
/* 将背景转换为灰度图像，值越大越接近完全灰度 */
backdrop-filter: grayscale(30%);
/* 旋转背景色调，值为角度*/
backdrop-filter: hue-rotate(120deg);
/* 反转背景颜色，值越大反转程度越高 */
backdrop-filter: invert(70%);
/* 调整背景不透明度，值越小越透明 */
backdrop-filter: opacity(20%);
/* 将背景转换为棕褐色调，值越大越接近完全棕褐色 */
backdrop-filter: sepia(90%);
/* 调整背景饱和度，值越小饱和度越低 */
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
  background-image: url(https://picsum.photos/id/1080/6858/4574),
    linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
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
