---
title: PerformanceResourceTiming.domainLookupEnd
slug: Web/API/PerformanceResourceTiming/domainLookupEnd
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`domainLookupEnd`** は読み取り専用プロパティで、ブラウザーがリソースのドメイン名検索を終了した直後の {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

ユーザーエージェントのキャッシュにドメイン情報があった場合、{{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}} と {{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}} はユーザーエージェントがキャッシュからのドメインデータの取得を開始および終了した時刻を表します。

## 値

`domainLookupEnd` プロパティは、以下の値を取ります。

- ブラウザーがリソースのドメイン名検索を完了した直後の時刻を表す {{domxref("DOMHighResTimeStamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### DNS ルックアップ時間の計測

`domainLookupEnd` と {{domxref("PerformanceResourceTiming.domainLookupStart", "domainLookupStart")}} プロパティを使用すると、 DNS ルックアップの発生に対してどれだけ時間がかかるかを計測することができます。

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const dns = entry.domainLookupEnd - entry.domainLookupStart;
    if (dns > 0) {
      console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
  }
});
```

### オリジン間のタイミング情報

`domainLookupEnd` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

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
