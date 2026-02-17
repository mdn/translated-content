---
title: Intl.Locale.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toString()`** は {{jsxref("Intl.Locale")}} インターフェイスのメソッドで、このロケールの完全な[ロケール識別子文字列](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier)を返します。

{{InteractiveExample("JavaScript デモ: Intl.Locale.prototype.toString()", "taller")}}

```js interactive-example
const french = new Intl.Locale("fr-Latn-FR", {
  calendar: "gregory",
  hourCycle: "h12",
});
const korean = new Intl.Locale("ko-Kore-KR", {
  numeric: true,
  caseFirst: "upper",
});

console.log(french.toString());
// 予想される結果: "fr-Latn-FR-u-ca-gregory-hc-h12"

console.log(korean.toString());
// 予想される結果: "ko-Kore-KR-u-kf-upper-kn"
```

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

この*ロケール*の Unicode ロケール識別子文字列です。

## 解説

`Locale` オブジェクトは、概念的な Unicode ロケール識別子を JavaScript で表現したものです。特定のロケールに関する情報 (言語、文字体系、カレンダーの種類など) を、ロケール識別子文字列で符号化することができます。これらのロケール識別子をより簡単に扱えるようにするために、 `Locale` オブジェクトが JavaScript に導入されました。 Locale オブジェクトの `toString` メソッドをコールすると、そのロケールの識別子文字列を返します。 `toString` メソッドを使用すると、 `Locale` のインスタンスが既存の `Intl` のコンストラクターへの引数ととして JSON におけるシリアライズにおいて、またはその他のコンテキストで正確な文字列表現が有用な場合に提供することができます。

## 例

### toString の使用

```js
const myLocale = new Intl.Locale("ja-Jpan-JP", {
  hourCycle: "h23",
  calendar: "gregory",
});
console.log(myLocale.baseName); // "ja-Jpan-JP" と表示
console.log(myLocale.toString()); // "ja-Jpan-JP-u-ca-gregory-hc-h23" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
