---
title: "IDBCursor: primaryKey プロパティ"
short-title: primaryKey
slug: Web/API/IDBCursor/primaryKey
l10n:
  sourceCommit: ac5b7880d127dd1ff9cd69da09ebc427da6bf6f4
---

{{APIRef("IDBCursor")}} {{AvailableInWorkers}}

**`primaryKey`** は {{domxref("IDBCursor")}} インターフェイスの読み取り専用プロパティで、カーソルの現在の実効キーを返します。カーソルが現在反復処理中であったり、範囲外まで反復した場合は、`undefined` になります。カーソルの主キーは任意のデータ型になり得ます。

## 値

任意のデータ型の値です。

## 例

このシンプルな断片では、トランザクションを作成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。それぞれの繰り返しでは、カーソルの主キーをコンソールに記録します。

カーソルを用いる場合、データをキーで選択する必要はなく、単に全て取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが指している現在のレコードのデータを `cursor.value.foo` のようにして取得できます。動く例全体は、[IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))

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

      console.log(cursor.primaryKey);
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
