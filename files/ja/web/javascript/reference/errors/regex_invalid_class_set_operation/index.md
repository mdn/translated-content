---
title: "SyntaxError: invalid class set operation in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_class_set_operation
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "invalid class set operation in regular expression" は、[`v` モードの文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス)内に二重区切り文字のシーケンスが現れているにもかかわらず、構文として認識されない場合に発生します。

## エラーメッセージ

```plain
SyntaxError: Invalid regular expression: /[&&]/v: Invalid set operation in character class (V8-based)
SyntaxError: invalid class set operation in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid operation in class set (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

これが発生するのは、以下の 3 つの可能性があります。

- `&&` または `--` を使用しようとしていますが、構文が間違っています。それぞれの演算子は、いずれも 2 つの文字または文字セットを結合しなければなりません。
- 同じレベルで演算子を混在させています。例えば、`[\w&&[A-z]--_]` は、同じレベルで `&&` と `--` を使用しているため不正です。曖昧さを解消するには、`[\w&&[[A-z]--_]]` のように、ネストした文字クラスを使用する必要があります。なお、和集合演算ではテキストを持たない演算子が使用されます。例えば、`[AB&&C]` は、`A` と `B` が和集合演算子によって暗黙的に結合されるため、不正です。代わりに `[A[B&&C]]` を使用する必要があります。
- `&&` や `--` 以外の二重記号の連続を使用しています。これらの連続記号は、将来の構文拡張のために予約されています。これには、`&&`、`!!`、`##`、`$$`、`%%`、`**`、`++`、`,,`、`..`、`::`、`;;`、`<<`、`==`、`>>`、`??`、`@@`、`^^`、` `` `、`~~` があります。ただし、これらのシーケンスはそもそもあまり意味をなさないものであり、単一の文字に置き換えることが可能で、隣接する 2 つの範囲が結合されることになります。

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
