---
title: WebRTC 接続
slug: Web/API/WebRTC_API/Connectivity
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC ではさまざまなプロトコルが相互作用してピアー間の接続を確立し、データやメディアの転送を行いますが、この記事ではその仕組みを解説します。

> [!NOTE]
> このページは、構造的な完全性と内容の完全性のために、大幅な書き換えが必要です。多くの情報があるのは良いことですが、ここは現在ゴミ捨て場のようなものなので、構成はめちゃくちゃです。

## シグナリング

残念なことに、WebRTC は中間に何らかのサーバーがなければ接続を作成できません。このサーバーを**シグナルチャンネル**、または**シグナリングサービス**と呼びます。接続を確立する前に情報を交換する伝達手段はどんなものでも構いません。Eメール、はがき、伝書鳩でも...決めるのはあなたです。

交換する必要のある情報はオファーとアンサーと呼ばれ、その中身は下記で説明する {{Glossary("SDP")}} です。

ピアー A が接続を初期化する側とすると、ピアー A がオファーを作成します。それから選択されたシグナルチャンネルを使ってピアー B にオファーを送ります。ピアー B はシグナルチャンネルからオファーを受け取ると、アンサーを作成します。それからピアー B はピアー A にシグナルチャンネルを使ってアンサーを送り返します。

### セッションディスクリプション

WebRTC 接続のエンドポイント設定は**セッションディスクリプション**と呼ばれます。そこに含まれる情報は、送られるメディアの種類、形式、使用される転送プロトコル、エンドポイントの IP アドレスとポート、またその他メディア転送エンドポイントを記述するのに必要な情報です。この情報を **セッションディスクリプションプロトコル** ({{Glossary("SDP")}}) を使って交換し、保存します。 SDP データ形式の詳細は {{RFC(2327)}} にあります。

ユーザーが WebRTC コールを他のユーザーに開始するとき、**オファー**と呼ばれる特別な記述を作成します。コールする側がコールに必要な設定を提案し、そのすべての情報をオファーの記述に盛り込みます。受け取る側は**アンサー**を返します。アンサーは受け取る側が用意する記述です。このようにして、両デバイスがお互いにメディアデータの交換に必要な情報を共有します。この交換は Interactive Connectivity Establishment ({{Glossary("ICE")}}) を使って行われます。ICE とは二つのデバイスが Network Address Translation ({{Glossary("NAT")}}) によって隔てられていてもオファーとアンサーを交換するために媒介を利用できるようにするプロトコルです。

各ピアーは 2 つの記述を手に入れます。 **local description** が自分側の記述で、 **remote description** が相手側の記述です。

オファー／アンサーの交換はコールを最初に確立する際に実行されますが、それだけでなくフォーマットや他の設定に変更が必要なときにも随時実行されます。コールの新規作成時でも既存の設定変更時でも、いずれにしてもオファーとアンサーを交換するために以下のような基本的なステップが実行されます。なお、ここでは ICE レイヤーは除外しています。

1. 呼び出す側が {{domxref("navigator.mediaDevices.getUserMedia()")}} を通じてローカルメディアを取得する
2. 呼び出す側が `RTCPeerConnection` を作成し、{{domxref("RTCPeerConnection.addTrack()")}} を実行する。(`addStream` が非推奨であるため)
3. 呼び出す側がオファーを作成するために {{domxref("RTCPeerConnection.createOffer()")}} を実行する
4. 呼び出す側がオファーを <em>local description</em> (ローカル側の接続の記述) として設定するために {{domxref("RTCPeerConnection.setLocalDescription()")}} を実行する
5. 呼び出す側は setLocalDescription() を実行した後、STUN サーバーに問い合わせて ICE 候補を生成する
6. 呼び出す側がシグナリングサーバーを使ってオファーを届けたい相手に送る
7. 受け取る側がオファーを受け取り、それを <em>remote description</em> (相手側の接続の記述) として記録するために {{domxref("RTCPeerConnection.setRemoteDescription()")}} を実行する
8. 受け取る側がコールに必要なセットアップを行う。ローカルメディアを取得し、 {{domxref("RTCPeerConnection.addTrack()")}} を通じてメディアトラックをピアー接続にアタッチする
9. 受け取る側が {{domxref("RTCPeerConnection.createAnswer()")}} を実行することでアンサーを作成する
10. 受け取る側が {{domxref("RTCPeerConnection.setLocalDescription()")}} に作成したアンサーを渡して実行し、アンサーを自身の local description としてセットする。この時点で受け取る側は両側の接続設定を知ることになる。
11. 受け取る側がシグナリングサーバーを使ってアンサーを呼び出す側に送る
12. 呼び出す側がアンサーを受け取る。
13. 呼び出す側がアンサーを remote description として設定するために {{domxref("RTCPeerConnection.setRemoteDescription()")}} を実行する。これで呼び出す側も両者の設定を知ることになる。設定した通りにメディアが流れ始める。

