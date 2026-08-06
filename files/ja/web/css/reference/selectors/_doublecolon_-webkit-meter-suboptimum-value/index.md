---
title: "`::-webkit-meter-suboptimum-value` 擬似要素 (CSS)"
short-title: ::-webkit-meter-suboptimum-value
slug: Web/CSS/Reference/Selectors/::-webkit-meter-suboptimum-value
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-meter-suboptimum-value`** [擬似要素](/ja/docs/Glossary/Pseudo-element)は、{{htmlelement("meter")}} 要素の value 属性の値が低値～高値の範囲外であり、かつ最適値と等しくない場合にスタイルを適用します。

デフォルトの色は黄色です。

## 構文

```css
::-webkit-meter-suboptimum-value {
  /* ... */
}
```

## 例

この例は、WebKit または Blink ベースのブラウザーでのみ動作します。

### HTML

```html
通常:
<meter min="0" max="10" low="3" high="7" optimum="6" value="2">
  スコア 2/10
</meter>
<br />
スタイル設定:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="6" value="2">
  スコア 2/10
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

#styled::-webkit-meter-suboptimum-value {
  background: linear-gradient(
    to bottom,
    #ffff77,
    #999900 45%,
    #999900 55%,
    #ffff77
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
- {{cssxref("::-webkit-meter-optimum-value")}}
