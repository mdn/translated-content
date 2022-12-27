---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

[WebVR API](/ja/docs/Web/API/WebVR_API) の **`VRDisplayCapabilities`** インターフェイスは {{domxref("VRDisplay")}} の利用可能な機能を示しています — この機能は，例えば位置情報を返すことが可能か，といった VR デバイスの動作可能テストに使うことができます．

このインターフェイスには {{domxref("VRDisplay.capabilities")}} プロパティを通じてアクセスできます．

## プロパティ

- {{domxref("VRDisplayCapabilities.canPresent")}} {{readonlyInline}}
  - : VR ディスプレイが（HMD を通じて）コンテンツを表示(present)可能かどうかの状態を {{domxref("Boolean")}} で返します．
- {{domxref("VRDisplayCapabilities.hasExternalDisplay")}} {{readonlyInline}}
  - : デバイスのプライマリディスプレイから分離した VR ディスプレイかどうかを示す {{domxref("Boolean")}} を返します．
- {{domxref("VRDisplayCapabilities.hasOrientation")}} {{deprecated_inline()}} {{readonlyInline}}
  - : VR ディスプレイがトラッキング可能で向き情報を返すことができるかを示す {{domxref("Boolean")}} を返します．
- {{domxref("VRDisplayCapabilities.hasPosition")}} {{readonlyInline}}
  - : VR ディスプレイがトラッキング可能で位置情報を返すことができるかどうかを示す {{domxref("Boolean")}} を返します．
- {{domxref("VRDisplayCapabilities.maxLayers")}} {{readonlyInline}}
  - : VR ディスプレイが同時に表示できる {{domxref("VRLayer")}} の最大値を示す数値を返します (例えば {{domxref("VRDisplay.requestPresent()")}} が受け取ることのできる配列の最大長です．)

## 例

```js
function reportDisplays() {
  navigator.getVRDisplays().then(function(displays) {
    for(var i = 0; i < displays.length; i++) {
      var cap = displays[i].capabilities;
      // cap is a VRDisplayCapabilities object
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>Display ' + (i+1) + '</strong>'
                   + '<br>VR Display ID: ' + displays[i].displayId
                   + '<br>VR Display Name: ' + displays[i].displayName
                   + '<br>Display can present content: ' + cap.canPresent
                   + '<br>Display is separate from the computer\'s main display: ' + cap.hasExternalDisplay
                   + '<br>Display can return position info: ' + cap.hasPosition
                   + '<br>Display can return orientation info: ' + cap.hasOrientation
                   + '<br>Display max layers: ' + cap.maxLayers;
      list.appendChild(listItem);
    }
  });
}
```

## 仕様

| Specification                                                                                                        | Status                       | Comment            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('WebVR 1.1', '#interface-vrdisplaycapabilities', 'VRDisplayCapabilities')}} | {{Spec2('WebVR 1.1')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VRDisplayCapabilities")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
