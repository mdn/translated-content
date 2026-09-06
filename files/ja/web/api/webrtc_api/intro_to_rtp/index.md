---
title: リアルタイム転送プロトコル (RTP) の紹介
slug: Web/API/WebRTC_API/Intro_to_RTP
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

**リアルタイム転送プロトコル** (Real-time Transport Protocol, **RTP**) は、{{RFC(3550)}} で定義されており、リアルタイムでの優先度が必要なデータの交換をすることができる、IETF 標準のプロトコルです。この記事では、RTP とは何か、また WebRTC のコンテキストにおいてどのように機能するかについて概説します。

> [!NOTE]
> WebRTC では、実際には **SRTP** (Secure Real-time Transport Protocol) を使用し、やり取りされるデータを確実の保護し、適切に認証を行っています。

WebRTC においては、レイテンシー（遅延時間）を最小限に抑えることが特に重要です。というのも、顔と顔を合わせたコミュニケーションでは、{{Glossary("latency", "レイテンシー")}}をできるだけ少なくする必要があるからです。あるユーザーが発言してから、別のユーザーがそれを聞くまでの時間差が大きければ大きいほど、話し合いが重なったり、その他の混乱が生じたりする可能性が高くなります。

## RTP の主要機能

WebRTC のコンテキストにおける RTP の使用について検討する前に、RTP が何を提供し、何を提供しないかについて大まかに理解しておくと有益です。RTP はデータ転送プロトコルであり、その役割は、現在の条件下で 2 つのエンドポイント間でデータを可能な限り効率的に移動することです。こうした条件には、ネットワークスタックの基盤となる層から、物理的なネットワーク接続、経由するネットワーク、リモートエンドポイントのパフォーマンス、ノイズレベル、トラフィック量など、あらゆる要素が影響を及ぼす可能性があります。

RTP はデータ転送プロトコルであるため、密接に関連する **RTP 制御プロトコル** (**RTCP**) によって機能が拡張されています。RTCP は、{{RFC(3550, "", 6)}} で定義されており、**サービス品質 (QoS)** の監視や参加者情報の共有などの機能を追加します。ユーザー、メンバーシップ、権限などを完全に管理するという目的には不十分ですが、制限のないマルチユーザー通信セッションに必要な基本機能を提供します。

そもそも RTCP が RTP と同じ RFC で定義されているという事実が、これら 2 つのプロトコルがいかに密接に関連しているかを端的に示しています。

### RTP の能力

WebRTC の観点から見た RTP の主な利点は、以下のものが挙げられます。

- 全般的にレイテンシーが小さい。
- パケットにはシーケンス番号とタイムスタンプが付与されており、順序が乱れて到着した場合でも再構成が可能である。これにより、RTP を使用して送信されたデータは、順序の保証がない、あるいは配信そのものが保証されていないトランスポート上でも配信することができる。
- つまり、RTPは、そのパフォーマンスや多重化機能、チェックサム機能を使用するために、{{Glossary("UDP")}} 上に実装できるが、必ずしもそうする必要はない。
- RTP はマルチキャストにも対応しています。これは現時点では WebRTC にとって重要ではありませんが、将来、WebRTC が（願わくば）複数ユーザーによる会話を対応するように拡張された際には、重要になる可能性がある。
- RTP の用途は、音声・映像通信に限定されない。データストリーミング、アクティブバッジやステータス表示の更新、制御・測定情報の転送など、どの形であれ連続的または能動的なデータ転送に使用できる。

### RTP が行わないこと

