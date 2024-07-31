---
title: "IDBDatabase: transaction() メソッド"
short-title: transaction()
slug: Web/API/IDBDatabase/transaction
l10n:
  sourceCommit: 88241bf466f1025d3c2f4ce2752586dd85d1ae13
---

{{ APIRef("IndexedDB") }}

**`transaction`** は {{domxref("IDBDatabase")}} インターフェイスのメソッドで、オブジェクトストアへのアクセスに利用できる {{domxref("IDBTransaction.objectStore")}} メソッドを含むトランザクションオブジェクト ({{domxref("IDBTransaction")}}) を即座に返します。

{{AvailableInWorkers}}

## 構文

```js-nolint
transaction(storeNames)
transaction(storeNames, mode)
transaction(storeNames, mode, options)
```

### 引数

- `storeNames`

  - : 新しいトランザクションの対象となるオブジェクトストアの名前を表す文字列の配列です。アクセスが必要なオブジェクトストアのみを指定してください。アクセスが必要なオブジェクトストアが 1 個だけである場合は、その名前を文字列で指定できます。そのため、以下の行は等価です。

    ```js
    db.transaction(["my-store-name"]);
    db.transaction("my-store-name");
    ```

    データベース内の全てのオブジェクトストアにアクセスする必要がある場合は、{{domxref("IDBDatabase.objectStoreNames")}} プロパティを使用できます。

    ```js
    const transaction = db.transaction(db.objectStoreNames);
    ```

    空の配列を渡すと、例外が投げられます。

- `mode` {{optional_inline}}

  - : トランザクション内で実行できるアクセスの種類です。トランザクションは `readonly`、`readwrite`、`readwriteflush` (非標準、Firefox のみ) の 3 種類のいずれかのモードで開始します。`versionchange` モードはここでは指定できません。この引数を指定しない場合、デフォルトのアクセスモードは `readonly` です。速度の低下を避けるため、実際にデータベースに書き込む必要がある場合以外は `readwrite` トランザクションを開始しないでください。

    データを更新するためオブジェクトストアを `readwrite` モードで開く必要がある場合、以下のようにすると良いです。

    ```js
    const transaction = db.transaction("my-store-name", "readwrite");
    ```

    Firefox 40 以降、IndexedDB のトランザクションはパフォーマンスを向上させるために永続性を緩めています。([Firefox バグ 1112702](https://bugzil.la/1112702) を参照) これは IndexedDB に対応した他のブラウザーと同様の挙動です。以前は、`readwrite` トランザクションでは {{domxref("IDBTransaction.complete_event", "complete")}} イベントはすべてのデータが確実にディスクに書き込まれてからのみ発火していました。Firefox 40 以降では、`complete` イベントは OS にデータを書き込む指示を出した後に発火し、データはまだ実際にディスクに書き込まれていない可能性があります。そのため、`complete` イベントは以前より早く伝わることがありますが、データがディスクに書き込まれる前に OS がクラッシュしたりシステム電源が喪失したりすると、トランザクション全体が失われる可能性が少しあります。そのような最悪の事象はほとんどないため、ほとんどの利用者は気にしなくていいでしょう。

    > [!NOTE]
    > Firefox では、何らかの理由で永続性を保証したい場合 (例えば、後で再計算できない重要なデータを保存する場合)、実験的な (非標準の) `readwriteflush` モードを用いてトランザクションを開始することで、`complete` イベントを伝える前にトランザクションをディスクに書き込むことを強制できます。({{domxref("IDBDatabase.transaction")}} を参照) これは現在実験的であり、`about:config` で `dom.indexedDB.experimental` を `true` に設定している場合のみ利用できます。

- `options` {{optional_inline}}

  - : その他のオプションが入った辞書です。以下が利用可能なオプションです。

    - `durability`
      - : `"default"`、`"strict"`、`"relaxed"` のいずれかです。デフォルト値は `"default"` です。`"relaxed"` を使用するとパフォーマンスが向上しますが、保証は減ります。ウェブアプリケーションでは、キャッシュや変化が早いレコードなどの一時的なデータには `"relaxed"` を用い、パフォーマンスや電力に影響してもデータ消失のリスクを減らしたい場合は `"strict"` を用いるべきです。

### 返値

{{domxref("IDBTransaction")}} オブジェクトを返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBDatabase")}} のインスタンスで既に {{domxref("IDBDatabase.close", "close()")}} メソッドが呼ばれているとき投げられます。
- `NotFoundError` {{domxref("DOMException")}}
  - : 引数 `storeNames` で指定されたオブジェクトストアが削除されている、または取り除かれているとき投げられます。
- {{jsxref("TypeError")}}
  - : 引数 `mode` の値が無効であるとき投げられます。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : 関数がオブジェクトストア名の空のリストとともに呼ばれたとき投げられます。

## 例

この例では、データベースに接続し、`transaction()` を用いてデータベース上でトランザクションを開始します。完全な例は [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
let db;

// データベースを開く
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>データベースの初期化が完了しました。</li>";

  // データベースを開いた結果を変数 db に格納します。
  // これはこの先いっぱい使います。
  db = DBOpenRequest.result;

  // displayData() 関数を呼び出し、IDB に格納済の TO-DO リストの
  // データ全てをタスクリストに入れます
  displayData();
};

// 読み書き用のデータベーストランザクションを開始し、データを追加する準備をします
const transaction = db.transaction(["toDoList"], "readwrite");

// トランザクション開始が成功したら報告します
transaction.oncomplete = (event) => {
  note.innerHTML +=
    "<li>トランザクション完了: データベースの変更が完了しました。</li>";
};

transaction.onerror = (event) => {
  note.innerHTML +=
    "<li>エラーによりトランザクションが開始できませんでした。アイテムの重複は禁止です。</li>";
};

// そして、オブジェクトストアを介してデータベースにさらに何かをするでしょう
const objectStore = transaction.objectStore("toDoList");
// など
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
