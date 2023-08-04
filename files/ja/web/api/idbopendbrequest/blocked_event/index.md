---
title: "IDBOpenDBRequest: blocked イベント"
slug: Web/API/IDBOpenDBRequest/blocked_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("IndexedDB")}}

`blocked` ハンドラーは、データベースへのオープン中の接続が同じデータベースの `versionchange` トランザクションをブロックしているとき実行されます。

このイベントはキャンセルできず、バブリングしません。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener('blocked', (event) => { });

onblocked = (event) => { };
```

## イベント型

{{domxref("IDBVersionChangeEvent")}} です。{{domxref("Event")}} を継承します。

{{InheritanceDiagram("IDBVersionChangeEvent")}}

## イベントプロパティ

_親の {{domxref("Event")}} インターフェイスからもプロパティを継承します。_

- {{ domxref("IDBVersionChangeEvent.oldVersion") }} {{ReadOnlyInline}}
  - : データベースの古いバージョンを返します。
- {{ domxref("IDBVersionChangeEvent.newVersion") }} {{ReadOnlyInline}}
  - : データベースの新しいバージョンを返します。

## 例

`addEventListener()` を用いた例:

```js
// データベースを開きます
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log('データベースの作成中にエラー発生');
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
  // 同じデータベースをより高いバージョンで開いてみましょう
  const req2 = indexedDB.open('toDoList', 5);

  // この場合、onblocked ハンドラーが実行されます
  req2.addEventListener('blocked', () => {
    console.log('要求がブロックされました');
  });

};
```

`onblocked` プロパティを用いた例:

```js
// データベースを開きます
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log('データベースの作成中にエラー発生');
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
  // 同じデータベースをより高いバージョンで開いてみましょう
  const req2 = indexedDB.open('toDoList', 5);

  // この場合､onblocked ハンドラーが実行されます
  req2.onblocked = () => {
    console.log('要求がブロックされました');
  };

};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
