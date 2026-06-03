---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getSeconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、地方時に基づき、指定した日時の「秒」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getSeconds());
// 予想される結果: 18
```

## 構文

```js-nolint
getSeconds()
```

### 引数

なし。

### 返値

地方時に基づき、指定された日時の「秒」を表す 0 から 59 までの間の整数値です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getSeconds() の使用

変数 `seconds` には、 {{jsxref("Date")}} オブジェクト `xmas95` に基づいて、 `30` という値が入ります。

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const seconds = xmas95.getSeconds();

console.log(seconds); // 30
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
