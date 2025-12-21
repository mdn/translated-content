---
title: <generic-family>
slug: Web/CSS/Reference/Values/generic-family
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`<generic-family>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、 {{cssxref("font")}} 一括指定プロパティと {{cssxref("font-family")}} 個別指定プロパティで使用する一般的なフォントファミリーのキーワード値を表します。 `<generic-family>` はそのカテゴリーに属する 1 つ以上のローカルにインストールされたフォントを表します。

## 構文

### 値

`<generic-family>` は{{glossary("enumerated", "列挙")}}型で、下記の一覧の値のいずれかを使用して指定します：

- `serif`
  - : セリフとは、文字の大きなストロークの末端に付けられた小さな線またはストロークです。 セリフフォントでは、グリフには終端のストロークがあり、終端が広がったりさ規模沿ったりしています。例えば、明朝体、Lucida Bright、Lucida Fax、Palatino、Palatino Linotype、Palladio、URW Palladio などが挙げられます。

- `sans-serif`
  - : セリフのないフォントです。グリフのストロークの末端は平坦で、装飾はありません。 サンセリフフォントの例として、ゴシック体、Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L などが挙げられます。

- `monospace`
  - : すべてのグリフの幅は同じ固定幅です。 等幅フォントの例としては、Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console が挙げられます。

- `cursive`
  - : 筆記体フォントのグリフは一般的に筆記体やその他の手書きスタイルを使用しており、出力される組版よりも手書きのペンや筆書きに近い外観となります。CSSでは「筆記体」("cursive") という用語を、筆画が繋がっていないものも含むあらゆる手書き体のフォントに適用します。筆記体フォントの例としては、草書体、楷書体、Brush Script MT、Brush Script Std、Lucida Calligraphy、Lucida Handwriting、Apple Chancery などが挙げられます。

- `fantasy`
  - : ファンタジーフォントは、主に文字の遊び心のある表現を含む装飾的なフォントです。ファンタジーフォントの例には、Papyrus、Herculanum、Party LET、Curlz MT、Harrington、Comic Sans MS などがあります。

- `system-ui`
  - : グリフは指定されたプラットフォームの既定ユーザーインターフェイスフォントから採られます。タイポグラフィの伝統は世界中で大きく異なるため、この一般的なファミリーは、他にきれいに割り当てられなかった書体のために提供されています。
    > [!NOTE]
    > その名の通り、`system-ui`は UI 要素をネイティブアプリのように見せるためのものであり、長文のテキストを組版するためのものではありません。そのため、表示される書体が一部のユーザーにとって好ましくない場合があります。例えば、Windows のデフォルト CJK フォントは、ラテン文字の表示が不十分な場合があり、`lang` 属性が表示フォントに影響しないことがあります。OS によっては `system-ui` のカスタマイズが許可されていませんが、ブラウザーでは一般的に `sans-serif` フォントファミリーのカスタマイズが可能です。長文の段落には、代わりに `sans-serif` やそれ以外の非 UI フォントファミリーを使用してください。

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

- `fangsong`
  - : セリフ体の宋体と草書体の楷体の中間に位置する具体的な漢字スタイル設定。このスタイルは政府文書に多く用いられています。

## 形式文法

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | math | fangsong`)}}

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
