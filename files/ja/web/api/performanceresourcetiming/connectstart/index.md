---
title: PerformanceResourceTiming.connectStart
slug: Web/API/PerformanceResourceTiming/connectStart
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`connectStart`** は読み取り専用プロパティで、リソースを取得するためにユーザーエージェントがサーバーへの接続の確立を開始する直前の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

## 値

`connectStart` プロパティは以下の値を取ります。

- ブラウザーがリソースを取得するためにサーバーとのコネクションを確立し始める直前の {{domxref("DOMHighResTimeStamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### TCP ハンドシェイク時間の計測

`connectStart` と {{domxref("PerformanceResourceTiming.connectEnd", "connectEnd")}} プロパティを使用して、 TCP ハンドシェイクが発生したときにどれくらいかかるかを計測することができます。

```js
const tcp = entry.connectEnd - entry.connectStart;
```

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const tcp = entry.connectEnd - entry.connectStart;
    if (tcp > 0) {
      console.log(`${entry.name}: TCP handshake duration: ${tcp}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tcp = entry.connectEnd - entry.connectStart;
  if (tcp > 0) {
    console.log(`${entry.name}: TCP handshake duration: ${tcp}ms`);
  }
});
```

### オリジン間のタイミング情報

`connectStart` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Timing-Allow-Origin")}}
