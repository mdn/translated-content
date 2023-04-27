---
title: PerformanceResourceTiming.encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`encodedBodySize`** は読み取り専用プロパティで、適用されたコンテンツコーディング（gzip や Brotli など）を削除する前の、ペイロード本体のフェッチ（HTTP またはキャッシュ）から受信したサイズ（オクテット単位）を表します。リソースがアプリケーションキャッシュまたはローカルリソースから取得された場合は、適用されたコンテンツコーディングを削除する前にペイロードボディのサイズを返す必要があります。

## 値

`encodedBodySize` プロパティは、以下の値を取ります。

- フェッチ（HTTP またはキャッシュ）から受け取ったペイロード本体のサイズ（オクテット単位）を表す数値で、適用されたエンコーディングを削除する前のものです。
- リソースがオリジン間リクエストで、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} ヘッダーが使用されていない場合は `0`。

## 例

### コンテンツが圧縮されているかどうかのチェック

もし `encodedBodySize` と {{domxref("PerformanceResourceTiming.decodedBodySize", "decodedBodySize")}} プロパティが null でなく異なっていれば、コンテンツは（例えば gzip や Brotli などの）圧縮されたものです。

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const uncompressed =
      entry.decodedBodySize && entry.decodedBodySize === entry.encodedBodySize;
    if (uncompressed) {
      console.log(`${entry.name} was not compressed!`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const uncompressed =
    entry.decodedBodySize && entry.decodedBodySize === entry.encodedBodySize;
  if (uncompressed) {
    console.log(`${entry.name} was not compressed!`);
  }
});
```

### オリジン間のコンテンツサイズ情報

`encodedBodySize` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

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
