---
title: VRPose
slug: Web/API/VRPose
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`VRPose`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のインターフェイスで、特定のタイムスタンプにおける VR センサーの状態（向き、位置、速度、加速度の情報を含みます）を示します。

> **メモ:** このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

このインターフェイスには、 {{domxref("VRDisplay.getPose()")}} と {{domxref("VRDisplay.getFrameData()")}} メソッドを通じてアクセスします。 {{domxref("VRDisplay.getPose()")}} は非推奨です。

## プロパティ

- {{domxref("VRPose.position")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の位置を 3D ベクトルとして返します。
- {{domxref("VRPose.linearVelocity")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の（線形の）速度を返します。単位はメートル/秒です。
- {{domxref("VRPose.linearAcceleration")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の（線形の）加速度を返します。単位はメートル/秒/秒です。
- {{domxref("VRPose.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 現在の {{domxref("VRPose.timestamp")}} におけるセンサーの向きをクォータニオン値として返します。
- {{domxref("VRPose.angularVelocity")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の角速度を返します。単位はラジアン/秒です。
- {{domxref("VRPose.angularAcceleration")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の角加速度を返します。単位はラジアン/秒/秒です。

### 廃止されたプロパティ

- {{domxref("VRPose.timeStamp")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : システムの現在の時刻を返します。位置データが更新されたかどうか、またどのような順序で更新が行われたかを判断するのに有益な、単調に増加する値です。**代わりに、タイムスタンプは {{domxref("VRDisplay.getFrameData()")}} が呼び出されたときに返されるようになりました（詳細は {{domxref("VRFrameData.timestamp")}} を参照）。**

## 例

コード例については [`VRFieldOfView`](/ja/docs/Web/API/VRFieldOfView#例) を参照してください。

## 仕様書

このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームが提供するデモ、ダウンロード、その他のリソース。
