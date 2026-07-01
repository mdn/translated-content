---
title: Intl.Collator.prototype.compare()
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`compare()`** は {{jsxref("Intl.Collator")}} インスタンスのメソッドは、 2 つの文字列をこの {{jsxref("Intl.Collator")}} オブジェクトのソート順に従って比較します。

{{InteractiveExample("JavaScript デモ: Intl.Collator.prototype.compare()")}}

```js interactive-example
const enCollator = new Intl.Collator("en");
const deCollator = new Intl.Collator("de");
const svCollator = new Intl.Collator("sv");

console.log(enCollator.compare("z", "a") > 0);
// 予想される結果: true

console.log(deCollator.compare("z", "ä") > 0);
// 予想される結果: true

console.log(svCollator.compare("z", "ä") > 0);
// 予想される結果: false
```

## 構文

```js-nolint
compare(string1, string2)
```

### 引数

- `string1`, `string2`
  - : 互いに比較する文字列です。

## 解説

`string1` と `string2` をこの {{jsxref("Intl.Collator")}} オブジェクトのソート順に従って比較した結果を数値で返します。

- `string1` が `string2` の前にくる場合は負の値
- `string1` が `string2` の後にくる場合は正の値
- 等しいとみなされる場合は 0

## 例

### 配列の並べ替えにおける compare の使用

配列の並べ替えのために `compare` ゲッター関数を使用します。なお、この関数は、取得元の collator にバインドされているので、{{jsxref("Array.prototype.sort()")}} に直接渡すことができます。

```js
const a = ["Offenbach", "Österreich", "Odenwald"];
const collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
console.log(a.join(", ")); // "Odenwald, Österreich, Offenbach"
```

### 配列の検索における compare の使用

配列内の文字列検索の照合のために `compare` 関数を使用します。

```js
const a = ["Congrès", "congres", "Assemblée", "poisson"];
const collator = new Intl.Collator("fr", {
  usage: "search",
  sensitivity: "base",
});
const s = "congres";
const matches = a.filter((v) => collator.compare(v, s) === 0);
console.log(matches.join(", ")); // "Congrès, congres"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
- {{jsxref("String.prototype.localeCompare()")}}
