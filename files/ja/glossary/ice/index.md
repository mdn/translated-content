---
title: ICE
slug: Glossary/ICE
tags:
  - CodingScripting
  - 用語集
  - ネットワーク
  - プロトコル
  - WebRTC
translation_of: Glossary/ICE
---
**ICE** (_Interactive Connectivity Establishment_) は、ネットワークトポロジー (通常は音声および/またはビデオのチャット) に関係なく、2 つのピアを互いに接続するための {{glossary("WebRTC")}} に (他の技術があまたある中で) 使用されるフレームワークです。 このプロトコルを使用すると、ネットワークアドレストランスレーター ({{glossary("NAT")}}) を使用してそれぞれのローカルネットワーク上の他のデバイスとグローバル IP アドレスを共有していても、2 つのピアが相互に接続を見つけて確立することができます。

フレームワークのアルゴリズムは、以下のオプションを順番に試して、2つのピアを接続するために最低遅延のパスを探します。

1.  直接 UDP 接続（この場合かつ、この場合のみ、{{glossary("STUN")}} サーバーを使用してピアのネットワーク対向アドレスを検出します）
2.  HTTP ポート経由の直接 TCP 接続
3.  HTTPS ポート経由の直接 TCP 接続
4.  リレー/{{glossary("TURN")}} サーバー経由の間接接続 (たとえば、NAT トラバーサルをブロックするファイアウォールの背後にピアがいる場合など、直接接続が失敗した場合)

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)、ICE を使用する主要なウェブ関連プロトコル
- [WebRTC プロトコル](/ja/docs/Web/API/WebRTC_API/Protocols)
- {{rfc("5245")}}、ICE の IETF 仕様書 (英語)
- {{domxref("RTCIceCandidate")}}、ICE 候補を表すインターフェイス
