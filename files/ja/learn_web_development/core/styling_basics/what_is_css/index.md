---
title: CSS とは何か
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 79b46675e64c9b3e7c4333c17b21b692f78b39ec
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS")}}** (Cascading Style Sheets) を使用すると、見栄えの良いウェブページを作成することができますが、どのような仕組みになっているのでしょうか。この記事では、 CSS とは何か、基本的な構文はどのようなものか、また、どうやってブラウザーが CSS を HTML に適用してスタイル設定するのかについて説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        基本的なコンピューターリテラシー、<a
          href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >基本的なソフトウェアがインストールされていること</a
        >、基本的な<a
          href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >ファイルの操作方法</a
        >に関する知識、 HTML の基本（<a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML 概論</a
        >を学習のこと）。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>CSS の目的。</li>
          <li>HTML はスタイル設定とは関係ないこと。</li>
          <li>ブラウザーの既定のスタイルという概念。</li>
          <li>CSS コードはどのようなものか。</li>
          <li>CSS が HTML にどのように適用されるのか。</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## ブラウザーの既定のスタイル

[HTML によるコンテンツの構造化](/ja/docs/Learn_web_development/Core/Structuring_content)モジュールでは、HTML とは何か、そして文書をマークアップするためにどのように使用されるかについて説明しました。こうした文書はウェブブラウザーで表示できます。見出しは通常のテキストよりも大きく表示され、段落は改行され、段落間に空間が確保されます。リンクは色付きで下線が引かれ、他のテキストと判別できるようになっています。

ここで見えているのは、ブラウザーの既定のスタイルです。これは、ページの作成者が明示的なスタイルを指定していない場合でも、ページが読みやすいように、ブラウザーが HTML に適用するとても基本的なスタイルです。これらのスタイルは、ブラウザーに含まれる既定の CSS スタイルシートで定義されています。これらは HTML とは関係がありません。

![ブラウザーが既定で使用するスタイル](html-example.png)

もしすべてのウェブサイトがそれと同じように見えていたら、ウェブはつまらない場所になってしまいます。これが、 CSS について学ぶ必要がある理由です。

## CSS は何のためのものか

CSS を使用すると、 HTML 要素がブラウザー上でどのように見えるかを正確に制御でき、好きなデザインやレイアウトで文書をユーザーに表示することができます。

- **文書**とは通常、マークアップ言語を用いて構造化されたテキストファイルであり、最も一般的なのは {{Glossary("HTML")}} です（これらは「HTML 文書」と呼ばれます）。{{Glossary("SVG")}} や {{Glossary("XML")}} など、他のマークアップ言語で記述された文書にも遭遇する可能性があります。HTML 文書はウェブページのコンテンツを含み、その構造を規定します。
- 文書をユーザーに**表現**するということは、閲覧者が利用できる形に変換するということです。{{Glossary("browser","ブラウザー")}}は、{{Glossary("Mozilla Firefox","Firefox")}}、{{Glossary("Google Chrome","Chrome")}}、{{Glossary("Microsoft Edge","Edge")}} などで、例えばコンピューター画面、プロジェクター、モバイル端末、プリンターなど、視覚的に文書を表現するように設計されています。ウェブの文脈では、これは一般的に「レンダリング」と呼ばれます。ウェブページがレンダリングされるプロセスについては、[ブラウザーがウェブサイトを読み込む仕組み](/ja/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites)で概要を解説しました。

> [!NOTE]
> ブラウザーは{{Glossary("User agent","ユーザーエージェント")}}と呼ばれることがあり、基本的にはコンピューターシステム内でユーザーを代理するコンピュータープログラムという意味です。

CSSは、ウェブページの見た目や操作感に関連する多くの目的に使用できます。例を示します。

- テキストの装飾。例えば、見出しやリンクの[色](/ja/docs/Web/CSS/Reference/Values/color_value)や[サイズ](/ja/docs/Web/CSS/Reference/Properties/font-size)の変更。
- レイアウトの作成。たとえば[グリッドレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Grids)や[段組みレイアウト](/ja/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts)など。
- [アニメーション](/ja/docs/Web/CSS/Guides/Animations)などの特殊効果。

CSS 言語は、関連する機能を含む「モジュール」に分類されています。例えば、 MDN のリファレンスページで「[背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)」モジュールを参照すると、その目的や含まれるプロパティや機能について知ることができます。モジュールページでは、技術仕様を定義する仕様書へのリンクも含まれています。

## CSS の構文の基本

CSSはルールベースの言語です。つまり、ウェブページ上の特定の要素または要素グループに適用すべきスタイルのグループを指定することで、ルールを定義します。

