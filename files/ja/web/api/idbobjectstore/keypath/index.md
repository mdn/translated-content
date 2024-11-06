---
title: "IDBObjectStore: keyPath プロパティ"
slug: Web/API/IDBObjectStore/keyPath
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの読み取り専用プロパティ **`keyPath`** は、このオブジェクトストアの[キーパス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#キーパス)を返します。

このプロパティが `null` の場合は、アプリケーションは変更操作のたびにキーを指定しなければなりません。

{{AvailableInWorkers}}

## 値

任意のデータ型です。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`add()` を用いてデータをオブジェクトストアに追加します。オブジェクトストアの生成後、コンソールに `objectStore.keyPath` を記録します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
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

  // 読み書きトランザクションを開き、データを追加する準備をする
  const transaction = db.transaction(["toDoList"], "readwrite");

  // すべて完了し、トランザクションが正常終了したら報告する
  transaction.oncomplete = (event) => {
    note.innerHTML += "<li>トランザクションが完了しました。</li>";
  };

  transaction.onerror = (event) => {
    note.innerHTML +=
      "<li>トランザクションはエラーのため開けませんでした。アイテムは重複させられません。</li>";
  };

  // トランザクション上でオブジェクトストアを生成する
  const objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.keyPath);

  // オブジェクトストアに newItem オブジェクトを追加する要求を行う
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // 要求の成功を報告する
    note.innerHTML += "<li>要求に成功しました。</li>";
  };
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
