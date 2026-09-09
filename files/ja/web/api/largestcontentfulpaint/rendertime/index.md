---
title: "LargestContentfulPaint: renderTime プロパティ"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{APIRef("Performance API")}}

**`renderTime`** は {{domxref("LargestContentfulPaint")}} インターフェイスの読み取り専用プロパティで、要素が画面にレンダリングされた時刻を表します。

## 値

`renderTime` プロパティは、以下の値を取り得ます。

- 要素が画面に描画された時点（ミリ秒単位）を表す {{domxref("DOMHighResTimeStamp","timestamp")}}。
- リソースが異なるオリジンへのリクエストであり、かつ HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されていない場合、`0` または丸め処理された {{domxref("DOMHighResTimeStamp","timestamp")}} が返されます。

### 異なるオリジンの画像レンダリング時刻

セキュリティ上の理由から、リソースがオリジンをまたぐリクエストである場合、`renderTime` プロパティの値は当初 `0` となっていました。

このような状況では、ブラウザーは[レンダリング時刻を少し制度を落として公開する場合があります](https://github.com/w3c/paint-timing/issues/104)。[ブラウザーの互換性](#ブラウザーの互換性)を調べてください。

より正確なオリジンをまたいだ場合のレンダリング時のタイミング情報を公開するには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` が正確な `renderTime` を取得することができるようにするには、別なオリジンのリソースは以下を送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

### `renderTime` の代わりに `startTime` を使用する

`renderTime` の正確性にかかわらず、開発者は LCP 時刻として `renderTime` ではなく {{domxref("PerformanceEntry.startTime", "startTime")}} を使用しましょう。これにより、項目の `renderTime` が `0` でない場合はその値が返され、そうでない場合はこの項目の {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} の値が返されるため、非対応のブラウザーで `0` かどうかを調べる必要が除去されます。

## 例

### LCP 要素の renderTime をログ出力

この例では、ブラウザーのパフォーマンスタイムラインに新しい `largest-contentful-paint` パフォーマンス項目が記録されるたびに通知を行う {{domxref("PerformanceObserver")}} を使用しています。`buffered` オプションは、オブザーバーの作成以前に記録された項目にアクセスするために使用されます。

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // 最新の LCP 候補を使用
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
