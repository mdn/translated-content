---
title: HTML のセクションとアウトラインの使用
slug: orphaned/Web/Guide/HTML/Using_HTML_sections_and_outlines
tags:
  - Advanced
  - Example
  - Guide
  - HTML
  - HTML5
  - Outlines
  - Overview
  - Sections
  - Web
translation_of: Web/Guide/HTML/Using_HTML_sections_and_outlines
original_slug: Web/Guide/HTML/Using_HTML_sections_and_outlines
---
<div>{{HTMLSidebar}}</div>

<div class="warning">
<p><strong>重要</strong>: ウェブブラウザーや支援技術の中で、提案されているアウトラインアルゴリズムを実装したものはありません。これは最終的な W3C の仕様書に含まれていません。したがって、<a href="https://www.w3.org/TR/html5/sections.html#outline">アウトライン</a>アルゴリズムを、ユーザーに文書の構造を伝えるために<em>使用するべきではありません</em>。作者には、見出しの<a href="https://www.w3.org/TR/html5/sections.html#rank">順位</a> (<code><a href="https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements">h1</a></code>-<code><a href="https://www.w3.org/TR/html5/sections.html#the-h1-h2-h3-h4-h5-and-h6-elements">h6</a></code>) を使用して文書の構造を伝えることを推奨します。</p>
</div>

<p>HTML5 の仕様書では、文書の構造を整理するのに役立つ意味づけする区分化要素がいくつか導入されました。意味づけする区分化要素は、ブラウザーや読み上げアプリや音声アシスタントなど、ユーザーに代わって文書を解釈する他の技術に構造的な意味を伝えるために特別に設計されています。</p>

<p>意味づけする区分化要素は、文書内のより大規模な構造を明確にします。以前の版の HTML には、関連するコンテンツをグループ化するための一般的なメカニズムとして <code>&lt;div&gt;</code> 要素だけがあり、意味づけが限られていましたが、これらの要素は、これを強化するためのものです。例えば、 <code>&lt;div class="navigation"&gt;</code> はブラウザーにその内容についての意味を何も示唆しません。 HTML ソースを読む人間だけが、 <code>navigation</code> のようなクラスの意味を判断することができます。それに対して、 <code>&lt;nav&gt;</code> 区分化要素は、含まれているコンテンツをブラウザーやその他の端末により明確に説明します。リンクやその他のナビゲーション構造は、ユーザーがサイトやページのコンテンツのどこにいるかを理解して移動するのに役立ちます。</p>

<p>HTML5 には新しい意味づけする要素が追加され、コンテンツの意味的な領域においてウェブサイトの区分化を進化・明確化することができるようになりました。開発者は、これらの意味づけ要素を意図した目的に沿って使用することが重要です。多くのアクセシビリティツールや一部のブラウザーが提供しているリーダービューは、意味づけされた区分化要素に依存しています。そのため、既存の <code>&lt;div&gt;</code> 要素群を、一括での <code>&lt;section&gt;</code> 要素群に入れ替えてはいけません。</p>

<h2 id="Section_Elements_in_HTML5" name="Section_Elements_in_HTML5">HTML5 の区分化要素</h2>

<ul>
 <li><strong>HTML ナビゲーション要素</strong> ({{HTMLElement("nav")}}) は、サイト上で頻繁に表示されるナビゲーションリンクを含む区間を定義します。主要なメニューと従属的なメニューが存在することがありますが、他の <code>&lt;nav&gt;</code> 要素の中に他の <code>&lt;nav&gt;</code> 要素を入れ子にすることはできません。</li>
 <li><strong>HTML 記事要素</strong> ({{HTMLElement("article")}}) は、自己完結型のコンテンツの一部を定義します。単独のメインコンテンツを参照するものではなく、コメントやウィジェットに使用することができます。</li>
 <li><strong>HTML セクション要素</strong> ({{HTMLElement("section")}}) は、意味的な意味の関連するグループ化を示すために、文書のセクションを定義します。 section 要素を使用して親要素に追加の文脈を提供することは、理にかなっています。</li>
 <li><strong>HTML 余談要素</strong> ({{HTMLElement("aside")}}) は、メイン要素に関連してはいるが、本文の流れには属していない区間、例えば説明ボックスや広告などを定義します。 aside 要素は独自のアウトラインを持ちますが、本文のアウトラインには属しません。</li>
</ul>

<h3 id="Other_Semantic_HTML_elements_used_in_Sectioning" name="Other_Semantic_HTML_elements_used_in_Sectioning">区分化に使用されるその他の意味づけする HTML 要素</h3>

