---
title: VRDisplayCapabilities.canPresent
slug: Web/API/VRDisplayCapabilities/canPresent
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("VRDisplayCapabilities")}} インターフェイスの **`canPresent`** 読取専用プロパティは，VR ディスプレイが（HMD を通じて）コンテンツを表示(present)可能かどうかの状態を [`Boolean`](/ja/docs/Web/API/Boolean) で返します．

これは，6 自由度追跡が可能だけれど {{domxref("VRDisplay.requestPresent()")}} は意味を成さない"マジックウィンドウ(magic window)"デバイスを識別するのに利用できます．`canPresent` が `false の場合`, {{domxref("VRDisplay.requestPresent()")}} の呼出しは失敗し， {{domxref("VRDisplay.getEyeParameters()")}} は `null を返すでしょう．`

## シンタックス

```js
var canIPresent = vrDisplayCapabilitiesInstance.canPresent;
```

### 値

{{domxref("Boolean")}} の値．

## 例

```
TBD.
```

## 仕様

| Specification                                                                                        | Status                   | Comment            |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#dom-vrdisplaycapabilities-canpresent', 'canPresent')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VRDisplayCapabilities.canPresent")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
