---
title: PerformanceResourceTiming.serverTiming
slug: Web/API/PerformanceResourceTiming/serverTiming
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}} {{securecontext_header}}

**`serverTiming`** は読み取り専用プロパティで、サーバーのタイミング測定が入った {{domxref("PerformanceServerTiming")}} 項目の配列を返します。

サーバーのタイミング測定では、サーバーが次のような {{HTTPHeader("Server-Timing")}} ヘッダーを送信する必要があります。

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

`serverTiming` の項目は、 `navigation` と `resource` の項目で使用することができます。

## 値

{{domxref("PerformanceServerTiming")}} 項目の配列です。

## 例

### サーバータイミング項目のログ出力

{{domxref("PerformanceObserver")}} を使用して、 {{domxref("PerformanceServerTiming")}} 項目を監視することができます。各サーバー項目の時間は、コンソールにログ出力されます。

ブラウザーに記録された新しい `resource` パフォーマンス項目を通知する {{domxref("PerformanceObserver")}} を使用した例です。オブザーバーが作成される前の項目にアクセスするには `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(`${serverEntry.name} duration: ${serverEntry.duration}`);
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType,
  )) {
    if (serverTiming) {
      for (const { name, duration } of serverTiming) {
        console.log(`${url}: ${name} duration: ${duration}`);
      }
    }
  }
}
```

### オリジン外へのサーバータイミング情報の公開

サーバーのタイミング情報へのアクセスは、同じオリジン内に制限されます。オリジンをまたいでタイミング情報を公開するには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` にサーバーのタイミング情報を見ることを許可するには、cross-origin リソースを送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Server-Timing")}}
