---
title: RTCIdentityEvent
slug: orphaned/Web/API/RTCIdentityEvent
original_slug: Web/API/RTCIdentityEvent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCIdentityEvent`** インタフェースは、通常 {{domxref("RTCPeerConnection")}}に関連付けられたアイデンティティー・プロバイダ(IdP) を示すイベントを表現します。これは ID アサーションによって生成されたものです。イベントタイプは{{event("identityresult")}}です。

> **メモ:** Firefox implements this interface under the following name: `RTCPeerConnectionIdentityEvent.` It is likely that it will correct this name when it will unprefix {{domxref("RTCPeerConnection")}}, once spec and implementation will have been stabilized.

## プロパティ

_{{domxref("RTCIdentityEvent")}} は {{domxref("Event")}} であり, このイベントは {{domxref("Event")}} のプロパティも実装します。_

- {{domxref("RTCIdentityEvent.assertion")}} {{readOnlyInline}}
  - : 生成されたアサーションである blob を含む{{domxref("DOMString")}}を返します。

## メソッド

_{{domxref("RTCIdentityEvent")}} は {{domxref("Event")}} であり, このイベントは {{domxref("Event")}} のプロパティも実装します。具体的な_ \__{{domxref("RTCIdentityEvent")}}_ メソッドはありません。\_

## 例

```js
pc.onidentityresult = function( ev ) {
                         alert("A new identity assertion (blob: '" +
                               ev.assertion +
                               "') has been generated.");
                      }
```

## 仕様

| Specification                                                                                            | Status                           | Comment             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{ SpecName('WebRTC 1.0', '#idl-def-RTCIdentityEvent', 'RTCIdentityEvent') }} | {{Spec2('WebRTC 1.0')}} | Initial definition. |

## ブラウザ互換性

{{Compat("api.RTCIdentityEvent")}}

## See also

- [WebRTC](/ja/docs/Web/Guide/API/WebRTC)
- このイベントの通常ターゲット: {{domxref("RTCPeerConnection")}}.
