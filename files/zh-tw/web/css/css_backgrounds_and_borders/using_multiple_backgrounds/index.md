---
title: 使用 CSS 多重背景
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

藉由 [CSS3](/zh-TW/CSS/CSS3) 我們可以對元素使用 **多重背景**。每個設定的背景被一個個分層，第一個背景在最上面，最後一個背景是在最下面一層。 記得只有最後一個背景可以設定 background color。

簡易的表達方式:

```css
.myclass {
  background: background 1, //第一層
    background 2, ..., background N; //最後一層
}
```

可以使用縮寫的方式 {{ cssxref("background") }} 和個別標記的方式設定多重背景，但是部分屬性無法設置多重背景，例如 {{ cssxref("background-color") }}。下面是能設置為多重背景的背景屬性：

- {{ cssxref("background") }}
- {{ cssxref("background-attachment") }}
- {{ cssxref("background-clip") }}
- {{ cssxref("background-image") }}
- {{ cssxref("background-origin") }}
- {{ cssxref("background-position") }}
- {{ cssxref("background-repeat") }}
- {{ cssxref("background-size") }}

## 範例

下面的範例中，重疊三個背景：Firefox logo、[線性漸層](/zh-TW/CSS/linear-gradient)、一張泡泡的圖片

```css
.multi_bg_example {
  background-image: url(firefox.png), url(bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));

  background-repeat: no-repeat, no-repeat, no-repeat;

  background-position:
    bottom right,
    left,
    right;
}
```

```html hidden
<div class="multi_bg_example"></div>
```

```css hidden
.multi_bg_example {
  width: 100%;
  height: 400px;
  background:
    url(firefox.png),
    url(bubbles.png),
    -moz-linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
    -webkit-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
    -ms-linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
    linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
}
```

## 結果

{{EmbedLiveSample('範例','100%','400')}}

如你所見，Firefox logo（列表第一個選項）在最上面，接著是漸層。每個隨後的子屬性（{{ cssxref("background-repeat") }} 和 {{ cssxref("background-position") }}）應用相對的背景上。所以第一個 {{ cssxref("background-repeat") }} 的值應用在第一個（最前面）背景。

## 參見

- [使用 CSS 漸層](/zh-TW/docs/CSS/Using_CSS_gradients)
