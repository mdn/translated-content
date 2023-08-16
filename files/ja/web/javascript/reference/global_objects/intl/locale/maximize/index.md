---
title: Intl.Locale.prototype.maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
---

{{JSRef}}

**`Intl.Locale.prototype.maximize()`** メソッドは、既存の値に基づいてロケールの言語、文字体系、地域の最も可能性の近い値を取得します。

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-maximize.html")}}

## 構文

```js
maximize();
```

### 返値

{{jsxref("Intl/Locale", "Locale")}} インスタンスのうち、 `baseName` プロパティが [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) アルゴリズムを _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_.に対して実行した結果になっているものを返します。

## 解説

不完全な言語識別子をもとに、最も可能性の高いロケール言語識別子サブタグを識別できると便利な場合があります。 Add Likely Subtags アルゴリズムはこの機能を提供してくれます。例えば、言語識別子 "en" が与えられた場合、アルゴリズムは "en-Latn-US" を返すことになります。英語はラテン文字でしか書けませんし、世界最大の英語圏の国であるアメリカで使われている可能性が高いからです。この機能は、 `maximize()` メソッドを介して JavaScript プログラマーに提供されています。 `maximize()` は、[言語識別子](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions)を構成する主要なサブタグのうち言語サブ、文字体系、地域の各サブタグにのみ影響を与えます。ロケール識別子の "-u" の後にあるその他のサブタグは拡張サブタグと呼ばれ、 `maximize()` メソッドの影響を受けません。これらのサブタグの例としては、{{jsxref("Intl/Locale/hourCycle", "Locale.hourCycle")}}、{{jsxref("Intl/Locale/calendar", "Locale.calendar")}}、{{jsxref("Intl/Locale/numeric", "Locale.numeric")}} などがあります。</p>

## 例

### maximize の使用

```js
let myLocale = new Intl.Locale("ja", { hourCycle: "h24", calendar: "gregory" });
console.log(myLocale.baseName); // "ja" と表示
console.log(myLocale.toString()); // "ja-u-ca-gregory-hc-h24" と表示
let myLocMaximized = myLocale.maximize();

// "ja-Jpan-JP"。 "Jpan" と "JP" タグが追加されます。
// これは、日本語が主に漢字かな交じり文 (Jpan) で書かれ、また主に日本 (JP) で話されているためです。
console.log(myLocMaximized.baseName);

// "ja-Jpan-JP-u-ca-gregory-hc-h24" と表示します。
// なお、拡張タグ ("-u" 以降) はそのまま残ります。
console.log(myLocMaximized.toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "Intl.Locale.baseName")}}
- [Unicode's Likely
  Subtags spec](https://www.unicode.org/reports/tr35/#Likely_Subtags)
