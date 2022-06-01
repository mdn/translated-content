---
title: Intl.Collator.prototype.compare()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
tags:
  - Collator
  - 国際化
  - Intl
  - JavaScript
  - ローカライズ
  - メソッド
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.Collator.compare
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
---
{{JSRef}}

**`Intl.Collator.prototype.compare()`** メソッドは、 2 つの文字列をこの {{jsxref("Intl.Collator")}} オブジェクトのソート順に従って比較します。

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-compare.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
compare(string1, string2)
```

### 引数

- `string1`, `string2`
  - : 互いに比較する文字列です。

## 解説

`compare` ゲッター関数は、 `string1` と `string2` をこの {{jsxref("Intl.Collator")}} オブジェクトのソート順に従って比較した結果を数値で返します。 `string1` が `string2` の前にくる場合は負の値、 `string1` が `string2` の後にくる場合は正の値、等しいとみなされる場合は 0 を返します。

## 例

### 配列の並べ替えにおける compare の使用

配列の並べ替えのために `compare` ゲッター関数を使用します。なお、この関数は、取得元の collator にバインドされているので、直接 {{jsxref("Array.prototype.sort()")}} に渡すことができます。

```js
var a = ['Offenbach', 'Österreich', 'Odenwald'];
var collator = new Intl.Collator('de-u-co-phonebk');
a.sort(collator.compare);
console.log(a.join(', '));
// → "Odenwald, Österreich, Offenbach"
```

### 配列の検索における compare の使用

配列内の文字列の検索のために `compare` ゲッター関数を使用します。

```js
var a = ['Congrès', 'congres', 'Assemblée', 'poisson'];
var collator = new Intl.Collator('fr', { usage: 'search', sensitivity: 'base' });
var s = 'congres';
var matches = a.filter(v => collator.compare(v, s) === 0);
console.log(matches.join(', '));
// → "Congrès, congres"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
- {{jsxref("String.prototype.localeCompare()")}}
