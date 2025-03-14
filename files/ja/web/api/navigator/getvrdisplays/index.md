---
title: "Navigator: getVRDisplays() メソッド"
short-title: getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
l10n:
  sourceCommit: 9a9dcd5848aaf1c4226f746539e6218c48647249
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`getVRDisplays()`** は {{domxref("Navigator")}} インターフェイスのメソッドで、コンピューターに接続されている利用可能な VR ディスプレイを表す {{domxref("VRDisplay")}} オブジェクトの配列へ解決するためのプロミスを返します。

## 構文

```js-nolint
getVRDisplays()
```

### 引数

なし。

### 返値

{{domxref("VRDisplay")}} オブジェクトの配列へ解決するためのプロミスです。

## 例

コード例については [`VRDisplay`](/ja/docs/Web/API/VRDisplay#例) を参照してください。

## 仕様書

このメソッドは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、[WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はなくなりました。

すべてのブラウザーに新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) が実装されるまでは、[A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワーク、または[ポリフィル](https://github.com/immersive-web/webxr-polyfill)に頼ることをお勧めします。これにより、すべてのブラウザーで動作する WebXR アプリケーションを開発することができます[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
