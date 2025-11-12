---
title: url()
slug: Web/CSS/Reference/Values/url_function
original_slug: Web/CSS/url_function
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

**`url()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、ファイルを含めるために使用します。引数は絶対 URL、相対 URL、Blob URL、データ URL の何れかです。 **`url()`** 関数は {{cssxref("attr")}} 関数のように、他の CSS 関数に引数として渡すことができます。値を使用するプロパティに応じて、求められるリソースは画像、フォント、スタイルシートのいずれかになります。`url()` 関数記法は `<url>` データ型の値になります。

> [!NOTE]
> {{Glossary("URI")}} と {{Glossary("URL")}} との間には違いがあります。 URI は単純にリソースを識別します。 URL は URI の一種で、リソースの*場所*を記述します。 URI はリソースの URL または名前 ({{Glossary("URN")}}) であることがあります。
>
> CSS Level 1 では、 `url()` 関数記法は真に URL のみを記述していました。 CSS Level 2 では、 `url()` の定義はあらゆる URI、 URL または URN のどちらかを記述するように拡張されました。ややこしいことに、これは `url()` を CSS の `<uri>` データ型の生成のために使用することができることを意味していました。この変更は紛らわしいばかりでなく、議論になりやすく、 URN が実際の CSS で使用されることはほぼあり得ないため不必要でした。混乱を軽減するために、 CSS Level 3 ではより狭い初めの定義まで戻りました。現在では、 `url()` は真に `<url>` のみを記述します。

相対 URL が使用された場合は、スタイルシートの URL からの相対となります（ウェブページの URL からではありません）。

**`url()`** 関数は {{cssxref('background')}}, {{cssxref('background-image')}}, {{cssxref('border')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, {{cssxref('content')}}, {{cssxref('cursor')}}, {{cssxref('filter')}}, {{cssxref('list-style')}}, {{cssxref('list-style-image')}}, {{cssxref('mask')}}, {{cssxref('mask-image')}}, {{cssxref('offset-path')}}, {{cssxref('clip-path')}},
[`@font-face`](/ja/docs/Web/CSS/Reference/At-rules/@font-face) ブロック内での [src](/ja/docs/Web/CSS/Reference/At-rules/@font-face/src), [@counter-style/`symbol`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) の値として使用することができます。

## 構文

```css
/* 単純な使い方 */
url("https://example.com/images/myImg.jpg");
url('https://example.com/images/myImg.jpg');
url(https://example.com/images/myImg.jpg);
url("data:image/jpeg;base64,iRxVB0…");
url(myImg.jpg);
url(#IDofSVGpath);

/* 関連するプロパティ */
background-image: url("star.gif");
list-style-image: url('../images/bullet.jpg');
content: url("my-icon.jpg");
cursor: url(my-cursor.cur);
border-image-source: url(/media/diamonds.png);
src: url('fantastic-font.woff');
offset-path: url(#path);
mask-image: url("masks.svg#mask1");

/* 代替付きのプロパティ */
cursor: url(pointer.cur), pointer;

/* 関連する一括指定プロパティ */
background: url('star.gif') bottom right repeat-x blue;
border-image: url("/media/diamonds.png") 30 fill / 30px / 30px space;

/* 他の CSS 関数の引数として */
background-image: cross-fade(20% url(first.png), url(second.png));
mask-image: image(url(mask.png), skyblue, linear-gradient(black, transparent));

/* 一括指定ではない複数の値の一部として */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* アットルール */
@document url("https://www.example.com/") { /* … */ }
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
```

### 値

- `<string>`
  - : URL を指定する文字列。これは、相対アドレス、絶対アドレス、またはポインター、あるいは含まれるウェブリソースへのデータ URL です。また、ハッシュ URL を使用して、[SVG シェイプ](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)または [SVG フィルター](/ja/docs/Web/SVG/Reference/Element/filter)の ID を参照することもできます。

    引用符は一般的にオプションです。URL に括弧、ホワイトスペース、引用符が含まれている場合（これらの文字がエスケープされている場合を除く）、またはアドレスに 0x7e 以上の制御文字が含まれている場合は、引用符が必要です。通常の文字列構文の規則が適用されます。二重引用符は二重引用符内で使用することはできず、単一引用符はエスケープされていない限り単一引用符内で使用することはできません。

- `<url-modifier>`
  - : 将来的には、`url()` 関数で修飾子、識別子、または関数記法を指定して、URL 文字列の意味を変更できるようになるかもしれません。これはサポートされておらず、仕様書でも完全に定義されていません。

## 形式文法

{{CSSSyntax("url")}}

## 例

### background プロパティで使用される URL

```css
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    #0000dd no-repeat fixed;
}
```

{{EmbedLiveSample("As the background property value", "100%", "200")}}

### リストの先頭記号として使用される画像を読み込む URL

```html hidden
<ul>
  <li>one</li>
  <li>two</li>
  <li>there</li>
</ul>
```

```css hidden
ul {
  font-size: 3rem;
  margin: 0;
}
```

```css
ul {
  list-style: outside
    url("https://mdn.github.io/shared-assets/images/examples/firefox-logo.svg");
}
```

{{EmbedLiveSample("For setting an image as a list bullet", "100%", "200")}}

### content プロパティの使用

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

#### CSS

```css
li::after {
  content: " - "
    url("https://mdn.github.io/shared-assets/images/examples/star-white_16x16.png");
}
```

#### 結果

{{EmbedLiveSample("Usage_in_the_content_property", "100%", "110")}}

### データ URL の使用

#### CSS

```css
body {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}
```

{{EmbedLiveSample("Using_a_data_URL", "100%", 100)}}

### フィルターでの使用

URL がフィルターへのパスとして使用される場合、 URL は以下のどちらかでなければなりません。

1. SVG ファイルへのパスに、追加されるフィルターの ID が付いたもの。
2. SVG がページ内にある場合は、フィルターの ID。

```css
.blur {
  filter: url("my-file.svg#svg-blur"); /* フィルターとして使用する SVG ファイルの URL */
}

.inline-blur {
  filter: url("#svg-blur"); /* HTML ページに埋め込まれた SVG の ID */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
