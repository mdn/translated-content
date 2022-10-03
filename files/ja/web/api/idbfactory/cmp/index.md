---
title: IDBFactory.cmp
slug: Web/API/IDBFactory/cmp
---

{{ APIRef("IDBFactory") }}

{{domxref("IDBFactory")}}インターフェイスの`cmp()`メソッドは、2 つのキーが等価か決定するために比較し、そして、IndexedDB で保存や統合のような操作を命令します。

> **メモ:** Do not use this method for comparing arbitrary JavaScript values, because many JavaScript values are either not valid IndexedDB keys (booleans and objects, for example) or are treated as equivalent IndexedDB keys (for example, since IndexedDB ignores arrays with non-numeric properties and treats them as empty arrays, so any non-numeric arrays are treated as equivalent). This throws an exception if either of the values is not a valid key.

## 構文

```js
var result = window.indexedDB.cmp(a, b);
```

### 戻り値

比較結果を示す整数値。 次のテーブルに可能性のある値とその意味を載せます。:

| 戻り値 | 説明                                  |
| ------ | ------------------------------------- |
| -1     | 1 つ目のキーが 2 つ目のキーより小さい |
| 0      | 1 つ目のキーと 2 つ目のキーが等しい   |
| 1      | 1 つ目のキーが 2 つ目のキーより大きい |

### 例外

このメソッドでは、次の型のような{{domxref("DOMError")}} を持つ {{domxref("DOMException")}}が発生するかもしれません。

| 属性                                 | 説明                           |
| ------------------------------------ | ------------------------------ |
| [`DataError`](/ja/docs/DOM/DOMError) | 渡されたキーが不正な値である。 |

## 例

```js
var a = 1;
var b = 2;
var result = window.indexedDB.cmp(a, b);
console.log( "Comparison results: " + result );
```

## パラメーター

- first
  - : 比較する 1 つ目のキー。
- second
  - : 比較する 2 つ目のキー。

## 仕様

| Specification                                                                                                    | Status                       | Comment |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('IndexedDB', '#widl-IDBFactory-cmp-short-any-first-any-second', 'cmp')}} | {{Spec2('IndexedDB')}} |         |

## ブラウザ実装状況

{{Compat("api.IDBFactory.cmp")}}

## 関連情報

- [Using IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
