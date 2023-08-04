---
title: "IDBRequest: error イベント"
slug: Web/API/IDBRequest/error_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("IndexedDB")}}

`error` ハンドラーは、エラーによって要求が失敗したとき実行されます。

このイベントはキャンセルできず、バブリングしません。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
addEventListener('error', (event) => { });

onerror = (event) => { };
```

## イベント型

汎用の {{domxref("Event")}} です。

## 例

この例では、データベースを開き、`add()` 操作での `error` イベントを監視しながら、レコードを追加しようとします。(例えば、指定の `taskTitle` を持つレコードが既に存在する場合エラーが発生します)

```js
// データベースを開きます
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.addEventListener('upgradeneeded', (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log('データベースの作成中にエラーが発生しました');
  };

  // このデータベース用の objectStore を作成します
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore に保存するデータアイテムを定義します
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
});

DBOpenRequest.addEventListener('success', (event) => {
  const db = DBOpenRequest.result;

  // 読み書き用のデータベーストランザクションを開き、データを追加する準備をします
  const transaction = db.transaction(['toDoList'], 'readwrite');
  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };

  const objectStoreRequest = objectStore.add(newItem);
  objectStoreRequest.addEventListener('error', () => {
    console.log(`新規アイテムの追加中にエラーが発生しました: ${newItem.taskTitle}`);
  });
});
```

同じ例で、`addEventListener()` のかわりに `onerror` プロパティを使用します。

```js
// データベースを開きます
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log('データベースの作成中にエラーが発生しました');
  };

  // このデータベース用の objectStore を作成します
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore に保存するデータアイテムを定義します
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // 読み書き用のデータベーストランザクションを開き､データを追加する準備をします
  const transaction = db.transaction(['toDoList'], 'readwrite');
  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };

  const objectStoreRequest = objectStore.add(newItem);
  objectStoreRequest.onerror = () => {
    console.log(`新規アイテムの追加中にエラーが発生しました: ${newItem.taskTitle}`);
  };
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
