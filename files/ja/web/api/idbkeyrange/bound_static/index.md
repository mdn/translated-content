---
title: IDBKeyRange.bound()
slug: Web/API/IDBKeyRange/bound_static
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBKeyRange")}} インターフェイスの **`bound()`** メソッドは、指定の上限と下限の値を持つ新しいキーの範囲を生成します。範囲は開 (すなわち、端点の値は範囲に含まれない) とすることも、閉 (すなわち、端点の値は範囲に含まれる) とすることもできます。デフォルトでは、範囲は閉になります。

{{AvailableInWorkers}}

## 構文

```js-nolint
bound(lower, upper)
bound(lower, upper, lowerOpen)
bound(lower, upper, lowerOpen, upperOpen)
```

### 引数

- `lower`
  - : 新しいキーの範囲の下限を指定します。
- `upper`
  - : 新しいキーの範囲の上限を指定します。
- `lowerOpen` {{optional_inline}}
  - : 下限が端点の値を除くかどうかを示します。デフォルトは `false` です。
- `upperOpen` {{optional_inline}}
  - : 上限が端点の値を除くかどうかを示します。デフォルトは `false` です。

### 返値

新しく生成されたキーの範囲を表す {{domxref("IDBKeyRange")}} です。

### 例外

- `DataError` {{domxref("DOMException")}}
  - : 以下の条件のいずれかを満たしたとき投げられます。
    - 下限または上限の引数に有効なキーが渡されなかった
    - 下限のキーが上限のキーより大きい
    - 下限のキーと上限のキーが一致し、いずれかの境界が開である

## 例

以下の例では、有界のキーの範囲の使用法を示します。`keyRangeValue = IDBKeyRange.bound("A", "F");` と宣言します。これは、`"A"` と `"F"` の間の値を表す範囲です。({{domxref("IDBTransaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keyRangeValue` として {{domxref("IDBObjectStore.openCursor")}} でカーソルを開きます。これにより、このカーソルは指定した範囲に含まれるキーを持つレコードのみを取り出します。端点を開として宣言していないので、この範囲は値 `"A"` および `"F"` を含みます。`IDBKeyRange.bound("A", "F", true, true);` を用いた場合は、`"A"` および `"F"` は範囲に含まれず、その間の値のみが含まれます。

> **メモ:** キーの範囲に関する実験ができるより完全な例は、[indexeddb-examples](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) レポジトリの `idbkeyrange` ディレクトリを参照してください。([動く例も見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/))

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("A", "F");

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
