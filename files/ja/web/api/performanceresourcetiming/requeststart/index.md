---
title: PerformanceResourceTiming.requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`requestStart`** は読み取り専用プロパティで、ブラウザーがサーバー、キャッシュ、またはローカルリソースにリソースのリクエストを開始する直前の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。トランスポート接続が失敗してブラウザーがリクエストを終了すると、返される値は再試行要求の開始になります。

`requestStart` には _end_ プロパティはありません。リクエスト時間を計測するには、 {{domxref("PerformanceResourceTiming.responseStart", "responseStart")}} - `requestStart` を計算してください（下記の例を参照してください）。

## 値

`requestStart` プロパティは以下の値を取ります。

- ブラウザーがサーバーからリソースのリクエストを始める直前の時刻を表す {{domxref("DOMHighResTimeStamp")}} です。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### リクエスト時間の計測

`requestStart` と {{domxref("PerformanceResourceTiming.responseStart", "responseStart")}} プロパティを使用して、リクエストにかかる時間を測定することができます。

```js
const request = entry.responseStart - entry.requestStart;
```

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Request time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### オリジン間のタイミング情報

`requestStart` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、{{HTTPHeader("Timing-Allow-Origin")}} HTTP レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` にタイミングリソースを見ることを許可するには、オリジン間リソースが送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Timing-Allow-Origin")}}
