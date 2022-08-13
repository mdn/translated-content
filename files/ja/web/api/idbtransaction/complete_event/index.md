---
title: complete
slug: Web/API/IDBTransaction/complete_event
tags:
  - Event
  - IDBTransaction
  - Reference
  - complete
  - イベント
translation_of: Web/API/IDBTransaction/complete_event
---
<div>{{APIRef("IndexedDB")}}</div>

<p><code>complete</code> イベントはトランザクションが成功裏に終了した場合に発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{DOMxRef("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>{{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} を使用:</p>

<pre class="brush: js;">// データベースを開く
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = event =&gt; {
  const db = event.target.result;

  db.onerror = () =&gt; {
    console.log('Error creating database');
  };

  // このデータベースの objectStore を作成
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

DBOpenRequest.onsuccess = event =&gt; {
  const db = DBOpenRequest.result;

  // DB の読み書きトランザクションを開き、データを追加する準備ができる
  const transaction = db.transaction(['toDoList'], 'readwrite');

  // `complete` のためのリスナーを追加
  transaction.addEventListener('complete', event =&gt; {
    console.log('Transaction was competed');
  });

  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2019 };
  const objectStoreRequest = objectStore.add(newItem);
};

</pre>

<p>{{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}} プロパティを使用:</p>

<pre class="brush: js;">// データベースを開く
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = event =&gt; {
  const db = event.target.result;

  db.onerror = () =&gt; {
    console.log('Error creating database');
  };

  // このデータベースの objectStore を作成
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore がどのようなデータアイテムを含むかを定義
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

DBOpenRequest.onsuccess = event =&gt; {
  const db = DBOpenRequest.result;

  // DB の読み書きトランザクションを開き、データを追加する準備ができる
  const transaction = db.transaction(['toDoList'], 'readwrite');

  // `complete` のためのリスナーを追加
  transaction.oncomplete = event =&gt; {
    console.log('Transaction was competed');
  };

  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2019 };
  const objectStoreRequest = objectStore.add(newItem);
};</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.IDBTransaction.complete_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/IndexedDB/Using_IndexedDB">IndexedDB の使用</a></li>
 <li>{{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}} イベントハンドラープロパティ</li>
</ul>
