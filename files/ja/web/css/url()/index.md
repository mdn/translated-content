---
title: url()
slug: Web/CSS/url()
tags:
  - CSS
  - CSS 関数
  - 関数
  - レイアウト
  - リファレンス
  - ウェブ
  - url()
browser-compat: css.types.url
translation_of: Web/CSS/url()
---
{{CSSRef}}

**`url()`** は [CSS](/ja/docs/Web/CSS) 関数で、ファイルを含めるために使用します。引数は絶対 URL、相対 URL、 データ URI の何れかです **`url()`** 関数は {{cssxref('attr()')}} 関数のように、他の CSS 関数に引数として渡すことができます。値を使用するプロパティに応じて、求められるリソースは画像、フォント、スタイルシートの何れかになります。`url()` 関数表記は `<url>` データ型の値になります。

> **Note:** {{Glossary("URI")}} と {{Glossary("URL")}} との間には違いがあります。 URI は単純にリソースを識別します。 URL は URI の一種で、リソースの*場所*を記述します。 URI はリソースの URL または名前 ({{Glossary("URN")}}) であることがあります。
>
> CSS Level 1 では、 `url()` 関数記法は真に URL のみを記述していました。 CSS Level 2 では、 `url()` の定義はあらゆる URI、 URL または URN のどちらかを記述するように拡張されました。ややこしいことに、これは `url()` を CSS の `<uri>` データ型の生成のために使用することができることを意味していました。この変更は紛らわしいばかりでなく、議論になりやすく、 URN が実際の CSS で使用されることはほぼあり得ないため不必要でした。混乱を軽減するために、 CSS Level 3 ではより狭い初めの定義まで戻りました。現在では、 `url()` は真に `<url>` のみを記述します。

```css
/* 単純な使い方 */
url(https://example.com/images/myImg.jpg);
url(data:image/png;base64,iRxVB0…);
url(myFont.woff);
url(#IDofSVGpath);

/* 関連するプロパティ */
background-image: url("star.gif");
list-style-image: url('../images/bullet.jpg');
content: url("pdficon.jpg");
cursor: url(mycursor.cur);
border-image-source: url(/media/diamonds.png);
src: url('fantasticfont.woff');
offset-path: url(#path);
mask-image: url("masks.svg#mask1");

/* 代替付きのプロパティ */
cursor: url(pointer.cur), pointer;

/* 関連する一括指定プロパティ */
background: url('star.gif') bottom right repeat-x blue;
border-image: url("/media/diamonds.png") 30 fill / 30px / 30px space;

/* 他の CSS 関数の引数として */
background-image: cross-fade(20% url(first.png), url(second.png));
mask-image: image(url(mask.png), skyblue, linear-gradient(rgba(0, 0, 0, 1.0), transparent));

/* 一括指定ではない複数の値の一部として */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* アットルール */
@document url("https://www.example.com/") { ... } {{Experimental_Inline}}
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
```

相対 URL が使用された場合は、スタイルシートの URL からの相対となります (ウェブページの URL からではありません)。

**`url()`** 関数は {{cssxref('background')}}, {{cssxref('background-image')}}, {{cssxref('border')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, {{cssxref('content')}}, {{cssxref('cursor')}}, {{cssxref('filter')}}, {{cssxref('list-style')}}, {{cssxref('list-style-image')}}, {{cssxref('mask')}}, {{cssxref('mask-image')}}, {{cssxref('offset-path')}},
[@font-face](/ja/docs/Web/CSS/@font-face) ブロック内での [src](/ja/docs/Web/CSS/@font-face/src), [@counter-style/symbol](/ja/docs/Web/CSS/@counter-style/symbols) の値として使用することができます。

## 構文

### 値

- `<string>`

  - : URL まだは SVG 図形の ID を指定することができる文字列です。

    - \<url>

      - : 含まれるウェブリソースへの相対アドレス、絶対アドレス、ポインターのURL、またはデータ URI であり、任意で単一引用符または二重引用符を使用することができます。URL に括弧、空白、引用符が含まれている場合で、これらの文字がエスケープされていないか、アドレスに 0x7e 以上の制御文字が含まれている場合、引用符は必須です。二重引用符は二重引用符の中に入れることはできず、単一引用符はエスケープされない限り単一引用符の中に入れることはできません。以下のものはすべて有効であり、同等です。

        ```css
        <css_property>: url("https://example.com/image.png")
        <css_property>: url('https://example.com/image.png')
        <css_property>: url(https://example.com/image.png)
        ```

        URL を引用符なしで書く場合は、バックスラッシュを (`\`) を URL に含まれる括弧、ホワイトスペース文字、単一引用符 (`'`)、二重引用符 (`"`) の前に使用してください。

    - パス
      - : [SVG 図形](/ja/docs/Web/SVG/Tutorial/Basic_Shapes)の ID への参照 -- `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline`, `rect` -- パスとして図形の形状を使用します。

- `<url-modifier>` {{Experimental_Inline}}
  - : 将来的に `url()` 関数は、 URL 文字列の意味を変更する修飾子、識別子、関数記法の指定に対応するかもしれません。これはまだ対応されておらず、仕様書では完全には定義されていません。

## 形式文法

```css
url( <string> <url-modifier>* )
```

<h2 id="Examples">例</h2>

<h3 id="A_url_used_in_the_background_property">background プロパティで使用される URL</h3>

    .topbanner {
      background: url("topbanner.png") #00D no-repeat fixed;
    }

<h3 id="A_url_loading_an_image_as_a_list_bullet">リストの先頭記号として使用される画像を読み込む URL</h3>

    ul {
      list-style: square url(http://www.example.com/redball.png);
    }

<h3 id="Usage_in_the_content_property">content プロパティの使用</h3>

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### CSS

```css
li::after {
  content: ' - ' url(star.gif);
}
```

#### 結果

{{EmbedLiveSample("Usage_in_the_content_property", "100%", 110)}}

<h3 id="Using_a_data-uri">data-uri の使用</h3>

#### HTML

```html
<div class="background"></div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background: yellow;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}
```

{{EmbedLiveSample("Using_a_data-uri", "100%", 50)}}

<h3 id="Usage_in_filters">フィルターでの使用</h3>

URL がフィルターへのパスとして使用される場合、 URL は以下のどちらかでなければなりません。

1.  SVG ファイルへのパスに、追加されるフィルターの ID が付いたもの。
2.  SVG がページ内にある場合は、フィルターの ID。

<!---->

    .blur {
      filter: url(my-file.svg#svg-blur); /* フィルターとして使用する SVG ファイルの URL */
    }

    .inline-blur {
      filter: url(#svg-blur); /* HTML ページに埋め込まれた SVG の ID */
    }

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element()")}}
- {{cssxref("image/image()", "image()")}}
- {{cssxref("image/image-set()", "image-set()")}}
- {{cssxref("cross-fade()")}}
