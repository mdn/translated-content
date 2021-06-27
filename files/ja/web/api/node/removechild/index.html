---
title: Node.removeChild
slug: Web/API/Node/removeChild
tags:
  - DOM
  - Gecko
  - Node
translation_of: Web/API/Node/removeChild
---
<p><code><strong>Node.removeChild()</strong></code> メソッドは、 DOM から子ノードを取り除きます。取り除いたノードを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>var oldChild</em> = <em>node</em>.removeChild(<em>child</em>);
<strong>または</strong>
<em>node</em>.removeChild(<em>child</em>);
</pre>

<ul>
 <li><code>child</code> は DOM から取り除く、子ノードです。</li>
 <li><font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">node</span></font> は <code>child</code> の親ノードです。</li>
 <li><code>oldChild</code> は 取り除かれた子ノードへの参照を保持します。 <code>oldChild</code> === <code>child</code> です。</li>
</ul>

<p>取り除かれた子ノードはメモリ内に残りますが、 DOM の一部ではなくなります。最初の構文にある通り、取り除いたノードは、 <code>oldChild</code> オブジェクト参照を通じて、後でコード中で再利用することができます。</p>

<p>しかし、第二の構文では <code>oldChild</code> の参照が保持されないので、コードが他の場所でノードへの参照を持っていなければ、直ちに使用できなくなり、無関係になり、ふつうはまもなくメモリから <a href="/ja/docs/Web/JavaScript/Memory_Management">自動的に削除</a>されます。</p>

<p><code>child</code> が実際には <code>element</code> ノードの子ではない場合、このメソッドは例外を発生します。これは <code>child</code> が呼び出し時には実際に <code>element</code> の子であったものの、要素を取り除こうと呼び出されたイベントハンドラーによって削除された場合にも発生します。</p>

<p>このメソッドでは、2つの異なる方法で例外が発生します。</p>

<ol>
 <li>
  <p><code>child</code> が実際に <code>element</code> の子であり、 DOM 上に存在していたが削除された場合、このメソッドでは次の例外が発生します。</p>

  <p><code>Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node</code>.</p>
 </li>
 <li>
  <p><code>child</code> がページの DOM 上に存在しない場合、このメソッドでは次の例外が発生します。<br>
   <br>
   <code>Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.</code></p>
 </li>
</ol>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: html">&lt;!-- 対象とする HTML のコード --&gt;
&lt;div id="top" &gt; &lt;/div&gt;

&lt;script type="text/javascript"&gt;
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");

      var garbage = top.removeChild(nested);    //Test Case 2: the method throws the exception (2)

&lt;/script&gt;

&lt;!--Sample HTML code--&gt;
&lt;div id="top"&gt;
 &lt;div id="nested"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script type="text/javascript"&gt;
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");

      var garbage = top.removeChild(nested); // This first call remove correctly the node

      // ......
      garbage = top.removeChild(nested);   // Test Case 1: the method in the second call here, throws the exception (1)

&lt;/script&gt;

</pre>

<pre class="brush: html">&lt;!--Sample HTML code--&gt;

&lt;div id="top"&gt;
  &lt;div id="nested"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush:js">// 親ノードから指定した子要素を除去
var d = document.getElementById("top");
var d_nested = document.getElementById("nested");
var throwawayNode = d.removeChild(d_nested);
</pre>

<pre class="brush:js">// 親要素が不明、不定の場合の方法
var node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
</pre>

<pre class="brush:js">// 要素の全ての子を除去
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild">DOM Level 1 Core: removeChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066">DOM Level 2 Core: removeChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066">DOM Level 3 Core: removeChild</a></li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Node.removeChild")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Node.replaceChild")}}</li>
 <li>{{domxref("Node.parentNode")}}</li>
 <li>{{domxref("ChildNode.remove")}}</li>
</ul>

<div>{{APIRef("DOM")}}</div>
