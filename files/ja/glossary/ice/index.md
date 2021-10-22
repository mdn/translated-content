---
title: ICE
slug: Glossary/ICE
tags:
  - CodingScripting
  - Glossary
  - Networking
  - Protocols
  - WebRTC
translation_of: Glossary/ICE
---
<p><strong>ICE</strong> (<em>Interactive Connectivity Establishment</em>) は、ネットワークトポロジー（通常は音声および/またはビデオのチャット）に関係なく、2つのピアを互いに接続するための {{glossary("WebRTC")}}（他のテクノロジのあまたある中で）に使用されるフレームワークです。 このプロトコルを使用すると、ネットワークアドレストランスレーター（{{glossary("NAT")}}）を使用してそれぞれのローカルネットワーク上の他のデバイスとグローバル IP アドレスを共有していても、2つのピアが相互に接続を見つけて確立することができます。</p>

<p>フレームワークのアルゴリズムは、以下のオプションを順番に試して、2つのピアを接続するために最低遅延のパスを探します。</p>

<ol>
 <li>直接 UDP 接続（この場合かつ、この場合のみ、{{glossary("STUN")}} サーバーを使用してピアのネットワーク対向アドレスを検出します）</li>
 <li>HTTP ポート経由の直接 TCP 接続</li>
 <li>HTTPS ポート経由の直接 TCP 接続</li>
 <li>リレー/{{glossary("TURN")}} サーバー経由の間接接続（たとえば、NAT トラバーサルをブロックするファイアウォールの背後にピアがいる場合など、直接接続が失敗した場合）</li>
</ol>

<h2 id="Learn_more" name="Learn_more">より詳しく知る</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li><a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a>、ICE を使用する主要なウェブ関連プロトコル</li>
 <li><a href="/ja/docs/Web/API/WebRTC_API/Architecture/Protocols">WebRTC プロトコル</a></li>
</ul>

<h3 id="Technical_reference" name="Technical_reference">技術文書</h3>

<ul>
 <li>{{rfc("5245")}}、ICE の IETF 仕様書（英語）</li>
 <li>{{domxref("RTCIceCandidate")}}、ICE 候補を表すインターフェイス</li>
</ul>
