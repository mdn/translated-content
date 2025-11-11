---
title: "IDBIndex: get() メソッド"
slug: Web/API/IDBIndex/get
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBIndex")}} の **`get()`** メソッドは {{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで参照先のオブジェクトストアから指定のキーに対応する値、もしくは `key` が {{domxref("IDBKeyRange")}} に設定された場合は対応する最初の値を検索します。

値が見つかった場合は、その構造化複製を作成し、要求オブジェクトの `result` に設定します。これにより、キーに対応するレコードを返します。

{{AvailableInWorkers}}

## 構文

```js-nolint
get()
get(key)
```

### 引数

- `key` {{optional_inline}}
  - : 取得するレコードを特定するキーまたは {{domxref("IDBKeyRange")}} です。`null` であったり省略された場合は、ブラウザーは無限のキー範囲を用います。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は与えられたキーもしくはキー範囲にマッチする最初のレコードの値になります。

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBIndex")}} のトランザクションが実行中でないとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 与えられたキーまたはキー範囲が無効なキーを含むとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBIndex")}} が削除されたか取り除かれたとき投げられます。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `lName` を取得します。そして、このインデックスで {{domxref("IDBIndex.openCursor")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`ObjectStore` で直接 {{domxref("IDBObjectStore.openCursor")}} を用いてカーソルを開くのと同じように動きます。

そして、`myIndex.get('Bungle')` により `lName` が `Bungle` であるレコードを取得し、`success` コールバックで要求の結果をコンソールに記録します。

最後に、各レコードを走査し、データを HTML テーブルに挿入します。動く例全体は、[IndexedDB-examples デモレポジトリー](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/))

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  const getRequest = myIndex.get("Bungle");
  getRequest.onsuccess = () => {
    console.log(getRequest.result);
  };

  myIndex.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement("tr");
      tableRow.innerHTML =
        `<td>${cursor.value.id}</td>` +
        `<td>${cursor.value.lName}</td>` +
        `<td>${cursor.value.fName}</td>` +
        `<td>${cursor.value.jTitle}</td>` +
        `<td>${cursor.value.company}</td>` +
        `<td>${cursor.value.eMail}</td>` +
        `<td>${cursor.value.phone}</td>` +
        `<td>${cursor.value.age}</td>`;
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log("全エントリーを表示しました。");
    }
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
