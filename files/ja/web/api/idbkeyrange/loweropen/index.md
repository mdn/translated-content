---
title: "IDBKeyRange: lowerOpen プロパティ"
short-title: lowerOpen
slug: Web/API/IDBKeyRange/lowerOpen
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

**`lowerOpen`** は {{domxref("IDBKeyRange")}} インターフェイスの読み取り専用プロパティで、下限の値がキーの範囲に含まれるかを表す論理値を返します。

## 値

論理値です。

| 値      | 意味                                 |
| ------- | ------------------------------------ |
| `true`  | 下限の値はキーの範囲に含まれません。 |
| `false` | 下限の値はキーの範囲に含まれます。   |

## 例

以下の例は、キーの範囲の使用法を示します。`keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` と宣言します。上限と下限の両方が開 (`true`) として宣言されているので、これは `"F"` と `"W"` の間の値を全て含むが、これらの値は含まない範囲です。({{domxref("IDBTransaction")}} により) トランザクションを開き、オブジェクトストアを開き、省略可能なキーの範囲の値を `keyRangeValue` として {{domxref("IDBObjectStore.openCursor")}} でカーソルを開きます。

キーの範囲を宣言した後、その `lowerOpen` プロパティの値をコンソールに記録します。これは `"true"` になるはずです。下限は開なので、範囲には含まれないでしょう。

> [!NOTE]
> キーの範囲に関する実験ができるより完全な例は、[IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) リポジトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/))

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.lowerOpen);

  const transaction = db.transaction(["fThings"], "readonly");
  const objectStore = transaction.objectStore("fThings");
  objectStore.openCursor(keyRangeValue).onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.fThing}, ${cursor.value.fRating}`;
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
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
