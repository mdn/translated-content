---
title: "バッファー境界アサーション: \\A, \\z, \\Z"
slug: Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

{{SeeCompatTable}}

**バッファー境界アサーション**は、文字列内の現在位置が文字列全体の先頭または末尾に厳密にあるかどうかを調べます（`\Z` は末尾の改行も許容します）。[`m`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) フラグがあるかどうかにかかわらず、文字列全体の境界を調べます。このフラグは `^` と `$` の[入力境界アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)の意味を変更します。バッファー境界アサーションは [Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)でのみ対応しています。

## 構文

```regex
\A
\z
\Z
```

## 解説

`\A` は現在位置が文字列全体の先頭であることを表明します。`\z` は現在位置が文字列全体の末尾であることを表明します。`\Z` は `\z` と同様ですが、文字列末尾の[改行文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)または `\r\n` (CRLF) の並びの直前にも一致します。いずれもアサーションなので、文字を消費しません。

より正確には、`\A` は左側の文字が文字列の範囲外にあることを表明し、`\z` は右側の文字が文字列の範囲外にあることを表明します。`\Z` は `(?=(?:\r?\n?|[\u{2028}\u{2029}]?)\z)` と等価です。

これらのアサーションが意味を持つのは、その位置の左側または右側に文字がないことを前提とする場合だけです。例えば、`f\Ao` は決して一致しません。`\A` が文字列の先頭にあると同時に、その左側に文字があることはありえないためです。

`\A` と `\z` のアサーションが役立つのは、`m` フラグを使用する場合だけです。`m` がない場合、これらは `^` と `$` と同じように動作します。パターンで文字列全体の境界か行の境界のどちらか一方だけに一致させる場合（両方を混在させない場合）は、より広く対応されている `^` と `$` のアサーションを使用し、必要に応じて `m` フラグを設定することをお勧めします。同じパターンで両方の種類の境界に一致させる必要がある場合は、[修飾子](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)を使ってパターンの異なる部分で `m` フラグを有効または無効にする方法もありますが、これらのエスケープシーケンスを使うほうがコードをずっと読みやすくできます。

## 例

### バッファー境界アサーションと入力境界アサーションの併用

文字列全体の先頭または各行の先頭のどちらかに一致させるパターンを考えます。`m` を有効にすると、各行の先頭を表すために `^` を使えます。文字列全体の先頭を表すには `\A` を使います（`\A` を使うには `u` も有効にする必要があります）。

次の例は、単独の行にある行コメントに一致します。これはファイル先頭の[ハッシュバン](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ハッシュバンコメント)か、任意の行にある行コメントです。コードを含む行の末尾にある行コメントには一致しません。

```js
function findLineComments(code) {
  // ハッシュバン構文 #!... はファイル先頭でのみ有効
  // 行コメント構文 //... はどの行でも有効
  const pattern = /\A#!.*|^\s*\/\/.*/gmu;
  return code.match(pattern);
}

const program = `#!/usr/env/node

function findLineComments(code) {
  // ハッシュバン構文 #!... はファイル先頭でのみ有効
  // 行コメント構文 //... はどの行でも有効
  const pattern = /\\A#!.*|^\\/\\/.*/gmu;
  return code.match(pattern);
}
`;

console.log(findLineComments(program));
// [
//   '#!/usr/env/node',
//   '  // ハッシュバン構文 #!... はファイル先頭でのみ有効',
//   '  // 行コメント構文 //... はどの行でも有効'
// ]
```

バッファー境界アサーションのもう 1 つの主な用途は、テキストエディターでの正規表現検索のようにフラグを変更できない場合です。このような場合は通常、デフォルトで `m` が有効になっているため、`\A` と `\z` を使って行境界ではなく文字列全体の境界を指定します。

### 任意の末尾の改行を許容するファイル末尾の照合

ファイル形式では、ファイル末尾の改行が任意であることがよくあります。末尾の改行を許容するファイル末尾のパターンに照合するには、`\Z` を使います。この機能は `m` フラグの有無にかかわらず役立ちます。

```js
const endOfPDF = /%%EOF\Z/u;

console.log(endOfPDF.test("%%EOF")); // true
console.log(endOfPDF.test("%%EOF\n")); // true
console.log(endOfPDF.test("%%EOF\r\n")); // true
console.log(endOfPDF.test("%%EOF\n\n")); // false
console.log(endOfPDF.test("%%EOF\nsomething")); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)ガイド
- [正規表現](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [入力境界アサーション: `^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [単語境界アサーション: `\b`, `\B`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [先読みアサーション: `(?=...)`, `(?!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [後読みアサーション: `(?<=...)`, `(?<!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
