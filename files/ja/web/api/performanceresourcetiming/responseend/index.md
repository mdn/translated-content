---
title: PerformanceResourceTiming.responseEnd
slug: Web/API/PerformanceResourceTiming/responseEnd
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`responseEnd`** は読み取り専用プロパティで、ブラウザーがリソースの最後のバイトを受信した直後、または転送接続が閉じられる直前のどちらか早い方の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

他の多くの `PerformanceResourceTiming` プロパティとは異なり、 `responseEnd` プロパティは {{HTTPHeader("Timing-Allow-Origin")}} がなくてもオリジン間リクエストで利用することができます。

## 値

ブラウザーがリソースの最後のバイトを受け取った直後、またはトランスポート接続が閉じられる直前のいずれか最初の {{domxref("DOMHighResTimeStamp")}} です。

## 例

### フェッチする時間の計測（リダイレクトなし）

`responseEnd` と {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}} プロパティを使用すると、（リダイレクトなしで）最終リソースを取得するのにかかった全体の時間を計測することができます。リダイレクトを含めるために、フェッチにかかった全体の時間は {{domxref("PerformanceEntry.duration", "duration")}} プロパティで提供されます。

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const timeToFetch = entry.responseEnd - entry.fetchStart;
    if (timeToFetch > 0) {
      console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const timeToFetch = entry.responseEnd - entry.fetchStart;
  if (timeToFetch > 0) {
    console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
