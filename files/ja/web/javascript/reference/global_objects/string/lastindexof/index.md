---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---

{{JSRef}}

**`lastIndexOf()`** メソッドは、呼び出した {{jsxref("String")}} オブジェクトの中で、 `fromIndex` から前方向に検索を始め、指定された値が最後に現れたインデックスを返します。値が見つからない場合は `-1` を返します。

{{EmbedInteractiveExample("pages/js/string-lastindexof.html", "shorter")}}

## 構文

```js
lastIndexOf(searchValue)
lastIndexOf(searchValue, fromIndex)
```

### 引数

- `searchValue`
  - : 検索する値を表す文字列です。 `searchValue` が空文字列であった場合は、 `fromIndex` を返します。
- `fromIndex` {{optional_inline}}
  - : 比較の先頭とみなされる文字列の最後の文字の位置です。既定値は `+Infinity` です。 `fromIndex >= str.length` の場合、文字列全体が検索されます。 `fromIndex < 0` の場合は、 `0` の場合と同じ動作になります。

### 返値

`searchValue` が最後に出現した位置です。見つからなかった場合は、 `-1` になります。

## 解説

文字列における文字は左から右にインデックス化されます。一番最初の文字の位置は `0` で、一番最後の文字は `str.length - 1` です。

```js
'canal'.lastIndexOf('a');     // 3 を返す
'canal'.lastIndexOf('a', 2);  // 1 を返す
'canal'.lastIndexOf('a', 0);  // -1 を返す
'canal'.lastIndexOf('x');     // -1 を返す
'canal'.lastIndexOf('c', -5); // 0 を返す
'canal'.lastIndexOf('c', 0);  // 0 を返す
'canal'.lastIndexOf('');      // 5 を返す
'canal'.lastIndexOf('', 2);   // 2 を返す
```

> **メモ:** `'abab'.lastIndexOf('ab', 2)` は `2` を返し、 `0` にはなりません。 `fromIndex` は検索の開始位置を制約するものだからです。

### 大文字と小文字の区別

`lastIndexOf()` メソッドは大文字と小文字を区別します。例えば、以下の式は `-1` を返します。

```js
'Blue Whale, Killer Whale'.lastIndexOf('blue'); // -1 を返す
```

## 例

### indexOf() と lastIndexOf() の使用

以下の例は、 {{jsxref("String.prototype.indexOf()", "indexOf()")}} と `lastIndexOf()` を使用して文字列 "`Brave new world`" の中の値の位置を示します。

```js
let anyString = 'Brave new world';

console.log('先頭から見て最初に w が出現する位置: ' + anyString.indexOf('w'));
// 8 と出力
console.log('末尾から見て最初に w が出現する位置: ' + anyString.lastIndexOf('w'));
// 10 と出力
console.log('先頭から見た "new" の位置: ' + anyString.indexOf('new'));
// 6 と出力
console.log('末尾から見た "new" の位置: ' + anyString.lastIndexOf('new'));
// 6 と出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
