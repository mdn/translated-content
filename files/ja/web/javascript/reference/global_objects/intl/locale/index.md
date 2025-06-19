---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

**`Intl.Locale`** オブジェクトは、 Unicode ロケール識別子を表す Intl オブジェクトの標準組み込みプロパティです。

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
// 期待される結果: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// 期待される結果: "h23" "h12"
```

## 解説

**`Intl.Locale`** オブジェクトは、 Unicode ロケールをより簡単に操作できるようにするために作成されました。 Unicode は、ロケールを「ロケール識別子」と呼ばれる文字列で表します。ロケール識別子は、「言語識別子」と「拡張タグ」から構成されます。言語識別子はロケールの中核となるもので、「言語」、「文字体系」、「地域サブタグ」から構成されます。ロケールに関する追加情報は、オプションの拡張タグに格納されます。「拡張タグ」には、暦の種類や時計の種類、記数法の種類などのロケールに関する情報が格納されています。

従来、 Intl API は Unicode と同様に文字列を使用してロケールを表していました。これはシンプルで軽量な解決策であり、うまく機能します。しかし、 Locale クラスを追加することで、言語、文字体系、地域、拡張タグの解析や操作が容易になります。以下の `Intl.Locale` のプロパティは、 Unicode ロケール識別子のサブタグに対応しています。

| プロパティ                                                   | 対応するサブタグ                   |
| ------------------------------------------------------------ | ---------------------------------- |
| {{jsxref("Intl/Locale/language", "language")}}               | `language` （最初の部分）          |
| {{jsxref("Intl/Locale/script", "script")}}                   | `script` （2 つ目の部分）          |
| {{jsxref("Intl/Locale/region", "region")}}                   | `region` （2 つ目と 3 つ目の部分） |
| {{jsxref("Intl/Locale/calendar", "calendar")}}               | `ca` （拡張）                      |
| {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}             | `kf` （拡張）                      |
| {{jsxref("Intl/Locale/collation", "collation")}}             | `co` （拡張）                      |
| {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}             | `hc` （拡張）                      |
| {{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}} | `nu` （拡張）                      |
| {{jsxref("Intl/Locale/numeric", "numeric")}}                 | `kn` （拡張）                      |

上記の情報は、外部データベースを参照することなく、`Locale` オブジェクトが構築されたときにそのまま提供されます。`Intl.Locale` オブジェクトは、利用可能な暦、照合順序、記数法など、ロケールの実際の情報に関する情報を返すメソッドも追加で提供しています。

## コンストラクター

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : 新しい `Locale` オブジェクトを生成します。

## インスタンスプロパティ

これらのプロパティは `Intl.Locale.prototype` で定義され、すべての `Intl.Locale` インスタンスで共有されます。

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : この `Locale` に関する基本的な情報を、完全なデータ文字列の部分文字列の形で返します。
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : このロケールの暦を示す `Locale` の部分を返します。
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : このロケールの照合規則で大文字・小文字を考慮しているかどうかを返します。
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : この `Locale` の照合の種類を返します。これは、ロケールの規則に従って文字列を並べ替えるために使用します。
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。 `Intl.Locale` インスタンスの場合、初期値は {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターです。
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : このロケールが使用している時刻保持書式の規則を返します。
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : このロケールに関連づけられた言語を返します。
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : このロケールが使用している記数法を返します。
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : このロケールが数字に対して特殊な照合順序を持っているかどうかを返します。
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : このロケールに関連付けられた世界の地域（通常は国）を返します。
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : このロケールで使われている特定の言語を書く際に使用する文字体系を返します。
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"Intl.Locale"` です。このプロパティは、 {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : このロケールのルールにより、利用可能な暦の配列 ({{jsxref("Array")}}) を返します。
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : この `Locale` の照合型の配列 ({{jsxref("Array")}}) を返します。
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : 時間周期の配列 ({{jsxref("Array")}}) を返します。 12 時制 ("h12")、日本の 12 時制 ("h11")、24 時制 ("h23")、未使用の書式 "h24" のいずれかです。
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : このロケールのルールに基づいて利用可能な記数法識別子の配列 ({{jsxref("Array")}}) を返します。
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : `ltr` （左書き）または `rtl` （右書き）で、文字の並び順を示す部分を返します。
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : この `Locale` に関連付けられたタイムゾーン識別子の配列 ({{jsxref("Array")}}) を返します。
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : ロケールのルールに従い、 [UTS 35 の週要素](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements)を返します。

- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : 既存の値に基づいて、ロケールの言語、文字体系、地域の最も可能性の高い値を取得します。
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : {{jsxref("Intl/Locale/maximize", "maximize()")}} を呼び出すことで追加されるロケールに関する情報を削除しようとします。
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : このロケールの完全なロケール識別子文字列を返します。

## 例

### 基本的な使い方

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} のコンストラクターは、もっとも簡単なものでは、ロケール識別子の文字列を引数に取ります。

```js
const us = new Intl.Locale("en-US");
```

### Locale コンストラクターを options オブジェクト付きで使用

このコンストラクターは、オプションで構成オブジェクトの引数を取ることができます。たとえば、構成オブジェクトの {{jsxref("Intl/Locale/hourCycle", "hourCycle")}} プロパティに任意の時間サイクル種別を設定し、それをコンストラクターに渡します。

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.Locale` のポリフィル (FormatJS)](https://formatjs.github.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [Unicode ロケール識別子の仕様書](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) (Unicode locale data markup language spec)
