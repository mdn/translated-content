---
title: "IDBTransaction: abort イベント"
slug: Web/API/IDBTransaction/abort_event
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{APIRef("IndexedDB")}}

`abort` イベントは `IndexedDB` のトランザクションがアボートされたとき発火します。

これは、以下のいずれかの理由により起こります。

- 悪い要求 (たとえば、同じキーを 2 回挿入しようとする、キーに一意性制約があるときに同じインデックスキーを挿入するなど)
- 明示的な {{DOMxRef("IDBTransaction.abort", "abort()")}} の呼び出し
- 要求の成功ハンドラーやエラーハンドラーにおける補足されなかった例外
- I/O エラー (ディスクが取り外されたり、OS やハードウェアのその他の故障など、実際にディスクに書き込むのに失敗した)
- 制限の超過

これはキャンセル不可のイベントで、対応する {{domxref("IDBDatabase")}} オブジェクトに[バブリング](/ja/docs/Learn/JavaScript/Building_blocks/Events#イベントのバブリングとキャプチャリング)します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("abort", (event) => {});
onabort = (event) => {};
```

## イベント型

汎用の {{domxref("Event")}} です。

## バブリング

このイベントは {{domxref("IDBDatabase")}} にバブリングします。`event.target` プロパティは、バブリング元の {{domxref('IDBTransaction')}} オブジェクトへの参照です。

詳しくは、[イベントのバブリングとキャプチャリング](/ja/docs/Learn/JavaScript/Building_blocks/Events#イベントのバブリングとキャプチャリング)を参照してください。

## 例

この例ではデータベースを開き (存在しない場合はデータベースを作成し)、トランザクションを開き、`abort` イベントのリスナーを追加し、トランザクションをアボートすることによりイベントを発火させます。

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("データベース作成エラー");
  };

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

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  const transaction = db.transaction(["toDoList"], "readwrite");

  // `abort` のリスナーを追加する
  transaction.addEventListener("abort", () => {
    console.log("トランザクションがアボートされました");
  });

  // トランザクションをアボートする
  transaction.abort();
};
```

同じ例ですが、イベントハンドラーを {{DOMxRef("IDBTransaction.abort_event", "onabort")}} プロパティに代入しています。

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("データベース作成エラー");
  };

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

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  const transaction = db.transaction(["toDoList"], "readwrite");

  // `abort` のリスナーを追加する
  transaction.onabort = (event) => {
    console.log("トランザクションがアボートされました");
  };

  // トランザクションをアボートする
  transaction.abort();
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
