---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
---

{{APIRef('WebRTC')}}

**`RTCPeerConnection`** インターフェイスは、ローカルコンピューターとリモートピアの間の WebRTC 接続を表します。リモートピアに接続したり、接続を維持・監視したり、不要になったら接続を切断したりするためのメソッドを提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}}
  - : ローカルデバイスとリモートピア間の接続を表す、新しく作成された `RTCPeerConnection` を返します。

## 静的メソッド

- {{DOMxRef("RTCPeerConnection.generateCertificate", "generateCertificate()")}}
  - : X.509 証明書とそれに対応する秘密鍵を作成し、それが生成されると新しい {{DOMxRef("RTCCertificate")}} で解決される {{jsxref("Promise")}} を返します。

## プロパティ

_{{DOMxRef("EventTarget")}} から継承したプロパティもあります。_

- {{DOMxRef("RTCPeerConnection.canTrickleIceCandidates", "canTrickleIceCandidates")}} {{ReadOnlyInline}}
  - : 論理値で、リモートピアが[トリクル ICE 候補](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice)を受け入れることができるかどうかを返します。
- {{DOMxRef("RTCPeerConnection.connectionState", "connectionState")}} {{ReadOnlyInline}}
  - : ピア接続の現在の状態を示します。 `new`, `connecting`, `connected`, `disconnected`, `failed`, `closed` のいずれかの文字列を返します。
