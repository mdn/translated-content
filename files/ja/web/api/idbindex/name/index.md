---
title: "IDBIndex: name プロパティ"
slug: Web/API/IDBIndex/name
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBIndex")}} インターフェイスの **`name`** プロパティは、このインデックスの名前を表す文字列が入っています。

{{AvailableInWorkers}}

## 値

このインデックスの名前を表す文字列です。

### 例外

インデックスの名前を変更しようとすると発生しうる例外がいくつかあります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : インデックスか対応するオブジェクトストアが削除済であるとき、または現在のトランザクションがアップグレードトランザクションでないとき投げられます。インデックスの名前の変更はアップグレードトランザクション、すなわちモードが `"versionchange"` であるトランザクションでのみ可能です。
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : 現在のトランザクションが実行中でないとき投げられます。
- `ConstraintError` {{domxref("DOMException")}}
  - : 指定の `name` を用いるインデックスが既に存在するとき投げられます。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `lName` を取得します。そして、このインデックスで {{domxref("IDBIndex.openCursor")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`ObjectStore` で直接 {{domxref("IDBObjectStore.openCursor")}} を用いてカーソルを開くのと同じように動きます。

このインデックスの名前をコンソールに記録します。これは `lName` になるはずです。

最後に、各レコードを走査し、データを HTML テーブルに挿入します。動く例全体は、[IndexedDB-examples デモレポジトリー](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex)を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/))

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.name);

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
