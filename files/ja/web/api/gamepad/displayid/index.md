---
title: Gamepad.displayId
slug: Web/API/Gamepad/displayId
---

{{DefaultAPISidebar("WebVR API")}}{{SeeCompatTable}}

{{domxref("Gamepad")}} インターフェイスの **`displayId`** 読取専用プロパティは _{{domxref("VRDisplay")}}_ に関連付けられた* {{domxref("VRDisplay.displayId")}} を返します — `VRDisplay` は表示されるシーンをそのゲームパッドで操作します．*

## 構文

```js
var myDisplayId = gamepadInstance.displayId;
```

### 値

関連付けされている {{domxref("VRDisplay.displayId")}} を表す long 値です．

## 例

```
window.addEventListener("gamepadconnected", function(e) {
  if(!e.gamepad.displayId) {
    console.log('Gamepad connected');
  } else {
    console.log('Gamepad connected, associated with VR display ' + e.gamepad.displayId);
  }
});
```

## 仕様書

| 仕様                                                                                         | ステータス               | 備考     |
| -------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('WebVR', '#gamepad-getvrdisplays-attribute', 'displayId')}} | {{Spec2('WebVR')}} | 初回翻訳 |

## ブラウザーの互換性

{{Compat("api.Gamepad.displayId")}}

## 関連情報

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
