---
title: VRStageParameters
slug: Web/API/VRStageParameters
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

[WebVR API](/ja/docs/Web/API/WebVR_API) の **`VRStageParameters`** インターフェイスは，ルームスケール体験に対応しているデバイス用にステージエリアを記述する値を表現しています．

このインターフェイスには {{domxref("VRDisplay.stageParameters")}} プロパティを通じてアクセスできます．

## プロパティ

- {{domxref("VRStageParameters.sittingToStandingTransform")}} {{readonlyInline}}
  - : {{domxref("VRDisplay.getPose()")}}/{{domxref("VRDisplay.getImmediatePose()")}} で返される着席(sitting-space)位置を立位(standing-space)位置にするための変換行列を含んでいます．
- {{domxref("VRStageParameters.sizeX")}} {{readonlyInline}}
  - : _プレイエリア境界の幅を返します．単位はメートルです．_
- {{domxref("VRStageParameters.sizeY")}} {{readonlyInline}}
  - : _プレイエリア境界の奥行きを返します．単位はメートルです．_

## 例

```
TBD.
```

## 仕様

| Specification                                                                                        | Status                   | Comment            |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#interface-vrstageparameters', 'VRStageParameters')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VRStageParameters")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
