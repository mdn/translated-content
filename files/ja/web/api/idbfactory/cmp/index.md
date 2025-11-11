---
title: "IDBFactory: cmp() メソッド"
short-title: cmp()
slug: Web/API/IDBFactory/cmp
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

**`cmp()`** は {{domxref("IDBFactory")}} インターフェイスのメソッドで、格納や反復処理などの IndexedDB 処理において、2 つの値をキーとして比較し、等しさや順序を決定します。

> [!NOTE]
> このメソッドを任意の JavaScript における値の比較に使用してはいけません。なぜなら、JavaScript の値の多くは IndexedDB の有効なキーではない（例えば、論理値やオブジェクト）か、IndexedDB で等価なキーとして扱われるためです（例えば、IndexedDB は数値以外のプロパティを持つ配列を無視して空の配列として扱うため、数値でない配列は全て等価として扱われます）。このメソッドは、値のうちいずれかが有効なキーでないとき、例外を投げます。

## 構文

```js-nolint
cmp(first, second)
```

## 引数

- `first`
  - : 比較する 1 つ目のキー。
- `second`
  - : 比較する 2 つ目のキー。

### 返値

比較結果を示す整数値です。下記のテーブルでは、取りうる値とその意味を示しています。

| 返値 | 説明                                  |
| ---- | ------------------------------------- |
| -1   | 1 つ目のキーが 2 つ目のキーより小さい |
| 0    | 1 つ目のキーと 2 つ目のキーが等しい   |
| 1    | 1 つ目のキーが 2 つ目のキーより大きい |

### 例外

- `DataError` {{domxref("DOMException")}}
  - : 指定されたキーの何れかが有効なキーではなかった場合。

## 例

```js
const a = 1;
const b = 2;
const result = window.indexedDB.cmp(a, b);
console.log(`比較結果: ${result}`);
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
