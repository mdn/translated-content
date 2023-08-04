---
title: WebRTC プロトコル入門
slug: Web/API/WebRTC_API/Protocols
---

{{DefaultAPISidebar("WebRTC")}}

この記事では、 WebRTC API の基礎となっているプロトコルについて説明します。

## ICE

[Interactive Connectivity Establishment (ICE)](https://ja.wikipedia.org/wiki/Interactive_Connectivity_Establishment) は、ウェブブラウザーをピアーと接続することを可能にするフレームワークです。さまざまな理由から、ピアー A からピアー B に直接接続することはできません。ファイアウォールをバイパスする必要があるからです。ファイアウォールは直接接続を開くことを妨害したり、端末がパブリック IP アドレスを持たない多くの場合にはユニークなアドレスを与えたり、ルーターがピアーとの直接接続を許さない場合にはサーバー経由でデータをリレーしたりします。以下で説明するように、 ICE は STUN や TURN サーバーを使用してこれを解決しています。

## STUN

[Session Traversal Utilities for NAT (STUN)](https://ja.wikipedia.org/wiki/STUN) は、パブリックアドレスを発見し、ピアーとの直接接続を妨害するルーターの制限を特定するためのプロトコルです。

クライアントがインターネット上の STUN サーバーにリクエストを送信すると、サーバーは、クライアントのパブリックアドレスと、ルーターの NAT 内部にアクセス可能かどうかを答えます。

![An interaction between two users of a WebRTC application involving a STUN server.](webrtc-stun.png)

## NAT

[ネットワークアドレス変換 (Network Address Translation; NAT)](https://ja.wikipedia.org/wiki/ネットワークアドレス変換) は、端末にパブリック IP アドレスを割り当てるために使われます。ルーターはパブリック IP アドレスを持ち、ルーターに接続されたすべての端末はプライベート IP アドレスを持ちます。リクエストが送られると、端末のプライベート IP から、特定のポートを持つルーターのパブリック IP へ変換されます。こうすることで、各端末にユニークな IP アドレスを割り当てずともインターネット上で発見することができるようになります。

ルーターによっては、ネットワーク上の端末に接続できる相手に制限をかけている場合があります。つまり、 STUN サーバーが発見できるパブリック IP アドレスを持っていたとしても、すべての相手が接続を張れるわけではないということです。このような状況では、 TURN を使う必要があります。

## TURN

NAT を使用するルーターによっては、 'Symmetric NAT' と呼ばれる制限をかけています。その場合、ルーターは過去に接続したことのあるピアーから来る接続しか受け入れることができません。

[Traversal Using Relays around NAT (TURN)](https://ja.wikipedia.org/wiki/TURN) は、 TURN サーバーとの接続を開き、そのサーバーを介してすべての情報を中継することで、 Symmetric NAT の制限を回避することを意図しています。 TURN サーバーとの接続を作成し、すべてのピアにサーバーにパケットを送信するように指示し、そのパケットはあなたに転送されます。これは明らかにオーバーヘッドを伴うので、他に方法がない場合にのみ使用します。

![An interaction between two users of a WebRTC application involving STUN and TURN servers.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](https://ja.wikipedia.org/wiki/Session_Description_Protocol) とは、解像度、フォーマット、コーデック、暗号化などのマルチメディアコンテンツを指定するための標準です。これにより、データが転送された際に双方が理解できるようになります。本来、これらはメディアコンテンツそのものではなくそのコンテンツを指定するメタデータです。

技術的には、 SDP は真のプロトコルではなく、端末間でメディアを共有する接続を記述するために使用されるデータ形式です。

SDP の文書化は、このドキュメントの範囲外です。ただし、ここで注目すべき点がいくつかあります。

### 構造

SDP は、 1 行以上の UTF-8 テキストで構成され、それぞれ 1 文字の型で始まり、等号 (`"="`) が続き、型に依存する形式で値または説明からなる構造化テキストが続きます。ある文字で始まるテキストの行は、一般に "_letter_-lines" と呼ばれています。例えば、メディアの説明を提供する行は `"m"` という型なので、それらの行は「m 行」と呼ばれます。

### 詳細情報

SDP についてより詳しく知りたい方は、以下の有用な資料をご覧ください。

- 仕様書: {{RFC(4566, "SDP: Session Description Protocol")}}
- [IANA registry of SDP parameters](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)