<ul>
 <li><strong>HTML 本文要素</strong> ({{HTMLElement("body")}}) は、文書のすべての内容を定義します。これには、すべてのコンテンツと HTML 要素が含まれています。</li>
 <li><strong>HTML ヘッダー要素</strong> ({{HTMLElement("header")}}) は、通常はロゴ、タイトル、ナビゲーションを含むページ領域を定義します。ヘッダーはまた、 <code>&lt;article&gt;</code> や <code>&lt;section&gt;</code> のような他の意味づけする要素の中で使用することもできます。セクションのヘッダーはセクションの見出し、著者名などを含むかもしれません。 {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} は、それぞれ独自の {{HTMLElement("header")}} を持つことができます。その名前にもかかわらず、ヘッダーは必ずしもページやセクションの先頭に配置されるわけではありません。</li>
 <li><strong>HTML フッター要素</strong> ({{HTMLElement("footer")}}) はページのフッターを定義し、ふつうは著作権情報や法的事項を含み、いくつかのリンクを含む場合もあります。セクションに対して使用された場合は、フッターは区切られた部分のコンテンツの公開日やライセンス情報などを含むかもしれません。 {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} は、それぞれ独自の {{HTMLElement("footer")}} を持つことができます。その名前にもかかわらず、フッターは必ずしもページやセクションの末尾に配置されるわけではありません。</li>
</ul>

<h2 id="How_Do_Sectional_Elements_Work" name="How_Do_Sectional_Elements_Work">区分化要素はどのように機能するのか</h2>

<pre class="notranslate"> &lt;body&gt;
    &lt;header&gt;
      &lt;nav&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href="#"&gt;link&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;link&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;link&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;
      &lt;h1&gt;
        Page Title
      &lt;/h1&gt;
    &lt;/header&gt;

    &lt;section&gt;
      &lt;h2&gt;
        My Blog Posts
      &lt;/h2&gt;
      &lt;article&gt;
        &lt;header&gt;
          &lt;p&gt;
            Article Title
          &lt;/p&gt;
        &lt;/header&gt;
        &lt;p&gt;
          content
        &lt;/p&gt;
      &lt;/article&gt;
      &lt;article&gt;
        &lt;header&gt;
          &lt;p&gt;
            Article Title
          &lt;/p&gt;
        &lt;/header&gt;
        &lt;p&gt;
          content
        &lt;/p&gt;
      &lt;/article&gt;
      &lt;aside&gt;
        &lt;p&gt;
          Author info
        &lt;/p&gt;
      &lt;/aside&gt;
    &lt;/section&gt;

    &lt;footer&gt;
      Copyright Info
    &lt;/footer&gt;
  &lt;/body&gt;</pre>

<h3 id="Nav_Element" name="Nav_Element">nav 要素</h3>

<p><code>&lt;nav&gt;</code> はナビゲーションブロックを示し、主要なナビゲーションメニューに使用してください。</p>

<pre class="notranslate">&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;link&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;link&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</pre>

<h4 id="Nesting_Menus" name="Nesting_Menus">入れ子になったメニュー</h4>

<p><code>&lt;nav&gt;</code> 要素は入れ子にしてはいけません。 <code>&lt;nav&gt;</code> には、主要なメニューと従属的なメニューの両方を含めることができます。</p>

<pre class="notranslate">&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;primary link&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;
      &lt;a href="#"&gt;primary link&lt;/a&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;secondary link&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;secondary link&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;primary link&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</pre>

<h4 id="Collection_of_Links" name="Collection_of_Links">リンク集</h4>

<p><code>&lt;nav&gt;</code> 要素は、サイトのナビゲーションメニューにのみ使用します。ソーシャルメディアのプロフィールまたはブログロールなどのリンク集は、 <code>&lt;nav&gt;</code> 要素で囲むべきではありません。</p>

<h4 id="HTML_Elements_in_&lt;nav>" name="HTML_Elements_in_&lt;nav>">&lt;nav&gt; 内の HTML 要素</h4>

<p>リスト要素はナビゲーションでよく使われますが、必須というわけではありません。<code>&lt;p&gt;</code> などの他の要素を使用することができます。</p>

<h3 id="Article_Element" name="Article_Element">article 要素</h3>

<p><code>&lt;article&gt;</code> 要素は自己完結型のコンテンツを示します。つまり、<code>&lt;article&gt;</code> 要素を除く他のすべての HTML を削除しても、そのコンテンツが読者にとって意味を持つものです。</p>

