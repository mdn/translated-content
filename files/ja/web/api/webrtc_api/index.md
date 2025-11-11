---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication、ウェブリアルタイムコミュニケーション) は、ウェブアプリケーションやウェブサイトにて、仲介を必要とせずにブラウザー間で直接、任意のデータの交換や、キャプチャした音声／映像ストリームの送受信を可能にする技術です。 WebRTC に関する一連の標準規格は、ユーザーがプラグインやサードパーティ製ソフトウェアをインストールすることなく、ピアーツーピアーにて、データ共有や遠隔会議を実現することを可能にします。

WebRTC は、相互に関連したいくつかの API とプロトコルで構成されており、これらが連携してこれを実現しています。ここで紹介するドキュメントでは、WebRTC の基礎知識、データ接続とメディア接続、両方の設定方法と、使用方法などを理解するのに役立ちます。

## WebRTC の概念と使い方

WebRTC は複数の目的に対応しています。[メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API) と一緒に使用することで、音声・ビデオ会議、ファイル交換、画面共有、ID 管理、{{Glossary("DTMF")}} (タッチトーンダイヤル信号) の送信サポートを含む旧来の電話システムとのインターフェイスなど、強力なマルチメディア機能をウェブに提供します。ピアー間の接続は、特別なドライバーやプラグインを必要とせずに行うことができ、多くの場合、中間サーバーを介さずに行うことができます。

2 つのピアー間の接続は {{DOMxRef("RTCPeerConnection")}} インターフェイスで表現されます。接続が確立され、`RTCPeerConnection` を使用して開かれると、メディアストリーム ({{DOMxRef("MediaStream")}}) やデータチャンネル ({{DOMxRef("RTCDataChannel")}}) を接続に追加することができます。

メディアストリームは、メディア情報の任意の数のトラックで構成することができます。トラックは、{{DOMxRef("MediaStreamTrack")}} インターフェイスに基づいたオブジェクトで表され、音声、映像、テキスト（字幕やチャプター名など）を含むメディアデータのいくつかの型のうちの 1 つを含むことができます。ほとんどのストリームは少なくとも 1 つの音声トラックと映像トラックで構成されており、ライブメディアや保存されたメディア情報（ストリーミングされた動画など）の送受信に使用することができます。

また、2 つのピアー間の接続を使用して、{{DOMxRef("RTCDataChannel")}} インターフェイスを使用して任意のバイナリーデータを交換することもできます。これは、バックチャンネル情報、メタデータ交換、ゲームステータスパケット、ファイル転送、あるいはデータ転送のためのプライマリーチャンネルとして使用することができます。

### 相互運用性

