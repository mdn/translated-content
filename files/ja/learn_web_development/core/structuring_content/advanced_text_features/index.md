---
title: 高度なテキスト機能
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 65c873fda639b035b94db77dd0f9373f38549aa0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}

HTML には他にも多くのテキストの意味付けのための要素がありますが、これは[強調と重要性](/ja/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)の記事には書かれていません。この記事で説明されている要素はあまり知られていませんが、知っていると役に立ちます（これはまだいかなる意味でも完全なリストではありません）。ここでは、引用、コンピューターコードとその他の関連テキスト、下付き文字と上付き文字、連絡先情報などのマークアップについて学習します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。 <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >見出しと段落</a
        >および<a href="/ja/docs/Learn_web_development/Core/Structuring_content/Lists"
          >リスト</a
        >などのテキストレベルの意味付け。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>引用。</li>
          <li>略語と頭字語。</li>
          <li>連絡先。</li>
          <li>時刻と日付。</li>
          <li>上付き・下付き文字。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 引用

HTML には引用をマークアップするための機能もあります。どちらの要素を使用するかは、ブロックとインラインのどちらの引用をマークアップするかによって異なります。

### ブロック引用

ブロックレベルの内容（段落、複数の段落、リストなど）の一部が他の場所から引用されている場合、それを示すために {{htmlelement("blockquote")}} 要素で囲み、 [`cite`](/ja/docs/Web/HTML/Reference/Elements/blockquote#cite) 属性の中に引用元を指す URL を記載する必要があります。例えば、以下のマークアップは MDN の `<blockquote>` 要素のページから引用しています。

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

これをブロック引用にするには、次のようにします。

```html
<p>こちらはブロック引用です。</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

ブラウザーの既定のスタイル設定では、これがインデントされた段落として、それが引用であることを示すインジケーターとして表示されます。

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### インライン引用

インラインの引用は、{{htmlelement("q")}} 要素を使用することを除いて、まったく同じ方法で機能します。例えば、以下のマークアップには MDN の `<q>` ページからの引用が含まれています。

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

ブラウザーの既定のスタイル設定では、これは引用符で囲まれた通常のテキストとしてレンダリングされ、次のようになります。

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### 引用元

[`cite`](/ja/docs/Web/HTML/Reference/Elements/blockquote#cite) 属性の内容は有用そうに見えますが、残念ながらブラウザーやスクリーンリーダーなどは、この属性を実際にはあまり使用してくれません。 JavaScript や CSS を使って自身の解決策を書かない限り、ブラウザーに `cite` の内容を表示させる方法はありません。もしページ上で引用元を利用できるようにしたいのであれば、リンクやその他の適切な方法で本文中に利用できるようにする必要があります。

{{htmlelement("cite")}} 要素がありますが、これは引用されたリソースのタイトル、例えば書籍の名前を格納することを意味しています。しかし、 `<cite>` 内のテキストを何らかの方法で引用元とリンクできない理由はありません。

```html-nolint
<p>
  According to the
  <a href="/en-US/docs/Web/HTML/Reference/Elements/blockquote">
    <cite>MDN blockquote page</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
  — <a href="/en-US/docs/Web/HTML/Reference/Elements/q"><cite>MDN q page</cite></a>.
</p>
```

引用元は、既定ではイタリック体で表示されます。

{{EmbedLiveSample('Citations', '100%', '179px')}}

### 誰がそう言ったの？ ブロック引用の練習

次の課題の時間です！この課題では、以下のことを行ってください。

1. 下記コードブロック内の **"Play"** をクリックして、MDN Playground で例を編集してください。
2. 中央の段落を `cite` 属性を含むブロック引用にしましょう。
3. 3 番目の段落の "The Need To Eliminate Negative Self Talk" を、`cite` 属性を含むインライン引用に変換しましょう。
4. 各ソースのタイトルを `<cite>` タグで囲み、それぞれのソースをそのソースへのリンクに変換してください。

必要な引用元は以下のとおりです。

- Confucius の引用については `http://www.brainyquote.com/quotes/authors/c/confucius.html`
- "The Need To Eliminate Negative Self Talk" には `http://example.com/affirmationsforpositivethinking`

間違えた場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。どうしても行き詰まった場合は、コードブロックの下にある解答を参照してください。

```html live-sample___advanced-text-1
<p>Hello and welcome to my motivation page. As Confucius' quotes site says:</p>
<p>It does not matter how slowly you go as long as you do not stop.</p>
<p>
  I also love the concept of positive thinking, and The Need To Eliminate
  Negative Self Talk (as mentioned in Affirmations for Positive Thinking.)
</p>
```

{{ EmbedLiveSample('advanced-text-1', "100%", 200) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した HTML は、次のようになるはずです。

```html
<p>
  Hello and welcome to my motivation page. As
  <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"
    ><cite>Confucius' quotes site</cite></a
  >
  says:
</p>

<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">
  <p>It does not matter how slowly you go as long as you do not stop.</p>
</blockquote>

<p>
  I also love the concept of positive thinking, and
  <q cite="http://example.com/affirmationsforpositivethinking"
    >The Need To Eliminate Negative Self Talk</q
  >
  (as mentioned in
  <a href="http://example.com/affirmationsforpositivethinking"
    ><cite>Affirmations for Positive Thinking</cite></a
  >.)
</p>
```

</details>

## 略語

ウェブを見て回っているときによく出会うもう一つの要素は {{htmlelement("abbr")}} です。これは略語や頭字語を囲むために使用されます。どちらかを記載する場合、最初の使用では、略語をマークアップする `<abbr>` と共に、プレーンテキストでその用語の完全な展開を提供してください。これは、ユーザーエージェントに内容をどのように告知／表示するかのヒントを提供すると同時に、すべてのユーザーにその略語の意味を知らせます。

略語に加えて展開形を提供することにあまり意味がありません。略語や頭字語がかなり短縮された用語である場合、[`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性の値として用語の完全な展開形を提供してください。

### 略語の例

例をご覧ください。

```html
<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web
  documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>
```

これらは次のように表示されます。

{{EmbedLiveSample('Abbreviation_example', '100%', '90')}}

> [!NOTE]
> 以前のバージョンの HTML では {{htmlelement("acronym")}} 要素にも対応していましたが、省略形と頭字語の両方を表現するために `<abbr>` を使用することにしたため、 HTML 仕様から削除されました。`<acronym>` は使用すべきではありません。

### 略語をマークアップしましょう

この学習課題では、略語をマークアップしてください。

1. 下記コードブロック内の **"Play"** をクリックして、MDN Playground で例を編集してください。
2. 含まれている略語を適切な HTML でマークアップしてください。自分自身で作成した略語に置き換えて、代わりにそれをマークアップしてみるのも自由です。

間違えた場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。どうしても行き詰まった場合は、コードブロックの下にある解答を参照してください。

```html-nolint live-sample___advanced-text-2
<p>NASA sure does some exciting work.</p>

<p>The new user interface design LGTM!</p>
```

{{ EmbedLiveSample('advanced-text-2', "100%", 90) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した HTML は、次のコードスニペットのようになるはずです。

```html
<p>
  <abbr>NASA</abbr> (the National Aeronautics and Space Administration) sure
  does some exciting work.
</p>

<p>The new user interface design <abbr title="Looks good to me">LGTM</abbr>!</p>
```

- おそらく、NASA については初出時に本文中で説明を補足すべきです。なぜなら、これは本文中に誰もが利用できる形で用意しておくべき有益な情報だからです。
- 一方、"LGTM" のような略語は、純粋にスペースと時間を節約するために書かれるため、それを展開して書くのは意味をなしません。したがって、展開形は `title` 属性に記述します。実際のアプリケーションでは、おそらく手作業でこれを行うことはないでしょう。既知の用語に対しては、何らかのスクリプトを使って自動的に追加することになるでしょう。

</details>

## 詳細な連絡先のマークアップ

HTML には連絡先の詳細をマークアップするための要素 — {{htmlelement("address")}} があります。これは単に連絡先の詳細を囲むだけです。例えば、

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

また、もっと複雑なマークアップや、他にも例えば連絡先情報などを記載することも可能です。

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

なお、リンク先のページに連絡先が記載されている場合は、このような方法でも問題ないでしょう。

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> {{htmlelement("address")}} 要素は、最も近い {{htmlelement("article")}} または {{htmlelement("body")}} 要素に含まれる文書の連絡先情報を提供するためにのみ使用すべきです。サイト全体の連絡先を記載するためにサイトのフッターに使用したり、著者の連絡先を記載するために記事の中で使用することは正しいことですが、そのページの内容に関係のないアドレスのリストをマークアップすることは正しくありません。

## 上付きと下付き

日付、化学式、数式などの項目をマークアップするときには、上付き文字と下付き文字を使用する必要がある場合があります。{{htmlelement("sup")}} と {{htmlelement("sub")}} 要素がこの仕事を処理します。例えば、

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

このコードの出力は次のようになります。

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## コンピューターのコードの表現

HTML を使用してコンピューターのコードをマークアップするために利用可能な要素がいくつかあります。

- {{htmlelement("code")}}: コンピューターのコードの一般的な部分をマークアップします。
- {{htmlelement("pre")}}: 空白を保持する場合（一般的にはコードブロック） — テキストの中でインデントや余分な空白を使用すると、ブラウザーはそれを無視するので、レンダリングされたページにはそれが表示されません。しかし、テキストを `<pre></pre>` タグで囲むと、エディターで見たのと同じように空白が表示されるようになります。
- {{htmlelement("var")}}: 特に変数名をマークアップするためのものです。
- {{htmlelement("kbd")}}: コンピューターに入力されたキーボード（およびその他の種類の）入力をマークアップするためのものです。
- {{htmlelement("samp")}}: コンピュータープログラムの出力をマークアップします。

この要素の例と、それらがコンピューターコードを表すのにどのように用いられているかを見ていきましょう。
完全なファイルを見たい場合は、[other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html)のサンプルファイルを見てください。
ファイルをダウンロードして、ブラウザーで開くためのコードをご覧ください。ここではその一部をご紹介します。

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

上記のコードは次のようになります。

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## 日付と時刻をマークアップする

HTML には、時間と日付を機械可読形式でマークアップするための {{htmlelement("time")}} 要素もあります。例えば、

```html
<time datetime="2016-01-20">20 January 2016</time>
```

なぜこれが有用なのか？さて、人間が日付を書き表す方法はいろいろあります。上の日付はこう書くことができます。

<!-- markdownlint-disable MD033 -->

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- The 20th of next month
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- など

<!-- markdownlint-enable MD033 -->

しかしこれらの様々な形式はコンピューターでは容易には認識できません。ページ内のすべてのイベントの日付を自動的に取得してカレンダーに挿入する場合はどうなるでしょうか。 {{htmlelement("time")}} 要素を使用すると、この目的のために、明確で機械可読な日時を付けることができます。

上記の基本的な例は単純な機械可読な日付を提供するだけですが、可能な他の多くのオプションがあります。例えば、

```html
<!-- 単純な標準的な日付 -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- 年と付きのみ -->
<time datetime="2016-01">January 2016</time>
<!-- 月と日のみ -->
<time datetime="01-20">20 January</time>
<!-- 時刻、時と分だけ -->
<time datetime="19:30">19:30</time>
<!-- 秒とミリ秒も付けられる -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- 日付と時刻 -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- タイムゾーン付き日付と時刻 -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- 特定の週番号を呼び出す -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## まとめ

これで HTML のテキストの意味づけに関する学習は終了です。このコースで見てきたものは、 HTML テキスト要素の完全なリストではないことに留意してください。私たちは、基本的なものと、より一般的なものをカバーしようとしました。

次に、あまり一般的ではない HTML テキスト機能について説明した内容の理解度と定着度を調べることができるテストをいくつかご紹介します。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}
