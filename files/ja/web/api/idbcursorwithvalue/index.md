---
title: IDBCursorWithValue
slug: Web/API/IDBCursorWithValue
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{APIRef("IndexedDB")}}

[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) の **`IDBCursorWithValue`** インターフェイスは、データベース内の複数のレコードを走査・反復するのに用いる[カーソル](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%AB)を表します。`value` プロパティがある以外は、{{domxref("IDBCursor")}} と同じです。

カーソルは、反復対象のインデックスまたはオブジェクトストアを表す反復元を持ちます。さらに、範囲内での位置を持ち、レコードキーの順番の昇順もしくは降順に動きます。カーソルにより、アプリケーションはカーソルの範囲の全レコードを非同期で処理できます。

同時に保持できるカーソルの数は無制限です。あるカーソルを表すとき、常に同じ `IDBCursorWithValue` オブジェクトを取得できます。操作は対象のインデックスまたはオブジェクトストアで行われます。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## インスタンスメソッド

親インターフェイスの {{domxref("IDBCursor")}} からメソッドを継承します。

## インスタンスプロパティ

親インターフェイスの {{domxref("IDBCursor")}} からプロパティを継承します。

- {{domxref("IDBCursorWithValue.value")}} {{ReadOnlyInline}}
  - : 現在のカーソルの値を返します。

## 例

この例では、トランザクションを作成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。カーソルを用いる場合、キーでデータを選択する必要は無く、単に全部を取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが指している現在のレコードのデータを `cursor.value.foo` で取得できます。動く例全体は、[IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))

```js
function displayData() {
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);

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
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
