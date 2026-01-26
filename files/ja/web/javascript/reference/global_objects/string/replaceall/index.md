---
title: String.prototype.replaceAll()
short-title: replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`replaceAll()`** は {{jsxref("String")}} 値のメソッドで、`pattern` に一致したすべての文字列を `replacement` で置き換えた新しい文字列を返します。`pattern` には文字列または {{jsxref("RegExp")}} を指定することができ、`replacement` は文字列または各一致に対して呼び出される関数を指定することができます。元の文字列は変更されません。

{{InteractiveExample("JavaScript デモ: String.prototype.replaceAll()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "monkey"));
// 予想される結果: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, "ferret"));
// 予想される結果: "I think Ruth's ferret is cuter than your ferret!"
```

## 構文

```js-nolint
replaceAll(pattern, replacement)
```

### 引数

- `pattern`
  - : 文字列または [`Symbol.replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) メソッドを持つオブジェクトを置くことができます。典型的な例は[正規表現](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)です。`Symbol.replace` メソッドを持たない値は文字列に変換されます。

    `regexp` が[正規表現である](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)場合、グローバルフラグ (`g`) が設定されます。そうでなければ {{jsxref("TypeError")}} が発生します。

- `replacement`
  - : 文字列または関数を指定することができます。この置換は [`String.prototype.replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) と意味的に同じです。

### 返値

パターンに一致したすべての文字列を置換文字列で置き換えた新しい文字列です。

### 例外

- {{jsxref("TypeError")}}
  - : `pattern` が[正規表現である](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)場合で、グローバルフラグ (`g`) が設定されていない場合（[`flags`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) プロパティに `"g"` が含まれていない場合）。

## 解説

このメソッドは呼び出された文字列値を変更しません。新しい文字列を返します。

[`replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) とは異なり、このメソッドは、最初の文字列だけでなく、出現するすべての文字列を置き換えます。 `replace()` を [`RegExp()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) で動的に構築したグローバル正規表現と共に使用して、文字列のすべての出現を置き換えることも可能ですが、文字列に正規表現で意味を持つ特殊文字が含まれている場合（置換文字列がユーザー入力によるものである場合など）、意図しない結果になる可能性があります。{{jsxref("RegExp.escape()")}} を使用して正規表現文字列をリテラルパターンに変換することで、この問題を軽減することは可能ですが、文字列を正規表現に変換せずに `replaceAll()` に直接渡す方がより簡単です。

<!-- cSpell:ignore acke -->

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function semiSafeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}
function superSafeRedactName(text, name) {
  // only match at word boundaries
  return text.replaceAll(
    new RegExp(`\\b${RegExp.escape(name)}\\b`, "g"),
    "[REDACTED]",
  );
}

let report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(semiSafeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."

report = "A hacker called acke breached the system.";

console.log(semiSafeRedactName(report, "acke")); // "A h[REDACTED]r called [REDACTED] breached the system."
console.log(superSafeRedactName(report, "acke")); // "A hacker called [REDACTED] breached the system."
```

`pattern` が [`Symbol.replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) メソッドを持つオブジェクト（`RegExp` オブジェクトを含む）である場合、そのメソッドは対象の文字列と `replacement` を引数として呼び出されます。その返値は `replaceAll()` の返値となります。この場合、`replaceAll()` の動作は完全に `[Symbol.replace]()` メソッドによってエンコードされるので、 `replace()` と同じ結果になります（正規表現がグローバルであるかどうかの余分な入力検証を除けば）。
`pattern` が空文字列の場合、[`split()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) の動作と同様に、UTF-16 のコード単位ごとに置換文字列が挿入されます。

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

正規表現プロパティ（特に [sticky](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) フラグ）と `replaceAll()` との相互作用については、[`RegExp.prototype[Symbol.replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) を参照してください。

## 例

### replaceAll() の使用

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### グローバルではない正規表現

正規表現フラグを使用する場合は、グローバルである必要があります。これは動作しません。

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

これは動作します。

```js example-good
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.replaceAll` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `String.prototype.replaceAll` のポリフィル](https://www.npmjs.com/package/string.prototype.replaceall)
- [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)ガイド
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
