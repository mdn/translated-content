---
title: 使用多重背景
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

你可以為元素套用**多重背景**。這些背景會層層相疊，你提供的第一個背景在最上層，而最後列出的背景在最底層。只有最後一個背景可以包含背景顏色。

多重背景以逗號分隔的列表指定，例如 `background: background1, background2, ...;`。這個語法被簡寫屬性 {{cssxref("background")}} 和其除了 {{cssxref("background-color")}} 以外的個別屬性所接受：{{cssxref("background-attachment")}}、{{cssxref("background-clip")}}、{{cssxref("background-image")}}、{{cssxref("background-origin")}}、{{cssxref("background-position")}}、{{cssxref("background-repeat")}}、{{cssxref("background-size")}}。

## 範例

在這個範例中，堆疊了三個背景：Firefox logo、一個泡泡的圖片，以及一個[線性漸層](/zh-TW/docs/Web/CSS/Reference/Values/gradient/linear-gradient)：

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image:
    url(firefox.png), url(bubbles.png),
    linear-gradient(to right, rgb(30 75 115 / 100%), rgb(255 255 255 / 0%));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### 結果

{{EmbedLiveSample('範例','600','400')}}

如你所見，Firefox logo（在 {{ cssxref("background-image") }} 中第一個列出）在最上層，直接在泡泡圖形之上，接著是漸層（最後列出）在所有先前的「圖片」之下。每個後續的子屬性（{{ cssxref("background-repeat") }} 和 {{ cssxref("background-position") }}）會套用到對應的背景上。所以 {{ cssxref("background-repeat") }} 列出的第一個值會套用到第一個（最前面的）背景，以此類推。

## 參見

- [使用 CSS 漸層](/zh-TW/docs/Web/CSS/Guides/Images/Using_gradients)
- [CSS 背景與邊框](/zh-TW/docs/Web/CSS/Guides/Backgrounds_and_borders)模組
