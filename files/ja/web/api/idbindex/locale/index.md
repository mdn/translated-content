---
title: "IDBIndex: locale プロパティ"
slug: Web/API/IDBIndex/locale
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("IndexedDB")}}{{SeeCompatTable}}{{Non-standard_Header}}

{{domxref("IDBIndex")}} インターフェイスの読み取り専用プロパティ **`locale`** は、生成時に `locale` の値を指定されていた場合、インデックスのロケール (たとえば `en-US` や `pl`) を返します。([`IDBObjectStore.createIndex()`](/ja/docs/Web/API/IDBObjectStore/createIndex) の引数 [`options`](/ja/docs/Web/API/IDBObjectStore/createIndex#options) を参照してください) なお、このプロパティは常にこのインデックスで現在使用されているロケールを返します。すなわち、`"auto"` を返すことはありません。

## 値

文字列です。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `lName` を取得します。そして、このインデックスで {{domxref("IDBIndex.openCursor")}} により基本的なカーソルを開きます。これは、返されるレコードが主キーではなくこのインデックスに基づいてソートされる以外、`ObjectStore` で直接 {{domxref("IDBObjectStore.openCursor")}} を用いてカーソルを開くのと同じように動きます。

`locale` の値をコンソールに記録します。

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.locale);

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

現在どの仕様にも含まれていません。

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
