---
title: complete
slug: Web/API/IDBTransaction/complete_event
---

{{APIRef("IndexedDB")}}

`complete` イベントはトランザクションが成功裏に終了した場合に発生します。

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
      <td>
        {{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

{{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} を使用:

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("データベース作成エラー");
  };

  // このデータベースの objectStore を作成
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // define what data items the objectStore will contain
  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // DB の読み書きトランザクションを開き、データを追加する準備をする
  const transaction = db.transaction(["toDoList"], "readwrite");

  // `complete` のためのリスナーを追加
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
};
```

{{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}} プロパティを使用:

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("データベース作成エラー");
  };

  // このデータベースの objectStore を作成
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // objectStore がどのようなデータアイテムを含むかを定義
  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // DB の読み書きトランザクションを開き、データを追加する準備ができる
  const transaction = db.transaction(["toDoList"], "readwrite");

  // `complete` のためのリスナーを追加
  transaction.oncomplete = (event) => {
    console.log("トランザクション完了");
  };

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
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- {{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}} イベントハンドラープロパティ
