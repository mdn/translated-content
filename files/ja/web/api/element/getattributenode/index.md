---
title: Element.getAttributeNode()
slug: Web/API/Element/getAttributeNode
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
translation_of: Web/API/Element/getAttributeNode
---
<div>{{ APIRef("DOM") }}</div>

<p>指定された要素の指定された属性を、 <code>Attr</code> ノードとして返します。</p>

<h2 id="Syntax">構文</h2>

<pre class="eval"><em>var attrNode</em> = <em>element</em>.getAttributeNode(<em>attrName</em>);
</pre>

<ul>
 <li><code>attrNode</code> は指定の属性に対する <code>Attr</code> ノードです。</li>
 <li><code>attrName</code> は属性の名前を表す文字列です。</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">// html: &lt;div id="top" /&gt;
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value == "top")
</pre>

<h2 id="Notes">注</h2>

<p>HTML 文書としてフラグが立てられた DOM 内の HTML 要素に対して呼び出された場合、<code>getAttributeNode</code> は処理前に引数を小文字にします。</p>

<p><code>Attr</code> ノードは <code>Node</code> を継承していますが、文書ツリーの一部と考えることはできません。一般の <code>Node</code> 属性、例えば <a href="/ja/docs/Web/API/Node/parentNode">parentNode</a>、 <a href="/ja/docs/Web/API/Node/previousSibling">previousSibling</a>、<a href="/ja/docs/Web/API/Node/nextSibling">nextSibling</a> などは <code>Attr</code> ノードでは <code>null</code> になります。しかしながら、 <code>ownerElement</code> プロパティではこの属性が属している要素を取得することができます。</p>

<p>要素の属性の値を取得するためには、通常 <code>getAttributeNode</code> の代わりに <a href="/ja/docs/Web/API/Element/getAttribute">getAttribute</a> を使用してください。</p>

<p>{{ DOMAttributeMethods() }}</p>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG','#dom-element-getattributenode','getAttributeNode()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.getAttributeNode")}}</p>
