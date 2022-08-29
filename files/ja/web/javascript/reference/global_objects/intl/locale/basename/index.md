---
title: Intl.Locale.prototype.baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.Locale.baseName
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
---
{{JSRef}}

**`Intl.Locale.prototype.baseName`** プロパティは、 `Locale` の文字列表現の部分文字列を返し、そこには `Locale` についての中核情報が含まれています。

## 解説

{{jsxref("Intl/Locale", "Intl.Locale")}} オブジェクトは、解析されたロケールとそのロケールのオプションを表します。 `baseName` プロパティは、ロケールに関する基本的な情報を、完全なデータ文字列の部分文字列の形で返します。具体的には、このプロパティは言語を含む部分文字列を返し、文字体系や地域があればそれも返します。

`baseName` は `言語 ["-" 文字体系] ["-" 地域] *("-" variant)` の形で [unicode_language_id 構文](https://www.unicode.org/reports/tr35/#Identifiers)の部分文字列を返します。

## 例

### 基本的な例

```js
let myLoc = new Intl.Locale("fr-Latn-CA"); // ロケールをカナダのフランス語に設定
console.log(myLoc.toString()); // "fr-Latn-CA-u-ca-gregory" と表示
console.log(myLoc.baseName); // "fr-Latn-CA" と表示
```

### 入力文字列のオプション付きの例

```js
// 言語を日本語、地域を日本に設定する。

// カレンダーをグレゴリオ暦、時制を 24 時制にする
let japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // "ja-JP-u-ca-gregory-hc-h24" と表示
console.log(japan.baseName); // "ja-JP" と表示
```

### 入力文字列を上書きするオプション付きの例

```js
// 入力文字列は言語がオランダ語、地域がベルギーであることを示していますが、

// ただし、オプションオブジェクトで地域を上書きしており、オランダに設定しています
let dutch = new Intl.Locale("nl-Latn-BE", {region: "NL"});

console.log(dutch.baseName); // "nl-Latn-NL" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
