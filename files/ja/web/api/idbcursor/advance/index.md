---
title: "IDBCursor: advance() メソッド"
short-title: advance()
slug: Web/API/IDBCursor/advance
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`advance()`** は {{domxref("IDBCursor")}} インターフェイスのメソッドで、このカーソルが位置を前進させる回数を設定します。

## 構文

```js-nolint
advance(count)
```

### 引数

- `count`
  - : カーソルが前進する回数

### 返値

なし ({{jsxref("undefined")}})。

### 例外

このメソッドは次のいずれかの {{domxref("DOMException")}} を発生することがあります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この `IDBCursor` のトランザクションは活性化していません。
- {{jsxref("TypeError")}}
  - : `count` パラメーターに渡された値がゼロや負の数です。
- `InvalidStateError` {{domxref("DOMException")}}
  - : カーソルは現在繰り返し中か、最後を過ぎています。

## 例

このシンプルな例では、トランザクションを作成し、オブジェクトストアを取得し、オブジェクトストアのレコードを一通り繰り返すカーソルを使っています。ここで `cursor.advance(2)` を使ってそれぞれ 2 回前進していて、つまり 1 つおきの結果だけが表示されます。`advance()` は {{domxref("IDBCursor.continue")}} と同様に動作しますが、常に次のレコードに移動するのでなく、一度に複数のレコードを飛び越えられるのが違います。

注意点としてループの繰り返しで、カーソルオブジェクトの現在のレコードのテータを `cursor.value.foo`を使って取得できます。完全な動作例は、[IDBCursor の例](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor)([ライブ例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))を見てください。

```js
function advanceResult() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);
      cursor.advance(2);
    } else {
      console.log("全項目を 1 つおきに表示しました。");
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
