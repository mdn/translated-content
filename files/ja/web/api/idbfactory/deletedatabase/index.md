---
title: IDBFactory.deleteDatabase
slug: Web/API/IDBFactory/deleteDatabase
---

{{ APIRef("IDBFactory") }}

{{domxref("IDBFactory")}} インターフェイスの **`deleteDatabase()`** メソッドは、データベースの削除を要求します。このメソッドは直ちに {{domxref("IDBOpenDBRequest")}} オブジェクトを返し、非同期でデータベースの削除処理を行います。

データベースの削除が成功した場合、このメソッドから返された `request` オブジェクトにおいて、`result` に `null` が設定された状態で `success` イベントが発生します。 データベースの削除中にエラーが発生した場合、このメソッドから返された `request` オブジェクトで、`error` イベントが発生します。

## 構文

現在の標準:

```js
var request = window.indexedDB.deleteDatabase("toDoList");
```

オプション付の実験バージョン (下を見てください):

```js
var request = window.indexedDB.deleteDatabase("toDoList", storage: "temporary");
```

### 返値

この要求に関連のある連続したイベントが発生する {{domxref("IDBOpenDBRequest")}}。

## 例

```js
var DBDeleteRequest = window.indexedDB.deleteDatabase("toDoList");

DBDeleteRequest.onerror = function(event) {
  console.log("データベースの削除中にエラーが発生しました。");
};

DBDeleteRequest.onsuccess = function(event) {
  console.log("データベースが正常に削除されました。");

  console.log(request.result); // null のはず
};
```

## 引数

- `name`
  - : データベース名
- `options` {{ NonStandardBadge() }}
  - : Gecko の [version 26](/ja/Firefox/Releases/26) から、永続的な（既定値）IndexedDB または、一時的なストレージ（shared pool）を削除するための、標準化されていないオプションのストレージパラメーターを含めることができます。

> **メモ:** 一時的なストレージに保存されているデータは、プールのグローバル制限に達するまで保持されますが、これを変えることを検討しています。([Firefox バグ 968272](https://bugzil.la/968272) を見てください) グローバル制限に達した時、使用したのが最も昔であるオリジンのデータが削除されます。さらに、グループ制限 (eTLD+1 グループ / ドメイン) もあり、これは現在グローバル制限の 20% です。このグループ制限を超える要求は、すべて単に拒否されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.IDBFactory.deleteDatabase")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
