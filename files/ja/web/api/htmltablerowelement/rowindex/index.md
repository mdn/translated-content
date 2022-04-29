---
title: HTMLTableRowElement.rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
tags:
  - rowIndex
  - table
  - tr
translation_of: Web/API/HTMLTableRowElement/rowIndex
---
<h2 id="Summary" name="Summary">概要</h2>

<p>このプロパティは、テーブル全体に関連して <a href="/ja/docs/DOM/HTMLTableRowElement" title="DOM/HTMLTableRowElement">行 (row)</a> の 位置 (index) を {{htmlelement("thead")}} 、{{htmlelement("tbody")}} 、{{htmlelement("tfoot")}} の順序で取得します。</p>

<p>※Opera は前述の順序ではなく、 HTML 中の記述順で rowIndex を取得します。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: html">&lt;table&gt;
	&lt;thead&gt;
		&lt;tr&gt;
			&lt;th&gt;品目&lt;/th&gt;
			&lt;th&gt;価格&lt;/th&gt;
		&lt;/tr&gt;
	&lt;/thead&gt;
	&lt;tbody&gt;
		&lt;tr&gt;
			&lt;td&gt;抹茶プリン&lt;/td&gt;
			&lt;td&gt;250 円&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;カスタードプリン&lt;/td&gt;
			&lt;td&gt;200 円&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;牛乳プリン&lt;/td&gt;
			&lt;td&gt;150 円&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/tbody&gt;
	&lt;tfoot&gt;
		&lt;tr&gt;
			&lt;td&gt;小計&lt;/td&gt;
			&lt;td&gt;600 円&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/tfoot&gt;
&lt;/table&gt;</pre>

<p>rowIndex の値を表示する例を以下に示します。</p>

<pre class="brush: javascript">var rows = document.getElementsByTagName('tr');

for(var x = 0, xLength = rows.length; x &lt; xLength; x++) {
  alert('rowIndex=' + rows[x].rowIndex);
}</pre>

<h2 id="Compatibility" name="Compatibility">互換性</h2>

<p>Quirksmode.org の <a href="http://www.quirksmode.org/dom/w3c_html.html#t317">rowIndex browser compatibility</a> を参照して下さい。</p>
