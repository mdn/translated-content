---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
tags:
  - Class
  - Internationalization
  - Intl
  - JavaScript
  - Locale
  - Reference
  - クラス
  - 国際化
browser-compat: javascript.builtins.Intl.Locale
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale
---
{{JSRef}}

**`Intl.Locale`** オブジェクトは、 Unicode ロケール識別子を表す Intl オブジェクトの標準組み込みプロパティです。

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 解説

**`Intl.Locale`** オブジェクトは、 Unicode ロケールをより簡単に操作できるようにするために作成されました。 Unicode は、ロケールを*ロケール識別子*と呼ばれる文字列で表します。ロケール識別子は、*言語識別子*と*拡張タグ*から構成されます。言語識別子はロケールの中核となるもので、*言語*、*文字体系*、*地域サブタグ*から構成されます。ロケールに関する追加情報は、オプションの拡張タグに格納されます。*拡張タグ*には、暦の種類や時計の種類、数値表記法の種類などのロケールに関する情報が格納されています。

従来、 Intl API は Unicode と同様に文字列を使用してロケールを表していました。これはシンプルで軽量な解決策であり、うまく機能します。しかし、 Locale クラスを追加することで、言語、文字体系、地域、拡張タグの解析や操作が容易になります。

## コンストラクター

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : 新しい `Locale` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : この `Locale` に関する基本的な情報を、完全なデータ文字列の部分文字列の形で返します。
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : このロケールの暦年を示す `Locale` の部分を返します。
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : ロケールの照合規則に大文字・小文字を考慮しているかどうかを返します。
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : この `Locale` の照合の種類を返します。これは、ロケールの規則に従って文字列を並べ替えるために使用します。
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : このロケールが使用している時刻保持書式の規則を返します。
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : このロケールに関連づけられた言語を返します。
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : このロケールが使用している数値表記法を返します。
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : このロケールが数字に対して特殊な照合順序を持っているかどうかを返します。
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : このロケールに関連付けられた世界の地域 (通常は国) を返します。
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : このロケールで使われている特定の言語を書く際に使用する文字体系を返します。

## インスタンスメソッド

- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : 既存の値に基づいて、ロケールの言語、文字体系、地域の最も可能性の高い値を取得します。
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : {{jsxref("Intl/Locale/maximize", "Locale.maximize()")}} を呼び出すことで追加されるロケールに関する情報を削除しようとします。
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : このロケールの完全なロケール識別子文字列を返します。

## 例

### 基本的な使用

{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} のコンストラクターは、もっとも簡単なものでは、ロケール識別子の文字列を引数に取ります。

```js
let us = new Intl.Locale('en-US');
```

### Locale コンストラクターの options オブジェクト付きでの使用

このコンストラクターは、オプションで構成オブジェクトの引数を取ることができます。たとえば、構成オブジェクトの {{jsxref("Intl/Locale/hourCycle", "hourCycle")}} プロパティに任意の時間サイクル種別を設定し、それをコンストラクターに渡します。

```js
let us12hour = new Intl.Locale("en-US", {hourCycle: "h12"});
console.log(us12hour.hourCycle); // Prints "h12"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl")}}
- [Intl.Locale のポリフィル](https://formatjs.io/docs/polyfills/intl-locale)
- [Unicode ロケール識別子の仕様書](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
