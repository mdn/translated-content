---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
tags:
  - DOM
  - Gecko
  - Node
translation_of: Web/API/Node/ownerDocument
---
<div>{{ApiRef}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p><code>ownerDocument</code> プロパティは、指定ノードを内包するノードツリーのトップレベルのドキュメントオブジェクトを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>document</var> = element.ownerDocument
</pre>

<ul>
 <li><code>document</code> : 指定要素の祖先である {{domxref("document")}} オブジェクト</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">var doc = p.ownerDocument; // ノード p のノードツリー上のトップレベル document オブジェクトを取得
var html = doc.documentElement; // owner のドキュメント要素を取得

alert(html); // [object HTMLHtmlElement]
</pre>

<h2 id="Notes" name="Notes">注記</h2>

<p>このプロパティによって返される <code>document</code> オブジェクトは、実際の HTML 文書中ですべての子ノードの属するメインオブジェクトです。<code>document</code> ノード自身に対しこのプロパティを用いた場合、戻り値は <code>null</code> となります。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Specification</th>
   <th>Status</th>
   <th>Comment</th>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#dom-node-ownerdocument", "Node.ownerDocument")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("DOM3 Core", "core.html#node-ownerDoc", "Node.ownerDocument")}}</td>
   <td>{{Spec2("DOM3 Core")}}</td>
   <td>No change</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Core", "core.html#node-ownerDoc", "Node.ownerDocument")}}</td>
   <td>{{Spec2("DOM2 Core")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Node.ownerDocument")}}</p>
