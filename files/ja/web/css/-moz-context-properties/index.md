---
title: '-moz-context-properties'
slug: Web/CSS/-moz-context-properties
tags:
  - '-moz-context-properties'
  - CSS
  - CSS プロパティ
  - CSS:Mozilla 拡張
  - Experimental
  - Needs Privileges
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-moz-context-properties
translation_of: Web/CSS/-moz-context-properties
---
{{CSSRef}}{{Non-standard_header}}

**`-moz-context-properties`** プロパティは Firefox の特権モードで使用することができ、子に SVG 画像を持つ要素の指定されたプロパティの値を共有します。

ウェブページで (例えば {{htmlelement("img")}} 要素または背景画像として) SVG 画像を参照する場合、 SVG 画像は埋め込み要素 (そのコンテキスト) と協調して、画像が埋め込み要素に設定されたプロパティ値を採用することがあります。これを行うにためは、埋め込み要素は `-moz-context-properties` プロパティの値として画像に使用可能にするプロパティの一覧を示す必要があります。 `context-fill` 値などを使用して、これらのプロパティを使用するように画像に意思表示する必要があります。

## 構文

```css
/* キーワード値 */
-moz-context-properties: fill;
-moz-context-properties: fill, stroke;

/* グローバル値 */
-moz-context-properties: inherit;
-moz-context-properties: initial;
-moz-context-properties: unset;
```

### 値

- `fill`
  - : 画像に設定された `fill` の値を埋め込まれた SVG に伝えます。
- `stroke`
  - : 画像に設定された `stroke` の値を埋め込まれた SVG に伝えます。
- `fill-opacity`
  - : 画像に設定された `fill-opacity` の値を埋め込まれた SVG に伝えます。
- `stroke-opacity`
  - : 画像に設定された `stoke-opacity` の値を埋め込まれた SVG に伝えます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### SVG 画像への塗りつぶしとストロークの公開

この例では、 `<img>` 要素を使用して埋め込まれた簡単な SVG を使用します。

以下のように、最初に埋め込み SVG に伝えたい値のプロパティを `-moz-context-properties` プロパティで埋め込む要素に指定する必要があります。

```css
.img1 {
  width: 100px;
  height: 100px;
  -moz-context-properties: fill, stroke;
  fill: lime;
  stroke: purple;
}
```

これを行うと、次のように SVG 画像は {{SVGAttr("fill")}} および {{SVGAttr("stroke")}} の値を使用することができるようになります。

```html
<img class="img1" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'>
                       <rect width='100%' height='100%' stroke-width='30px'
                       fill='context-fill red' stroke='context-stroke' fill-opacity='0.5'/></svg>">
```

ここで、画像の `src` に単純な SVG 画像を含む data URI を設定しました。内部の `<rect>` は、 `<img>` 要素の {{SVGAttr("fill")}} および {{SVGAttr("stroke")}} から `fill` および `stroke` の値を取り、これらの値の `context-fill`/`context-stroke` キーワードに設定して、 fill には SVG が最上位ウィンドウに単独で読み込まれた場合 (コンテンツの値を提供するコンテキストの要素がない場合) に使われる代替色 (red) を設定します。なお、色が SVG に直接設定され、コンテキストの色も設定された場合、コンテキストの色は直接設定された色を上書きします。

> **Note:** [Github に動作するサンプル](https://mdn.github.io/css-examples/moz-context-properties/)があります。

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS の Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)
- [HTML での画像の使用](/ja/docs/Web/Media/images)
- [ウェブへのベクターグラフィックの追加](/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [画像としての SVG](/ja/docs/Web/SVG/SVG_as_an_Image)
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
