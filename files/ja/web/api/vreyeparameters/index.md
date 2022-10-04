---
title: VREyeParameters
slug: Web/API/VREyeParameters
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

[WebVR API](/ja/docs/Web/API/WebVR_API) の **`VREyeParameters`** インターフェイスは，指定した眼のためにシーンを正しくレンダリングするためのすべての情報（視界(field of view)の情報を含む）を表現します．

このインターフェイスは {{domxref("VRDisplay.getEyeParameters()")}} メソッドを通じてアクセスできます．

## プロパティ

- {{domxref("VREyeParameters.offset")}} {{readonlyInline}}
  - : _ユーザの両眼の中心点から指定した眼の中心へのオフセット量を示します．単位はメートルです．_
- {{domxref("VREyeParameters.fieldOfView")}} {{readonlyInline}}
  - : _指定した眼の現在の視界(FOV)を示しています．これはユーザが瞳孔間距離(IPD)の調整することによって変化します．_
- {{domxref("VREyeParameters.renderWidth")}} {{readonlyInline}}
  - : それぞれの眼のビューポートの推奨レンダーターゲット幅を示します．単位はピクセルです．
- {{domxref("VREyeParameters.renderHeight")}} {{readonlyInline}}
  - : それぞれの眼のビューポートの推奨レンダーターゲット高さを示します．単位はピクセルです．

## 例

```
TBD.
```

## 仕様

| Specification                                                                    | Status                   | Comment            |
| -------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#vreyeparameters', 'VREyeParameters')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VREyeParameters")}}

## See also

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
