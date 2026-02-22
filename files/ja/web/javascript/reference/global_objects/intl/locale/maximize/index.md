---
title: Intl.Locale.prototype.maximize()
short-title: maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`maximize()`** は {{jsxref("Intl.Locale")}} インスタンスのメソッドで、既存の値に基づいてロケールの言語、文字体系、地域の最も近い値を取得します。

{{InteractiveExample("JavaScript デモ: Intl.Locale.prototype.maximize()")}}

```js interactive-example
const english = new Intl.Locale("en");
const korean = new Intl.Locale("ko");
const arabic = new Intl.Locale("ar");

console.log(english.maximize().baseName);
// 予想される結果: "en-Latn-US"

console.log(korean.maximize().baseName);
// 予想される結果: "ko-Kore-KR"

console.log(arabic.maximize().baseName);
// 予想される結果: "ar-Arab-EG"
```

## 構文

```js-nolint
maximize()
```

### 引数

なし。

### 返値

{{jsxref("Intl.Locale")}} インスタンスのうち、 `baseName` プロパティが [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) アルゴリズムを _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ に対して実行した結果を返します。

## 解説

不完全な言語識別子をもとに、最も可能性の高いロケール言語識別子サブタグを識別できると便利な場合があります。 Add Likely Subtags アルゴリズムはこの機能を提供してくれます。例えば、言語識別子 "en" が与えられた場合、アルゴリズムは "en-Latn-US" を返すことになります。英語はラテン文字でしか書けませんし、世界最大の英語圏の国であるアメリカで使われている可能性が高いからです。この機能は、`maximize()` メソッドを介して JavaScript プログラマーに提供されています。 `maximize()` は、[言語識別子](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions)を構成する主要なサブタグのうち言語サブ、文字体系、地域の各サブタグにのみ影響を与えます。ロケール識別子の "-u" の後にあるその他のサブタグは拡張サブタグと呼ばれ、 `maximize()` メソッドの影響を受けません。これらのサブタグの例としては、{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}、{{jsxref("Intl/Locale/calendar", "calendar")}}、{{jsxref("Intl/Locale/numeric", "numeric")}} などがあります。

## 例

### maximize の使用

```js
const myLocale = new Intl.Locale("ja", {
  hourCycle: "h23",
  calendar: "gregory",
});
console.log(myLocale.baseName); // "ja" と表示
console.log(myLocale.toString()); // "ja-u-ca-gregory-hc-h23" と表示
const myLocMaximized = myLocale.maximize();

// "ja-Jpan-JP"。 "Jpan" と "JP" タグが追加されます。
// これは、日本語が主に漢字かな交じり文 (Jpan) で書かれ、また主に日本 (JP) で話されているためです。
console.log(myLocMaximized.baseName);

// "ja-Jpan-JP-u-ca-gregory-hc-h23" と表示します。
// なお、拡張タグ ("-u" 以降) はそのまま残ります。
console.log(myLocMaximized.toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
- [Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)（Unicode ロケールデータマークアップ言語仕様書）
