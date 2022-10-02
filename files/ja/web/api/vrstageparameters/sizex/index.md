---
title: VRStageParameters.sizeX
slug: Web/API/VRStageParameters/sizeX
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("VRStageParameters")}} インターフェイスの **`sizeX`** 読取専用プロパティは，プレイエリア境界の幅をメートル単位で返します．

境界は，安全性を目的として，床の平面上に軸に沿った矩形として定義されています．コンテンツは，この境界を超えてユーザが動いてしまうような動作をすべてきではありません; しかし，ユーザは境界を無視して動くこと自体は可能で，ユーザ位置がこの矩形境界の外側になることもあります．矩形の中心は，立位空間座標における (0,0,0) です．

## シンタックス

```js
var mySizeX = vrStageParametersInstance.sizeX;
```

### 値

float で表現された幅（メートル単位）．

## 例

```
TBD.
```

## 仕様

| Specification                                                                        | Status                   | Comment            |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#dom-vrstageparameters-sizex', 'sizeX')}} | {{Spec2('WebVR')}} | Initial definition |

## 互換性

{{Compat("api.VRStageParameters.sizeX")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
