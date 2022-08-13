---
title: 'IDBRequest: success event'
slug: Web/API/IDBRequest/success_event
translation_of: Web/API/IDBRequest/success_event
---
<div>{{ APIRef("IndexedDB") }}</div>

<p><code>success</code>イベントは<code>IDBRequest</code>が成功すると着火します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td><code><a href="/ja/docs/Web/API/IDBRequest/onsuccess">onsuccess</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="例">例</h2>

<p>この例では、データベースをオープンします。その<code>success</code>イベントを<code>addEventListener()</code>でリスンします。</p>

<pre class="brush: js">// データベースをオープンする
const openRequest = window.indexedDB.open('toDoList', 4);

openRequest.onupgradeneeded = (event) =&gt; {
  const db = event.target.result;

  db.onerror = () =&gt; {
    console.log('Error creating database');
  };

  // オブジェクトストアを作成する
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // オブジェクトストアが保有するデータを定義する
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

openRequest.addEventListener('success', (event) =&gt; {
  console.log('Database opened successfully!');
});

</pre>

<p>下記は同じことを<code>onsuccess</code>イベントハンドラープロパティを使用した例です。</p>

<pre class="brush: js">// データベースをオープンする
const openRequest = window.indexedDB.open('toDoList', 4);

openRequest.onupgradeneeded = (event) =&gt; {
  const db = event.target.result;

  db.onerror = () =&gt; {
    console.log('Error creating database');
  };

  // オブジェクトストアを作成する
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // オブジェクトストアが保有するデータを定義する
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

openRequest.onsuccess = (event) =&gt; {
  console.log('Database opened successfully!');
};
</pre>

<h2 id="ブラウザの対応">ブラウザの対応</h2>



<p>{{Compat("api.IDBRequest.success_event")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/IndexedDB/Using_IndexedDB">Using IndexedDB</a></li>
 <li><code><a href="/ja/docs/Web/API/IDBRequest/onsuccess">onsuccess</a></code> event handler property</li>
</ul>
