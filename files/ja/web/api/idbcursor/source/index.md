---
title: "IDBCursor: source プロパティ"
short-title: source
slug: Web/API/IDBCursor/source
l10n:
  sourceCommit: ac5b7880d127dd1ff9cd69da09ebc427da6bf6f4
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`source`** は {{domxref("IDBCursor")}} インターフェイスの読み取り専用プロパティで、カーソルが反復している対象の {{domxref("IDBObjectStore")}} または {{domxref("IDBIndex")}} を返します。この関数は、カーソルが反復中であっても、最後まで反復した後であっても、トランザクションが実行中でなくても、`null` を返したり例外を投げたりすることはありません。

## 値

カーソルが反復している対象の {{domxref("IDBObjectStore")}} または {{domxref("IDBIndex")}} です。

## 例

このシンプルな断片では、トランザクションを作成し、オブジェクトストアを取得し、カーソルを使用してオブジェクトストア内の全レコードを走査します。それぞれの繰り返しにおいて、カーソルの反復元を記録します。これにより、{{domxref("IDBObjectStore")}} オブジェクトがコンソールに記録されます。

カーソルを使う場合、データをキーで選択する必要はなく、単に全部取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが指している現在のレコードからデータを `cursor.value.foo` のようにして取得できます。動く例全体は、[IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))

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

      console.log(cursor.source);
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
- 参考例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
