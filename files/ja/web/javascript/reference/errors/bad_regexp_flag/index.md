---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "invalid regular expression flag" は、正規表現リテラルにおいて 2 番目のスラッシュの後に定義されたフラグが、 `g`, `i`, `m`, `s`, `u`, `y` のどれでもないときに発生します。また、式に有効なフラグが複数の場合や、[`u`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) フラグと [`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) フラグが同時に使用されている場合にも、この例外が発生する可能性があります。

## エラーメッセージ

```plain
SyntaxError: Invalid flags supplied to RegExp constructor 'x' (V8-based)
SyntaxError: Invalid regular expression flags (V8-based)
SyntaxError: invalid regular expression flag x (Firefox)
SyntaxError: Invalid flags supplied to RegExp constructor. (Safari)
SyntaxError: Invalid regular expression: invalid flags (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

正規表現に不正なフラグが含まれているか、有効なフラグが表現内で複数回使用されています。

有効な（許可されている）フラグは、`d`、`g`、`i`、`m`、`s`、`u`、`v`、`y` です。これらの詳細については、[正規表現 > フラグを使った高度な検索](/ja/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)で解説されています。

[`u`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) フラグと [`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) フラグは相互に排他的であるため、同時に使用することはできません。それぞれの動作の違いについては、リファレンスを参照してください。

## 例

スラッシュで囲まれたパターンで構成される正規表現リテラルでは、フラグは 2 つ目のスラッシュの後に定義されます。
正規表現のフラグは、別個に、あるいは組み合わせて、任意の順序で使用できます。
この構文は、正規表現リテラルを使用してフラグを宣言する方法を示しています。

```js
const re = /pattern/flags;
```

また、{{jsxref("RegExp")}} オブジェクトのコンストラクター関数（第二引数）でも定義することができます。

```js
const re = new RegExp("pattern", "flags");
```

こちらは、正しいフラグのみを使用している例です。

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

次は、無効なフラグ `b`、`a`、`r` を使用する例です。

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

次のコードは、`W`、`e`、`b` が有効なフラグではないため、正しくありません。

```js example-bad
const obj = {
  url: /docs/Web,
};

// SyntaxError: invalid regular expression flag "W"
```

文字列を生成する場合、文字列リテラルを生成するためには単一引用符、または二重引用符を追加します。

```js example-good
const obj = {
  url: "/docs/Web",
};
```

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)ガイド
