---
title: background-attachment
slug: Web/CSS/background-attachment
---

{{CSSRef}}

**`background-attachment`** 這個 [CSS](/zh-TW/docs/CSS) 屬性能夠設定，背景圖片的位置是否要固定在 {{glossary("viewport")}}（視圖）上，還是背景圖片會隨著它的 containing block（外層容器）一起滾動。

{{EmbedInteractiveExample("pages/css/background-attachment.html")}}

## 語法

```css
/* Keyword values */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Global values */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```

`background-attachment` 屬性的值，可以是下方清單中的其中之一。

### Values

- `fixed`
  - : 讓背景相對於 viewport（視圖）的移動是固定的。即便元素中的內容是可滾動的，背景也不會在滾動元素內容時跟著移動。(這個屬性與 {{cssxref("background-clip", "background-clip: text", "#text")}} 不相容。)
- `local`
  - : 讓背景相對於元素的內容是固定的，且背景在滾動元素的內容時會跟著移動。另外，背景的繪製與定位區域是相對於元素的可滾動區域，而不是包裹著它們的邊框。
- `scroll`
  - : 讓背景相對於元素本身是固定的，使背景在滾動元素的內容時不會跟著移動。（It is effectively attached to the element's border.）

### Formal syntax

{{csssyntax}}

## 例子

### Simple example

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when
  Alice had been all the way down one side and up the other, trying every
  door, she walked sadly down the middle, wondering how she was ever to
  get out again.
</p>
```

#### CSS

```css
p {
  background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif");
  background-attachment: fixed;
}
```

#### Result

{{EmbedLiveSample("Simple_example")}}

### Multiple background images

這個屬性支援多個背景圖片。你可以對每個背景設定不同的 `<attachment>`。每個背景圖片會依序對應在 `<attachment>` 設定的類型。

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when
  Alice had been all the way down one side and up the other, trying every
  door, she walked sadly down the middle, wondering how she was ever to
  get out again.

  Suddenly she came upon a little three-legged table, all made of solid
  glass; there was nothing on it except a tiny golden key, and Alice's
  first thought was that it might belong to one of the doors of the hall;
  but, alas! either the locks were too large, or the key was too small,
  but at any rate it would not open any of them. However, on the second
  time round, she came upon a low curtain she had not noticed before, and
  behind it was a little door about fifteen inches high: she tried the
  little golden key in the lock, and to her great delight it fitted!
</p>
```

#### CSS

```css
p {
  background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif"),
      url("https://mdn.mozillademos.org/files/12059/startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### Result

{{EmbedLiveSample("Multiple_background_images")}}

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- [Using multiple backgrounds](/zh-TW/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