<pre class="notranslate">&lt;article&gt;
  &lt;h1&gt;How to Become an MDN Contributor&lt;/h1&gt;
  &lt;p&gt;
    Do you want to help protect the web?....
  &lt;/p&gt;
&lt;/article&gt;</pre>

<h4 id="Nesting_Elements_Inside_an_Article" name="Nesting_Elements_Inside_an_Article">article 内で入れ子になった要素</h4>

<p><code>&lt;article&gt;</code> 要素は header, aside, footer などの他の意味づけ要素を持つことができます。これは、要素のクラスプロパティに CSS セレクターを追加して文書のスタイルを設定する場合に便利です。</p>

<pre class="notranslate">&lt;article&gt;
  &lt;header&gt;
    &lt;h1&gt;How to Become an MDN Contributor&lt;/h1&gt;
  &lt;/header&gt;
  &lt;p&gt;
    Do you want to help protect the web?....
  &lt;/p&gt;
  &lt;aside&gt;
    &lt;blockquote&gt;
      Amazing quote from article
    &lt;/blockquote&gt;
  &lt;/aside&gt;
  &lt;footer&gt;
    &lt;p&gt;
      Author info, publication date
    &lt;/p&gt;
  &lt;/footer&gt;
&lt;/article&gt;</pre>

<h4 id="Nesting_articles_and_sections" name="Nesting_articles_and_sections">article と section の入れ子</h4>

<p>article は section の中に含むことができ、 section は article の中に含むことができます。本に例えると、関連する記事でセクションに分割することができます。これらの article はどちらも関連する情報の section を含むことができます。</p>

<pre class="notranslate">&lt;section&gt;
  &lt;h1&gt;Getting Involved&lt;/h1&gt;
  &lt;article&gt;
    &lt;header&gt;
      &lt;h2&gt;How to Become an MDN Contributor&lt;/h2&gt;
      &lt;p&gt;Do you want to help protect the web?....&lt;/p&gt;
    &lt;/header&gt;
    &lt;section&gt;
      &lt;h3&gt;Steps to Editing an Article&lt;/h3&gt;
    &lt;/section&gt;
    &lt;footer&gt;
      &lt;p&gt;Author info&lt;/p&gt;
      &lt;p&gt;publication date&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/article&gt;
&lt;/section&gt;</pre>

<h3 id="Section_Element" name="Section_Element">section 要素</h3>

<p>section 要素は、テーマによるコンテンツのグループ化のために使用されます。 W3C の仕様ふまえ、通常はセクションには見出しを含めるべきです。見出しに <code>&lt;header&gt;</code> 要素の使用が必須というわけではありません。</p>

<pre class="notranslate">&lt;section&gt;
  &lt;h1&gt;Amazing MDN Contributors&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;img src="link" alt="descriptive text"&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="link" alt="descriptive text"&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="link" alt="descriptive text"&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;</pre>

<h3 id="Aside_Element" name="Aside_Element">aside 要素</h3>

<p><code>&lt;aside&gt;</code> 要素は、メインコンテンツとは別に配置される関連コンテンツを定義します。しばしばコールアウト、引用ブロック、定義などに使用されます。 <code>&lt;aside&gt;</code> 要素は、追加だが関連性のある情報を含む補足情報によく使用されます。</p>

<pre class="notranslate">&lt;section&gt;
  &lt;h1&gt;Amazing MDN Contributors&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;img src="link" alt="descriptive text"&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="link" alt="descriptive text"&gt;&lt;/li&gt;
      &lt;li&gt;&lt;img src="link" alt="descriptive text"&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;aside&gt;
     &lt;p&gt;To get involved contact&lt;/p&gt;
    &lt;/aside&gt;
&lt;/section&gt;</pre>

<h4 id="Nesting_Aside_Elements" name="Nesting_Aside_Elements">aside 要素の入れ子</h4>

<p><code>&lt;aside&gt;</code> 要素は、他の区分化 HTML 要素の内部に配置できます。 <code>&lt;aside&gt;</code> の内部に <code>&lt;aside&gt;</code> を含めることはできません。コールアウトボックスの中にコールアウトボックスを持たないということを意味します。</p>

<h2 id="Using_HTML5_elements_in_non-HTML5_browsers" name="Using_HTML5_elements_in_non-HTML5_browsers">HTML5 非対応ブラウザーでの HTML5 要素の利用</h2>

<p>セクションと見出しの要素は、いくつかの手順を踏むことで多くの HTML5 非対応ブラウザーでも動作させることができます。オーディエンスの特定の対象が Internet Explorer 8 以前を使用している場合、以下の手順に従うと期待通りに動作させることができます。ただし、グローバルではこれらのブラウザーの使用はとても少なくなったので、そのような場面はわずかです。</p>

