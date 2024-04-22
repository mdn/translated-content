---
title: "::-webkit-scrollbar"
slug: Web/CSS/::-webkit-scrollbar
---

{{CSSRef}}{{Non-standard_Header}}

`::-webkit-scrollbar` CSS 伪类元素会影响设置了 `overflow:scroll;` 的元素的滚动条样式。

> **备注：** 如果没有设置 `overflow:scroll;`，元素的滚动条将不会显示。

> **备注：** `::-webkit-scrollbar` 仅在基于 [Blink](https://www.chromium.org/blink) 或 [WebKit](https://webkit.org) 的浏览器（例如，Chrome、Edge、Opera、Safari、iOS 上所有的浏览器，以及[其他基于 WebKit 的浏览器](https://zh.wikipedia.org/wiki/网页浏览器列表#基於WebKit排版引擎)）上可用。滚动条样式的标准方法可用于 {{cssxref("scrollbar-color")}} 和 {{cssxref("scrollbar-width")}}。

## CSS 滚动条选择器

你可以使用以下伪元素选择器去修改基于 webkit 的浏览器的滚动条样式：

- `::-webkit-scrollbar`——整个滚动条。
- `::-webkit-scrollbar-button`——滚动条上的按钮（上下箭头）。
- `::-webkit-scrollbar-thumb`——滚动条上的滚动滑块。
- `::-webkit-scrollbar-track`——滚动条轨道。
- `::-webkit-scrollbar-track-piece`——滚动条没有滑块的轨道部分。
- `::-webkit-scrollbar-corner`——当同时有垂直滚动条和水平滚动条时交汇的部分。通常是浏览器窗口的右下角。
- `::-webkit-resizer`——出现在某些元素底角的可拖动调整大小的滑块。

## 示例

### CSS

```css
.visible-scrollbar,
.invisible-scrollbar,
.mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Demonstrate a "mostly customized" scrollbar
 * (won't be visible otherwise if width/height is specified) */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* or add it to the track */
}

/* Add a thumb */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
}
```

### HTML

```html
<div class="visible-scrollbar">
  Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla
  elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut
  dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis
  velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere
  est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam.
  Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus
  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus.
  Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor.
  Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis.
  Aliquam at enim ligula.
</div>

<div class="invisible-scrollbar">
  Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
</div>

<div class="mostly-customized-scrollbar">
  Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br />
  And pretty tall<br />
  thing with weird scrollbars.<br />
  Who thought scrollbars could be made weeeeird?
</div>
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- WebKit 论坛[设置滚动条样式](https://webkit.org/blog/363/styling-scrollbars/)
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
