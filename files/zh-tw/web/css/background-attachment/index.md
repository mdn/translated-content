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

`background-attachment` 屬性可設定為以下列舉值之一。

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
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
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

{{EmbedLiveSample("Simple_example", "簡單範例")}}

### 多重背景圖片

此屬性支援多個背景圖片。可以為每個背景指定不同的 `<attachment>`，以逗號分隔。每張圖片會與對應的 `<attachment>` 類型匹配，順序由先指定到後。

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
  Suddenly she came upon a little three-legged table, all made of solid glass;
  there was nothing on it except a tiny golden key, and Alice's first thought
  was that it might belong to one of the doors of the hall; but, alas! either
  the locks were too large, or the key was too small, but at any rate it would
  not open any of them. However, on the second time round, she came upon a low
  curtain she had not noticed before, and behind it was a little door about
  fifteen inches high: she tried the little golden key in the lock, and to her
  great delight it fitted!
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

{{EmbedLiveSample("Multiple_background_images", "多重背景圖片")}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用多重背景](/zh-TW/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
