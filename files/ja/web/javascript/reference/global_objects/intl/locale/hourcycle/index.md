---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
---
{{JSRef}}

**`Intl.Locale.prototype.hourCycle`** プロパティは、ロケールで使用される時刻保持書式の規則を返すアクセサープロパティです。

## 解説

世界中で使用されている時刻保持規則（時制）には、主に 12 時制と 24 時制の 2 つの種類があります。 `hourCycle` プロパティを使用すると、 JavaScript のプログラマーが特定のロケールで使用されている時制に簡単にアクセスできるようになります。他の追加ロケールデータと同様に、時制種別は[拡張サブタグ](https://www.unicode.org/reports/tr35/#u_Extension)であり、ロケール文字列に含まれるデータを拡張したものです。時制種別には、以下の表にある通り、いくつかの異なる値を設定することができます。

### 有効な時制種別

| 時制種別 | 説明                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| `h12`           | 1–12 を使用する時制で、パターンの 'h' に対応します。 12 時制で、正子は午前 12:00 から始まります。 |
| `h23`           | 0–23 を使用する時制で、パターンの 'H' に対応します。 24 時制で、正子は 0:00 から始まります。  |
| `h11`           | 0–11 を使用する時制で、パターンの 'K' に対応します。 12 時制で、正子は午前 0:00 から始まります。 |
| `h24`           | 1–24 を使用する時制で、パターンの 'k' に対応します。 24 時制で、正子は 24:00 から始まります。 |

## 例

これらの例は、時制データを {{jsxref("Intl/Locale", "Locale")}} オブジェクトに追加する方法を示しています。

### ロケール文字列による時制の追加

[Unicode ロケール文字列仕様書](https://www.unicode.org/reports/tr35/)では、時制はロケール文字列の「拡張サブタグ」です。これらのサブタグはロケールについての追加データであり、拡張キー `-u` を使用してロケール識別子に追加されます。このようして、時制の種類を {{jsxref("Intl/Locale/Locale", "Locale")}} コンストラクターに渡される初期のロケール識別子文字列に追加することができます。時制種別の値を設定するには、まず文字列に `-u` 拡張キーを追加します。次に、 `-hc` 拡張キーを追加して、時制種別の値を追加していることを示します。最後に、時制種別の値を文字列に追加します。

```js
let locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23" と表示
```

### 構成オブジェクト引数から時制を追加

{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、これには時制種別を含む任意の拡張の種類をいくつか含めることができます。構成オブジェクトの `hourCycle` プロパティを任意の時制種別に設定し、コンストラクターに渡します。

```js
let locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [Unicode 時制拡張キー仕様書](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
