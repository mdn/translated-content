---
title: "IDBObjectStore: getAll() メソッド"
slug: Web/API/IDBObjectStore/getAll
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`getAll()`** メソッドは、指定の引数にマッチするすべてのオブジェクト、または引数が与えられない場合はすべてのオブジェクトが入った {{domxref("IDBRequest")}} オブジェクトを返します。

値が正常に見つかった場合は、その構造化複製を作成し、要求オブジェクトの `result` に設定します。

このメソッドは、以下の場合に同じ結果になります。

- レコードがデータベースに存在しない場合
- レコードの値が `undefined` の場合

これらを区別するには、以下のメソッドを使用できます。

1. {{domxref("IDBObjectStore.openCursor","openCursor()")}} メソッドを同じキーで使用します。このメソッドはレコードが存在すればカーソルを返し、存在しなければカーソルを返しません。
2. {{domxref("IDBObjectStore.count","count()")}} メソッドを同じキーで使用します。このメソッドは行が存在すれば 1 を、存在しなければ 0 を返します。

## 構文

```js-nolint
getAll()
getAll(query)
getAll(query, count)
```

### 引数

- `query` {{optional_inline}}
  - : 問い合わせを行うキーまたは {{domxref("IDBKeyRange")}} です。何も渡さない場合、デフォルトはオブジェクトストア内の全レコードを選択するキー範囲です。
- `count` {{optional_inline}}
  - : 複数の値が見つかった場合に返す値の数を指定します。`0` 未満の場合や `2^32 - 1` 超の場合は、{{jsxref("TypeError")}} 例外が投げられます。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は与えられた問い合わせにマッチする全レコード (`count` が指定された場合は `count` の数まで) の値の {{jsxref("Array")}} になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 指定のキーまたはキー範囲が無効なキーを含むか `null` であるとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("IDBObjectStore")}} が削除されたか取り除かれたとき投げられます。
- {{jsxref("TypeError")}}
  - : 引数 `count` が `0` から `2^32 - 1` の範囲 (両端を含む) にないとき投げられます。

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
