---
title: HTML のセクションとアウトラインの使用
slug: orphaned/Web/Guide/HTML/Using_HTML_sections_and_outlines
---

{{HTMLSidebar}}

> **警告:** ウェブブラウザーや支援技術の中で、提案されているアウトラインアルゴリズムを実装したものはありません。これは最終的な W3C の仕様書に含まれていません。したがって、[アウトライン](https://www.w3.org/TR/html5/sections.html#outline)アルゴリズムを、ユーザーに文書の構造を伝えるために*使用するべきではありません*。作者には、見出しの[順位](https://www.w3.org/TR/html5/sections.html#rank) ([`h1`](https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements)-[`h6`](https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements)) を使用して文書の構造を伝えることを推奨します。

HTML5 の仕様書では、文書の構造を整理するのに役立つ意味づけする区分化要素がいくつか導入されました。意味づけする区分化要素は、ブラウザーや読み上げアプリや音声アシスタントなど、ユーザーに代わって文書を解釈する他の技術に構造的な意味を伝えるために特別に設計されています。

意味づけする区分化要素は、文書内のより大規模な構造を明確にします。以前の版の HTML には、関連するコンテンツをグループ化するための一般的なメカニズムとして `<div>` 要素だけがあり、意味づけが限られていましたが、これらの要素は、これを強化するためのものです。例えば、 `<div class="navigation">` はブラウザーにその内容についての意味を何も示唆しません。 HTML ソースを読む人間だけが、 `navigation` のようなクラスの意味を判断することができます。それに対して、 `<nav>` 区分化要素は、含まれているコンテンツをブラウザーやその他の端末により明確に説明します。リンクやその他のナビゲーション構造は、ユーザーがサイトやページのコンテンツのどこにいるかを理解して移動するのに役立ちます。

HTML5 には新しい意味づけする要素が追加され、コンテンツの意味的な領域においてウェブサイトの区分化を進化・明確化することができるようになりました。開発者は、これらの意味づけ要素を意図した目的に沿って使用することが重要です。多くのアクセシビリティツールや一部のブラウザーが提供しているリーダービューは、意味づけされた区分化要素に依存しています。そのため、既存の `<div>` 要素群を、一括での `<section>` 要素群に入れ替えてはいけません。

## HTML5 の区分化要素

- **HTML ナビゲーション要素** ({{HTMLElement("nav")}}) は、サイト上で頻繁に表示されるナビゲーションリンクを含む区間を定義します。主要なメニューと従属的なメニューが存在することがありますが、他の `<nav>` 要素の中に他の `<nav>` 要素を入れ子にすることはできません。
- **HTML 記事要素** ({{HTMLElement("article")}}) は、自己完結型のコンテンツの一部を定義します。単独のメインコンテンツを参照するものではなく、コメントやウィジェットに使用することができます。
- **HTML セクション要素** ({{HTMLElement("section")}}) は、意味的な意味の関連するグループ化を示すために、文書のセクションを定義します。 section 要素を使用して親要素に追加の文脈を提供することは、理にかなっています。
- **HTML 余談要素** ({{HTMLElement("aside")}}) は、メイン要素に関連してはいるが、本文の流れには属していない区間、例えば説明ボックスや広告などを定義します。 aside 要素は独自のアウトラインを持ちますが、本文のアウトラインには属しません。

### 区分化に使用されるその他の意味づけする HTML 要素

- **HTML 本文要素** ({{HTMLElement("body")}}) は、文書のすべての内容を定義します。これには、すべてのコンテンツと HTML 要素が含まれています。
- **HTML ヘッダー要素** ({{HTMLElement("header")}}) は、通常はロゴ、タイトル、ナビゲーションを含むページ領域を定義します。ヘッダーはまた、 `<article>` や `<section>` のような他の意味づけする要素の中で使用することもできます。セクションのヘッダーはセクションの見出し、著者名などを含むかもしれません。 {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} は、それぞれ独自の {{HTMLElement("header")}} を持つことができます。その名前にもかかわらず、ヘッダーは必ずしもページやセクションの先頭に配置されるわけではありません。
- **HTML フッター要素** ({{HTMLElement("footer")}}) はページのフッターを定義し、ふつうは著作権情報や法的事項を含み、いくつかのリンクを含む場合もあります。セクションに対して使用された場合は、フッターは区切られた部分のコンテンツの公開日やライセンス情報などを含むかもしれません。 {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} は、それぞれ独自の {{HTMLElement("footer")}} を持つことができます。その名前にもかかわらず、フッターは必ずしもページやセクションの末尾に配置されるわけではありません。

## 区分化要素はどのように機能するのか

```
 <body>
    <header>
      <nav>
        <ul>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
        </ul>
      </nav>
      <h1>
        Page Title
      </h1>
    </header>

    <section>
      <h2>
        My Blog Posts
      </h2>
      <article>
        <header>
          <p>
            Article Title
          </p>
        </header>
        <p>
          content
        </p>
      </article>
      <article>
        <header>
          <p>
            Article Title
          </p>
        </header>
        <p>
          content
        </p>
      </article>
      <aside>
        <p>
          Author info
        </p>
      </aside>
    </section>

    <footer>
      Copyright Info
    </footer>
  </body>
```

### nav 要素

`<nav>` はナビゲーションブロックを示し、主要なナビゲーションメニューに使用してください。

```
<nav>
  <ul>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
  </ul>
</nav>
```

#### 入れ子になったメニュー

`<nav>` 要素は入れ子にしてはいけません。 `<nav>` には、主要なメニューと従属的なメニューの両方を含めることができます。

```
<nav>
  <ul>
    <li><a href="#">primary link</a></li>
    <li>
      <a href="#">primary link</a>
      <ul>
        <li><a href="#">secondary link</a></li>
        <li><a href="#">secondary link</a></li>
      </ul>
    </li>
    <li><a href="#">primary link</a></li>
  </ul>
</nav>
```

#### リンク集

`<nav>` 要素は、サイトのナビゲーションメニューにのみ使用します。ソーシャルメディアのプロフィールまたはブログロールなどのリンク集は、 `<nav>` 要素で囲むべきではありません。

#### \<nav> 内の HTML 要素

リスト要素はナビゲーションでよく使われますが、必須というわけではありません。`<p>` などの他の要素を使用することができます。

### article 要素

`<article>` 要素は自己完結型のコンテンツを示します。つまり、`<article>` 要素を除く他のすべての HTML を削除しても、そのコンテンツが読者にとって意味を持つものです。

```
<article>
  <h1>How to Become an MDN Contributor</h1>
  <p>
    Do you want to help protect the web?....
  </p>
</article>
```

#### article 内で入れ子になった要素

`<article>` 要素は header, aside, footer などの他の意味づけ要素を持つことができます。これは、要素のクラスプロパティに CSS セレクターを追加して文書のスタイルを設定する場合に便利です。

```
<article>
  <header>
    <h1>How to Become an MDN Contributor</h1>
  </header>
  <p>
    Do you want to help protect the web?....
  </p>
  <aside>
    <blockquote>
      Amazing quote from article
    </blockquote>
  </aside>
  <footer>
    <p>
      Author info, publication date
    </p>
  </footer>
</article>
```

#### article と section の入れ子

article は section の中に含むことができ、 section は article の中に含むことができます。本に例えると、関連する記事でセクションに分割することができます。これらの article はどちらも関連する情報の section を含むことができます。

```
<section>
  <h1>Getting Involved</h1>
  <article>
    <header>
      <h2>How to Become an MDN Contributor</h2>
      <p>Do you want to help protect the web?....</p>
    </header>
    <section>
      <h3>Steps to Editing an Article</h3>
    </section>
    <footer>
      <p>Author info</p>
      <p>publication date</p>
    </footer>
  </article>
</section>
```

### section 要素

section 要素は、テーマによるコンテンツのグループ化のために使用されます。 W3C の仕様ふまえ、通常はセクションには見出しを含めるべきです。見出しに `<header>` 要素の使用が必須というわけではありません。

```
<section>
  <h1>Amazing MDN Contributors</h1>
    <ul>
      <li><img src="link" alt="descriptive text"></li>
      <li><img src="link" alt="descriptive text"></li>
      <li><img src="link" alt="descriptive text"></li>
    </ul>
</section>
```

### aside 要素

`<aside>` 要素は、メインコンテンツとは別に配置される関連コンテンツを定義します。しばしばコールアウト、引用ブロック、定義などに使用されます。 `<aside>` 要素は、追加だが関連性のある情報を含む補足情報によく使用されます。

```
<section>
  <h1>Amazing MDN Contributors</h1>
    <ul>
      <li><img src="link" alt="descriptive text"></li>
      <li><img src="link" alt="descriptive text"></li>
      <li><img src="link" alt="descriptive text"></li>
    </ul>
    <aside>
     <p>To get involved contact</p>
    </aside>
</section>
```

#### aside 要素の入れ子

`<aside>` 要素は、他の区分化 HTML 要素の内部に配置できます。 `<aside>` の内部に `<aside>` を含めることはできません。コールアウトボックスの中にコールアウトボックスを持たないということを意味します。

## HTML5 非対応ブラウザーでの HTML5 要素の利用

セクションと見出しの要素は、いくつかの手順を踏むことで多くの HTML5 非対応ブラウザーでも動作させることができます。オーディエンスの特定の対象が Internet Explorer 8 以前を使用している場合、以下の手順に従うと期待通りに動作させることができます。ただし、グローバルではこれらのブラウザーの使用はとても少なくなったので、そのような場面はわずかです。

HTML5 のセマンティック要素は特別な DOM インターフェイスを必要としませんが、これらに明示的に対応していない古いブラウザーは、特定の CSS スタイルが必要です。未知の要素は既定で `display: inline` としてスタイル付けされるため、これらには `display: block` と設定したいところです。

```css
article, aside, footer, header, nav, section {
  display: block;
}
```

もちろんウェブ開発者はそれらに異なるスタイルを指定できますが、 HTML5 非対応ブラウザーでは、そのような要素のための既定のスタイル指定が意図通りにはならないことを忘れないでください。 {{HTMLElement("time")}} 要素が含まれていないのは、 HTML5 非対応ブラウザーのそれに対する既定のスタイル指定が、 HTML5 対応ブラウザーにおけるスタイル指定と同じだからということにも注意してください。

さらに、より古いバージョンの IE では、 DOM のインスタンスを生成しない限り、対応していない要素のスタイル指定ができません。以下のように、特定のスクリプトを追加することで実現することができます。

```xml
<!--[if lt IE 9]>
  <script>
    document.createElement("article");
    document.createElement("aside");
    document.createElement("footer");
    document.createElement("header");
    document.createElement("nav");
    document.createElement("section");
    document.createElement("time");
  </script>
<![endif]-->
```

最後の予防措置として、 {{HTMLElement("noscript")}} 要素を {{HTMLElement("head")}} 要素内に明示的に追加して、 JavaScript を無効にしたユーザーに対して、このページが JavaScript に依存していることを警告することができます。

```xml
<noscript>
  <p><strong>このウェブページは JavaScript を有効にする必要があります。</strong></p>
  <p>JavaScript はオブジェクト指向のコンピュータープログラミング言語で、
    ウェブブラウザー内で対話的な効果を生成するためによく使われます。</p>
  <p><a href="https://goo.gl/koeeaJ">JavaScript を有効化する方法</a></p>
</noscript>
```

まとめると、 Internet Explorer (バージョン 8 以下) を含め、また、それらのブラウザーがスクリプトを利用しないように設定されていても正しく表示を代替する、 HTML5 非対応ブラウザー向けの HTML5 のセクショニングおよび見出し要素の対応を可能にするコードは以下になります。

```xml
<!--[if lt IE 9]>
  <script>
    document.createElement("article");
    document.createElement("aside");
    document.createElement("footer");
    document.createElement("header");
    document.createElement("nav");
    document.createElement("section");
    document.createElement("time");
  </script>
<![endif]-->
<noscript>
  <p><strong>このウェブページは JavaScript を有効にする必要があります。</strong></p>
  <p>JavaScript はオブジェクト指向のコンピュータープログラミング言語で、
    ウェブブラウザー内で対話的な効果を生成するためによく使われます。</p>
  <p><a href="https://goo.gl/koeeaJ">JavaScript を有効化する方法</a></p>
</noscript>
```

> **メモ:** このコードは [HTML validator](https://validator.w3.org/) ではエラーが発生します。これは必ずしも本当に悪いことだとは言えません — サイトには若干のバリデーションエラーがあるものです — が、気を付けなければなりません。

## まとめ

HTML5 で導入された新しい意味づけ要素により、標準的な方法でウェブ文書の構造を記述することができるようになります。これらの要素は、 HTML5 ブラウザーを持っていて、ページを理解するのに役立つ構造を必要としている人、例えば、何らかの支援技術の助けを必要としている人に大きな利点をもたらします。これらの新しい意味づけ要素は使用が簡単で、負担がほとんどなく、 HTML5 に非対応のブラウザーでも動作するようにすることができます。したがって、それらは制限なく使用されるべきです。
