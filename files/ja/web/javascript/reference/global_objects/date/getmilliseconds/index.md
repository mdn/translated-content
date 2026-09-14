---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getMilliseconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定された日時の「ミリ秒」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getMilliseconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds());
// 予想される結果: 123
```

## 構文

```js-nolint
getMilliseconds()
```

### 引数

なし。

### 返値

地方時に基づき、指定された日時の「ミリ秒」を表す 0 から 999 までの間の数値です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getMilliseconds() の使用

変数 `milliseconds` には、 {{jsxref("Date")}} オブジェクト `xmas95` に基づいて、 `0` という値が入ります。ここにはミリ秒の成分が指定されていないので、既定で 0 になります。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const milliseconds = xmas95.getMilliseconds();

console.log(milliseconds); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
