---
title: "IDBDatabase: deleteObjectStore() メソッド"
short-title: deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

**`deleteObjectStore()`** は {{domxref("IDBDatabase")}} インターフェイスのメソッドで、対象のオブジェクトストアを参照するすべてのインデックスとともに、接続しているデータベースにある指定の名前のオブジェクトストアを削除します。

{{ domxref("IDBDatabase.createObjectStore") }} と同様に、このメソッドは [`versionchange`](/ja/docs/Web/API/IDBTransaction#version_change) トランザクション内で _のみ_ 呼び出すことができます。

{{AvailableInWorkers}}

## 構文

```js-nolint
deleteObjectStore(name)
```

### 引数

- `name`
  - : 削除するオブジェクトストアの名前です。名前は大文字と小文字を区別します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このメソッドが `versionchange` トランザクションのコールバックとして呼び出されなかった場合に発生します。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : 存在しないソースデータベースに対してリクエストが行われた場合に発生します（例えば、データベースが削除された場合など）。
- `NotFoundError` {{domxref("DOMException")}}
  - : 存在しないオブジェクトストアを削除しようとしたとき投げられます。

## 例

```js
const dbName = "sampleDB";
const dbVersion = 2;
const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = (event) => {
  const db = request.result;
  if (event.oldVersion < 1) {
    db.createObjectStore("store1");
  }

  if (event.oldVersion < 2) {
    db.deleteObjectStore("store1");
    db.createObjectStore("store2");
  }

  // version < 3, 4... について同様に
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
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
