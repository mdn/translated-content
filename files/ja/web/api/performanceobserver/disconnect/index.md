---
title: "PerformanceObserver: disconnect() メソッド"
short-title: disconnect()
slug: Web/API/PerformanceObserver/disconnect
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

**`disconnect()`** は {{domxref('PerformanceObserver')}} インターフェイスのメソッドで、パフォーマンスオブザーバーが{{domxref("PerformanceEntry","パフォーマンス項目", '', 'true')}}イベントを受け取らないようにするために使用されます。

## 構文

```js-nolint
disconnect()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### パフォーマンスオブザーバーの停止

次の例では、パフォーマンスオブザーバーを切断して、パフォーマンス項目イベントの受信を無効にしています。

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // "measure" イベントを処理
    // …
    // それ以降のパフォーマンスイベントを無効化
    observer.disconnect();
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
