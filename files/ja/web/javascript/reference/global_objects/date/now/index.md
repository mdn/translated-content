---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
---

{{JSRef}}

**`Date.now()`** メソッドは、UTC (協定世界時) での 1970 年 1 月 1 日 0 時 0 分 0 秒 から現在までの経過時間をミリ秒単位で返します。

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## 構文

```
var timeInMs = Date.now();
```

### Return value

UNIX 元期からの経過時間をミリ秒単位で表す{{jsxref("Number", "数値")}}。

## Polyfill

このメソッドは ECMA-262 第 5 版で標準化されました。このメソッドに対応するよう更新されていないエンジンでは、次の互換コードを使用することにより、実装の欠落を補うことができます。

```js
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
```

## 例

### 時刻の低精度化

ブラウザーの設定によっては、タイミング攻撃と Fingerprinting に対する保護を提供するために `new Date().getTime()` の精度が落とされていることがあります。
Firefox では、`privacy.reduceTimerPrecision` が既定で有効になっています。既定値は Firefox 59 では 20 マイクロ秒で、 Firefox 60 では 2 ミリ秒です。

```js
// Firefox 60 での時刻の精度の低下（2 ミリ秒）
Date.now()
// 1519211809934
// 1519211810362
// 1519211811670
// ...


// `privacy.resistFingerprinting` が有効な場合の時刻の精度の低下
Date.now();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Firefox では、 `privacy.resistFingerprinting` も有効にできます。この場合、精度は 100 ミリ秒と `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 値のうち大きい方になります。

## 仕様書

| 仕様書                                                               |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.now', 'Date.now')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Date.now")}}

## 関連情報

- {{domxref("Performance.now()")}} — ウェブページのパフォーマンス測定のための、ミリ秒以下の分解能を持つタイムスタンプを提供
- {{domxref("console.time()")}} / {{domxref("console.timeEnd()")}}
