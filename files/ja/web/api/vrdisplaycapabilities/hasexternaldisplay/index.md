---
title: VRDisplayCapabilities.hasExternalDisplay
slug: Web/API/VRDisplayCapabilities/hasExternalDisplay
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

{{domxref("VRDisplayCapabilities")}} インターフェイスの **`hasExternalDisplay`** 読取専用プロパティは，デバイスのプライマリディスプレイから分離した VR ディスプレイかどうかを示す {{domxref("Boolean")}} を返します．

> **メモ:** 表示中の VR コンテンツがそのデバイスの他のコンテンツを隠してしまう場合 `false` を返します．この場合，表示されないので，アプリは VR コンテンツのミラリングしようとしたり非 VR な UI を更新しようとするべきではありません．
>
> **訳注**: スマートフォンの VR を考えるとわかりやすいと思います．Oculus Rift のような PC 接続の VR 専用のディスプレイを持たない環境の場合，このプロパティは `false` になります．

## シンタックス

```js
var hasAnExternalDisplay = vrDisplayCapabilitiesInstance.hasExternalDisplay;
```

### 値

{{domxref("Boolean")}} の値．

## 例

```
TBD.
```

## 仕様

| Specification                                                                                                                | Status                   | Comment            |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#dom-vrdisplaycapabilities-hasexternaldisplay', 'hasExternalDisplay')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VRDisplayCapabilities.hasExternalDisplay")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
