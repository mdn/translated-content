---
title: DataTransfer.getData()
slug: Web/API/DataTransfer/getData
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - drag and drop
translation_of: Web/API/DataTransfer/getData
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p><strong><code>DataTransfer.getData()</code></strong> メソッドは、指定した型のドラッグデータを ({{domxref("DOMString")}} として) 受け取ります。ドラッグ操作がデータを含まない場合、このメソッドは空文字列を返します。</p>

<p>データ型は、例えば <code>text/plain</code> や <code>text/uri-list</code> です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">DOMString <var>dataTransfer</var>.getData(format);
</pre>

<h3 id="Arguments" name="Arguments">引数</h3>

<dl>
 <dt><em>format</em></dt>
 <dd>受け取るデータの型を表す {{domxref("DOMString")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<dl>
 <dt>{{domxref("DOMString")}}</dt>
 <dd>指定した <code>format</code> のドラッグデータを表す {{domxref("DOMString")}}。ドラッグ操作がデータを持たないか、指定した <code>format</code> のデータを持たない場合、このメソッドは空文字列を返します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>この例は、{{domxref("DataTransfer")}} オブジェクトの {{domxref("DataTransfer.getData","getData()")}} メソッドおよび {{domxref("DataTransfer.setData","setData()")}} メソッドの使い方を紹介します。</p>

<h3 id="HTML_Content" name="HTML_Content">HTML コンテンツ</h3>

<pre class="brush: html">&lt;div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"&gt;
    &lt;span id="drag" draggable="true" ondragstart="drag(event)"&gt;drag me to the other box&lt;/span&gt;
&lt;/div&gt;
&lt;div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"&gt;&lt;/div&gt;
</pre>

<h3 id="CSS_Content" name="CSS_Content">CSS コンテンツ</h3>

<pre class="brush: css">#div1, #div2 {
    width:100px;
    height:50px;
    padding:10px;
    border:1px solid #aaaaaa;
}
</pre>

<h3 id="JavaScript_Content" name="JavaScript_Content">JavaScript コンテンツ</h3>

<pre class="brush: js">function allowDrop(allowdropevent) {
    allowdropevent.target.style.color = 'blue';
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
    dragevent.target.style.color = 'green';
}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
    document.getElementById("drag").style.color = 'black';
}
</pre>

<h3 id="Result" name="Result">実行結果</h3>

<p id="EmbedLiveSample('Example'_''_''_''_'WebAPIDataTransfergetData')">{{ EmbedLiveSample('Example', 600, '', '', 'Web/API/DataTransfer/getData') }}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "interaction.html#dom-datatransfer-getdata", "getData()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "editing.html#dom-datatransfer-getdata", "getData()")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.DataTransfer.getData")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<p>{{page("/docs/Web/API/DataTransfer", "See_also")}}</p>
