---
title: FileReader.abort()
slug: Web/API/FileReader/abort
tags:
  - API
  - File API
  - FileReader
  - Files
  - Method
  - Reference
  - abort
  - メソッド
translation_of: Web/API/FileReader/abort
---
<div>{{APIRef("File API")}}</div>

<p><strong><code>abort</code></strong> メソッドは読み取り操作を中止します。戻る時に、 {{domxref("FileReader.readyState","readyState")}} が <code>DONE</code> になります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>instanceOfFileReader</var>.abort();</pre>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>DOM_FILE_ABORT_ERR</code></dt>
 <dd>読み込み操作が実行されていない間に <code>abort</code> が呼び出されたとき (つまり、状態が <code>LOADING</code> でないとき) にスローされます。</dd>
</dl>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("File API", "#FileReader-interface", "FileReader")}}</td>
   <td>{{Spec2("File API")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの互換性</h2>

<p>{{Compat("api.FileReader.abort")}}</p>

<h2 id="See_also" name="See_also">あわせて参照</h2>

<ul>
 <li>{{domxref("FileReader")}}</li>
</ul>
