---
title: "Navigator: xr プロパティ"
short-title: xr
slug: Web/API/Navigator/xr
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**`xr`** は {{domxref("Navigator")}} インターフェイスによって提供される読み取り専用プロパティで、[WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) へのアクセスに使用できる {{domxref("XRSystem")}} オブジェクトを返します。

## 値

現在のコンテキストで [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) とのインターフェイスに使用する {{domxref("XRSystem")}} オブジェクト。 これを使用して、拡張現実や仮想現実の画像をユーザーに提示することができます。

## 使用上の注意

それぞれの {{domxref("Window")}} には独自の {{domxref("Navigator")}} のインスタンスがあり、{{domxref("Window.navigator","window.navigator")}} または単に {{domxref("Window.navigator", "navigator")}} としてアクセスできます。 同時に、新しい {{domxref("XRSystem")}} インスタンスも作成され、`navigator.xr` として `navigator` インスタンスに装着されます。 `xr` プロパティが存在する場合は、それを使用して [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) にアクセスできます。

WebXR が利用可能かどうかを判断するには、次のようにします。

```js
if ("xr" in window.navigator) {
  /* WebXR can be used! */
} else {
  /* WebXR isn't available */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGL API](/ja/docs/Web/API/WebGL_API): ウェブの 2D および 3D グラフィック
- [Canvas API](/ja/docs/Web/API/Canvas_API): 簡単な 2D グラフィック API
