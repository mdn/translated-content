---
title: WebXR 機器 API
slug: Web/API/WebXR_Device_API
l10n:
  sourceCommit: af967bb052695baa631c004b9b149c6f91920776
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**WebXR** は、仮想世界（**仮想現実**、virtual reality、または **VR**）を提示するために、またはグラフィック画像を現実世界に追加（**拡張現実**、augmented reality、または **AR**）するために設計されたハードウェアへの 3D シーンのレンダリングに対応するために、一緒に使用される標準のグループです。 **WebXR 機器 API** は WebXR 機能セットのコアを実装し、出力機器の選択を管理し、適切なフレームレートで選択した機器に 3D シーンをレンダリングし、入力コントローラーを使用して作成されたモーションベクトルを管理します。

WebXR 互換機器には、モーションと方向の追跡が可能な完全没入型 3D ヘッドセット、フレームを通した現実世界のシーンの上にグラフィックをオーバーレイする眼鏡、カメラで世界を捉えることで現実を拡張し、コンピューターで生成された画像でそのシーンを増強する携帯電話が含まれます。

これらを実現するために、WebXR 機器 API は次の主要な機能を提供します。

- 互換性のある VR または AR 出力機器を見つける。
- 3D シーンを適切なフレームレートで機器にレンダリングする。
- （オプション）出力を 2D ディスプレイにミラーリングする。
- 入力コントロールの動きを表すベクトルを作成する。

最も基本的なレベルでは、それぞれの目の位置を計算し、その位置からシーンをレンダリングすることにより、ユーザーのそれぞれの目の視点からレンダリングするためにシーンに適用するパースペクティブを計算することにより、ユーザーが現在向いている方向を見ているシーンが 3D で提示されます。 これらの 2 つの画像はそれぞれ単一のフレームバッファーにレンダリングされ、左目のレンダリングされた画像は左側に、右目の視点はバッファーの右半分にレンダリングされます。 シーンに対する両目の視点がレンダリングされると、結果のフレームバッファーが WebXR 機器に配信され、ヘッドセットまたは他の適切なディスプレイ機器を通じてユーザーに提示されます。

古い [WebVR API](/ja/docs/Web/API/WebVR_API) は、仮想現実（VR）に対応するためだけに設計されましたが、WebXR はウェブ上の VR と拡張現実（AR）の両方に対応します。 AR 機能の対応は、WebXR 拡張現実モジュールによって追加されます。

典型的な XR 機器は 3 または 6 自由度を持つことができ、外部位置センサーがある場合とない場合があります。

機器はまた、ユーザーが空間を移動したり、頭を回転したりすることなどを感知するために使用する加速度計、気圧計、または他のセンサーを含んでいるかもしれません。

## WebXR リファレンス記事

<div class="index">

### 初期化

- {{domxref("navigator.xr")}}
- {{domxref("XRSystem")}}
- {{domxref("XRPermissionStatus")}}
- `Permissions-Policy`: [`xr-spatial-tracking`](/ja/docs/Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking)

### セッション

- {{DOMxRef("XRSession")}}
- {{domxref("XRSessionEvent")}}
- {{DOMxRef("XRRenderState")}}

### フレームループ

- {{DOMxRef("XRFrame")}}

### 空間

- {{DOMxRef("XRSpace")}}
- {{DOMxRef("XRReferenceSpace")}}
- {{DOMxRef("XRBoundedReferenceSpace")}}
- {{domxref("XRReferenceSpaceEvent")}}
- {{domxref("XRJointSpace")}}

### ビュー

- {{DOMxRef("XRView")}}
- {{DOMxRef("XRViewport")}}

### 幾何プリミティブ

- {{DOMxRef("XRRigidTransform")}}

### 姿勢

- {{DOMxRef("XRPose")}}
- {{DOMxRef("XRJointPose")}}
- {{DOMxRef("XRViewerPose")}}

### 入力

- {{DOMxRef("XRHand")}}
- {{DOMxRef("XRInputSource")}}
- {{DOMxRef("XRInputSourceArray")}}
- {{domxref("XRInputSourceEvent")}}
- {{domxref("XRInputSourcesChangeEvent")}}

### レイヤー

- {{DOMxRef("XRLayer")}}
- {{DOMxRef("XRLayerEvent")}}
- {{DOMxRef("XRCompositionLayer")}}
- {{DOMxRef("XRCubeLayer")}}
- {{DOMxRef("XRCylinderLayer")}}
- {{DOMxRef("XREquirectLayer")}}
- {{DOMxRef("XRProjectionLayer")}}
- {{DOMxRef("XRQuadLayer")}}
- {{DOMxRef("XRMediaBinding")}}

### WebGL の構築

- {{DOMxRef("XRWebGLBinding")}}
- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
- {{DOMxRef("XRWebGLLayer")}}
- {{DOMxRef("XRSubImage")}}
- {{DOMxRef("XRWebGLSubImage")}}

### アンカー

- {{domxref("XRAnchor")}}
- {{domxref("XRAnchorSet")}}

### 深度センシング

- {{domxref("XRDepthInformation")}}
- {{domxref("XRCPUDepthInformation")}}
- {{domxref("XRWebGLDepthInformation")}}

### ヒットテスト

- {{domxref("XRHitTestSource")}}
- {{domxref("XRTransientInputHitTestSource")}}
- {{domxref("XRHitTestResult")}}
- {{domxref("XRTransientInputHitTestResult")}}
- {{domxref("XRRay")}}

