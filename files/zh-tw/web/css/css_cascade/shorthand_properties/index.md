---
title: 簡寫屬性
slug: Web/CSS/CSS_cascade/Shorthand_properties
l10n:
  sourceCommit: 6cffcbc7e7bdb3ac43d03e8bbc5a73c868274b05
---

{{CSSRef}}

**_簡寫屬性_**是能讓你同時設定多個其他 CSS 屬性值的 CSS 屬性。使用簡寫屬性，你可以撰寫更簡潔（且通常更具可讀性）的樣式表，節省時間和精力。

CSS 規範定義了簡寫屬性，以將作用於相同主題的通用屬性定義分組。例如，CSS 的 {{cssxref("background")}} 屬性是一個簡寫屬性，能夠定義 {{cssxref("background-color")}}、{{cssxref("background-image")}}、{{cssxref("background-repeat")}} 和 {{cssxref("background-position")}} 的值。同樣地，最常見的字型相關屬性可以使用簡寫屬性 {{cssxref("font")}} 來定義，而盒周圍的不同外距則可以使用 {{cssxref("margin")}} 簡寫屬性來定義。

## 棘手的極端情況

使用簡寫屬性時，有幾個極端情況需要注意。

### 省略屬性

未指定的值會被設定為其初始值。這意味著它會**覆寫**先前設定的值。例如：

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

這不會將背景顏色設定為 `red`，而是會設定為 {{cssxref("background-color")}} 的預設值，也就是 `transparent`。

只有個別屬性的值可以繼承。由於遺漏的值會被其初始值取代，因此無法透過省略個別屬性來讓它們繼承。關鍵字 `inherit` 可以應用於一個屬性，但只能作為一個整體，不能作為某個值的關鍵字。這意味著，要讓某個特定值繼承的唯一方法，就是使用完整寫法屬性並搭配關鍵字 `inherit`。

### 屬性順序

簡寫屬性試圖不強制其所取代屬性的值有特定順序。當這些屬性使用不同類型的值時，這點運作得很好，因為順序不重要，但當多個屬性可以有相同的值時，這就不那麼容易了。

這裡有兩個重要的例子：

- 與盒邊緣相關的屬性，如 {{cssxref("border-style")}}、{{cssxref("margin")}} 或 {{cssxref("padding")}}
- 與盒角落相關的屬性，如 {{cssxref("border-radius")}}

#### 盒的邊緣

處理與盒邊緣相關屬性（如 {{cssxref("border-style")}}、{{cssxref("margin")}} 或 {{cssxref("padding")}}）的簡寫屬性，總是使用一致的一至四個值的語法來表示這些邊緣：

- **單值語法：** `border-width: 1em`——單一值代表所有邊緣：![使用單值語法的盒邊緣](border1.png)

- **雙值語法：** `border-width: 1em 2em`——第一個值代表垂直邊緣（即上、下邊緣），第二個值代表水平邊緣（即左、右邊緣）：![使用雙值語法的盒邊緣](border2.png)

- **三值語法：** `border-width: 1em 2em 3em`——第一個值代表上邊緣，第二個值代表水平邊緣（即左、右邊緣），第三個值代表下邊緣：![使用三值語法的盒邊緣](border3.png)

- **四值語法：** `border-width: 1em 2em 3em 4em`——四個值分別代表上、右、下、左邊緣，總是依照這個順序，也就是從頂部開始順時針：![使用四值語法的盒邊緣](border4.png) Top-Right-Bottom-Left 的首字母縮寫 TRBL，與英文單字 _trouble_ 的子音順序相符。你也可以把它記成時鐘指針旋轉的順序：`1em` 從 12 點鐘位置開始，接著 `2em` 在 3 點鐘位置，然後 `3em` 在 6 點鐘位置，最後 `4em` 在 9 點鐘位置。

#### 盒的角落

同樣地，處理與盒角落相關屬性（如 {{cssxref("border-radius")}}）的簡寫屬性，總是使用一致的一至四個值的語法來表示這些角落：

- **單值語法：** `border-radius: 1em`——單一值代表所有角落：![使用單值語法的盒角落](corner1.png)

- **雙值語法：** `border-radius: 1em 2em`——第一個值代表左上和右下角，第二個值代表右上和左下角：![使用雙值語法的盒角落](corner2.png)

- **三值語法：** `border-radius: 1em 2em 3em`——第一個值代表左上角，第二個值代表右上和左下角，第三個值代表右下角：![使用三值語法的盒角落](corner3.png)

- **四值語法：** `border-radius: 1em 2em 3em 4em`——四個值分別代表左上、右上、右下和左下角，總是依照這個順序，也就是從左上角開始順時針：![使用四值語法的盒角落](corner4.png)

## 背景屬性

考慮一個具有以下屬性的背景

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

這四個宣告可以縮短為一個：

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

（簡寫形式實際上相當於上述的完整寫法屬性，再加上 `background-attachment: scroll`，以及在 CSS3 中的一些額外屬性。）

參見 {{cssxref("background")}} 以獲得更詳細的資訊，包含 CSS3 屬性。

