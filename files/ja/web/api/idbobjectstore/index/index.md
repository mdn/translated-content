---
title: "IDBObjectStore: index() メソッド"
slug: Web/API/IDBObjectStore/index
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBObjectStore")}} インターフェイスの **`index()`** メソッドは、現在のオブジェクトストアの名前付きインデックスを開きます。開くと、たとえば、カーソルを用いてレコード群をそのインデックスでソートして取得できます。

{{AvailableInWorkers}}

## 構文

```js-nolint
index(name)
```

### 引数

- `name`
  - : 開くインデックスの名前です。

### 返値

指定のインデックスにアクセスするための {{domxref("IDBIndex")}} オブジェクトです。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 元のオブジェクトストアが削除済か、オブジェクトストアのトランザクションが終了しているとき投げられます。
- `NotFoundError` {{domxref("DOMException")}}
  - : 指定の名前 (大文字と小文字を区別します) のインデックスがデータベースに存在しないとき投げられます。

## 例

以下の例では、トランザクションとオブジェクトストアを開き、シンプルな連絡先データベースからインデックス `lName` を取得します。そして、{{domxref("IDBIndex.openCursor")}} を用いてこのインデックスで基本的なカーソルを開きます。これは、返されるレコードが主キーではなくインデックスに基づいてソートされる以外、{{domxref("IDBObjectStore.openCursor")}} を用いて `ObjectStore` で直接カーソルを開くのと同じように動きます。

最後に、レコードを走査し、データを HTML テーブルに挿入します。動く例全体は、[IndexedDB-examples デモリポジトリー内の IDBIndex 例](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/))

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
