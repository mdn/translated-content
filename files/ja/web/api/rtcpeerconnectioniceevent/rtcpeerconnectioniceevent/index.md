---
title: RTCPeerConnectionIceEvent()
slug: Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("WebRTC")}}

**`RTCPeerConnectionIceEvent()`** コンストラクターは、新しい {{domxref("RTCPeerConnectionIceEvent")}} オブジェクトを作成します。

## 構文

```js-nolint
new RTCPeerConnectionIceEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字を区別し、ブラウザーは常に `icecandidate` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `candidate`
      - : {{domxref("RTCIceCandidate")}} で、そのイベントが関係する ICE の候補を表します。
        もし `null` ならば、そのイベントは候補の収集の終わりを示します。
    - `url`
      - : 文字列で、候補を収集するために使用された STUN または TURN サーバーの URL を保持します。
        もし候補が {{Glossary("STUN")}} または {{Glossary("TURN")}} サーバーによって収集されていない場合、この値は `null` でなければならず、またこれは既定値です。

### 返値

提供されたオプションを指定して構成された、新しい {{domxref("RTCPeerConnectionIceEvent")}} オブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
- このイベントの通常ターゲット: {{domxref("RTCPeerConnection")}}
