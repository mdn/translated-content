---
title: IDBCursor.advance()
slug: Web/API/IDBCursor/advance
tags:
  - API
  - Database
  - IDBCursor
  - IndexedDB
  - Method
  - Reference
  - Storage
  - advance
translation_of: Web/API/IDBCursor/advance
---
<p>{{APIRef("IndexedDB")}}</p>

<p>{{domxref("IDBCursor")}} インターフェイスの <strong><code>advance()</code></strong> メソッドはカーソルが位置を前進させる回数をセットします。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>cursor</em>.advance(<em>count</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメータ</h3>

<dl>
 <dt>count</dt>
 <dd>カーソルが前進する回数</dd>
</dl>

<h3 id="Return_Value" name="Return_Value">戻り値</h3>

<p>{{jsxref('undefined')}}</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p><span style="line-height: 1.5;">このメソッドは次のいずれかの {{domxref("DOMException")}} を発生することがあります:</span></p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>この IDBCursor のトランザクションは活性化していません。</td>
  </tr>
  <tr>
   <td><code>TypeError</code></td>
   <td><code>count</code> パラメーターに渡された値がゼロや負の数です。</td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>カーソルは現在繰り返し中か、最後を過ぎています。<br>
     </td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p>このシンプルな断片でトランザクションを作成し、オブジェクトストアを取得し、オブジェクトストアのレコードを一通り繰り返すカーソルを使っています。ここで <code>cursor.advance(2)</code> を使ってそれぞれ 2 回前進していて、つまり 1 つおきの結果だけが表示されます。<code>advance()</code> は {{domxref("IDBCursor.continue")}} と同様に動作しますが、常に次のレコードに移動するのでなく、一度に複数のレコードを飛び越えられるのが違います。</p>

<p><span style="line-height: 1.5;">注意点としてループの繰り返しで、カーソルオブジェクトの現在のレコードのテータを </span><code style="font-style: normal; line-height: 1.5;">cursor.value.foo</code><span style="line-height: 1.5;">を使って取得できます。完全な動作例は、<a href="https://github.com/mdn/IDBcursor-example/">IDBCursor の例</a></span><span style="line-height: 1.5;">(</span><a href="http://mdn.github.io/IDBcursor-example/" style="line-height: 1.5;">ライブ例を見る</a><span style="line-height: 1.5;">)を見てください。</span></p>

<pre class="brush: js"><span class="brush: js" style="line-height: 1.5;">function advanceResult() {</span>
  list.innerHTML = '';
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = '&lt;strong&gt;' + cursor.value.albumTitle + '&lt;/strong&gt;, ' + cursor.value.year;
      list.appendChild(listItem);
      cursor.advance(2);
    } else {
      console.log('Every other entry displayed.');
    }
  };
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>仕様書</th>
   <th>策定状況</th>
   <th>コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBCursor-advance-void-unsigned-long-count', 'advance()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#dom-idbcursor-advance", "advance()")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>
<div>


<p>{{Compat("api.IDBCursor.advance")}}</p>
</div>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB">IndexedDB を使用する</a></li>
 <li>トランザクションを開始する: {{domxref("IDBDatabase")}}</li>
 <li>トランザクションを使用する: {{domxref("IDBTransaction")}}</li>
 <li>キーレンジを設定する: {{domxref("IDBKeyRange")}}</li>
 <li>データの取得と変更: {{domxref("IDBObjectStore")}}</li>
 <li>カーソルを使用する: {{domxref("IDBCursor")}}</li>
 <li>リファレンスの例: <a class="external" href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a class="external" href="http://mdn.github.io/to-do-notifications/">ライブ例を見る</a>。)</li>
</ul>
