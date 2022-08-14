---
title: WebRTC API
slug: Web/API/WebRTC_API
tags:
  - API
  - Audio
  - Landing
  - Media
  - NeedsTranslation
  - Networking
  - TopicStub
  - Video
  - WebRTC
  - WebRTC API
  - streaming
translation_of: Web/API/WebRTC_API
---
<div>{{APIRef("WebRTC")}}</div>

<p><strong>WebRTC</strong>(Web Real-Time Communication)은 웹 애플리케이션과 사이트가 중간자 없이 브라우저 간에 오디오나 영상 미디어를 포착하고 마음대로 스트림할 뿐 아니라, 임의의 데이터도 교환할 수 있도록 하는 기술입니다. WebRTC를 구성하는 일련의 표준들은 플러그인이나 제 3자 소프트웨어 설치 없이 종단 간 데이터 공유와 화상 회의를 가능하게 합니다.</p>

<p>이를 위하여 WebRTC는 상호 연관된 API와 프로토콜로 구성되어 함께 작동합니다. 이 문서에서는 WebRTC의 기본을 이해하고, 설정하며, 데이터와 미디어 연결을 위해 사용할 수 있게 도와줄 것입니다.</p>

<h2 id="상호_운용성">상호 운용성</h2>

<p>WebRTC의 구현이 계속 진화하고 있으며 각 브라우저마다 다른 코덱 및 기타 미디어 기능에 대한 지원 수준이 다르기 때문에, 코드 작성을 시작하기 전에 Google에서 제공하는 <a href="https://github.com/webrtcHacks/adapter">Adapter.js 라이브러리</a>를 사용하는 것을 강력하게 고려해보아야합니다.</p>

<p>Adapter.js는 shim 및 polyfill을 사용하여 다양한 플랫폼에서 WebRTC 구현 간의 다양한 차이점을 없애줍니다. 또한 WebRTC 개발 프로세스를 전체적으로 쉽게 수행 할 수 있도록 접두사와 다른 이름 지정의 차이점을 처리하며보다 광범위하게 호환되는 결과를 제공합니다. 라이브러리는 <a href="https://www.npmjs.com/package/webrtc-adapter">NPM 패키지</a>로도 제공됩니다.</p>

<p>Adapter.js에 대한 자세한 내용은 <a href="https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API/adapter.js">Improving compatibility using WebRTC adapter.js</a>를 참조하십시오.</p>

<h2 id="WebRTC_개념_및_사용법">WebRTC 개념 및 사용법</h2>

<p>WebRTC는 여러가지 목적으로 사용될 수 있으며, Media Capture and Streams API 와 상당히 많은 부분이 겹친다. 이 둘은 서로 상호작용을 하면서 웹에 강력한 멀티미디어 기능을 제공한다. 예를들어 음성, 화상 회의, 파일 교환, <del>계정 관리</del>, <del>DTMF 시그널을 이용해 legacy telephone 시스템 interfacing</del> 등이 있다. 피어들 간의 커넥션이 만들어지는데 어떤 드라이버나 플러그인도 필요하지 않는다. <del>그리고 가끔은 중개 서버 없이도 만들어질 수 있다.</del></p>

<p>두 피어 간의 커넥션은 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>인터페이스를 통해 이루어진다. 커넥션이 이루어지고 열리면, 미디어 스트림들 (<a href="https://www.gitbook.com/book/gustnxodjs/webrtc-mdn-kor/edit#"><code>MediaStream</code></a>) 과 데이터 채널(<a href="https://www.gitbook.com/book/gustnxodjs/webrtc-mdn-kor/edit#"><code>RTCDataChannel</code></a>)들을 커넥션에 연결할 수 있다.</p>

