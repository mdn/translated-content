---
title: WebRTC data channel 사용하기
slug: Web/API/WebRTC_API/Using_data_channels
---

{{DefaultAPISidebar('WebRTC')}}

{{domxref("RTCPeerConnection")}} 인터페이스를 사용하여 WebRTC Peerconnction을 연결하면 이제 두 Peer간의 커넥션을 통하여 미디어 데이터를 주고 받을수 있게됩니다. 그뿐아니라 WebRTC로 할수 있는 일은 더 있습니다. 이 가이드에서 우리는 peer connection에 데이터 채널을 추가하는 방법과 임의의 데이터, 즉 우리가 원하는 어떠한 포멧의 데이터들을 안전하게 주고 받는 방법을 배우게 될 것 입니다.

> [!NOTE]
> 모든 WebRTC 컴포넌트들은 암호화를 사용하게 되어 있기 때문에 `RTCDataChannel`을 이용하는 어떤 데이터 전송도 자동적으로 Datagram Transport Layer Security (**DTLS**)을 사용하여 암호화 됩니다. 자세한 내용은 [Security](#security) 를 참고하십시오.

## 데이터 채널 만들기

{{domxref("RTCDataChannel")}}를 이용한 기초적인 데이터 전송은 아래의 두 방법중 하나를 이용하여 만들수 있습니다.

- WebRTC가 전송수단을 만들게 하고 {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} 이벤트를 수신 받게 하여 remote peer에 알립니다. 참 쉽죠? 이 단순한 로직을 바탕으로 수많은 활용법을 만들어 낼 수 있습니다. 하지만 단순하기 때문에 구현하고자하는 모든 요구를 만족해주지는 못합니다.
- 데이터 전송을 할 수 있는 코드를 스스로 작성하고 새로운 채널이 연결되었다는 것을 알려줄수 있는 코드를 작성해주십시오.

위에서 언급한 두가지 방법을 각각 살펴보겠습니다. 우선은 가장 일반적으로 사용되는 첫번째 방법부터 살펴보겠습니다.

### 자동 협상(Automatic negotiation)

{{domxref("RTCDataChannel")}} 연결의 협상을 핸들링하기 위해 대부분 Peer 연결을 사용하게 됩니다. 이를 위해 간단히 {{domxref("RTCDataChannelInit.negotiated", "negotiated")}} 프로퍼티의 값을 지정하지 않고 {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} 를 호출하거나 그저 false로 설정합니다. 이 행위는 협상을 핸들링하기 위해 자동적으로 RTCPeerConnection를 발동시키고 원격 피어(remote peer)가 데이터 채널을 만들고 네트워크를 통하여 서로를 연결되게 만듭니다.

createDataChannel()를 통해 RTCDataChannel 객체가 즉시 반환됩니다. 그후 {{domxref("RTCDataChannel.open_event", "open")}}의 이벤트가 RTCDataChannel로 송신되는 것을 확인한다면 성공적으로 연결되었다고 말할 수 있습니다.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### 수동 협상(Manual negotiation)

Data channel의 수동협상을 위해서 우선 {{domxref("RTCPeerConnection")}}에 있는 {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} 매소드를 사용하여 {{domxref("RTCDataChannel")}} 객체를 생성해야 합니다. 이때 {{domxref("RTCDataChannelInit.negotiated", "negotiated")}} 프로퍼티의 값을 true로 설정해야 합니다. 이 피어 연결을 위한 신호들은 설정하는 측의 피어 연결 협상을 시도하지 않도록 합니다.

대역외의 연결 협상은 웹서버나 다른 방법을 이용해야 합니다. 이 절차들은 수동으로 RTCDataChannel을 원격 피어에게 신호를 보내야 하며 동일한 {{domxref("RTCDataChannel.id", "id")}}를 사용해야 하고 negotiated 프로퍼티는 true로 설정해야합니다. 이 설정들은 RTCPeerConnection를 이용해 두 오브젝트가 연결되게 합니다.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

위의 코드에서는 채널 생성시 negotiated 프로퍼티를 true로 설정해주었고 requestRemoteChannel()을 호출함으로 원격 채널과 동일한 로컬 채널 ID를 만들기 위한 협상(negotiation)을 발동시켰습니다.

이 절차를 밟으므로서 다른 프로퍼티를 갖는 각각의 피어들이 데이터 채널을 생성하고 같은 id 값을 사용하는 채널을 명확하고 쉽게 생성할수 있습니다.

## 버퍼링(Buffering)

WebRTC 데이터채널은 아웃바운드 데이터에 대해 버퍼링을 제공합니다. 이것은 자동적으로 처리가됩니다. buffer의 사이즈를 컨트롤 할 수 없는 동안 당신은 얼마나 많은 데이터가 현재 버퍼 되어 있는지 배울 수 있고 큐 데이터의 버퍼가 고갈되기 시작할 때 알림을 받도록 선택할 수 도 있습니다. 이것은 메모리 과다사용이나 채널을 완전히 밀어내버리는 것을 없애고 언제나 데이터를 보낼수 있도록 효과적인 루틴을 만들기 쉽게 해줍니다.

## 메세지 크기 제한에 대해 이해하기

네트워크를 통하여 전송되는 데이터라면 그 데이터는 반드시 사이즈가 제한됩니다. 기초적인 레벨의 이야기를 하자면, 각각의 네트워크 패킷은 어떠한 값보다 클 수 없습니다. (정확한 숫자는 네트워크와 전송 계층이 사용하고 있는 것에 따라 다릅니다.) 어플리케이션 계층에서는 — 즉 당신의 코드가 돌아가고 있는 WebRTC {{Glossary("user agent", "user agent's")}} — WebRTC가 네트워크의 전송계층위의 최대 패킷사이즈보다 메시지가 더 큰지 확인하는 것을 구현할 수 있습니다.

만약 당신이 사이즈 제한 크기가 궁금하지 않다거나 대용량 메세지를 보내거나 받는 것이 필요하지 않다면 이 이야기는 복잡한 이야기가 될 수 있습니다. Even when user agents share the same underlying library for handling Stream Control Transmission Protocol (SCTP) data, there can still be variations due to how the library is used. 예를들어 Firefox와 구글 크롬은 SCTP를 구현하기 위해 [`usrsctp`](https://github.com/sctplab/usrsctp) 라이브러리를 사용합니다. 이때 그 두 브라우저가 어떻게 라이브러리에 요청하고 이벤트에 반응하는지에 따라 `RTCDataChannel` 을 이용한 데이터 전송이 실패하는 경우가 있습니다.

두 유저가 Firefox에 있는 데이터채널을 사용하여 통실할 때 메세지 사이즈의 제한은 Firefox와 크롬을 각각 사용할 때보다 큽니다. 왜냐하면 Firefox의 구현 방법은 현재 다중 SCTP메세지를 전송하는 기술을 deprecated하여 놓았습니다. 하지만 크롬은 여전히 가능합니다. 크롬은 완성 될것이라 확신하는 메시지 시리즈를 보는 대신 RTCDataChannel을 다중 메시지로서 수신하는 것으로 대채할 것입니다.

메세지가 16kiB 작다면 별다른 무리 없이 보낼 수 있을 것 입니다. 대부분의 메이저 user agents도 동일하게 다룹니다.

### 대용량 메세지에 대해 고려해보기

~~현재 메세지 사이즈가 64kiB (16kiB if you want to support cross-browser exchange of data)를 넘는 `RTCDataChannel` 는 구현되지 않았습니다. 문제는 `RTCDataChannel`에서 송수신 프로토콜로 사용되는 SCTP가 원래 시그널링 프로토콜로 디자인 되었다는 것 입니다. 그래서 메세지가 상대적으로 작은 사이즈라고 가정하고 만들어진 프로토콜입니다. Support for messages larger than the network layer's [Maximum transmission unit](https://en.wikipedia.org/wiki/Maximum_transmission_unit) was added almost as an afterthought, in case signaling messages needed to be larger than the MTU. 이 기능은 각각의 조각에 연속적인 시퀀스 번호를 필요로 합니다. 즉 상호배치를 통해 동시에 여러 데이터를 보낼 수 없고 하나를 보낸 이후 다시 하나를 보내야 합니다.~~

~~이러한 점은 문제가 됩니다.~~ 지금 그리고 이후에도 WebRTC를 구현하고 있는 것들을 포함한 다양한 어플리케이션 들이 더욱더 큰 메시지를 전송하기 위해 SCTP를 사용합니다. 결국에 메시지가 감당할수 없을 만큼 커지게 된다면 정말 중요한 시그널링 메시지를 포함한 데이터 채널에서 전송되는 모든 다른 데이터들이 블락당할수 있다는 것을 알게되었습니다.

이것은 브라우저가 현재의 대용량 메시지를 처리하는 표준인 end-of-record(EOR) 플레그 (메시지가 여러 시리즈에서 마지막일때 하나의 페이로드로서 취급하게하는 플레그)를 제공할때 문제가 됩니다. 이 플레그는 Firefox 57에서는 구현이 되어있습니다. 그러나 Chrome 에서는 아직 구현이 되어있지 않습니다.([Chromium Bug 7774](https://bugs.chromium.org/p/webrtc/issues/detail?id=7774) 참조). EOR를 제공하는 RTCDataChannel 페이로드는 더욱 커질 수 있습니다. (공식적으로 256kiB까지이며 Firfox의 구현으로는 1GiB까지가능). 256kiB에서 조차 긴급한 트래픽을 처리하기에는 유의미한 지연을 야기시키에 충분히 큰 용량입니다. 만약 여기서 더 커진다면 지연은 당신이 특정한 조작을 하더라도 줄일수 없을 것입니다.

이러한 문제점을 해결하기 위해 **스트림 스케쥴러**(**stream schedulers**)라고하는 이름지어져 있으며 SCTP ndata specification이라고도 불리우는 새로운 시스템을 디자인하였습니다. 이 스케쥴러는 WebRTC 데이터 채널에 구현되어 있는 스트림을 포함한 각기 다른 스트림에 메시지를 상호배치하여 전송가능합니다. 이 [제안](https://tools.ietf.org/html/draft-ietf-tsvwg-sctp-ndata)은 IETF 제안(draft form) 상태에 있지만 한번 구현된다면 SCTP 계층은 자동적으로 서브메시지들에게 모든 데이터 채널을 통과할수 있는 기회를 보장하는 상호배치를 하기때문에 기본적으로 사이즈에 제한이 없는 메시지를 보낼수 있게될것입니다.

Firefox는 ndata를 지원하기 위해 현재 구현단계에 있습니다. 일반적인 사용이 언제쯤 가능할지에 대해 궁금하시다면 [Firefox bug 1381145](https://bugzil.la/1381145) 을 관심있게 보고 계십시요. Chrome 팀은 [Chrome Bug 5696](https://bugs.chromium.org/p/webrtc/issues/detail?id=5696) 를 통해 ndata 지원을 위한 구현을 트래킹하고 있습니다.

<div class="originaldocinfo"><p>이 섹션에 있는 대부분의 정보는 다음 블로그 포스트를 기반으로 작성되었습니다. <a href="https://lgrahl.de/articles/demystifying-webrtc-dc-size-limit.html">Demystifyijng WebRTC's Data Channel Message Size Limitations</a>, written by Lennart Grahl. 이 블로그를 보시면 더욱 자세한 내용이 나와 있습니다. 그러나 브라우져들은 당시보다 업데이트 되었기때문에 그 정보들은 현재와 맞지 않을 수 도 있습니다. 또한 현재는 시간이 많이 흘러 대부분의 메이저 브라우저에서는 EOR이 구현되어 있습니다.</p></div>

## 보안(Security)

WebRTC로 전송되는 모든 데이터는 암호화됩니다. `RTCDataChannel` 의 암호화는[Transport Layer Security](/ko/docs/Web/Security/Transport_Layer_Security) (TLS)를 바탕으로 하는 Datagram Transport Layer Security (DTLS)를 사용합니다. TLS는 모든 암호화된 HTTPS 통신에 사용되기 때문에 data channel에 사용되는 모든 데이터는 사용자의 브라우저가 데이터를 주고받는 만큼의 보안이 보장됩니다.

조금더 근본적으로 WebRTC는 두 사용자간의 peer-to-peer 연결이기때문에 데이터가 어떠한 다른 웹이나 어플리케이션 서버를 경유하지 않습니다. 이러한 통신방식으로 인해 데이터가 중간에 가로채어질 가능성이 줄어듭니다.
