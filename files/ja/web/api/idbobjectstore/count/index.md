---
title: "IDBObjectStore: count() メソッド"
slug: Web/API/IDBObjectStore/count
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`count()`** メソッドは、{{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで、指定されたキーまたは {{domxref("IDBKeyRange")}} にマッチするレコードの総数を返します。引数が指定されない場合は、オブジェクトストア内の全レコードの数を返します。

{{AvailableInWorkers}}

## 構文

```js-nolint
count()
count(query)
```

### 引数

- `query` {{optional_inline}}
  - : 数えたいレコードの範囲を指定するキーまたは {{domxref("IDBKeyRange")}} オブジェクトです。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は与えられたクエリーにマッチするレコードの数になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} が削除されているとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 指定されたキーまたはキー範囲が無効であるとき投げられます。

## 例

このシンプルな断片では、トランザクションを生成し、オブジェクトストアを取得し、`count()` を用いてオブジェクトストア内のレコードを数えます。`success` ハンドラーが実行された時、コンソールにカウント値 (整数) を記録します。

```js
const transaction = db.transaction(["fThings"], "readonly");
const objectStore = transaction.objectStore("fThings");

const countRequest = objectStore.count();
countRequest.onsuccess = () => {
  console.log(countRequest.result);
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
