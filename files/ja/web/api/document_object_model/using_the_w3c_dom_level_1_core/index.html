---
title: W3C DOM Level 1 Core の使用
slug: Web/API/Document_Object_Model/Using_the_W3C_DOM_Level_1_Core
tags:
  - DOM
  - NeedsUpdate
translation_of: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
---
<div>{{DefaultAPISidebar("DOM")}}</div>

<p>W3C の <a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html">DOM Level 1 Core</a> は、 (他の文書のツリー風の型の中で) HTML や XML 文書の DOM ツリーを操作するための API です。 DOM は広く普及しているので、この API は Mozilla Firefox や Microsoft Internet Explorer、サーバーを含むすべての主要なブラウザーが対応しています。ウェブにおけるスクリプティングの未来を担う強力な基盤なのです。</p>

<h2 id="What_is_a_content_tree.3F" name="What_is_a_content_tree.3F">DOM ツリーとは？</h2>

<p><a href="https://www.w3.org/TR/REC-DOM-Level-1/introduction.html">DOM</a> ツリーは一種の <a href="https://en.wikipedia.org/wiki/Tree_structure">ツリー構造</a>で、ノードが HTML または XML 文書のコンテンツを表します。それぞれの HTML または XML 文書は固有の DOM ツリーの表現を持っています。例えば、以下の文書をご覧ください。</p>

<pre class="brush: html notranslate">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Header&lt;/h1&gt;
  &lt;p&gt;Paragraph&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>これは以下のように見える DOM ツリーを持っています。</p>

<p><img alt="image:Using_the_W3C_DOM_Level_1_Core-doctree.jpg" class="internal" src="/@api/deki/files/415/=Using_the_W3C_DOM_Level_1_Core-doctree.jpg"></p>

<p>(なお、上位のツリーは上記の文書の DOM ツリーと似ていますが、同じではありません。<a href="/ja/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM">実際の DOM ツリーはホワイトスペースを温存するからです</a>。)</p>

<p>ウェブブラウザーが HTML 文書を解釈するとき、ブラウザーは DOM ツリーを構築し、文書を表示するために使用します。</p>

<h2 id="What_does_the_DOM_Level_1_Core_let_me_do.3F" name="What_does_the_DOM_Level_1_Core_let_me_do.3F">DOM Level 1 Core で何ができるの？</h2>

<p>W3C DOM Level 1 Core によって<em>何でも好きな方法で</em> DOM ツリーを変更できます。これは、任意の HTML や XML 文書をゼロから作成したり、与えられた HTML や XML 文書の内容を変更したりすることができることを意味します。ウェブページの作者が文書の DOM を編集する最も簡単な方法は、 JavaScript を使ってグローバルオブジェクトの <code>document</code> プロパティにアクセスすることです。この <code>document</code> オブジェクトは、W3C の DOM Level 1 仕様の <a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#i-Document">Document インターフェイス</a> を実装しています。</p>

<h2 id="A_simple_example" name="A_simple_example">簡単な例</h2>

<p>上の文書を元に作者は、ヘッダの内容を変え、1つある段落を 2 つに書き換えたいものとしましょう。これは以下のスクリプトによってできます。</p>

<h3 id="HTML_Content" name="HTML_Content">HTML コンテンツ</h3>

<pre class="brush: html notranslate">&lt;body&gt;
&lt;input type="button" value="Change this document." onclick="change()"&gt;
&lt;h2&gt;Header&lt;/h2&gt;
&lt;p&gt;Paragraph&lt;/p&gt;
&lt;/body&gt;<span>
</span></pre>

<h3 id="JavaScript_Content" name="JavaScript_Content">JavaScript コンテンツ</h3>

<pre class="brush: js notranslate"><span>  function change() {
    // document.getElementsByTagName("H2") は、文書内の &lt;h2&gt; 要素の NodeList
    // であり、最初のものは0番です。

    var header = document.getElementsByTagName("H2").item(0);
    // header の firstChild はテキストノードです。
    header.firstChild.data = "A dynamic document";
    // ヘッダーが "A dynamic document" になりました。

    var para = document.getElementsByTagName("P").item(0);
    para.firstChild.data = "This is the first paragraph.";

    // 第二の段落のために新しいテキストノードを生成します
    var newText = document.createTextNode("This is the second paragraph.");
    // 第二の段落になる新しい Element を生成します
    var newElement = document.createElement("P");
    // 段落にテキストを置きます
    newElement.appendChild(newText);
    // また、 (段落の親に当たる) BODY に追加することで、文書の最後に
    // 段落を置きます
    para.parentNode.appendChild(newElement);
  }</span></pre>

<p>{{ EmbedLiveSample('A_simple_example', 800, 300) }}</p>

<p>このスクリプトを<a class="internal" href="/@api/deki/files/2866/=example.html">完全なデモ</a>として見ることができます。</p>

<h2 id="How_can_I_learn_more.3F" name="How_can_I_learn_more.3F">どうすればもっと学べるの？</h2>

<p>DOM の基本概念に親しんでもらいましたが、 <a href="/ja/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces">DOM Level 1 の基本的なメソッド</a>について学習したくなるかもしれません。</p>

<p>W3C の <a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html">DOM Level 1 Core 仕様書</a> も参照して下さい。公式仕様ではありますが結構読みやすいです。特に各 DOM オブジェクトとその全プロパティ及びメソッドの説明が役立ちます。<a href="/ja/docs/Web/API/Document_Object_Model">その他の DOM 関連文書</a> も参照して下さい。</p>

<div class="originaldocinfo">
<p><strong>原著情報</strong></p>

<ul>
 <li>著者: L. David Baron &lt;dbaron at dbaron dot org&gt;</li>
 <li>著作権情報: © 1998-2005 by individual mozilla.org contributors; content available under a <a class="external" href="http://www.mozilla.org/foundation/licensing/website-content.html">Creative Commons license</a></li>
</ul>
</div>
