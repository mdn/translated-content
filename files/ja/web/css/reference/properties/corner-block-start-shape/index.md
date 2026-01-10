---
title: corner-block-start-shape
slug: Web/CSS/Reference/Properties/corner-block-start-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`corner-block-start-shape`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ボックスのブロック先頭にあるの両方の角の {{cssxref("border-radius")}} 領域における形状を指定します。

全体的な角の形状の解説と複数の例については、{{cssxref("corner-shape")}} 一括指定プロパティページを参照してください。

## 構成要素のプロパティ

`corner-block-start-shape` プロパティは、以下の論理的プロパティの一括指定です。

- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-start-end-shape")}}

## 構文

```css
/* 単一のキーワード値で両方の角を設定 */
corner-block-start-shape: notch;
corner-block-start-shape: squircle;

/* 単一の superellipse() 値で両方の角を設定 */
corner-block-start-shape: superellipse(2.7);
corner-block-start-shape: superellipse(-2.5);

/* ブロック先頭/インライン先頭の角、ブロック先頭/インライン末尾の角 */
corner-block-start-shape: notch squircle;
corner-block-start-shape: notch superellipse(-2.5);

/* グローバル値 */
corner-block-start-shape: inherit;
corner-block-start-shape: initial;
corner-block-start-shape: revert;
corner-block-start-shape: revert-layer;
corner-block-start-shape: unset;
```

### 値

`corner-block-end-shape` プロパティは 1 つまたは 2 つの {{cssxref("&lt;corner-shape-value>")}} 値で指定します。

- **1 つの値**が使用された場合、**ブロック先頭**の両方の角の形状を指定します。
- **2 つの値**が使用された場合、1 つ目は**ブロック先頭/インライン先頭**の角、2 つ目は**ブロック先頭/インライン末尾**の角の形状を指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

その他の関連する例は、{{cssxref("corner-shape")}} リファレンスページにあります。

### 基本的な `corner-block-start-shape` の使い方

#### HTML

この例のマークアップには、{{htmlelement("div")}} 要素が 1 つあります。

```html live-sample___basic-usage
<div></div>
```

#### CSS

ボックスにいくつかの基本的なスタイルを設定していますが、簡略化のため省略します。また、{{cssxref("box-shadow")}} と、`border-radius` を `40px 60px` に、`corner-block-start-shape` を `scoop square` に適用しています。

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
  background-color: goldenrod;
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
  border-radius: 40px 60px;
  corner-block-start-shape: scoop notch;
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
- {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-top-shape")}}, {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, {{cssxref("corner-right-shape")}}
- {{cssxref("border-radius")}} 一括指定プロパティ
- {{cssxref("border-start-start-radius")}} および {{cssxref("border-start-end-radius")}}
- [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュール
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
