---
title: Intl.Locale.prototype.hourCycles
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycles
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
  - hourCycles
browser-compat: javascript.builtins.Intl.Locale.hourCycles
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycles
---
{{JSRef}}

**`Intl.Locale.prototype.hourCycles`** プロパティは、この `Locale` に固有の時制識別子のリストを返すアクセサープロパティです。

## 解説

世界中で使用されている時刻保持規則（時制）には、主に 12 時制と 24 時制の 2 つの種類があります。 `hourCycles` プロパティを使用すると、特定のロケールで利用できるすべての時制に簡単にアクセスできるようになります。他の追加ロケールデータと同様に、時制種別は[拡張サブタグ](https://www.unicode.org/reports/tr35/#u_Extension)であり、ロケール文字列に含まれるデータを拡張したものです。時制種別には、以下の表にある通り、いくつかの異なる値を設定することができます。

### 有効な時制種別

| 時制種別 | 説明                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| `h12`           | 1–12 を使用する時制で、パターンの 'h' に対応します。 12 時制で、正子は午前 12:00 から始まります。 |
| `h23`           | 0–23 を使用する時制で、パターンの 'H' に対応します。 24 時制で、正子は 0:00 から始まります。  |
| `h11`           | 0–11 を使用する時制で、パターンの 'K' に対応します。 12 時制で、正子は午前 0:00 から始まります。 |
| `h24`           | 1–24 を使用する時制で、パターンの 'k' に対応します。 24 時制で、正子は 24:00 から始まります。 |

## 例

### 対応しているカレンダーを取得

指定された `Locale` で対応している時制のリストを出力します。

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.hourCycles); // logs ["h12"]
```

```js
let jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.hourCycles); // logs ["h23"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode 時制拡張キー仕様書](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
