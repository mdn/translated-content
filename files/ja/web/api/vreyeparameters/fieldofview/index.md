---
title: VREyeParameters.fieldOfView
slug: Web/API/VREyeParameters/fieldOfView
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("VREyeParameters")}} インターフェイスの **`fieldOfView`** 読取専用プロパティは，現在の眼の視野角(field of view)を表します．この値は瞳孔間距離(IPD)をユーザが調整するとそれに応じて変化します．

## シンタックス

```js
var curFOV = myVRDisplay.getEyeParameters('left').fieldOfView;
```

### 値

{{domxref("VRFieldOfView")}} オブジェクト．

## 例

```
TBD.
```

## 仕様

| Specification                                                                                    | Status                   | Comment            |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#dom-vreyeparameters-fieldofview', 'fieldOfView')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VREyeParameters.fieldOfView")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
