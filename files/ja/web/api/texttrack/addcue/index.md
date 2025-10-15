---
title: TextTrack.addCue()
slug: Web/API/TextTrack/addCue
l10n:
  sourceCommit: b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{APIRef("WebVTT")}}

**`addCue()`** は {{domxref("TextTrack")}} インターフェイスのメソッドで、新しいキューをキューのリストへ追加します。

## 構文

```js-nolint
addCue(cue)
```

### 引数

- `cue`
  - : {{domxref("TextTrackCue")}} です。

> [!NOTE]
> {{domxref("TextTrackCue")}} インターフェイスは、 {{domxref("VTTCue")}} などの他のキューインターフェイスの親クラスとして使用される抽象的なクラスです。したがって、キューを追加する場合は `TextTrackCue` を継承したキュー型のいずれかを使用することになります。

### 返値

`undefined` です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : この {{domxref("TextTrackList")}} のルールが、入力される {{domxref("TextTrackCue")}} に適切なルールと一致しない場合に発生します。

## 例

以下の例では、 `addCue()` を使用して、動画のテキストトラックに 2 つのキューを追加しています。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
