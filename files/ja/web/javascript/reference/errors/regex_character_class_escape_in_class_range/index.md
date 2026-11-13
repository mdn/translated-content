---
title: "SyntaxError: character class escape cannot be used in class range in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_character_class_escape_in_class_range
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "character class escape cannot be used in class range in regular expression" は、[Unicode 対応](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) の正規表現パターンに含まれている場合 [文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) を含み、かつその文字範囲の境界が[文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)などの別の文字クラスである場合に発生します。

## エラーメッセージ

```plain
SyntaxError: Invalid regular expression: /[\s-1]/u: Invalid character class (V8-based)
SyntaxError: character class escape cannot be used in class range in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid range in character class for Unicode pattern (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

文字クラスでは、2 つの文字の間にハイフン (`-`) を挿入することで、文字の範囲を指定できます。例えば、`[a-z]` は `a` から `z` までの小文字のいずれかに一致します。範囲が意味をなすためには、範囲の両端の文字が単一の文字でなければなりません。境界のどちらかが実際には複数の文字を表している場合、エラーが発生します。[`v` モードでない場合の文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モードでない場合の文字クラス)では、文字クラスの中では（訳注：リテラル文字に加えて）文字クラスエスケープのみが利用できます。[`v` モードの文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_モード文字クラス) では、範囲の境界のどちらかが別の `[...]` 文字クラスである場合にもエラーになります。

Unicode 非対応モードでは、この構文を使用すると、エラーが発生する代わりに `-` がリテラル文字として扱われますが、これは[非推奨の構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)であるため、これに頼らないでください。

## 例

### 無効なケース

```js example-bad
/[\s-_]/u; // \s はホワイトスペースの文字クラスエスケープ
/[A-\D]/u; // \D は数字以外の文字クラスエスケープ
/[\p{L}-\p{N}]/u; // \p{L} は Unicode 文字の文字クラスエスケープ
/[[A-z]-_]/v; // unicodeSets モードでは、文字クラスを入れ子にできる
```

### 有効なケース

```js example-good
// ハイフンを文字クラスの先頭に挿入すると、
// リテラル文字と一致する
/[-\s_]/u;
// ハイフンをエスケープすると、リテラル文字と一致する
/[\s\-_]/u;
// バックスラッシュを削除すると、境界はリテラル文字になる
/[A-D]/u;
// ハイフンを削除すると、2 つの範囲が 2 つの選択肢を表す
/[\p{L}\p{N}]/u;
// unicodeSets モードでは、-- を使用すると集合の差を表す
/[[A-z]--_]/v;
```

## 関連情報

- [正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
