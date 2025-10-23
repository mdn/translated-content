---
title: IDBKeyRange
slug: Web/API/IDBKeyRange
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

**`IDBKeyRange`** は [IndexedDB API](/ja/docs/Web/API/IndexedDB_API) のインターフェイスで、キーとして使われるデータ型における 1 個の連続した範囲を表します。{{domxref("IDBObjectStore")}} および {{domxref("IDBIndex")}} のオブジェクトから、キーまたはキーの範囲を用いてレコードを取り出すことができます。下限および上限により、範囲を制限できます。たとえば、キーが A 〜 Z の範囲にある全ての値を反復できます。

キーの範囲は、単一の値、もしくは上限および下限 (端点ともいう) をもつ範囲になり得ます。キーの範囲が上限と下限の両方を持つ場合、_有界_ と呼びます。境界が無い場合、_非有界_ と呼びます。有界のキーの範囲は、開 (端点を含まない) にも閉 (端点を含む) にもなり得ます。特定の範囲のキーを全て取得するには、以下のコードの構成を用いることができます。

| 範囲                        | コード                                 |
| --------------------------- | -------------------------------------- |
| ≥ **x** の全キー            | `IDBKeyRange.lowerBound(x)`            |
| > **x** の全キー            | `IDBKeyRange.lowerBound(x, true)`      |
| ≤ **y** の全キー            | `IDBKeyRange.upperBound(y)`            |
| < **y** の全キー            | `IDBKeyRange.upperBound(y, true)`      |
| ≥ **x** && ≤ **y** の全キー | `IDBKeyRange.bound(x, y)`              |
| > **x** && < **y** の全キー | `IDBKeyRange.bound(x, y, true, true)`  |
| > **x** && ≤ **y** の全キー | `IDBKeyRange.bound(x, y, true, false)` |
| ≥ **x** && < **y** の全キー | `IDBKeyRange.bound(x, y, false, true)` |
| 特定のキー = **z**          | `IDBKeyRange.only(z)`                  |

キーは、以下の条件を満たすとき、キーの範囲に含まれます。

- キーの範囲の `lower` の値が、以下のいずれかである
  - `undefined`
  - キーの値より小さい
  - `lowerOpen` が `false` であり、キーの値と等しい

- キーの範囲の `upper` の値が、以下のいずれかである
  - `undefined`
  - キーの値より大きい
  - `upperOpen` が `false` であり、キーの値と等しい

## インスタンスプロパティ

- {{domxref("IDBKeyRange.lower")}} {{ReadOnlyInline}}
  - : キーの範囲の下限です。
- {{domxref("IDBKeyRange.upper")}} {{ReadOnlyInline}}
  - : キーの範囲の上限です。
- {{domxref("IDBKeyRange.lowerOpen")}} {{ReadOnlyInline}}
  - : 下限の値がキーの範囲に含まれるとき、`false` を返します。
- {{domxref("IDBKeyRange.upperOpen")}} {{ReadOnlyInline}}
  - : 上限の値がキーの範囲に含まれるとき、`false` を返します。

## 静的メソッド

- {{domxref("IDBKeyRange.bound_static", "IDBKeyRange.bound()")}}
  - : 上限と下限を持つ新しいキーの範囲を生成します。
- {{domxref("IDBKeyRange.only_static", "IDBKeyRange.only()")}}
  - : 単一の値のみからなる新しいキーの範囲を生成します。
- {{domxref("IDBKeyRange.lowerBound_static", "IDBKeyRange.lowerBound()")}}
  - : 下限のみを持つ新しいキーの範囲を生成します。
- {{domxref("IDBKeyRange.upperBound_static", "IDBKeyRange.upperBound()")}}
  - : 上限のみを持つ新しいキーの範囲を生成します。

## インスタンスメソッド

- {{domxref("IDBKeyRange.includes()")}}
  - : 指定されたキーがこのキーの範囲に含まれるかを表す {{jsxref("boolean")}} を返します。

## 例

以下の例で、キーの範囲の使い方を示します。`"A"` と `"F"` の間の値を表す範囲として `keyRangeValue` を定義します。({{domxref("IDBTransaction")}} を用いて) トランザクションを開き、オブジェクトストアを開き、{{domxref("IDBObjectStore.openCursor")}} を用いてカーソルを開きます。このとき、省略可能なキーの範囲の値として `keyRangeValue` を指定します。これにより、このカーソルはこの範囲に含まれるキーを持つレコードのみを取り出します。開区間にするよう指定していないので、この範囲は値 `"A"` および `"F"` を含みます。`IDBKeyRange.bound("A", "F", true, true);` を使った場合は、`"A"` と `"F"` は範囲に含まれず、その間の値のみが含まれます。

> [!NOTE]
> キーの範囲に関する実験ができるより完全な例は、[IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) リポジトリーを参照してください。([動く例も見る](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/))

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("A", "F");

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
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
