---
title: IDBFactory.open
slug: Web/API/IDBFactory/open
---

{{APIRef("IDBFactory")}}

{{domxref("IDBFactory")}} インターフェイスの **`open()`** メソッドは、[データベースへの接続](/ja/docs/IndexedDB#gloss_database_connection)を開くことを要求します。

このメソッドは即座に {{domxref("IDBOpenDBRequest")}} オブジェクトを返し、そして非同期でデータベースを開きます。操作が成功した場合、このメソッドから返される `request` オブジェクトに `result` の属性として接続のための新しい {{domxref("IDBDatabase")}} オブジェクトが設定されて、`success` イベントが発生します。

データベースとの接続の間にエラーが発生した場合、このメソッドで返される `request` オブジェクトで、 [error イベント](/ja/docs/IndexedDB/IDBErrorEvent)が発生します。

`upgradeneeded`, `blocked`, `versionchange` イベントが発生することもあります。

{{AvailableInWorkers}}

## 構文

現在の標準では:

```js-nolint
var IDBOpenDBRequest = indexedDB.open(name);
var IDBOpenDBRequest = indexedDB.open(name, version);
```

### 引数

- `name`
  - : データベースの名前。
- `version` {{optional_inline}}
  - : 省略可。データベースを開くバージョン。バージョンが提供されずにデータベースが存在した場合、データベースへの接続はバージョンを変更せずに開かれます。バージョンが提供されず、データベースも存在しなかった場合、バージョン番号 `1` が生成されます。

#### 実験的な Gecko の options オブジェクト

- `options` (`version` および `storage`) {{optional_inline}} {{deprecated_inline}}

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

次のコードスニペットは、データベースを開く要求をして、成功の場合と失敗の場合のイベントハンドラを登録しています。完璧に動作する例は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)) を見てください。

```js
var note = document.querySelector("ul");

// 次の行では､テストしたい実装の接頭辞を含めるべきです｡
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// 関数外では "var indexedDB = ..." を使ってはいけません｡
// さらに､window.IDB* オブジェクトのうちいくつかへの参照も必要かもしれません｡
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla はこれらのオブジェクトに接頭辞をつけたことはないので､
//  window.mozIDB* は不要です)

// 我々のデータベースのバージョン 4 を開きましょう｡
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これら 2 個のイベントハンドラーは､データベースが正常に開かれたか､
// 失敗した時に動作します｡
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>データベースの読み込みに失敗しました。</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>データベースを初期化しました。</li>';

  // データベースを開いた結果を変数 db に保存します｡
  // これはトランザクションを開くときなど､後でたくさん使います｡
  db = DBOpenRequest.result;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.IDBFactory.open")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
