---
title: FileSystemFileEntry
slug: Web/API/FileSystemFileEntry
tags:
  - API
  - File API
  - File System API
  - File and Directory Entries API
  - FileEntry
  - インターフェイス
  - オフライン
  - ファイル
  - リファレンス
translation_of: Web/API/FileSystemFileEntry
---
<div>{{APIRef("File System API")}}{{SeeCompatTable}}</div>

<p><a href="/ja/DOM/File_API/File_System_API" title="en/DOM/File_API/File_System_API">File System API</a> の <strong><code>FileSystemFileEntry</code></strong> インターフェイスは、ファイルシステム内のファイルを表します。<br>
 このファイルには、ファイルの属性と、ファイルを読むために使用可能な {{domxref("File")}} オブジェクトを作成する {{domxref("FileSystemFileEntry.file", "file()")}} メソッドも含まれます。</p>

<h2 id="プロパティ" style="line-height: 30px; font-size: 2.14285714285714rem;">プロパティ</h2>

<p><em>親インターフェイス {{domxref("FileSystemEntry")}} のプロパティを継承しますが、このインターフェイスに固有のプロパティはありません。</em></p>

<h2 id="メソッド">メソッド</h2>

<dl>
 <dt>{{domxref("FileSystemFileEntry.file", "file()")}}</dt>
 <dd>ファイルの読み込みに使用できる新しい {{domxref("FileWriter")}} オブジェクトを作成します。</dd>
</dl>

<h3 id="basic_concepts" name="basic_concepts">廃止されたメソッド</h3>

<dl>
 <dt>{{domxref("FileSystemFileEntry.createWriter", "createWriter()")}} {{obsolete_inline}}</dt>
 <dd>新しい {{domxref("FileWriter")}} オブジェクトを作成し、ファイルシステムエントリで表されるファイルに書き込むことができます。</dd>
</dl>

<h2 id="basic_concepts" name="basic_concepts">基本のコンセプト</h2>

<p>コンテンツをファイルに書き込むには、{{domxref("FileSystemFileEntry.createWriter", "createWriter()")}} を呼び出して {{domxref("FileWriter")}} オブジェクトを作成します。 ファイルを読み込むには、{{domxref("FileSystemFileEntry.file", "file()")}} を呼び出すことによってその内容を表す {{domxref("File")}} オブジェクトを取得します。</p>

<h3 id="example" name="example">例</h3>

<p>以下のコードは "<code>log.txt</code>" という空のファイルを (存在しない場合は) 作成し、"Meow" というテキストで埋めています。success コールバックの内部では、{{event("error")}} <code>error</code> と {{event("writeend")}} イベントを処理するためのイベントハンドラが設定されています。テキストデータは、Blob を作成してテキストを付加し、{{domxref("FileWriter.write()")}} に渡すことでファイルに書き込まれます。</p>

<pre class="brush: js notranslate">function onInitFs(fs) {
  fs.root.getFile('log.txt', {create: true}, function(fileEntry) {

    // FileSystemFileEntry (log.txt) 用の FileWriter オブジェクトを作成します。
    fileEntry.createWriter(function(fileWriter) {
      fileWriter.onwriteend = function(e) {
        console.log('Write completed.');
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // 新しい Blob を作成して log.txt に書き込みます。
      var bb = new BlobBuilder();
      bb.append('Meow');

      fileWriter.write(bb.getBlob('text/plain'));
    }, errorHandler);

  }, errorHandler);

}

window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler);</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('File System API', '#api-fileentry', 'FileSystemFileEntry')}}</td>
   <td>{{Spec2('File System API')}}</td>
   <td>提案された API のドラフト</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの互換性</h2>

<p>{{Compat("api.FileSystemFileEntry")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a></li>
 <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction">Introduction to the File System API</a></li>
</ul>
