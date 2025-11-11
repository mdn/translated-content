---
title: "IDBCursor: delete() メソッド"
short-title: delete()
slug: Web/API/IDBCursor/delete
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`delete()`** は {{domxref("IDBCursor")}} インターフェイスのメソッドで、{{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドで、カーソルの位置を変えずにカーソルが指しているレコードを削除します。レコードが削除されると、カーソルの値は `null` になります。

注意点として、`delete()` (や {{domxref("IDBCursor.update()")}}) を {{domxref("IDBIndex.openKeyCursor()")}} で取得したカーソルで呼ぶことはできません。このような用途のためには、かわりに {{domxref("IDBIndex.openCursor()")}} を使用しないといけません。

## 構文

```js-nolint
delete()
```

### 引数

なし。

### 返値

この操作に関連する後続のイベントが発生する {{domxref("IDBRequest")}} オブジェクト。

処理が成功した場合、リクエストの {{domxref("IDBRequest.result", "result")}} プロパティの値は `undefined` です。

### 例外

このメソッドは、以下の種類の {{domxref("DOMException")}} を発生させる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この `IDBCursor` のトランザクションが活性状態でないとき投げられます。
- `ReadOnlyError` {{domxref("DOMException")}}
  - : トランザクションが読み取り専用モードのとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : カーソルが {{domxref("IDBindex.openKeyCursor")}} により作成されたか、現在反復中であるか、終わりまで反復済みであるとき投げられます。

## 例

このシンプルな断片ではトランザクションを作成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。カーソルが指しているレコードの `albumTitle` が `"Grace under pressure"` である場合、`const request = cursor.delete();` によりそのレコード全体を削除します。

カーソルを使用する場合、キーによりデータを選択する必要は無く、単に全てを取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが指しているレコードのデータを `cursor.value.foo` のようにして取得できます。動く例全体は、[IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) を参照してください。([動く例を見る](https://mdn.github.io/indexeddb-examples/idbcursor/))

```js
function deleteResult() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readwrite");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      if (cursor.value.albumTitle === "Grace under pressure") {
        const request = cursor.delete();
        request.onsuccess = () => {
          console.log(
            "Deleted that mediocre album from 1984. Even Power windows is better.",
          );
        };
      } else {
        const listItem = document.createElement("li");
        listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
        list.appendChild(listItem);
      }
      cursor.continue();
    } else {
      console.log("項目をを表示しました。");
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
