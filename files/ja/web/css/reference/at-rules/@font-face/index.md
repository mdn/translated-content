---
title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
original_slug: Web/CSS/@font-face
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`@font-face`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、テキストを表示するための独自フォントを指定します。フォントはリモートサーバーまたはユーザー自身のコンピューターにローカルにインストールされたフォントのどちらかから読み込むことができます。

## 構文

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff") format("woff");
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
  - : font プロパティのフォントフェイス値で使われる名前を指定します。 `@font-face` ルールが有効であるためには、 `font-family` 名が必要です。
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : {{cssxref("font-stretch")}} 値です。フォントフェイスで対応する範囲を指定するために、 `font-stretch: 50% 200%;` のように 2 つの値を受け付けます。
- {{cssxref("@font-face/font-style", "font-style")}}
  - : {{cssxref("font-style")}} 値です。フォントフェイスで対応する範囲を指定するために、 `font-style: oblique 20deg 50deg;` のように 2 つの値を受け付けます。
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : {{cssxref("font-weight")}} 値です。フォントフェイスで対応する範囲を指定するために、 `font-weight: 100 400;` のように 2 つの値を受け付けます。
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : OpenType フォントで高度な印刷機能を制御することができるようにします。
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : OpenType または TrueType フォントの種類を低レベルで制御するために、変化形の特徴を表す 4 文字の軸名を、種類の値と共に指定します。
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : フォントの行間の寸法を定義します。
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : このフォントに関連するグリフのアウトラインとメトリックの倍率を定義します。これにより、同じフォントサイズでレンダリングしたときに、さまざまなフォントのデザインを調和させることが容易になります。
- {{cssxref("@font-face/src", "src")}}
  - : フォントの形式や技術に関するヒントを含むフォントリソースへの参照を指定します。 `src` は `@font-face` ルールが有効になるためには必須です。
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : フォントで使用される Unicode コードポイントの範囲です。

## 解説

`url()` と `local()` を両方とも使用することは一般的であり、そうすることでユーザーのインストールされたフォントのコピーが利用できればそれを利用し、ユーザーの端末に見つからない場合はフォントのコピーを代替としてダウンロードすることができます。

`local()` 関数が与えられると、ユーザーのコンピューターで探すフォント名を指定し、{{Glossary("user agent", "ユーザーエージェント")}}がそれを見つけることができれば、そのローカルフォントを使用します。そうでなければ、 `url()` 関数を使用して指定されたフォントリソースをダウンロードして使用します。

ブラウザーはリストの宣言順にリソースを読み込もうとするので、 通常は `local()` を `url()` の前に書くべきです。どちらの関数もオプションなので、 `url()` を使用せずに `local()` のみを 1 つ以上格納したルールブロックも可能です。
`format()` または `tech()` の値を持つより詳細なフォントを使用したい場合は、これらの値を持たないバージョンよりも前に記載してください。そうしないと、より詳細度の低いフォントが最初に試され、使用されてしまいます。

`@font-face` で作者が独自のフォントを提供できるようになることで、「ウェブセーフ」フォント (つまり、広く利用できると考えられるほど一般的なフォント) と呼ばれる制限なしにコンテンツをデザインすることができます。ローカルにインストールされているフォントを、名前を指定して検索し使用することができる機能により、インターネット接続に頼らなくてもフォントを基本的なものからカスタマイズすることができるようになります。

> [!NOTE]
> Fallback strategies for loading fonts on older browsers are described in the [`src` descriptor page](/ja/docs/Web/CSS/Reference/At-rules/@font-face/src#specifying_fallbacks_for_older_browsers).

`@font-face` アットルールは、 CSS の最上位だけでなく、 [CSS の条件付きグループアットルール](/ja/docs/Web/CSS/Guides/Conditional_rules#アットルール)の中でも使用することができます。

### フォントの MIME タイプ

| 形式                   | MIME タイプ  |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### メモ

- ウェブフォントは同一ドメイン制約の対象となります（フォントファイルはそれを使用するページと同じドメインに存在しなければなりません）。ただし、 [HTTP アクセス制御](/ja/docs/Web/HTTP/Guides/CORS)を使用するとこの制限を緩和することができます。
- `@font-face` は CSS セレクターの中で宣言することはできません。例えば、以下の例は動作しません。

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src:
        local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## 形式文法

{{csssyntax}}

## 例

### ダウンロード可能なフォントを定義

この例は使用するダウンロード可能なフォントを指定し、文書の本文全体に適用します。

```html live-sample___web-font-example
<body>
  This is Bitstream Vera Serif Bold.
</body>
```

```css live-sample___web-font-example
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/shared-assets/fonts/VeraSeBd.ttf");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

{{EmbedLiveSample("web-font-example", "", "100px")}}

### ローカルフォントの代替を指定

この例では、ユーザーのローカルにある "Helvetica Neue Bold" が使用されます。もしユーザーがそのフォントをインストールしていない場合は (2 つの異なる名前が試されます)、代わりに "MgOpenModernaBold.ttf" という名前のダウンロードフォントが使用されます。

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WOFF について](/ja/docs/Web/CSS/Guides/Fonts/WOFF)
- [FontSquirrel @font-face generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Beautiful fonts with @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Font Library](https://fontlibrary.org/)