<p>미디어 스트림들은 미디어 정보를 가지는 다수의 트랙들로 구성될 수 있다. <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a>인터페이스 object를 베이스로 하는 트랙은 음성, 영상 및 텍스트(제목 또는 챕터 이름 조차도 포함 가능하다)를 포함하는 다양한 미디어 데이터의 타입 중 하나를 포함 할 수 있다. 대부분의 스트림들은 적어도 한 개 이상의 음성(영상) 트랙으로 구성되어 있고, live 미디어(웹 캠 등)나 저장된(스트리밍) 미디어들을 전송하고 받을 수 있다.</p>

<p>또한, 임의의 바이너리 데이터(이미지든 텍스트든 파일이든 모두 가능하다는 뜻)를 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel"><code>RTCDataChannel</code></a>인터페이스를 통해 피어들 간에 교환할 수 있다. 이것은 <del>back-channel 정보들</del>, 메타데이터 교환, 게임 status 패킷들, 파일 교환, <del>데이터 교환을 위한 primary channel</del> 등에 쓰일 수 있다.</p>

<p><em><strong>더 자세한 내용은 밑에 guide와 tutorial을 참조하길 바란다</strong></em></p>

<h2 id="WebRTC_인터페이스">WebRTC 인터페이스</h2>

<p>WebRTC는 다양한 작업을 수행하기 위해 함께 동작하는 인터페이스를 제공하기때문에 아래 목록의 인터페이스들을 카테고리별로 나누었다. 알파벳 순으로 정리된 목록은 사이드 바를 참조하라.</p>

<h3 id="연결_설정_및_관리">연결 설정 및 관리</h3>

<p>이 인터페이스들을 사용하여 WebRTC 연결을 설정할 수 있고, 연결을 맺을 수 있으며 WebRTC 연결을 관리할 수 있다.</p>

