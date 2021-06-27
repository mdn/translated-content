---
title: Node.getRootNode()
slug: Web/API/Node/getRootNode
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
  - getRootNode
  - メソッド
translation_of: Web/API/Node/getRootNode
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>getRootNode()</code></strong> は {{domxref("Node")}} インターフェイスのメソッドで、そのコンテキストのオブジェクトのルート、利用できる場合はオプションでシャドウルートを含んだものを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>root</em> = <em>node</em>.getRootNode(<em>options</em>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>ルートノードを取得するためのオプションを設定するオブジェクトです。利用可能なオプションは次の通りです。
 <ul>
  <li><code>composed</code>: {{jsxref('Boolean')}} 値で、シャドウルートを返すか (<code>false</code>、既定値)、またはシャドウルートを越えたルートノードを返すか (<code>true</code>) を示します。</li>
 </ul>
 </dd>
</dl>

<h3 id="Returns" name="Returns">返値</h3>

<p>{{domxref('Node')}} を継承したオブジェクトです。これはどこで <code>getRootNode()</code> を呼び出したかによって異なる形になります。例えば、</p>

<ul>
 <li>標準のウェブページ内の要素に対して呼び出した場合は、ページ全体を表す {{domxref("HTMLDocument")}} オブジェクトを返します。</li>
 <li>シャドウ DOM の中の要素に対して呼び出した場合は、関連する {{domxref("ShadowRoot")}} オブジェクトを返します。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<p>最初に、 HTML/document ノードの参照を返す単純な例です。</p>

<pre class="brush: js">rootNode = node.getRootNode();</pre>

<p>この例はもっと複雑で、通常のルートを返す場合と、シャドウルートを含むルートの違いを示します。 (<a href="https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html">ソースコード全体</a>を見てください。)</p>

<pre class="brush: html">&lt;!-- source: https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html --&gt;
&lt;div class="js-parent"&gt;
  &lt;div class="js-child"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="js-shadowHost"&gt;&lt;/div&gt;
&lt;script&gt;
  // Chrome 54+，Opera 41+ で動作

  var parent = document.querySelector('.js-parent'),
      child = document.querySelector('.js-child'),
      shadowHost = document.querySelector('.js-shadowHost');

  console.log(parent.getRootNode().nodeName); // #document
  console.log(child.getRootNode().nodeName); // #document

  // ShadowRoot の生成
  var shadowRoot = shadowHost.attachShadow({mode:'open'});
  shadowRoot.innerHTML = '&lt;style&gt;div{background:#2bb8aa;}&lt;/style&gt;'
      + '&lt;div class="js-shadowChild"&gt;content&lt;/div&gt;';
  var shadowChild = shadowRoot.querySelector('.js-shadowChild');

  // 合成の既定値は false
  console.log(shadowChild.getRootNode() === shadowRoot); // true
  console.log(shadowChild.getRootNode({composed:false}) === shadowRoot); // true
  console.log(shadowChild.getRootNode({composed:true}).nodeName); // #document
&lt;/script&gt;</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG','#dom-node-getrootnode','getRootNode()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Node.getRootNode")}}</p>
