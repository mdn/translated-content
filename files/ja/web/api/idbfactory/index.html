---
title: IDBFactory
slug: Web/API/IDBFactory
tags:
  - API
  - HTTP
  - IndexedDB
  - Interface
  - Offline
  - Reference
  - Storage
translation_of: Web/API/IDBFactory
---
<p>{{APIRef("IndexedDB")}}</p>

<div>
<p><a href="/ja/docs/IndexedDB">IndexedDB API</a> の <strong><code>IDBFactory</code></strong> インターフェイスは、indexedDB への非同期アクセスを提供します。 このインターフェイスを実装するオブジェクトは、<code>window.indexedDB</code> です。このオブジェクトを使用すれば、<code>IDBFactory</code> インターフェイスに直接アクセスせずに、IndexedDB を開いたり (生成したり接続したり)、削除したりできます。</p>

<p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("IDBFactory.open")}}</dt>
 <dd><a href="/ja/docs/IndexedDB#gloss_database_connection">データベースへの接続</a>を開く要求をする現在のメソッドです。</dd>
 <dt>{{domxref("IDBFactory.deleteDatabase")}}</dt>
 <dd>データベースの削除を要求するメソッドです。</dd>
 <dt>{{domxref("IDBFactory.cmp")}}</dt>
 <dd>2 つのキーを比較して、大きいほうの値を戻り値として返すメソッドです。</dd>
 <dt>{{domxref("IDBFactory.databases")}}</dt>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>次のコードスニペットでは、 データベースを開く要求をし、 成功の場合と失敗の場合のイベントハンドラーを登録しています。完全に動作する例は、<a class="external" href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> app (<a class="external" href="http://mdn.github.io/to-do-notifications/">view example live</a>.) を見てください。</p>

<pre class="brush:js;highlight:[10]">var note = document.querySelector("ul");

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '&lt;li&gt;Error loading database.&lt;/li&gt;';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Database initialised.&lt;/li&gt;';

  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
  db = DBOpenRequest.result;
};
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB", "#idl-def-IDBFactory", "IDBFactory")}}</td>
   <td>{{Spec2("IndexedDB")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#factory-interface", "IDBFactory")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 3", "#factory-interface", "IDBFactory")}}</td>
   <td>{{Spec2("IndexedDB 3")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<div>
<p>{{Compat("api.IDBFactory")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li>Starting transactions: {{domxref("IDBDatabase")}}</li>
 <li>Using transactions: {{domxref("IDBTransaction")}}</li>
 <li>Setting a range of keys: {{domxref("IDBKeyRange")}}</li>
 <li>Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}</li>
 <li>Using cursors: {{domxref("IDBCursor")}}</li>
 <li>Reference example: <a class="external" href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a class="external" href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
