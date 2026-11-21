---
title: "IDBTransaction: complete イベント"
short-title: complete
slug: Web/API/IDBTransaction/complete_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("IndexedDB")}}

`complete` イベントは、トランザクションが正常にコミットされたときに発生します。これは、{{domxref("IDBTransaction.commit()")}} を明示的に呼び出した後、またはすべてのリクエストが正常に完了し、その結果を処理した後に新しいリクエストが発行されなかった場合です。詳しくは {{domxref("IDBTransaction")}} を参照してください。

## 構文

イベント名を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で使用してください。

```js-nolint
addEventListener("complete", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入してください。

```js-nolint
oncomplete = (event) => { }
```

## イベント型

汎用の {{domxref("Event")}} です。

## 例

{{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} を使用する例:

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("データベース作成エラー");
  };

  // このデータベース用の objectStore を作成
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // objectStore に含めるデータ項目を定義
  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // 読み書きトランザクションを開き、データ追加の準備
  const transaction = db.transaction(["toDoList"], "readwrite");

  // `complete` のリスナーを追加
  transaction.addEventListener("complete", (event) => {
    console.log("トランザクション完了");
  });

  const objectStore = transaction.objectStore("toDoList");
  const newItem = {
    taskTitle: "my task",
    hours: 10,
    minutes: 10,
    day: 10,
    month: "January",
    year: 2019,
  };
  const objectStoreRequest = objectStore.add(newItem);

  objectStoreRequest.onsuccess = () => {
    // onsuccess ハンドラー内で 2 つ目のリクエストを発行
    // 同じトランザクションを再利用しながら、最初のリクエスト完了後に
    // このリクエストを実行するため
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = () => {
      // これ以上リクエストがないため、このハンドラーの実行後にトランザクションが完了
      console.log(getAllRequest.result);
    };
  };
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
