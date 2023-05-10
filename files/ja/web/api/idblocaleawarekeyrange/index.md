---
title: IDBLocaleAwareKeyRange
slug: Web/API/IDBLocaleAwareKeyRange
l10n:
  sourceCommit: 59a0a003281f70f55ac524bb3c370b19f0a7a14a
---

{{APIRef("IndexedDB")}}{{SeeCompatTable}}{{Non-standard_Header}}

[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) の **`IDBLocaleAwareKeyRange`** は、{{domxref("IDBKeyRange")}} の Firefox 固有バージョンです。全く同じように動作し、同じプロパティとメソッドを持ちますが、`locale` の値を指定して生成したインデックスを表す {{domxref("IDBIndex")}} オブジェクトとともに使用することを意図しています。([`createIndex()`](/ja/docs/Web/API/IDBObjectStore/createIndex) の引数 [`options`](/ja/docs/Web/API/IDBObjectStore/createIndex#options) を参照してください) すなわち、[ロケールを意識した並べ替え](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB#%E3%83%AD%E3%82%B1%E3%83%BC%E3%83%AB%E3%82%92%E6%84%8F%E8%AD%98%E3%81%97%E3%81%9F%E4%B8%A6%E3%81%B9%E6%9B%BF%E3%81%88)が有効になっています。

## インスタンスメソッド

_このインターフェイスは、親インターフェイスの {{domxref("IDBKeyRange")}} のメソッドを全て継承します。_

## インスタンスプロパティ

_このインターフェイスは、親インターフェイスの {{domxref("IDBKeyRange")}} のプロパティを全て継承します。_

ただし、`IDBLocaleAwareKeyRange` は {{domxref("IDBKeyRange.bound")}} を独自に実装していることを覚えておいてください。これは、`bound()` は下限が上限未満であるかをチェックし、そうなっていない場合は例外を投げるためです。ロケールを意識したインデックスでは、比較の意味はロケールによって異なり、たとえばリトアニア語では Y は I と K の間に並びます。`IDBKeyRange` と `IDBLocaleAwareKeyRange` の唯一の違いは、後者はこのチェックを行わないことです。

開発者は、ロケールを意識したインデックスを扱う際は、常に `IDBLocaleAwareKeyRange` を用いるべきです。

## 例

```js
function displayData() {
  const keyRangeValue = IDBLocaleAwareKeyRange.bound("A", "F");

  const transaction = db.transaction(['fThings'], 'readonly');
  const objectStore = transaction.objectStore('fThings');

  const myIndex = objectStore.index('lName');
  myIndex.openCursor(keyRangeValue).onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `<td>${cursor.value.id}</td>`
                         + `<td>${cursor.value.lName}</td>`
                         + `<td>${cursor.value.fName}</td>`
                         + `<td>${cursor.value.jTitle}</td>`
                         + `<td>${cursor.value.company}</td>`
                         + `<td>${cursor.value.eMail}</td>`
                         + `<td>${cursor.value.phone}</td>`
                         + `<td>${cursor.value.age}</td>`;
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log('全エントリーを表示しました。');
    }
  };
};
```

## 仕様書

現在、どの仕様書にも入っていません。

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
