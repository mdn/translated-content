---
title: Intl.Locale.prototype.minimize()
short-title: minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`minimize()`** は {{jsxref("Intl.Locale")}} インターフェイスのメソッドで、 {{jsxref("Intl/Locale/maximize", "maximize()")}} を呼び出したことで追加されるロケールに関する情報を削除しようとします。

{{InteractiveExample("JavaScript デモ: Intl.Locale.prototype.minimize()")}}

```js interactive-example
const english = new Intl.Locale("en-Latn-US");
const korean = new Intl.Locale("ko-Kore-KR");
const arabic = new Intl.Locale("ar-Arab-EG");

console.log(english.minimize().baseName);
// 予想される結果: "en"

console.log(korean.minimize().baseName);
// 予想される結果: "ko"

console.log(arabic.minimize().baseName);
// 予想される結果: "ar"
```

## 構文

```js-nolint
minimize()
```

### 引数

なし。

### 返値

{{jsxref("Intl.Locale")}} インスタンスで、 `baseName` プロパティが、 [Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) アルゴリズムを _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ に対して実行された結果になったものを返します。

## 解説

このメソッドは {{jsxref("Intl/Locale/maximize", "maximize()")}} の逆の処理を行い、ロケールの言語識別子 (基本的には `baseName` の内容) から言語、文字体系、地域のサブタグをすべて削除します。これは、言語識別子の中に余分なサブタグがある場合に便利です。例えば "en-Latn" は "en" に簡略化できます。英語では "Latn" が書き言葉に使われる唯一の文字体系だからです。`minimize()` が影響を与えるのは、[言語識別子](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions)を構成する主要なサブタグである言語、文字体系、地域の各サブタグのみです。ロケール識別子の "-u" の後にあるその他のサブタグは拡張サブタグと呼ばれ、 `minimize()` メソッドの影響を受けません。これらのサブタグの例としては、{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}、{{jsxref("Intl/Locale/calendar", "calendar")}}、{{jsxref("Intl/Locale/numeric", "numeric")}} などがあります。

## 例

### minimize の使用

```js
const myLocale = new Intl.Locale("ja-Jpan-JP", {
  hourCycle: "h23",
  calendar: "gregory",
});
console.log(myLocale.baseName); // "ja-Jpan-JP" と表示
console.log(myLocale.toString()); // "ja-Jpan-JP-u-ca-gregory-hc-h23" と表示

const myLocMinimized = myLocale.minimize();

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
- {{jsxref("Intl/Locale/baseName", "baseName")}}
