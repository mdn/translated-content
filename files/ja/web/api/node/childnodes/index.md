---
title: Node.childNodes
slug: Web/API/Node/childNodes
tags:
  - API
  - DOM
  - DOMリファレンス
  - プロパティ
  - リファレンス
translation_of: Web/API/Node/childNodes
---
<p>{{ ApiRef() }}</p>

<p><code><strong>Node.childNodes</strong></code>読み取り専用プロパティは、最初の子ノードにインデックス0が割り当てられている、指定された要素の子{{domxref("Node","nodes")}}の現在の{{domxref("NodeList")}}を返します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">let <var>nodeList</var> = <var>elementNodeReference</var>.childNodes;
</pre>

<h2 id=".E6.9B.B8.E5.BC.8F.E3.81.A8.E5.80.A4" name=".E6.9B.B8.E5.BC.8F.E3.81.A8.E5.80.A4">例</h2>

<h3 id="簡単な使用方法">簡単な使用方法</h3>

<pre class="brush:js line-numbers  language-js"><code class="language-js"><span class="comment token">// 変数pargは&lt;p&gt;要素へのオブジェクト参照です</span>

<span class="comment token">// まず、pargが子ノードを持っているかをチェックします</span>
<span class="keyword token">if</span> <span class="punctuation token">(</span>parg<span class="punctuation token">.</span><span class="function token">hasChildNodes</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> children <span class="operator token">=</span> parg<span class="punctuation token">.</span>childNodes<span class="punctuation token">;</span>

  <span class="keyword token">for</span> <span class="punctuation token">(</span><span class="keyword token">let</span> i <span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">;</span> i <span class="operator token">&lt;</span> children<span class="punctuation token">.</span>length<span class="punctuation token">;</span> i<span class="operator token">++</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// for文を使って各ノードにchildren[i]としてアクセスします
    // 注意！ NodeListは不変ではないので、ノードを追加したり削除したりするとchildren.lengthは変化します</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span></code></pre>

<h3 id="ノードから全ての子を削除する">ノードから全ての子を削除する</h3>

<pre class="brush:js line-numbers  language-js"><code class="language-js"><span class="comment token">// これは一例ですが、この方法でノードからすべての子ノードを削除することができます</span>
<span class="comment token">// let box = document.getElementById(/**/)</span>;

<span class="keyword token">while</span> <span class="punctuation token">(</span>box<span class="punctuation token">.</span>firstChild<span class="punctuation token">)</span> <span class="punctuation token">{
    // NodeListは不変ではないので、毎処理ごとにbox.firstChildは変化します</span>
    box<span class="punctuation token">.</span><span class="function token">removeChild</span><span class="punctuation token">(</span>box<span class="punctuation token">.</span>firstChild<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<h2 id="注記">注記</h2>

<p>ノードのコレクション内の項目はオブジェクトであり、文字列ではありません。node オブジェクトからデータを取得するには、そのプロパティ (たとえば<code>elementNodeReference.childNodes[1].nodeName</code> で名前を取得) を使用します。<br>
 <br>
 <code>document</code>オブジェクト自体には Doctype 宣言と root 要素 の2つの子があり、通常は<code>documentElement</code>と呼ばれます。 （(X)HTML文書ではこれが<code>HTML</code>要素です）<br>
 <br>
 <code>childNodes</code>にはテキストノードやコメントノードなどの非要素ノードを含むすべての子ノードが含まれます。要素のみのコレクションを取得するには、代わりに{{domxref("ParentNode.children")}} を使用してください。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-node-childnodes', 'Node.childNodes')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-1451460987', 'Node.childNodes')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-1451460987', 'Node.childNodes')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-1451460987', 'Node.childNodes')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.Node.childNodes")}}</p>

<h2 id=".E5.8F.82.E7.85.A7" name=".E5.8F.82.E7.85.A7">関連情報</h2>

<ul>
 <li>{{ domxref("Node.firstChild") }}</li>
 <li>{{ domxref("Node.lastChild") }}</li>
 <li>{{ domxref("Node.nextSibling") }}</li>
 <li>{{ domxref("Node.previousSibling") }}</li>
 <li>{{ domxref("Element.children") }}</li>
</ul>
