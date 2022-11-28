---
title: IDBFactory
slug: Web/API/IDBFactory
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/ja/docs/IndexedDB) の **`IDBFactory`** インターフェイスは、indexedDB への非同期アクセスを提供します。 このインターフェイスを実装するオブジェクトは、`window.indexedDB` です。このオブジェクトを使用すれば、`IDBFactory` インターフェイスに直接アクセスせずに、IndexedDB を開いたり (生成したり接続したり)、削除したりできます。

{{AvailableInWorkers}}

## インスタンスメソッド

- {{domxref("IDBFactory.open")}}
  - : [データベースへの接続](/ja/docs/IndexedDB#gloss_database_connection)を開く要求をする現在のメソッドです。
- {{domxref("IDBFactory.deleteDatabase")}}
  - : データベースの削除を要求するメソッドです。
- {{domxref("IDBFactory.cmp")}}
  - : 2 つのキーを比較して、大きいほうの値を戻り値として返すメソッドです。
- {{domxref("IDBFactory.databases")}}
  - : 利用可能な全てのデータベースのリストを、名前とバージョンを含めて返すメソッドです。

## 例

次のコードスニペットでは、データベースを開く要求をし、成功の場合と失敗の場合のイベントハンドラーを登録しています。完全に動作する例は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)) を見てください。

```js
var note = document.querySelector("ul");

// 次の行では、テストしたい実装の接頭辞を含めるべきです。
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// 関数外では "var indexedDB = ..." を使ってはいけません。
// さらに、window.IDB* オブジェクトのうちいくつかへの参照も必要かもしれません。
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla はこれらのオブジェクトに接頭辞をつけたことはないので、window.mozIDB* は不要です)

// 我々のデータベースのバージョン 4 を開きましょう。
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これら 2 個のイベントハンドラーは、データベースが正常に開かれたか、失敗した時に動作します。
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>データベースの読み込みに失敗しました。</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>データベースを初期化しました。</li>';

  // データベースを開いた結果を変数 db に保存します。これはトランザクションを開くときなど、後でたくさん使います。
  db = DBOpenRequest.result;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.IDBFactory")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
