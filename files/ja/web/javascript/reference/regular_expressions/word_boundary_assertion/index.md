---
title: "単語境界アサーション: \\b, \\B"
slug: Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JsSidebar}}

**単語境界アサーション**は、文字列の現在の位置が単語境界であるかどうかを調べます。単語境界とは、次の文字が単語文字で、前の文字が単語文字でない場合、またはその逆の場合です。

## 構文

```regex
\b
\B
```

## 解説

`\b` は文字列の現在の位置が単語境界であることを表明します。`\B` はこの表明とは逆で、現在の位置が単語境界でないことを表明します。両者ともアサーションなので、他の[文字エスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)や[文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)とは異なり、`\b` と `\B` は文字を消費しません。

単語文字は次の通りです。

- 英文字 (A–Z, a–z)、数字 (0–9)、アンダースコア (\_)。
- 正規表現が [Unicode 対応](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)で [`i`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) フラグが設定されている場合、大文字小文字の変換によって上記の文字のいずれかに正規化される他の Unicode 文字。

単語文字は `\w` [文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)でも一致します。

範囲外の入力位置は非単語文字とみなされます。 例えば、次の例は照合に成功します。

```js
/\ba/.exec("abc");
/c\b/.exec("abc");

/\B /.exec(" abc");
/ \B/.exec("abc ");
```

## 例

### 単語の検出

次の例は、文字列が "thanks" または "thank you" という単語を含んでいるかどうかを検出します。

```js
function hasThanks(str) {
  return /\b(thanks|thank you)\b/i.test(str);
}

hasThanks("Thanks! You helped me a lot."); // true
hasThanks("Just want to say thank you for all your work."); // true
hasThanks("Thanksgiving is around the corner."); // false
```

> **警告:** すべての言語で単語の境界が明確に定義されているわけではありません。日本語やタイ語のように空白の区切りがない言語を扱う場合は、代わりに {{jsxref("Intl.Segmenter")}} のような高度なライブラリーを使って単語を検索してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [入力境界アサーション: `^`, `$`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [先読みアサーション: `(?=...)`, `(?!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [後読みアサーション: `(?<=...)`, `(?<!...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [文字エスケープ: `\n`, `\u{...}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