<dl>
 <dt>{{domxref("RTCPeerConnection")}}</dt>
 <dd>로컬 컴퓨터와 원격 피어 간의 WebRTC 연결을 나타낸다. 두 피어 간의 효율적인 데이터 스트리밍을 처리하는데 사용된다.</dd>
 <dt>{{domxref("RTCDataChannel")}}</dt>
 <dd>연결된 두 피어간의 양방향 데이터 채널을 나타낸다.</dd>
 <dt>{{domxref("RTCDataChannelEvent")}}</dt>
 <dd>{{domxref("RTCDataChannel")}}을 {{domxref("RTCPeerConnection")}}에 연결하는 동안 발생하는 이벤트를 나타낸다. 이 인터페이스와 함께 전송되는 유일한 이벤트는 {{event("datachannel")}}이다.</dd>
 <dt>{{domxref("RTCSessionDescription")}}</dt>
 <dd>세션의 매개 변수를 나타냅니다. 각 <code>RTCSessionDescription</code>는 세션의  {{Glossary("SDP")}} 기술자(descriptor)의 기술 제안 / 응답 협상 과정의 일부를 나타내는 설명  {{DOMxRef("RTCSessionDescription.type", "type")}}으로 구성되어 있습니다.</dd>
 <dt>{{domxref("RTCStatsReport")}}</dt>
 <dd>연결 또는 연결의 개별 트랙에 대한 통계를 자세히 설명하는 정보를 제공합니다. {{domxref("RTCPeerConnection.getStats()")}}를 호출하여 보고서를 얻을 수 있습니다.</dd>
 <dt>{{domxref("RTCIceCandidate")}}</dt>
 <dd>{{domxref("RTCPeerConnection")}} 설정을 위한 후보 인터넷 연결 설정 (ICE; internet connectivity establishment) 서버를 나타냅니다.</dd>
 <dt>{{domxref("RTCIceTransport")}}</dt>
 <dd>인터넷 연결 설정 (ICE) 전송에 대한 정보를 나타냅니다.</dd>
 <dt>{{domxref("RTCPeerConnectionIceEvent")}}</dt>
 <dd>대상이있는 ICE 후보와 관련하여 발생하는 이벤트 (일반적으로 {{domxref("RTCPeerConnection")}})를 나타냅니다. {{event ( "icecandidate")}} 유형의 이벤트 만 있습니다.</dd>
 <dt>{{domxref("RTCRtpSender")}}</dt>
 <dd>{{domxref ( "RTCPeerConnection")}}에서 {{domxref ( "MediaStreamTrack")}}의 데이터 인코딩 및 전송을 관리합니다.</dd>
 <dt>{{domxref("RTCRtpReceiver")}}</dt>
 <dd>{{domxref ( "RTCPeerConnection")}}에서 {{domxref ( "MediaStreamTrack")}}의 데이터 수신 및 디코딩을 관리합니다.</dd>
 <dt>{{domxref("RTCTrackEvent")}}</dt>
 <dd>새롭게 수신된 {{domxref ( "MediaStreamTrack")}}이 생성되고 관련 {{domxref ( "RTCRtpReceiver")}} 개체가 {{domxref ( "RTCPeerConnection")}} 개체에 추가되었음을 나타냅니다.</dd>
 <dt>{{DOMxRef("RTCSctpTransport")}}</dt>
 <dd>스트림 제어 전송 프로토콜(<em>Stream Control Transmission Protocol, </em><strong>{{Glossary("SCTP")}}</strong>) 전송을 설명하는 정보를 제공하고, 모든 <code><a href="/en-US/docs/Web/API/RTCPeerConnection" title="The RTCPeerConnection interface represents a WebRTC connection between the local computer and a remote peer. It provides methods to connect to a remote peer, maintain and monitor the connection, and close the connection once it's no longer needed.">RTCPeerConnection</a></code> 데이터 채널에 대한 SCTP 패킷이 송수신되는 기본 데이터그램 전송 보안 계층 프로토콜(Datagram Transport Layer Security, <strong>{{Glossary("DTLS")}}</strong>) 전송에 접근하기 위한 방법을 제공합니다.</dd>
 <dt>
 <h4 id="Dictionaries">Dictionaries</h4>
 </dt>
 <dt>{{DOMxRef("RTCConfiguration")}}</dt>
 <dd><a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection" title="The RTCPeerConnection interface represents a WebRTC connection between the local computer and a remote peer. It provides methods to connect to a remote peer, maintain and monitor the connection, and close the connection once it's no longer needed."><code>RTCPeerConnection</code></a> 구성 옵션을 제공하는데 사용됩니다.</dd>
 <dt>{{DOMxRef("RTCIceServer")}}</dt>
 <dd>Defines how to connect to a single {{Glossary("ICE")}} server (such as a {{Glossary("STUN")}} or {{Glossary("TURN")}} server).</dd>
 <dt>{{DOMxRef("RTCRtpContributingSource")}}</dt>
 <dd>Contains information about a given contributing source (CSRC) including the most recent time a packet that the source contributed was played out.</dd>
 <dt>
 <h4 id="Types">Types</h4>
 </dt>
 <dt>{{DOMxRef("RTCSctpTransportState")}}</dt>
 <dd>Indicates the state of an {{DOMxRef("RTCSctpTransport")}} instance.</dd>
 <dt>{{DOMxRef("RTCSessionDescriptionCallback")}}</dt>
 <dd>The RTCSessionDescriptionCallback is passed into the {{DOMxRef("RTCPeerConnection")}} object when requesting it to create offers or answers.</dd>
</dl>

<h3 id="식별자와_보안">식별자와 보안</h3>

<p>WebRTC API에는 보안 및 식별자를 관리하기위한 여러 인터페이스가 포함되어 있습니다.</p>

