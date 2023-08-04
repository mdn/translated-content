---
title: IDBKeyRange.lowerBound()
slug: Web/API/IDBKeyRange/lowerBound_static
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBKeyRange")}} インターフェイスの **`lowerBound()`** メソッドは、下限のみを持つ新しいキーの範囲を生成します。デフォルトでは、端点の値を含む「閉」です。

{{AvailableInWorkers}}

## 構文

```js-nolint
lowerBound(lower)
lowerBound(lower, open)
```

### 引数

- `lower`
  - : 新しいキーの範囲の下限を指定します。
- `open` {{optional_inline}}
  - : 下限が端点の値を除くかどうかを表します。デフォルトは `false` です。

### 返値

新しく生成されたキーの範囲を表す {{domxref("IDBKeyRange")}} です。

### 例外

- `DataError` {{domxref("DOMException")}}
  - : 引数 `lower` に割り当てられたキーが有効なキーでないとき投げられます。

## 例

以下の例では、下限が指定されたキーの範囲の使用法を示します。`keyRangeValue = IDBKeyRange.lowerBound("F", false);` と宣言します。これは、値 `"F"` とそれより後の全てを含む範囲です。({{domxref("IDBTransaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keyRangeValue` として {{domxref("IDBObjectStore.openCursor")}} でカーソルを開きます。これにより、このカーソルはキーの値が `"F"` のレコードと、それより後の全てのレコードのみを取得します。`IDBKeyRange.lowerBound("F", true);` を用いた場合、範囲に `"F"` は含まれず、それより後の値のみを含みます。

> **メモ:** キーの範囲に関する実験ができるより完全な例は、[IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) リポジトリを参照してください。([動く例も見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/))

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.lowerBound("F");

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
