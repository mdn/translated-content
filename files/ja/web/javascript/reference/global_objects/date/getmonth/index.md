---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getMinutes()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日付の「月」を表す 0 を基点とした値（すなわち 0 が年の最初の月を示す）を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getMonth()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getMonth()); // (January gives 0)
// 予想される結果: 6
```

## 構文

```js-nolint
getMonth()
```

### 引数

なし。

### 返値

地方時に基づき、指定された日時の「月」を表す 0 から 11 までの間の整数値です。 1 月は 0、2 月 は 1 というようになります。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 解説

`getMonth()` の返値は 0 から始まるため、例えば、月の配列のインデックス指定に有益です。

```js
const valentines = new Date("1995-02-14");
const month = valentines.getMonth();
const monthNames = ["January", "February", "March" /* , … */];

console.log(monthNames[month]); // "February"
```

ただし、国際化のためには、代わりに {{jsxref("Intl.DateTimeFormat")}} を `options` 引数付きで使用することをお勧めします。

```js
const options = { month: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "February"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Februar"
```

## 例

### getMonth() の使用

変数 `month` には、 {{jsxref("Date")}} オブジェクト `xmas95` に基づいて、 `11` という値が入ります。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const month = xmas95.getMonth();

console.log(month); // 11
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
