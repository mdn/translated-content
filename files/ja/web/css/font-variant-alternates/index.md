---
title: font-variant-alternates
slug: Web/CSS/font-variant-alternates
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.font-variant-alternates
translation_of: Web/CSS/font-variant-alternates
---
{{CSSRef}}

**`font-variant-alternates`** は CSS のプロパティで、代替書体の使用を制御します。代替書体は {{cssxref("@font-feature-values")}} で定義された代替名で参照される可能性があります。

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
font-variant-alternates: initial;
font-variant-alternates: inherit;
font-variant-alternates: revert;
font-variant-alternates: unset;
```

{{cssxref("@font-feature-values")}} アット規則は、代替書体関数 (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament`, `annotation`) の名前を定義し、その名前を OpenType の引数と関連付けることができます。このプロパティはスタイルシート内で ({{cssxref("@font-feature-values")}} で定義された) 人間が読める名前を利用できるようにします。

## 構文

このプロパティは二つの形式のうち一つを取ります。

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

    > **Note:** テキストの意味を保持するために、フォントデザイナーは、 Unicode のディングバット文字に一致しない装飾を、ビュレット文字 (U+2022) の装飾的な変種として含めるべきです。既存のフォントの中には、このアドバイスに従わないものもあるので注意が必要です。

- `annotation()`
  - : この関数は、丸数字や鏡文字などの注釈表記を有効にします。この函数は丸数字又は鏡文字などの表記を有効にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の `nalt` の値に相当します (例: `nalt 2`)。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<p>Firefox rocks!</p>
<p class="variant">Firefox rocks!</p>
```

### CSS

```css
@font-feature-values "Leitura Display Swashes" {
    @swash { fancy: 1 }
}

p {
  font-size: 1.5rem;
}

.variant {
  font-family: Leitura Display Swashes;
  font-variant-alternates: swash(fancy);
}
```

### 結果

> **Note:** この例を有効にするには、 OpenType フォントの _Leitura Display Swashes_ をインストールする必要があります。試験用途の無償版が、 [fontsgeek.com](https://fontsgeek.com/fonts/Leitura-Display-Swashes) などにあります。

{{ EmbedLiveSample('Examples', '', '', '', 'Web/CSS/font-variant-alternates') }}

## 仕様書

Not part of any standard.

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
