---
title: box-sizing
slug: Web/CSS/box-sizing
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

**`box-sizing`** [CSS](/zh-TW/docs/Web/CSS) 屬性設定如何計算元素的總寬度與高度。

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

在 [CSS 盒模型](/zh-TW/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)中，預設情況下，你為元素指定的 `width` 和 `height` 只應用於元素的內容區域。如果元素有邊框或內邊距，這些會加到 `width` 和 `height` 上，從而得出畫面上呈現的盒子大小。這意味著當你設定 `width` 和 `height` 時，必須調整你給的值以考慮邊框或內邊距。例如，如果你有四個設為 `width: 25%;` 的盒子，若其中任何一個有左右內邊距或左右邊框，預設情況下它們將無法在父容器的限制內排成一行。

`box-sizing` 屬性可用來調整此行為：

- `content-box` 是預設的 CSS 盒模型行為。如果你將元素的寬度設定為 100 像素，則元素的內容框將是 100 像素寬，任何邊框或內邊距的寬度將加到最終的呈現寬度上，使元素寬度超過 100 像素。
- `border-box` 告訴瀏覽器將任何邊框和內邊距計算在元素的寬度和高度內。如果你將元素的寬度設定為 100 像素，則這 100 像素將包括任何添加的邊框或內邊距，內容框會縮小以吸收這些額外的寬度。這通常使元素的尺寸調整變得更加容易。

  `box-sizing: border-box` 是瀏覽器對 {{htmlelement("table")}}、{{htmlelement("select")}}、{{htmlelement("button")}} 元素，以及對 `{{htmlelement("input/radio", "radio")}}`、`{{htmlelement("input/checkbox", "checkbox")}}`、`{{htmlelement("input/reset", "reset")}}`、`{{htmlelement("input/button", "button")}}`、`{{htmlelement("input/submit", "submit")}}`、`{{htmlelement("input/color", "color")}}` 或 `{{htmlelement("input/search", "search")}}` 類型的 {{htmlelement("input")}} 元素所使用的預設樣式。

> [!NOTE]
> 將 `box-sizing` 設為 `border-box` 通常對元素佈局非常有用。這可以讓元素尺寸處理更容易，並消除許多在佈局內容時可能遇到的問題。然而，當使用 `position: relative` 或 `position: absolute` 時，使用 `box-sizing: content-box` 可以使定位值與內容相關，並獨立於邊框和內邊距尺寸的變化，這在某些情況下可能是理想的。

## 語法

```css
box-sizing: border-box;
box-sizing: content-box;

/* 全域值 */
box-sizing: inherit;
box-sizing: initial;
box-sizing: revert;
box-sizing: revert-layer;
box-sizing: unset;
```

`box-sizing` 屬性是從以下值列表中選擇的單一關鍵字。

### 值

- `content-box`

  - : 這是 CSS 標準指定的初始值和預設值。{{Cssxref("width")}} 和 {{Cssxref("height")}} 屬性包含內容，但不包括內邊距、邊框或外邊距。例如，`.box {width: 350px; border: 10px solid black;}` 會呈現寬度為 370px 的盒子。

    此時，元素的尺寸計算為：_寬度 = 內容的寬度_，_高度 = 內容的高度_。（邊框和內邊距不包括在計算中。）

- `border-box`

  - : {{Cssxref("width")}} 和 {{Cssxref("height")}} 屬性包含內容、內邊距和邊框，但不包括外邊距。請注意，內邊距和邊框會在盒子內。例如，`.box {width: 350px; border: 10px solid black;}` 會呈現寬度為 350px 的盒子，其中內容區域的寬度為 330px。內容框的寬度不能為負數，最小值為 0，因此無法使用 `border-box` 使元素消失。

    此時，元素的尺寸計算為：_寬度 = 邊框 + 內邊距 + 內容的寬度_，_高度 = 邊框 + 內邊距 + 內容的高度_。

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 使用 content-box 和 border-box 的盒子尺寸

此範例展示了不同的 `box-sizing` 值如何改變兩個其他條件相同的元素的呈現尺寸。

#### HTML

```html
<div class="content-box">Content box</div>
<br />
<div class="border-box">Border box</div>
```

#### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* 總寬度: 160px + (2 * 20px) + (2 * 8px) = 216px
     總高度: 80px + (2 * 20px) + (2 * 8px) = 136px
     內容框寬度: 160px
     內容框高度: 80px */
}

.border-box {
  box-sizing: border-box;
  /* 總寬度: 160px
     總高度: 80px
     內容框寬度: 160px - (2 * 20px) - (2 * 8px) = 104px
     內容框高度: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

#### 結果

{{EmbedLiveSample('Box_sizes_with_content-box_and_border-box', "使用 content-box 和 border-box 的盒子尺寸", 'auto', 300)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [CSS 盒模型](/zh-TW/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
