---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getFullYear()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定された日時の年を返します。

{{jsxref("Date/getYear", "getYear()")}} メソッドの代わりに、このメソッドを使用してください。

{{InteractiveExample("JavaScript デモ: Date.getFullYear()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getFullYear());
// 予想される結果: 1969
```

## 構文

```js-nolint
getFullYear()
```

### 引数

なし。

### 返値

地方時に基づき、指定された日時の年に相当する数値です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 解説

{{jsxref("Date/getYear", "getYear()")}} をは異なり、 `getFullYear()` が返す値は絶対的な値です。 1000 年から 9999 年までの日付に対して、`getFullYear()` は 1995 のような 4 桁の数字を返します。 2000 年以降の年について正しい値を得るには、この関数を使用してください。

## 例

### getFullYear() の使用

変数 `fullYear` には、 {{jsxref("Date")}} オブジェクト `xmas95` に基づいて、 `1995` という値が入ります。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const fullYear = xmas95.getFullYear();

console.log(fullYear); // 1995
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
