---
title: "IDBRequest: success イベント"
slug: Web/API/IDBRequest/success_event
---

{{ APIRef("IndexedDB") }}

`success` イベントは {{domxref("IDBRequest")}} が成功すると発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリングする</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        <code
          ><a href="/ja/docs/Web/API/IDBRequest/onsuccess">onsuccess</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

この例では、データベースをオープンします。その `success` イベントを `addEventListener()` でリッスンします。

```js
// データベースをオープンする
const openRequest = window.indexedDB.open('toDoList', 4);

openRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log('データベースの作成中にエラー発生');
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
  console.log('データベースを正常に開きました！');
});
```

下記は同じことを `onsuccess` イベントハンドラープロパティを使用した例です。

```js
// データベースをオープンする
const openRequest = window.indexedDB.open('toDoList', 4);

openRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log('データベースの作成中にエラー発生');
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
  console.log('データベースを正常に開きました!');
};
```

## ブラウザーの互換性

{{Compat("api.IDBRequest.success_event")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [`onsuccess`](/ja/docs/Web/API/IDBRequest/onsuccess) イベントハンドラープロパティ
