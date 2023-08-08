---
title: IDBKeyRange.only()
slug: Web/API/IDBKeyRange/only_static
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBKeyRange")}} インターフェイスの **`only()`** メソッドは、単一の値からなる新しいキーの範囲を生成します。

{{AvailableInWorkers}}

## 構文

```js-nolint
only(value)
```

### 引数

- `value`
  - : 新しいキーの範囲として用いる値です。

### 返値

新しく生成されたキーの範囲を表す {{domxref("IDBKeyRange")}} です。

### 例外

- `DataError` {{domxref("DOMException")}}
  - : 引数 `value` が有効なキーでないとき投げられます。

## 例

以下の例では、単一の値からなるキーの範囲の使用法を示します。`keyRangeValue = IDBKeyRange.only("A");` と宣言します。これは、値 `"A"` のみを含む範囲です。({{domxref("IDBTransaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keyRangeValue` として {{domxref("IDBObjectStore.openCursor")}} でトランザクションを開きます。これにより、このカーソルはキーの値が `"A"` であるレコードのみを取得します。

> **メモ:** キーの範囲に関する実験ができるより完全な例は、[IDBKeyRange](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) レポジトリを参照してください。([動く例も見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/))

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.only("A");

  const transaction = db.transaction(['fThings'], 'readonly');
  const objectStore = transaction.objectStore('fThings');

  objectStore.openCursor(keyRangeValue).onsuccess = (event) => {
    const cursor = event.target.result;
      if (cursor) {
        const listItem = document.createElement('li');
        listItem.textContent = `${cursor.value.fThing}, ${cursor.value.fRating}`;
        list.appendChild(listItem);

        cursor.continue();
      } else {
        console.log('全エントリーを表示しました。');
      }
    };
  };
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
