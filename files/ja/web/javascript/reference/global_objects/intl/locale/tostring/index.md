---
title: Intl.Locale.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Locale
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.toString
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
---
{{JSRef}}

**`Intl.Locale.prototype.toString()`** は、このロケールの完全な[ロケール識別子文字列](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier)を返します。

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-tostring.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
toString()
```

### 返値

この*ロケール*の Unicode ロケール識別子文字列です。

## 解説

`Locale` オブジェクトは、概念的な Unicode ロケール識別子を JavaScript で表現したものです。特定のロケールに関する情報 (言語、文字体系、カレンダーの種類など) を、ロケール識別子文字列で符号化することができます。これらのロケール識別子をより簡単に扱えるようにするために、 `Locale` オブジェクトが JavaScript に導入されました。 Locale オブジェクトの `toString` メソッドをコールすると、そのロケールの識別子文字列を返します。 `toString` メソッドを使用すると、 `Locale` のインスタンスが既存の `Intl` のコンストラクターへの引数ととして JSON におけるシリアライズにおいて、またはその他のコンテキストで正確な文字列表現が有用な場合に提供することができます。

## 例

### toString の使用

```js
let myLocale = new Intl.Locale("ja-Jpan-JP", {hourCycle: "h24", calendar: "gregory"});
console.log(myLocale.baseName); // "ja-Jpan-JP" と表示
console.log(myLocale.toString()); // "ja-Jpan-JP-u-ca-gregory-hc-h24" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "Intl.Locale.baseName")}}
