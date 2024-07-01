---
title: IDBFactory.databases()
slug: Web/API/IDBFactory/databases
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{ APIRef("IndexedDB") }}

**`databases`** は {{domxref("IDBFactory")}} のインターフェイスのメソッドは、利用可能な全てのデータベースのリストを、名前とバージョンを含めて返します。

{{AvailableInWorkers}}

> **メモ:** このメソッドは仕様書の草稿で導入されており、ブラウザーの互換性は限られています。

## 構文

```js-nolint
databases()
```

### 引数

このメソッドは引数を取りません。

### 返値

エラーで解決するか、`name` と `version` の 2 個の要素からなる辞書のリストで解決するプロミスを返します。

- `name`
  - : データベースの名前です。
- `version`
  - : データベースのバージョンです。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : メソッドが [opaque origin](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802#42242802) から呼ばれたとき投げられます。

## 例

```js
const promise = indexedDB.databases();
promise.then((databases) => {
  console.log(databases);
});
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
