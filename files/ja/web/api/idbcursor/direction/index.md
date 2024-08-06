---
title: "IDBCursor: direction プロパティ"
short-title: direction
slug: Web/API/IDBCursor/direction
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

**`direction`** は {{domxref("IDBCursor")}} インターフェイスの読み取り専用プロパティで、(たとえば {{domxref("IDBObjectStore.openCursor")}} で設定した) カーソルの走査の方向を表す文字列です。取りうる値は、以下の[値](#%E5%80%A4)の節を参照してください。

## 値

カーソルがデータを走査する方向を表す文字列です。以下の値を取りえます。

- `next`
  - : この方向は、カーソルを走査対象の先頭で開きます。
- `nextunique`
  - : この方向は、カーソルを走査対象の先頭で開きます。重複した値を持つキーについては、最初に訪れた（先頭に最も近い）レコードのみを返します。
- `prev`
  - : この方向は、カーソルを走査対象の末尾で開きます。
- `prevunique`
  - : この方向は、カーソルを走査対象の末尾で開きます。重複した値を持つキーについては、最初に訪れた（末尾に最も近い）レコードのみを返します。

## 例

このシンプルな断片では、トランザクションを作成し、オブジェクトストアを取得し、カーソルを使用してオブジェクトストア内の全レコードを走査します。それぞれの繰り返しにおいて、カーソルの方向を記録します。

> [!NOTE]
> `direction` プロパティは読み取り専用なので、このプロパティを用いてカーソルが動く方向を変えることはできません。カーソルが動く方向は、{{domxref("IDBObjectStore.openCursor")}} の第 2 引数で設定します。

カーソルを使う場合、データをキーで選択する必要はなく、単に全て取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが指している現在のレコードからデータを `cursor.value.foo` のようにして取得できます。動く例全体は、[IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))

```js
function backwards() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor(null, "prev").onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);

      console.log(cursor.direction);
      cursor.continue();
    } else {
      console.log("エントリーを逆向きに表示しました。");
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
