---
title: VRDisplayCapabilities.maxLayers
slug: Web/API/VRDisplayCapabilities/maxLayers
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("VRDisplayCapabilities")}} インターフェイスの **`maxLayers`** 読取専用プロパティは，その VR ディスプレイが同時に表示できる {{domxref("VRLayer")}} の最大値を示す数値を返します（例えば {{domxref("Display.requestPresent()")}} が受け取ることのできる配列の最大長です)．

## シンタックス

```js
var maximumLayers = vrDisplayCapabilitiesInstance.maxLayers;
```

### 値

数値であり，{{domxref("VRDisplayCapabilities.canPresent")}} が `true の場合は1でなければなりません，`それ以外は 0 です．

## 例

```
TBD.
```

## 仕様

| Specification                                                                                        | Status                   | Comment            |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#dom-vrdisplaycapabilities-maxlayers', 'maxLayers')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VRDisplayCapabilities.maxLayers")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
