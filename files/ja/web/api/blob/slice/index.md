---
title: Blob.slice()
slug: Web/API/Blob/slice
tags:
  - API
  - Blob
  - File
  - File API
  - Method
  - Reference
  - Section
  - Subset
  - data
  - slice
  - split
translation_of: Web/API/Blob/slice
---
<div>{{APIRef("File API")}}</div>

<p>{{domxref("Blob")}} インターフェイスの <strong><code>slice()</code></strong> メソッドは、呼び出された blob のサブセットのデータを含む新しい <code>Blob</code> オブジェクトを作成して返します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">var <em>newBlob</em> = <em>blob</em>.slice(<em>start</em>, <em>end</em>, <em>contentType</em>);</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>start</code> {{optional_inline}}</dt>
 <dd>新しい {{domxref("Blob")}} に含める最初のバイトを示す {{domxref("Blob")}} へのインデックス。負の値を指定すると、{{domxref("Blob")}} の末尾から先頭へのオフセットとして扱われます。例えば、-10 は {{domxref("Blob")}} の最後のバイトから10番目になります。デフォルト値は 0 です。<code>start</code> にもとの {{domxref("Blob")}} のサイズよりも大きい値を指定すると、返される {{domxref("Blob")}} のサイズは 0 で、データは何も含まれません。</dd>
 <dt><code>end</code> {{optional_inline}}</dt>
 <dd>新しい {{domxref("Blob")}} に<strong>含まれない</strong>最初のバイトを示す {{domxref("Blob")}} へのインデックス。(つまり、このインデックスに正確に位置するバイトは含まれません)。負の値を指定すると、{{domxref("Blob")}} の末尾から先頭へのオフセットとして扱われます。例えば、-10は {{domxref("Blob")}} の最後のバイトから10番目になります。デフォルト値は <code>size</code> です。</dd>
 <dt><code>contentType</code> {{optional_inline}}</dt>
 <dd>新しい {{domxref("Blob")}} に割り当てるコンテンツの型。これはその <code>type</code> プロパティの値になります。デフォルト値は空の文字列です。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>このメソッドが呼び出された Blob 内に含まれるデータの指定されたサブセットを含む新しい {{domxref("Blob")}} オブジェクト。元の Blob は変更されません。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>仕様</th>
   <th>ステータス</th>
   <th>コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("File API", "#dfn-slice", "Blob.slice()")}}</td>
   <td>{{Spec2("File API")}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの実装状況">ブラウザの実装状況</h2>

<p>{{Compat("api.Blob.slice")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li>{{domxref("Blob")}}</li>
 <li>
  <p><a href="/ja/docs/Web/API/File/Using_files_from_web_applications">Web アプリケーションからのファイルの使用</a></p>
 </li>
</ul>
