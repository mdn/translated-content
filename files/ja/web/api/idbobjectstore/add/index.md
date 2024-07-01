---
title: "IDBObjectStore: add() メソッド"
slug: Web/API/IDBObjectStore/add
l10n:
  sourceCommit: 7c693c1df4038a78e681cdcd3ca744bd4dc809b5
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`add()`** メソッドは、{{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで値の[構造化複製](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone)を生成し、この複製をオブジェクトストアに保存します。これはオブジェクトストアに新しいレコードを追加する操作です。

`success` イベントが発火した後でもトランザクションは失敗するかもしれないので、追加操作が正常に完了したかを判定するには、`IDBObjectStore.add` 要求の `success` イベントに加え、トランザクションの `complete` イベントも監視してください。言い換えると、`success` イベントはトランザクションをキューに追加するのに成功した時点で発火します。

`add` メソッドは _挿入のみを行う_ メソッドです。引数 `key` をキーとするレコードがオブジェクトストア内に既に存在する場合、返される要求オブジェクトで `ConstraintError` のエラーイベントが発火します。既存のレコードを更新するには、かわりに {{domxref("IDBObjectStore.put")}} を用いてください。

{{AvailableInWorkers}}

## 構文

```js-nolint
add(value)
add(value, key)
```

### 引数

- `value`
  - : 保存する値です。
- `key` {{optional_inline}}
  - : レコードを識別するキーです。指定されない場合は、`null` になります。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は新しいレコードのキーになります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `ReadOnlyError` {{domxref("DOMException")}}
  - : この操作に対応するトランザクションが読み取り専用[モード](/ja/docs/Web/API/IDBTransaction#モード定数)のとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 以下のいずれかの条件を満たすとき投げられます。
    - オブジェクトストアがインラインキーを用いているかキージェネレーターが存在し、引数 `key` が指定されたとき。
    - オブジェクトストアがアウトラインキーを用いかつキージェネレーターも存在せず、引数 `key` が指定されないとき。
    - オブジェクトストアがインラインキーを用いているがキージェネレーターは存在せず、オブジェクトストアのキーパスが有効なキーを生成しないとき。
    - 引数 `key` が指定されたが、有効なキーでないとき。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("IDBObjectStore")}} が削除されたか取り除かれたとき投げられます。
- `DataCloneError` {{domxref("DOMException")}}
  - : 保存されるデータが内部の構造化複製アルゴリズムで複製できなかったとき投げられます。
- `ConstraintError` {{domxref("DOMException")}}
  - : 主キー制約の違反により挿入操作に失敗したとき投げられます。(同じ主キーの値を持つレコードが既に存在するとき)

## 例

以下のコード断片では、データベースの読み書きトランザクションを開き、`add()` を用いてオブジェクトストアにデータを追加します。トランザクションイベントハンドラーに設定された関数により、成功時または失敗時、トランザクションを開いた結果を報告することにも注目してください。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

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
  // IDB に挿入できる新規オブジェクトを生成する
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

  // すべて完了したとき、トランザクションの正常終了を報告する
  transaction.oncomplete = (event) => {
    note.innerHTML += "<li>トランザクションが完了しました。</li>";
  };

  transaction.onerror = (event) => {
    note.innerHTML +=
      "<li>トランザクションはエラーのため開けませんでした。アイテムは重複させられません。</li>";
  };

  // トランザクションでオブジェクトストアを生成する
  const objectStore = transaction.objectStore("toDoList");

  // オブジェクトストアに newItem オブジェクトを追加する要求をする
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