<dl>
 <dt>{{domxref("RTCIdentityProvider")}}</dt>
 <dd>사용자 에이전트가 Identity Assertion을 생성 또는 검증을 요청할수 있도록합니다.</dd>
 <dt>{{domxref("RTCIdentityAssertion")}}</dt>
 <dd>Represents the identity of the a remote peer of the current connection. If no peer has yet been set and verified this interface returns <code>null</code>. Once set it can't be changed.</dd>
 <dt>{{domxref("RTCIdentityProviderRegistrar")}}</dt>
 <dd>식별자 공급자(idP; identity provider)를 제공합니다.</dd>
 <dt>{{domxref("RTCIdentityEvent")}}</dt>
 <dd>Represents an identity assertion generated by an identity provider (idP). This is usually for an {{domxref("RTCPeerConnection")}}. The only event sent with this type is {{event("identityresult")}}.</dd>
 <dt>{{domxref("RTCIdentityErrorEvent")}}</dt>
 <dd>Represents an error associated with the identity provider (idP). This is usually for an {{domxref("RTCPeerConnection")}}. Two events are sent with this type: {{event("idpassertionerror")}} and {{event("idpvalidationerror")}}.</dd>
 <dt>{{domxref("RTCCertificate")}}</dt>
 <dd>Represents a certificate that an {{domxref("RTCPeerConnection")}} uses to authenticate.</dd>
</dl>

<h3 id="Telephony">Telephony</h3>

<p>이러한 인터페이스들은 공중 전화망 (PTSN; public-switched telephone networks)과의 상호 작용과 관련이 있습니다</p>

<dl>
 <dt>{{domxref("RTCDTMFSender")}}</dt>
 <dd>Manages the encoding and transmission of dual-tone multi-frequency (DTMF) signaling for an {{domxref("RTCPeerConnection")}}.</dd>
 <dt>{{domxref("RTCDTMFToneChangeEvent")}}</dt>
 <dd>Indicates an occurrence of a of dual-tone multi-frequency (DTMF). This event does not bubble (except where otherwise stated) and is not cancelable (except where otherwise stated).</dd>
</dl>

<h2 id="Guides">Guides</h2>

<dl>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/Protocols">Introduction to WebRTC protocols</a></dt>
 <dd>이 문서는 WebRTC API가 구축된 기반이 되는 프로토콜을 소개한다.</dd>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/Connectivity">WebRTC connectivity</a></dt>
 <dd>WebRTC 커넥션의 작동 방식 및 다양한 프로토콜과 인터페이스를 함께 사용하여 강력한 커뮤니케이션 앱을 만드는 방법에 대한 가이드이다.</dd>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime">Lifetime of a WebRTC session</a></dt>
 <dd>WebRTC는 임의 데이터, 오디오, 비디오 또는 이들의 모든 조합에 대한 피어 투 피어 커뮤니케이션을 브라우저 어플리케이션으로 구축하도록 해준다. 이 문서에서는, 모든 방법으로 커넥션을 설정하는 것에서 부터 더 이상 필요하지 않을 때 커넥션을 닫는 것까지 WebRTC 세션의 수명에 대해 살펴볼 것이다.</dd>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling">Signaling and two-way video calling</a></dt>
 <dd>여러 사용자들 간의 화상통화를 할 수 있는 Websocket을 기반으로한 튜토리얼 및 예제이다. 채팅 서버의 웹소켓 커넥션은 WebRTC의 시그널링을 위해 사용된다.</dd>
 <dt><a href="/en-US/docs/Web/Media/Formats/WebRTC_codecs">Codecs used by WebRTC</a></dt>
 <dd>A guide to the codecs which WebRTC requires browsers to support as well as the optional ones supported by various popular browsers. Included is a guide to help you choose the best codecs for your needs.</dd>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/Using_data_channels">Using WebRTC data channels</a></dt>
 <dd>이 가이드는 두 피어 사이의 임의의 데이터를 교환하기 위해 피어 커넥션와 관련된 {{domxref("RTCDataChannel")}}을 사용할 수 있는 방법을 다룬다.</dd>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/Using_DTMF">Using DTMF with WebRTC</a></dt>
 <dd>구식 전화 시스템에 연결되는 게이트웨이와 상호 작용하기 위한 WebRTC의 지원에는 {{domxref("RTCDTMFSender")}} 인터페이스를 사용하여 DTMF 톤을 보내는 기능이 포함된다. 이 가이드는 어떻게 그렇게 하는지 보여준다.</dd>
</dl>

<h2 id="Tutorials">Tutorials</h2>

