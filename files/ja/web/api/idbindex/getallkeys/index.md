---
title: "IDBIndex: getAllKeys() メソッド"
slug: Web/API/IDBIndex/getAllKeys
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBIndex")}} インターフェイスの **`getAllKeys()`** メソッドは、非同期でインデックス内の全オブジェクトの主キーを取得し、要求オブジェクトの `result` に設定します。

## 構文

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### 引数

- `query` {{optional_inline}}
  - : 取得するキーを特定するキーもしくは {{domxref("IDBKeyRange")}} です。この値が `null` または省略された場合は、ブラウザーは無限のキー範囲を用います。
- `count` {{optional_inline}}
  - : 返すレコードの数です。この値が問い合わせ結果のレコード数を超える場合は、ブラウザーは最初のアイテムのみを取得します。この値が `0` 未満や `2^32 - 1` 超の場合は、{{jsxref("TypeError")}} 例外が投げられます。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は与えられたクエリーにマッチする全レコード (`count` が指定された場合は `count` の値まで) のキーの {{jsxref("Array")}} になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBIndex")}} のトランザクションが実行中でないとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBIndex")}} が削除されたか取り除かれたとき投げられます。

引数 `count` が `0` から `2^32 - 1` の範囲 (両端を含む) 外のときは、{{jsxref("TypeError")}} 例外が投げられます。

## 例

```js
const myIndex = objectStore.index("index");
const getAllKeysRequest = myIndex.getAllKeys();
getAllKeysRequest.onsuccess = () => {
  console.log(getAllKeysRequest.result);
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
