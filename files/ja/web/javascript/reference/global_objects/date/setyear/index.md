---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}} {{Deprecated_Header}}

**`setSeconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定された日時の「年」を変更します。

しかし、古い `setYear()` メソッドが年を設定する方法は、好ましい {{jsxref("Date/setFullYear", "setFullYear()")}} メソッドが年を設定する方法と異なり、いくつかのケースでは `new Date()` や {{jsxref("Date.parse()")}} が年の値を設定する方法とも異なっています。詳細度は、`22` や `61` のような 2 桁の数字が指定された場合、以下のようになります。

- `setYear()` は任意の 2 桁の数字を `1900` へのオフセットとして解釈します。したがって、 `date.setYear(22)` は年の値を `1922` に、 `date.setYear(61)` は年の値を `1961` に設定することになります（一方、 `new Date(61, 1)` は年の値を `1961` に設定しますが、 `new Date("2/1/22")` は年の値を `2022` に設定し、同様に {{jsxref("Date.parse()")}} も同じになります）。

- {{jsxref("Date/setFullYear", "setFullYear()")}} は特別な解釈をせず、 2 桁のリテラル値をそのまま使用して年を設定します。したがって、 `date.setFullYear(61)` は年の値を `0061` に、 `date.setFullYear(22)` は年の値を `0022` に設定する結果となります。

これらの動作の違いから、古いメソッドである `setYear()` はもう使用せず、代わりに推奨の {{jsxref("Date/setFullYear", "setFullYear()")}} メソッドを使用してください。

## 構文

```js-nolint
setYear(yearValue)
```

### 引数

- `yearValue`
  - : 整数値。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。 `yearValue` が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`yearValue` が 0 から 99 までの値の場合、 `dateObj` の「年」には `1900 + yearValue` が設定されます。そうでない場合、`dateObj` の「年」には `yearValue` が設定されます。

## 例

### setYear() の使用

最初の 2 行は「年」を 1996 に設定します。3 行目は、「年」を 2000 に設定します。

```js
const theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Date.prototype.setYear` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
