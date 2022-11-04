---
title: IDBFactory.open
slug: Web/API/IDBFactory/open
---

{{APIRef("IDBFactory")}}

{{domxref("IDBFactory")}} インターフェイスの **`open()`** メソッドは、[データベースへの接続](/ja/docs/IndexedDB#gloss_database_connection)を開くことを要求します。

このメソッドは即座に {{domxref("IDBOpenDBRequest")}} オブジェクトを返し、そして非同期でデータベースを開きます。操作が成功した場合、このメソッドから返される request オブジェクトに result の属性として接続のための新しい {{domxref("IDBDatabase")}} オブジェクトが設定されて、 success イベントが発生します。

データベースとの接続の間にエラーが発生した場合、このメソッドで返される request オブジェクトで、 [error イベント](/ja/docs/IndexedDB/IDBErrorEvent)が発生します。

`upgradeneeded`, `blocked`, `versionchange` イベントが発生することもあります。

{{AvailableInWorkers}}

## 構文

現在の標準では:

```
var IDBOpenDBRequest = indexedDB.open(name);
var IDBOpenDBRequest = indexedDB.open(name, version);
```

### 引数

- name
  - : データベースの名前。
- version {{optional_inline}}
  - : 省略可。データベースを開くバージョン。バージョンが提供されずにデータベースが存在した場合、データベースへの接続はバージョンを変更せずに開かれます。バージョンが提供されず、データベースも存在しなかった場合、バージョン番号 `1` が生成されます。

#### 実験的な Gecko の options オブジェクト

- options (version および storage) {{optional_inline}} {{deprecated_inline}}

  - : Gecko では、[バージョン 26](/ja/Firefox/Releases/26) から、標準外の `options` オブジェクトを {{ domxref("IDBFactory.open") }} の引数として指定することができ、データベースの `version` 番号と、加えてストレージに `persistent` (永続的) または `temporary` (一時的) のどちらを使用したいかを指定する storage 値を指定することができます。

    > **警告:** `storage` 属性は非推奨であり、まもなく Gecko から削除される予定です。永続的なストレージを得るには、代わりに {{domxref("StorageManager.persist()")}} を使用してください。

> **メモ:** 利用可能な様々なストレージ種別における詳細情報や、 Firefox がクライアント側データストレージを扱う方法については、 [ブラウザーのストレージ制限と削除基準](/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)で見つけることができます。

### 返値

この要求に関連のある連続したイベントが発生する {{domxref("IDBOpenDBRequest")}} オブジェクト。

### 例外

このメソッドは、次の型のような [DOMError](/ja/docs/DOM/DOMError) を持つ {{domxref("DOMException")}} が発生する可能性があります。

| 例外        | 説明                                                       |
| ----------- | ---------------------------------------------------------- |
| `TypeError` | バージョンの値がゼロかマイナスの値、または数値でない場合。 |

## 例

`open` を現在の仕様書の `version` 引数を付けて呼び出す例です。

```js
var request = window.indexedDB.open("toDoList", 4);
```

次のコードスニペットは、データベースを開く要求をして、成功の場合と失敗の場合のイベントハンドラを登録しています。完璧に動作する例は、 [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](http://mdn.github.io/to-do-notifications/).) を見てください。

```js
var note = document.querySelector("ul");

// In the following line, you should include the prefixes
// of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't
//  need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened
// successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db
  // variable. This is used a lot later on, for opening
  // transactions and suchlike.
  db = DBOpenRequest.result;
};
```

## 仕様書

| 仕様書                                                                                                                                                           | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('IndexedDB', '#widl-IDBFactory-open-IDBOpenDBRequest-DOMString-name-unsigned-long-long-version', 'open()')}} | {{Spec2('IndexedDB')}}     |      |
| {{SpecName("IndexedDB 2", "#dom-idbfactory-open", "open()")}}                                                                                 | {{Spec2("IndexedDB 2")}} |      |

## ブラウザーの対応

{{Compat("api.IDBFactory.open")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
