---
title: Intl.Locale.prototype.minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
---

{{JSRef}}

**`Intl.Locale.prototype.minimize()`** メソッドは、 {{jsxref("Intl/Locale/maximize", "Locale.maximize()")}} を呼び出したことで追加されるロケールに関する情報を削除しようとします。

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-minimize.html", "taller")}}

## 構文

```js
minimize();
```

### 返値

{{jsxref("Intl/Locale", "Locale")}} インスタンスで、 `baseName` プロパティが、 [Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) アルゴリズムを _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ に対して実行された結果になったものを返します。

## 解説

このメソッドは {{jsxref("Intl/Locale/maximize", "maximize()")}} の逆の処理を行い、ロケールの言語識別子 (基本的には `baseName` の内容) から言語、文字体系、地域のサブタグをすべて削除します。これは、言語識別子の中に余分なサブタグがある場合に便利です。例えば "en-Latn" は "en" に簡略化できます。英語では "Latn" が書き言葉に使われる唯一の文字体系だからです。 `minimize()` が影響を与えるのは、[言語識別子](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions)を構成する主要なサブタグである言語、文字体系、地域の各サブタグのみです。ロケール識別子の "-u" の後にあるその他のサブタグは拡張サブタグと呼ばれ、 `minimize()` メソッドの影響を受けません。これらのサブタグの例としては、{{jsxref("Intl/Locale/hourCycle", "Locale.hourCycle")}}、{{jsxref("Intl/Locale/calendar", "Locale.calendar")}}、{{jsxref("Intl/Locale/numeric", "Locale.numeric")}} などがあります。

## 例

### minimize の使用

```js
let myLocale = new Intl.Locale("ja-Jpan-JP", {
  hourCycle: "h24",
  calendar: "gregory",
});
console.log(myLocale.baseName); // "ja-Jpan-JP" と表示
console.log(myLocale.toString()); // "ja-Jpan-JP-u-ca-gregory-hc-h24" と表示

let myLocMinimized = myLocale.minimize();

// "ja" のみを表示します。日本語は主に漢字かな交じり文 (Jpan) で
// 表記され、またほとんど日本で話されているためです。
console.log(myLocMinimized.baseName);

// "ja-u-ca-gregory-hc-h24" と表示します。
// なお、拡張タグ ("-u" 以降) はそのまま残ります。
console.log(myLocMinimized.toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "Intl.Locale.baseName")}}
