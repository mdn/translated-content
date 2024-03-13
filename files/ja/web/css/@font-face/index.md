---
title: "@font-face"
slug: Web/CSS/@font-face
---

{{CSSRef}}

**`@font-face`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、テキストを表示するための独自フォントを指定します。フォントはリモートサーバーまたはユーザー自身のコンピューターにローカルにインストールされたフォントのどちらかから読み込むことができます。

## 構文

```css
@font-face {
  font-family: "Open Sans";
  src:
    url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

### 記述子

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : フォントのアセンダーの寸法を定義します。
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : フォントのディセンダーの寸法を定義します。
- {{cssxref("@font-face/font-display", "font-display")}}
  - : フォントのダウンロードおよび準備状況に応じて、どのようにフォントフェイスを表示するかを特定します。
- {{cssxref("@font-face/font-family", "font-family")}}
  - : font プロパティのフォントフェイス値で使われる名前を指定します。
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : {{cssxref("font-stretch")}} 値です。 font-face で対応する範囲を指定するために、 `font-stretch: 50% 200%;` のように 2 つの値を受け付けます。
- {{cssxref("@font-face/font-style", "font-style")}}
  - : {{cssxref("font-style")}} 値です。 font-face で対応する範囲を指定するために、 `font-style: oblique 20deg 50deg;` のように 2 つの値を受け付けます。
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : {{cssxref("font-weight")}} 値です。 font-face で対応する範囲を指定するために、 `font-weight: 100 400;` のように 2 つの値を受け付けます。
- {{cssxref("@font-face/font-variant", "font-variant")}}
  - : {{cssxref("font-variant")}} 値です。
- {{cssxref("font-feature-settings", "font-feature-settings")}}
  - : OpenType フォントで高度な印刷機能を制御することができるようにします。
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : OpenType または TrueType フォントの種類を低レベルで制御するために、変化形の特徴を表す 4 文字の軸名を、種類の値と共に指定します。
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : フォントの行間の寸法を定義します。
- {{cssxref("@font-face/size-adjust", "size-adjust")}}{{experimental_inline}}
  - : このフォントに関連するグリフのアウトラインとメトリックの倍率を定義します。これにより、同じフォントサイズでレンダリングしたときに、さまざまなフォントのデザインを調和させることが容易になります。
- {{cssxref("@font-face/src", "src")}}

  - : フォントデータを含むリソースを指定します。これでリモートのフォントファイルの位置又はユーザーのコンピューターのフォント名を指定することができます。

    ブラウザーにフォントのリソースがどの形式であるかのヒントを提供するために — それで最適なものを選択できます — `format()` 関数の中に形式を含めることができます。

    ```css
    src:
      url(ideal-sans-serif.woff) format("woff"),
      url(basic-sans-serif.ttf) format("truetype");
    ```

利用可能な形式は、`"woff"`, `"woff2"`, `"truetype"`, `"opentype"`, `"embedded-opentype"`, `"svg"` です。

- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : フォントで使用される Unicode コードポイントの範囲です。

## 解説

`local()` 関数が与えられると、ユーザーのコンピューターで探すフォント名を指定し、{{Glossary("user agent", "ユーザーエージェント")}}がそれを見つけることができれば、そのローカルフォントを使用します。そうでなければ、 `url()` 関数を使用して指定されたフォントリソースをダウンロードして使用します。

`@font-face` で独自のフォントを提供できるようになることで、 "web-safe" フォント (つまり、広く利用できると考えられるほど一般的なフォント) と呼ばれる制限なしにコンテンツをデザインすることができます。ローカルにインストールされているフォントを、名前を指定して検索し使用することができる機能により、インターネット接続に頼らなくてもフォントを基本的なものからカスタマイズすることができるようになります。

`url()` と `local()` を両方とも使用することは一般的であり、そうすることでユーザーのインストールされたフォントのコピーが利用できればそれを利用し、ユーザーの端末に見つからない場合はフォントのコピーを代替としてダウンロードすることができます。

`@font-face` アットルールは、 CSS の最上位だけでなく、 [CSS の条件付きアットルールグループ](/ja/docs/Web/CSS/At-rule#条件付きグループルール)の中でも使用することができます。

### フォントの MIME タイプ

| 形式                   | MIME タイプ  |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### メモ

- ウェブフォントは同一ドメイン制約の対象となります（フォントファイルはそれを使用するページと同じドメインに存在しなければなりません）。ただし、 [HTTP アクセス制御](/ja/docs/Web/HTTP/CORS)を使用するとこの制限を緩和することができます。
- `@font-face` は CSS セレクターの中で宣言することはできません。例えば、以下の例は動作しません。

  ```css example-bad
  .className {
    @font-face {
      font-family: MyHelvetica;
      src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url(MgOpenModernaBold.ttf);
      font-weight: bold;
    }
  }
  ```

## 形式文法

{{csssyntax}}

## 例

### ダウンロード可能なフォントを定義

この例は使用するダウンロード可能なフォントを指定し、文書の本文全体に適用します。

```html
<html>
  <head>
    <title>Web Font Sample</title>
    <style type="text/css" media="screen, print">
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    </style>
  </head>
  <body>
    This is Bitstream Vera Serif Bold.
  </body>
</html>
```

この例の出力結果は次のようになります。

{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', 50)}}

### ローカルフォントの代替を指定

この例では、ユーザーのローカルにある "Helvetica Neue Bold" が使用されます。もしユーザーがそのフォントをインストールしていない場合は (2 つの異なる名前が試されます)、代わりに "MgOpenModernaBold.ttf" という名前のダウンロードフォントが使用されます。

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WOFF について](/ja/docs/Web/Guide/WOFF)
- [FontSquirrel @font-face generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Beautiful fonts with @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
