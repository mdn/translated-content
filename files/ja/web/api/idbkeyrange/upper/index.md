---
title: IDBKeyRange.upper
slug: Web/API/IDBKeyRange/upper
l10n:
  sourceCommit: d42b609444efb915ab46117f59985d67dda21eb6
---

{{ APIRef("IndexedDB") }}

{{domxref("IDBKeyRange")}} インターフェイスの読み取り専用プロパティ **`upper`** は、キーの範囲の上限を返します。

{{AvailableInWorkers}}

## 値

キーの範囲の上限です。(任意の型になり得ます)

## 例

以下の例では、キーの範囲の使用法を示します。`keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` と定義します。上限と下限の両方が開 (`true`) として宣言されているので、これは `"F"` と `"W"` の間の全ての値を含むが、これらの値は含まない範囲です。({{domxref("IDBTransaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keyRangeValue` として {{domxref("IDBObjectStore.openCursor")}} でカーソルを開きます。

キーの範囲を宣言した後、その `upper` プロパティの値をコンソールに記録します。これは `"W"` になるはずです。

> **メモ:** キーの範囲に関する実験ができるより完全な例は、[IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) リポジトリを参照してください。([動く例も見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/))

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.upper);

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
