---
title: IDBCursor.request
slug: Web/API/IDBCursor/request
l10n:
  sourceCommit: d42b609444efb915ab46117f59985d67dda21eb6
---

{{APIRef("IndexedDB")}}

{{domxref("IDBCursor")}} インターフェイスの読み取り専用プロパティ **`request`** は、カーソルを取得するために使用された {{domxref("IDBRequest")}} を返します。

{{AvailableInWorkers}}

## 値

{{domxref("IDBRequest")}} のオブジェクトインスタンスです。

## 例

カーソルを開くと、そのカーソルがどの要求オブジェクトに由来するかを表す `request` プロパティがそのカーソルオブジェクトで使用可能になります。以下が例です。

```js
function displayData() {
  list.textContent = '';
  const transaction = db.transaction(['rushAlbumList'], 'readonly');
  const objectStore = transaction.objectStore('rushAlbumList');

  const request = objectStore.openCursor();

  request.onsuccess = (event) => {
    const cursor = event.target.result;
      if (cursor) {
        const listItem = document.createElement('li');
        listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
        list.appendChild(listItem);
        console.log(cursor.request);
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
