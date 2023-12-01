---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 6e3889be77fa45d5823216d0cc61b4f7c4b99e1b
---

{{JSRef}}

**`replaceAll()`** メソッドは、`pattern` に一致したすべての文字列を `replacement` で置き換えた新しい文字列を返します。`pattern` は文字列または {{jsxref("RegExp")}} を指定することができ、`replacement` は文字列または各一致に対して呼び出される関数を指定することができます。元の文字列は変更されません。

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

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

[`replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace) とは異なり、このメソッドは最初に一致した文字列だけでなく、出現した文字列を置き換えます。これは文字列が静的に既知でない場合に特に有用です。特殊文字をエスケープせずに [`RegExp()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) コンストラクターを呼び出すと、意図せずに意味づけが変わってしまう可能性があるからです。

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}

const report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."
```

`pattern` が [`Symbol.replace`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) メソッドを持つオブジェクト（`RegExp` オブジェクトを含む）である場合、そのメソッドは対象の文字列と `replacement` を引数として呼び出されます。その返値は `replaceAll()` の返値となります。この場合、`replaceAll()` の動作は完全に `@@replace` メソッドによってエンコードされるので、 `replace()` と同じ結果になります（正規表現がグローバルであるかどうかの余分な入力検証を除けば）。
`pattern` が空文字列の場合、[`split()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) の動作と同様に、UTF-16 のコード単位ごとに置換文字列が挿入されます。

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

正規表現プロパティ（特に [sticky](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) フラグ）と `replaceAll()` との相互作用については、[`RegExp.prototype[@@replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace) を参照してください。

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
- {{jsxref("String.prototype.replace", "String.prototype.replace()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
