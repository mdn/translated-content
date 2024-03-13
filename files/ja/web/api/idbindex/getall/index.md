---
title: "IDBIndex: getAll() メソッド"
slug: Web/API/IDBIndex/getAll
l10n:
  sourceCommit: 19082e4db1735e6789eda6987a47d5ecc05791d3
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBIndex")}} インターフェイスの **`getAll()`** メソッドは、インデックス内の全オブジェクトを取得します。

オブジェクトは遅延評価で作られるので、カーソルの `value` プロパティを参照するのに比べてパフォーマンスのコストがかかります。`getAll()` のような機能を用いるには、ブラウザーはすべてのオブジェクトを一度に作らなければなりません。たとえば、単に各キーを参照したい場合は、[カーソル](/ja/docs/Web/API/IDBCursor)を用いるほうが効率的です。しかし、オブジェクトストア内の全オブジェクトの配列を取得しようとしている場合は、`getAll()` を用いるべきです。

## 構文

```js-nolint
getAll()
getAll(query)
getAll(query, count)
```

### 引数

- `query` {{optional_inline}}
  - : 取得するレコードを特定するキーまたは {{domxref("IDBKeyRange")}} です。この値が `null` または省略された場合は、ブラウザーは無限のキー範囲を用います。
- `count` {{optional_inline}}
  - : 返すレコードの数です。この値が問い合わせ結果のレコード数を超える場合は、ブラウザーは問い合わせ結果のレコードのみを取得します。この値が `0` 未満や `2^32 - 1` 超の場合は、{{jsxref("TypeError")}} 例外が投げられます。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は与えられたクエリーにマッチする全レコード (`count` が指定された場合は `count` の値まで) の値の {{jsxref("Array")}} になります。

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
const getAllRequest = myIndex.getAll();
getAllRequest.onsuccess = () => {
  console.log(getAllRequest.result);
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
