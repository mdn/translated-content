---
title: "`::-moz-range-progress` 擬似要素 (CSS)"
short-title: ::-moz-range-progress
slug: Web/CSS/Reference/Selectors/::-moz-range-progress
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-moz-range-progress`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、[Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)であり、{{HTMLElement("input")}} の `type="range"` 内でインジケーターがスライドするトラック（すなわち溝）の下部を表します。この部分は、つまみ（すなわち仮想ノブ）によって現在選択されている値よりも小さい値に対応しています。

> [!NOTE]
> `::-moz-range-progress` を `<input type="range">` 以外の要素で使用しても、一致する要素がなく、何の効果もありません。

## 構文

```css
::-moz-range-progress {
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
input[type="range"]::-moz-range-progress {
  background-color: green;
  height: 1em;
}
```

### 結果

{{EmbedLiveSample("Examples", 300, 50)}}

このスタイルを使用した進捗バーは、次のような感じになるでしょう。

![進捗バーは、つまみの左側に太い緑色の四角形があり、右側には細い灰色の線があります。つまみは、緑色の領域の高さと同じ直径を持つ円です。](screen_shot_2015-12-04_at_20.14.48.png)

## 仕様書

どの仕様書にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Gecko が範囲入力の他の部分にスタイルを適用するために使用する擬似要素
  - {{cssxref("::-moz-range-thumb")}} は、溝の中をスライドするインジケーターを表します。
  - {{cssxref("::-moz-range-track")}} は、つまみがスライドする溝を表します。

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
