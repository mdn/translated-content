---
title: VRStageParameters.sizeY
slug: Web/API/VRStageParameters/sizeY
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("VRStageParameters")}} インターフェイスの **`sizeY`** 読取専用プロパティはプレイエリア境界の奥行きをメートル単位で返します．

境界は，安全性を目的として，床の平面上に軸に沿った矩形として定義されています．コンテンツは，この境界を超えてユーザが動いてしまうような動作をすべてきではありません; しかし，ユーザは境界を無視して動くこと自体は可能で，ユーザ位置がこの矩形境界の外側になることもあります．矩形の中心は，立位空間座標における (0,0,0) です．

## シンタックス

```js
var mySizeY = vrStageParametersInstance.sizeY;
```

### 値

float で表現された奥行き（メートル単位）．

## 例

```
TBD.
```

## 仕様

| Specification                                                                        | Status                   | Comment            |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#dom-vrstageparameters-sizey', 'sizeY')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VRStageParameters.sizeY")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
