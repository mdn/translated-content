---
title: "HTMLVideoElement: getVideoPlaybackQuality() メソッド"
short-title: getVideoPlaybackQuality()
slug: Web/API/HTMLVideoElement/getVideoPlaybackQuality
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**{{domxref("HTMLVideoElement")}}** の **`getVideoPlaybackQuality()`** メソッドは、どれだけのフレームが落ちるのかを示す指標を含む {{domxref("VideoPlaybackQuality")}} オブジェクトを返します。

返されるデータは、動画ストリームの品質を評価するために使用することができます。

## 構文

```js-nolint
getVideoPlaybackQuality()
```

### 引数

なし。

### 返値

{{domxref("VideoPlaybackQuality")}} オブジェクトで、この video 要素の再生品質についての情報を提供します。

## 例

この例では、再生処理でこれまでに経過した動画フレームの総数を示す要素を更新します。この値には、取りこぼしたフレームや破損したフレームも含まれるため、「再生されたフレームの総数」とは異なります。

```js
const videoElem = document.getElementById("my_vid");
const counterElem = document.getElementById("counter");
const quality = videoElem.getVideoPlaybackQuality();

counterElem.innerText = quality.totalVideoFrames;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("video")}} 要素
- {{domxref("VideoPlaybackQuality")}} インターフェイス
