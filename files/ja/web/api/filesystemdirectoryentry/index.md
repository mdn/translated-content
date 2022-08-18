---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
tags:
  - API
  - File API
  - File System API
  - File and Directory Entries API
  - FileSystemDirectoryEntry
  - Files
  - Interface
  - NeedsMarkupWork
  - Non-standard
  - Offline
  - Reference
translation_of: Web/API/FileSystemDirectoryEntry
---
<div>{{APIRef("File System API")}}{{SeeCompatTable}}</div>

<p><strong><code>FileSystemDirectoryEntry</code></strong> は <a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a> のインターフェイスで、ファイルシステム内のディレクトリを表します。これはディレクトリ内のファイルにアクセスして操作する方法と、ディレクトリ内のエントリにアクセスする方法を提供します。</p>

<h2 id="basic_concepts" name="basic_concepts">基本概念</h2>

<p>{{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}} を呼び出して新しいディレクトリを作成することができます。サブディレクトリを作成する場合は、各子ディレクトリを順番に作成します。まだ存在しない親ディレクトリを含むフルパスを使用してディレクトリを作成しようとすると、エラーが返されます。したがって、親ディレクトリを作成した後、新しいパスを再帰的に追加して階層を作成します。</p>

<h3 id="example" name="example">例</h3>

<p>次のコードスニペットでは、 "Documents" というディレクトリを作成します。</p>

<pre class="brush: js notranslate">// Taking care of the browser-specific prefixes.
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

...

function onFs(fs){
  fs.root.getDirectory('Documents', {create:true}, function(directoryEntry){
    //directoryEntry.isFile === false
    //directoryEntry.isDirectory === true
    //directoryEntry.name === 'Documents'
    //directoryEntry.fullPath === '/Documents'

    }, onError);

  }

// 一時記憶装置でファイルシステムを開く
window.requestFileSystem(TEMPORARY, 1024*1024 /*1MB*/, onFs, onError);</pre>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスは独自のプロパティを持っていませんが、親インターフェイス {{domxref("FileSystemEntry")}} からプロパティを継承しています。</em></p>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスは、親インターフェイスである {{domxref("FileSystemEntry")}} からメソッドを継承しています。</em></p>

<dl>
 <dt>{{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}}</dt>
 <dd>このディレクトリ内のエントリを読み込むために使用できる {{domxref("FileSystemDirectoryReader")}} オブジェクトを作成します。</dd>
 <dt>{{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}</dt>
 <dd>メソッドが呼び出されるディレクトリを基準に、指定されたパスにあるディレクトリを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクトを返します。</dd>
 <dt>{{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}}</dt>
 <dd>メソッドが呼び出されるディレクトリに対する相対パスを指定して、ディレクトリの階層内にあるファイルを表す {{domxref("FileSystemFileEntry")}} オブジェクトを返します。</dd>
</dl>

<h3 id="Obsolete_methods" name="Obsolete_methods">廃止されたメソッド</h3>

<dl>
 <dt>{{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}}</dt>
 <dd>サブディレクトリのコンテンツを含むディレクトリとそのすべてのコンテンツを削除します。これは仕様から削除されました。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('File System API', '#api-directoryentry', 'FileSystemDirectoryEntry')}}</td>
   <td>{{Spec2('File System API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの互換性</h2>

<p>{{Compat("api.FileSystemDirectoryEntry")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a></li>
 <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction">File System API の紹介</a></li>
 <li>{{domxref("FileSystemDirectoryReader")}}</li>
 <li>{{domxref("FileSystemEntry")}}</li>
 <li>{{domxref("FileSystemFileEntry")}}</li>
</ul>
