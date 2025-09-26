---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getMinutes()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定された日時の「分」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getMinutes()", "shorter")}}

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// 予想される結果: 20
```

## 構文

```js-nolint
getMinutes()
```

### 引数

なし。

### 返値

地方時に基づき、指定された日時の「分」を表す 0 から 59 までの間の数値です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getMinutes() の使用

変数 `minutes` には、 {{jsxref("Date")}} オブジェクト `xmas95` に基づいて、 `15` という値が入ります。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const minutes = xmas95.getMinutes();

console.log(minutes); // 15
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
