---
title: Intl.Locale.prototype.getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
---

{{jsxref("Intl.Locale")}} インスタンスの **`getHourCycles()`** メソッドは、`Locale` の 1 つ以上の固有の時制識別子の配列を返します。

> [!NOTE]
> 一部のブラウザーのあるバージョンでは、このメソッドが `hourCycles` と呼ばれるアクセサープロパティとして実装されていました。しかしこの実装ではアクセスするたびに新しい配列を返すため、`locale.hourCycles === locale.hourCycles` が常に `false` を返してしまい、この状況を防ぐために、現在はメソッドとして実装されています。詳細については、[ブラウザーの互換性](#ブラウザーの互換性)の表を確認してください。

## 構文

```js-nolint
getHourCycles()
```

### 引数

なし。

### 返値

`Locale` で一般的に使用されるすべての時制種別を、優先度の高い順に並べた文字列の配列。`Locale` にすでに [`hourCycle`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) が設定されている場合、返される配列はその値のみになります。

以下は対応している時制種別の一覧です。

### 対応している時制種別

- `h12`
  - : 1–12 を使用する時制で、パターンの 'h' に対応します。 12 時制で、正子は午前 12:00 から始まります。例えば、アメリカ合衆国で使用されています。
- `h23`
  - : 0–23 を使用する時制で、パターンの 'H' に対応します。 24 時制で、正子は 0:00 から始まります。
- `h11`
  - : 0–11 を使用する時制で、パターンの 'K' に対応します。 12 時制で、正子は午前 0:00 から始まります。主に日本で使用されています。
- `h24`
  - : 1–24 を使用する時制で、パターンの 'k' に対応します。 24 時制で、正子は 24:00 から始まります。どこでも使用されていません。

## 例

### 対応している時制を取得

`Locale` オブジェクトに `hourCycle` が設定されていない場合、`getHourCycles()` は指定された `Locale` で一般的に使用されるすべての時制識別子をリストアップします。`hourCycle` を明示的に設定する例については、[`hourCycle` の例](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#例) を参照してください。

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getHourCycles()); // ["h12"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getHourCycles()); // ["h23"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.hourCycle`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
- [Unicode 時制識別子](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
