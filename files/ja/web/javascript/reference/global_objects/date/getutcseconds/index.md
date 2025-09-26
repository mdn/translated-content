---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getUTCSeconds()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時に基づき、指定された日時の「秒」を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getUTCSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 1969, 20:18:04 UTC");

console.log(moonLanding.getUTCSeconds());
// 予想される結果: 4
```

## 構文

```js-nolint
getUTCSeconds()
```

### 引数

なし。

### 返値

指定された日時の、協定世界時に基づく「秒」を表す 0 から 59 までの整数です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 例

### getUTCSeconds() の使用

次の例は、現在日時の「秒」部を変数 `seconds` に代入します。

```js
const today = new Date();
const seconds = today.getUTCSeconds();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
