---
title: VRDisplayEvent
slug: Web/API/VRDisplayEvent
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

[WebVR API](/ja/docs/Web/API/WebVR_API) の **`VRDisplayEvent`** インターフェイスは、 WebVR 関連イベントのイベントオブジェクトを表します ([WebVR ウインドウ拡張機能のリスト](/ja/docs/Web/API/WebVR_API#Window)を参照)。

## コンストラクタ

- {{domxref("VRDisplayEvent.VRDisplayEvent()")}}
  - : `VRDisplayEvent` オブジェクトのインスタンスを生成します。

## プロパティ

_`VRDisplayEvent` は、親オブジェクト {{domxref("Event")}} からプロパティも継承します。_

- {{domxref("VRDisplayEvent.display")}} {{readonlyInline}}
  - : このイベントに関連付けられた {{domxref("VRDisplay")}} 。
- {{domxref("VRDisplayEvent.reason")}} {{readonlyInline}}
  - : イベントが発生したヒューマンリーダブルな理由。

## 例

```js
window.addEventListener('vrdisplaypresentchange', function(e) {
  console.log('Display ' + e.display.displayId + ' presentation has changed. Reason given: ' + e.reason + '.');
})
```

## 仕様

| 仕様                                                                                             | ステータス                   | 備考     |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName('WebVR 1.1', '#interface-vrdisplayevent', 'VRDisplayEvent')}} | {{Spec2('WebVR 1.1')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.VRDisplayEvent")}}

## 関連項目

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API)
- [MozVr.com](http://mozvr.com/) — demos, downloads, and other resources from the Mozilla VR team.
