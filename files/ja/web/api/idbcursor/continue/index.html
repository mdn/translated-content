---
title: IDBCursor.continue()
slug: Web/API/IDBCursor/continue
tags:
  - API
  - Database
  - IDBCursor
  - IndexedDB
  - Reference
  - continue
  - ストレージ
  - メソッド
translation_of: Web/API/IDBCursor/continue
---
<div>{{APIRef("IndexedDB")}}</div>

<p><strong><code>continue()</code></strong> は {{domxref("IDBCursor")}} インターフェースのメソッドで、カーソルを現在の方向に次の位置、任意のキーパラメーターに一致するキーを持つアイテムまで進めます。キーを指定しない場合、カーソルはその方向に基づいて、すぐ隣の位置へ進みます。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>cursor</var>.continue(<var>key</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>key</var></code> {{optional_inline}}</dt>
 <dd>カーソルを進めるためのキーです。</dd>
</dl>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>このメソッドは次の内いずれかの {{domxref("DOMException")}} を発生させることがあります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">解説</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>この IDBCursor のトランザクションがアクティブではありません。</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>
    <p>キーパラメーターが以下の状態のうちのいずれかである可能性があります。</p>

    <ul>
     <li>キーが妥当なキーではない</li>
     <li>キーがこのカーソルの位置と同じかそれより小さく、カーソルの方向が <code>next</code> または <code>nextunique</code> である</li>
     <li>キーがこのカーソルの位置と同じかそれより大きく、カーソルの方向が <code>prev</code> または <code>prevunique</code> である</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>カーソルが現在走査中または末尾を越えて走査しました。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p>この単純で部分的な実例ではトランザクションを作り、オブジェクトストアを取得した後、オブジェクトストア内の全ての反復処理するためカーソルを使用しています。カーソルはキーに基づいてデータを選択するには必要ありません。その全てを捕らえることができます。また、それぞれのループ内での繰り返しでカーソルオブジェクトを用い、 <code>cursor.value.foo</code> とすることで、現在のレコードからカーソルの下のデータを取得できることには注目です。完全な例については <a href="https://github.com/mdn/indexeddb-examples/tree/master/idbcursor">IDBCursor の例</a> (<a href="https://mdn.github.io/indexeddb-examples/idbcursor/">ライブデモを見る</a>) を参照してください。</p>

<pre>function displayData() {
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  };
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName('IndexedDB', '#widl-IDBCursor-continue-void-any-key', 'continue()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#dom-idbcursor-continue", "continue()")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.IDBCursor.continue")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li>トランザクションの開始: {{domxref("IDBDatabase")}}</li>
 <li>トランザクションを使う: {{domxref("IDBTransaction")}}</li>
 <li>キーの範囲設定: {{domxref("IDBKeyRange")}}</li>
 <li>データの取得と変更: {{domxref("IDBObjectStore")}}</li>
 <li>カーソルを使う: {{domxref("IDBCursor")}}</li>
 <li>リファレンス　実例: <a class="external" href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a class="external" href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
