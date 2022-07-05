---
title: FileReaderSync.readAsText()
slug: Web/API/FileReaderSync/readAsText
translation_of: Web/API/FileReaderSync/readAsText
---
<div>{{APIRef("File API")}}</div>

<div><span class="seoSummary">{{DOMxRef("FileReaderSync")}} インターフェイスの <code>readAsText()</code> メソッドは、{{DOMxRef("File")}} または {{DOMxRef("Blob")}} オブジェクトを同期的に {{DOMxRef("DOMString")}} に読み込むことを可能にします。このインターフェイスは、ブロックする可能性のある同期 I/O を可能にするため、<a href="/ja/docs/Web/API/Worker">Worker</a> で<a href="/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers">のみ利用可能</a>です。</span></div>

<h2 id="シンタックス">シンタックス</h2>

<pre class="eval notranslate">readAsText(<em>File</em>);
readAsText(<em>Blob</em>);
readAsText(<em>File</em>, <em>encoding</em>);
readAsText(<em>Blob</em>, <em>encoding</em>);
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>blob</code></dt>
 <dd>読み込み対象の DOM {{DOMxRef("File")}} または {{DOMxRef("Blob")}}。</dd>
 <dt><code>encoding</code></dt>
 <dd>オプションのパラメータは、使用するエンコーディングを指定します (例: iso-8859-1 または UTF-8)。存在しない場合、メソッドはそれに対して検出アルゴリズムを適用します。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>入力データを表す {{DOMxRef("DOMString")}}。</p>

<h2 id="例外">例外</h2>

<p>{{page("Web/API/FileReaderSync/readAsArrayBuffer","Exceptions")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("File API","#dfn-readAsTextSync","readAsText")}}</td>
   <td>{{Spec2("File API")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<div>
<p>{{Compat("api.FileReaderSync.readAsText")}}</p>
</div>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/File">File API</a></li>
 <li>{{DOMxRef("File")}}</li>
 <li>{{DOMxRef("FileReaderSync")}}</li>
 <li>{{DOMxRef("FileReader")}}</li>
 <li>{{DOMxRef("BlobBuilder")}}, {{ domxref("Blob") }}</li>
</ul>
