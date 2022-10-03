---
title: IDBFactory.deleteDatabase
slug: Web/API/IDBFactory/deleteDatabase
---

{{ APIRef("IDBFactory") }}

{{domxref("IDBFactory")}}インターフェイスの`deleteDatabase()`メソッドは、データベースの削除を要求します。 このメソッドは直ちに{{domxref("IDBOpenDBRequest")}} オブジェクトを返し、非同期でデータベースの削除処理を行います。

データベースの削除が成功した場合、 このメソッドから返された request オブジェクトにおいて、result に null が設定された状態で success イベントが発生します。 データベースの削除中にエラーが発生した場合、このメソッドから返された request オブジェクトで、error イベントが発生します。

## 構文

現在の標準:

```js
var request = window.indexedDB.deleteDatabase("toDoList");
```

`オプション付の実験バージョン` (下を見てください):

```js
var request = window.indexedDB.deleteDatabase("toDoList", storage: "temporary");
```

### 戻り値

この要求に関連のある連続したイベントが発生する{{domxref("IDBOpenDBRequest")}}。

## 例

```js
var DBDeleteRequest = window.indexedDB.deleteDatabase("toDoList");

DBDeleteRequest.onerror = function(event) {
  console.log("Error deleting database.");
};

DBDeleteRequest.onsuccess = function(event) {
  console.log("Database deleted successfully");

  console.log(request.result); // should be null
};
```

## パラメーター

- name
  - : データベース名
- options {{ NonStandardBadge() }}
  - : Gecko の[version 26](/ja/Firefox/Releases/26)から、永続的な（既定値）IndexedDB または、一時的なストレージ（shared pool）を削除するための、標準化されていないオプションのストレージパラメーターを含めることができます。

> **メモ:** Data in temporary storage persists until the global limit for the pool is reached. The global limit calculation is relatively complex, but we are considering changing it (see {{ Bug("968272") }}). When the global limit is reached, then data for the least recently used origin is deleted. There's also a group limit (eTLD+1 group/domain) which is currently 20% of the global limit. All requests that would exceed the group limit are just rejected.

## 仕様

| Specification                                                                                                                                        | Status                       | Comment |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#widl-IDBFactory-deleteDatabase-IDBOpenDBRequest-DOMString-name', 'deleteDatabase')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBFactory.deleteDatabase")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
