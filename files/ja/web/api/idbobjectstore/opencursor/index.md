---
title: "IDBObjectStore: openCursor() メソッド"
slug: Web/API/IDBObjectStore/openCursor
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`openCursor()`** メソッドは、{{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで新しい {{domxref("IDBCursorWithValue")}} オブジェクトを返します。カーソルを用いてオブジェクトストアを走査するのに用います。

追加を行う操作が正常に完了したかを判定するには、結果の `success` イベントを監視してください。

{{AvailableInWorkers}}

## 構文

```js-nolint
openCursor()
openCursor(query)
openCursor(query, direction)
```

### 引数

- `query` {{optional_inline}}
  - : 問い合わせを行うキーまたは {{domxref("IDBKeyRange")}} です。単一の有効なキーが渡された場合は、そのキーのみを含む範囲になります。何も渡されない場合は、オブジェクトストア内の全レコードを選択するキー範囲になります。
- `direction` {{optional_inline}}
  - : カーソルが動く方向を決める文字列です。デフォルトは `next` です。以下の値が有効です。
    - `next`
      - : カーソルはオブジェクトストアの最初で開き、キーの昇順で重複を含むすべてのレコードを返します。
    - `nextunique`
      - : カーソルはオブジェクトストアの最初で開き、キーの昇順で重複を除いたすべてのレコードを返します。
    - `prev`
      - : カーソルはオブジェクトストアの最初で開き、キーの降順で重複を含むすべてのレコードを返します。
    - `prevunique`
      - : カーソルはオブジェクトストアの最初で開き、キーの降順で重複を除いたすべてのレコードを返します。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は以下になります。

- 与えられたクエリーにマッチする最初のレコードを指す {{domxref("IDBCursorWithValue")}} オブジェクト
- マッチするレコードが見つからなかった場合は `null`

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} または {{domxref("IDBIndex")}} が削除済のとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 指定されたキーまたはキー範囲が無効であるとき投げられます。

## 例

以下のシンプルな断片では、トランザクションを生成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。

```js
const transaction = db.transaction("name", "readonly");
const objectStore = transaction.objectStore("name");
const request = objectStore.openCursor();
request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.value に走査中の現在のレコードが入っている
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
