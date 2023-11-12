---
title: PerformanceResourceTiming.secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`secureConnectionStart`** は読み取り専用プロパティで、現在の接続を保護するためにブラウザーがハンドシェイクプロセスを開始する直前に {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。安全な接続が使用されていない場合、このプロパティはゼロを返します。

## 値

`secureConnectionStart` プロパティは以下の値を取り得ます。

- リソースが安全な接続を介して取得された場合、ブラウザーが現在の接続を安全にするためにハンドシェイク処理を始める直前の時刻を示す {{domxref("DOMHighResTimeStamp")}} です。
- 安全な接続が使用されていない場合は `0` です。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### TLS ネゴシエーション時間の測定

`secureConnectionStart` と {{domxref("PerformanceResourceTiming.requestStart", "requestStart")}} プロパティを使用して、TLS ネゴシエーションにどれだけ時間がかかったかを測定することができます。

```js
const tls = entry.requestStart - entry.secureConnectionStart;
```

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザー上のパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const tls = entry.requestStart - entry.secureConnectionStart;
    if (tls > 0) {
      console.log(`${entry.name}: TLS negotiation duration: ${tls}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const tls = entry.requestStart - entry.secureConnectionStart;
  if (tls > 0) {
    console.log(`${entry.name}: TLS negotiation duration: ${tls}ms`);
  }
});
```

### オリジン外へのタイミング情報の公開

`secureConnectionStart` プロパティの値が `0` の場合、リソースは安全な接続を使用していないか、オリジン間リクエストであるかのどちらかです。オリジンを跨いでタイミング情報の確認できるようにするには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` に時刻リソースを確認することを許可するには、オリジン間リソースが送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Timing-Allow-Origin")}}