WebRTC は現行のブラウザーでは概ね対応していますが、一部非互換性も残っています。 [adapter.js](https://github.com/webrtcHacks/adapter) ライブラリーは、これらの非互換性からアプリを保護するための補助的なものです。

## WebRTC リファレンス

WebRTC は、様々なタスクを達成するために連携して動作する複数のインターフェイスを提供しているため、以下のリストのインターフェイスをカテゴリー別に分けています。アルファベット順のリストはサイドバーをご覧ください。

### 接続の設定と管理

以下のインターフェイス、辞書、型は、WebRTC 接続のセットアップ、オープン、管理に使用します。これには、ピアーメディア接続、データチャネルおよび、それぞれのピアーが双方向メディア接続のために最適な設定を選択する機能に関する情報をやりとりするためのインターフェイスが含まれています。

#### インターフェイス

- {{DOMxRef("RTCPeerConnection")}}
  - : ローカルコンピュータとリモートピアー間の WebRTC 接続を表します。これは、 2 つのピアー間のデータの効率的なストリーミングを処理するために使用されます。
- {{DOMxRef("RTCDataChannel")}}
  - : 接続の 2 つのピアー間の双方向データチャネルを表します。
- {{DOMxRef("RTCDataChannelEvent")}}
  - : {{DOMxRef("RTCDataChannel")}} を {{DOMxRef("RTCPeerConnection")}} に装着している間に発生するイベントを表します。このインターフェイスで送信されるイベントは、データチャネル {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} のみです。
- {{DOMxRef("RTCSessionDescription")}}
  - : セッションの引数を表します。各 `RTCSessionDescription` は、オファー/アンサーネゴシエーションプロセスの、どの部分を記述するかを示す記述型 ({{DOMxRef("RTCSessionDescription.type", "type")}}) と、セッションの {{Glossary("SDP")}} 記述子で構成されます。
- {{DOMxRef("RTCStatsReport")}}
  - : 接続または接続上の個々のトラックの統計情報の詳細を提供します。{{DOMxRef("RTCPeerConnection.getStats()")}} を呼び出すと報告を取得できます。
- {{DOMxRef("RTCIceCandidate")}}
  - : {{DOMxRef("RTCPeerConnection")}} を確立するための {{Glossary("ICE")}}(インタラクティブ接続確立) サーバーの候補を表します。
- {{DOMxRef("RTCIceTransport")}}
  - : {{Glossary("ICE")}} トランスポートに関する情報を表します。
- {{DOMxRef("RTCPeerConnectionIceEvent")}}
  - : ターゲットとの {{Glossary("ICE")}} 候補 (通常は {{DOMxRef("RTCPeerConnection")}}) に関連して発生するイベントを表します。この型のイベントは {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 1 つだけです。
- {{DOMxRef("RTCRtpSender")}}
  - : {{DOMxRef("RTCPeerConnection")}} 上の {{DOMxRef("MediaStreamTrack")}} のデータのエンコードと送信を管理します。
- {{DOMxRef("RTCRtpReceiver")}}
  - : {{DOMxRef("RTCPeerConnection")}} 上の {{DOMxRef("MediaStreamTrack")}} のデータの受信とデコードを管理します。
- {{DOMxRef("RTCTrackEvent")}}
  - : このインターフェイスは {{domxref("RTCPeerConnection.track_event", "track")}} イベントを表すもので、 {{DOMxRef("RTCRtpReceiver")}} オブジェクトが {{DOMxRef("RTCPeerConnection")}} オブジェクトに追加されたことを示すトラックイベントを表現するために使用されるインターフェイスで、新しい着信 (incoming) {{DOMxRef("MediaStreamTrack")}} が生成され、 `RTCPeerConnection` に追加されたことを示します。
- {{DOMxRef("RTCSctpTransport")}}
  - : Stream Control Transmission Protocol (**{{Glossary("SCTP")}}**) トランスポートを説明する情報を提供し、 {{DOMxRef("RTCPeerConnection")}} のすべての[`RTCPeerConnection`](/ja/docs/Web/API/RTCPeerConnection) のデータチャネルの SCTP パケットが送受信される Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) トランスポートにアクセスする方法も提供します。

#### イベント

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - : データチャネルの {{domxref("RTCDataChannel.bufferedAmount", "bufferedAmount")}} プロパティで示される、現在バッファリングされているデータ量が、 {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}} で指定されたチャンネルの最小バッファリングデータサイズ以下に減少したときに発行されます。
- {{domxref("RTCDataChannel.close_event", "close")}}
  - : データチャネルを閉じる処理が完了し、現在 `closed` の状態です。この点で、基礎となるデータトランスポートは完全に閉じられています。 `closing` イベントを監視することで、閉じる処理が完了する*前に*通知を受けることができます。
- {{domxref("RTCDataChannel.closing_event", "closing")}}
  - : `RTCDataChannel` が `closing` 状態に遷移し、まもなく閉じられることが示された。 `close` イベントを監視することで、閉じる処理の完了を検出することができます。
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : {{domxref("RTCPeerConnection.connectionState", "connectionState")}} でアクセスできる接続の状態が変更された。
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : リモートピアーが新しいデータチャネルを開いた後、新しい {{domxref("RTCDataChannel")}} が利用可能です。このイベント型は {{domxref("RTCDataChannel")}} です。
- {{domxref("RTCDataChannel.error_event", "error")}}
  - : {{domxref("RTCErrorEvent")}} で、データチャネルでエラーが発生したことを示します。
