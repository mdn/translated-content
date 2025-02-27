---
title: "IDBObjectStore: get() メソッド"
slug: Web/API/IDBObjectStore/get
l10n:
  sourceCommit: e09b06a4605bbbf90e64249eb3bec13ab572d42c
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`get()`** メソッドは、{{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで指定のキーによって選択されるオブジェクトを返します。これはオブジェクトストアから特定のレコードを取得する用です。

値が正常に見つかった場合は、その構造化複製が作成され、要求オブジェクトの [`result`](/ja/docs/Web/API/IDBRequest#idbrequest.result) 属性に設定されます。

> [!NOTE]
> このメソッドは「レコードがデータベースに存在しない場合」と「レコードの値が `undefined` の場合」で同じ結果を返します。
> これらを区別するには、同じキーで `openCursor()` メソッドを呼びます。このメソッドは、レコードが存在する場合はカーソルを返し、存在しない場合はカーソルを返しません。

{{AvailableInWorkers}}

## 構文

```js-nolint
get(key)
```

### 引数

- `key`
  - : 取得するレコードを特定するキーまたはキー範囲です。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は指定のキーまたはキー範囲にマッチする最初のレコードの値になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 与えられたキーまたはキー範囲に無効なキーが含まれる時投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} が削除されたか取り除かれたとき投げられます。

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`get()` を用いてオブジェクトストアから特定のレコード 1 個 (キー `"Walk dog"` を持つサンプルレコード) を取得します。データオブジェクトを取得したら、通常の JavaScript により更新し、{{domxref("IDBObjectStore.put")}} 操作によりデータベースに書き戻すことができます。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースを初期化しました。</li>";

  // データベースを開いた結果を変数 db に格納する
  // これは後でよく使う
  db = DBOpenRequest.result;

  // getData() 関数を実行し、データベースからデータを取得する
  getData();
};

function getData() {
  // データベースの読み書きトランザクションを開き、データを所得する準備をする
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

  // オブジェクトストアからキーで指定したレコードを取得する要求をする
  const objectStoreRequest = objectStore.get("Walk dog");

  objectStoreRequest.onsuccess = (event) => {
    // 要求の成功を報告する
    note.innerHTML += "<li>要求に成功しました。</li>";

    const myRecord = objectStoreRequest.result;
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
