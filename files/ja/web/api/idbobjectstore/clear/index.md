---
title: "IDBObjectStore: clear() メソッド"
slug: Web/API/IDBObjectStore/clear
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`clear()`** メソッドは、{{domxref("IDBRequest")}} を生成してすぐに返します。そして、別スレッドでオブジェクトストアをクリアします。これは、オブジェクトストア内のデータをすべて削除する操作です。

オブジェクトストアのクリアは、オブジェクトストアからレコードをすべて削除し、このオブジェクトストアを参照するインデックスの全レコードを削除する操作です。オブジェクトストア内の一部のレコードのみを削除するには、{{domxref("IDBObjectStore.delete")}} にキーまたは {{domxref("IDBKeyRange")}} を渡してください。

{{AvailableInWorkers}}

## 構文

```js-nolint
clear()
```

### 引数

なし

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は `undefined` になります。

### 例外

- `ReadOnlyError` {{domxref("DOMException")}}
  - : この操作に対応するトランザクションが読み取り専用[モード](/ja/docs/Web/API/IDBTransaction/mode)のとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`clear()` を用いてオブジェクトストア内の全データを消去します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースを初期化しました。</li>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  db = DBOpenRequest.result;

  // オブジェクトストアから全データを消去する
  clearData();
};

function clearData() {
  // 読み書きトランザクションを開き、データを消去する準備をする
  const transaction = db.transaction(["toDoList"], "readwrite");

  // すべて完了したとき、トランザクションの正常終了を報告する
  transaction.oncomplete = (event) => {
    note.innerHTML += "<li>トランザクションが完了しました。</li>";
  };

  transaction.onerror = (event) => {
    note.innerHTML += `<li>トランザクションはエラーのため開けませんでした: ${transaction.error}</li>`;
  };

  // トランザクションでオブジェクトストアを生成する
  const objectStore = transaction.objectStore("toDoList");

  // オブジェクトストアから全データを消去する要求をする
  const objectStoreRequest = objectStore.clear();

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
