---
title: VRPose.timestamp
slug: Web/API/VRPose/timeStamp
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Property
  - Reference
  - VR
  - VRPose
  - Virtual Reality
  - WebVR
  - timeStamp
  - Non-standard
browser-compat: api.VRPose.timestamp
---

{{Deprecated_Header}}{{APIRef("WebVR API")}}{{Non-standard_Header}}

**`timestamp`** は {{domxref("VRPose")}} インターフェイスの読み取り専用プロパティで、システムの現在のタイムスタンプ（現在のアプリが始まってからの時刻を表す、単調に増加する値）を返します。

> **メモ:** このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

このプロパティは、位置データが更新されたかどうか、また、どのような順序で更新が行われたかを判断するのに有益なプロパティです。

> **警告:** このバージョンの `timestamp` は仕様から削除されました。代わりに、タイムスタンプは {{domxref("VRDisplay.getFrameData()")}} が呼び出されたときに返されます。 {{domxref("VRFrameData.timestamp")}} を参照してくださし。

## 値

{{domxref("DOMHighResTimeStamp")}} で、秒単位のタイムスタンプを表します。

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームが提供するデモ、ダウンロード、その他のリソース。