### 照明の推定

- {{domxref("XRLightEstimate")}}
- {{domxref("XRLightProbe")}}

</div>

## ガイドとチュートリアル

次のガイドとチュートリアルは、WebXR とその基礎となる 3D および VR/AR のグラフィックスの概念を理解する方法を学ぶための優れたリソースです。

<div class="index">

### 基盤と基礎

- [WebXR の基本](/ja/docs/Web/API/WebXR_Device_API/Fundamentals)
- [ウェブの行列計算](/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [WebXR アプリケーションのライフサイクル](/ja/docs/Web/API/WebXR_Device_API/Lifecycle)

### 複合現実エクスペリエンスの作成

- [WebXR セッションの起動と停止](/ja/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [WebXR の幾何学と参照空間](/ja/docs/Web/API/WebXR_Device_API/Geometry)
- [WebXR での空間追跡](/ja/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [レンダリングと WebXR フレームアニメーションコールバック](/ja/docs/Web/API/WebXR_Device_API/Rendering)
- [視点とビューアー: WebXR でのカメラのシミュレーション](/ja/docs/Web/API/WebXR_Device_API/Cameras)
- [WebXR 設定の照明](/ja/docs/Web/API/WebXR_Device_API/Lighting)
- [制限付き参照空間の使用](/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)

### インタラクティブにする

- [移動、向き、モーション: WebXR の例](/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
- [ターゲティングとヒット検出](/ja/docs/Web/API/WebXR_Device_API/Targeting)

### パフォーマンスとセキュリティ

- [WebXR パフォーマンスガイド](/ja/docs/Web/API/WebXR_Device_API/Performance)
- [WebXR の権限とセキュリティ](/ja/docs/Web/API/WebXR_Device_API/Permissions_and_security)

</div>

## 仕様書

<table>
  <thead>
    <tr>
      <th>Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr/"><strong>WebXR Device API</strong></a>
      (<a href="https://github.com/immersive-web/webxr">ソース</a>、
       <a href="https://github.com/immersive-web/webxr/issues">課題</a>、
       <a href="https://github.com/immersive-web/webxr/blob/master/explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/anchors/"><strong>WebXR Anchors Module</strong></a>
      (<a href="https://github.com/immersive-web/anchors">ソース</a>、
       <a href="https://github.com/immersive-web/anchors/issues">課題</a>、
       <a href="https://github.com/immersive-web/anchors/blob/master/explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-ar-module/"><strong>WebXR Augmented Reality Module</strong></a>
      (<a href="https://github.com/immersive-web/webxr-ar-module">ソース</a>、
       <a href="https://github.com/immersive-web/webxr-ar-module/issues">課題</a>、
       <a href="https://github.com/immersive-web/webxr-ar-module/blob/master/ar-module-explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/depth-sensing/"><strong>WebXR Depth Sensing Module</strong></a>
      (<a href="https://github.com/immersive-web/depth-sensing">ソース</a>、
       <a href="https://github.com/immersive-web/depth-sensing/issues">課題</a>、
       <a href="https://github.com/immersive-web/depth-sensing/blob/master/explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/dom-overlays"><strong>WebXR DOM Overlays Module</strong></a>
      (<a href="https://github.com/immersive-web/dom-overlays">ソース</a>、
       <a href="https://github.com/immersive-web/dom-overlays/issues">課題</a>、
       <a href="https://github.com/immersive-web/dom-overlays/blob/master/explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-gamepads-module/"><strong>WebXR Gamepads Module</strong></a>
      (<a href="https://github.com/immersive-web/webxr-gamepads-module">ソース</a>、
       <a href="https://github.com/immersive-web/webxr-gamepads-module/issues">課題</a>、
       <a href="https://github.com/immersive-web/webxr-gamepads-module/blob/master/gamepads-module-explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-hand-input/"><strong>WebXR Hand Input Module</strong></a>
      (<a href="https://github.com/immersive-web/webxr-hand-input">ソース</a>、
       <a href="https://github.com/immersive-web/webxr-hand-input/issues">課題</a>、
       <a href="https://github.com/immersive-web/webxr-hand-input/blob/master/explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/hit-test"><strong>WebXR Hit Test Module</strong></a>
      (<a href="https://github.com/immersive-web/hit-test">ソース</a>、
       <a href="https://github.com/immersive-web/hit-test/issues">課題</a>、
       <a href="https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/layers/"><strong>WebXR Layers API</strong></a>
      (<a href="https://github.com/immersive-web/layers">ソース</a>、
       <a href="https://github.com/immersive-web/layers/issues">課題</a>、
       <a href="https://github.com/immersive-web/layers/blob/master/explainer.md">説明</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/lighting-estimation/"><strong>WebXR Lighting Estimation API</strong></a>
      (<a href="https://github.com/immersive-web/lighting-estimation">ソース</a>、
       <a href="https://github.com/immersive-web/lighting-estimation/issues">課題</a>、
       <a href="https://github.com/immersive-web/lighting-estimation/blob/master/lighting-estimation-explainer.md">説明</a>)</td>
    </tr>
  </tbody>
</table>

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブのグラフィック](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [グラフィックの描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [WebGL API](/ja/docs/Web/API/WebGL_API): ウェブ上の 2D および 3D グラフィックスの高速化
- [キャンバス API](/ja/docs/Web/API/Canvas_API): ウェブのための 2D 描画
- [キャンバスチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)
