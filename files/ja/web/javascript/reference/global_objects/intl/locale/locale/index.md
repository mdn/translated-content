---
title: Intl.Locale() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
---

{{JSRef}}

**`Intl.Locale`** コンストラクターは、 Intl オブジェクトの標準組み込みプロパティで、 Unicode ロケール識別子を表します。

{{InteractiveExample("JavaScript デモ: Intl.Locale")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Expected output: "h23" "h12"
```

## 構文

```js
new Intl.Locale(tag);
new Intl.Locale(tag, options);
```

### 引数

- `tag`
  - : Unicode ロケール識別子の文字列です。
- `options`
  - : ロケールの構成を含むオブジェクトです。キーは Unicode ロケールタグで、値は有効な Unicode タグ値です。

## 例

### 基本的な使用

もっとも単純なものでは、{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターはロケール識別子の文字列を引数に取ります。

```js
let us = new Intl.Locale("en-US");
```

### Locale コンストラクターに options オブジェクトを渡して使用

コンストラクターには、オプションで構成オブジェクトの引数を取ることができ、そこに複数の拡張型を指定することができます。たとえば、設定オブジェクトの [`hourCycle`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) プロパティに任意の時間周期を設定し、それをコンストラクターに渡します。

```js
let locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // Prints "h12"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
- [Unicode ロケール識別子の仕様書](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
- [FormatJS における `Intl.Locale` のポリフィル](https://formatjs.io/docs/polyfills/intl-locale)
