---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
l10n:
  sourceCommit: 4030a3382d2f2ee9a2aa6232c1fbb5724a27cc8b
---

{{CSSRef}}

**`backdrop-filter`** [CSS](/zh-CN/docs/Web/CSS) 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素*背后*的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

{{EmbedInteractiveExample("pages/css/backdrop-filter.html")}}

## 语法

```css
/* 关键词值 */
backdrop-filter: none;

/* 指向 SVG 滤镜的 URL */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> 值 */
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
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### 值

- `none`
  - : 没有应用于背景的滤镜。
- `<filter-value-list>`
  - : 以空格分隔的 {{cssxref("&lt;filter-function&gt;")}} 或是要应用到背景上的 [SVG 滤镜](/zh-CN/docs/Web/SVG/Element/filter)。CSS 的 `<filter-function>` 包括 {{CSSxRef("filter-function/blur", "blur()")}}、{{CSSxRef("filter-function/brightness", "brightness()")}}、{{CSSxRef("filter-function/contrast", "contrast()")}}、{{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}、{{CSSxRef("filter-function/grayscale", "grayscale()")}}、{{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}、{{CSSxRef("filter-function/invert", "invert()")}}、{{CSSxRef("filter-function/opacity", "opacity()")}}、{{CSSxRef("filter-function/saturate", "saturate()")}} 和 {{CSSxRef("filter-function/sepia", "sepia()")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### CSS

```css
.box {
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(10px);
}

body {
  background-image: url("anemones.jpg");
}
```

```css hidden
html,
body {
  height: 100%;
  width: 100%;
}

.container {
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.box {
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
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
- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("background-blend-mode")}}、{{cssxref("mix-blend-mode")}}
- [CSS 滤镜效果](/zh-CN/docs/Web/CSS/CSS_filter_effects)
- [CSS 合成与混合](/zh-CN/docs/Web/CSS/CSS_compositing_and_blending)
