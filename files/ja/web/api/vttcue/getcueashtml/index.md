---
title: "VTTCue: getCueAsHTML() メソッド"
short-title: getCueAsHTML()
slug: Web/API/VTTCue/getCueAsHTML
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

**`getCueAsHTML()`** は {{domxref("VTTCue")}} インターフェイスのメソッドで、このキューの内容を含んだ {{domxref("DocumentFragment")}} を返します。

## 構文

```js-nolint
getCueAsHTML()
```

### 引数

なし。

### 返値

{{domxref("DocumentFragment")}} です。

## 例

次の例では、新しい {{domxref("VTTCue")}} が作成されます。そして、文書フラグメントとしての値がコンソールに出力されます。

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
console.log(cue1.getCueAsHTML());

track.addCue(cue1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
