---
title: "MediaSource: canConstructInDedicatedWorker 静的プロパティ"
short-title: canConstructInDedicatedWorker
slug: Web/API/MediaSource/canConstructInDedicatedWorker_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`canConstructInDedicatedWorker`** は {{domxref("MediaSource")}} インターフェイスの静的プロパティで、 `MediaSource` ワーカー対応が実装されていれば `true` を返し、遅延の少ない機能検出メカニズムを提供します。

もしこれが利用できなければ、専用ワーカーから `MediaSource` オブジェクトを生成し、その結果をメインスレッドに移譲するといった、レイテンシーのかなり高い手法を取ることになります。

## 値

論理値です。 `MediaSource` ワーカー対応が実装されていれば `true` を返し、そうでなければ `false` を返します。

## 例

```js
if (MediaSource.canConstructInDedicatedWorker) {
  // MSE is available in workers; let's do this
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSE-in-Workers Demo by Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html)
- {{domxref("Media Source Extensions API", "メディアソース拡張 API", "", "nocode")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
