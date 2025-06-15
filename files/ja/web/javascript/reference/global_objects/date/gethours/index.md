---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getHours()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定された日時の「時」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getHours()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getHours());
// 予想される結果: 4
```

## 構文

```js-nolint
getHours()
```

### 引数

なし。

### 返値

地方時に基づき、指定された日時の「時」を表す 0 から 23 の間の整数値です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getHours() の使用

変数 `hours` には、 {{jsxref("Date")}} オブジェクト `xmas95` に基づいて、 `23` という値が入ります。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const hours = xmas95.getHours();

console.log(hours); // 23
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