例えば、ページのメインの見出しを大きな赤いテキストにするというスタイルを適用することができます。次のコードは、これを実現するとてもシンプルな CSS ルールを示しています。

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- 上記の例では、CSS ルールは{{Glossary("CSS Selector", "セレクター")}}で始まっています。これにより、スタイルを適用する HTML 要素が選択されます。この場合、レベル 1 の見出し（`{{htmlelement("Heading_Elements", "&lt;h1>")}}`）にスタイルを適用します。
- それから一組の中括弧 (`{ }`) があります。
- 中括弧には 1 つまたは複数の**宣言**が含まれており、**プロパティ**と**値**のペアという形で表されます。コロンの前にはプロパティ（例えば、上記の例では `color`）を指定し、コロンの後にはプロパティの値を指定します（`red` は `color` プロパティに設定する値です）。
- この例には、 2 つの宣言があります。 1 つは `color` 、もう 1 つは `font-size` です。

それぞれの CSS プロパティごとに、許容される値は異なります。上記の例では、 `color` プロパティがあり、さまざまな[色の値](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#色)を取ることができます。また、 `font-size` プロパティもあります。このプロパティでは、さまざまな[サイズの単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#数値、長さ、パーセント値)を値として取ることができます。

CSS スタイルシートには、このようなルールが他にもたくさん格納されており、次から次へと書かれています。

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

いくつかの値はすぐに調べられますが、他にも調べていく必要があるものもあります。MDNで個々のプロパティページでは、プロパティとその値をすばやく調べるのに役立ちます。

> [!NOTE]
> MDN の [CSS リファレンス](/ja/docs/Web/CSS/Reference)には、掲載されている CSS プロパティページのすべてへのリンクを（他の CSS 機能とともに）見つけることができます。あるいは、CSS 機能についてさらに詳しい情報を知りたい場合は、お好みの検索エンジンで "mdn _css-機能名_" を検索してみてください。 例えば、 "mdn color" や "mdn font-size" と検索してみてください。

## どのように CSS は HTML に適用されるのか

[ブラウザーがウェブサイトを読み込む仕組み](/ja/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites)で説明したように、ウェブページにアクセスすると、ブラウザーはまずウェブページの内容を含む HTML 文書を送信され、それを **DOM ツリー**に変換します。

その後、ウェブページ内で見つかった CSS ルール（HTML に直接挿入されているもの、または参照されている外部 `.css` ファイル内のもの）は、適用される要素（セレクターで指定される）に基づいて異なる「バケツ」に分類されます。CSS ルールは DOM ツリーに適用され、**レンダリングツリー**が生成されます。このレンダリングツリーはブラウザーウィンドウに描画されます。

例を見ていきましょう。まず、CSS を適用できる HTML スニペットを定義します。

```html
<h1>CSS は素晴らしい</h1>

<p>テキストのスタイルを設定できます。</p>

<p>また、レイアウトや特殊効果を生成することができます。</p>
```

そして、前回の節から繰り返している CSS です。

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

この CSS は次のことをします。

- ページ上のすべての `<h1>` 要素を選択し、そのテキストを赤色に色付けし、デフォルトサイズより大きくします。この例の HTML には `<h1>` が 1 つしかないため、その要素のみにスタイル設定が適用されます。
- ページ上のすべての `<p>` 要素を選択し、独自のテキストと背景色、およびテキスト周囲の余白を適用します。この例の HTML には 2 つの `<p>` 要素があり、両方にスタイル設定が適用されます。

CSS が HTML に適用されると、レンダリングされた出力は次のようになります。

{{EmbedLiveSample('How is CSS applied to HTML?', '100%', 200)}}

## CSS をいじってみよう

上記の例を試してみてください。そのためには、右上の "Play" ボタンを押して、MDN Playground エディターで読み込んでください。

以下のことをやってみてください。

1. 既存の2つの段落のすぐ下にもう 1 つの段落を追加し、2 つ目となる CSS ルールが新しい段落に自動的に適用される様子を確認してください。
2. `<h1>` の下のどこか、例えば段落の 1 つ後に `<h2>` の見出しを追加してください。
3. CSS に新しいルールを追加して、`<h2>` 要素の色を変えてみましょう。`h1` ルールのコピーを作成し、セレクターを `h2` に変更し、例えば `color` の値を `red` から `purple` などに変更します。
4. 冒険心がある場合、MDN の [CSS リファレンス](/ja/docs/Web/CSS/Reference)で新しい CSS プロパティや値を見ていき、ルールに追加してみてください。

CSS の基本をさらに練習するには、Scrimba <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> の[まず CSS を書いてみよう！](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn)（英語）をご覧ください。このスクリムでは、基本的な CSS 構文の便利な概要が説明されており、CSS 宣言の記述をさらに練習できるインタラクティブな課題が提供されています。

## まとめ

CSS とは何か、その仕組みについてある程度理解できたところで、次は実際に CSS を書く練習をしながら、構文についてさらに詳しく説明していきましょう。

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
