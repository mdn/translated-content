---
title: "IDBTransaction: error イベント"
slug: Web/API/IDBTransaction/error_event
l10n:
  sourceCommit: 7d922eaf7a8d19153e8f4cb6091948a5100dc18c
---

{{ APIRef("IndexedDB") }}

`error` イベントは、リクエストがエラーを返し、そのイベントがトランザクションオブジェクトにバブリングしたとき `IDBTransaction` で発火します。

> [!NOTE]
> トランザクションのすべての失敗を扱うには、かわりに {{domxref("IDBTransaction.abort_event", "abort")}} イベントを監視することを検討してください。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("error", (event) => {});
onerror = (event) => {};
```

## イベント型

汎用の {{domxref("Event")}} です。

## バブリング

このイベントは {{domxref("IDBDatabase")}} にバブリングします。`event.target` プロパティは、バブリング元の {{domxref('IDBTransaction')}} オブジェクトへの参照です。

詳しくは、[イベントのバブリングとキャプチャリング](/ja/docs/Learn_web_development/Core/Scripting/Events#イベントのバブリングとキャプチャリング)を参照してください。

## 例

以下の例では、データベースを開き、`add()` 操作の `error` イベントを監視しながら、レコードを追加しようとします。(たとえば、指定した `taskTitle` を持つレコードが既に存在する場合、エラーが発生します)

```js
// データベースを開く
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  // このデータベース用の objectStore を作成する
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // objectStore に保存するデータアイテムを定義する
  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
};

dBOpenRequest.onsuccess = (event) => {
  const db = dBOpenRequest.result;

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  const transaction = db.transaction(["toDoList"], "readwrite");

  transaction.addEventListener("error", () => {
    console.log(`新規アイテム ${newItem.taskTitle} の追加エラー`);
  });

  const objectStore = transaction.objectStore("toDoList");
  const newItem = {
    taskTitle: "my task",
    hours: 10,
    minutes: 10,
    day: 10,
    month: "January",
    year: 2020,
  };

  const objectStoreRequest = objectStore.add(newItem);
};
```

同じ例ですが、`addEventListener()` のかわりに `onerror` プロパティを用います。

```js
// データベースを開く
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  // このデータベース用の objectStore を作成する
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // objectStore に保存するデータアイテムを定義する
  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
};

dBOpenRequest.onsuccess = (event) => {
  const db = dBOpenRequest.result;

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  const transaction = db.transaction(["toDoList"], "readwrite");

  transaction.onerror = () => {
    console.log(`新規アイテム ${newItem.taskTitle} の追加エラー`);
  };

  const objectStore = transaction.objectStore("toDoList");
  const newItem = {
    taskTitle: "my task",
    hours: 10,
    minutes: 10,
    day: 10,
    month: "January",
    year: 2020,
  };

  const objectStoreRequest = objectStore.add(newItem);
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
