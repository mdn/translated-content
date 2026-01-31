---
title: corner-top-shape
slug: Web/CSS/Reference/Properties/corner-top-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

**`corner-top-shape`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ボックスの下端の両方の角の {{cssxref("border-radius")}} 領域における形状を指定します。

全体的な角の形状の解説と複数の例については、{{cssxref("corner-shape")}} 一括指定プロパティページを参照してください。

## 構成要素のプロパティ

`corner-top-shape` プロパティは、以下の物理的プロパティの一括指定です。

- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}

## 構文

```css
/* 単一のキーワード値で両方の角を設定 */
corner-top-shape: notch;
corner-top-shape: squircle;

/* 単一の superellipse() 値で両方の角を設定 */
corner-top-shape: superellipse(3);
corner-top-shape: superellipse(-1.5);

/* 左端の角、右端の角 */
corner-top-shape: notch squircle;
corner-top-shape: notch superellipse(-1.5);

/* グローバル値 */
corner-top-shape: inherit;
corner-top-shape: initial;
corner-top-shape: revert;
corner-top-shape: revert-layer;
corner-top-shape: unset;
```

### 値

`corner-top-shape` プロパティは 1 つまたは 2 つの {{cssxref("&lt;corner-shape-value>")}} 値で指定します。

- **1 つの値**が使用された場合、**上端の両方**の角の形状を指定します。
- **2 つの値**が使用された場合、1 つ目は**左上**の角、2 つ目は**右上**の角の形状を指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

その他の関連する例は、{{cssxref("corner-shape")}} リファレンスページにあります。

### 基本的な `corner-top-shape` の使い方

#### HTML

この例のマークアップには、{{htmlelement("div")}} 要素が 1 つあります。

```html live-sample___basic-usage
<div></div>
```

#### CSS

ボックスにいくつかの基本的なスタイルを設定していますが、簡略化のため省略します。また、{{cssxref("box-shadow")}} と、`border-radius` を 60 ピクセルに、`corner-top-shape` を `scoop notch` に適用しています。

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
  border-radius: 60px;
  corner-top-shape: scoop notch;
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
- {{cssxref("corner-bottom-shape")}}, {{cssxref("corner-left-shape")}}, {{cssxref("corner-right-shape")}}
- {{cssxref("corner-block-start-shape")}}, {{cssxref("corner-block-end-shape")}}, {{cssxref("corner-inline-start-shape")}}, {{cssxref("corner-inline-end-shape")}}
- {{cssxref("border-radius")}} 一括指定プロパティ
- {{cssxref("border-top-left-radius")}} および {{cssxref("border-top-right-radius")}}
- [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュール
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
