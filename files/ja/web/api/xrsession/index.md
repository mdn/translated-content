---
title: XRSession
slug: Web/API/XRSession
tags:
  - API
  - AR
  - Augmented Reality
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebXR Device API
  - XRSession
browser-compat: api.XRSession
---
{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

WebXR Device API の API である **`XRSession`** は進行中の XR セッション を表し、セッションとの対話や制御に使われるメソッドやプロパティを提供します。 WebXR セッションを開くには、 {{domxref("XRSystem")}} インターフェイスの {{domxref("XRSystem.requestSession", "requestSession()")}} メソッドを使用します。

`XRSession` を使用すると、視聴者の位置と向き({{domxref("XRViewerPose")}})をポーリングして、ユーザーの環境についての情報を集め、ユーザーに画像を提示できます。`XRSession` はインラインと没入型両方の仮想現実、および拡張現実モードをサポートします。

{{InheritanceDiagram}}

## プロパティ

_以下にリストしたプロパティに加えて、`XRSession` は親インターフェイス<!--の-->である {{domxref("EventTarget")}} からプロパティを継承します。_

- {{DOMxRef("XRSession.depthDataFormat", "depthDataFormat")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : セッションが構成された深度検知データ形式を返します。
- {{DOMxRef("XRSession.depthUsage", "depthUsage")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : セッションが構成された深度検知の使用法を返します。
- {{DOMxRef("XRSession.domOverlayState", "domOverlayState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 機能が有効になっている場合、DOMオーバーレイに関する情報を提供します。
- {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : このセッションのブレンドモードを返します。これはXRデバイスを介して表示される現実世界の環境の量とデバイスがデバイスの画像をブレンドする方法を示します。
- {{DOMxRef("XRSession.inputSources", "inputSources")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : このセッションのXRInputSourceのリストを返します。各ソースは、カメラやシーンを制御するために使用される入力デバイスを表します。
- {{DOMxRef("XRSession.interactionMode", "interactionMode")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : セッションの対話モードを返します。 これは現在のアプリケーションが現在のセッションで対話型 UI を描画するのに最適なスペース(ユーザーエージェントによる)を説明します。
- {{DOMxRef("XRSession.preferredReflectionFormat", "preferredReflectionFormat")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : ライティング推定テクスチャデータに使用されるこのセッションの優先反射フォーマットを返します。
- {{DOMxRef("XRSession.renderState", "renderState")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : 画像のレンダリング方法に影響を与えるオプションを含む {{domxref("XRRenderState")}} オブジェクト。 これには近距離や遠距離のクリッピングプレーン(オブジェクトをどれだけ近づけたり遠ざけたりしてもレンダリングされるかを定義する距離)や、視野情報などが含まれます。
- {{DOMxRef("XRSession.visibilityState", "visibilityState")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : セッションの画像がユーザーに表示されているかどうか、表示されているが現在はユーザーイベントのターゲットではないかどうかを示す文字列。

## メソッド

_`XRSession` provides the following methods in addition to those inherited from its parent interface, {{domxref("EventTarget")}}._

- {{DOMxRef("XRSession.cancelAnimationFrame", "cancelAnimationFrame()")}}
  - : Removes a callback from the animation frame painting callback from `XRSession`'s set of animation frame rendering callbacks, given the identifying handle returned by a previous call to {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}.
- {{DOMxRef("XRSession.end", "end()")}}
  - : Ends the WebXR session. Returns a {{jsxref("promise")}} which resolves when the session has been shut down.
- {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}
  - : Schedules the specified method to be called the next time the {{glossary("user agent")}} is working on rendering an animation frame for the WebXR device. Returns an integer value which can be used to identify the request for the purposes of canceling the callback using `cancelAnimationFrame()`. This method is comparable to the {{domxref("Window.requestAnimationFrame()")}} method.
- {{DOMxRef("XRSession.requestHitTestSource", "requestHitTestSource()")}}
  - : Requests an {{domxref("XRHitTestSource")}} object that handles hit test subscription.
- {{DOMxRef("XRSession.requestHitTestSourceForTransientInput", "requestHitTestSourceForTransientInput()")}}
  - : Requests an {{domxref("XRTransientInputHitTestSource")}} object that handles hit test subscription for a transient input source.
- {{DOMxRef("XRSession.requestLightProbe", "requestLightProbe()")}}
  - : Requests an {{domxref("XRLightProbe")}} that estimates lighting information at a given point in the user's environment.
- {{DOMxRef("XRSession.requestReferenceSpace", "requestReferenceSpace()")}}
  - : Requests that a new {{domxref("XRReferenceSpace")}} of the specified type be created. Returns a promise which resolves with the `XRReferenceSpace` or {{domxref("XRBoundedReferenceSpace")}} which was requested, or throws a `NotSupportedError` {{domxref("DOMException")}} if the requested space type isn't supported by the device.
- {{DOMxRef("XRSession.updateRenderState", "updateRenderState()")}}
  - : Updates the properties of the session's render state.

## イベント

_The following events are delivered to `XRSession` objects._

- {{domxref("XRSession.end_event", "end")}}
  - : Sent to the `XRSession` object after the WebXR session has ended and all hardware-related functions have completed. The event is represented by an object of type {{domxref("XRSessionEvent")}}. Also available through the `onend` event handler property.
- {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}}
  - : An event of type {{domxref("XRInputSourcesChangeEvent")}} sent to the `XRSession` when the list of active XR input sources has changed. Also available through the `oninputsourceschange` event handler property.
- {{domxref("XRSession.select_event", "select")}}
  - : An event of type {{domxref("XRInputSourceEvent")}} which is sent to the session when one of the session's input sources has successfully completed a [primary action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_actions). This generally corresponds to the user pressing a trigger, touchpad, or button, speaks a command, or performs a recognizable gesture. The `select` event is sent after the `selectstart` event is sent and immediately before the `selectend` event is sent. If `select` is _not_ sent, then the select action was aborted before being completed. Also available through the `onselect` event handler property.
- {{domxref("XRSession.selectend_event", "selectend")}}
  - : An event of type {{domxref("XRInputSourceEvent")}} which gets sent to the session object when one of its input devices finishes its primary action or gets disconnected while in the process of handling a primary action. For example: for button or trigger actions, this means the button has been released; for spoken commands, it means the user has finished speaking. This is the last of the three `select*` events to be sent. Also available through the `onselectend` event handler property.
- {{domxref("XRSession.selectstart_event", "selectstart")}}
  - : An event of type {{domxref("XRInputSourceEvent")}} which is sent to the session object when one of its input devices is first engaged by the user in such a way as to cause the primary action to begin. This is the first of the `session*` event to be sent. Also available through the `onselectstart` event handler property.
- {{domxref("XRSession.squeeze_event", "squeeze")}}
  - : An {{domxref("XRInputSourceEvent")}} sent to indicate that a [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions) has successfully completed. This indicates that the device being squeezed has been released, and may represent dropping a grabbed object, for example. It is sent immediately before the `squeezeend` event is sent to indicate that the squeeze action is over. Also available through the `onsqueeze` event handler property.
- {{domxref("XRSession.squeezeend_event", "squeezeend")}}
  - : An {{domxref("XRInputSourceEvent")}} sent to the `XRSession` when the [primary squeeze action](/en-US/docs/Web/API/WebXR_Device_API/Inputs#primary_squeeze_actions) ends, whether or not the action was successful. Also available using the `onsqueezeend` event handler property.
- {{domxref("XRSession.squeezestart_event", "squeezestart")}}
  - : An event of type {{domxref("XRInputSourceEvent")}} which is sent to the `XRSession` when the user initially squeezes a squeezable controller. This may be, for example, a trigger which is used to represent grabbing objects, or might represent actual squeezing when wearing a haptic glove. Also available through the `onsqueezestart` event handler property.
- {{domxref("XRSession.visibilitychange_event", "visibilitychange")}}
  - : An {{domxref("XRSessionEvent")}} which is sent to the session when its visibility state as indicated by the {{domxref("XRSession.visibilityState", "visibilityState")}} changes. Also available through the `onvisibilitychange` event handler property.

## 例

This example establishes a new `XRSession` in `inline` mode so that it can be displayed within an HTML element, avoiding the need for a dedicated AR or VR viewing device such as a headset.

```js
const XR = navigator.xr;

if (XR) {
  XR.requestSession("inline").then((xrSession) => {
    xrSession.requestReferenceSpace("local").then((xrReferenceSpace) => {
      xrSession.requestAnimationFrame((time, xrFrame) => {
        let viewer = xrFrame.getViewerPose(xrReferenceSpace);

        gl.bindFramebuffer(xrWebGLLayer.framebuffer);

        for (xrView of viewer.views) {
          let xrViewport = xrWebGLLayer.getViewport(xrView);
          gl.viewport(xrViewport.x, xrViewport.y,
                      xrViewport.width, xrViewport.height);
        }
      });
    });
  });
} else {
  /* WebXR is not available */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
