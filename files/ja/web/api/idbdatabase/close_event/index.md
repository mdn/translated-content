---
title: "IDBDatabase: close イベント"
slug: Web/API/IDBDatabase/close_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{ APIRef("IndexedDB") }}

`close` イベントは、データベースの接続が予期せず閉じられた時 `IDBDatabase` で発火します。例えば、使用しているストレージが取り外されたり、ユーザーがブラウザーの履歴設定でデータベースを消去した場合に発生します。

データベースの接続が [`IDBDatabase.close()`](/ja/docs/Web/API/IDBDatabase/close) により正常に閉じられた場合は発火しないことに注意してください。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
addEventListener('close', (event) => { });
onclose = (event) => { };
```

## イベント型

汎用の {{domxref("Event")}} です。

## 例

この例ではデータベースを開き、`close` イベントを監視します。

```js
// データベースを開きます
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  // このデータベース用の objectStore を作成します
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore に保存するデータアイテムを定義します
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

dBOpenRequest.onsuccess = (event) => {

  const db = dBOpenRequest.result;
  db.addEventListener('close', () => {
    console.log('データベースへの接続が閉じられました');
  });

};
```

`addEventListener()` のかわりに `onclose` プロパティを使った同じ例です。

```js
// データベースを開きます
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  // このデータベース用の objectStore を作成します
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore に保存するデータアイテムを定義します
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

dBOpenRequest.onsuccess = (event) => {

  const db = dBOpenRequest.result;
  db.onclose = () => {
    console.log('データベースへの接続が閉じられました');
  };

};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
