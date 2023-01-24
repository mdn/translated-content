---
title: IDBFactory.cmp
slug: Web/API/IDBFactory/cmp
---

{{ APIRef("IDBFactory") }}

{{domxref("IDBFactory")}} インターフェイスの **`cmp()`** メソッドは、2 つのキーが等価か決定するために比較し、そして、IndexedDB で保存や統合のような操作を命令します。

> **メモ:** このメソッドを任意の JavaScript における値の比較に使用してはいけません。なぜなら、JavaScript の値の多くは IndexedDB の有効なキーではない (例えば、boolean や object) か、IndexedDB で等価なキーとして扱われる (例えば、IndexedDB は数値以外のプロパティを持つ配列を無視して空の配列として扱うため、数値でない配列は全て等価として扱われます) ためです。このメソッドは、値のうちいずれかが有効なキーでないとき、例外を投げます。

## 構文

```js
var result = window.indexedDB.cmp(a, b);
```

### 返値

比較結果を示す整数値。次のテーブルに可能性のある値とその意味を載せます。

| 戻り値 | 説明                                  |
| ------ | ------------------------------------- |
| -1     | 1 つ目のキーが 2 つ目のキーより小さい |
| 0      | 1 つ目のキーと 2 つ目のキーが等しい   |
| 1      | 1 つ目のキーが 2 つ目のキーより大きい |

### 例外

このメソッドでは、次の型のような {{domxref("DOMError")}} を持つ {{domxref("DOMException")}} が発生するかもしれません。

| 属性                                 | 説明                           |
| ------------------------------------ | ------------------------------ |
| [`DataError`](/ja/docs/DOM/DOMError) | 渡されたキーが不正な値である。 |

## 例

```js
var a = 1;
var b = 2;
var result = window.indexedDB.cmp(a, b);
console.log( "比較結果 : " + result );
```

## 引数

- `first`
  - : 比較する 1 つ目のキー。
- `second`
  - : 比較する 2 つ目のキー。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.IDBFactory.cmp")}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始 : {{domxref("IDBDatabase")}}
- トランザクションの使用 : {{domxref("IDBTransaction")}}
- キーの範囲の設定 : {{domxref("IDBKeyRange")}}
- データの取得と変更 : {{domxref("IDBObjectStore")}}
- カーソルの使用 : {{domxref("IDBCursor")}}
- リファレンス例 : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
