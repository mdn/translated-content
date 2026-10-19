---
title: "`::-webkit-meter-even-less-good-value` 擬似要素 (CSS)"
short-title: ::-webkit-meter-even-less-good-value
slug: Web/CSS/Reference/Selectors/::-webkit-meter-even-less-good-value
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-meter-even-less-good-value`** は {{htmlelement("meter")}} 要素のうち、value 属性と optimum 属性の値が low-high の範囲外にあるものの、互いに反対側のゾーンにある場合にスタイルを適用します。具体的には、_value_ < _low_ < _high_ < _optimum_ または _value_ > _high_ > _low_ > _optimum_ の場合に適用されます。

デフォルトの色は赤です。

## 構文

```css
::-webkit-meter-even-less-good-value {
  /* ... */
}
```

## 例

### HTML

```html
通常:
<meter min="0" max="10" low="3" high="7" optimum="8" value="2">
  スコア 2/10
</meter>
<br />
スタイル設定:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="8" value="2">
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

#styled::-webkit-meter-even-less-good-value {
  background: linear-gradient(
    to bottom,
    #ff7777,
    #990000 45%,
    #990000 55%,
    #ff7777
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
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
