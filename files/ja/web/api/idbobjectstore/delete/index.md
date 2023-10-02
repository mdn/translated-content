---
title: "IDBObjectStore: delete() メソッド"
slug: Web/API/IDBObjectStore/delete
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("IndexedDB")}}

{{domxref("IDBObjectStore")}} インターフェイスの **`delete()`** メソッドは、{{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで指定のレコードまたはレコード群を削除します。

キーまたは {{domxref("IDBKeyRange")}} を渡すことができ、これによってオブジェクトストアから 1 個または複数のレコードを削除できます。オブジェクトストア内の全レコードを削除するには、{{domxref("IDBObjectStore.clear")}} を使用してください。

{{domxref("IDBCursor", "IDBCursor")}} を使用している場合は、{{domxref("IDBCursor.delete()")}} メソッドを用いることで現在のレコードをより効率よく削除できることを覚えておいてください。この方法では、レコードのキーを明示的に検索せずにすみます。

{{AvailableInWorkers}}

## 構文

```js-nolint
delete(key)
```

### 引数

- `key`
  - : 削除するレコードのキー、もしくはキーが範囲内のレコードをすべて削除する {{domxref("IDBKeyRange")}} です。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は `undefined` になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : このオブジェクトストアのトランザクションが実行中でないとき投げられます。
- `ReadOnlyError` {{domxref("DOMException")}}
  - : このオブジェクトストアのトランザクションのモードが読み取り専用のとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : このオブジェクトストアが削除済のとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : `key` が[有効なキー](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#キー)でも[キー範囲](/ja/docs/Web/API/IDBKeyRange)でもないとき投げられます。

## 例

以下のコード断片では、To-do Notifications サンプルアプリケーションの一部である `deleteItem()` 関数を紹介しています。このアプリケーションは、to-do リストの項目を IndexedDB を用いて保存します。[このアプリケーションのコード全体を GitHub で見る](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)ことも、[動くアプリケーションを試す](https://mdn.github.io/dom-examples/to-do-notifications/)こともできます。

`deleteItem()` 関数は、ユーザーが to-do リストの項目を削除する項目をクリックすると呼び出されます。アイテムキーはボタンの `'data-task'` データ属性で設定されるので、削除するアイテムを特定できます。この関数はデータベースのトランザクションを開き、その中でキーを指定してアイテムを削除します。トランザクションの完了時、この関数はアプリケーションの UI を更新してアイテムが削除されたことを報告します。

なお、この関数内で使われる `db` はアプリケーションの読み込み時に初期化され、{{domxref("IDBDatabase")}} オブジェクトを参照するグローバル変数です。

```js
function deleteItem(event) {
  // 削除するタスクの名前を取得する
  let dataTask = event.target.getAttribute("data-task");

  // データベースのトランザクションを開始し、タスクを上で取得した名前で検索して削除する
  let transaction = db.transaction(["toDoList"], "readwrite");
  let request = transaction.objectStore("toDoList").delete(dataTask);

  // データアイテムが削除されたことを報告する
  transaction.oncomplete = () => {
    // ボタンの親 (リストアイテム) を削除し、表示を消す
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    note.innerHTML += `<li>タスク "${dataTask}" が削除されました。</li>`;
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
