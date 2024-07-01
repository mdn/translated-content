---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
---

{{jsSidebar("Objects")}}

> **警告:** `escape()` は厳密には (「ウェブ標準から削除された」という意味で) 非推奨ではありませんが、ECMA-262 標準の [Annex B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) で定義されており、その導入部には次のように書かれています。
>
> > … この付録で規定されているすべての言語機能と動作は、 1 つ以上の望ましくない特性を持ち、レガシーな使用例がない場合は、この仕様から削除されます。…
> > … プログラマーは、新しい ECMAScript のコードを書くときに、これらの機能や動作の存在を使用したり、仮定したりしてはいけません。…

The **`escape()`** 関数は、特定の文字を 16 進数のエスケープシーケンスで置き換えた新しい文字列を計算します。

> **メモ:** この関数は、主に URL クエリー (URL の `?` に続く部分) に使われていました。 — "`\xHH`" の形式を使用して、ふつうの文字列リテラルをエスケープするためのものでは*ありません*。 (HH は 2 桁の 16 進数であり、より高い面の Unicode 文字には「\xHH\xHHxHH」という形式が使われます。)
>
> 文字列リテラル内のエスケープされた文字は、 `\x` を `%` に置き換えてから、 `decodeURIComponent()` 関数を使用することで展開することができます。

## 構文

```js
escape(str);
```

### 引数

- `str`
  - : エンコードする文字列。

### 返値

特定の文字がエスケープされた新しい文字列。

## 解説

`escape` 関数は*グローバルオブジェクト*のプロパティです。特殊文字は `@*_+-./` 以外の文字が符号化されます。

文字の 16 進数形式として、文字コードの値が `0xFF` 以下になる文字は 2 桁のエスケープシーケンス `%xx` が、それ以上の場合は 4 桁のエスケープシーケンス `%uxxxx` が使われます。

## 例

### escape の使用

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// 特殊文字
escape("@*_+-./"); // "@*_+-./"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("unescape")}}
