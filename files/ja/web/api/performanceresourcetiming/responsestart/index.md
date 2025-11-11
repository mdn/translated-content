---
title: PerformanceResourceTiming.responseStart
slug: Web/API/PerformanceResourceTiming/responseStart
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`responseStart`** は読み取り専用プロパティで、ブラウザーがサーバー、キャッシュ、またはローカルリソースからレスポンスの最初のバイトを受信した直後の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

## 値

`responseStart` プロパティは以下の値を取ります。

- サーバーからのレスポンスの最初のバイトをブラウザーが受信した直後の {{domxref("DOMHighResTimeStamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### リクエスト時間の計測

`responseStart` と {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} プロパティを使用して、リクエストにかかる時間を測定することができます。

```js
const request = entry.responseStart - entry.requestStart;
```

ブラウザーのパフォーマンスタイムラインに記録される新しい `resource` パフォーマンス項目を通知する {{domxref("PerformanceObserver")}} を使用した例です。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

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

`responseStart` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、{{HTTPHeader("Timing-Allow-Origin")}} HTTP レスポンスヘッダーを設定する必要があります。

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