<p>HTML5 のセマンティック要素は特別な DOM インターフェイスを必要としませんが、これらに明示的に対応していない古いブラウザーは、特定の CSS スタイルが必要です。未知の要素は既定で <code>display: inline</code> としてスタイル付けされるため、これらには <code>display: block</code> と設定したいところです。</p>

<pre class="brush: css notranslate">article, aside, footer, header, nav, section {
  display: block;
}
</pre>

<p>もちろんウェブ開発者はそれらに異なるスタイルを指定できますが、 HTML5 非対応ブラウザーでは、そのような要素のための既定のスタイル指定が意図通りにはならないことを忘れないでください。 {{HTMLElement("time")}} 要素が含まれていないのは、 HTML5 非対応ブラウザーのそれに対する既定のスタイル指定が、 HTML5 対応ブラウザーにおけるスタイル指定と同じだからということにも注意してください。</p>

<p>さらに、より古いバージョンの IE では、 DOM のインスタンスを生成しない限り、対応していない要素のスタイル指定ができません。以下のように、特定のスクリプトを追加することで実現することができます。</p>

<pre class="brush:xml notranslate">&lt;!--[if lt IE 9]&gt;
  &lt;script&gt;
    document.createElement("article");
    document.createElement("aside");
    document.createElement("footer");
    document.createElement("header");
    document.createElement("nav");
    document.createElement("section");
    document.createElement("time");
  &lt;/script&gt;
&lt;![endif]--&gt;
</pre>

<p>最後の予防措置として、 {{HTMLElement("noscript")}} 要素を {{HTMLElement("head")}} 要素内に明示的に追加して、 JavaScript を無効にしたユーザーに対して、このページが JavaScript に依存していることを警告することができます。</p>

<pre class="brush:xml notranslate">&lt;noscript&gt;
  &lt;p&gt;&lt;strong&gt;このウェブページは JavaScript を有効にする必要があります。&lt;/strong&gt;&lt;/p&gt;
  &lt;p&gt;JavaScript はオブジェクト指向のコンピュータープログラミング言語で、
    ウェブブラウザー内で対話的な効果を生成するためによく使われます。&lt;/p&gt;
  &lt;p&gt;&lt;a href="https://goo.gl/koeeaJ"&gt;JavaScript を有効化する方法&lt;/a&gt;&lt;/p&gt;
&lt;/noscript&gt;
</pre>

<p>まとめると、 Internet Explorer (バージョン 8 以下) を含め、また、それらのブラウザーがスクリプトを利用しないように設定されていても正しく表示を代替する、 HTML5 非対応ブラウザー向けの HTML5 のセクショニングおよび見出し要素の対応を可能にするコードは以下になります。</p>

<pre class="brush:xml notranslate">&lt;!--[if lt IE 9]&gt;
  &lt;script&gt;
    document.createElement("article");
    document.createElement("aside");
    document.createElement("footer");
    document.createElement("header");
    document.createElement("nav");
    document.createElement("section");
    document.createElement("time");
  &lt;/script&gt;
&lt;![endif]--&gt;
&lt;noscript&gt;
  &lt;p&gt;&lt;strong&gt;このウェブページは JavaScript を有効にする必要があります。&lt;/strong&gt;&lt;/p&gt;
  &lt;p&gt;JavaScript はオブジェクト指向のコンピュータープログラミング言語で、
    ウェブブラウザー内で対話的な効果を生成するためによく使われます。&lt;/p&gt;
  &lt;p&gt;&lt;a href="https://goo.gl/koeeaJ"&gt;JavaScript を有効化する方法&lt;/a&gt;&lt;/p&gt;
&lt;/noscript&gt;
</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: このコードは <a href="https://validator.w3.org/">HTML validator</a> ではエラーが発生します。これは必ずしも本当に悪いことだとは言えません — サイトには若干のバリデーションエラーがあるものです — が、気を付けなければなりません。</p>
</div>

<h2 id="Conclusion" name="Conclusion">まとめ</h2>

<p>HTML5 で導入された新しい意味づけ要素により、標準的な方法でウェブ文書の構造を記述することができるようになります。これらの要素は、 HTML5 ブラウザーを持っていて、ページを理解するのに役立つ構造を必要としている人、例えば、何らかの支援技術の助けを必要としている人に大きな利点をもたらします。これらの新しい意味づけ要素は使用が簡単で、負担がほとんどなく、 HTML5 に非対応のブラウザーでも動作するようにすることができます。したがって、それらは制限なく使用されるべきです。</p>