RTP 自体にはあらゆる機能が備わっているわけではないため、WebRTC では同時に他のプロトコルも使用されています。RTP には含まれていない、特に注目すべきこととして以下が挙げられます。
- RTP は[**サービス品質 (Quality of Service)**](https://ja.wikipedia.org/wiki/Quality-of-service) (**QoS**) を保証しません。
- RTP は遅延が重要なシナリオでの使用を意図していますが、本質的に QoS を確実に実現する機能は備えていません。その代わりに、スタックの他の部分で QoS を実装するために必要な情報のみを提供します。
- RTPは、必要となる可能性のあるリソースの割り当てや予約を処理しません。
WebRTC の観点で重要な点については、これらは WebRTC インフラストラクチャ内のさまざまな場所で処理されます。例えば、RTCP は QoS の監視を担当します。

## RTCPeerConnection と RTP

それぞれの {{domxref("RTCPeerConnection")}} には、ピア接続を処理する RTP トランスポートのリストにアクセスするためのメソッドが用意されています。これらは、`RTCPeerConnection` が対応している以下の 3 種類のトランスポートに対応しています。

- {{domxref("RTCRtpSender")}}
  - : `RTCRtpSender` は、{{domxref("MediaStreamTrack")}} データのエンコードおよびリモートピアーへの送信を処理します。指定されたピア接続に対する送信者は、{{domxref("RTCPeerConnection.getSenders()")}} を呼び出すことで取得できます。
- {{domxref("RTCRtpReceiver")}}
  - : `RTCRtpReceiver` は、受信する `MediaStreamTrack` データを検査し、その情報を取得する機能を提供します。接続のレシーバーは、{{domxref("RTCPeerConnection.getReceivers()")}}を呼んで取得できます。
- {{domxref("RTCRtpTransceiver")}}
  - : `RTCRtpTransceiver` は、1 つの RTP 送信者と 1 つの RTP 受信者からなるペアであり、これらは SDP の `mid` 属性を共有しています。これは、両者が同じ SDP メディア m-line（双方向の SRTP ストリームを表す）を共有しているということです。これらは {{domxref("RTCPeerConnection.getTransceivers()")}} メソッドによって返され、それぞれの `mid` とトランシーバーは一対一の関係にあり、`mid` はそれぞれの `RTCPeerConnection` ごとに固有です。

### RTP を活用して「保留」機能を実装する

`RTCPeerConnection` のストリームは RTP および[上記](#rtcpeerconnection_と_rtp)のインターフェイスを使用して実装されているため、ストリームの内部構造にアクセスできるこの特性を活用して調整を行うことができます。特に簡単に行えることの一つとして、「保留」機能の実装が挙げられます。この機能では、通話参加者がボタンをクリックすることで、自分のマイクをオフにし、代わりに相手側へ音楽を送信し始め、着信音声の受け入れを停止することができます。

> [!NOTE]
> この例では、[async 関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function) や [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) 演算子など、現行の JavaScript 機能を活用しています。これにより、WebRTC メソッドから返されるプロミスを扱うコードが大幅に簡素化され、読み取り可能性も格段に向上します。

下記例では、「保留」モードのオン/オフを切り替えるピアを「ローカルピアー」、保留状態になるユーザーを「リモートピアー」と呼びます。

#### 保留モードの有効化

##### ローカルピアー

ローカルユーザーが保留モードを有効にすることを決定すると、下記 `enableHold()` メソッドが呼び出されます。このメソッドは、通話が保留中に再生する音声を含む {{domxref("MediaStream")}} を入力として受け入れます。

```js
async function enableHold(audioStream) {
  try {
    await audioTransceiver.sender.replaceTrack(audioStream.getAudioTracks()[0]);
    audioTransceiver.receiver.track.enabled = false;
    audioTransceiver.direction = "sendonly";
  } catch (err) {
    /* handle the error */
  }
}
```

[`try`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロック内の 3 行のコードは、以下の手順を実行します。

1. 送信側の音声トラックを、保留音楽を含む {{domxref("MediaStreamTrack")}} に置き換えます。
2. 受信側の音声トラックを無効にします。
3. 音声トランシーバーを送信専用モードに切り替えます。
これにより、`RTCPeerConnection` に {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} イベントが送信され、再ネゴシエーションが開始されます。これに対し、コードは {{domxref("RTCPeerConnection.createOffer")}} を使用して SDP オファーを生成し、シグナリングサーバーを経由してリモートピアーに送信することで応答します。
ローカルピアーのマイク音声の代わりに再生する音声が含まれている `audioStream` は、どこからでも取得できます。1 つの方法として、非表示の {{HTMLElement("audio")}} 要素を設置し、{{domxref("HTMLMediaElement.captureStream", "HTMLAudioElement.captureStream()")}} を使用してその音声ストリームを取得する方法があります。

##### リモートピアー

リモートピアーでは、方向性が `"sendonly"` に設定された SDP オファーを受信した際、SDP オファーの文字列を引数として受け入れる `holdRequested()` メソッドを使用して処理を行います。

```js
async function holdRequested(offer) {
  try {
    await peerConnection.setRemoteDescription(offer);
    await audioTransceiver.sender.replaceTrack(null);
    audioTransceiver.direction = "recvonly";
    await sendAnswer();
  } catch (err) {
    /* エラー処理 */
  }
}
```

ここで行われる段階は以下の通りです。
1. {{domxref("RTCPeerConnection.setRemoteDescription()")}} を呼び出して、リモート記述を指定された `offer` に設定します。
2. 音声トランシーバーの {{domxref("RTCRtpSender")}} のトラックを `null`（トラックなし）に置き換えます。これにより、トランシーバーからの音声送信が停止します。
3. 音声トランシーバーの {{domxref("RTCRtpTransceiver.direction", "direction")}} プロパティを `"recvonly"` に設定し、トランシーバーが音声を受信のみ行い、送信は一切行わないように指示します。
4. SDP アンサーは `sendAnswer()` というメソッドを使用して生成・送信されます。このメソッドは {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} を使用してアンサーを生成し、その結果として得られた SDP をシグナリングサービスを介して相手側のピアに送信します。

#### 保留モードの解除

##### ローカルピアー

ローカルユーザーがインターフェイスのウィジェットをクリックして保留モードを解除すると、`disableHold()` メソッドが呼び出され、通常の機能への復帰プロセスを始めます。

```js
async function disableHold(micStream) {
  await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
  audioTransceiver.receiver.track.enabled = true;
  audioTransceiver.direction = "sendrecv";
}
```

これは、`enableHold()` で実行された手順を次のように元に戻します。

1. 音声トランシーバーの `RTCRtpSender` のトラックを、指定されたストリームの最初の音声トラックに置き換えます。
2. トランシーバーの受信音声トラックを再度有効にします。
3. 音声トランシーバーの方向が `"sendrecv"` に設定されます。これは、送信のみではなく、ストリーミングオーディオの送信と受信の両方に戻ることを示しています。

保留が有効になったときと同様に、これによりネゴシエーションが再度起動し、コードがリモートピアーに新しいオファーを送信することになります。

##### リモートピアー

リモートピアーが `"sendrecv"` オファーを受信すると、その `holdEnded()` メソッドを呼び出します。

```js
async function holdEnded(offer, micStream) {
  try {
    await peerConnection.setRemoteDescription(offer);
    await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
    audioTransceiver.direction = "sendrecv";
    await sendAnswer();
  } catch (err) {
    /* handle the error */
  }
}
```

ここで `try` ブロック内で実行される手順は以下の通りです。
1. `setRemoteDescription()` を呼び出して、受信したオファーをリモート記述として格納します。
2. オーディオトランシーバーの `RTCRtpSender` の {{domxref("RTCRtpSender.replaceTrack", "replaceTrack()")}} メソッドを使用して、送信オーディオトラックをマイクのオーディオストリームの最初のトラックに設定します。
3. トランシーバーの方向を `"sendrecv"` に設定し、音声の送信と受信の両方を再開することを示します。

この時点から、マイクが再有効化され、リモートユーザーはローカルユーザーの声を再び聞くことができるようになり、またローカルユーザーと会話できるようになります。

## 関連情報

- [WebRTC 接続](/ja/docs/Web/API/WebRTC_API/Connectivity)
- [WebRTC プロトコル入門](/ja/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC セッションのライフタイム](/ja/docs/Web/API/WebRTC_API/Session_lifetime)
