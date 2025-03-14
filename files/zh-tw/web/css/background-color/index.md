---
title: background-color
slug: Web/CSS/background-color
---

{{CSSRef}}

**`background-color`** [CSS](/zh-TW/docs/Web/CSS) property 是用來設定 HTML 元素的背景顏色，值可以是顏色亦可以是特定關鍵字－－ `transparent`.

## 語法

```css
background-color: red;
background-color: rgb(255, 255, 128);
background-color: hsla(50, 33%, 25%, 0.75);
background-color: currentColor;
background-color: transparent;
background-color: #bbff00;

background-color: inherit;
```

### 參數

- `<color>`
  - : 一個 CSS {{cssxref("&lt;color&gt;")}} 用來表示一致的背景顏色。即便設定了一個或多個 {{cssxref("background-image")}} ，背景渲染上依舊會渲染這顏色，若是圖片並非不透明圖，在透明區域就能看見。在 CSS 中， `transparent` 是一種顏色

### 正式語法

{{csssyntax}}

## 範例

### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="examplethree">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css
.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### Result

{{EmbedLiveSample("範例","200","150")}}

## 規範

{{Specifications}}

{{cssinfo}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [複數背景](/zh-TW/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
