---
title: font-family
slug: Web/CSS/font-family
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.font-family
translation_of: Web/CSS/font-family
---
{{CSSRef}}

CSS の **`font-family`** プロパティは、選択した要素に対して、フォントファミリー名や総称ファミリー名の優先順位リストを指定することができます。

{{EmbedInteractiveExample("pages/css/font-family.html")}}

複数の値をカンマで区切って、代替フォントを示します。ブラウザーはリストの中で最初のインストール済み、または {{CSSxRef("@font-face")}} アット規則を使用してダウンロード可能なフォントを選択します。

一括指定プロパティの {{CSSxRef("font")}} を使用すると、 `font-size` やその他のフォント関連プロパティを一度に設定できるのでふつうは便利です。

指定されたフォントが利用可能であるという保証はないので、 `font-family` リストの中に、総称ファミリーを少なくとも 1 つ、常に追加しておくべきです。総称ファミリーを使うことで、必要ならば、ブラウザーで受け付け可能な代替フォントを選択させることができます。

`font-family` プロパティでは、優先順位の高い方から低い方へ、フォントのリストを指定します。フォント選択は、ユーザーのシステム上に存在する、リスト中の一番最初に指定されたフォントを選んで終わるとは**限りません**。むしろ、フォント選択は **1 文字ずつ**行われます。なぜなら、利用可能なフォントが、その文字を表示するのに必要なグリフを欠いている場合には、そのフォントよりも順位の低い利用可能なフォントが試行されるからです。あるフォントが一部の[スタイル](/ja/docs/Web/CSS/font-style)、[種類](/ja/docs/Web/CSS/font-variant、[大きさ](/ja/docs/Web/CSS/font-size)でのみ利用可能な場合、これらのプロパティがフォントファミリーの選択に影響する可能性があります。

## 構文

```css
/* フォントファミリー名および総称ファミリー名 */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* 総称ファミリー名のみ */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: ui-serif;
font-family: ui-sans-serif;
font-family: ui-monospace;
font-family: ui-rounded;
font-family: emoji;
font-family: math;
font-family: fangsong;

/* グローバル値 */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: unset;
```

`font-family` プロパティは、1 つ以上のフォントファミリーをカンマで区切って指定します。それぞれのフォントファミリーは `<family-name>` または `<generic-name>` の値です。

以下の例は 2 つのフォントファミリーを並べており、最初は `<family-name>` で二番目は `<generic-name>` です。

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### 値

- `<family-name>`
  - : フォントファミリーの名称。例えば、 "Times" や "Helvetica" はフォントファミリーです。空白を含むフォントファミリー名は、引用符で囲む必要があります。
- `<generic-name>`

  - : 総称フォントファミリーは代替の仕組みです。この仕組みによって、指定されたフォントがどれも利用できなかった場合、スタイルシート製作者の意図を多少なりとも保つことができます。総称ファミリー名はキーワードであり、引用符で囲んではいけません。総称フォントファミリーは、フォントファミリー名リストの最終選択肢である必要があります。以下のキーワードが定義されています。

    - `serif`

      - : 終わりが止めや払い、または実際の活字のセリフの形をした角を持つ字形です。

        例: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif

    - `sans-serif`

      - : 平たい角の端を持つ字形です。

        例: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`

      - : すべての字が同じ幅を持つ字形です。

        例: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace

    - `cursive`

      - : 筆記体フォントの字形には、一般に、続け書き、もしくは、イタリック体の特性以上に、その他の筆記体の特性があります。字形は、部分的に、あるいは完全につながっていて、仕上がりは、印刷された活字というよりは、手書きのペンまたは毛筆で書かれたように見えます。

        例: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive

    - `fantasy`

      - : fantasy フォントは、遊び心に溢れた文字表現を含む、主として装飾的なフォントです。

        例: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy

    - `system-ui`
       - : 指定されたプラットフォームの既定のユーザーインターフェイスフォントからグリフを取ります。文字の伝統は世界で様々であるため、この総称は他の総称にきれいに一致しない文字フォントを提供します。
    - `ui-serif`
      - : ユーザーインターフェイス既定のセリフ付きフォントです。
    - `ui-sans-serif`
      - : ユーザーインターフェイス既定のセリフなしフォントです。
    - `ui-monospace`
      - : ユーザーインターフェイス既定の等幅フォントです。
    - `ui-rounded`
      - : ユーザーインターフェイス既定の丸い特性を持ったフォントです。
    - `math`
      - : これは、数式を表現するための特別なスタイル上の概念のためのものです。上付き文字と下付き文字、複数行をまたぐ括弧、式の入れ子、明確な意味を持つ二重のグリフなどです。
    - `emoji`
      - : 絵文字を表示するために特別にデザインされたフォントです。
    - `fangsong`
      - : セリフ風の Song と手書き風の Kai の形の間にある中国語の文字の特定のスタイルです。このスタイルは政府文書によく使用されます。

### 有効なファミリー名

フォントファミリー名は、引用符で囲まれた文字列か、引用符で囲まれていない 1 つ以上の識別子でなければなりません。これは、引用符で囲まれていないフォントファミリー名において、各トークンの冒頭に区切り記号文字や数字がある場合、エスケープしなければならないということを意味します。

ホワイトスペース、数字、ハイフン以外の区切り文字を含むフォントファミリー名を引用符でくくるのは**良い習慣**です。

例えば、以下の宣言は有効です。

```css example-good
font-family: "Goudy Bookletter 1911", sans-serif;
```

以下の宣言は**無効**です。

```css example-bad
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

以下の例は技術的には**有効**ですが、推奨されません。

```css
font-family: Gill Sans Extrabold, sans-serif;
```

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Some_common_font_families">よくあるいくつかのフォントファミリー</h3>

```css
.serif {
  font-family: Times, "Times New Roman", Georgia, serif;
}

.sansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.monospace {
  font-family: "Lucida Console", Courier, monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.emoji {
  font-family: emoji;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```html hidden
<div class="serif">
  This is an example of a serif font.
</div>

<div class="sansserif">
  This is an example of a sans-serif font.
</div>

<div class="monospace">
  This is an example of a monospace font.
</div>

<div class="cursive">
  This is an example of a cursive font.
</div>

<div class="fantasy">
  This is an example of a fantasy font.
</div>

<div class="math">
  This is an example of a math font.
</div>

<div class="emoji">
  This is an example of an emoji font.
</div>

<div class="fangsong">
  This is an example of a fangsong font.
</div>
```

{{EmbedLiveSample("Some_common_font_families", 600, 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
