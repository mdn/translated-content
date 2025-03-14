---
title: "文字クラスエスケープ: \\d, \\D, \\w, \\W, \\s, \\S"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class_escape
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**文字クラスエスケープ**は、文字の集合を表すエスケープシーケンスです。

## 構文

```regex
\d, \D
\s, \S
\w, \W
```

> **メモ:** `,` is not part of the syntax.

## 解説

[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)とは異なり、文字クラスエスケープは、[文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)のように、事前に定義された文字の集合を表します。以下の文字クラスに対応しています。

- `\d`
  - : いずれかの数字に一致します。`[0-9]` と同等です。
- `\w`
  - : 任意の単語文字に一致します。単語文字には文字 (A-Z, a-z)、数字 (0-9)、アンダースコア (_) が含まれます。正規表現が [Unicode 対応](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)で [`i`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) フラグが設定されている場合、[大文字小文字の折りたたみ](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt)によって上記の文字のいずれかに正規化される他の Unicode 文字にも一致します。
- `\s`
  - : 任意の[ホワイトスペース](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#ホワイトスペース)または[改行](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#改行文字)文字に一致します。

大文字形式の `\D`、`\W`、`\S` は、それぞれ `\d`、`\w`、`\s` の補集合文字クラスを作成します。これらは、小文字形式が一致する文字の集合にない任意の文字に一致します。

[Unicode 文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)は˶`\p` および `\P`で始まりますが、[Unicode 対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)でのみ対応しています。Unicode 非対応モードでは、これらは `p` または `P` 文字の[識別子エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)です。

文字クラスエスケープは[文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)で使用することができます。しかし、文字範囲の境界として使用することはできません。これは[ウェブの互換性のための非推奨構文](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)としてのみ認められており、頼ってはいけません。

## 例

### ホワイトスペースでの分割

次の例は、文字列を単語の配列に分割します。すべての種類のホワイトスペース区切り文字に対応しています。

```js-nolint
function splitWords(str) {
  return str.split(/\s+/);
}

splitWords(`Look at the stars
Look  how they\tshine for you`);
// ['Look', 'at', 'the', 'stars', 'Look', 'how', 'they', 'shine', 'for', 'you']
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Unicode 文字クラスエスケープ: `\p{...}`, `\P{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [論理和: `|`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
