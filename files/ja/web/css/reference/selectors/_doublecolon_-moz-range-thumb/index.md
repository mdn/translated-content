---
title: "`::-moz-range-thumb` 擬似要素 (CSS)"
short-title: ::-moz-range-thumb
slug: Web/CSS/Reference/Selectors/::-moz-range-thumb
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-moz-range-thumb`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、[Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)であり、{{HTMLElement("input")}} の `type="range"` のつまみ（つまり、仮想ノブ）を表します。ユーザーは、入力フィールドのトラック上をつまみを移動させることで、その数値を変更することができます。

> [!NOTE]
> `::-moz-range-thumb` を `<input type="range">` 以外の要素で使用しても、一致する要素がなく、何の効果もありません。

## 構文

```css
::-moz-range-thumb {
  /* ... */
}
```

## 例

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-thumb {
  background-color: green;
}
```

### 結果

{{EmbedLiveSample("Examples", 300, 50)}}

このスタイルを使用した進捗バーは、次のような感じになるでしょう。

![緑色でスタイル設定された 'input type=right' のつまみ](screen_shot_2015-12-04_at_13.30.08.png)

## 仕様書

どの仕様書にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Gecko が範囲入力の他の部分にスタイルを適用するために使用する擬似要素
  - {{cssxref("::-moz-range-track")}} は、つまみがスライドする溝を表します。
  - {{cssxref("::-moz-range-progress")}} は、トラックの下部を表します。

- 他のブラウザーによる同様の擬似要素:
  - {{cssxref("::-webkit-slider-thumb")}} 擬似要素は WebKit および Blink (Safari, Chrome, Opera) で対応

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
