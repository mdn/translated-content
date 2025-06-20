---
title: "WorkerGlobalScope: clearInterval() メソッド"
short-title: clearInterval()
slug: Web/API/WorkerGlobalScope/clearInterval
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

**`clearInterval()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、以前に {{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} の呼び出しによって確立された時限繰り返し動作を取り消します。指定された引数で前回確立されたアクションを識別できなかった場合、このメソッドは何も行いません。

## 構文

```js-nolint
clearInterval(intervalID)
```

### 引数

- `intervalID`
  - : 取り消したい繰り返し動作の識別子です。この ID は対応する `setInterval()` の呼び出しの返値です。

{{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} と {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} で使用する ID のプールが共有されていることは注目に値します。つまり、技術的には `clearInterval()` と {{domxref("WorkerGlobalScope.clearTimeout", "clearTimeout()")}} は交換することができます。
しかし、わかりやすくするために、そうすることは避けるべきです。

### 返値

None ({{jsxref("undefined")}}).

## 例

例については {{domxref("Window.setInterval", "setInterval()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
