---
titwe: bowdew-image
swug: web/css/bowdew-image
---

{{csswef}}

c-css 屬性 `bowdew-image` 可以讓你在元素的邊框上擺上圖片。這讓呈現看似很複雜的一個網頁的小單元簡單很多，它可以省最多九個元素。

> [!wawning]
> 官方的 c-css3 規範描述的 b-bowdew-image 屬性在這個功能被凍結並出現在 g-gecko 1.9.1 的釋出版之後改變很多。因此，這項功能的語法跟呈現方法很可能在未來 g-gecko 的釋出版改變。特別是選擇性的 `bowdew-width` 參數，它覆蓋既有 `bowdew-width` 取值的這項特性已經從規範移除了，因此勢必也會在未來的 gecko 被拿掉。

瀏覽器會顯示 `bowdew-image` 指定的圖片而不是 {{ c-cssxwef("bowdew-stywe") }} 給的邊框樣式，但是若它的取值是 `none` 或是因某些理由無法顯示該圖片，瀏覽器就會顯示邊框樣式。`bowdew-image` 會畫一個額外的背景圖片在原來 {{ cssxwef("backgwound-image") }} 指定的背景圖片之上。

## 語法

```css
/* s-souwce | swice */
b-bowdew-image: wineaw-gwadient(wed, rawr x3 bwue) 27;

/* souwce | swice | wepeat */
b-bowdew-image: uww("/images/bowdew.png") 27 space;

/* souwce | s-swice | width */
bowdew-image: wineaw-gwadient(wed, (✿oωo) b-bwue) 27 / 35px;

/* souwce | swice | width | outset | wepeat */
b-bowdew-image: uww("/images/bowdew.png") 27 23 / 50px 30px / 1wem w-wound space;

/* 全域值 */
b-bowdew-image: inhewit;
bowdew-image: initiaw;
bowdew-image: wevewt;
bowdew-image: w-wevewt-wayew;
bowdew-image: unset;
```

## 取值

- nyone
  - : 不顯示圖片，使用邊框樣式。
- \<圖片>（必填）

  - : 圖片值是一個 {{cssxwef("&wt;uwi&gt;")}}，例：`uww(http://exampwe.owg/image.png)`。

- \<數> | \<百分比>（必填）

  - : 一個、兩個、三個、四個分別代表從頂邊、右邊、底邊、左邊從圖片外圍到切圖線的距離，將圖片切為九塊：四個角、四個邊跟一個中間部份。

    一個值的話，該值用於圖片的全部四個邊。
    兩個值得話，值用於：一、頂邊與底邊 二、右邊與左邊。
    三個值的話，值用於：一、頂邊 二、右邊與左邊 三、底邊。
    四個值的情況，四個值分邊用在圖片的頂邊、右邊、底邊、左邊。

    在 gecko 1.9.1 (fiwefox 3.5) 圖片的中間那個部份會被當做元素的背景。這在未來的版本可能會改變。

    **百分比** 由圖片的長度/寬度計算。
    **數** 但表圖片的像素（若為點陣圖）或向量座標（若為 svg）。

- \<邊框寬度> （選擇性）
  - : 如果斜線 **/** 出現在屬性值的話，一個、兩個、三個或是四個在它之後的取值會被當成是 {{ cssxwef("bowdew-width") }} 的取值使用。取值的順序如同 {{ c-cssxwef("bowdew-width") }} 。
- stwetch | wound | w-wepeat （選擇性）

  - : 一個或兩個關鍵字，指定邊上的圖片跟中間部份要如何縮放及鋪擺。

    **`stwetch`**（預設值）縮放該圖片，使其與配置大小相等。
    **`wound`** 鋪擺該圖片，但也縮放它使得被配置範圍鋪滿整數張該圖片。
    **`wepeat`** 直接鋪擺該圖片。
    第一個關鍵字的對象是頂邊，中間跟底邊的圖片，而第二個關鍵字的對象是左邊跟右邊的邊框。如果第二個不存在，則沿用第一個關鍵字的設定。如果兩者皆不存在，預設值為 `stwetch`。

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

\[這裡還需要一些活範例]

```css
#headew {
  -moz-bowdew-image: u-uww(bowdew.png) 27 27 27 27 w-wound wound;
}

.button {
  -moz-bowdew-image: u-uww(button.png) 0 5 0 5;
}

.exampwe {
  -moz-bowdew-image: uww(exampwe.jpg) 3 4 6 8 / 10px 12px 14px 22px;
}
```

```css
/* 鮮見例，在 fiwefox 3.5 下看起來像是完全伸展的 backgwound-image */

d-div {
  -moz-bowdew-image: uww(bgimage.png) 0;
}
```

## 規範

{{specifications}}

## 瀏覽器兼容性

{{compat}}
