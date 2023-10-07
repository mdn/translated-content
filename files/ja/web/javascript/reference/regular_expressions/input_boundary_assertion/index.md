---
title: "入力境界アサーション: ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**入力境界アサーション**は、文字列の減殺の位置が入力境界であるかどうかを検査します。入力境界は文字列の先頭または末尾です。`m` フラグが設定された場合は、行の先頭または末尾です。

## 構文

```regex
^
$
```

## 解説

`^` は現在の位置が入力の先頭であるかどうかを検査します。`$` は現在の位置が入力の末尾であるかどうかを検査します。どちらもアサーションであり、何も文字を消費しません。

より正確には、`^` は左側の文字が文字列の範囲外であることを、`$` は右側の文字が文字列の範囲外であることを表明します。[`m`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) フラグが設定されている場合、`^` は左の文字が[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)である場合にも一致し、`$` は右の文字が改行文字である場合にも一致します。

`m` フラグが設定されていない限り、`^` と `$` のアサーションはパターンの境界に配置したときのみ意味を持ちます。その左右に他の文字があるとアサーションが発生しなくなるからです。

`y` フラグはこれらのアサーションの意味を変えません。[アンカー粘着フラグ](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#アンカーになる_sticky_フラグ)も参照してください。

## 例

### 末尾のスラッシュの除去

次の例は、URL 文字列から末尾のスラッシュを解除します。

```js
function removeTrailingSlash(url) {
  return url.replace(/\/$/, "");
}

removeTrailingSlash("https://example.com/"); // "https://example.com"
removeTrailingSlash("https://example.com/docs/"); // "https://example.com/docs"
```

### ファイル拡張子の照合

次の例は、常に文字列の最後に来るファイル拡張子を照合することで、ファイル型を調べます。

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### 入力全体の照合

正規表現が入力の部分文字列だけでなく、入力全体と一致することを確認したい場合があります。例えば、文字列が有効な[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)かどうかを判定する場合、パターンの両端に入力境界のアサーションを追加することができます。

```js-nolint
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // false
```

この関数は、codegen（コードを用いてコードを生成すること）を行う際に有益なものです。なぜなら、有効な識別子を、[ドット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation)を[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation)の代わりに用いるなど、他の文字列プロパティとは異なる形で使用することができるからです。

```js-nolint
const variables = ["foo", "foo:bar", "  foo  "];

function toAssignment(key) {
  if (isValidIdentifier(key)) {
    return `globalThis.${key} = undefined;`;
  }
  // JSON.stringify() escapes quotes and other special characters
  return `globalThis[${JSON.stringify(key)}] = undefined;`;
}

const statements = variables.map(toAssignment).join("\n");

console.log(statements);
// globalThis.foo = undefined;
// globalThis["foo:bar"] = undefined;
// globalThis["  foo  "] = undefined;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [単語境界アサーション: `\b`, `\B`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [先読みアサーション: `(?=...)`, `(?!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [後読みアサーション: `(?<=...)`, `(?<!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
