---
title: PictureInPictureEvent
slug: Web/API/PictureInPictureEvent
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{APIRef("Picture-in-Picture API")}}

**`PictureInPictureEvent`** インターフェイスはピクチャインピクチャに関するイベント、例えば {{domxref("HTMLVideoElement/enterpictureinpicture_event", "enterpictureinpicture")}}、{{domxref("HTMLVideoElement/leavepictureinpicture_event", "leavepictureinpicture")}}、{{domxref("PictureInPictureWindow/resize_event", "resize")}} を表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PictureInPictureEvent.PictureInPictureEvent", "PictureInPictureEvent()")}}
  - : 指定された引数で `PictureInPictureEvent` イベントを作成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("PictureInPictureEvent.pictureInPictureWindow")}}
  - : このイベントが関連する {{domxref("PictureInPictureWindow")}} を返します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("Event")}} から継承したメソッドもあります_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 基底インターフェイスである {{domxref("Event")}}
