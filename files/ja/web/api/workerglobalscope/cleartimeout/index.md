---
title: "WorkerGlobalScope: clearTimeout() メソッド"
short-title: clearTimeout()
slug: Web/API/WorkerGlobalScope/clearTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

**`clearTimeout()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、{{domxref("WorkerGlobalScope.setTimeout()")}} の呼び出しによって以前に確立されたタイムアウトを解除します。

指定された引数で前回確立されたアクションを識別できなかった場合、このメソッドは何も行いません。

## 構文

```js-nolint
clearTimeout(timeoutID)
```

### 引数

- `timeoutID`
  - : 解除したいタイムアウトの識別子です。この ID は対応する `setTimeout()` から返されたものです。

注目すべきは、 {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} および {{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} で使用される ID のプールは共有されますので、技術的には `clearTimeout()` および {{domxref("WorkerGlobalScope.clearInterval", "clearInterval()")}} は互いに交換できます。しかし、明確化のため、そのようなことは避けてください。

### 返値

なし ({{jsxref("undefined")}})。

## 例

例については {{domxref("Window.clearTimeout()")}} を参照してください。

## メモ

`clearTimeout()` へ妥当ではない ID を渡しても、何の効果もありません。例外は発生しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
