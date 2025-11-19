---
title: 為替換元素設定樣式
slug: Web/CSS/Guides/Images/Replaced_element_properties
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

有些 [CSS](/zh-TW/docs/Web/CSS) 屬性適用於所有元素，有些只適用於網格和 flex 容器，還有一些只適用於可變形元素。本指南介紹只適用於*替換元素*的屬性。

[**替換元素**](/zh-TW/docs/Glossary/Replaced_elements)是一種其表示方式超出 CSS 範圍的元素；它們是表示方式獨立於 CSS 格式化模型的外部物件。一些替換元素，例如 {{HTMLElement("iframe")}} 元素，可能有自己的樣式表，但它們不會繼承父文件的樣式。

## 使用 CSS 處理替換元素

在某些情況下，CSS 會特別處理替換元素，例如在計算外距和一些 `auto` 值時。只有替換元素才能擁有{{glossary("intrinsic size", "固有尺寸")}}。一些（但非全部）替換元素具有固有尺寸或已定義的基線，某些 CSS 屬性（例如 {{cssxref("vertical-align")}}）會使用這些特性。

雖然文件樣式可以設定替換元素的大小和位置，但文件樣式不會影響替換元素的內容，但有一些例外：[CSS 圖片模組](/zh-TW/docs/Web/CSS/Guides/Images)包含了一些屬性，支援控制元素內容在其盒子內的定位。

## 控制內容框內的物件位置

CSS 圖片模組定義了兩個屬性，可用於指定替換元素中包含的物件應如何在其元素盒子區域內定位。`object-fit` 屬性用於調整物件大小，而 `object-position` 屬性則用於定位它們。

### `object-fit` 屬性

`object-fit` 屬性指定替換元素的內容物件應如何適配其容器元素的盒子。該屬性定義了圖片、視訊和其他可嵌入媒體格式如何回應替換元素內容框的高度和寬度。如果元素的高度、寬度或長寬比與將佔用為該元素保留空間的資源不同，`fill`、`contain`、`cover`、`scale-down` 和 `none` 值將定義瀏覽器應縮放資源、覆蓋分配的空間、將資產包含在空間內，還是允許資源變形。

當內容被包含或縮小時，盒子中未被替換元素覆蓋的任何區域都將顯示元素的背景。

`object-fit` 屬性對 {{HTMLElement("iframe")}}、{{HTMLElement("embed")}} 和 {{HTMLElement("fencedframe")}} 元素沒有影響。

![一張方形照片，顯示進步驕傲旗在煙囪附近飄揚。](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

如果我們將一張長寬比為 1:1 的方形圖片放入一個 100px x 300px 的盒子（長寬比為 1:3）中，預設情況下，圖片會填滿盒子並自身變形。我們可以使用 `object-fit` 屬性來定義當圖片被強制放入不同尺寸和長寬比的盒子中時應如何算繪：

```html hidden live-sample___example1 live-sample___example2
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="驕傲旗" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="驕傲旗" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="驕傲旗" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="驕傲旗" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="驕傲旗" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="驕傲旗" />
<p>
  <label><input type="checkbox" /> 變更尺寸</label>
</p>
```

```css hidden live-sample___example1 live-sample___example2
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  grid-auto-flow: column;
  max-width: 98%;
  margin: 10px auto 0;
}
img {
  width: 100px;
  height: 300px;
  outline: 2px solid purple;
}
body:has(:checked) img {
  width: 300px;
  height: 100px;
}
```

```css live-sample___example1 live-sample___example2
img:nth-of-type(1) {
  object-fit: fill;
}
img:nth-of-type(2) {
  object-fit: cover;
}
img:nth-of-type(3) {
  object-fit: contain;
}
img:nth-of-type(4) {
  object-fit: scale-down;
}
img:nth-of-type(5) {
  object-fit: none;
}
img:nth-of-type(6) {
  /* 沒有 object-fit 屬性 */
  outline: 2px dashed red;
}
```

{{EmbedLiveSample('example1','100%','650')}}

勾選核取方塊以設定高度和寬度值。請注意，只有 `fill` 值（預設值）會扭曲原始圖片。對於所有其他值，圖片的固有長寬比都會被保留。

### `object-position` 屬性

`object-position` 屬性指定替換元素的內容物件在元素盒子內的對齊方式。

它通常與 {{cssxref("object-fit")}} 屬性結合使用，其值為 {{cssxref("position_value", "&lt;position&gt;")}}，與 {{cssxref("background-position")}} 使用的值類型相同。

```css live-sample___example2
img {
  object-position: bottom right;
}
```

{{EmbedLiveSample('example2','100%','650')}}

```html hidden live-sample___example3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="驕傲旗" />
```

它可以在沒有 `object-fit` 的情況下使用。在這種情況下，圖片會以其固有尺寸（218px x 218px）算繪，圖片內容的位置由 `object-position` 值設定。

```css hidden live-sample___example3
img {
  margin: 10px 0 0 10px;
}
```

```css live-sample___example3
img {
  outline: 2px solid;
  object-position: 114px 72px;
}
```

{{EmbedLiveSample('example3','100%','250')}}

`object-position` 屬性對 `<iframe>`、`<video>` 和 `<embed>` 元素的作用與對 `<img>` 的作用一樣好。

## 參見

- [理解長寬比](/zh-TW/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [CSS 圖片](/zh-TW/docs/Web/CSS/Guides/Images)模組
- [CSS display](/zh-TW/docs/Web/CSS/Guides/Display) 模組
- [CSS 背景與邊框](/zh-TW/docs/Web/CSS/Guides/Backgrounds_and_borders) 模組
