---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
l10n:
  sourceCommit: 1931ea17c117b5eafa315c638e70429e500bdca9
---

{{jsSidebar("Objects")}}

> **警告:** `unescape()` は厳密には (「ウェブ標準から削除された」という意味では) 非推奨になっていませんが、 ECMA-262 標準の [Annex B](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers) において定義されており、導入部で次のように位置付けられています。
>
> > … この附属書で規定されているすべての言語機能および動作は、1 つ以上の望ましくない特性を有しており、古い使用例がない場合には，この仕様から削除される。 …
> > … プログラマーは、新しい ECMAScript コードを書く際に、これらの機能や動作の存在を利用したり、仮定したりしてはいけない。 …

**`unescape()`** 関数は 16 進数エスケープシーケンスを、それが表す文字列に置換します。エスケープシーケンスは {{jsxref("escape")}} などの関数によって生成されます。通常は {{jsxref("decodeURI")}} または {{jsxref("decodeURIComponent")}} が `unescape` よりも推奨されます。

> **メモ:** URI のデコードに `unescape` を使用しないでください。代わりに `decodeURI` を使用してください。

## 構文

```js
unescape(str);
```

### 引数

- `str`
  - : デコードされる文字列。

### 返値

特定の文字のエスケープが解除された新しい文字列です。

## 解説

`unescape` 関数は*グローバルオブジェクト*のプロパティです。

## 例

### unescape の使用

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`unescape` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
