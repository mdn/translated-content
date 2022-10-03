---
title: 'IDBRequest: success event'
slug: Web/API/IDBRequest/success_event
---

{{ APIRef("IndexedDB") }}

`success`イベントは`IDBRequest`が成功すると着火します。

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
      <td>
        <code
          ><a href="/ja/docs/Web/API/IDBRequest/onsuccess">onsuccess</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

この例では、データベースをオープンします。その`success`イベントを`addEventListener()`でリスンします。

```js
// データベースをオープンする
const openRequest = window.indexedDB.open('toDoList', 4);

openRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
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

openRequest.addEventListener('success', (event) => {
  console.log('Database opened successfully!');
});
```

下記は同じことを`onsuccess`イベントハンドラープロパティを使用した例です。

```js
// データベースをオープンする
const openRequest = window.indexedDB.open('toDoList', 4);

openRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
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

openRequest.onsuccess = (event) => {
  console.log('Database opened successfully!');
};
```

## ブラウザの対応

{{Compat("api.IDBRequest.success_event")}}

## 関連情報

- [Using IndexedDB](/ja/docs/IndexedDB/Using_IndexedDB)
- [`onsuccess`](/ja/docs/Web/API/IDBRequest/onsuccess) event handler property