### Pending and current descriptions

Taking one step deeper into the process, we find that `localDescription` and `remoteDescription`, the properties which return these two descriptions, aren't as simple as they look. Because during renegotiation, an offer might be rejected because it proposes an incompatible format, it's necessary that each endpoint have the ability to propose a new format but not actually switch to it until it's accepted by the other peer. For that reason, WebRTC uses _pending_ and _current_ descriptions.

The **current description** (which is returned by the {{domxref("RTCPeerConnection.currentLocalDescription")}} and {{domxref("RTCPeerConnection.currentRemoteDescription")}} properties) represents the description currently in actual use by the connection. This is the most recent connection that both sides have fully agreed to use.

The **pending description** (returned by {{domxref("RTCPeerConnection.pendingLocalDescription")}} and {{domxref("RTCPeerConnection.pendingRemoteDescription")}}) indicates a description which is currently under consideration following a call to `setLocalDescription()` or `setRemoteDescription()`, respectively.

When reading the description (returned by {{domxref("RTCPeerConnection.localDescription")}} and {{domxref("RTCPeerConnection.remoteDescription")}}), the returned value is the value of `pendingLocalDescription`/`pendingRemoteDescription` if there's a pending description (that is, the pending description isn't `null`); otherwise, the current description (`currentLocalDescription`/`currentRemoteDescription`) is returned.

When changing the description by calling `setLocalDescription()` or `setRemoteDescription()`, the specified description is set as the pending description, and the WebRTC layer begins to evaluate whether or not it's acceptable. Once the proposed description has been agreed upon, the value of `currentLocalDescription` or `currentRemoteDescription` is changed to the pending description, and the pending description is set to null again, indicating that there isn't a pending description.

> [!NOTE]
> The `pendingLocalDescription` contains not just the offer or answer under consideration, but any local ICE candidates which have already been gathered since the offer or answer was created. Similarly, `pendingRemoteDescription` includes any remote ICE candidates which have been provided by calls to {{domxref("RTCPeerConnection.addIceCandidate()")}}.

See the individual articles on these properties and methods for more specifics, and [Codecs used by WebRTC](/ja/docs/Web/Media/Formats/WebRTC_codecs) for information about codecs supported by WebRTC and which are compatible with which browsers. The codecs guide also offers guidance to help you choose the best codecs for your needs.

## ICE candidates

