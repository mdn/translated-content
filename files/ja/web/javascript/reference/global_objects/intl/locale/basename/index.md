---
title: Intl.Locale.prototype.baseName
short-title: baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

**`baseName`** は {{jsxref("Intl.Locale")}} インスタンスのアクセサープロパティで、このロケールの文字列表現の一部を返します。この部分文字列には、利用できる場合、言語、スクリプト、地域、バリアントなど、このロケールに関する基本情報が含まれています。

## 解説

`baseName` は `言語 ["-" 文字体系] ["-" 地域] *("-" variant)` の形で [unicode_language_id 構文](https://www.unicode.org/reports/tr35/#Identifiers)の部分文字列を返します。コンストラクター内で明示的に指定された情報のみを含みます。これはロケール識別子文字列またはオプションオブジェクトを通じて行われます。

`baseName` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### 基本的な例

```js
const myLoc = new Intl.Locale("fr-Latn-CA"); // ロケールをカナダのフランス語に設定
console.log(myLoc.toString()); // "fr-Latn-CA-u-ca-gregory" と表示
console.log(myLoc.baseName); // "fr-Latn-CA" と表示
```

### 入力文字列のオプション付きの例

```js
// 言語を日本語、地域を日本に設定する。
// カレンダーをグレゴリオ暦、時制を 24 時制にする
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // "ja-JP-u-ca-gregory-hc-h24" と表示
console.log(japan.baseName); // "ja-JP" と表示
```

### 入力文字列を上書きするオプション付きの例

```js
// 入力文字列は言語がオランダ語、地域がベルギーであることを示していますが、
// ただし、オプションオブジェクトで地域を上書きしており、オランダに設定しています
const dutch = new Intl.Locale("nl-Latn-BE", { region: "NL" });

console.log(dutch.baseName); // "nl-Latn-NL" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
