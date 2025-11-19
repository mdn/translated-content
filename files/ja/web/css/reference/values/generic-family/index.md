---
title: <generic-family>
slug: Web/CSS/Reference/Values/generic-family
original_slug: Web/CSS/generic-family
l10n:
  sourceCommit: bdcace5df2a9bfcb6b83d16762749a0ef769cdb8
---

**`<generic-family>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、 {{cssxref("font")}} 一括指定プロパティと {{cssxref("font-family")}} 個別指定プロパティで使用する一般的なフォントファミリーのキーワード値を表します。 `<generic-family>` はそのカテゴリーに属する 1 つ以上のローカルにインストールされたフォントを表します。

## 構文

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## 値

`<generic-family>` は{{glossary("enumerated", "列挙")}}型で、下記の一覧の値のいずれかを使用して指定します：

- `serif`
  - : セリフは文字の大きなストロークの終わりに付けられた小さな行またはストロークです。 セリフフォントでは、グリフには仕上げのストロークがあり、終わりはフレア状または先細り状になっています。例えば、 Lucida Bright、Lucida Fax、Palatino、Palatino Linotype、Palladio、URW Palladio、明朝体などが挙げられます。

- `sans-serif`
  - : セリフのないフォントです。グリフのストロークの終わりは平坦で、装飾はありません。 サンセリフフォントの例として、Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L、ゴシック体などが挙げられます。

- `monospace`
  - : すべてのグリフの幅は同じ固定幅です。 等幅フォントの例としては、Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console が挙げられます。

- `cursive`
  - : 筆記体フォントのグリフは一般的に、結合ストロークや イタリック体以上の他の筆記体の特徴を有しています。筆記体フォントの例としてあh、 Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery が挙げられます。

- `fantasy`
  - : ファンタジーフォントは、主に文字の遊び心のある表現を含む装飾的なフォントです。ファンタジーフォントの例には、Papyrus、Herculanum、Party LET、Curlz MT、Harrington などがあります。

- `system-ui`
  - : グリフは指定されたプラットフォームの既定ユーザーインターフェイスフォントから採られます。タイポグラフィの伝統は世界中で大きく異なるため、この一般的なファミリーは、他にきれいに割り当てられなかった書体のために提供されています。

- `ui-serif`
  - : ユーザーインターフェイスの既定のセリフフォント。上記の `serif` の定義を参照してください。

- `ui-sans-serif`
  - : ユーザーインターフェイスの既定のサンセリフフォント。上記の `sans-serif` の定義を参照してください。

- `ui-monospace`
  - : ユーザーインターフェイスの既定の等幅フォント。上記の `monospace` の定義を参照してください。

- `ui-rounded`
  - : ユーザーインターフェイスの既定の丸まった特徴を持つフォント。

- `math`
  - : 数式を表示するためのフォント、例えば上付きや下付き、複数の行をまたぐ括弧、入れ子式、明確な意味を持つ二重打ちグリフなど。

- `emoji`
  - : 絵文字のレンダリングに特化したフォント。

- `fangsong`
  - : セリフ体の宋体と草書体の楷体の中間に位置する具体的な漢字スタイル設定。このスタイルは政府文書に多く用いられています。

## 例

この例では、 {{cssxref("font-family")}} プロパティの列挙値 `<generic-family>` のいくつかをデモしています。

### HTML

```html
<ul>
  <li class="serif">serif</li>
  <li class="sans-serif">sans-serif</li>
  <li class="monospace">monospace</li>
  <li class="cursive">cursive</li>
  <li class="fantasy">fantasy</li>
  <li class="system-ui">system-ui</li>
</ul>
```

### CSS

```css
ul {
  font-size: 1.5rem;
  line-height: 2;
}
.serif {
  font-family: serif;
}
.sans-serif {
  font-family: sans-serif;
}
.monospace {
  font-family: monospace;
}
.cursive {
  font-family: cursive;
}
.fantasy {
  font-family: fantasy;
}
.system-ui {
  font-family: system-ui;
}
```

### 結果

{{EmbedLiveSample("Examples", "500", "355")}}

## 仕様書

{{Specifications}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("font-family")}} と {{cssxref("font")}}
- [CSS フォントモジュール](/ja/docs/Web/CSS/Guides/Fonts)
