---
title: background-attachment
slug: Web/CSS/background-attachment
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**`background-attachment`** [CSS](/zh-TW/docs/Web/CSS) 屬性設定背景圖片的位置是否固定在{{glossary("viewport", "視區")}}內，或者跟隨其包含區塊一起滑動。

{{EmbedInteractiveExample("pages/css/background-attachment.html")}}

## 語法

```css
/* 關鍵字值 */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* 全域值 */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: revert-layer;
background-attachment: unset;
```

`background-attachment` 屬性可設定為以下列舉的關鍵字值之一。

### 值

- `fixed`
  - : 背景相對於視區固定。即使元素有滑動機制，背景也不會跟著元素移動。
- `local`
  - : 背景相對於元素內容固定。如果元素有滑動機制，背景會跟隨元素內容一起滑動，且背景的繪製區域與定位區域是相對於元素的可滑動區域，而不是邊框。
- `scroll`
  - : 背景相對於元素本身固定，並且不會隨內容滑動。（它實際上是附加於元素邊框的。）

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 簡單範例

#### HTML

```html
<p>
  大廳四周都有門，但它們都被鎖住了；當愛麗絲走到一邊又走到另一邊，試著每一扇門時，她悲傷地走到中間，想知道她該如何再次出去。
</p>
```

#### CSS

```css
p {
  background-image: url("star-solid.gif");
  background-attachment: fixed;
}
```

#### 結果

{{EmbedLiveSample("簡單範例")}}

### 多重背景圖片

此屬性支援多個背景圖片。可以為每個背景指定不同的 `<attachment>`，以逗號分隔。每張圖片會與對應的 `<attachment>` 類型匹配，順序由先指定到後。

#### HTML

```html
<p>
  大廳四周都有門，但它們都被鎖住了；當愛麗絲走到一邊又走到另一邊，試著每一扇門時，她悲傷地走到中間，想知道她該如何再次出去。突然，她看到一張三條腿的小桌子，全是由實心玻璃製成的；桌上除了有一把小小的金鑰匙外，什麼也沒有。愛麗絲的第一個想法是這把鑰匙可能屬於大廳的某扇門，但可惜的是，不是鎖太大，就是鑰匙太小，總之它無法打開任何一扇門。然而，在第二次繞過大廳時，她發現了一個之前沒注意到的低矮窗簾，窗簾後面是一扇大約十五英寸高的小門。她試著將小金鑰匙插入鎖孔，令她非常高興的是，鑰匙正好合適！
</p>
```

#### CSS

```css
p {
  background-image: url("star-solid.gif"), url("star-transparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### 結果

{{EmbedLiveSample("多重背景圖片")}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用多重背景](/zh-TW/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
