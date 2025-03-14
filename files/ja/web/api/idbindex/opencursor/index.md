---
title: "IDBIndex: openCursor() メソッド"
slug: Web/API/IDBIndex/openCursor
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBIndex")}} インターフェイスの **`openCursor()`** メソッドは、{{domxref("IDBRequest")}} オブジェクトを返し、別スレッドで、指定のキー範囲を走査する[カーソル](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#カーソル)を生成します。

このメソッドは、指定された方向に基づいて、カーソルの位置を適切なレコードに設定します。

キー範囲が指定されないか `null` の場合は、範囲は全レコードを含みます。

{{AvailableInWorkers}}

## 構文

```js-nolint
openCursor()
openCursor(range)
openCursor(range, direction)
```

### 引数

- `range` {{optional_inline}}
  - : カーソルの範囲として使用するキーまたは {{domxref("IDBKeyRange")}} です。省略した場合は、このオブジェクトストア内の全レコードを選択するキー範囲になります。
- `direction` {{optional_inline}}
  - : カーソルの[方向](/ja/docs/Web/API/IDBCursor#定数)です。取りうる値は、[IDBCursor の定数](/ja/docs/Web/API/IDBCursor#定数)を参照してください。

### 返値

この操作に関係する今後のイベントが発火する {{domxref("IDBRequest")}} オブジェクトです。

操作に成功した場合は、この要求の {{domxref("IDBRequest.result", "result")}} プロパティの値は以下になります。

- 与えられたクエリーにマッチする最初のレコードを指す {{domxref("IDBCursorWithValue")}} オブジェクト
- マッチするレコードが見つからない場合は `null`

### 例外

このメソッドは、以下の種類のいずれかの {{domxref("DOMException")}} を投げる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この {{domxref("IDBIndex")}} のトランザクションが実行中でないとき投げられます。
- {{jsxref("TypeError")}}
  - : 引数 `direction` の値が無効であるとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 与えられたキーまたはキー範囲が無効なキーを含むとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("IDBIndex")}} が削除されたか取り除かれたとき投げられます。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `lName` を取得します。そして、このインデックスで `openCursor()` により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`ObjectStore` で直接 {{domxref("IDBObjectStore.openCursor")}} を用いてカーソルを開くのと同じように動きます。

最後に、各レコードを走査し、データを HTML テーブルに挿入します。動く例全体は、[IndexedDB-examples デモレポジトリー](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/))

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");

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
