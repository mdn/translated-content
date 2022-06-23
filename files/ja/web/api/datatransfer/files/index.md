---
title: DataTransfer.files
slug: Web/API/DataTransfer/files
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
translation_of: Web/API/DataTransfer/files
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p><strong><code>DataTransfer.files</code></strong> プロパティは、ドラッグ操作中の {{domxref("FileList", "ファイルのリスト")}} となります。操作にファイルが含まれていない場合、リストは空です。</p>

<p>この機能を利用して、ユーザーの<em>デスクトップ</em>からブラウザにファイルをドラッグすることができます。</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox notranslate"><var>dataTransfer</var>.files;
</pre>

<h3 id="戻り値">戻り値</h3>

<p>ドラッグ操作のファイルの {{domxref("FileList", "list")}}。ドラッグ操作にファイルがない場合、リストは空です。</p>

<h2 id="例">例</h2>

<p>このインターフェイスの実例は2つあります。</p>

<ul>
 <li>Firefox のみ: <a class="external" href="http://jsfiddle.net/9C2EF/">http://jsfiddle.net/9C2EF/</a></li>
 <li>全てのブラウザ: <a class="external" href="https://jsbin.com/hiqasek/edit?html,js,output">https://jsbin.com/hiqasek/</a></li>
</ul>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "interaction.html#dom-datatransfer-files", "files")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "editing.html#dom-datatransfer-files", "files")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.DataTransfer.files")}}</p>
