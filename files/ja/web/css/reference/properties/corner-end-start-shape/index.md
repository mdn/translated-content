---
title: corner-end-start-shape
slug: Web/CSS/Reference/Properties/corner-end-start-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`corner-end-start-shape`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ボックスのブロック末尾、インライン先頭の角の {{cssxref("border-radius")}} 領域における形状を指定します。

全体的な角の形状の解説と複数の例については、{{cssxref("corner-shape")}} 一括指定プロパティページを参照してください。

## 構文

```css
/* キーワード値 */
corner-end-start-shape: round;
corner-end-start-shape: scoop;

/* superellipse() 関数値 */
corner-end-start-shape: superellipse(0.2);
corner-end-start-shape: superellipse(-5);

/* グローバル値 */
corner-end-start-shape: inherit;
corner-end-start-shape: initial;
corner-end-start-shape: revert;
corner-end-start-shape: revert-layer;
corner-end-start-shape: unset;
```

### 値

`corner-end-start-shape` プロパティは {{cssxref("&lt;corner-shape-value>")}} 値で指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

その他の関連する例は、{{cssxref("corner-shape")}} リファレンスページにあります。

### 基本的な `corner-end-start-shape` の使い方

#### HTML

この例のマークアップには、{{htmlelement("div")}} 要素が 1 つあります。

```html live-sample___basic-usage
<div></div>
```

#### CSS

ボックスにいくつかの基本的なスタイルを設定していますが、簡略化のため省略します。また、{{cssxref("box-shadow")}} と、`border-radius` を `60px / 20%` に、`corner-end-start-shape` を `bevel` に適用しています。

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 60px / 20%;
  corner-end-start-shape: bevel;
}
```

#### 結果

表示結果は次のようになります。

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("corner-shape")}} 一括指定プロパティ
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, {{cssxref("corner-bottom-left-shape")}}, {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("border-radius")}} 一括指定プロパティ
- {{cssxref("border-end-start-radius")}}
- [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュール
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
