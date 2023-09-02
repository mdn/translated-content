---
title: "IDBTransaction: db プロパティ"
slug: Web/API/IDBTransaction/db
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBTransaction")}} インターフェイスの読み取り専用プロパティ **`db`** は、このトランザクションが紐づいたデータベース接続を返します。

{{AvailableInWorkers}}

## 値

{{domxref("IDBDatabase")}} オブジェクトです。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、オブジェクトストアにデータを追加します。トランザクションのイベントハンドラーに設定された関数により、成功時または失敗時にトランザクションを開いた結果を報告する点にも注目してください。最後に、`db` を用いて紐づいたデータベース接続を返します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
const note = document.getElementById("notifications");

// IDB データを保存する用の db オブジェクトのインスタンス
let db;

// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースを初期化しました。</li>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  db = DBOpenRequest.result;

  // addData() 関数を実行し、データをデータベースに追加する
  addData();
};

function addData() {
  // IDB に挿入できる新しいオブジェクトを生成する
  const newItem = [
    {
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "December",
      year: 2013,
      notified: "no",
    },
  ];

  // データベースの読み書きトランザクションを開き、データを追加する準備をする
  const transaction = db.transaction(["toDoList"], "readwrite");

  // トランザクションを開くのに成功したら報告する
  transaction.oncomplete = (event) => {
    note.innerHTML +=
      "<li>トランザクション完了: データベースの変更が完了しました。</li>";
  };

  transaction.onerror = (event) => {
    note.innerHTML +=
      "<li>トランザクションはエラーのため開けませんでした。アイテムは重複させられません。</li>";
  };

  // トランザクション上でオブジェクトストアを生成する
  const objectStore = transaction.objectStore("toDoList");

  // オブジェクトストアに newItem オブジェクトを追加する
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // 要求の成功を報告する (これは、アイテムがデータベースにに正常に格納されたことを意味しません。
    // これを知るには、transaction.onsuccess を用いる必要があります)
    note.innerHTML += "<li>要求に成功しました。</li>";
  };

  // このトランザクションが紐づいているデータベース (IDBDatabase) 接続を返す
  transaction.db;
}
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
