---
title: font-family
slug: Web/CSS/Reference/Properties/font-family
l10n:
  sourceCommit: 5a8de324f0aa3873d757f68e4fcaf6bbc0104711
---

**`font-family`** は [CSS](/ja/docs/Web/CSS) のプロパティで、選択した要素に対して、フォントファミリー名や一般ファミリー名の優先順位リストを指定することができます。

{{InteractiveExample("CSS デモ: font-family")}}

```css interactive-example-choice
font-family: "Georgia", serif;
```

```css interactive-example-choice
font-family: "Gill Sans", sans-serif;
```

```css interactive-example-choice
font-family: sans-serif;
```

```css interactive-example-choice
font-family: serif;
```

```css interactive-example-choice
font-family: cursive;
```

```css interactive-example-choice
font-family: system-ui;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
section {
  font-size: 1.2em;
}
```

複数の値をカンマで区切って、代替フォントを示します。ブラウザーはリストの中で最初のインストール済み、または {{CSSxRef("@font-face")}} アットルールを使用してダウンロード可能なフォントを選択します。

一括指定プロパティの {{CSSxRef("font")}} を使用すると、 `font-size` やその他のフォント関連プロパティを一度に設定できるのでふつうは便利です。

指定されたフォントが利用可能であるという保証はないので、 `font-family` リストの中に、一般ファミリーを少なくとも 1 つ、常に追加しておくべきです。一般ファミリーを使うことで、必要ならば、ブラウザーで受け付け可能な代替フォントを選択させることができます。

`font-family` プロパティでは、優先順位の高い方から低い方へ、フォントのリストを指定します。フォント選択は、ユーザーのシステム上に存在する、リスト中の一番最初に指定されたフォントを選んで終わるとは**限りません**。むしろ、フォント選択は **1 文字ずつ**行われます。なぜなら、利用可能なフォントが、その文字を表示するのに必要なグリフを欠いている場合には、そのフォントよりも順位の低い利用可能なフォントが試行されるからです。あるフォントが一部の[スタイル](/ja/docs/Web/CSS/Reference/Properties/font-style)、[種類](/ja/docs/Web/CSS/Reference/Properties/font-variant)、[大きさ](/ja/docs/Web/CSS/Reference/Properties/font-size)でのみ利用可能な場合、これらのプロパティがフォントファミリーの選択に影響する可能性があります。

## 構文

```css
/* フォントファミリー名および一般ファミリー名 */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* 一般ファミリー名のみ */
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
font-family: math;
font-family: fangsong;

/* グローバル値 */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: revert-layer;
font-family: unset;
```

`font-family` プロパティは、1 つ以上のフォントファミリーをカンマで区切って指定します。それぞれのフォントファミリーは `<family-name>` または `<generic-name>` の値です。

以下の例は 2 つのフォントファミリーを並べており、最初は `<family-name>` で二番目は `<generic-name>` です。

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### 値

