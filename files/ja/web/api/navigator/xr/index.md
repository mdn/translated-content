---
title: Navigator.xr
slug: Web/API/Navigator/xr
---

{{APIRef("WebXR Device API")}}

{{domxref("Navigator")}} インターフェイスまたは {{domxref("WorkerNavigator")}} インターフェイスによって提供される **`xr`** 読み取り専用プロパティは、[WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) へのアクセスに使用できる {{domxref("XRSystem")}} オブジェクトを返します。

## 構文

```
const xr = navigator.xr
```

### 値

現在のコンテキストで [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) とのインターフェイスに使用する {{domxref("XRSystem")}} オブジェクト。 これを使用して、拡張現実や仮想現実の画像をユーザーに提示することができます。

## 使用上の注意

各 {{domxref("Window")}} には独自の {{domxref("Navigator")}} のインスタンスがあり、{{domxref("Window.navigator","window.navigator")}} または単に {{domxref("Window.navigator", "navigator")}} としてアクセスできます。 同時に、新しい {{domxref("XRSystem")}} インスタンスも作成され、{{domxref("Navigator.xr", "navigator.xr")}} として `navigator` インスタンスにアタッチされます。 `xr` プロパティが存在する場合は、それを使用して [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) にアクセスできます。

WebXR が利用可能かどうかを判断するには、次のようにします。

```js
if ("xr" in window.navigator) {
  /* WebXR can be used! */
} else {
  /* WebXR isn't available */
}
```

## 仕様

| 仕様                                                                                 | 状態                     | コメント |
| ------------------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName("WebXR","#navigator-xr-attribute","Navigator.xr")}} | {{Spec2("WebXR")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.xr")}}

## 関連情報

- [WebGL API](/ja/docs/Web/API/WebGL_API): ウェブの 2D および 3D グラフィック
- [Canvas API](/ja/docs/Web/API/Canvas_API): 簡単な 2D グラフィック API
