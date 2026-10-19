---
title: "`::-webkit-meter-bar` 擬似要素 (CSS)"
short-title: ::-webkit-meter-bar
slug: Web/CSS/Reference/Selectors/::-webkit-meter-bar
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}{{deprecated_header}}

**`::-webkit-meter-bar`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Glossary/Pseudo-element)で、[WebKit 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions) であり、{{HTMLElement("meter")}} 要素の背景を表します。メーターゲージのコンテナーを選択し、スタイルを設定するために使用されます。

## 構文

```css
::-webkit-meter-bar {
  /* ... */
}
```

## 例

### HTML

```html
通常: <meter min="0" max="10" value="6">スコア 6/10</meter>
<br />
スタイル設定: &nbsp;&nbsp;<meter id="styled" min="0" max="10" value="6">
  スコア 6/10
</meter>
```

### CSS

```css hidden
meter {
  height: 30px;
  width: 200px;
  vertical-align: -0.8rem;
}
```

```css
.safari meter {
  /* Reset the default appearance for Safari only */
  /* .safari class is added via JavaScript */
  -webkit-appearance: none;
}

#styled::-webkit-meter-bar {
  background: lime;
  box-shadow: 0 10px 20px grey inset;
  border-radius: 10px;
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

- WebKit/Blink で {{htmlelement("meter")}} 要素のほかの部分にスタイル設定するために使用される擬似要素:
  - {{cssxref("::-webkit-meter-inner-element")}}
  - {{cssxref("::-webkit-meter-even-less-good-value")}}
  - {{cssxref("::-webkit-meter-optimum-value")}}
  - {{cssxref("::-webkit-meter-suboptimum-value")}}

- [WebKit CSS 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions)