- `<family-name>`
  - : フォントファミリの名前。これは単一の {{cssxref("string")}} 値か、空白で区切られた一連の {{cssxref("custom-ident")}} 値でなければなりません。文字列値は引用符で囲む必要がありますが、 Unicode 文字を格納することができます。カスタム識別子は引用符で囲む必要はありませんが、特定の文字はエスケープする必要があります。

    空白文字や数字、ハイフン以外の句読点を含むフォントファミリの名前は引用するのがよい習慣です。

    [有効なファミリー名](#有効なファミリー名)も参照してください。

- `<generic-name>`
  - : 一般フォントファミリーは代替の仕組みです。この仕組みによって、指定されたフォントがどれも利用できなかった場合、スタイルシート製作者の意図を多少なりとも保つことができます。一般ファミリー名はキーワードであり、引用符で囲んではいけません。一般フォントファミリーは、フォントファミリー名リストの最終選択肢である必要があります。以下のキーワードが定義されています。
    - `serif`
      - : 終わりが止めや払い、または実際の活字のセリフの形をした角を持つ字形です。

        例: 明朝体、Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif

    - `sans-serif`
      - : 平たい角の端を持つ字形です。

        例: ゴシック体、Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : すべての字が同じ幅を持つ字形です。

        例: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace

    - `cursive`
      - : 筆記体フォントの字形には、一般に、続け書き、もしくは、イタリック体の特性以上に、その他の筆記体の特性があります。字形は、部分的に、あるいは完全につながっていて、仕上がりは、印刷された活字というよりは、手書きのペンまたは毛筆で書かれたように見えます。

        例: 草書体、楷書体、Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive

    - `fantasy`
      - : fantasy フォントは、遊び心に溢れた文字表現を含む、主として装飾的なフォントです。

        例: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy

    - `system-ui`
      - : 指定されたプラットフォームの既定のユーザーインターフェイスフォントからグリフを取ります。文字の伝統は世界で様々であるため、この一般は他の一般にきれいに一致しない文字フォントを提供します。
        > [!NOTE]
        > その名の通り、`system-ui`は UI 要素をネイティブアプリのように見せるためのものであり、長文のテキストを組版するためのものではありません。そのため、表示される書体が一部のユーザーにとって好ましくない場合があります。例えば、Windows のデフォルト CJK フォントは、ラテン文字の表示が不十分な場合があり、`lang` 属性が表示フォントに影響しないことがあります。OS によっては `system-ui` のカスタマイズが許可されていませんが、ブラウザーでは一般的に `sans-serif` フォントファミリーのカスタマイズが可能です。長文の段落には、代わりに `sans-serif` やそれ以外の非 UI フォントファミリーを使用してください。
    - `ui-serif`
      - : ユーザーインターフェイス既定のセリフ付きフォントです。
    - `ui-sans-serif`
      - : ユーザーインターフェイス既定のセリフなしフォントです。
    - `ui-monospace`
      - : ユーザーインターフェイス既定の等幅フォントです。
    - `ui-rounded`
      - : ユーザーインターフェイス既定の丸い特性を持ったフォントです。
    - `math`
      - : これは、数式を表現するための特別なスタイル上の概念のためのものです。上付き文字や下付き文字、複数行を掛かる括弧、式の入れ子、明確な意味を持つ二重のグリフなどです。
        UA スタイルシートは `math { font-family: math }` を設定して、 {{MathMLElement("math")}} 要素がデフォルトで適切なフォントを使用するようにしていることがあります。
    - `fangsong`
      - : セリフ風の明朝体と手書き風の楷書体との間にある中国語の文字の特定のスタイル (宋朝体) です。このスタイルは政府文書によく使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### よくあるいくつかのフォントファミリー

```css
.serif {
  font-family: "Times", "Times New Roman", "Georgia", serif;
}

.sansserif {
  font-family: "Verdana", "Helvetica", "Arial", sans-serif;
}

.monospace {
  font-family: "Lucida Console", "Courier New", monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```css hidden
div {
  margin: 0.5rem;
}
```

```html hidden
<div class="serif">これは serif フォントの例です。</div>

<div class="sansserif">これは sans-serif フォントの例です。</div>

<div class="monospace">これは monospace フォントの例です。</div>

<div class="cursive">これは cursive フォントの例です。</div>

<div class="fantasy">これは fantasy フォントの例です。</div>

<div class="fangsong">これは fangsong フォントの例です。</div>

<div class="math">これは math フォントの例です。</div>
```

{{EmbedLiveSample("Some_common_font_families", 600, 220)}}

### 有効なファミリー名

以下の宣言は有効です。

```css example-good
font-family: "Goudy Bookletter 1911", sans-serif;
```

以下の宣言は無効です。

```css-nolint example-bad
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

以下の例は技術的には有効ですが、推奨されません。

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-variant-emoji")}}
- SVG の {{SVGAttr("font-family")}} 属性
- [基本的なテキストとフォントのスタイル設定](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)