As well as exchanging information about the media (discussed above in Offer/Answer and SDP), peers must exchange information about the network connection. This is known as an **ICE candidate** and details the available methods the peer is able to communicate (directly or through a TURN server). Typically, each peer will propose its best candidates first, making their way down the line toward their worse candidates. Ideally, candidates are UDP (since it's faster, and media streams are able to recover from interruptions relatively easily), but the ICE standard does allow TCP candidates as well.

> [!NOTE]
> Generally, ICE candidates using TCP are only going to be used when UDP is not available or is restricted in ways that make it not suitable for media streaming. Not all browsers support ICE over TCP, however.

ICE allows candidates to represent connections over either {{Glossary("TCP")}} or {{Glossary("UDP")}}, with UDP generally being preferred (and being more widely supported). Each protocol supports a few types of candidate, with the candidate types defining how the data makes its way from peer to peer.

### UDP candidate types

UDP candidates (candidates with their {{domxref("RTCIceCandidate.protocol", "protocol")}} set to `udp`) can be one of these types:

- `host`
  - : A host candidate is one for which its {{domxref("RTCIceCandidate/address", "ip")}} address is the actual, direct IP address of the remote peer.
- `prflx`
  - : A peer reflexive candidate is one whose IP address comes from a symmetric NAT between the two peers, usually as an additional candidate during trickle ICE (that is, additional candidate exchanges that occur after primary signaling but before the connection verification phase is finished).
- `srflx`
  - : A server reflexive candidate is generated by a STUN/TURN server; the connection's initiator requests a candidate from the STUN server, which forwards the request through the remote peer's NAT, which creates and returns a candidate whose IP address is local to the remote peer. The STUN server then replies to the initiator's request with a candidate whose IP address is unrelated to the remote peer.
- `relay`
  - : A relay candidate is generated just like a server reflexive candidate (`"srflx"`), but using {{Glossary("TURN")}} instead of {{Glossary("STUN")}}.

### TCP candidate types

TCP candidates (that is, candidates whose {{domxref("RTCIceCandidate.protocol", "protocol")}} is `tcp`) can be of these types:

- `active`
  - : The transport will try to open an outbound connection but won't receive incoming connection requests. This is the most common type, and the only one that most user agents will gather.
- `passive`
  - : The transport will receive incoming connection attempts but won't attempt a connection itself.
- `so`
  - : The transport will try to simultaneously open a connection with its peer.

### Choosing a candidate pair

The ICE layer selects one of the two peers to serve as the **controlling agent**. This is the ICE agent which will make the final decision as to which candidate pair to use for the connection. The other peer is called the **controlled agent**. You can identify which one your end of the connection is by examining the value of {{domxref("RTCIceTransport.role", "RTCIceCandidate.transport.role")}}, although in general it doesn't matter which is which.

The controlling agent not only takes responsibility for making the final decision as to which candidate pair to use, but also for signaling that selection to the controlled agent by using STUN and an updated offer, if necessary. The controlled agent just waits to be told which candidate pair to use.

It's important to keep in mind that a single ICE session may result in the controlling agent choosing more than one candidate pair. Each time it does so and shares that information with the controlled agent, the two peers reconfigure their connection to use the new configuration described by the new candidate pair.

Once the ICE session is complete, the configuration that's currently in effect is the final one, unless an ICE reset occurs.

At the end of each generation of candidates, an end-of-candidates notification is sent in the form of an {{domxref("RTCIceCandidate")}} whose {{domxref("RTCIceCandidate.candidate", "candidate")}} property is an empty string. This candidate should still be added to the connection using {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} method, as usual, in order to deliver that notification to the remote peer.

When there are no more candidates at all to be expected during the current negotiation exchange, an end-of-candidates notification is sent by delivering a {{domxref("RTCIceCandidate")}} whose {{domxref("RTCIceCandidate.candidate", "candidate")}} property is `null`. This message does _not_ need to be sent to the remote peer. It's a legacy notification of a state which can be detected instead by watching for the {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} to change to `complete`, by watching for the {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} event.

## When things go wrong

During negotiation, there will be times when things just don't work out. For example, when renegotiating a connection—for example, to adapt to changing hardware or network configurations—it's possible that negotiation could reach a dead end, or some form of error might occur that prevents negotiation at all. There may be permissions issues or other problems as well, for that matter.

### ICE rollbacks

When renegotiating a connection that's already active and a situation arises in which the negotiation fails, you don't really want to kill the already-running call. After all, you were most likely just trying to upgrade or downgrade the connection, or to otherwise make adaptations to an ongoing session. Aborting the call would be an excessive reaction in that situation.

Instead, you can initiate an **ICE rollback**. A rollback restores the SDP offer (and the connection configuration by extension) to the configuration it had the last time the connection's {{domxref("RTCPeerConnection.signalingState", "signalingState")}} was `stable`.

To programmatically initiate a rollback, send a description whose {{domxref("RTCSessionDescription.type", "type")}} is `rollback`. Any other properties in the description object are ignored.

In addition, the ICE agent will automatically initiate a rollback when a peer that had previously created an offer receives an offer from the remote peer. In other words, if the local peer is in the state `have-local-offer`, indicating that the local peer had previously _sent_ an offer, calling `setRemoteDescription()` with a _received_ offer triggers rollback so that the negotiation switches from the remote peer being the caller to the local peer being the caller.

### ICE restarts

For now, see [ICE restart](/ja/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## The entire exchange in a complicated diagram

[![A complete architectural diagram showing the whole WebRTC process.](webrtc-complete-diagram.png)](https://hacks.mozilla.org/2013/07/webrtc-and-the-ocean-of-acronyms/)
