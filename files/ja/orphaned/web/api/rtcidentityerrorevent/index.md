---
title: RTCIdentityErrorEvent
slug: orphaned/Web/API/RTCIdentityErrorEvent
original_slug: Web/API/RTCIdentityErrorEvent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCIdentityErrorEvent`** インタフェースは、通常 {{domxref("RTCPeerConnection")}} に関連付けられたアイデンティティー・プロバイダ(IdP) を示すイベントを表現します。これは、?遭遇したエラーを持ちます。{{event("idpassertionerror")}} と{{event("idpvalidationerror")}}の 2 つのイベントタイプを持ちます。

> **メモ:** Firefox implements this interface under the following name: `RTCPeerConnectionIdentityErrorEvent.` It is likely that it will correct this name when it will unprefix {{domxref("RTCPeerConnection")}}, once spec and implementation will have been stabilized.

## プロパティ

_{{domxref("RTCIdentityErrorEvent")}} は {{domxref("Event")}}であり、このイベントは{{domxref("Event")}} のプロパティも実装します。_

- {{domxref("RTCIdentityErrorEvent.idp")}} {{readonlyinline}}
  - : エラーレスポンスを生成したアイデンティティー・プロバイダ(idp)の{{Glossary("domain name")}} を表す{{domxref("DOMString")}}です。
- {{domxref("RTCIdentityErrorEvent.loginUrl")}} {{readonlyinline}}
  - : 認証が完了可能な URL を示す{{domxref("DOMString")}} です。null の値をとることもあり、アイデンティティー・プロバイダ(idp)から提供されます。
- {{domxref("RTCIdentityErrorEvent.protocol")}} {{readonlyinline}}
  - : 利用されている Idp プロトコルを示す{{domxref("DOMString")}}です。

## メソッド

_{{domxref("RTCIdentityErrorEvent")}} は {{domxref("Event")}}であり、このイベントは{{domxref("Event")}} のプロパティも実装します。具体的な_{{domxref("RTCIdentityErrorEvent")}} メソッドはありません。\_\_

## 例

```js
pc.onidpassertionerror = function( ev ) {
                           alert("The idp named '" +
                                 ev.idp +
                                 "' encountered an error " +
                                 "while generating an assertion.");
                         }
```

## 仕様

| Specification                                                                                                        | Status                           | Comment             |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{ SpecName('WebRTC 1.0', '#idl-def-RTCIdentityErrorEvent', 'RTCIdentityErrorEvent') }} | {{Spec2('WebRTC 1.0')}} | Initial definition. |

## ブラウザ互換性

{{Compat("api.RTCIdentityErrorEvent")}}

## See also

- [WebRTC](/ja/docs/Web/Guide/API/WebRTC)
- このイベントの通常ターゲット: {{domxref("RTCPeerConnection")}}.
