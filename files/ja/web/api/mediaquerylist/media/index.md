---
title: "MediaQueryList: media プロパティ"
short-title: media
slug: Web/API/MediaQueryList/media
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

**`media`** は {{DOMxRef("MediaQueryList")}} インターフェイスの読み取り専用プロパティであり、シリアライズされたメディアクエリーを表す文字列を返します。

### 値

文字列で、シリアライズされたメディアクエリーを表します。

## 例

この例では、 `(max-width: 600px)` のメディアクエリーを実行し、 `MediaQueryList` の `media` プロパティの結果の値を {{HTMLElement("span")}} の中に表示します。

### JavaScript

```js
let mql = window.matchMedia("(max-width: 600px)");

document.querySelector(".mq-value").innerText = mql.media;
```

この JavaScript コードは一致させるメディアクエリーを単に {{DOMxRef("Window.matchMedia", "matchMedia()")}} に渡してコンパイルし、それから `<span>` の {{DOMxRef("HTMLElement.innerText", "innerText")}} に {{DOMxRef("MediaQueryList.media", "media")}} プロパティの結果の値を設定します。

### HTML

```html
<span class="mq-value"></span>
```

シンプルな `<span>` は出力を受け取るためのものです。

```css hidden
.mq-value {
  font:
    18px arial,
    sans-serif;
  font-weight: bold;
  color: #88f;
  padding: 0.4em;
  border: 1px solid #dde;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", "60")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
