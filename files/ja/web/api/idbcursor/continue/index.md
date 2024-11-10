---
title: "IDBCursor: continue() メソッド"
short-title: continue()
slug: Web/API/IDBCursor/continue
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`continue()`** は {{domxref("IDBCursor")}} インターフェイスのメソッドで、カーソルを現在の方向に次の位置、任意のキーパラメーターに一致するキーを持つアイテムまで進めます。キーを指定しない場合、カーソルはその方向に基づいて、すぐ隣の位置へ進みます。

## 構文

```js-nolint
continue()
continue(key)
```

### 引数

- `key` {{optional_inline}}
  - : このカーソルを進めるためのキーです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

このメソッドは次の内いずれかの {{domxref("DOMException")}} を発生させることがあります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この `IDBCursor` のトランザクションがアクティブではありません。
- `DataError` {{domxref("DOMException")}}
  - : key 引数が以下の状態のうちのいずれかである可能性があります。
    - key が妥当なキーではない
    - キーがこのカーソルの位置と同じかそれより小さく、カーソルの方向が `next` または `nextunique` である。
    - キーがこのカーソルの位置と同じかそれより大きく、カーソルの方向が `prev` または `prevunique` である。
- `InvalidStateError` {{domxref("DOMException")}}
  - : カーソルが現在走査中または末尾を越えて走査しました。

## 例

この単純で部分的な実例ではトランザクションを作り、オブジェクトストアを取得した後、オブジェクトストア内の全ての反復処理するためカーソルを使用しています。カーソルはキーに基づいてデータを選択するには必要ありません。その全てを捕らえることができます。また、それぞれのループ内での繰り返しでカーソルオブジェクトを用い、`cursor.value.foo` とすることで、現在のレコードからカーソルの下のデータを取得できることには注目です。完全な例については [IDBCursor の例](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([ライブデモを見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)) を参照してください。

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
      console.log("全項目を表示しました。");
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
