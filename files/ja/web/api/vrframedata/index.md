---
title: VRFrameData
slug: Web/API/VRFrameData
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`VRFrameData`** は [WebVR API]("/ja/docs/Web/API/WebVR_API) のインターフェイスで、 VR シーンの 1 つのフレームを描画するのに必要となるすべての情報を表現します。 {{domxref("VRDisplay.getFrameData()")}} で構築します。

> [!NOTE]
> このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

## コンストラクター

- {{domxref("VRFrameData.VRFrameData", "VRFrameData()")}} {{deprecated_inline}}
  - : `VRFrameData` オブジェクトインスタンスを作成します。

## プロパティ

- {{domxref("VRFrameData.leftProjectionMatrix")}} {{deprecated_inline}}{{readonlyInline}}
  - : {{jsxref("Float32Array")}} 型で 4 行 4 列の行列であり、左目の描画に利用される射影を表します。
- {{domxref("VRFrameData.leftViewMatrix")}} {{deprecated_inline}}{{readonlyInline}}
  - : {{jsxref("Float32Array")}} 型で 4 行 4 列の行列であり、左目の描画に利用されるビュー変換を表します。
- {{domxref("VRFrameData.pose")}} {{deprecated_inline}}{{readonlyInline}}
  - : 現在の {{domxref("VRFrameData.timestamp")}} の値が示す時刻での、 {{domxref("VRDisplay")}} の {{domxref("VRPose")}} です。
- {{domxref("VRFrameData.rightProjectionMatrix")}} {{deprecated_inline}}{{readonlyInline}}
  - : {{jsxref("Float32Array")}} 型で 4 行 4 列の行列であり、右目の描画に利用される射影を表します。
- {{domxref("VRFrameData.rightViewMatrix")}} {{deprecated_inline}}{{readonlyInline}}
  - : {{jsxref("Float32Array")}} 型で 4 行 4 列の行列であり、右目の描画に利用されるビュー変換を表します。
- {{domxref("VRFrameData.timestamp")}} {{deprecated_inline}}{{readonlyInline}}
  - : 定常的に増加するタイムスタンプ値であり、フレームが更新された時を表します。

## 例

例については [`VRDisplay.getFrameData()`](/ja/docs/Web/API/VRDisplay/getFrameData#例) を参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
