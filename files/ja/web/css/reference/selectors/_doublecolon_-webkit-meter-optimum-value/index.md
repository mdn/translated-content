---
title: "`::-webkit-meter-optimum-value` 擬似要素 (CSS)"
short-title: ::-webkit-meter-optimum-value
slug: Web/CSS/Reference/Selectors/::-webkit-meter-optimum-value
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-meter-optimum-value`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Glossary/Pseudo-element)で、{{htmlelement("meter")}} 要素の値が「低～高」の範囲内にある場合、またはその値が最適値と等しい場合に、その要素にスタイル設定を適用します。

デフォルトの色は緑色です。

## 構文

```css
::-webkit-meter-optimum-value {
  /* ... */
}
```

## 例

この例は、WebKit または Blink ベースのブラウザーでのみ動作します。

### HTML

```html
通常:
<meter min="0" max="10" low="3" high="7" optimum="6" value="6">
  スコア 6/10
</meter>
<br />
スタイル設定:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="6" value="6">
  スコア 6/10
</meter>
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

#styled::-webkit-meter-optimum-value {
  background: linear-gradient(
    to bottom,
    #77ff77,
    #009900 45%,
    #009900 55%,
    #77ff77
  );
  height: 100%;
  box-sizing: border-box;
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

{{ EmbedLiveSample('Examples', '100%', 50) }}

## 仕様書

どの仕様書にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

WebKit/Blink で {{htmlelement("meter")}} 要素のほかの部分にスタイル設定するために使用される擬似要素:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
