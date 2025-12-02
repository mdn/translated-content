---
title: font-variant-alternates
slug: Web/CSS/Reference/Properties/font-variant-alternates
original_slug: Web/CSS/font-variant-alternates
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

**`font-variant-alternates`** は [CSS](/ja/docs/Web/CSS) のプロパティで、代替書体の使用を制御します。代替書体は {{cssxref("@font-feature-values")}} で定義された代替名で参照される可能性があります。

{{cssxref("@font-feature-values")}} アットルールを使って、与えられたフォントフェイスに対して、人間が読める名前と、特定の OpenType フォント機能を制御する数値インデックスを関連付けることができます。代替字体を選択する関数（`stylistic`、`styleset`、`character-variant`、`swash`、`ornament`、`annotation`）の場合、 `font-variant-alternates` プロパティで人間が読める名前を参照することで、関連する関数を適用することができます。

これにより、特定のフォントが字体を制御するために使っている特定のインデックス値を知らなくても、 CSS ルールで代替字体を有効にすることができます。

## 構文

```css
/* キーワード値 */
font-variant-alternates: normal;
font-variant-alternates: historical-forms;

/* 関数表記値 */
font-variant-alternates: stylistic(user-defined-ident);
font-variant-alternates: styleset(user-defined-ident);
font-variant-alternates: character-variant(user-defined-ident);
font-variant-alternates: swash(user-defined-ident);
font-variant-alternates: ornaments(user-defined-ident);
font-variant-alternates: annotation(user-defined-ident);
font-variant-alternates: swash(ident1) annotation(ident2);

/* グローバル値 */
font-variant-alternates: inherit;
font-variant-alternates: initial;
font-variant-alternates: revert;
font-variant-alternates: revert-layer;
font-variant-alternates: unset;
```

このプロパティは 2 つの形式のどちらかを取ります。

- キーワード `normal`
- または、その他の下記のキーワードおよび関数を空白区切り、順不同で 1 つ以上

### 値

- `normal`
  - : このキーワードは代替書体を無効にします。
- `historical-forms`
  - : このキーワードは歴史的形式 — 過去には一般的だったけれども今日そうではない書体を有効にします。 OpenType の `hist` の値に対応します。
- `stylistic()`
  - : この関数は、個々の文字に対して表現の変更を可能にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の `salt` の値に相当します (例: `salt 2`)。
- `styleset()`
  - : この関数は、一連の文字に対するスタイルの代替を可能にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の `ssXY` の値に相当します (例: `ss02`)。
- `character-variant()`
  - : この関数は、文字に対して特定のスタイルの選択肢を有効にします。 `styleset()` に似ていますが、一連の文字に対してまとまった書体を作成するわけではありませんので、個々の文字は独立した、整合が取れているとは限らないスタイルになります。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の `cvXY` の値に相当します (例: `cv02`)。
- `swash()`
  - : この関数は、[先端装飾](https://en.wikipedia.org/wiki/Swash_%28typography%29)書体を有効にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の `swsh` および `cswh` の値に相当します (例: `swsh 2` および `cswh 2`)。
- `ornaments()`
  - : この関数は、[フルーロン](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AB%E3%83%BC%E3%83%AD%E3%83%B3)およびその他の飾り書体などの装飾を有効にします。 OpenType の `ornm` の値に相当します (例: `ornm 2`)。

    > [!NOTE]
    > テキストの意味を保持するために、フォントデザイナーは、 Unicode のディングバット文字に一致しない装飾を、ビュレット文字 (U+2022) の装飾的な変種として含めるべきです。既存のフォントの中には、このアドバイスに従わないものもあるので注意が必要です。

- `annotation()`
  - : この関数は、丸数字や鏡文字などの注釈表記を有効にします。この函数は丸数字又は鏡文字などの表記を有効にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の `nalt` の値に相当します (例: `nalt 2`)。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### スワッシュ字体の有効化

こ の例では、 `@font-feature-values` アットルールを用いて、 [MonteCarlo](https://github.com/googlefonts/monte-carlo) フォントの `swash` 機能の名前を定義しています。このルールは、名前 "fancy" をインデックス値 1 に対応付けます。

そして、 `font-variant-alternates` の中でその名前を使えば、そのフォントのスワッシュをオンにすることができます。これは、 `font-feature-settings: "swsh" 1` のような行と等価です。ただし、この特性を適用する CSS は、この特定のフォントに必要なインデックス値を含む必要はありませんし、知る必要すらありません。

#### HTML

```html
<p>A Fancy Swash</p>
<p class="variant">A Fancy Swash</p>
```

#### CSS

```css
@font-face {
  font-family: MonteCarlo;
  src: url("montecarlo-regular.woff2");
}

@font-feature-values "MonteCarlo" {
  @swash {
    fancy: 1;
  }
}

p {
  font-family: "MonteCarlo";
  font-size: 3rem;
  margin: 0.7rem 3rem;
}

.variant {
  font-variant-alternates: swash(fancy);
}
```

### 結果

{{EmbedLiveSample("Enabling swash glyphs", 0, 230)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`font-variant`](/ja/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-variant-caps`](/ja/docs/Web/CSS/Reference/Properties/font-variant-caps)
- [`font-variant-east-asian`](/ja/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/ja/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-numeric`](/ja/docs/Web/CSS/Reference/Properties/font-variant-numeric)
- [`font-variant-position`](/ja/docs/Web/CSS/Reference/Properties/font-variant-position)
- [`@font-feature-values`](/ja/docs/Web/CSS/Reference/At-rules/@font-feature-values)
- [`font-feature-settings`](/ja/docs/Web/CSS/Reference/Properties/font-feature-settings)
