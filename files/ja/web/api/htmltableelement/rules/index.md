---
title: HTMLTableElement.rules
slug: Web/API/HTMLTableElement/rules
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/rules
---
<div>
 {{APIRef}}</div>
<div>
  </div>
<div>
 <span style="font-size: 2.14285714285714rem; font-weight: 700; letter-spacing: -1px; line-height: 30px;">概要</span></div>
<p><code>rules</code> は、テーブル内のボーダーの表示位置の設定 / 取得に用います。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>HTMLTableElement</var>.rules =<i>rules</i>; //設定
<var>rules</var> = <var>HTMLTableElement</var>.<i>rules</i>; //取得</pre>
<h3 id="Parameters" name="Parameters">引数</h3>
<p>指定値及び戻り値は、次の文字列の内の一つとなります。</p>
<dl>
 <dt>
  <code>none</code></dt>
 <dd>
  ボーダーを表示しない</dd>
 <dt>
  <code>groups</code></dt>
 <dd>
  グループ間にのみボーダーを表示</dd>
 <dt>
  <code>rows</code></dt>
 <dd>
  行間にボーダーを表示</dd>
 <dt>
  <code>cols</code></dt>
 <dd>
  列間にボーダーを表示</dd>
 <dt>
  <code>all</code></dt>
 <dd>
  全てのセル間にボーダーを表示</dd>
</dl>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">// テーブルの全てのボーダーを表示する例

var t = document.getElementById("TableID"); // table 要素への参照を変数に代入

t.rules = "all"; // テーブルの rules プロパティに "all" を設定</pre>
<h2 id="Specification" name="Specification">仕様</h2>
<ul>
 <li>W3C DOM 2 HTML 仕様書: <a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26347553">
  <i>
   HTMLTableElement</i>
  .rules</a></li>
</ul>
