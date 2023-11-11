---
title: "IDBObjectStore: getKey() メソッド"
slug: Web/API/IDBObjectStore/getKey
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`getKey()`** メソッドは、{{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで指定のクエリーで選択されたキーを返します。これはオブジェクトストアから指定のレコードを取得する用です。

キーが正常に見つかった場合は、その構造化複製を作成し、要求オブジェクトの `result` に設定します。

{{AvailableInWorkers}}

## 構文

```js-nolint
getKey(key)
```

### 引数

- `key`
  - : 取得するレコードを特定するキーまたはキー範囲です。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は与えられたキーまたはキー範囲にマッチする最初のレコードのキーになります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} が削除されたか取り除かれたとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 与えられたキーまたはキー範囲が無効なキーを含むとき投げられます。

## 例

```js
let openRequest = indexedDB.open("telemetry");
openRequest.onsuccess = (event) => {
  let db = event.target.result;
  let store = db.transaction("netlogs").objectStore("netlogs");

  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  let request = store.getKey(IDBKeyRange(yesterday, today));
  request.onsuccess = (event) => {
    let when = event.target.result;
    alert(`直近 24 時間で最初のアクティビティは ${when} に発生しました。`);
  };
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
