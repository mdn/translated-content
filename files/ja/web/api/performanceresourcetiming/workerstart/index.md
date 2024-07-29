---
title: PerformanceResourceTiming.workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`workerStart`** は {{domxref("PerformanceResourceTiming")}} インターフェイスの読み取り専用プロパティで、サービスワーカーのスレッドが既に実行されている場合は {{domxref("FetchEvent")}} を送出する直前、またはサービスワーカーのスレッドがまだ実行されていない場合は、開始される直前に {{domxref("DOMHighResTimeStamp")}} を返します。このリソースがサービスワーカーに介入されない場合、このプロパティは常に 0 を返します。

## 値

`workerStart` プロパティは以下の値を取ることがあります。

- {{domxref("DOMHighResTimeStamp")}}
- サービスワーカーが使用されていない場合は `0`。
- リソースがオリジン間リクエストで、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されていない場合は `0`。

## 例

### サービスワーカーの処理時間の計測

`workerStart` および {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}} プロパティを使用して、 {{domxref("ServiceWorker")}} の処理時間を計測することができます。

```js
const workerProcessingTime = entry.fetchStart - entry.workerStart;
```

{{domxref("PerformanceObserver")}} の使用例で、ブラウザーのパフォーマンスタイムラインに記録された新しい `resource` パフォーマンス項目を通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const workerProcessingTime = entry.fetchStart - entry.workerStart;
    if (workerProcessingTime > 0) {
      console.log(
        `${entry.name}: Worker processing time: ${workerProcessingTime}ms`,
      );
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const workerProcessingTime = entry.fetchStart - entry.workerStart;
  if (workerProcessingTime > 0) {
    console.log(
      `${entry.name}: Worker processing time: ${workerProcessingTime}ms`,
    );
  }
});
```

### オリジン間のタイミング情報

`workerStart` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間の時刻情報を見るためには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` に時刻リソースを見ることを許可するには、オリジン間リソースが送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Timing-Allow-Origin")}}
