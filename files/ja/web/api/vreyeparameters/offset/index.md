---
title: VREyeParameters.offset
slug: Web/API/VREyeParameters/offset
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("VREyeParameters")}} インターフェイスの **`offset`** 読取専用プロパティは，ユーザの両眼の中心からのオフセット量を表します．単位はメートルです．

この値は，ユーザの瞳孔間距離(IPD)の半分になっているべきですが，指定した側の眼のレンズの中心とヘッドセットの中心との距離を表す場合があります．

## シンタックス

```js
var myEyeTranslation = myVRDisplay.getEyeParameters('left').offset;
```

### 値

{{domxref("Float32Array")}}．

> **メモ:** _左目の値は負で，右目の場合は正の値になります．_

## 例

```
TBD.
```

## 仕様

| Specification                                                                        | Status                   | Comment            |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#dom-vreyeparameters-offset', 'offset')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VREyeParameters.offset")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
