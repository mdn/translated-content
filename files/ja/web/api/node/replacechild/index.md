---
title: Node.replaceChild
slug: Web/API/Node/replaceChild
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
translation_of: Web/API/Node/replaceChild
---
<div>{{ApiRef("DOM")}}</div>

<p><strong><code>Node.replaceChild()</code></strong> メソッドは指定ノードの子ノードを別のノードに置き換えます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>replacedNode</var> = <var>parentNode</var>.replaceChild(<var>newChild</var>, <var>oldChild</var>);
</pre>

<ul>
 <li><code>newChild</code> : <code>oldChild</code> を置き換える新しいノード（既存のノードは先に取り除かれます）</li>
 <li><code>oldChild</code> : 置き換えられる既存ノード</li>
 <li><code>replacedNode</code> : 置き換えられたノード（<code>oldChild</code> と同じノード）</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">// &lt;div&gt;
//  &lt;span id="childSpan"&gt;foo bar&lt;/span&gt;
// &lt;/div&gt;

// ID も属性も内容も持たない空要素を生成
var sp1 = document.createElement("span");

// 生成したノードに id 属性 'newSpan' を付与
sp1.setAttribute("id", "newSpan");

// テキストノードを生成
var sp1_content = document.createTextNode("新しい span 要素");

// 生成したテキストノードを先の空要素の子ノードとして配置
sp1.appendChild(sp1_content);

// 置換に先んじ、参照を代入
var sp2 = document.getElementById("childSpan"); // 既存の置換対象ノード
var parentDiv = sp2.parentNode; // 置換対象ノードの親要素

// 既存ノード "sp2" を 生成済の新しい span 要素 "sp1" と置換
parentDiv.replaceChild(sp1, sp2);


// 上記コード実行後のノードは以下の様になります:
// &lt;div&gt;
//   &lt;span id="newSpan"&gt;新しい span 要素&lt;/span&gt;
// &lt;/div&gt;
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-replaceChild">DOM Level 1 Core: replaceChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-785887307">DOM Level 2 Core: replaceChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-785887307">DOM Level 3 Core: replaceChild</a></li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Node.replaceChild")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Node.removeChild")}}</li>
</ul>
