---
title: Node.namespaceURI
slug: Web/API/Element/namespaceURI
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - 要更新
translation_of: Web/API/Node/namespaceURI
original_slug: Web/API/Node/namespaceURI
---
<p>{{ ApiRef() }}</p>
<h3 id=".E6.A6.82.E8.A6.81" name=".E6.A6.82.E8.A6.81">概要</h3>
<p>ノードの名前空間 URI か、もし指定されていなければ <code>null</code>(読み込み専用)。</p>
<h3 id=".E6.A7.8B.E6.96.87" name=".E6.A7.8B.E6.96.87">構文</h3>
<pre class="eval"><i>namespace</i> =<i>node</i>.namespaceURI
</pre>
<ul>
 <li><code>namespace</code> は指定されたノードの名前空間 URI を表す文字列です。</li>
</ul>
<h3 id=".E4.BE.8B" name=".E4.BE.8B">例</h3>
<p>この断片では、ノードの <a href="/ja/DOM/element.localName">localName</a> と <code>namespaceURI</code> が試験されます。もし、<code>namespaceURI</code> が XUL の名前空間を返し、<code>localName</code> が "browser" を返せば、そのノードは XUL の <code>&lt;browser/&gt;</code> と理解されます。</p>
<pre>if (node.localName == "browser" &amp;&amp;
    node.namespaceURI == "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul") {
  // これは XUL browser です。
}
</pre>
<h3 id=".E6.B3.A8.E8.A8.98" name=".E6.B3.A8.E8.A8.98">注記</h3>
<p>これは、スコープ中の名前空間宣言の調査を基づいた、名前空間検索の結果である、計算された値ではありません。単に作成時に与えられた名前空間 URI です。</p>
<p><code>ELEMENT_NODE</code> と <code>ATTRIBUTE_NODE</code> 以外の<a href="/ja/DOM/element.nodeType">種類</a>全てに属すノードと, <code><a href="/ja/DOM/document.createElement">document.createElement</a></code> のような DOM Level 1 のメソッドで作られたノードでは、常に <code>namespaceURI</code> は <code>null</code> です。</p>
<p>DOM Level 2 の <a href="/ja/DOM/document.createElementNS">document.createElementNS</a> メソッドを使うことで、特定の <code>namespaceURI</code> を持った要素を作ることができます。</p>
<p><a class="external" href="http://www.w3.org/TR/xml-names11/">Namespaces in XML</a> によれば、属性はその要素から名前空間を継承しません。もし属性が特定の名前空間を与えられていなければ、その属性は名前空間をもちません。</p>
<h3 id=".E4.BB.95.E6.A7.98" name=".E4.BB.95.E6.A7.98">仕様</h3>
<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-NodeNSname">DOM Level 2 Core: namespaceURI</a></p>
<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations">DOM Level 2 Core: XML Namespaces</a></p>
