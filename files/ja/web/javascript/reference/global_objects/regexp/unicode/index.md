---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JSRef}}

**`unicode`** は {{jsxref("RegExp")}} インスタンスのアクセサープロパティで、この正規表現に `u` フラグが使用されているかどうかを返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}

## 解説

`RegExp.prototype.unicode` の値は `true` ならば `u` フラグが使用されていることを示し、そうでなければ `false` となります。`u` フラグは Unicode に関連する様々な機能を有効にします。 "u" フラグを使用すると、次のようになります。

- [Unicode コードポイントエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) ( \u{xxxx}, \p{UnicodePropertyValue}) は、ID エスケープの代わりにそのように解釈されます。例えば、 `/\u{61}/u` は `"a"` に一致しますが、`/\u{61}/` （`u` フラグなし）は `"u".repeat(61)` に一致します。 `\u` が `u` 1 文字と同等になるからです。
- サロゲートペアは 2 つの別々の文字ではなく、全体の文字として解釈されます。例えば `/[😄]/u` は`"😄"` にのみ一致し、`"\ud83d"` には一致しません。
- [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) が自動的に進む場合（[`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) を呼び出した場合など）、Unicode 正規表現は UTF-16 コード単位ではなく Unicode コードポイント単位で進みます。

構文の間違いを防ぐために、構文解析の動作を変更したものが他にもあります（正規表現構文の厳格モードに似ています）。これらの構文はすべて[非推奨であり、ウェブの互換性のためだけに残されているもの](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)
ですので、頼らないでください。

`unicode` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

### Unicode 対応モード

Unicode 対応モードと言う言葉を使うときは、`u` または [`v`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) のどちらかのフラグがついた正規表現を指し、この場合は正規表現が Unicode に関連した機能（[Unicode 文字クラスエスケープ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)など）が利用できるようになり、もっと厳格化した構文ルールになります。`u` と `v` は同じ正規表現を互換性のない方法で解釈するため、両方のフラグを使用すると {{jsxref("SyntaxError")}} になります。

同様に、正規表現が `u` フラグも `v` フラグも持たない場合、Unicode 非対応モードとなります。この場合、正規表現は UTF-16 コード単位の並びとして解釈され、たくさんの古い構文が構文エラーにならなくなります。

## 例

### unicode プロパティの使用

```js
const regex = /\u{61}/u;

console.log(regex.unicode); // true
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
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
