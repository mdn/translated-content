---
title: border-image
slug: Web/CSS/border-image
---

{{CSSRef}}

CSS 屬性 `border-image` 可以讓你在元素的邊框上擺上圖片。這讓呈現看似很複雜的一個網頁的小單元簡單很多，它可以省最多九個元素。

> **警告：** 官方的 CSS3 規範描述的 border-image 屬性在這個功能被凍結並出現在 Gecko 1.9.1 的釋出版之後改變很多。因此，這項功能的語法跟呈現方法很可能在未來 Gecko 的釋出版改變。特別是選擇性的 `border-width` 參數，它覆蓋既有 `border-width` 取值的這項特性已經從規範移除了，因此勢必也會在未來的 Gecko 被拿掉。

瀏覽器會顯示 `border-image` 指定的圖片而不是 {{ cssxref("border-style") }} 給的邊框樣式，但是若它的取值是 `none` 或是因某些理由無法顯示該圖片，瀏覽器就會顯示邊框樣式。`border-image` 會畫一個額外的背景圖片在原來 {{ cssxref("background-image") }} 指定的背景圖片之上。

- {{ Xref_cssinitial }}：{{ Cssxref("none") }}
- 對象：所有除了 {{cssxref("border-collapse")}} 是 `collapse` 的表格元素

- {{ Xref_cssinherited() }}：否
- 媒體：{{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}：任何 URI 變為絕對，任何 \<長度> 變為絕對，其他如同所指定

### 語法

```
none |
  [ <圖片> [ <數字> | <百分比> ]{1,4} [/ <邊框寬度>{1,4}]? ] && [ stretch | repeat | round ]{0,2}
```

### 取值

- none
  - : 不顯示圖片，使用邊框樣式。
- \<圖片>（必填）

  - : 圖片值是一個 {{cssxref("&lt;uri&gt;")}}，例：`url(http://example.org/image.png)`。

- \<數> | \<百分比>（必填）

  - : 一個、兩個、三個、四個分別代表從頂邊、右邊、底邊、左邊從圖片外圍到切圖線的距離，將圖片切為九塊：四個角、四個邊跟一個中間部份。

    一個值的話，該值用於圖片的全部四個邊。
    兩個值得話，值用於：一、頂邊與底邊 二、右邊與左邊。
    三個值的話，值用於：一、頂邊 二、右邊與左邊 三、底邊。
    四個值的情況，四個值分邊用在圖片的頂邊、右邊、底邊、左邊。

    在 Gecko 1.9.1 (Firefox 3.5) 圖片的中間那個部份會被當做元素的背景。這在未來的版本可能會改變。

    **百分比** 由圖片的長度/寬度計算。
    **數** 但表圖片的像素（若為點陣圖）或向量座標（若為 SVG）。

- \<邊框寬度> （選擇性）
  - : 如果斜線 **/** 出現在屬性值的話，一個、兩個、三個或是四個在它之後的取值會被當成是 {{ cssxref("border-width") }} 的取值使用。取值的順序如同 {{ cssxref("border-width") }} 。
- stretch | round | repeat （選擇性）

  - : 一個或兩個關鍵字，指定邊上的圖片跟中間部份要如何縮放及鋪擺。

    **`stretch`**（預設值）縮放該圖片，使其與配置大小相等。
    **`round`** 鋪擺該圖片，但也縮放它使得被配置範圍鋪滿整數張該圖片。
    **`repeat`** 直接鋪擺該圖片。
    第一個關鍵字的對象是頂邊，中間跟底邊的圖片，而第二個關鍵字的對象是左邊跟右邊的邊框。如果第二個不存在，則沿用第一個關鍵字的設定。如果兩者皆不存在，預設值為 `stretch`。

### 範例

\[這裡還需要一些活範例]

```
#header  { -moz-border-image: url(border.png) 27 27 27 27 round round; }

.button  { -moz-border-image: url(button.png) 0 5 0 5; }

.example { -moz-border-image: url(example.jpg) 3 4 6 8 / 10px 12px 14px 22px; }
```

```
/* 鮮見例，在 Firefox 3.5 下看起來像是完全伸展的 background-image */

 div     { -moz-border-image: url(bgimage.png) 0; }
```

### 規範

{{Specifications}}

### 瀏覽器兼容性

{{Compat}}
