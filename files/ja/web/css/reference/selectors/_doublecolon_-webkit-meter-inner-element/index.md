---
title: "`::-webkit-meter-inner-element` 擬似要素 (CSS)"
short-title: ::-webkit-meter-inner-element
slug: Web/CSS/Reference/Selectors/::-webkit-meter-inner-element
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-meter-inner-element`** は WebKit 独自 の CSS 擬似要素であり、{{htmlelement("meter")}} 要素の外側のコンテナー要素を選択し、スタイルを適用するために使用されます。メーター要素を読み取り専用の状態で表示するための追加のマークアップです。

## 構文

```css
::-webkit-meter-inner-element {
  /* ... */
}
```

## 例

これは、WebKit および Blink ベースのブラウザー（Safari、Chrome、Chromium ベースの Edge など）でのみ動作します。

### HTML

```html
通常: <meter min="0" max="10" value="6">スコア 6/10</meter>
<br />
スタイル設定: <meter id="styled" min="0" max="10" value="6">スコア 6/10</meter>
```

### CSS

```css
body {
  font-family: monospace;
}

.safari meter {
  /* Reset the default appearance for Safari only */
  /* .safari class is added via JavaScript */
  -webkit-appearance: none;
}

#styled::-webkit-meter-inner-element {
  -webkit-appearance: inherit;
  box-sizing: inherit;
  border: 1px dashed #aaaaaa;
}
```

### JavaScript

```js
// Safari requires <meter> elements to have an `appearance` of `none` for custom styling
// using `::-webkit-meter-*` selectors, but `appearance: none` breaks rendering on Chrome.
// Therefore, we must check if the browser is Safari-based.

const isSafari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (isSafari) {
  document.body.classList.add("safari");
}
```

### 結果

{{ EmbedLiveSample('Examples') }}

## 仕様書

どの仕様書にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

WebKit/Blink で {{htmlelement("meter")}} 要素のほかの部分にスタイル設定するために使用される擬似要素:

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
