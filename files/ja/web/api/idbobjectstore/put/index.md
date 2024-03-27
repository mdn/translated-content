---
title: "IDBObjectStore: put() メソッド"
slug: Web/API/IDBObjectStore/put
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`put()`** メソッドは、データベース内の指定のレコードを更新するか、指定のアイテムが存在しない場合は新規レコードを挿入します。

このメソッドは {{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで、値の[構造化複製](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone)を作成し、この複製をオブジェクトストアに格納します。これは、トランザクションモードが `readwrite` のとき、オブジェクトストアに新規レコードを追加するか既存レコードを更新する用です。レコードが正常に格納されると、返された要求オブジェクトで、`result` が格納されたレコードのキーに設定され、`transaction` がオブジェクトストアが開かれたトランザクションに設定された `success` イベントが発火します。

`put` メソッドは _更新または挿入を行う_ メソッドです。
_挿入のみを行う_ メソッドは、{{domxref("IDBObjectStore.add")}} メソッドを参照してください。

更新したいレコードを指す {{domxref("IDBCursor","IDBCursor")}} があるときは、{{domxref("IDBObjectStore.put()")}} を用いるよりも {{domxref("IDBCursor.update()")}} で更新を行うほうがよいことを覚えておいてください。そうすることで、新規レコードを挿入するのではなく、既存のレコードを更新することが明確になります。

{{AvailableInWorkers}}

## 構文

```js-nolint
put(item)
put(item, key)
```

### 引数

- `item`
  - : 更新 (または挿入) を行いたいアイテムです。
- `key` {{optional_inline}}
  - : 更新したいレコードの主キーです。(たとえば {{domxref("IDBCursor.primaryKey")}} から取得できます)

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は新しいレコードのキーまたは更新したレコードのキーになります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `ReadOnlyError` {{domxref("DOMException")}}
  - : この操作に対応するトランザクションが読み取り専用[モード](/ja/docs/Web/API/IDBTransaction#モード定数)のとき投げられます。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBObjectStore")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 以下のいずれかの条件を満たすとき投げられます。
    - オブジェクトストアで[インラインキー](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#インラインキー)を使用しているか[キージェネレーター](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#キージェネレーター)が存在し、かつ引数 `key` が指定されたとき。
    - オブジェクトストアがアウトラインキーを用いかつキージェネレーターも存在せず、引数 `key` が指定されないとき。
    - オブジェクトストアがインラインキーを用いているが `key` ジェネレーターは存在せず、オブジェクトストアの[キーパス](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#キーパス)が有効なキーを生成しないとき。
    - 引数 `key` が指定されたが、有効なキーでないとき。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("IDBObjectStore")}} が削除されたか取り除かれたとき投げられます。
- `DataCloneError` {{domxref("DOMException")}}
  - : 保存されるデータが内部の構造化複製アルゴリズムで複製できなかったとき投げられます。

## 例

以下の例では、レコードタイトルを指定した要求を行います。要求に成功すると、`onsuccess` 関数で (`objectStoreTitleRequest.result` から利用可能な) {{domxref("IDBObjectStore")}} から対応するレコードを取得し、レコードのプロパティ 1 個を更新し、更新したレコードを `put()` を用いた別の要求によりオブジェクトストアに書き戻します。動く例全体は、[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) アプリケーションを参照してください。([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
const title = "Walk dog";

// いつも通りトランザクションを開く
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// タイトルがこの title である to-do リストのオブジェクトを取得する
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // 結果として返されたデータオブジェクトを取得する
  const data = objectStoreTitleRequest.result;

  // オブジェクトの notified の値を "yes" に更新する
  data.notified = "yes";

  // アイテムをデータベースに書き戻す別の要求を生成する
  const updateTitleRequest = objectStore.put(data);

  // この要求を開始したトランザクションを記録する
  console.log(
    `この要求を開始したトランザクションは ${updateTitleRequest.transaction}`,
  );

  // 新しい要求が成功したら、再び displayData() 関数を実行し、表示を更新する
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
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
- キー範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動くデモを見る](https://mdn.github.io/dom-examples/to-do-notifications/))
