---
title: clip
slug: Web/CSS/clip
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Deprecated_Header}}

> [!WARNING]
> 若有可能，建議作者使用較新的 {{cssxref("clip-path")}} 屬性來取代。

**`clip`** [CSS](/zh-TW/docs/Web/CSS) 屬性定義了元素的可見部分。`clip` 屬性僅適用於絕對定位的元素，即具有 {{cssxref("position","position:absolute")}} 或 {{cssxref("position","position:fixed")}} 的元素。

## 語法

```css
/* 關鍵字值 */
clip: auto;

/* <shape> 值 */
clip: rect(1px, 10em, 3rem, 2ch);

/* 全域值 */
clip: inherit;
clip: initial;
clip: revert;
clip: revert-layer;
clip: unset;
```

### 值

- {{cssxref("shape")}}

  - : 一個矩形 {{cssxref("shape")}}，格式為 `rect(<top>, <right>, <bottom>, <left>)`。`<top>` 和 `<bottom>` 值是從盒子*內部上邊框邊緣*的偏移，而 `<right>` 和 `<left>` 是從*內部左邊框邊緣*的偏移，即填充區域的範圍。

    `<top>`、`<right>`、`<bottom>` 和 `<left>` 的值可以是 {{cssxref("&lt;length&gt;")}} 或 `auto`。若任何邊的值為 `auto`，元素將會被裁切至該邊的*內部邊框邊緣*。

- `auto`
  - : 元素不裁切（預設值）。這不同於 `rect(auto, auto, auto, auto)`，後者裁切至元素的內部邊框邊緣。

## 形式定義

{{cssinfo}}

## 形式語法

{{csssyntax}}

## 範例

### 裁切圖像

```html
<p class="dotted-border">
  <img src="macarons.png" alt="原圖" />
  <img id="top-left" src="macarons.png" alt="圖像被剪裁到左上角" />
  <img id="middle" src="macarons.png" alt="圖像被剪裁到中間" />
  <img id="bottom-right" src="macarons.png" alt="圖像被剪裁到右下角" />
</p>
```

```css
.dotted-border {
  border: dotted;
  position: relative;
  width: 390px;
  height: 400px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 400px;
  clip: rect(0, 130px, 90px, 0);
}

#middle {
  left: 270px;
  clip: rect(100px, 260px, 190px, 130px);
}

#bottom-right {
  left: 140px;
  clip: rect(200px, 390px, 290px, 260px);
}
```

{{EmbedLiveSample('裁切圖像', '', '450px')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 此屬性已被棄用，請改用 {{cssxref("clip-path")}}。
- 相關的 CSS 屬性：
  - {{cssxref("text-overflow")}}
  - {{cssxref("white-space")}}
  - {{cssxref("overflow-x")}}
  - {{cssxref("overflow-y")}}
  - {{cssxref("overflow")}}
  - {{cssxref("display")}}
  - {{cssxref("position")}}
