---
title: PerformanceResourceTiming.responseStatus
slug: Web/API/PerformanceResourceTiming/responseStatus
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}} {{SeeCompatTable}}

**`responseStatus`** は読み取り専用のプロパティで、リソースを読み取る際に返される HTTP レスポンスステータスコードを表します。

このプロパティは[フェッチ API](/ja/docs/Web/API/Fetch_API) の {{domxref("Response.status")}} に対応します。

## 値

`responseStatus` プロパティは以下の値を取ります。

- リソースを読み取った際に返された [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)を示す数値。
- [CORS](/ja/docs/Web/HTTP/Guides/CORS) のチェックに失敗した場合は `0`。
- 別オリジンの {{HTMLElement("iframe")}} オブジェクトの場合は `0`。

## 例

### キャッシュがヒットしたかどうかをチェック

`responseStatus` プロパティをお使用して、{{HTTPStatus("304")}} `Not Modified` でキャッシュされたリソースを確認することができます。

{{domxref("PerformanceObserver")}} を使用した例です。これは、ブラウザーのパフォーマンスタイムラインに新しい `resource` パフォーマンス項目が記録されると、それを通知するものです。オブザーバーが作成される前の項目にアクセスするには `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.responseStatus === 304) {
      console.log(`${entry.name} was loaded from cache`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.responseStatus === 304) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

また、 `responseStatus` が利用できない場合は、 {{domxref("PerformanceResourceTiming.transferSize", "transferSize")}} プロパティは `0` を返します。

### オリジン間のレスポンスステータスコード

`responseStatus` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジンの外へのレスポンスステータスコードの表示を許可するには、[CORS](/ja/docs/Web/HTTP/Guides/CORS) の HTTP の {{HTTPHeader("Access-Control-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` にレスポンスステータスコードを取得させるためには、オリジン間リソースが送信する必要があります。

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{domxref("Response.status")}}
- [CORS](/ja/docs/Web/HTTP/Guides/CORS)
