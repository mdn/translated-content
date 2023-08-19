---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

**`ignoreCase`** プロパティは、"`i`" フラグが正規表現で使われているかどうかを示します。`ignoreCase` は、正規表現インスタンスごとの読み取り専用プロパティです。

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}

## 解説

`RegExp.prototype.ignoreCase` は、`i` フラグが指定されている場合は `true` を、そうでなければ `false` を返します。`i` フラグは、文字列の照合を試みる際に、大文字小文字を無視することを示します。大文字小文字を区別しない照合は、期待される文字セットと照合する文字列を同じ大文字小文字に対応付けすることで行われます。

正規表現が [Unicode 対応](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)の場合、大文字小文字の対応付けは [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) で指定された_単純な大文字小文字の変換を行います。この対応付けは常に 1 つのコードポイントに対応付けされるので、例えば `ß` (U+00DF LATIN SMALL LETTER SHARP S) を `ss` に対応付けすることはありません（単純な大文字小文字の変換ではなく完全な大文字小文字の変換です）。例えば、`ſ` (U+017F LATIN SMALL LETTER LONG S) は `s` (U+0073 LATIN SMALL LETTER S) に、`K` (U+212A KELVIN SIGN) は `k` (U+006B LATIN SMALL LETTER K) に大文字小文字を区別します。したがって、`ſ` と `K` は `/[a-z]/ui` で一致します。

正規表現が Unicode 非対応の場合、大文字小文字の対応付けは [Unicode 既定の大文字小文字変換](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) を使用します。{{jsxref("String.prototype.toUpperCase()")}} で使用されているアルゴリズムと同じです。例えば、`Ω` (U+2126 OHM SIGN, オーム記号) と `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA, ギリシャ語のオメガの大文字) は、既定の大文字小文字変換によってそれ自体に対応付けされますが、単純な大文字小文字の変換では `ω` (U+03C9 GREEK SMALL LETTER OMEGA, ギリシャ語のオメガの小文字) に対応付けされるため、`"ω"` は `/[\u2126]/ui` と `/[\u03a9]/ui` に一致しますが、`/[\u2126]/i` や `/[\u03a9]/i`　には一致しません。このアルゴリズムは、基本ラテンブロック外のコードポイントがブロック内のコードポイントに対応付けされるのを防ぐため、前述の `ſ` や `K` は `/[a-z]/i` では一致しません。

`ignoreCase` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### ignoreCase の使用

```js
const regex = /foo/i;

console.log(regex.ignoreCase); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