<dl>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/adapter.js">Improving compatibility using WebRTC adapter.js</a></dt>
 <dd>The WebRTC organization <a href="https://github.com/webrtc/adapter/">provides on GitHub the WebRTC adapter</a> to work around compatibility issues in different browsers' WebRTC implementations. The adapter is a JavaScript shim which lets your code to be written to the specification so that it will "just work" in all browsers with WebRTC support.</dd>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/Taking_still_photos">Taking still photos with WebRTC</a></dt>
 <dd>This article shows how to use WebRTC to access the camera on a computer or mobile phone with WebRTC support and take a photo with it.</dd>
 <dt><a href="/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample">A simple RTCDataChannel sample</a></dt>
 <dd>The {{domxref("RTCDataChannel")}} interface is a feature which lets you open a channel between two peers over which you may send and receive arbitrary data. The API is intentionally similar to the <a href="/en-US/docs/Web/API/WebSocket_API">WebSocket API</a>, so that the same programming model can be used for each.</dd>
</dl>

<h2 id="Resources">Resources</h2>

<h3 id="Protocols">Protocols</h3>

<h4 id="WebRTC-proper_protocols">WebRTC-proper protocols</h4>

<ul>
 <li><a href="http://datatracker.ietf.org/doc/draft-ietf-rtcweb-alpn/"><cite>Application Layer Protocol Negotiation for Web Real-Time Communications</cite></a></li>
 <li><a href="http://datatracker.ietf.org/doc/draft-ietf-rtcweb-audio/"><cite>WebRTC Audio Codec and Processing Requirements</cite></a></li>
 <li><a href="http://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-channel/"><cite>RTCWeb Data Channels</cite></a></li>
 <li><a href="http://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-protocol/"><cite>RTCWeb Data Channel Protocol</cite></a></li>
 <li><a href="http://datatracker.ietf.org/doc/draft-ietf-rtcweb-rtp-usage/"><cite>Web Real-Time Communication (WebRTC): Media Transport and Use of RTP</cite></a></li>
 <li><a href="http://datatracker.ietf.org/doc/draft-ietf-rtcweb-security-arch/"><cite>WebRTC Security Architecture</cite></a></li>
 <li><a href="http://datatracker.ietf.org/doc/draft-ietf-rtcweb-transports/"><cite>Transports for RTCWEB</cite></a></li>
</ul>

<h4 id="Related_supporting_protocols">Related supporting protocols</h4>

<ul>
 <li><a href="https://tools.ietf.org/html/rfc5245">Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocol</a></li>
 <li><a href="https://tools.ietf.org/html/rfc5389"><cite>Session Traversal Utilities for NAT (STUN)</cite></a></li>
 <li><a href="https://tools.ietf.org/html/rfc7064"><cite>URI Scheme for the Session Traversal Utilities for NAT (STUN) Protocol</cite></a></li>
 <li><a href="https://tools.ietf.org/html/rfc7065"><cite>Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers</cite></a></li>
 <li><a href="https://tools.ietf.org/html/rfc3264"><cite>An Offer/Answer Model with Session Description Protocol (SDP)</cite></a></li>
 <li><a href="https://datatracker.ietf.org/doc/draft-ietf-tram-turn-third-party-authz/"><cite>Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization</cite></a></li>
</ul>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<p>In additions to these specifications defining the API needed to use WebRTC, there are several protocols, listed under <a href="#Protocols">resources</a>.</p>

<h2 class="Related_Topics" id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaDevices")}}</li>
 <li>{{domxref("MediaStreamEvent")}}</li>
 <li>{{domxref("MediaStreamConstraints")}}</li>
 <li>{{domxref("MediaStreamTrack")}}</li>
 <li>{{domxref("MessageEvent")}}</li>
 <li>{{domxref("MediaStream")}}</li>
 <li><a href="https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/">Firefox multistream and renegotiation for Jitsi Videobridge</a></li>
 <li><a href="https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/">Peering Through the WebRTC Fog with SocketPeer</a></li>
 <li><a href="https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/">Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics</a></li>
</ul>
