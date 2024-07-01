---
title: "::-moz-range-track"
slug: Web/CSS/::-moz-range-track
---

{{CSSRef}}{{Non-standard_header}}

**`::-moz-range-track`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、 `type="range"` の {{HTMLElement("input")}} でインジケーターがスライドする*トラック* (すなわち、溝) を表します。

> **メモ:** `::-moz-range-track` を `<input type="range">` 以外で使用すると、何にも一致せず、効果がありません。

## 構文

{{csssyntax}}

## 例

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-track {
  background-color: green;
}
```

### 結果

{{EmbedLiveSample("Examples", 300, 50)}}

このスタイルを使用するプログレスバーは、次のようになります。

![A range with the track green](screen_shot_2015-12-04_at_10.14.34.png)

## 仕様書

標準の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Gecko で使われる他の range 型の入力の他の部品をスタイル付けする擬似要素:

  - {{cssxref("::-moz-range-thumb")}} は溝をスライドするインジケーターを表します。
  - {{cssxref("::-moz-range-progress")}} はトラックの下の部分を表します。

- 他のブラウザーで使われる同様の擬似要素:

  - {{cssxref("::-webkit-slider-runnable-track")}} WebKit および Blink (Safari, Chrome, Opera) が対応している擬似要素
  - {{cssxref("::-ms-track")}} Internet Explorer および Edge が対応している擬似要素

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
