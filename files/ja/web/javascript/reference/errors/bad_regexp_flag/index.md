---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
---

{{jsSidebar("Errors")}}

JavaScript の例外 "invalid regular expression flag" は、正規表現リテラルにおいて 2 番目のスラッシュの後に定義されたフラグが、 `g`, `i`, `m`, `s`, `u`, `y` のどれでもないときに発生します。

## エラーメッセージ

```js
SyntaxError: Syntax error in regular expression (Edge)
SyntaxError: invalid regular expression flag "x" (Firefox)
SyntaxError: Invalid regular expression flags (Chrome)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

コード内に、不正な正規表現フラグがあります。スラッシュで囲まれたパターンで構成される正規表現リテラルでは、フラグは 2 番目のフラグの後に定義されます。 {{jsxref("RegExp")}} オブジェクトのコンストラクター関数 (2 つ目の引数) で定義することもできます。正規表現フラグは個別に使うこともできれば、好きな順序で複数使うこともできますが、 ECMAScript では 6 つしかありません。

正規表現にフラグを含めるには、次の構文を使用します。

```js
var re = /pattern/flags;
```

または、

```js
var re = new RegExp("pattern", "flags");
```

| フラグ | 説明                                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------------------- |
| `g`    | グローバル検索                                                                                                |
| i      | 大文字小文字を区別した検索                                                                                    |
| m      | 複数行検索                                                                                                    |
| s      | `.` で改行文字に一致できるようにする (ECMAScript 2018 で追加)                                                 |
| u      | Unicode。パターンを Unicode コードポイントの並びとして扱う。                                                  |
| y      | 対象の文字列の現在の位置から一致を探す "sticky" 検索。 {{jsxref("RegExp.sticky", "sticky")}} を見てください。 |

## 例

有効な正規表現フラグは 6 つしかありません。

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

正規表現を生成するつもりでなくても、 2 つのスラッシュを含む式は正規表現リテラルとして解釈されます。

```js example-bad
let obj = {
  url: /docs/Web
};

// SyntaxError: invalid regular expression flag "W"
```

文字列を生成する場合、文字列リテラルを生成するためには単一引用符、または二重引用符を追加します。

```js example-good
let obj = {
  url: "/docs/Web",
};
```

### 有効な正規表現フラグ

JavaScript で使用できる 6 つの正規表現フラグについては、上述の表を見てください。

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)
- [XRegEx flags](https://xregexp.com/flags/) – regular expression library that provides four new flags (`n`, `s`, `x`, `A`)
