---
title: CSS のサンプルコードの作成ガイドライン
short-title: CSS の例
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

以下のガイドラインでは、MDN Web Docs の CSS サンプルコードを記述する方法について説明します。

## CSS のサンプルコードのための全般的なガイドライン

### 書式の選択

正しいインデント、ホワイトスペース、行の長さに関する意見は常に論争の的となってきました。このようなトピックに関する議論は、コンテンツを作成したり維持したりすることの妨げになります。

MDN Web Docs では、コードスタイルの一貫性を保つために（そしてトピック外の議論を避けるために）、コード整形ツールとして [Prettier](https://prettier.io/) を使用しています。現在のルールについては[設定ファイル](https://github.com/mdn/content/blob/main/.prettierrc.json)を参照し、 [Prettier のドキュメント](https://prettier.io/docs/index.html)を読んでください。

Prettier はすべてのコードを整形し、スタイルの一貫性を保ちます。とはいえ、従わなければならない追加のルールがいくつかあります。

### CSS を計画する

CSS を大量に書き込む前に、スタイルを慎重に計画しましょう。どのようなスタイルが必要なのか、どのようなレイアウトが必要なのか、どのようなオーバーライドが必要なのか、そしてそれらは再利用可能なものなのか。特に、**オーバーライドのしすぎは禁物**です。スタイルを書いても、いくつかのルールセットで再びキャンセルしてしまうようなことがあれば、おそらく戦略を見直す必要があります。

### 対応している最新の CSS 機能を使う

新しい機能は、Chrome、Edge、Firefox、Safari のすべての主要ブラウザーが対応したら（{{glossary("Baseline")}}）使用できます。

このルールは、そのページで文書化している CSS 機能には適用されません（その機能は代わりに[採用基準](/ja/docs/MDN/Writing_guidelines/Criteria_for_inclusion)に従います）。例えば、[標準外または実験的な機能](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)を文書化し、その動作を示す完全な例を書くことはできます。ただし、ウェブ API など、関連のない別の機能のデモでそのような機能を使うのは避けてください。

### 一般的なベストプラクティスに従う

ここでは網羅的に述べる必要のない、広く認められている原則があります。

- コードに構文エラーがないことを確認してください。構文エラーがあると、[プロパティや宣言が無視される](/ja/docs/Web/CSS/Guides/Syntax/Error_handling)ことがあります。[対応している最新の CSS 機能を使う](#対応している最新の_css_機能を使う)という一般ルールに沿っていれば、まだ実装されていない標準構文を使ってもかまいません。
- [標準外、非推奨、または廃止された](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)機能は使用しないでください。このガイドラインは[ベンダー接頭辞付き機能](/ja/docs/Glossary/Vendor_Prefix#css_の接頭辞)にも適用されます。標準機能が利用できない場合に限り、接頭辞付きの代替機能を使用してください（[対応している最新の CSS 機能を使う](#対応している最新の_css_機能を使う)という一般ルールを参照）。より幅広い互換性が必要な場合、読者は接頭辞付きの代替を追加するか、CSS ポストプロセッサーを使用できます。
- 冗長なコードや機能しないコードを書かないでください。これらは、バグやリファクタリングの残骸であることがよくあります。宣言内のプロパティの重複、空の宣言、空のコメント、どの要素にも一致しないセレクターなどが該当します。

### プリプロセッサーを使用しない

MDN のサンプルコードでは、[Sass](https://sass-lang.com/)、[Less](https://lesscss.org/)、[Stylus](https://stylus-lang.com/) などのプリプロセッサー構文を使用しないでください。MDN ではバニラ CSS 言語を文書化しています。プリプロセッサーを使うと、例を理解するためのハードルが上がり、読者を混乱させる可能性があります。

### 特定の CSS の方法論を使わない

前のガイドラインと同じ考え方から、MDN のサンプルコードでは、[BEM](https://css-tricks.com/bem-101/) や [SMACSS](https://smacss.com/) のような特定の CSS 方法論を使わないでください。有効な CSS 構文ではありますが、これらの方法論に詳しくない人にとっては、命名規則が混乱を招く可能性があります。

### リセットを使わない

プラットフォームをまたいで CSS を最大限に制御するために、以前は多くの人が CSS リセットですべてのスタイルを削除してから、自分で作り直していました。確かに利点はありますが、特に現代では CSS リセットは過剰になりがちです。デフォルトのマージンやリストスタイルなど、元々完全に壊れていたわけではないものを再実装するために、余計な時間がかかることがあります。

### 形式文法と擬似コード

形式文法は MDN の CSS 文書の不可欠な要素です（例として、`background-image` プロパティの記事の[形式文法](/ja/docs/Web/CSS/Reference/Properties/background-image#形式文法)の節を参照してください）。多くの開発者がこの形式の文法に慣れているため、説明や例で形式文法に似た形式の擬似コードを書くことは許容されます。ただし、構文的に正しい CSS ではないコードを CSS としてマークしてはいけません。`css` コードブロック内に構文エラーがあると、静的チェッカーで解析できず、正しい CSS コードを期待する読者を混乱させ、構文ハイライトが不自然になる場合もあります。コードブロックに `plain` を指定するか、`CSSSyntaxRaw` マクロを使って形式文法全体を表示してください。

次のような説明は避けてください（これは実際の形式文法ではなく、プレースホルダーを使った擬似 CSS にすぎません）。

````md example-bad
`border` プロパティの一般的な形式は次のとおりです。

```css
border: <border-width> <border-style> <border-color>;
```
````

代わりに `plain` を使用してください。

````md example-good
`border` プロパティの一般的な形式は次のとおりです。

```plain
border: <border-width> <border-style> <border-color>;
```
````

または、適切であれば、`CSSSyntaxRaw` マクロで実際の形式文法を書いてください。

```md example-good
`border` プロパティは、線の幅、線のスタイル、色を任意の順序で指定します。

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

さらに、単独の値は構文的に正しい CSS ではありません。CSS コードには、少なくともプロパティとその値が必要です。`rgb()` 関数を文書化する場合は、次のようにしてください。

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

次のようにはしないでください。

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

このルールは、「構文」の節の最初のコードブロックには適用されません。このコードブロックは[構文の節](/ja/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_リファレンスの構文)で定められており、関数をプロパティ名なしで記述する必要があります。

## アニメーション

### キーフレームセレクター

キーフレームを指定するとき、`0%` と `100%` のセレクターは `from` と `to` とも記述できます。`@keyframes` ルールにこの 2 つのセレクターだけが含まれる場合は、`0%` と `100%` ではなく `from` と `to` を使用してください。コードをより意味の明確なものにできます。

次のような記述は避けてください。

```css example-bad
@keyframes example {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

代わりに `from` と `to` を使ってください。

```css example-good
@keyframes example {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

一方、`@keyframes` ルールに開始フレームと終了フレーム以外も含まれる場合は、一貫性を保つために `0%` と `100%` のセレクターを使用してください。

```css example-good
@keyframes example {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
```

## カスケード、プロパティ、セレクター

### 詳細度の制御

可能であれば、[`:where()`](/ja/docs/Web/CSS/Reference/Selectors/:where) 擬似クラスの使いすぎやセレクターの重複など、詳細度を上げたり下げたりして予想外の結果を招くことは避けてください。代わりに、次の方法で詳細度を管理することを検討してください。

- カスケードを利用できるように宣言の順序を変える
- 宣言内のプロパティの順序を調整し、互いに上書きしないようにする
- HTML の [`id` 自体の使用が正当な場合](#クラスセレクターを使う)に ID セレクターを使う

### !important

`!important` は最後の手段で、何かを上書きする必要があり、他に方法がないときだけ使用します。`!important` の使用は悪い慣習であり、可能な限り避けてください。

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### 順序

一般に、同じ要素を対象とする 2 つの宣言では、詳細度の高い宣言をスタイルシートの後の方に置きます。

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

ひとつの宣言内では、寸法、配置、色など、関連するプロパティをまとめてください。カスタムプロパティは宣言ブロックの先頭に置くと、利用可能なカスタムプロパティをすぐに確認できます。

### 空行

宣言ブロックの間には空行を入れることをお勧めします。同じユーティリティクラスのバリエーションのように、連続する宣言の関連性が非常に高い場合は、空行を省略してもかまいません。

プロパティ間の空行は、必要な場合に限って使用してください。プロパティの各グループが明確な意味上のまとまりを形成する場合にのみ、空行を入れます。

### 一括指定プロパティ

- 一括指定プロパティを構成するすべてのプロパティに、デフォルト以外の値を代入する場合は、個別指定プロパティではなく一括指定プロパティを使用してください。コードが短くなり、読みやすくなります。

  次の個別指定プロパティを、

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  対応する一括指定に置き換えてください。

  ```css example-good
  margin: 1em 2em;
  ```

- 一括指定プロパティを構成する一部のプロパティだけにデフォルト以外の値を代入する場合、一括指定プロパティを使うかどうかは任意です。次のどちらも適切です。

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- 利用できる中で最も短い一括指定構文を使用してください。次のようにします。

  ```css example-good
  margin: 1em;
  ```

  次のような記述は避けてください。

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- 一括指定プロパティは[正規順序](/ja/docs/Glossary/Canonical_order)で記述してください。次のようにします。

  ```css example-good
  /* 幅、スタイル、色 */
  border: 1px solid red;
  ```

  次のようにはしないでください。

  ```css example-bad
  border: solid red 1px;
  ```

- それぞれの一括指定プロパティについて、一括指定か、それを構成する個別指定のどちらか一方を使い、両方を混在させないでください。上書き関係が複雑で、バグの原因になるためです。次のような記述は避けてください。

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* margin-top は無視されます */

  border-width: 1px;
  border-bottom-width: 5px; /* 1 辺の境界線の幅だけを上書きします */
  ```

### クラスセレクターを使う

一般に、[クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors)を優先し、HTML では `id` の代わりに `class` を使用してください。クラスは組み合わせて使えます。同じクラスを複数の要素で使用でき、同じ要素に複数のクラスを使用できます。

```css example-good
.footnote {
  /* ... */
}
```

```css example-bad
#footnote {
  /* ... */
}
```

スタイル設定にはクラスを使い、ID は JavaScript での使用や、一意なページ内アンカー（`<a href="#section1">`）へのリンクなど、CSS 以外の目的のために使ってください。ID の使用が正当な場合は、セレクターとして使用し、[詳細度の制御](#詳細度の制御)に利用することもできます。

### 古い擬似要素セレクター

`::before`、`::after`、`::first-letter`、`::first-line` の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)は、単一のコロン（`:before` など）でも記述できます。単一コロンの構文は推奨されておらず、読者が[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)（`:hover`）と誤認する可能性があるため、避けてください。

### 複雑なセレクターリスト

`:is()`、`:where()`、`:not()` 擬似クラスは、[複雑なセレクターリスト](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複雑セレクター)を受け入れます。これらを使うと、セレクターを短くできます。

次のようにします。

```css example-good
input:not(:checked, :disabled) {
  /* ... */
}
```

次のようにはしないでください。

```css example-bad
input:not(:checked):not(:disabled) {
  /* ... */
}
```

## 大文字と小文字の使い方

特に指定がない限り、すべての識別子は小文字にしてください。セレクター、関数、キーワードが該当します。カスタム識別子には、`--custom-property` や `my-animation` のような[ケバブケース](/ja/docs/Glossary/Kebab_case)を使用してください。CSS セレクターとして参照される HTML の ID とクラスの大文字・小文字の規則については、[HTML スタイルガイド](/ja/docs/MDN/Writing_guidelines/Code_style_guide/HTML#mdn_における大文字小文字の使い分け)を参照してください。

例外として、SVG で定義されているキーワード値は歴史的な理由から [キャメルケース](/ja/docs/Glossary/Camel_case)であるため、読みやすさのためそのように記述してください。これには、[`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword)、{{cssxref("text-rendering")}} の値、{{cssxref("shape-rendering")}} の値、{{cssxref("pointer-events")}} の値、{{cssxref("color-interpolation-filters")}} の値が含まれます。

## 色

### 表記法の選択

特定の色パレットが重要でない場合は、一般的な色名を使うことをデフォルトにしてください。例えば、`rgb(0 0 0)` や `#000000` の代わりに `black` を、`chartreuse` の代わりに `green` を使用します。

特定の色が必要な場合は、`rgb()` 表記をデフォルトにしてください。`hsl()` やその他の関数は、特定の表現に意味がある場合（色相環やグラデーションなど）にのみ使用してください。16 進表記はより簡潔ですが、読みづらい場合があります。使いやすい方を選べる点で、`rgb()` と置き換え可能です。

どの色関数を使用する場合も、従来のカンマ区切り構文ではなく、最新の構文（`rgb(31 41 59 / 0.26)`）を使用してください。また、常に `a` の接尾辞なしの関数（`rgba` ではなく `rgb`）を使用してください。こちらのほうが短く、後からアルファチャンネルを追加または削除するときに関数名を変更する必要がありません。

16 進表記を使用する場合は、認知負荷を避けるため、常に 6 桁（または 8 桁）の形式（`#abc` ではなく `#aabbcc`）を使用してください。

### 色の引数

一貫性を保つため、特別な理由がなければ、すべての引数にはパーセント値や度数ではなく数値を使用してください。これはアルファチャンネルにも適用されます。ただし、アニメーション、グラデーション、計算など、特定の表現に意味がある場合は、文脈に適した型を使用してください。

アルファチャンネルが `1` の場合は省略してください。`rgb(31 41 59 / 1)` ではなく `rgb(31 41 59)` と記述してください。

### 色の選択

一般的な色名を使うという推奨に加えて、色のパレットは[アクセシビリティガイドライン](/ja/docs/Web/Accessibility/Guides/Colors_and_Luminance)を満たすようにしてください。特に、「赤いボックス」と「青いボックス」のように色で要素を区別する場合は、色覚障害のある人にも区別できる色を選んでください。テキストと背景の[コントラスト比](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)は、少なくとも 4.5:1（WCAG AA）を目指してください。

## コメント

自己文書化されていないコードにコメントを付けるには、CSS 形式のコメントを使用してください。コメントのアスタリスクとテキストの間にはスペースを入れてください。

```css example-good
/* これが CSS 形式のコメントです。 */
```

コメントは、参照するコードの前に別の行で記述してください。

```css example-good
h3 {
  /* 赤色のドロップシャドウを、右下に 1px のオフセット、2px のぼかし半径で作成 */
  text-shadow: 1px 1px 2px red;
  /* フォントサイズを文書のデフォルトの 2 倍に設定 */
  font-size: 2rem;
}
```

## フォント

### フォントファミリーの指定

フォントファミリーを指定する場合は、最後の代替として必ず[総称フォントファミリー](/ja/docs/Web/CSS/Reference/Properties/font-family#generic-name)名を追加してください。指定したフォントを利用できない場合、ブラウザーがより適した代替フォントを表示できます。[ウェブセーフフォント](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals#ウェブセーフフォント)にはこのルールは適用されません。

```css example-bad
body {
  font-family: "Helvetica";
}
```

```css example-good
body {
  /* Arial はウェブセーフフォントなので "sans-serif" ファミリーは不要 */
  font-family: "Helvetica", "Arial";
}

math {
  font-family: "Latin Modern Math", "STIX Two Math", math;
}
```

### フォントウェイトの指定

`normal` や `bold` などのキーワード値と、`bolder` や `lighter` などの相対ウェイトを優先してください。特定のウェイトが必要な場合にのみ数値を使用します。可変フォントの範囲を宣言する場合や、ほかの類似した宣言との一貫性を保つ場合を除き、`400` は `normal` に、`700` は `bold` に置き換えてください。

## 長さ

### 柔軟性のある相対単位を使う

幅広い端末で最大限の柔軟性を実現するため、すべての長さには `em`、`rem`、パーセント値、ビューポートの幅に応じて変化させたい場合はビューポート単位などの相対単位をデフォルトで使用してください。詳しくは [CSS 値と単位のガイド](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#相対長の単位)を参照してください。

次のようにします。

```css example-good
margin: 0.5em;
max-width: 50%;
```

次のような記述は避けてください。

```css example-bad
margin: 20px;
max-width: 500px;
```

## メディアクエリー

### 範囲構文

`min-` と `max-` の代わりに最新の範囲構文を使用してください。範囲構文では排他的な範囲を指定でき、上限と下限を同時に指定できます。また、全体的により簡潔で読みやすくなります。

```css example-good
@media (width >= 480px) {
  /* ... */
}
@media (600px < height < 900px) {
  /* ... */
}
```

```css example-bad
@media (min-width: 480px) {
  /* ... */
}
@media (min-height: 600px) and (max-height: 900px) {
  /* ... */
}
```

この原則は、`<link>` 要素の [`media`](/ja/docs/Web/HTML/Reference/Elements/link#media) 属性や {{domxref("window.matchMedia()")}} など、CSS 以外でメディアクエリーを使用する場合にも適用されます。

メディアクエリーのしきい値で異なるスタイルを切り替える場合は、特に注意してください。`width` と `height` は小数値を取ることがあるため、あらゆる値で、適用される代替スタイルが必ず 1 つだけになるようにしてください。

### モバイルファーストのメディアクエリー

異なる対象ビューポートサイズ向けの[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)を含むスタイルシートでは、まず狭い画面やモバイル向けのスタイルを記述し、その後にメディアクエリーで広いビューポート向けのスタイルを追加してください。このルールには多くの利点があり、[レスポンシブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)の記事で説明しています。

```css example-good
/* 狭い画面向けのデフォルトの CSS レイアウト */

@media (width >= 480px) {
  /* 中程度の幅の画面向けの CSS */
}

@media (width >= 800px) {
  /* 広い画面向けの CSS */
}

@media (width >= 1100px) {
  /* とても広い画面向けの CSS */
}
```

## 文字列

CSS 構文で引用符が省略可能な場合は、引用符を付け、二重引用符を使用してください。次のようにします。

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

使用できる文字の種類がより制限され、微妙な構文エラーにつながることがあるため、次のようにはしないでください。

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

`@import` アットルールでは、モジュールのパスを `url()` ではなく文字列として指定してください。

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## 関連情報

[CSS リファレンス索引](/ja/docs/Web/CSS/Reference#索引)でプロパティのリファレンスページを探し、簡潔で意味の明確な CSS の例を確認してください。「試してみよう」の節にあるインタラクティブな例は、一般にこのページのガイドラインに従って書かれています。
