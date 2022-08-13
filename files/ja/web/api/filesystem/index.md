---
title: FileSystem
slug: Web/API/FileSystem
tags:
  - API
  - File API
  - File System API
  - File and Directory Entries API
  - インターフェイス
  - オフライン
  - ファイルシステム
  - 非標準
translation_of: Web/API/FileSystem
---
<div>{{APIRef("File System API")}}{{SeeCompatTable}}</div>

<p>File and Directory Entries API インターフェイスの <strong><code>FileSystem</code></strong> は、ファイルシステムを表現するために使用されます。これらのオブジェクトは、任意のファイルシステムエントリの {{domxref("FileSystemEntry.filesystem", "filesystem")}} プロパティから取得できます。ブラウザによっては、ファイルシステムを作成・管理するための追加の API を提供しているものもあり、例えば Chrome の {{domxref("Window.requestFileSystem", "requestFileSystem()")}} メソッドのようなものがあります。</p>

<p>このインターフェイスは、ユーザーのファイルシステムへのアクセスを許可しません。その代わり、ブラウザのサンドボックス内に「仮想ドライブ」が存在します。ユーザーのファイルシステムにアクセスするには、Chrome 拡張機能をインストールするなどしてユーザーを呼び出す必要があります。関連する Chrome API は<a href="https://developer.chrome.com/apps/fileSystem">こちら</a>を参照してください。</p>

<h2 id="基本コンセプト">基本コンセプト</h2>

<p><code>FileSystem</code> オブジェクトにアクセスするには、2つの方法があります。</p>

<ol>
 <li><code>window.requestFileSystem()</code> を呼び出すことで、Web アプリのためだけに作成されたサンドボックス化されたファイルシステムを直接要求することができます。その呼び出しが成功した場合、コールバックハンドラが実行され、ファイルシステムを記述する <code>FileSystem</code> オブジェクトをパラメータとして受け取ります</li>
 <li>ファイルシステムエントリオブジェクトの {{domxref("FileSystemEntry.filesystem", "filesystem")}} プロパティから取得できます</li>
</ol>

<h2 id="プロパティ">プロパティ</h2>

<dl>
 <dt>{{domxref("FileSystem.name")}} {{ReadOnlyInline}}</dt>
 <dd>ファイルシステム名を表す {{domxref("USVString")}}。この名前は、公開されたファイルシステムのリスト全体の中で一意です。</dd>
 <dt>{{domxref("FileSystem.root")}} {{ReadOnlyInline}}</dt>
 <dd>ファイルシステムのルートディレクトリを表す {{domxref("FileSystemDirectoryEntry")}} オブジェクト。このオブジェクトを使用すると、ファイルシステム内のすべてのファイルとディレクトリにアクセスすることができます。</dd>
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
   <td>{{SpecName('File System API', '#api-domfilesystem', 'FileSystem')}}</td>
   <td>{{Spec2('File System API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの互換性</h2>

<p>{{Compat("api.FileSystem")}}</p>

<h2 id="See_also" name="See_also">あわせて参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a></li>
 <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API/Introduction">Introduction to the File System API</a></li>
 <li>{{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, 及び {{domxref("FileSystemDirectoryEntry")}}</li>
 <li>MSDN の記事: <a href="https://msdn.microsoft.com/library/mt732564">WebKitFileSystem object</a></li>
</ul>
