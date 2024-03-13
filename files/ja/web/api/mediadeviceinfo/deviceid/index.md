---
title: "MediaDeviceInfo: deviceId プロパティ"
slug: Web/API/MediaDeviceInfo/deviceId
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Media Capture")}}

**`deviceId`** は {{domxref("MediaDeviceInfo")}} インターフェイスの読み取り専用プロパティで、対応する機器の識別子を表す文字列を返します。この識別子はセッション間で不変です。

この識別子は他のアプリケーションからは予測できず、呼び出し元のアプリケーションのオリジンで一意です。また、クッキーを消去すると再設定されます。プライベートブラウジングでは、異なる識別子が用いられ、セッション間で不変ではありません。

## 値

文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
