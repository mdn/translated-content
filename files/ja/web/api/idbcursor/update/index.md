---
title: "IDBCursor: update() メソッド"
short-title: update()
slug: Web/API/IDBCursor/update
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`update()`** は {{domxref("IDBCursor")}} インターフェイスのメソッドで、{{domxref("IDBRequest")}} オブジェクトを返し、別のスレッドで、オブジェクトストア内のカーソルが現在指している値を更新します。カーソルが削除したばかりのレコードを指している場合は、新しいレコードが作成されます。

注意点として、`update()` (や {{domxref("IDBCursor.delete()")}}) を {{domxref("IDBIndex.openKeyCursor()")}} で取得したカーソルで呼ぶことはできません。このような用途のためには、かわりに {{domxref("IDBIndex.openCursor()")}} を使用しないといけません。

## 構文

```js-nolint
update(value)
```

### 引数

- `value`
  - : 現在の位置に保存する新しい値です。

### 返値

この操作に関連する後続のイベントが発生する {{domxref("IDBRequest")}} オブジェクト。

処理が成功した場合、リクエストの {{domxref("IDBRequest.result", "result")}} プロパティの値は `undefined` です。

### 例外

このメソッドは、以下の種類の {{domxref("DOMException")}} を発生させる可能性があります。

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : この `IDBCursor` のトランザクションが活性状態でないとき投げられます。
- `ReadOnlyError` {{domxref("DOMException")}}
  - : トランザクションが読み取り専用モードであるとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : カーソルが {{domxref("IDBindex.openKeyCursor")}} により作成されたか、現在反復中であるか、最後まで反復済みであるとき投げられます。
- `DataError` {{domxref("DOMException")}}
  - : 操作対象のオブジェクトストアがインラインキーを使用しており、オブジェクトストアのキーパスで指定された値のプロパティがこのカーソルの位置のキーと一致しないとき投げられます。
- `DataCloneError` {{domxref("DOMException")}}
  - : 保存しようとしたデータが、内部の構造化複製アルゴリズムで複製できなかったとき投げられます。

## 例

このシンプルな断片では、トランザクションを作成し、オブジェクトストアを取得し、カーソルを用いてオブジェクトストア内の全レコードを走査します。カーソルが現在指しているレコードの `albumTitle` が `"A farewell to kings"` である場合、`const request = cursor.update();` を用いてアルバムのリリース年を更新します。

なお、データの完全性が破壊されるため、`cursor.update()` により主キーを変更することはできません。そのため、アルバムのタイトルは変更していません。このような場合、レコード全体を削除し、{{domxref("IDBObjectStore.add")}} により新しいレコードを追加する必要があるでしょう。また、更新の呼び出しに直接 `cursor.value` を使うことはできません。そのため、以下の例では作業用に変数 `updateData` を使用しています。

カーソルを用いる場合、データをキーで選択する必要は無く、単に全てを取得できます。また、ループ中のそれぞれの繰り返しにおいて、カーソルオブジェクトが現在指しているレコードのデータを `cursor.value.foo` のようにして取得できます。動く例全体は、[IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) を参照してください。([動く例を見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/))

```js
function updateResult() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readwrite");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      if (cursor.value.albumTitle === "A farewell to kings") {
        const updateData = cursor.value;

        updateData.year = 2050;
        const request = cursor.update(updateData);
        request.onsuccess = () => {
          console.log("アルバムの年の改善？");
        };
      }

      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);
      cursor.continue();
    } else {
      console.log("エントリーを表示しました。");
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
