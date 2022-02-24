---
title: Node.firstChild
slug: Web/API/Node/firstChild
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - Node
translation_of: Web/API/Node/firstChild
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>ノードのツリーの中で最初の子ノード、もしくは子ノードがなければ <code>null</code> を返します。ノードが <code>Document</code> の場合は、その直接の子のリスト内の最初のノードを返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox">var <var>childNode</var> = <var>node</var>.firstChild;
</pre>
<ul>
 <li><code>childNode</code> : node の最初の子ノードがあればその参照、無い場合は <code>null</code></li>
</ul>
<h2 id="Example" name="Example">例</h2>
<p>次の例では <code>firstChild</code> の使用方法と、このプロパティを使用すると空白ノードがどのように影響するかをデモンストレーションしています。Gecko DOM に於ける空白の扱われ方についてより多くの情報を得るために、{{Anch("Notes")}} も参照してください。</p>
<pre class="brush:html">&lt;p id="para-01"&gt;
  &lt;span&gt;First span&lt;/span&gt;
&lt;/p&gt;

&lt;script type="text/javascript"&gt;
  var p01 = document.getElementById('para-01');
  alert(p01.firstChild.nodeName)
&lt;/script&gt;</pre>
<p>上記の例では alert は'#text'を表示します。なぜなら開始タグ &lt;p&gt; の末端と &lt;span&gt; の間にある空白を調整するためにテキストノードが挿入されているからです。<b>どんな</b> 空白、単一スペースから多数のスペース、改行、タブ等々、も #text ノードを挿入することになります。</p>
<p>その他の #text ノードは閉じタグ &lt;/span&gt; と &lt;/p&gt; の間に挿入されていみます。</p>
<p>もしこの空白がソースから取り除かれれば、#text ノードは挿入されず、span 要素は段落の最初の子ノードとなります。</p>
<pre class="brush:html">&lt;p id="para-01"&gt;&lt;span&gt;First span&lt;/span&gt;&lt;/p&gt;

&lt;script type="text/javascript"&gt;
  var p01 = document.getElementById('para-01');
  alert(p01.firstChild.nodeName)
&lt;/script&gt;
</pre>
<p>今度は alert は 'SPAN' を表示するでしょう。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-firstChild">DOM Level 1 Core: firstChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-169727388">DOM Level 2 Core: firstChild</a></li>
</ul>
