---
title: TextTrack.kind
slug: Web/API/TextTrack/kind
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`kind`** は {{domxref("TextTrack")}} インターフェイスの読み取り専用プロパティで、このオブジェクトが表すテキストトラックの種類を返します。 これは、ユーザーエージェントがトラックをどのように処理するかを決定します。

## 値

文字列です。以下のうちの何れかです。

- `"subtitles"`
  - : キューは動画に重ねて表示されます。キューの位置は、{{domxref("TextTrackCue")}} を継承するオブジェクトのプロパティ、例えば {{domxref("VTTCue")}} を使用して制御されます。
- `"captions"`
  - : キューは動画に重ねて表示されます。キューの位置は、{{domxref("TextTrackCue")}} を継承するオブジェクトのプロパティ、例えば {{domxref("VTTCue")}} を使用して制御されます。
- `"descriptions"`
  - : キューは非視覚的な方法で利用できます。
- `"chapters"`
  - : ユーザーエージェントは、キューを選択することでナビゲートする仕組みを利用できるようにします。
- `"metadata"`
  - : メディアデータに関連する追加データで、インタラクティブビューで使用される可能性があるものです。

## 例

以下の例では、以下の例では `kind` の値がコンソールに表示されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.kind);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
