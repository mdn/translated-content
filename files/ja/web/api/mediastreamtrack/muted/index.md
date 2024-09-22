---
title: "MediaStreamTrack: muted プロパティ"
short-title: muted
slug: Web/API/MediaStreamTrack/muted
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

**`muted`** は {{domxref("MediaStreamTrack")}} インターフェイスの読み取り専用プロパティであり、トラックが現在メディア出力を提供できない状態であるかどうかを示します。

> [!NOTE]
> ユーザーがトラックをミュート/ミュート解除する方法を実装するには、{{domxref("MediaStreamTrack.enabled", "enabled")}} プロパティを使用してください。 `enabled` を `false` に設定してトラックを無効にすると、空のフレーム（すべてのサンプルが 0 である音声フレーム、またはすべてのピクセルが黒である映像フレーム）だけが生成されます。

## 値

論理値で、トラックが現在ミュートされている場合は `true` となり、ミュートされていない場合は `false` となります。

> [!NOTE]
> 可能であれば、`muted` をポーリングしてトラックのミュート状態を監視することは避けてください。
> 代わりに、 {{domxref("MediaStreamTrack.mute_event", "mute")}} と {{domxref("MediaStreamTrack.unmute_event", "unmute")}} イベントに対するイベントリスナーを追加してください。

## 例

この例では、 {{domxref("MediaStreamTrack")}} オブジェクトの配列の中で、現在ミュートされているトラックの数を数えます。

```js
let mutedCount = 0;

trackList.forEach((track) => {
  if (track.muted) {
    mutedCount += 1;
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
