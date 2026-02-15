---
title: 見出しと段落
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: d865c290ae97074157ca8fd3994015b2f393d370
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

HTML の主要な仕事の一つは、ブラウザーが HTML 文書を開発者の意図通りに表示できるように、テキストに構造を与えることです。この記事では、 {{glossary("HTML")}} を使用して、見出しや段落を追加したり、単語を強調したり、リストを作成したりなど、ページのテキストを構造化する方法を説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>見出しと、その見出しの下のコンテンツで構成される、良い文書構造を作成する方法。</li>
          <li>表現のための HTML ではなく、意味づけされた HTML を使用すること、そしてそれがなぜ重要なのか。</li>
          <li>見出しレベルを論理的に使用する必要がある、すなわち、特定のフォントサイズを実現したいからといってレベルを飛ばしたり、恣意的に使用したりしないこと（これは CSS の仕事です）。</li>
          <li>SEO 上の利点。見出し内のキーワードが強化される、など。</li>
          <li>アクセシビリティ上の利点。スクリーンリーダーなどの支援技術 (AT) は、コンテンツを移動するための道しるべとして見出し（およびその他の目印）を使用します。 HTML 文書は、見出しがなければ、 AT のユーザーにとってとても使いにくいものとなります。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 基本: 見出しと段落

たいていの構造化されたテキストは見出しと段落で構成されています。それは物語でも、新聞でも、大学の教科書でも、雑誌などでも、何を読んでいるのかにかかわらずそうです。

![新聞の表紙の例。最上位の見出し、小見出し、段落を使用していることがわかる。](newspaper_small.jpg)

構造化されたコンテンツは読み手にとって読みやすく楽しい体験になります。

HTML では、各段落は {{htmlelement("p")}} 要素で囲む必要があり、次のようになります。

```html
<p>I am a paragraph, oh yes I am.</p>
```

それぞれの見出しは見出し要素で囲みます。

```html
<h1>I am the title of the story.</h1>
```

見出し要素は 6 つあります — {{htmlelement("Heading_Elements", "h1")}}、{{htmlelement("Heading_Elements", "h2")}}、{{htmlelement("Heading_Elements", "h3")}}、{{htmlelement("Heading_Elements", "h4")}}、{{htmlelement("Heading_Elements", "h5")}}、{{htmlelement("Heading_Elements", "h6")}} です。各要素は文書内で別々のコンテンツレベルを表現します。 `<h1>` は最も主要な見出しで、`<h2>` は副見出しで、`<h3>` は副副見出しを表すというようになります。

## 構造的な階層を実装する

例として、物語を考えましょう。 `<h1>` は物語の題名を表し、`<h2>` は各章の題名を表し、`<h3>` は各章の節を表すというようにします。

```html
<h1>The Crushing Bore</h1>

<p>By Chris Mills</p>

<h2>Chapter 1: The dark night</h2>

<p>
  It was a dark night. Somewhere, an owl hooted. The rain lashed down on the…
</p>

<h2>Chapter 2: The eternal silence</h2>

<p>Our protagonist could not so much as a whisper out of the shadowy figure…</p>

<h3>The specter speaks</h3>

<p>
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!"
</p>
```

実に自由な発想で、どのような要素を表現するか、階層構造に意味を持たせればよいのです。ただ、このような構造を作成する際には、いくつかの最善の手法を念頭に置いておく必要があります。

- できれば、 1 ページに 1 つの `<h1>` を使用するのが望ましいでしょう。これは最上位の見出しで、他の見出しはすべてこれより下の階層に配置されます。
- 見出しは正しい順序で使用するようにしてください。小見出しを表すために `<h3>` 要素を使用し、その後に小見出しを表すために `<h2>` 要素を使用しないでください。これは意味を成しませんし、おかしな結果を招きかねません。
- 利用できる 6 つの見出しレベルのうち、必要と思われる場合を除き、 1 ページにつき使用するのは 3 つまでにすることを目標としましょう。多数のレベル（例えば、深い見出し階層）がある文書は、扱いにくく、操作しにくくなります。そのような場合は、可能であれば複数のページに内容を分散させることをお勧めします。

## なぜ構造が必要なのか

この質問に答えるには、[text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) を見てください — すてきなハマスのレシピです。この文書の本文は現在、複数の部分のコンテンツが入っています — まったくマークアップされていませんが、改行で区切られています（次の行に移るのに Enter/Return を押します）。

しかし、この文書をブラウザーで開くと、テキストが 1 つの大きな塊に見えるでしょう。

![ページ上に構造化する要素がないため、書式なしのテキストが壁一面に表示されるウェブページ。](screen_shot_2017-03-29_at_09.20.35.png)

