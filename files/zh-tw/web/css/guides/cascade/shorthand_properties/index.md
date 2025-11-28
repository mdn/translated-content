---
title: 簡寫屬性
slug: Web/CSS/Guides/Cascade/Shorthand_properties
---

***簡寫屬性***是一種可以同時設定許多其他 CSS 屬性值的 CSS 屬性。使用簡寫屬性，Web 開發者可以寫出更簡潔、且通常更具可讀性的樣式表，省時又省力。

CSS 規範中定義，特性簡寫用來組合作用於相同主題的常見性質。舉例來說，CSS {{cssxref("background")}} 這個性質是個特性簡寫，可同時定義 {{cssxref("background-color")}}、{{cssxref("background-image")}}、{{cssxref("background-repeat")}} 和 {{cssxref("background-position")}} 等屬性。同樣的，最常用的字體相關屬性，可以使用 {{cssxref("font")}} 來定義；圍繞在方塊周圍的邊界，則可簡單地以 {{cssxref("margin")}} 簡寫來定義。

## 需謹慎之處

即便特性簡寫非常易於使用，仍有幾個需要銘記在心的情況：

### 未指明屬性

未指明的值會被設為預設值。這聽起來真的很怪，但他的確會**覆寫**先前的設定值。比如：

```css
background-color: red;
background: url(images/bg.gif) no-repeat top right;
```

不會將背景設為紅色，而是使用 {{cssxref("background-color")}} 的預設值 `transparent`，由於較後面的規則為優先。

只有獨立的屬性可以被繼承。就如同遺失的值會被預設值取代一樣，不可能讓缺漏的值再去繼承個別屬性。關鍵字 `inherit` 可以用於屬性，但只能整體繼承，而不能用於個別值上。意思是，如果要繼承某個特定的值，就必須使用完整的語句，搭配 `inherit` 關鍵字。

### 屬性順序

簡寫屬性試著不強迫使用特定順序，在那些屬性有許多不同類型的值的狀況下的確很方便。但是在許多屬性具有類似值時就沒這麼簡單了，此時會以以下規則處理：

#### 區塊邊緣

關於區塊的簡寫性質，諸如 {{cssxref("border-style")}}、{{cssxref("margin")}} 或 {{cssxref("padding")}}，就會使用連貫的１～４個值來定義下列這些邊：

- _單值語法_：`border-width: 1em`——這個唯一的值定義所有四邊：

  ![區塊邊緣的單值語法](border1.png)

- _雙值語法_：`border-width: 1em 2em`——第一個值代表垂直部分，也就是上和下邊；第二個值則是指水平部分，也就是左右邊：

  ![區塊邊緣的雙值語法](border2.png)

- _三值語法_：`border-width: 1em 2em 3em`——第一個值代表上邊，第二個值代表兩旁的邊，而第三個值代表下邊：

  ![區塊邊緣的三值語法](border3.png)

- _四值語法_：`border-width: 1em 2em 3em 4em`——這四個值分別代表上、右、下、左邊，順時針的方向由上開始排列（可以以 trouble 來記憶，即英文首文字的縮寫 TRBL）：

  ![區塊邊緣的四值語法](border4.png)

#### 區塊角落

與之相似地，關於區塊角落的屬性，像是 {{cssxref("border-radius")}}，也會使用連貫的１～４個值來代表四個角落：

-_單值語法：_`border-radius: 1em`——這唯一的值代表了所有角落。

![區塊角落的單值語法](corner1.png)

- _雙值語法_：`border-radius: 1em 2em`——第一個值代表左上和右下，第二個值則是右上及左下角：

  ![區塊角落的雙值語法](corner2.png)

- _三值語法_：`border-radius: 1em 2em 3em`——第一個值代表左上，第二個值代表右上及左下，第三個值則是右下的角落：

  ![區塊角落的三值語法](corner3.png)

- _四值語法_：`border-radius: 1em 2em 3em 4em`——這四個值分別代表左上、右上、右下、左下，由左上開始的順時針排序：

  ![區塊角落的四值語法](corner4.png)

## 背景屬性

背景會有下列這些屬性:

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: top right;
```

可以簡寫為一句宣告：

```css
background: #000 url(images/bg.gif) no-repeat top right;
```

（寫成簡化屬性的效果，完全等同於上方未簡化的屬性，外加 `background-attachment: scroll` 及其他 CSS3 中額外增加的屬性。)

## 字體屬性

下列的宣告:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

可以簡寫成這樣：

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

簡化定義的效果完全等同於未簡化前的屬性效果，加上 `font-variant: normal`、`font-size-adjust: none` (CSS2.0 / CSS3) 及 `font-stretch: normal` (CSS3) 等屬性。

## 邊框屬性

邊框的寬度、顏色、樣式可以簡寫成一句宣告。舉例來說：

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

可以寫成：

```css
border: 1px solid #000;
```

## 邊界與內距屬性

margin 和 padding 的簡化版本大致相同。下列的 CSS 宣告:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

等同於下面的宣告（注意值的排序是順時鐘的順序：上、右、下、左（TRBL，可以「trouble」這個單字的諧音來記憶）

```css
margin: 10px 5px 10px 5px;
```

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
- {{cssxref("text-decoration")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-wrap")}}
- {{cssxref("transition")}}
- {{cssxref("view-timeline")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-border-before")}}
- {{cssxref("-webkit-mask-box-image")}}

## 參見

- [CSS 語法](/zh-TW/docs/Web/CSS/Guides/Syntax/Introduction)