- {{domxref("RTCDtlsTransport.error_event", "error")}}
  - : {{domxref("RTCErrorEvent")}} で、 {{domxref("RTCDtlsTransport")}} においてエラーが発生したことを示します。このエラーは `dtls-failure` または `fingerprint-failure` のどちらかになります。
- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - : {{domxref("RTCIceTransport")}} の収集状態が変更されました。
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : {{domxref("RTCPeerConnectionIceEvent")}} は、ローカルデバイスがローカルピアーに追加する必要がある新しい ICE 候補を特定したときに、 {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}を呼び出して送信されるものです。
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : ICE 候補の収集中にエラーが発生したことを示す{{domxref("RTCPeerConnectionIceErrorEvent")}}。
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : ICE 接続の状態（{{domxref("RTCPeerConnection.iceconnectionstate", "iceconnectionstate")}} プロパティで得られる）が変化したときに {{domxref("RTCPeerConnection")}} に送られます。
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : ICEの収集状態（{{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}} プロパティで得られる）が変化したときに {{domxref("RTCPeerConnection")}} に送られます。
- {{domxref("RTCDataChannel.message_event", "message")}}
  - : データチャネルでメッセージを受信した。このイベントの型は {{domxref("MessageEvent")}} です。
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : domxref("RTCPeerConnection.createOffer", "createOffer()")}} に続いて {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} を呼び出し、`RTCPeerConnection`にセッション交渉を行う必要があることを通知します。
- {{domxref("RTCDataChannel.open_event", "open")}}
  - : `RTCDataChannel` の基礎となるデータトランスポートが正常にオープンまたは再オープンされました。
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - : イベントが発行された `RTCIceTransport` において、現在選択されている ICE 候補のペアが変更されました。
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : `track` イベントは {{domxref("RTCTrackevent")}} の型で、メディアのストリーミングの交渉が成功した後に新しいトラックが接続に追加されると {{domxref("RTCPeerConnection")}} に送信されます。
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : ピアー接続の {{domxref("RTCPeerConnection.signalingstate", "signalingstate")}} が変更されたときに送信されます。これは {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} または {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} のいずれかが呼び出された結果発生するものです。
- {{domxref("RTCDtlsTransport.statechange_event", "statechange")}}
  - : `RTCDtlsTransport` の状態が変化した。
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - : `RTCIceTransport` の状態が変化した。
- {{domxref("RTCSctpTransport.statechange_event", "statechange")}}
  - : `RTCSctpTransport` の状態が変化した。
