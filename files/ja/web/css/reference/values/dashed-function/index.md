---
title: "<dashed-function>: CSS カスタム関数"
slug: Web/CSS/Reference/Values/dashed-function
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

{{SeeCompatTable}}

**`<dashed-function>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、[CSS カスタム関数](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)を呼び出す際に使用される、{{cssxref("@function")}} アットルールを使用して定義される構文を表します。

## 構文

`<dashed-function>` の値は、[`--function-name`](/ja/docs/Web/CSS/Reference/At-rules/@function#--function-name) に続いて、関数の引数を含む括弧で構成されます（`--my-function(30px, 3)` など）。

通常の CSS プロパティ値やプロパティ値の要素の代わりに `<dashed-function>` 値を含めることができます。これは、静的な値を指定するのではなく、関数の論理に基づいて値を動的に計算したい場合に使用します。

[カンマを含む値を引数](/ja/docs/Web/CSS/Reference/At-rules/@function#引数としてカンマを含んだ値を渡す)を渡したい場合は、中括弧 (`{ }`) で囲んで渡すことができます。

## 例

これ以外の例については、[CSS カスタム関数の使用](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)ガイドを参照してください。

### 基本的な `<dashed-function>` の使い方

この例は、渡された色の半透明バージョンを返す基本的な関数を示しています。

#### HTML

このマークアップには、テキストコンテンツを含む {{htmlelement("p")}} 要素があります。

```html live-sample___basic-example
<p>いくらかのコンテンツ</p>
```

#### CSS

このスタイルでは、まず CSS カスタム関数を定義しています。この関数は `--transparent` と呼ばれ、色と数値のアルファチャンネル値の 2 つの引数を受け取ります。関数の本体では、[相対色の構文](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)を使って、受け取った色を受け取ったアルファチャンネル値に等価なアルファチャンネルと共に [`oklch()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch) 色に変換します。これが関数の `result` となります。

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

次に、`--base-color` カスタムプロパティを `#faa6ff` の値で `:root` 要素に定義します。このプロパティを `<p>` 要素の {{cssxref("border")}} 色の値として指定し、さらにその {{cssxref("background-color")}} 値を同じ色の透明版に設定します。これは、`<dashed-function>` 構文により `--transparent()` 関数を指定し、引数として`var(--base-color)`と`0.8`を渡したものと同じものです。

```css hidden live-sample___basic-example
html,
body {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  place-items: center;
  font-family: system-ui;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    lightgrey 20px 40px
  );
}
```

```css live-sample___basic-example
:root {
  --base-color: #faa6ff;
}

p {
  width: 50%;
  padding: 30px;
  border-radius: 20px;
  border: 3px solid var(--base-color);
  background-color: --transparent(var(--base-color), 0.8);
}
```

#### 結果

{{ EmbedLiveSample('basic-example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("@function")}} アットルール
- [`type()`](/ja/docs/Web/CSS/Reference/Values/type) 関数
- [CSS カスタム関数の使用](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS カスタム関数とミックスイン](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins)モジュール
