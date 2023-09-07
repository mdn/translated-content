---
title: "IDBObjectStore: openKeyCursor() メソッド"
slug: Web/API/IDBObjectStore/openKeyCursor
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`openKeyCursor()`** メソッドは、`result` がマッチした結果の走査に用いることができる {{domxref("IDBCursor")}} に設定される {{domxref("IDBRequest")}} オブジェクトを返します。カーソルを用いてオブジェクトストア内のキーを走査するのに用います。

追加を行う操作が正常に完了したかを判定するには、結果の `success` イベントを監視してください。

## 構文

```js-nolint
openKeyCursor()
openKeyCursor(query)
openKeyCursor(query, direction)
```

### 引数

- `query` {{optional_inline}}
  - : 問い合わせを行うキー範囲です。単一のキーが渡された場合は、そのキーのみを含むキー範囲になります。何も渡されなかった場合は、オブジェクトストア内の全レコードを選択するキー範囲になります。
- `direction` {{optional_inline}}
  - : カーソルが動く方向を決める [`IDBCursorDirection`](https://w3c.github.io/IndexedDB/#enumdef-idbcursordirection) です。
    有効な値は `"next"`、`"nextunique"`、`"prev"`、`"prevunique"` です。デフォルトは `"next"` です。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は以下になります。

- 与えられたクエリーにマッチする最初のレコードを指す {{domxref("IDBCursor")}} オブジェクト
- マッチするレコードが見つからなかった場合は `null`

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} または {{domxref("IDBIndex")}} が削除済のとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 指定のキーまたはキー範囲が無効であるとき投げられます。

## 例

このシンプルな断片では、トランザクションを生成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。

```js
const transaction = db.transaction("name", "readonly");
const objectStore = transaction.objectStore("name");
const request = objectStore.openKeyCursor();
request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key に走査中の現在のレコードのキーが入っている
    // openCursor と違って cursor.value は無いことに注意
    // ここで結果を用いて何かする
    cursor.continue();
  } else {
    // もう結果は無い
  }
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
