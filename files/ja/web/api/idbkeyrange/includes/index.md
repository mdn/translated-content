---
title: "IDBKeyRange: includes() メソッド"
short-title: includes()
slug: Web/API/IDBKeyRange/includes
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

`includes()` は {{domxref("IDBKeyRange")}} インターフェイスのメソッドで、指定のキーがこのキーの範囲に含まれるかを表す論理値を返します。

## 構文

```js-nolint
includes(key)
```

### 引数

- `key`
  - : キーの範囲に含まれるかをチェックするキーです。任意の型を使用可能です。

### 返値

論理値です。

### 例外

- `DataError` {{domxref("DOMException")}}
  - : 指定されたキーが有効なキーでないとき投げられます。

## 例

```js
const keyRangeValue = IDBKeyRange.bound("A", "K", false, false);

keyRangeValue.includes("F");
// true を返します

keyRangeValue.includes("W");
// false を返します
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
