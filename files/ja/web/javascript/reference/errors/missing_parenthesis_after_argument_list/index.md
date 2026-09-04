---
title: "SyntaxError: missing ) after argument list"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "missing ) after argument list" は、関数の呼び出し方にエラーがあった場合に発生します。これは入力ミス、演算子の欠落、文字列のエスケープ忘れなどの可能性があります。

## エラーメッセージ

```plain
SyntaxError: missing ) after argument list (V8-based & Firefox)
SyntaxError: Unexpected identifier 'x'. Expected ')' to end an argument list. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

関数の呼び出し方にエラーがあります。たとえば、入力ミスや演算子の記述忘れ、文字列のエスケープ忘れの可能性が考えられます。

## 例

文字列を連結する "+" 演算子がないため、JavaScript は `log` 関数の引数として、 `"PI: "` だけを想定します。この場合、閉じ括弧で終了する必要があります。

```js-nolint example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

"`+`" 演算子を追加することで、`log` の呼び出しを修正できます。

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

あるいは、[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals)の使用を検討したり、[`console.log`](/ja/docs/Web/API/console/log_static) が複数の引数を受け入れるという特徴を活用したりすることもできます。

```js example-good
console.log(`PI: ${Math.PI}`);
console.log("PI:", Math.PI);
```

### 終了していない文字列

```js-nolint example-bad
console.log('"Java" + "Script" = \"' + "Java" + 'Script\");
// SyntaxError: missing ) after argument list
```

ここで、 JavaScript は `);` が文字列の中にあると誤解して無視し、結局、 `);` が `console.log` の末尾に入っていることを知らないままになってしまいます。これを修正するには、 `'` を "Script" の文字列の後に入れます。

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)
