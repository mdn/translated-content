---
title: -webkit-text-stroke
slug: Web/CSS/Reference/Properties/-webkit-text-stroke
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**`-webkit-text-stroke`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキスト文字の輪郭線の[幅](/ja/docs/Web/CSS/Reference/Values/length)と[色](/ja/docs/Web/CSS/Reference/Values/color_value)を指定します。これは個別指定プロパティ {{cssxref("-webkit-text-stroke-width")}} および {{cssxref("-webkit-text-stroke-color")}} の一括指定プロパティです。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}

## 構文

```css
/* 幅と色の値 */
-webkit-text-stroke: 4px navy;

/* グローバル値 */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: revert;
-webkit-text-stroke: revert-layer;
-webkit-text-stroke: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 輪郭線の幅です。
- {{cssxref("&lt;color&gt;")}}
  - : 輪郭線の色です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストに赤い輪郭線を追加

#### HTML

```html
<p id="example">このテキストの輪郭線は赤です。</p>
```

#### CSS

```css
#example {
  font-size: 3em;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

#### 結果

{{EmbedLiveSample("Adding_a_red_text_stroke", 600, 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Introducing Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) - webkit.org (2006)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
