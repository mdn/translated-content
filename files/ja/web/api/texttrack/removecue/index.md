---
title: TextTrack.removeCue()
slug: Web/API/TextTrack/removeCue
l10n:
  sourceCommit: b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{APIRef("WebVTT")}}

**`removeCue()`** は {{domxref("TextTrack")}} インターフェイスのメソッドで、キューのリストからキューを取り除きます。

## 構文

```js-nolint
removeCue(cue)
```

### 引数

- `cue`
  - : {{domxref("TextTrackCue")}} です。

### 返値

`undefined` です。

### 例外

- `NotFoundError` {{domxref("DOMException")}}
  - : 指定されたキューがキューのリストに見つからなかった場合に発生します。

> **メモ:** {{domxref("TextTrackCue")}} インターフェイスは、 {{domxref("VTTCue")}} などの他のキューインターフェイスの親クラスとして使用される抽象的なクラスです。したがって、キューを追加する場合は `TextTrackCue` を継承したキュー型のいずれかを使用することになります。

## 例

以下の例では、`addCue()` を使用して動画のテキストトラックにキューを追加し、`removeCue` を使用してキューを削除しています。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
let cue = new VTTCue(0, 0.9, "Hildy!");
track.addCue(cue);
track.removeCue(cue);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
