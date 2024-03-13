---
title: Intl.DisplayNames
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
---

{{JSRef}}

**`Intl.DisplayNames`** オブジェクトは、言語、地域、文字体系の表示名の一貫した翻訳を可能にします。

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## コンストラクター

- {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : `Intl.DisplayNames` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Intl/DisplayNames/supportedLocalesOf", "Intl.DisplayNames.supportedLocalesOf()")}}
  - : 提供されたロケールのうち、ランタイムの既定のロケールに代替されることなく対応しているロケールを含む配列を返します。

## インスタンスメソッド

- {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}
  - : このメソッドは `code` を受け取り、`Intl.DisplayNames` をインスタンス化したときに指定したロケールとオプションに基づく文字列を返します。
- {{jsxref("Intl/DisplayNames/resolvedOptions", "Intl.DisplayNames.prototype.resolvedOptions()")}}
  - : オブジェクトの初期化時に計算されたロケールや書式設定のオプションを反映したプロパティを持つ新しいオブジェクトを返します。

## 例

### 国 (地域) の表示名

ロケールを指定して `Intl.DisplayNames` を作成し、国 (地域) コードの表示名を取得する方法です。

```js
// 英語の地域名を表示
let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
regionNames.of('419'); // "Latin America"
regionNames.of('BZ');  // "Belize"
regionNames.of('US');  // "United States"
regionNames.of('BA');  // "Bosnia & Herzegovina"
regionNames.of('MM');  // "Myanmar (Burma)"

// 繁体字中国語での地域名を表示
regionNames = new Intl.DisplayNames(['zh-Hant'], {type: 'region'});
regionNames.of('419'; // "拉丁美洲"
regionNames.of('BZ'); // "貝里斯"
regionNames.of('US'); // "美國"
regionNames.of('BA'); // "波士尼亞與赫塞哥維納"
regionNames.of('MM'); // "緬甸"
```

### 言語の表示名

ロケールを指定して `Intl.DisplayNames` を作成し、言語-文字体系-国 (地域) の一連の表示名を取得する方法です。

```js
// 英語の言語名を表示
let languageNames = new Intl.DisplayNames(["en"], { type: "language" });
languageNames.of("fr"); // "French"
languageNames.of("de"); // "German"
languageNames.of("fr-CA"); // "Canadian French"
languageNames.of("zh-Hant"); // "Traditional Chinese"
languageNames.of("en-US"); // "American English"
languageNames.of("zh-TW"); // "Chinese (Taiwan)"]

// 繁体字中国語での言語名を表示
languageNames = new Intl.DisplayNames(["zh-Hant"], { type: "language" });
languageNames.of("fr"); // "法文"
languageNames.of("zh"); // "中文"
languageNames.of("de"); // "德文"
```

### 文字体系コードの表示名

ロケールを指定して `Intl.DisplayNames` を作成し、文字体系の表示名を取得する方法です。

```js
// 英語の文字体系名を表示
let scriptNames = new Intl.DisplayNames(["en"], { type: "script" });
// Get script names
scriptNames.of("Latn"); // "Latin"
scriptNames.of("Arab"); // "Arabic"
scriptNames.of("Kana"); // "Katakana"

// 繁体字中国語での文字体系名を表示
scriptNames = new Intl.DisplayNames(["zh-Hant"], { type: "script" });
scriptNames.of("Latn"); // "拉丁文"
scriptNames.of("Arab"); // "阿拉伯文"
scriptNames.of("Kana"); // "片假名"
```

### 通貨コードの表示名

ロケールを指定して `Intl.DisplayNames` を作成し、通貨の表示名を取得する方法です。

```js
// 英語の通貨名を表示
let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
// Get currency names
currencyNames.of("USD"); // "US Dollar"
currencyNames.of("EUR"); // "Euro"
currencyNames.of("TWD"); // "New Taiwan Dollar"
currencyNames.of("CNY"); // "Chinese Yuan"

// 繁体字中国語の通貨名を表示
currencyNames = new Intl.DisplayNames(["zh-Hant"], { type: "currency" });
currencyNames.of("USD"); // "美元"
currencyNames.of("EUR"); // "歐元"
currencyNames.of("TWD"); // "新台幣"
currencyNames.of("CNY"); // "人民幣"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl")}}