## 字型屬性

考慮以下宣告：

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

這 5 個陳述可以縮短為以下形式：

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

這個簡寫宣告實際上相當於上述的完整寫法宣告，再加上 `font-variant: normal`、`font-size-adjust: none` 和 `font-stretch: normal`。

## 邊框屬性

對於邊框，寬度、顏色和樣式可以簡化為一個宣告。例如，考慮以下 CSS：

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

它可以簡化為：

```css
border: 1px solid #000;
```

## 外距與內距屬性

外距和內距值的簡寫版本運作方式類似；`margin` 屬性允許使用一、二、三或四個值來指定簡寫值。考慮以下 CSS 宣告：

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

它們與使用四值簡寫的以下宣告相同。請注意，值的順序是順時針，從頂部開始：上、右、下、左（TRBL，即英文單字 "trouble" 中的子音）。

```css
margin: 10px 5px 10px 5px;
```

外距簡寫對於一、二、三和四個值的宣告規則如下：

- 當指定**一個**值時，它會將相同的外距應用於**全部四個邊**。
- 當指定**兩個**值時，第一個外距應用於**上和下**，第二個應用於**左和右**。
- 當指定**三個**值時，第一個外距應用於**上**，第二個應用於**左和右**，第三個應用於**下**。
- 當指定**四個**值時，外距會依序應用於**上**、**右**、**下**和**左**（順時針）。

## 定位屬性

對於定位，`top`、`right`、`bottom` 和 `left` 的簡寫版本可以簡化為一個宣告。例如，考慮以下 CSS：

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

它可以簡化為：

```css
inset: 0 20px 0 20px;
```

就像外距和內距一樣，`inset` 的值也是順時針排序——上、右、下、左（TRBL）。

## 通用簡寫屬性

CSS 提供了一個通用簡寫屬性 {{cssxref("all")}}，它會將其值應用於文件中的每個屬性。其目的是改變屬性的繼承模型。

關於 CSS 中繼承如何運作的更多資訊，請參見[處理衝突](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)或 [CSS 層疊簡介](/zh-TW/docs/Web/CSS/CSS_cascade/Cascade)。

## 簡寫屬性

- {{cssxref("all")}}
- {{cssxref("animation")}}
- {{cssxref("animation-range")}}
- {{cssxref("background")}}
- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-color")}}
- {{cssxref("border-image")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-left")}}
- {{cssxref("border-radius")}}
- {{cssxref("border-right")}}
- {{cssxref("border-style")}}
- {{cssxref("border-top")}}
- {{cssxref("border-width")}}
- {{cssxref("column-rule")}}
- {{cssxref("columns")}}
- {{cssxref("contain-intrinsic-size")}}
- {{cssxref("container")}}
- {{cssxref("flex")}}
- {{cssxref("flex-flow")}}
- {{cssxref("font")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("gap")}}
- {{cssxref("grid")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-template")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-inline")}}
- {{cssxref("list-style")}}
- {{cssxref("margin")}}
- {{cssxref("margin-block")}}
- {{cssxref("margin-inline")}}
- {{cssxref("mask")}}
- {{cssxref("mask-border")}}
- {{cssxref("offset")}}
- {{cssxref("outline")}}
- {{cssxref("overflow")}}
- {{cssxref("overscroll-behavior")}}
- {{cssxref("padding")}}
- {{cssxref("padding-block")}}
- {{cssxref("padding-inline")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("position-try")}}
- {{cssxref("scroll-margin")}}
- {{cssxref("scroll-margin-block")}}
- {{cssxref("scroll-margin-inline")}}
- {{cssxref("scroll-padding")}}
- {{cssxref("scroll-padding-block")}}
- {{cssxref("scroll-padding-inline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("text-box")}}
- {{cssxref("text-decoration")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-wrap")}}
- {{cssxref("transition")}}
- {{cssxref("view-timeline")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-border-before")}}
- {{cssxref("-webkit-mask-box-image")}}

## 參見

- [CSS 語法](/zh-TW/docs/Web/CSS/CSS_syntax/Syntax)
- [At 規則](/zh-TW/docs/Web/CSS/CSS_syntax/At-rule)
- [權重](/zh-TW/docs/Web/CSS/CSS_cascade/Specificity)
- [繼承](/zh-TW/docs/Web/CSS/CSS_cascade/Inheritance)
- [CSS 層疊簡介](/zh-TW/docs/Web/CSS/CSS_cascade/Cascade)
- [學習：處理衝突](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [學習：層疊層](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS 層疊與繼承](/zh-TW/docs/Web/CSS/CSS_cascade)模組
- [視覺化格式模型](/zh-TW/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [初始](/zh-TW/docs/Web/CSS/CSS_cascade/Value_processing#初始值)、[計算](/zh-TW/docs/Web/CSS/CSS_cascade/Value_processing#計算值)、[應用](/zh-TW/docs/Web/CSS/CSS_cascade/Value_processing#應用值)和[實際](/zh-TW/docs/Web/CSS/CSS_cascade/Value_processing#實際值)值
- [值定義語法](/zh-TW/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
