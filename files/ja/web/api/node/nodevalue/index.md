---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - Node
translation_of: Web/API/Node/nodeValue
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>ノードの値を取得または設定します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>value</var> = <var>node</var>.nodeValue</pre>
<p><code><var>node</var>.nodeValue</code> が存在する場合、 <code>value</code> はノードの値を含む文字列です。</p>
<h2 id="Notes" name="Notes">注記</h2>
<p>document 自身は、 <code>nodeValue</code> は <code>nullを返します。</code>text</p>
<p>ノード、 <code>comment</code> ノード、<code>CDATA</code> ノードでは、 <code>nodeValue</code> はノードの中身を返します。 <code>attribute</code> ノードは属性値を返します。</p>
<p> </p>
<p>以下の表は、 様々なノードの戻り値を表しています。</p>
<table>
 <thead>
  <tr>
   <th>Attr</th>
   <th>attribute の値</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>CDATASection</td>
   <td>CDATA Sectionの中身</td>
  </tr>
  <tr>
   <td>コメント</td>
   <td>commentの中身</td>
  </tr>
  <tr>
   <td>Document</td>
   <td>null</td>
  </tr>
  <tr>
   <td>DocumentFragment</td>
   <td>null</td>
  </tr>
  <tr>
   <td>DocumentType</td>
   <td>null</td>
  </tr>
  <tr>
   <td>Element</td>
   <td>null</td>
  </tr>
  <tr>
   <td>NamedNodeMap</td>
   <td>null</td>
  </tr>
  <tr>
   <td>EntityReference</td>
   <td>null</td>
  </tr>
  <tr>
   <td>Notation</td>
   <td>null</td>
  </tr>
  <tr>
   <td>ProcessingInstruction</td>
   <td>ターゲットを除く全体の内容</td>
  </tr>
  <tr>
   <td>Text</td>
   <td>the text nodeの中身</td>
  </tr>
 </tbody>
</table>
<p><code>nodeValue</code> が <code>null</code> と定義されている場合、値を設定しても効果はありません。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080">DOM Level 2 Core: Node.nodeValue</a></li>
</ul>
