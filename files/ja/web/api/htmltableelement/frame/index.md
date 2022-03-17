---
title: HTMLTableElement.frame
slug: Web/API/HTMLTableElement/frame
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/frame
---
<div>
 {{ApiRef()}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><code>frame</code> は、表の外辺部のボーダーの表示箇所を設定します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>HTMLTableElement</var>.frame =<i>side</i>;
var<i>side</i> = <var>HTMLTableElement</var>.frame;</pre>
<h3 id="Parameters" name="Parameters">引数</h3>
<p><code>side</code> は以下の文字列の内の何れかです。</p>
<dl>
 <dt>
  <code>void</code></dt>
 <dd>
  どの辺にも表示しない（初期値）</dd>
 <dt>
  <code>above</code></dt>
 <dd>
  上辺を表示</dd>
 <dt>
  <code>below</code></dt>
 <dd>
  下辺〃</dd>
 <dt>
  <code>hsides</code></dt>
 <dd>
  上下〃</dd>
 <dt>
  <code>vsides</code></dt>
 <dd>
  左右〃</dd>
 <dt>
  <code>lhs</code></dt>
 <dd>
  左辺のみ〃</dd>
 <dt>
  <code>rhs</code></dt>
 <dd>
  右辺のみ〃</dd>
 <dt>
  <code>box</code></dt>
 <dt>
  <code>border</code></dt>
 <dd>
  4 辺全て〃</dd>
</dl>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">// テーブルに 2 ピクセル幅のボーダーを表示する例

var t = document.getElementById('TableA');

t.frame  = "border"; // 全辺のボーダーを有効に
t.border = "2px"; // 幅を 2 ピクセルに設定</pre>
<h2 id="Specification" name="Specification">仕様</h2>
<ul>
 <li>W3C DOM 2 HTML 仕様書 <a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-64808476">
  <i>
   HTMLTableElement</i>
  .frame</a></li>
</ul>
