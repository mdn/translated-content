---
title: "IDBObjectStore: getAllKeys() メソッド"
slug: Web/API/IDBObjectStore/getAllKeys
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの `getAllKeys()` メソッドは、オブジェクトストア内の指定の引数にマッチするすべてのオブジェクトに対応するレコードキー、もしくは引数が与えられない場合はすべてのオブジェクトに対応するレコードキーを取得する {{domxref("IDBRequest")}} を返します。

値が正常に見つかった場合は、その構造化複製を作成し、要求オブジェクトの `result` に設定します。

このメソッドは、以下の場合に同じ結果になります。

- レコードがデータベースに存在しない場合
- レコードの値が `undefined` の場合

これらを区別するには、{{domxref("IDBObjectStore.openCursor","openCursor()")}} を同じキーで呼ぶ必要があります。このメソッドは、レコードが存在すればカーソルを返し、存在しなければカーソルを返しません。

## 構文

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### 引数

- `query` {{optional_inline}}
  - : {{domxref("IDBKeyRange")}} またはそれに解決される値です。
- `count` {{optional_inline}}
  - : 複数の値が見つかったときに返す値の数を指定します。`0` 未満や `2^32 - 1` 超の場合は、{{jsxref("TypeError")}} 例外が投げられます。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は与えられた問い合わせにマッチする全レコード (`count` が指定された場合は `count` の数まで) のキーの {{jsxref("Array")}} になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 与えられたキーまたはキー範囲が無効なキーを含むか `null` であるとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("IDBObjectStore")}} が削除されたか取り除かれたとき投げられます。

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
