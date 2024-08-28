---
title: "IDBFactory: deleteDatabase() method"
short-title: deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`deleteDatabase()`** は {{DOMxRef("IDBFactory")}} インターフェイスのメソッドで、データベースの削除を要求します。このメソッドは直ちに {{DOMxRef("IDBOpenDBRequest")}} オブジェクトを返し、非同期でデータベースの削除処理を行います。

データベースの削除が成功した場合、このメソッドから返された `request` オブジェクトにおいて、`result` に `undefined` が設定された状態で `success` イベントが発生します。 データベースの削除中にエラーが発生した場合、このメソッドから返された `request` オブジェクトで、`error` イベントが発生します。

`deleteDatabase()` が呼び出されると、この具体的なデータベースに対して開いている他の接続には [versionchange](/ja/docs/Web/API/IDBDatabase/versionchange_event) イベントが送られます。

## 構文

```js-nolint
// 現行標準の場合
deleteDatabase(name)

// `options` （下記参照）を使用した実験的な版
deleteDatabase(name)
deleteDatabase(name, options)
```

### 引数

- `name`
  - : 削除したいデータベースの名前。存在しないデータベースを削除しようとしても、例外は発生しません。これとは対照的に、 {{DOMxRef("IDBDatabase.deleteObjectStore()")}} は、指定したオブジェクトストアが存在しない場合に例外が発生します。
- `options` {{optional_inline}} {{Non-standard_Inline}}
  - : Gecko では、[バージョン 26](/ja/docs/Mozilla/Firefox/Releases/26) 以降、`permanent`（既定値）の IndexedDB を削除するか、`temporary` ストレージ （別名共有プール）の indexedDB を削除するかを指定する、非標準のオプションストレージ引数を含めることができます。

### 返値

この要求に関連のある連続したイベントが発生する {{DOMxRef("IDBOpenDBRequest")}}。

処理が成功した場合、リクエストの {{domxref("IDBRequest.result", "result")}} プロパティの値は `null` となります。

## 例

```js
const DBDeleteRequest = window.indexedDB.deleteDatabase("toDoList");

DBDeleteRequest.onerror = (event) => {
  console.error("データベースの削除中にエラーが発生しました。");
};

DBDeleteRequest.onsuccess = (event) => {
  console.log("データベースが正常に削除されました。");

  console.log(event.result); // null のはず
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{DOMxRef("IDBDatabase")}}
- トランザクションの使用: {{DOMxRef("IDBTransaction")}}
- キーの範囲の設定: {{DOMxRef("IDBKeyRange")}}
- データの取得と変更: {{DOMxRef("IDBObjectStore")}}
- カーソルの使用: {{DOMxRef("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