- {{DOMxRef("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}
  - : エンコードされた動画や音声のフレームは、ワーカーで変換ストリームを使用して処理する準備ができています。

#### 型

- {{DOMxRef("RTCSctpTransport.state")}}
  - : {{DOMxRef("RTCSctpTransport")}} インスタンスの状態を示します。

### アイデンティティとセキュリティ

これらの API は、セキュリティとアイデンティティを管理し、ユーザーの接続を認証するために使われます。

- {{DOMxRef("RTCIdentityProvider")}}
  - : ユーザーエージェントが ID アサーションの生成または検証を要求できるようにします。
- {{DOMxRef("RTCIdentityAssertion")}}
  - : 現在の接続のリモートピアーの ID を表します。まだピアーが設定されておらず、検証されていない場合、このインターフェイスは `null` を返します。一度設定すると変更することはできません。
- {{DOMxRef("RTCIdentityProviderRegistrar")}}
  - : ID プロバイダー (idP) を登録します。
- {{DOMxRef("RTCCertificate")}}
  - : {{DOMxRef("RTCPeerConnection")}} が認証に使用する証明書を表します。

### 電話回線

これらのインターフェイスとイベントは、公衆交換電話網 (PSTN) との相互作用に関連するものです。これらは主に、トーンダイヤルの音、またはその音を表すパケットをネットワーク経由でリモートピアーに送信するために使用されます。

#### インターフェイス

- {{DOMxRef("RTCDTMFSender")}}
  - : {{DOMxRef("RTCPeerConnection")}} のデュアルトーン多周波 (DTMF) シグナリングのエンコーディングと送信を管理します。
- {{DOMxRef("RTCDTMFToneChangeEvent")}}
  - : DTMF トーンの開始または終了を示すために {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}} イベントで使用されます。このイベントは（特に明記されている場合を除き）バブリングせず、（特に明記されている場合を除き）キャンセルもできません。

#### イベント

- {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}}
  - : 新しい {{Glossary("DTMF")}} トーンが接続上で再生され始めたか、 `RTCDTMFSender` の {{domxref("RTCDTMFSender.toneBuffer", "toneBuffer")}} にある最後のトーンが送信されてバッファが空になったか、どちらかです。このイベントの型は {{domxref("RTCDTMFToneChangeEvent")}} です。

### エンコードされた変換

これらのインターフェイスとイベントは、ワーカーで実行する変換ストリームを使用して、入出力されるエンコード方式の動画と音声フレームを処理するために使用します。

#### インターフェイス

- {{DOMxRef("RTCRtpScriptTransform")}}
  - : ワーカーで実行する変換ストリームを RTC パイプラインに挿入するインターフェイスです。
- {{DOMxRef("RTCRtpScriptTransformer")}}
  - : メインスレッドからオプションを渡す `RTCRtpScriptTransform` に対応するワーカーサイドのもので、 {{DOMxRef("TransformStream")}} を通してエンコードされたフレームをパイプするために使用することができる読み取り可能なストリームと書き込み可能なストリームも一緒に渡します。
- {{DOMxRef("RTCEncodedVideoFrame")}}
  - : RTC パイプラインで変換されるエンコードされた動画フレームを表します。
- {{DOMxRef("RTCEncodedAudioFrame")}}
  - : RTC パイプラインで変換されるエンコードされた音声フレームを表します。

#### プロパティ

- {{DOMxRef("RTCRtpReceiver.transform")}}
  - : エンコードされた映像および音声フレームが受信パイプラインに変換ストリームを挿入するために使用するプロパティです。
- {{DOMxRef("RTCRtpSender.transform")}}
  - : エンコードされた映像および音声フレームの送信パイプラインに変換ストリームを挿入するために使用するプロパティです。

#### イベント

- {{DOMxRef("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}
  - : RTC 変換がワーカーで実行する準備ができているか、エンコードされた動画や音声フレームを処理する準備ができています。

## ガイド

- [WebRTC プロトコル入門](/ja/docs/Web/API/WebRTC_API/Protocols)
  - : この記事では、WebRTC API の基礎となっているプロトコルについて説明しています。
- [WebRTC 接続](/ja/docs/Web/API/WebRTC_API/Connectivity)
  - : WebRTC 接続がどのように動くかを説明するガイド。どのように様々なプロトコルとインターフェイスが協調して用いられることで強力なコミュニケーションアプリを構築することができるかについて説明しています。
- [WebRTC セッションのライフタイム](/ja/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTCは任意のデータ、音声、映像またはそれらの組み合わせをやりとりするピアーツーピアー通信をブラウザーアプリケーション上に構築することができます。この記事では、接続の確立から不要となり閉じられるまでの WebRTC のライフタイムについて見ていきます。
- [接続の確立: 完全なネゴシエーションパターン](/ja/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **完全なネゴシエーション**はシグナリングプロセスが従うべき推奨されるデザインパターンです。二者を区別するためにたくさんのコーディングを必要とせずに、双方をオファー側とアンサー側のどちらにもなれることを可能にするネゴシエーションにおける透過性を提供します。
- [シグナリングと双方向映像通話](/ja/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : 以前の例で作成したウェブソケットベースのチャットシステムに参加者同士の映像通話機能を追加するチュートリアルと例。チャットサーバーのウェブソケット接続は WebRTC のシグナリングとして用いられます。
- [WebRTC で用いられるコーデック](/ja/docs/Web/Media/Formats/WebRTC_codecs)
  - : WebRTC を用いる上でブラウザーが対応すべきコーデックと様々な有名なブラウザーで対応されている追加的なコーデックについてのガイド。必要に応じたベストなコーデックの選び方についてのガイドも含みます。
- [WebRTC データチャネルを使う](/ja/docs/Web/API/WebRTC_API/Using_data_channels)
  - : このガイドでは、ピアー接続と関連する {{DOMxRef("RTCDataChannel")}} を使用して、2 つのピアー間で任意のデータを交換する方法について説明します。
- [WebRTC での DTMF の使用](/ja/docs/Web/API/WebRTC_API/Using_DTMF)
  - : {{DOMxRef("RTCDTMFSender")}} インターフェイスを用いた DTMF トーン送信サポートを含む、旧式の電話システムとのゲートウェイとやりとりを行うための WebRTC 対応について、このガイドでは、その方法を説明します。
- [WebRTC エンコード変換](/ja/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : このガイドでは、ワーカーで実行する {{DOMxRef("TransformStream")}} を使用して、ウェブアプリケーションが入出力する WebRTCのエンコードされた映像および音声フレームを変更する方法を示します。

## チュートリアル

- [WebRTC adapter.js を使用した互換性の向上](#相互運用性)
  - : WebRTC 組織は、異なるブラウザーの WebRTC 実装における互換性の問題を回避するため [adapter.js](https://github.com/webrtc/adapter/) を提供しています。このアダプターは JavaScript のはシム ({{Glossary("Shim")}}) で、あなたのコードを仕様に合わせて記述することで、WebRTC に対応しているすべてのブラウザーで「ただ動く (just work) 」ようにしてくれます。
- [シンプルな RTCDataChannel のサンプル](/ja/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : {{DOMxRef("RTCDataChannel")}} インターフェイスは、2つのピアー間で任意のデータを送受信するためのチャネルを開くことができる機能です。このAPIは意図的に [WebSocket API](/ja/docs/Web/API/WebSockets_API) に似せているので、それぞれに同じプログラミングモデルを使用することができます。
- [Peer.js によるインターネット接続電話の構築](/ja/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : このチュートリアルは、 Peer.js を使用して電話を構築する方法を段階を追ってガイドします。

## 仕様書

{{Specifications}}

### WebRTC-proper プロトコル

- [Application Layer Protocol Negotiation for Web Real-Time Communications](https://datatracker.ietf.org/doc/rfc8833/)
- [WebRTC Audio Codec and Processing Requirements](https://datatracker.ietf.org/doc/rfc7874/)
- [RTCWeb Data Channels](https://datatracker.ietf.org/doc/rfc8831/)
- [RTCWeb Data Channel Protocol](https://datatracker.ietf.org/doc/rfc8832/)
- [Web Real-Time Communication (WebRTC): Media Transport and Use of RTP](https://datatracker.ietf.org/doc/rfc8834/)
- [WebRTC Security Architecture](https://datatracker.ietf.org/doc/rfc8827/)
- [Transports for RTCWEB](https://datatracker.ietf.org/doc/rfc8835/)

### 関連する補助プロトコル

- [Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocol](https://datatracker.ietf.org/doc/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://datatracker.ietf.org/doc/html/rfc5389)
- [URI Scheme for the Session Traversal Utilities for NAT (STUN) Protocol](https://datatracker.ietf.org/doc/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://datatracker.ietf.org/doc/html/rfc7065)
- [An Offer/Answer Model with Session Description Protocol (SDP)](https://datatracker.ietf.org/doc/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization](https://datatracker.ietf.org/doc/rfc7635/)

## 関連情報

- {{DOMxRef("MediaDevices")}}
- {{DOMxRef("MediaStreamEvent")}}
- {{DOMxRef("MediaStreamTrack")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MediaStream")}}
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [ウェブメディア技術](/ja/docs/Web/Media)
