---
title: PerformanceResourceTiming.transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`transferSize`** は読み取り専用プロパティで、取得したリソースのサイズ（オクテット数）を表します。サイズには、レスポンスヘッダーフィールドとレスポンスのペイロード本体（[RFC7230](https://httpwg.org/specs/rfc7230.html#message.body) で定義されているとおり）が含まれます。

リソースがローカルキャッシュから取得された場合、またはオリジンを跨いだリソースの場合、このプロパティはゼロを返します。

## 値

`workerStart` プロパティは以下の値を取ることがあります。

- 取得したリソースのサイズ（オクテット数）を表します。サイズには、レスポンスヘッダーフィールドとレスポンスのペイロード本体（[RFC7230](https://httpwg.org/specs/rfc7230.html#message.body) で定義されているとおり）が含まれます。
- サービスワーカーが使用されていない場合は `0`。
- リソースがオリジン間リクエストで、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されていない場合は `0`。

## 例

### キャッシュがヒットしたかどうかをチェック

{{domxref("PerformanceResourceTiming.responseStatus", "responseStatus")}} プロパティに対応していない環境では、`transferSize` プロパティを使用してキャッシュヒットを判定することができます。transferSize` がゼロで、リソースがゼロ以外のデコード本体サイズを持っている場合（リソースがsame-originであるか、{{HTTPHeader("Timing-Allow-Origin")}}があるという意味）、リソースはローカルキャッシュからフェッチされたものであることを示します。

ブラウザーのパフォーマンスタイムラインに記録された新しい `resource` パフォーマンス項目を通知する {{domxref("PerformanceObserver")}} を使用した例です。オブザーバーが作成される前の項目にアクセスするには、`buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
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
  if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

### オリジン間のコンテンツサイズの情報

`transferSize` プロパティの値が `0` で、ローカルキャッシュから読み込まれなかったものである場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間リクエストのコンテンツサイズ情報を公開するには、{{HTTPHeader("Timing-Allow-Origin")}} HTTP レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` にコンテンツサイズを表示することを許可するには、オリジン間リソースが送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Timing-Allow-Origin")}}
