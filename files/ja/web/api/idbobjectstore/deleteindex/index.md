---
title: "IDBObjectStore: deleteIndex() メソッド"
slug: Web/API/IDBObjectStore/deleteIndex
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`deleteIndex()`** メソッドは、バージョンの更新時に用いられ、接続中のデータベース内の指定した名前のインデックスを破棄します。

なお、このメソッドは `VersionChange` トランザクションモードのコールバックからのみ呼び出せます。また、このメソッドは {{domxref("IDBObjectStore.indexNames")}} プロパティを同期的に変更します。

{{AvailableInWorkers}}

## 構文

```js-nolint
deleteIndex(indexName)
```

### 引数

- `indexName`
  - : 削除する既存のインデックスの名前です。

### 返値

なし ({{jsxref("undefined")}})

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このメソッドが `versionchange` トランザクションモードのコールバックから呼ばれていないとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} が属するトランザクションが実行中でない (たとえば、削除されたか取り除かれた) とき投げられます。
- `NotFoundError` {{domxref("DOMException")}}
  - : 指定された名前のインデックス (大文字と小文字を区別します) がデータベースに無いとき投げられます。

## 例

以下の例では、より高いバージョン番号のデータベースが読み込まれたときにデータベースの構造を更新する {{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}} のハンドラーがあります。{{domxref("IDBObjectStore.createIndex")}} を用いてオブジェクトストアに新しいインデックスを作成し、その後 `deleteIndex()` を用いて不要な古いインデックスを削除します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
let db;

// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// 以下の 2 個のイベントハンドラーは、データベースを開くのに成功したか、失敗した時に動く
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>データベース読み込みエラー</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースを初期化しました。</li>";

  // データベースを開いた結果を変数 db に格納する。これは後でよく使う
  db = event.target.result;

  // displayData() 関数を実行し、IDB に格納済の to-do リストデータすべてをタスクリストに入れる
  displayData();
};

// このイベントは、新しいバージョンのデータベースの作成が必要な場合を処理します。
// これは、データベースが作成されていなかったか、
// 前の行の window.indexedDB.open で新しいバージョン番号が指定された場合です。
// これは最近のブラウザーでしか実装されていません。
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML += "<li>データベースの読み込みエラー</li>";
  };

  // このデータベース用の objectStore を作成する
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // objectStore に格納するデータアイテムを定義する

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });

  objectStore.deleteIndex("seconds");
  objectStore.deleteIndex("contact");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キー範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
