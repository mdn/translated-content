---
title: HTMLTableElement.insertRow
slug: Web/API/HTMLTableElement/insertRow
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/insertRow
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><code>insertRow</code> は、テーブル内に新しい行を挿入します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox">var <em>row</em> = <em>HTMLTableElement</em>.insertRow(<em>index</em>);</pre>
<ul>
 <li><a href="/ja/docs/DOM/HTMLTableElement" title="DOM/HTMLTableElement"><code>HTMLTableElement</code></a>: HTML table 要素への参照</li>
 <li><code>index</code>: 新しい行の行番号（ 0 が一行目）</li>
 <li><code>row</code>: 新しい行への参照が割り当てられる<br>
  <code>index</code> に -1 または行数に等しい場合、行は最後の行として追加される。<br>
  <code>index</code> が省略したり、行数より大きい場合、エラーが発生する。</li>
 <li>テーブル内に既に複数の <code>tbody</code> 要素が存在する場合、新しい行は最後の tbody 要素に挿入されます。<br>
  特定の tbody 要素に行を挿入するには、以下の様にします。
  <pre><code>var <em>specific_tbody</em> = document.getElementById(<em>tbody_id</em>);
var <em>row</em> = specific_tbody.insertRow(<em>index</em>)</code></pre>
 </li>
</ul>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:html">&lt;table id="TableA"&gt;
  &lt;tr&gt;
    &lt;td&gt;Old top row&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;

&lt;script type="text/javascript"&gt;

function addRow(tableID) {
  // table 要素への参照を取得し、変数に代入
  var tableRef = document.getElementById(tableID);

  // テーブルのインデックス 0 の行（一行目）に行を挿入
  var newRow   = tableRef.insertRow(0);

  // 一行目にセルを挿入
  var newCell  = newRow.insertCell(0);

  // 作成したセルにテキストノードを挿入
  var newText  = document.createTextNode('New top row')
  newCell.appendChild(newText);
}

// 引数にテーブルの id を指定して関数 addRow() を実行
addRow('TableA');

&lt;/script&gt;</pre>
<ul>
 <li>HTML 文書を valid なものとするには、tr 要素か td 要素の内、少なくとも一つが必要です。</li>
 <li><code>insertRow</code> は直接テーブルに行を挿入し、<strong>新しい行への参照を返します</strong>。<a href="/ja/docs/DOM/document.createElement" title="DOM/document.createElement"><code>document.createElement()</code></a> などで新たに tr 要素を作成する必要はありません。</li>
</ul>
<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.HTMLTableElement.insertRow")}}</p>

<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-39872903">DOM Level 2 HTML: insertRow</a></li>
</ul>