これはコンテンツの構造を与える要素がないためですので、ブラウザーはどれが見出しでどれが本文かがわかりません。さらに、

- ウェブページを見ているユーザーは、関連コンテンツを探すのにざっと見たり、時には読み始めるために見出しだけを見ている傾向にあります（私たちはふつう、[ウェブページに費やす時間はわずかです](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/))。しばらく有用なものが見つからない場合、イライラして別の場所に去っていきます。
- ページをインデックスする検索エンジンは、見出しのコンテンツを、ページの検索ランクに影響する重要なキーワードとみなします。見出しがないと、 {{glossary("SEO")}} （検索エンジン最適化）の点で良くないでしょう。
- 極めて目が不自由な人はウェブページを読みません。つまりその代わりにウェブページを聞きます。これは [スクリーンリーダー](https://ja.wikipedia.org/wiki/スクリーンリーダー)というソフトウェアで実現されます。このソフトウェアはテキストコンテンツにすばやくアクセスする方法を提供します。さまざまな技術が使用される中で、文書の概要を見出しを読むことで提供し、ユーザーが必要な情報をすばやく見つけられるようにしています。見出しが見つからない場合、文書全体が読み上げられるのを聞くことになってしまいます。
- {{glossary("CSS")}} でコンテンツをスタイリングしたり、 {{glossary("JavaScript")}} で面白いことをさせるには、関連コンテンツを包んでいる要素が必要となり、それを効率的に CSS/JavaScript はターゲットとします。

このため、コンテンツに構造的なマークアップが必要となります。

### コンテンツの構造化

さっそく始めてみましょう。HTML の見出しと段落の練習になる小さなコードチャレンジを解いてみてください。

1. 下記コードブロック内の **"Play"** をクリックして、MDN Playground で例を編集してください。
2. コンテンツの始まる部分に適切なテキストがある場合、`<h1>`要素で囲み、メイン見出しに変換しましょう。
3. `<h2>` 要素で囲むべき 2 組の語があるので、第 2 レベルの見出しに変換しましょう。
4. 残りの文を `<p>` 要素で囲み、段落に変換してください。それぞれの `<h2>` 要素の下に 1 つずつの `<p>` 要素を配置してください。

間違えた場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。どうしても行き詰まった場合は、コードブロックの下にある解答を参照してください。

```html-nolint live-sample___headings_paragraphs
好きな体の部位 脳 形も色も素敵。考えることもできます。
足 ゴツゴツして醜いけれど、移動には有益です。
```

{{ EmbedLiveSample('headings_paragraphs', "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した HTML 要素は次のようになります。

```html-nolint
<h1>好きな体の部位</h1>

<h2>脳</h2>

<p>形も色も素敵。考えることもできます。</p>

<h2>足</h2>

<p>ゴツゴツして醜いけれど、移動には有益です。</p>
```

</details>

## なぜ意味づけが必要なのか？

私たちはあらゆる場面で意味づけに頼っています。 —私たちは日常にある物の機能が何かを判断するために過去の経験を頼りにします。つまり、私たちは物を見れば、 それがどのような機能をもつかを知っています。 例えば、赤信号は「止まれ」を、「青信号」は「進め」を意味すると期待します。もしも、間違った意味づけを適用すれば、ものごとは一瞬にして扱いにくくなることがあります。（赤を「進め」の意味で使っている国はあるのでしょうか？そんな国がないといいのですが。）

同様に、正確な要素を使い、コンテンツに正しい意味や機能、見た目をを与えられているかどうかを確かめる必要があります。この文脈では、{{htmlelement("Heading_Elements", "&lt;h1>")}} 要素は要素によって囲んだテキストを「ページの最上位の見出し」の役割（または意味）にします。

```html
<h1>This is a top level heading</h1>
```

既定では、ブラウザーは見出しらしく見えるようにフォントサイズを大きくします（ただし、 CSS を使用して好きなようにスタイルを設定することができます）。さらに重要なことは、その意味的な価値が、例えば検索エンジンやスクリーンリーダー（前述）などで、複数の方法で使用されることです。

他にも、どんな要素でも最上位の見出しのように見せることができます。従うことで、以下のように考えてみましょう。

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

これは {{htmlelement("span")}} 要素です。これは何の意味も持ちません。CSS を適用する（または JavaScript で何かをする）ときに、コンテンツを囲むために使用し、余分な意味を与えません。（これらについてはコースの後半で詳しく説明します。）最上位の見出しのように見えるように CSS を適用していますが、これは何の意味も持たないので、上記のような好ましいことは何も得られません。その仕事に関連した HTML 要素を使用するのはよい考えです。

## まとめ

以上で、HTMLの見出しと段落についての学習は終了です。次に、HTMLの意味づけについて、さらに見ていきます。単語に強調をくれたりするものです。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