- {{DOMxRef("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}} {{ReadOnlyInline}}
  - : この `RTCPeerConnection` がリモートピアとの交渉を終了してから、直近で交渉に成功した接続のローカル側を記述した {{DOMxRef("RTCSessionDescription")}} オブジェクトを返します。
    また、この記述で表される提案や回答が最初にインスタンス化されて以降、 ICE エージェントによってすでに生成された可能性のある ICE 候補のリストも含まれます。
- {{DOMxRef("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}} {{ReadOnlyInline}}
  - : この `RTCPeerConnection` がリモートピアとの交渉を終了してから、直近で交渉に成功した接続のリモート側を記述した {{DOMxRef("RTCSessionDescription")}} オブジェクトを返します。
    また、この記述で表される提案や回答が最初にインスタンス化されて以降、 ICE エージェントによってすでに生成された可能性のある ICE 候補のリストも含まれます。
- {{DOMxRef("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} {{ReadOnlyInline}}
  - : この RTCPeerConnection に関連する ICE エージェントの状態を文字列で返します。
    `new`, `checking`, `connected`, `completed`, `failed`, `disconnected`, `closed` の何れかの値になります。
- {{DOMxRef("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} {{ReadOnlyInline}}
  - : 接続の ICE 収集状態を表す文字列を返します。これにより、例えば ICE 候補の収集が終了したことを検出することができます。
    取りうる値は、 `new`, `gathering`, `complete` の何れかです。
- {{DOMxRef("RTCPeerConnection.localDescription", "localDescription")}} {{ReadOnlyInline}}
  - : 接続のローカル側のセッションを記述した {{DOMxRef("RTCSessionDescription")}} を返します。
    まだ設定されていない場合は、 `null` を返します。
- {{DOMxRef("RTCPeerConnection.peerIdentity", "peerIdentity")}} {{ReadOnlyInline}}
  - : リモートピアを識別する文字列を含む {{DOMxRef("RTCIdentityAssertion")}} に解決する {{jsxref("Promise")}} を返します。
    このプロミスが正常に解決されると、結果として得られる ID がターゲットピア ID になり、接続の間、変更されることはありません。
- {{DOMxRef("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}} {{ReadOnlyInline}}
  - : 接続のローカル側で保留中の設定変更を記述した {{DOMxRef("RTCSessionDescription")}} オブジェクトを返します。
    これは、現在の接続を記述するのではなく、近い将来に存在する可能性のある接続を記述します。
- {{DOMxRef("RTCPeerConnection.pendingRemoteDescription", "pendingRemoteDescription")}} {{ReadOnlyInline}}
  - : 接続のリモート側で保留中の設定変更を記述した {{DOMxRef("RTCSessionDescription")}} オブジェクトを返します。
    これは、現在の接続を記述するのではなく、近い将来に存在する可能性のある接続を説明します。
- {{DOMxRef("RTCPeerConnection.remoteDescription", "remoteDescription")}} {{ReadOnlyInline}}
  - : 接続のリモート側の、設定とメディア情報を含むセッションを記述した {{DOMxRef("RTCSessionDescription")}} オブジェクトを返します。
    まだ設定されていない場合は、`null`を返します。
- {{DOMxRef("RTCPeerConnection.sctp", "sctp")}} {{ReadOnlyInline}}
  - : SCTP データを送受信するトランスポート層の {{Glossary("SCTP")}} を記述した {{DOMxRef("RTCSctpTransport")}} オブジェクトを返します。
    SCTP が交渉されていない場合、この値は `null` です。
- {{DOMxRef("RTCPeerConnection.signalingState", "signalingState")}} {{ReadOnlyInline}}
  - : 他のピアに接続中または再接続中の、ローカル側のシグナリングプロセスの状態を記述した文字列を返します。
    値は `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer`, `closed` のうちのいずれかになります。

## メソッド

_{{DOMxRef("EventTarget")}} から継承したメソッドもあります。_

- {{DOMxRef("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
  - : `RTCPeerConnection` のリモート記述に新しいリモート候補を追加し、リモート側の接続の状態を記述します。
- {{DOMxRef("RTCPeerConnection.addTrack", "addTrack()")}}
  - : 新しい {{DOMxRef("MediaStreamTrack")}} を、相手側に送信されるトラックのセットに追加します。
- {{DOMxRef("RTCPeerConnection.addTransceiver", "addTransceiver()")}}
  - : 新しい {{DOMxRef("RTCRtpTransceiver")}} を作成し、接続に関連付けられたトランシーバーのセットに追加します。
    トランシーバーはそれぞれ、 {{DOMxRef("RTCRtpSender")}} と {{DOMxRef("RTCRtpReceiver")}} が関連付けられた両方向のストリームを表します。
- {{DOMxRef("RTCPeerConnection.close", "close()")}}
  - : 現在のピア接続を終了します。
- {{DOMxRef("RTCPeerConnection.createAnswer", "createAnswer()")}}
  - : WebRTC 接続の提案/回答交渉中にリモートピアから受け取った提案に対する {{Glossary("SDP")}} 回答の作成を開始します。
    回答には、ブラウザーが対応しているコーデック、オプション、セッションにすでに接続されているメディア、すでに収集されている {{Glossary("ICE")}} 候補に関する情報が含まれます。
- {{DOMxRef("RTCPeerConnection.createDataChannel", "createDataChannel()")}}
  - : リモートピアとリンクした新しいチャネルの作成を開始し、その上であらゆる種類のデータを転送することができます。
    これは、画像、ファイル転送、テキストチャット、ゲームアップデートパケットなどのバックチャネルコンテンツに便利です。
- {{DOMxRef("RTCPeerConnection.createOffer", "createOffer()")}}
  - : リモートピアとの新しい WebRTC 接続を開始するために、{{Glossary("SDP")}} 提案 の作成を開始する。
    SDP提案には、WebRTCセッションにすでにアタッチされている{{DOMxRef("MediaStreamTrack")}} オブジェクト、コーデック、ブラウザーが対応しているオプションに関する情報、および {{Glossary("ICE")}} エージェントがすでに収集している候補が含まれており、シグナルチャネルを介して、接続を要求または既存の接続の構成を更新するために相手候補 に送信されます。
- {{DOMxRef("RTCPeerConnection.getConfiguration", "getConfiguration()")}}
  - : 接続の現在の構成を示すオブジェクトを返す。
- {{DOMxRef("RTCPeerConnection.getIdentityAssertion", "getIdentityAssertion()")}}
  - : ID アサーションの収集を開始し、文字列としてエンコードされた ID アサーションに解決する {{jsxref("Promise")}} を返します。
    これは {{DOMxRef("RTCPeerConnection.signalingState", "signalingState")}} が `closed` でない場合のみ効果を持ちます。
- {{DOMxRef("RTCPeerConnection.getReceivers", "getReceivers()")}}
  - : {{DOMxRef("RTCRtpReceiver")}} オブジェクトの配列を返します。各オブジェクトは 1 つの {{Glossary("RTP")}} レシーバーを表します。
- {{DOMxRef("RTCPeerConnection.getSenders", "getSenders()")}}
  - : 各オブジェクトは、 1 つのトラックのデータ送信に責任を負う {{Glossary("RTP")}} 送信者を表す {{DOMxRef("RTCRtpSender")}} オブジェクトの配列を返します。
- {{DOMxRef("RTCPeerConnection.getStats", "getStats()")}}
  - : 接続全体または指定された {{DOMxRef("MediaStreamTrack")}} に関する統計データを解決する {{jsxref("Promise")}} を返します。
- {{DOMxRef("RTCPeerConnection.getTransceivers", "getTransceivers()")}}
  - : 接続上のデータの送受信に使用されているすべての {{DOMxRef("RTCRtpTransceiver")}} オブジェクトのリストを返します。
- {{DOMxRef("RTCPeerConnection.removeTrack", "removeTrack()")}}
  - : {{DOMxRef("RTCPeerConnection.getSenders", "getSenders()")}} によって報告される送信者リストから対応する {{DOMxRef("RTCRtpSender")}} を実際に削除せずに、指定したトラックからのメディア送信を停止するよう接続のローカル側に指示します。
    トラックがすでに停止している場合、または接続の送信者リストにない場合、このメソッドは何の効果も持ちません。
- {{DOMxRef("RTCPeerConnection.restartIce", "restartIce()")}}
  - : ICE 候補の収集を、接続の両端でやり直すよう簡単に要求できるようにします。
    これにより、 {{Glossary("ICE")}} の再起動を発生させるために、呼び出し側または受信側のどちらかが同じメソッドを使用することができ、プロセスが簡素化されます。
- {{DOMxRef("RTCPeerConnection.setConfiguration", "setConfiguration()")}}
  - : 指定されたオブジェクトに含まれる値に基づいて、接続の現在の構成を設定します。
    これにより、接続が使用する {{Glossary("ICE")}} サーバーや、使用するトランスポートポリシーを変更することができます。
- {{DOMxRef("RTCPeerConnection.setIdentityProvider", "setIdentityProvider()")}}
  - : Identity Provider (IdP) を引数で指定された 3 つの要素に設定します。
    その名前、そのプロバイダーとの通信に使用するプロトコル、そしてユーザー名です。
    プロトコルおよびユーザー名は省略可能です。
- {{DOMxRef("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}
  - : 接続に関連するローカルの説明を変更します。
    この説明は、メディア形式を含む、接続のローカル側のプロパティを指定します。
    これは {{jsxref("Promise")}} を返し、非同期に説明が変更されると履行されます。
- {{DOMxRef("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}
  - : 指定されたセッション記述をリモートピアの現在の提案または回答として設定します。
    説明は、メディア形式を含む、接続のリモート側のプロパティを指定します。
    これは {{jsxref("Promise")}} を返し、非同期に説明が変更されると履行されます。

### 廃止されたメソッド

- {{DOMxRef("RTCPeerConnection.addStream", "addStream()")}} {{deprecated_inline}}
  - : 音声または映像のローカルソースとして {{DOMxRef("MediaStream")}} を追加します。
    この古いメソッドを使用する代わりに、リモートピアに送信したいトラックごとに {{DOMxRef("RTCPeerConnection.addTrack", "addTrack()")}} を 1 回使用する必要があります。
- {{DOMxRef("RTCPeerConnection.createDTMFSender", "createDTMFSender()")}} {{deprecated_inline}}
  - : 特定の {{DOMxRef("MediaStreamTrack")}} と関連付けられた新たな {{DOMxRef("RTCDTMFSender")}} を生成します。これにより、その接続において {{Glossary("DTMF")}} 音（電話のトーン信号、プッシュ音）を送れるようになります。
- {{DOMxRef("RTCPeerConnection.getStreamById", "getStreamById()")}} {{deprecated_inline}}
  - : 接続のローカルまたはリモート側に関連する、指定された ID の {{DOMxRef("MediaStream")}} を返します。
    このプロパティは {{DOMxRef("RTCPeerConnection.getSenders", "getSenders()")}} と {{DOMxRef("RTCPeerConnection.getReceivers", "getReceivers()")}} メソッドに置き換えられました。
- {{DOMxRef("RTCPeerConnection.removeStream", "removeStream()")}} {{deprecated_inline}}
  - : 音声または映像のローカルソースとして {{DOMxRef("MediaStream")}} を削除します。
    このメソッドは廃止されたため、代わりに {{DOMxRef("RTCPeerConnection.removeTrack", "removeTrack()")}} を使用してください。

## イベント

これらのイベントを待ち受けするには、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用するか、イベントリスナーをこのインターフェイスの `on<em>イベント名</em>` プロパティに代入するかしてください。

- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : `RTCPeerConnection` の全体的な接続状態が変化したときに送信されます。
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : リモートピアが接続に {{domxref("RTCDataChannel")}} を追加したときに送信されます。
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : 指定された候補をリモートピアに送信することを要求するために送信されます。
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : {{Glossary("ICE")}} 候補の収集中にエラーが発生した場合に接続先に送信されます。イベントには、エラーの内容が記述さ れます。
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : 切断時など、 {{Glossary("ICE")}} の接続状態が変化したときに送信されます。
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : {{Glossary("ICE")}} レイヤーの収集状態 ({{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} が変化したときに送信されます。
    これは、 ICE 交渉がまだ始まっていないか (`new`)、候補の収集を始めたか (`gathering`)、終了したか (`complete`) を示します。
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : {{Glossary("ICE")}} 接続の交渉または再交渉を行う必要があるときに送信されます。
    これは、最初に接続を開くときにも、変化するネットワーク条件に適応する必要があるときにも発生します。
    受信側は、オファーを作成し、相手ピアに送信することで応答する必要があります。
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : この接続の {{Glossary("ICE")}} 信号の状態が変化したときに送信されます。
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : 接続を構成する {{domxref("RTCRtpReceiver")}} インスタンスのいずれかに新しいトラックが追加された後に送信されます。

### 廃止されたイベント

- {{domxref("RTCPeerConnection.addstream_event", "addstream")}} {{deprecated_inline}}
  - : 新しい {{domxref("MediaStream")}} が接続に追加されたときに送信されます。
    この古いイベントを待ち受けるのではなく、 {{domxref("RTCPeerConnection.track_event", "track")}} イベントを待ち受けるために使用する必要があります。
    接続に追加された {{domxref("MediaStreamTrack")}} ごとに 1 つ送信されます。
- {{domxref("RTCPeerConnection.removestream_event", "removestream")}} {{deprecated_inline}}
  - : domxref("MediaStream")}} が接続から削除されたときに送信されます。
    この古いイベントを待ち受けるのではなく、それぞれのストリームの {{domxref("MediaStream.removetrack_event", "removetrack")}} イベントを待ち受けるために使用する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [http://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple](https://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML5 video capture, peer-to-peer video and filesharing application ([source on GitHub](https://github.com/chrisjohndigital/TutorRoom))
