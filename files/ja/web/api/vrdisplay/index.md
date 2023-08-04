---
title: VRDisplay
slug: Web/API/VRDisplay
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`VRDisplay`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のインターフェイスで、この API が対応している VR 機器を表します。機器 ID や説明文のような汎用的な情報が含まれており、 VR シーンの表示を開始するためのメソッドや、視線パラメーターやディスプレイの備える機能の取得、その他の重要な機能を含んでいます。

> **メモ:** このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

{{domxref("Navigator.getVRDisplays()")}} を呼び出すことで、すべての接続されている VR 機器の配列が返されます。

## プロパティ

- {{domxref("VRDisplay.capabilities")}} {{readonlyInline}} {{deprecated_inline}}
  - : `VRDisplay` の備える機能を示す {{domxref("VRDisplayCapabilities")}} オブジェクトを返します。
- {{domxref("VRDisplay.depthFar")}} {{deprecated_inline}}
  - : [視錐台](https://en.wikipedia.org/wiki/Viewing_frustum) (ビューフラスタム；つまりシーンの可視領域の境界) の far 平面を定義している z-depth の取得と設定を行います。
- {{domxref("VRDisplay.depthNear")}} {{deprecated_inline}}
  - : [視錐台](https://en.wikipedia.org/wiki/Viewing_frustum) (ビューフラスタム；つまりシーンの可視領域の境界) の near 平面を定義している z-depth の取得と設定を行います。
- {{domxref("VRDisplay.displayId")}} {{readonlyInline}} {{deprecated_inline}}
  - : この VRDisplay 固有のIDを返します。この ID は [Gamepad API](/ja/docs/Web/API/Gamepad_API) (参照 {{domxref("Gamepad.displayId")}}) の関連付けのために使用されます。
- {{domxref("VRDisplay.displayName")}} {{readonlyInline}} {{deprecated_inline}}
  - : `VRDisplay` を識別するための人間が読める形式の名前を返します。
- {{domxref("VRDisplay.isConnected")}} {{readonlyInline}} {{deprecated_inline}}
  - : `VRDisplay` がコンピュータに接続されているか否かを示す論理値を返します。
- {{domxref("VRDisplay.isPresenting")}} {{readonlyInline}} {{deprecated_inline}}
  - : `VRDisplay` が現在コンテンツを表示中であるか否かを示す論理値を返します。
- {{domxref("VRDisplay.stageParameters")}} {{readonlyInline}} {{deprecated_inline}}
  - : `VRDisplay` がルームスケール体験をサポートしている場合に、ルームスケールパラメーターを含んだ {{domxref("VRStageParameters")}} オブジェクトを返します。

## メソッド

- {{domxref("VRDisplay.getEyeParameters()")}} {{deprecated_inline}}
  - : 指定した側の視線パラメーターを含む {{domxref("VREyeParameters")}} オブジェクトを返します。
- {{domxref("VRDisplay.getFrameData()")}} {{deprecated_inline}}
  - : {{domxref("VRFrameData")}} オブジェクトを受け取り、現在のフレームをレンダリングするために必要な情報を入力します。
- {{domxref("VRDisplay.getImmediatePose()")}} {{deprecated_inline}}
  - : `VRDisplay` の現在のポーズを定義した {{domxref("VRPose")}} オブジェクトを、予測を適用せずに返します。これはもはや必要ないため、仕様から削除されました。
- {{domxref("VRDisplay.getLayers()")}} {{deprecated_inline}}
  - : `VRDisplay` によって現在表示されているレイヤーを返します。
- {{domxref("VRDisplay.getPose()")}} {{deprecated_inline}}
  - : 現在のフレームが実際に表示されるときの `VRDisplay` の予測ポーズを定義した {{domxref("VRPose")}} オブジェクトを返します。**このメソッドは非推奨です。代わりに {{domxref("VRDisplay.getFrameData()")}} を使用する必要があり、これも {{domxref("VRPose")}} オブジェクトを提供します。**
- {{domxref("VRDisplay.resetPose()")}} {{deprecated_inline}}
  - : 現在の {{domxref("VRPose.position")}} と {{domxref("VRPose.orientation")}} を"原点/ゼロ"位置の値として扱うように、`VRDisplay` のポーズをリセットします。
- {{domxref("VRDisplay.cancelAnimationFrame()")}} {{deprecated_inline}}
  - : {{domxref("Window.cancelAnimationFrame")}} の特別な実装で、{{domxref("VRDisplay.requestAnimationFrame()")}} を未登録状態にすることをコールバック可能にしています。
- {{domxref("VRDisplay.requestAnimationFrame()")}} {{deprecated_inline}}
  - : {{domxref("Window.requestAnimationFrame")}} の特別な実装で、`VRDisplay`の新しいフレームが描画される際に毎回呼出されるコールバック関数を持っています。
- {{domxref("VRDisplay.requestPresent()")}} {{deprecated_inline}}
  - : `VRDisplay` へのシーン描画を開始します。
- {{domxref("VRDisplay.exitPresent()")}} {{deprecated_inline}}
  - : `VRDisplay` のシーン描画を停止します。
- {{domxref("VRDisplay.submitFrame()")}} {{deprecated_inline}}
  - : 現在表示されている {{domxref("VRLayerInit")}} の状態を取得し、`VRDisplay` に表示します。

## 例

```js
if(navigator.getVRDisplays) {
  console.log('WebVR 1.1 supported');
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then(function(displays) {
    // If a display is available, use it to present the scene
    if(displays.length > 0) {
      vrDisplay = displays[0];
      // Now we have our VRDisplay object and can do what we want with it
    }
  });
}
```

> **メモ:** この完全なコードは [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js) で確認できます。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
