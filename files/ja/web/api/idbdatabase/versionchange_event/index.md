---
title: "IDBDatabase: versionchange イベント"
slug: Web/API/IDBDatabase/versionchange_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("IndexedDB")}}

`versionchange` イベントは、データベースの構造の変更 ([`IDBOpenDBRequest`](/ja/docs/Web/API/IDBOpenDBRequest) または [`IDBFactory.deleteDatabase`](/ja/docs/Web/API/IDBFactory/deleteDatabase) で [`upgradeneeded`](/ja/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) イベントが送られた) が他のどこか (同じコンピューターの別のウインドウまたはタブの可能性が最も高いでしょう) で要求された時発火します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
addEventListener('versionchange', (event) => { });
onversionchange = (event) => { };
```

## イベント型

汎用の {{domxref("Event")}} です。

## 例

この例ではデータベースを開き、成功時、`versionchange` のリスナーを追加します。

```js
// データベースを開きます
const dBOpenRequest = window.indexedDB.open('Nonexistent', 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  // このデータベース用の objectStore を作成します
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore に格納するデータアイテムを定義します
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

dBOpenRequest.addEventListener('success', (event) => {
  const db = event.target.result;
  db.addEventListener('versionchange', (event) => {
    console.log('このデータベースのバージョンが変更されました');
  });

});
```

`onversionchange` イベントハンドラープロパティを用いた、同じ例です。

```js
// データベースを開きます
const dBOpenRequest = window.indexedDB.open('Nonexistent', 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  // このデータベース用の objectStore を作成します
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // objectStore に格納するデータアイテムを定義します
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

dBOpenRequest.onsuccess = (event) => {
  const db = event.target.result;
  db.onversionchange = (event) => {
    console.log('このデータベースのバージョンが変更されました');
  };
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
