---
title: VRStageParameters.sittingToStandingTransform
slug: Web/API/VRStageParameters/sittingToStandingTransform
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("VRStageParameters")}} インターフェイスの **`sittingToStandingTransform`** 読取専用プロパティは，{{domxref("VRDisplay.getPose()")}}/{{domxref("VRDisplay.getImmediatePose()")}} i で取得した「立った状態の位置」から「座った状態の位置」へと変換する行列を持っています．

## シンタックス

```js
var myTransform = vrStageParametersInstance.sittingToStandingTransform;
```

### 値

4x4 の変換行列を成分として持つ 16 要素の {{domxref("Float32Array")}} です．

## 例

```
TBD.
```

## 仕様

| Specification                                                                                                                                | Status                   | Comment            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#dom-vrstageparameters-sittingtostandingtransform', 'sittingToStandingTransform')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VRStageParameters.sittingToStandingTransform")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
