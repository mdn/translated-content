---
title: IDBFactory
slug: Web/API/IDBFactory
l10n:
  sourceCommit: dbd4ba01220a5031d3a26a3ac1490d3269210124
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`IDBFactory`** は [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) のインターフェイスで、indexedDB への非同期アクセスを提供します。 このインターフェイスを実装するオブジェクトは、`window.indexedDB` です。このオブジェクトを使用すれば、`IDBFactory` インターフェイスに直接アクセスせずに、IndexedDB を開いたり (生成したり接続したり)、削除したりできます。

## インスタンスメソッド

- {{domxref("IDBFactory.open()")}}
  - : [データベースへの接続](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#データベースコネクション)を開く要求をする現在のメソッドです。
- {{domxref("IDBFactory.deleteDatabase()")}}
  - : データベースの削除を要求するメソッドです。
- {{domxref("IDBFactory.cmp()")}}
  - : 2 つのキーを比較して、大きいほうの値を戻り値として返すメソッドです。
- {{domxref("IDBFactory.databases()")}}
  - : 利用できるすべてのデータベースの配列（名前とバージョンを含む）で履行されるプロミスを返します。

## 例

次のコードスニペットでは、データベースを開く要求をし、成功の場合と失敗の場合のイベントハンドラーを登録しています。完全に動作する例は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーション ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/)) を見てください。

```js
// データベースのバージョン 4 を開きましょう。
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// これら 2 個のイベントハンドラーは、データベースが正常に開かれたか、失敗した時に動作します。
DBOpenRequest.onerror = (event) => {
  console.error("データベースの読み込みに失敗しました。");
};

DBOpenRequest.onsuccess = (event) => {
  console.info("データベースを初期化しました。");

  // データベースを開いた結果を変数 db に保存します。これはトランザクションを開くときなど、後でたくさん使います。
  db = DBOpenRequest.result;
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
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
