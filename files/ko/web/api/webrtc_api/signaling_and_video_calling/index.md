---
title: Signaling and video calling
slug: Web/API/WebRTC_API/Signaling_and_video_calling
translation_of: Web/API/WebRTC_API/Signaling_and_video_calling
---
<p>{{WebRTCSidebar}} </p>

<div class="note">
<p>s이 글은 편집 및 검토가 필요하다. <a href="https://developer.mozilla.org/docs/MDN/Contribute/Howto/Do_an_editorial_review">도움을 줄 수 있는 방법</a>을 살펴보자. </p>

<p>WebRTC는 아직까지<strong> 실험적인 기술이다.</strong><br>
 일부의 기술 스펙이 안정화가 되지 않았기 때문에 각 브라우져에서 사용가능한<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling#Browser_compatibility"> 호환성 정보</a>를 확인해야한다. 또한, 기술의 문법과 패턴들은 스펙이 바뀌는 것처럼 브라우져의 버전이 높아진다면 변경될 수 있다.</p>
</div>

<h2 id="Summary">Summary  </h2>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API">WebRTC</a> 는 리얼 타임 음성, 영상, 데이터 교환을 할 수 있는 완전한 p2p 기술이다. <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Session_lifetime#Establishing_a_connection">다른 곳에서 논의한 것 처럼 </a>서로 다른 네트워크에 있는 2개의 디바이스들을 서로 위치시키기 위해서는, 각 디바이스들의 위치를 발견하는 방법과 미디어 포맷 협의가 필요하다. 이 프로세스를 <strong>시그널링</strong> <strong>signaling </strong>이라 부르고 각 디바이스들을 상호간에 동의된 서버(socket.io 혹은 websocket을 이용한 서버)에 연결시킨다. 이 서버는 각 디바이스들이 <strong>negotiation</strong>(협의) 메세지들을 교환할 수 있도록 한다.</p>

<p>이 글에서 우리는 더 나아가 유저들간에 양방향으로 화상 통화가 되는 예제인 <a href="https://mdn-samples.mozilla.org/s/websocket-chat">WebSocket chat</a>(웹소켓 문서를 작성하기 위해 만들어졌으며, 링크는 곧 활성화 될 것이다. 아직은 온라인으로 테스트가 불가능하다.)을 작동이 되도록 만들 예정이다. 이것에 관해 <a href="https://mdn-samples.mozilla.org/s/webrtc-from-chat">샘플</a> 을 확인해 보거나 Github에서 전체 <a href="https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat">프로젝트</a>를 확인해볼 수 있다.</p>

<div class="note">
<p>깃헙에 있는 테스트 서버 코드는 앞으로 공부할 예제 코드보다 최신 버전이다. 이 글은 현재 업데이트 진행 중이며, 곧 완료될 예정이다. 업데이트가 완료된다면 이 글을 사라질 것이다.</p>
</div>

<div class="note">
<p>앞으로 나올 예제들은 <strong>promise </strong>를 사용한다. 만약 너가 이것을 잘 모른다면 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">이 글</a>을 읽어 보길 바란다.</p>
</div>

<h2 id="The_signaling_server">The signaling server</h2>

<p>두 디바이스들 사이에 WebRTC 커넥션을 만들기 위해, 인터넷 네트워크에서 그 둘을 연결 시키는 작업을 해줄 <strong>signaling server </strong>가 필요하다. 어떻게 이 서버를 만들고 실제로 시그널링 과정이 어떻게 되는지 살펴보자.</p>

<p>가장 먼저, 시그널링 서버 자체가 필요하다. WebRTC는 시그널링 정보에 관한 transport 메커니즘을 제시하진 않는다. 두 피어들 사이에서 해리포터의 부엉이처럼 시그널링에 관련된 정보들을 전달해줄 수 있는 것이면 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket_API">WebSocket</a> 이든 <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a> 든 상관없다.</p>

<p>여기서 중요한 점은 시그널링 서버는 시그널링 데이터 내용을 몰라도 된다는 것이다. 비록 이것은 <a href="https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#">SDP</a> 이지만, 몰라도 큰 문제가 되진 않는다. 메세지의 내용들은 그저 시그널링 서버를 통해 상대편으로 가기만 하면된다. 중요한 점은 ICE subsystem이 신호 데이터를 다른 피어에게 보내도록 지시하면, 다른 피어는 이 정보를 수신하여 자체 ICE subsystem에 전달하는 방법을 알고 있다는 것이다.</p>

<h3 id="Readying_the_chat_server_for_signaling">Readying the chat server for signaling</h3>

<p>이 <a href="https://github.com/mdn/samples-server/tree/master/s/websocket-chat">chat server</a> 는 클라이언트와 서버 사이에 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket_API">WebSocket API</a>을 통해 JSON string으로 데이터를 전송한다. 서버는 새로운 유저를 등록하는 것, username을 세팅하는 것, 채팅 메세지를 전송하는 것 등등의 작업들을 하기 위해 다양한 메세지 타입들을 다룬다. 시그널링과 ICE negotiation 을 서버가 처리하기 위해서 코드를 작성해야한다. 모든 로그인된 유저들에게 브로드캐스팅하는 것이 아니라, 특정한 유저에게 직접 메세지를 전달해야한다. 그리고 서버가 따로 처리할 필요 없이, 수신된 원하지 않은 메세지 타입들을 처리한다. 이를 통해 여러 서버를 만들 필요없이 동일한 서버를 이용하여 시그널 메시지를 보낼 수 있다. 이 개념은 WebRTC가 아니라 WebSocket에 관한 개념이다.</p>

<p>이제, WebRTC 시그널링을 지원하는 chat server를 만들기 위해 어떻게 해야하는지 보자. 앞으로 나오는 코드들은 <a href="https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat/chatserver.js">chatserver.js</a> 안에 있는 코드이다.</p>

<p>우선 <code>sendToOneUser()</code>함수를 추가하자. 이름이 말하듯, stringified JSON 메세지를 특정한 유저에게 보내는 것이다.</p>

<pre class="brush: js notranslate">function sendToOneUser(target, msgString) {
  var isUnique = true;
  var i;

  for (i=0; i&lt;connectionArray.length; i++) {
    if (connectionArray[i].username === target) {
      connectionArray[i].sendUTF(msgString);
      break;
    }
  }
}</pre>

<p>이 함수는 연결된 유저 리스트를 확인하면서 특정한 username을 가지는 유저을 찾고, 이 유저에게 메세지를 보낸다. 함수의 인자로 들어가는 메시지 <code>msgString</code>은 stringified JSON object 이다. Stringified 가 아닌 원본의 메세지 object를 받도록 해도 되지만, JSON이 더 유용하고 편하다. 이 메세지는 이미 stringified 된 상태로 함수에 전달되기 때문에, 더 이상의 메세지에 관한 처리 없이 메세지를 그대로 보내기만 하면 된다. </p>

<p>원본 chat demo는 특정 유저에게 메세지를 보내는 것을 지원하지 않는다. Main WebSocket message handler를 수정해야 이것이 가능하게 되며, 구체적으로는<code>connection.on()</code>함수의 마지막 부분을 수정하면 된다.</p>

<pre class="brush: js notranslate">if (sendToClients) {
  var msgString = JSON.stringify(msg);
  var i;

  // If the message specifies a target username, only send the
  // message to them. Otherwise, send it to every user.
  if (msg.target &amp;&amp; msg.target !== undefined &amp;&amp; msg.target.length !== 0) {
    sendToOneUser(msg.target, msgString);
  } else {
    for (i=0; i&lt;connectionArray.length; i++) {
      connectionArray[i].sendUTF(msgString);
    }
  }
}</pre>

<p>이 코드는 메세지에서 <code>target</code> 특성이 정의되었는지 체크한다. 이 특성은 메세지를 전달하고 싶은 사람의 username으로 정의할 수 있다. 만약 <code>target</code>파라미터가 존재한다면, <code>sendToOneUser()</code>함수를 콜하면서 그 유저에게 메세지를 전송한다. 그렇지 않다면, 모든 유저에게 메세지를 브로드케스트를 한다.</p>

<p>위에 있는 코드는 별도의 수정이 필요 없이 임의의 메세지 타입들을 보낼 수 있다. 클라이언트들은 이제 특정한 유저에게 unknown 타입의 메세지도 보낼수 있고, 시그널링 메세지를 원하는 대로 보낼 수 있다. 구체적인 내용은 다음을 살펴보자.</p>

<h3 id="Designing_the_signaling_protocol">Designing the signaling protocol</h3>

<p>이제 우리는 메세지를 교환하는 메커니즘을 만들었다. 이제 메세지들을 어떻게 구성할지에 대한 프로토콜이 필요하다. 이것은 여러 가지 방법으로 가능한데, 여기서 다루는 것은 그 중 하나의 시그널링 메세지 구조이다.</p>

<p>우리가 제공하는 시그널링 서버는 stringified JSON object 을 가지고 클라언트간에 데이터를 주고 받는다. 즉, 이것은 시그널링 메세지들이 JSON format으로 되어있으며, 메세지의 type 등 메세지를 적절하게 처리할 수 있도록 여러 정보들이 포함되어 있다.</p>

<h4 id="Exchanging_session_descriptions">Exchanging session descriptions</h4>

<p>시그널링 프로세스를 시작할 때, call을 시작 하는 유저가 <em><strong>offer </strong></em>란 것을 만든다. 이 offer는 세션 정보를 SDP 포맷으로 가지고 있으며, 커넥션이 이어지기를 원하는 유저(callee)에게 전달되어야 한다. Callee 는 이 offer에 SDP description을 포함하는 <em><strong>answer </strong></em>메세지를 보내야한다. 우리가 사용할 offer 메세지들은 <code>"video-offer"</code> 이라는 타입을 사용할 것이고 answer 메세지들은 <code>"video-answer"</code> 타입의 메세지를 사용할 것이다. 이 메세지들은 아래와 같은 field를 가진다.</p>

<dl>
 <dt><code>type</code></dt>
 <dd>메세지의 타입이라; <code>"video-offer"</code> 또는 <code>"video-answer"</code>.</dd>
 <dt><code>name</code></dt>
 <dd>보내는 사람의 username 이다.</dd>
 <dt><code>target</code></dt>
 <dd>받는 사람의 username이다. (만약 caller가 메세지를 보낸다면, target은 callee 를 뜻한다, vice-versa.)</dd>
 <dt><code>sdp</code></dt>
 <dd>커넥션의 local 정보를 설명하는 SDP (Session Description Protocol) 스트링(e.g. 수신자의 관점으로 볼 때, SDP는 커넥션의 remote 정보이다.)</dd>
</dl>

<p>현 시점에서 두 피어들은 이 call에 대해 어떤 코덱들과 어떤 video parameter들이 사용될지 알게 된다. 하지만, 그들은 여전히 미디어 데이터 자체를 전송하는 방법을 모른다. 여기서 Interactive Connectivity Establishment (ICE)가 사용된다.</p>

<h4 id="Exchanging_ICE_candidates">Exchanging ICE candidates</h4>

<p>SDP를 서로 교환한 후에, 두 피어들은 <strong>ICE candidate</strong>(ICE 후보)들을 교환하기 시작한다. 각 ICE candidate는 발신 피어 입장에서 통신을 할 수 있는 방법을 설명한다. 각 피어는 검색되는 순서대로 candidate를 보내고 미디어가 이미 스트리밍을 시작 했더라도 모든 가능한 candidate가 전송 완료될 때까지 계속 보낸다. 두 피어가 서로 호환되는 candidate를 제안했다면, 미디어는 통신을 시작한다. 만약 나중에 더 나은 방법이 있다면(더 높은 성능을 가지는), 그 스트림은 필요에 따라 포맷을 바꿀 수도 있다.</p>

<p>비록 지금은 지원하지 않지만, 이 기술은 이론상 낮은 bandwidth의 연결에 대해 다운그레이드에 사용될 수 있다.</p>

<p>시그널링 서버를 통해 전달되는 ICE candidate들에 관한 메세지의 타입은 <code>"new-ice-candidate"</code> 이며, 이 메세지들은 아래 field를 가진다.</p>

<dl>
 <dt><code>type</code></dt>
 <dd>메세지 타입 : <code>"new-ice-candidate"</code>.</dd>
 <dt><code>target</code></dt>
 <dd>현재 협상을 진행 중인 사람의 username. 시그널링 서버는 이 유저에게만 직접 메세지를 보낸다.</dd>
 <dt><code>candidate</code></dt>
 <dd>제안된 커넥션 방법을 설명하는 SDP candidate string.</dd>
</dl>

<p>각 ICE 메세지들은 두 개의 컴퓨터를 서로 연결하기 위한 정보들에 덧붙여 프로토콜(TCP or UDP), IP 주소, 포트 넘버, 커넥션 타입 등을 제안한다. 여기에는 NAT 혹은 다른 복잡한 네트워킹을 포함한다.</p>

<div class="note">
<p>중요. ICE negotiation 동안 너의 코드가 해야할 것은 오직 ICE layer에서 외부로 나갈 candidate들을 선택하는 것과, <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate"><code>onicecandidate</code></a>handler가 불렸을 때 시그널링 서버를 통해 그것들을 다른 피어에 보내는 것이다. 그리고 시그널링 서버로부터 ICE candidate 메세지를 받고 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addIceCandidate"><code>RTCPeerConnection.addIceCandidate()</code></a>를 호출하여 너의 ICE layer에 그들을 전달한다. 그것 뿐이다. 정확히 무엇을 하는지 알기 전까진, 더 이상 깊이 생각하지 말자!</p>
</div>

<p>너의 시그널링 서버가 이제 해야할 일은 요청된 메세지를 보내는 것이다. 부가적으로 login/authentication 같은 기능들이 필요할 수도 있는데, 자세한 내용은 달라질 수 있다.</p>

<h2 id="Signaling_transaction_flow">Signaling transaction flow</h2>

<p>시그널링 정보는 연결할 두 피어들 사이에서 교환된다. 아주 기초적인 수준에서 어떤 메세지들이 누가 누구에게 왜 전달해야하는지 보자.</p>

<p>시그널링 프로세스는 다양한 부분에서 다음과 같은 메시지 교환을 포함한다. 각 유저의 채팅 시스템의 웹 애플리케이션 인스턴스, 각 유저의 브라우저, 시그널링 서버 그리고 호스팅 웹 서버 등.</p>

<p>Naomi와 Priya는 채팅 소프트웨어를 사용해 대화에 참여했고 Naomi는 둘 사이에 영상 통화를 하기로 결정한다. 다음 표는 이벤트들이 발생하는 과정이다.</p>

<p><a href="https://mdn.mozillademos.org/files/12363/WebRTC%20-%20Signaling%20Diagram.svg"><img alt="Diagram of the signaling process" src="https://mdn.mozillademos.org/files/12363/WebRTC%20-%20Signaling%20Diagram.svg" style="height: 865px; width: 700px;"></a></p>

<p>곧 더 자세한 설명을 볼 수 있다.</p>

<h2 id="ICE_candidate_exchange_process">ICE candidate exchange process</h2>

<p>각 피어들의 ICE layer에서 candidate들을 보내기 시작할 때, 다음 그림과 같은 교환이 일어난다.</p>

<p><a href="https://mdn.mozillademos.org/files/12365/WebRTC%20-%20ICE%20Candidate%20Exchange.svg"><img alt="Diagram of ICE candidate exchange process" src="https://mdn.mozillademos.org/files/12365/WebRTC%20-%20ICE%20Candidate%20Exchange.svg" style="height: 590px; width: 700px;"></a></p>

<p>각 피어들은 candidate 들을 전송하고, 준비가 되면 받은 candidate 들을 처리한다. Candidate들은 양 피어들이 동의할 때까지 계속 교환되며, 미디어가 송수신 되도록 만든다. "ICE exchange"은 양측이 교대로 제안을하는 것을 의미하지 않는다. 올바르게 작동할 경우, 각 피어들은 모두 소진되거나 서로 동의할 때까지 상대방에게 제안할 candidate 들을 계속 전송한다.</p>

<p>만약 조건들이 바뀐다면, 예를들어 네트워크 커넥션이 악화되면, 하나 혹은 양 피어들은 낮은 bandwidth의 미디어 해상도로 바꾸거나 다른 코덱을 사용하자고 제안할 것이다. 다음 candidate 교환에서 양 피어 모두 새로운 포맷에 동의한다면, 다른 미디어 포맷 혹은 다른 코덱으로 바뀔 수도 있다.</p>

<p>부가적으로 만약 ICE layer 내부의 프로세스를 더 자세히 이해하고 싶다면 <a href="http://tools.ietf.org/html/5245">RFC 5245: Interactive Connectivity Establishment</a>,<a href="https://tools.ietf.org/html/rfc5245#section-2.6">section 2.6 ("Concluding ICE")</a> 를 참조해라. ICE layer가 준비 되자마자 candiate들이 교환되고 미디어들은 통신되기 시작한다는 것을 기억해라. 이 모든 것은 뒤에서 알아서 돌아간다. 우리의 역할은 그저 시그널링 서버를 통해 candidate들을 서로에게 보내는 것이다.</p>

<h2 id="The_client_application">The client application</h2>

<p>지금부터 위에서 설명한 개념들을 샘플 코드를 통해서 자세히 배워보자.</p>

<p>어떤 시그널링 프로세스든지 핵심은 메세지 핸들링에 있다. Websocket을 시그널링에 꼭 사용할 필요는 없지만, 일반적인 솔루션으로 쓰인다. 다른 솔루션도 충분히 빠르고 같은 결과를 볼 수 있다.</p>

<h3 id="Updating_the_HTML">Updating the HTML</h3>

<p>클라이언트는 비디오를 표시할 공간이 필요하다. 2개의 video와 전화를 걸 button 을 정의한 HTML 코드이다.</p>

<pre class="brush: html notranslate">      &lt;div class="flexChild" id="camera-container"&gt;
        &lt;div class="camera-box"&gt;
          &lt;video id="received_video" autoplay&gt;&lt;/video&gt;
          &lt;video id="local_video" autoplay muted&gt;&lt;/video&gt;
          &lt;button id="hangup-button" onclick="hangUpCall();" disabled&gt;
            Hang Up
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>

<p>위에 있는 page structure은 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a>태그를 이용하고 CSS 사용을 허용함으로써 페이지 레이아웃 전체를 구성한다. 여기서는 레이아웃에 관한 자세한 내용은 스킵하지만, 위의 코드가 어떻게 돌아가는지 확인해보자. <a href="https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#">take a look at the CSS</a> on Github. 두개의 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a> 중 하나는 너의 self video이고 다른 하나는 상대방의 video를 위한 요소이다.</p>

<p><code>id</code>가 "<code>received_video</code>" 인 <code>&lt;video&gt;</code>element는 연결된 상대방으로부터 수신되는 비디오를 보여주는 곳이다. <code>autoplay</code>attribute는 비디오가 도달하기 시작하면 즉시 재생시키는 역할을 한다. 이것은 따로 재생에 관련된 코드를 처리할 필요를 없애준다. <code>id</code>가 "<code>local_video</code>" 인 <code>&lt;video&gt;</code>element에는 너의 카메라의 영상이 나오게된다. <code>muted</code> attribute는 너의 로컬 오디오를 음소거한다.</p>

<p>마지막으로, 통화를 끊을 수 있는 <code>id</code>가 "<code>hangup-button</code>"인 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"><code>&lt;button&gt;</code></a>은 비활성화 된 상태(아무 전화도 연결되지 않은 default 상태)로 구성된다. 그리고 이 버튼을 클릭시에 <code>hangUpCall()</code>함수가 실행 된다. 이 함수의 역할은 현재 연결된 call을 끊고 다른 피어에게 연결을 끊으라는 메세지를 전달한다.</p>

<h3 id="The_JavaScript_code">The JavaScript code</h3>

<p>어떻게 돌아가는지 알기 쉽게 하기 위해 각 기능별로 코드를 나누었다. 이 코드의 메인 부분은 <code>connect()</code>함수 안에 있다. 이 함수 안에서 6503 포트로 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"><code>WebSocket</code></a>server에 연결하며, JSON object format의 메세지를 받기 위한 handler를 설정한다. <del>이 코드는 일반적으로 이전처럼 문자 채팅 메세지를 처리한다.</del></p>

<h4 id="Sending_messages_to_the_signaling_server">Sending messages to the signaling server</h4>

<p>코드 전반에 걸쳐서 시그널링 서버에 메세지를 보내기 위해 <code>sendToServer()</code>함수를 호출한다. 이 함수는 WebSocket 커넥션을 이용하여 작동한다.</p>

<pre class="brush: js notranslate">function sendToServer(msg) {
  var msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}</pre>

<p>전달된 메세지 object는 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify()</code></a>함수에 의해 JSON string으로 바뀐다. 그 후, WebSocket 커넥션의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send"><code>send()</code></a>함수를 통해 서버로 전달된다.</p>

<h4 id="UI_to_start_a_call">UI to start a call</h4>

<p>"userlist"에 관한 코드는 <code>handleUserlistMsg()</code>함수에 있다. 왼쪽 채팅 패널에 보여지는 유저 리스트에 있는 각 연결된 유저 마다 handler 를 걸어준다. 이 함수는 (온라인 상태인 유저들의 username을 배열로 저장하고 있는) <code>users</code>property를 가지고 있는 메세지 object를 받는다. 이해하기 쉽도록 여러 섹션들에서 이 코드를 살펴 보겠다.</p>

<pre class="brush: js notranslate">function handleUserlistMsg(msg) {
  var i;

  var listElem = document.getElementById("userlistbox");

  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }

  // …</pre>

<p><code>listElem</code>변수를 통해 username들의 리스트인 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"><code>&lt;ul&gt;</code></a>을 참조한다. 그런 다음에 각 child element를 하나씩 제거하면서 목록을 비운다 .</p>

<div class="note">
<p>명백히, 바뀔 때마다 전체 리스트를 새로 만드는 것보다, 개개인을 추가 및 제거 후 업데이트하는 것이 더 효율적이다. 그러나, 예제이므로 단순하게 하겠다.</p>
</div>

<p>그 후, 새로운 user 리스트를 만든다.</p>

<pre class="brush: js notranslate">  // …

  for (i=0; i &lt; msg.users.length; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(msg.users[i]));
    item.addEventListener("click", invite, false);

    listElem.appendChild(item);
  }
}
</pre>

<p>다음으로 (채팅 서버에) 현재 연결된 각 유저들 각각을 나타내는 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"><code>&lt;li&gt;</code></a>element들을 DOM에 추가한다. 그런 다음에, username이 클릭 되었을 때 <code>invite()</code>함수를 실행시키는 listener을 추가한다. 이 함수 이것은 다른 유저에게 call을 하는 process를 시작한다.</p>

<h4 id="Starting_a_call">Starting a call</h4>

<p>통화를 하고 싶은 유저의 username을 클릭을 하면, <a href="https://developer.mozilla.org/en-US/docs/Web/Events/click"><code>click</code></a> event의 handler인<code>invite()</code>함수가 실행된다.</p>

<pre class="brush: js notranslate">var mediaConstraints = {
  audio: true, // We want an audio track
  video: true // ...and we want a video track
};

function invite(evt) {
  if (myPeerConnection) {
    alert("You can't start a call because you already have one open!");
  } else {
    var clickedUsername = evt.target.textContent;

    if (clickedUsername === myUsername) {
      alert("I'm afraid I can't let you talk to yourself. That would be weird.");
      return;
    }

    targetUsername = clickedUsername;

    createPeerConnection();

    navigator.mediaDevices.getUserMedia(mediaConstraints)
    .then(function(localStream) {
      document.getElementById("local_video").srcObject = localStream;
      myPeerConnection.addStream(localStream);
    })
    .catch(handleGetUserMediaError);
  }
}</pre>

<p>가장 먼저 해야할 일은 빠르게 여러 상태들을 점검하는 것이다. 유저가 이미 call을 열었는지, 혹은 유저가 자신에게 call을 신청했는지 등, 이 케이스들에는 새로운 call을 시도할 이유가 없다. 따라서 왜 call을 하지 못하는지 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"><code>alert()</code></a>를 통해 설명한다.</p>

<p>그 다음에 call을 하려는 유저의 이름을 <code>targetUsername</code>변수 안에 넣고 <code>createPeerConnection()</code>함수를 실행시킨다. 이 함수는 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a> 의 기본적인 구성과 기능을 수행한다.</p>

<p><code>RTCPeerConnection</code> 이 생성되면, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices/getUserMedia"><code>Navigator.mediaDevices.getUserMedia</code></a>함수를 통해 유저의 카메라와 마이크에 권한을 요청한다. 카메라와 마이크에서 나오는 로컬 스트림을 로컬 비디오 preview의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaElement/srcObject"><code>srcObject</code></a>property에 설정한다. 그리고 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>element가 자동으로 들어오는 비디오를 재생하도록 구성되었기 때문에, stream은 로컬 preview box에서 재생을 시작한다.</p>

<p>그 다음에 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>에 stream을 추가하기 위해 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addStream"><code>myPeerConnection.addStream()</code></a>함수를 실행한다. WebRTC 커녁션이 완전히 준비되지 않았더라도 WebRTC 커넥션에 stream을 보내기 시작한다.</p>

<p>만약 local media stream을 가져오는 동안 에러가 발생한다면, <code>catch</code> clause가 <code>handleGetUserMediaError()</code>함수를 불러 필요에 따라 유저에게 적절한 에러 메세지를 보여줄 것이다.</p>

<h4 id="Handling_getUserMedia_errors">Handling getUserMedia() errors</h4>

<p><code>getUserMedia()</code>에 의해 리턴된 <code>promise</code>가 실패로 끝나면, <code>handleGetUserMediaError()</code>함수가 실행된다.</p>

<pre class="brush: js notranslate">function handleGetUserMediaError(e) {
  switch(e.name) {
    case "NotFoundError":
      alert("Unable to open your call because no camera and/or microphone" +
            "were found.");
      break;
    case "SecurityError":
    case "PermissionDeniedError":
      // Do nothing; this is the same as the user canceling the call.
      break;
    default:
      alert("Error opening your camera and/or microphone: " + e.message);
      break;
  }

  closeVideoCall();
}</pre>

<p>에러 메세지는 모든 케이스 중 하나만 표시된다. 이 예제에서 call을 취소하는 거와 같이, 미디어 하드웨어의 접근 권한을 거부하는 것에 대해 발생하는 에러들( <code>"SecurityError"</code> 와<code>"PermissionDeniedError"</code>)은 무시한다.</p>

<p>Stream을 가져오는 것을 실패하는 이유와 관계 없이, <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>을 닫기 위해 <code>closeVideoCall()</code>function를 부른다. 그리고 call을 하기 위해 할당된 리소스들을 반납한다. 이 코드는 일부분만 실행된 call을 안전하게 처리할 수 있도록 설계되었다.</p>

<h4 id="Creating_the_peer_connection">Creating the peer connection</h4>

<p><code>createPeerConnection()</code>함수는 caller와 callee에서 WebRTC 커넥션의 각 종점을 나타내는 <a href="https://developer.mozilla.org/ko/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>object를 생성하는데 사용된다. Caller는 <code>invite()</code>함수를 통해, callee는 <code>handleVideoOfferMsg()</code> 에 의해 실행된다.</p>

<p>이것은 상당히 명료하다:</p>

<pre class="brush: js notranslate">var myHostname = window.location.hostname;

function createPeerConnection() {
  myPeerConnection = new RTCPeerConnection({
      iceServers: [     // Information about ICE servers - Use your own!
        {
          urls: "turn:" + myHostname,  // A TURN server
          username: "webrtc",
          credential: "turnserver"
        }
      ]
  });

// …
</pre>

<p>웹서버와 같은 호스트에 STUN/TURN 서버를 돌리고 있기 때문에, STUN/TURN 서버의 도메인 이름을 <a href="https://developer.mozilla.org/ko/docs/Web/API/Location/hostname"><code>location.hostname</code></a>을 사용하여 설정했다. 만약 다른 서버의 STUN/TURN 서버를 사용한다면 urls 값을 그 서버로 바꿔주면 된다.</p>

<p><code>RTCPeerConnection</code>을 만들 때, call을 구성하는 파라미터들을 명시해줘야한다. 가장 중요한 것은 STUN/TURN 서버의 리스트(<a href="https://developer.mozilla.org/en-US/docs/Glossary/ICE">ICE</a> layer에서 caller와 callee의 경로를 찾는데 사용되는 서버)를 담고 있는 <code>iceServers</code>이다<strong>(주의. 웹소켓을 이용한 시그널링 서버와 전혀 다른 개념이다)</strong>. WebRTC는 두 피어가 방화벽이나 NAT 뒤에 숨어 있어도, 각 피어들의 서로 연결될 수 있도록 피어간 연결 경로를 찾아주는 프로토콜(STUN, TURN)을 사용한다.</p>

<div class="note">
<p>직접 만든 혹은 사용할 권한을 가지고 있는 STUN/TURN 서버를 사용해야 한다.</p>
</div>

<p><code>iceServers</code>parameter는 object의 배열이고 각각은 STUN/TURN 서버의 URL인 <code>urls</code>field를 무조건 포함한다. 예제에서, ICE layer에서 다른 피어를 찾아 연결 시키기 위한 서버를 제공한다. 이 서버는 TURN 서버이며, Web 서버와 같은 hostname에서 돌아간다. TURN 서버의 description에 <code>username</code>과<code>credential</code>field에 각각 username과 password 정보를 항상 포함시켜야한다는 것을 유의해라.</p>

<h5 id="Set_up_event_handlers">Set up event handlers</h5>

<p><a href="https://developer.mozilla.org/ko/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>이 생성되면, 중요한 이벤트들을 위한 handler를 설정해야한다.</p>

<pre class="brush: js notranslate">// …
  myPeerConnection.onicecandidate = handleICECandidateEvent;
  myPeerConnection.onaddstream = handleAddStreamEvent;
  myPeerConnection.onremovestream = handleRemoveStreamEvent;
  myPeerConnection.oniceconnectionstatechange = handleICEConnectionStateChangeEvent;
  myPeerConnection.onicegatheringstatechange = handleICEGatheringStateChangeEvent;
  myPeerConnection.onsignalingstatechange = handleSignalingStateChangeEvent;
  myPeerConnection.onnegotiationneeded = handleNegotiationNeededEvent;
}</pre>

<p>위에 있는 이벤트 핸들러 중 처음 두 개는 필수이다. WebRTC로 스트리밍된 미디어와 관련된 것들을 다루기위해 두 핸들러를 설정해야한다. <a href="https://developer.mozilla.org/ko/docs/Web/Reference/Events/removestream"><code>removestream</code></a>event는 스트리밍이 중단된 것을 감지하는데 유용하다. 따라서 아마 이것도 사용하게 될 것이다. 남아 있는 4개는 필수적인 것은 아니나, 직접 사용해보자. 이것들 외에도 다른 이벤트들을 사용할 수 있으나 여기에서는 다루지 않겠다. 각 핸들러에 관한 요약 설명이다.</p>

<dl>
 <dt>{{domxref("RTCPeerConnection.onicecandidate")}}</dt>
 <dd>로컬 ICE layer는 시그널링 서버를 통해 다른 피어에 ICE candidate를 전송하고자 할 때, 너의 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/icecandidate"><code>icecandidate</code></a>event handler를 호출한다.</dd>
 <dt>{{domxref("RTCPeerConnection.onaddstream")}}</dt>
 <dd><a href="https://developer.mozilla.org/en-US/docs/Web/Events/addstream"><code>addstream</code></a>event를 위한 이 핸들러는 너의 커넥션에 remote stream이 추가된 것을 알려주기 위해, 로컬 WebRTC layer에 의해 불려진다. 예를들어, 이것은 들어오는 stream을 element에 연결시켜 디스플레이 되게 만들 때 사용된다. 더 자세한 내용은 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#Receiving_new_streams">Receiving new streams</a> 을 참조해라.</dd>
 <dt>{{domxref("RTCPeerConnection.onremovestream")}}</dt>
 <dd>커넥션에서 remote가 stream을 제거할 때, <code>onaddstream</code>의 반대인 <code>onremovestream은</code> <a href="https://developer.mozilla.org/en-US/docs/Web/Events/removestream"><code>removestream</code></a> event을 처리하기위해 실행된다.</dd>
 <dt>{{domxref("RTCPeerConnection.oniceconnectionstatechange")}}</dt>
 <dd>ICE 커넥션의 상태 변경을 알리기위해 ICE layer가 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/iceconnectionstatechange"><code>iceconnectionstatechange</code></a> event 를 보낸다. 이것을 통해 커넥션이 실패하거나 끊어지는 것을 알 수 있다. 이 것에 대한 예제를 아래의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#ICE_connection_state">ICE connection state</a> 에서 볼 것이다.</dd>
 <dt>{{domxref("RTCPeerConnection.onicegatheringstatechange")}}</dt>
 <dd>하나의 상태에서 다른 상태(예를들어, candidate를 모으기 시작하거나 negotiation이 끝났을 때)로 ICE agent의 candidate 수집 프로세스가 변하면, ICE layer는 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/icegatheringstatechange"><code>icegatheringstatechange</code></a> event를 보낸다. 아래의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#ICE_gathering_state">ICE gathering state</a> 을 참조해라.</dd>
 <dt>{{domxref("RTCPeerConnection.onsignalingstatechange")}}</dt>
 <dd>시그널링 프로세스의 state가 바뀌게 될 때, WebRTC 인프라는 너에게 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/signalingstatechange"><code>signalingstatechange</code></a> message를 보낸다. <a href="https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#">Signaling state</a> 에서 코드를 볼 수 있다.</dd>
 <dt>{{domxref("RTCPeerConnection.onnegotiationneeded")}}</dt>
 <dd>이 함수는 WebRTC 인프라가 session negotiation 프로세스를 새로 시작해야할 때마다 불린다. 이것의 일은 callee에게 offer를 생성 후 전달하고, 우리에게 연결을 할 것인지 물어보는 것이다. 어떻게 처리하는지 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#Starting_negotiation">Starting negotiation</a> 를 참조해라.</dd>
</dl>

<h4 id="Starting_negotiation">Starting negotiation</h4>

<p>Caller가 자신의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>과 media stream을 생성하고 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#Starting_a_call">Starting a call</a>에서 보이는 것처럼 커넥션에 추가하면, 브라우져는 다른 피어와 커넥션이 준비가 될 때 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/negotiationneeded"><code>negotiationneeded</code></a> event를 활성화 시킬 것이다. 밑에는 이벤트를 핸들링하는 코드이다.</p>

<pre class="brush: js notranslate">function handleNegotiationNeededEvent() {
  myPeerConnection.createOffer().then(function(offer) {
    return myPeerConnection.setLocalDescription(offer);
  })
  .then(function() {
    sendToServer({
      name: myUsername,
      target: targetUsername,
      type: "video-offer",
      sdp: myPeerConnection.localDescription
    });
  })
  .catch(reportError);
}</pre>

<p>Negotiation 프로세스를 시작하기 위해, 우리가 연결하고자 하는 피어에게 SDP offer를 생성하고 전송해야한다. 이 offer는 커넥션에 로컬로 추가한 media stream 정보(call의 다른 피어에게 전달하고 싶은 비디오)와 ICE layer에 의해 미리 모아 놓은 ICE candidates 정보들을 포함해, 커넥션에 지원되는 구성 목록들을 포함한다. <a href="https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#"><code>myPeerConnection.createOffer()</code></a>를 호출함으로써 이 offer를 생성한다. 이 것이 성공한다면(promise에서 fulfill되면), <a href="https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#"><code>myPeerConnection.setLocalDescription()</code></a>으로 생성된 offer 정보를 전달한다.<a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription"><code>myPeerConnection.setLocalDescription()</code></a>은 커넥션에서 자신의 미디어 구성 상태나 연결 정보들을 구성한다.</p>

<div class="note">
<p>기술적으로 말하자면, <code>createOffer()</code>에 의해 리턴되는 blob은 <a href="http://tools.ietf.org/html/3264">RFC 3264</a> offer 이다.</p>
</div>

<p><code>setLocalDescription()</code>이 완료되어 promise를 리턴하면, description 이 유효하고 세팅 되었음을 알 수 있다. 그 이후에 local description을 포함하는 새로운 <code>"video-offer"</code>message를 만들어 시그널링 서버를 통해 다른 피어에게 전송한다. 이 offer는 다음과 같은 내용을 가진다.</p>

<dl>
 <dt><code>type</code></dt>
 <dd>메세지의 타입은 <code>"video-offer"</code>.</dd>
 <dt><code>name</code></dt>
 <dd>caller의 username.</dd>
 <dt><code>target</code></dt>
 <dd>call을 하고자 하는 user의 name.</dd>
 <dt><code>sdp</code></dt>
 <dd>offer에 관한 설명을 하는 SDP blob.</dd>
</dl>

<p><code>createOffer()</code>이나 다른 fulfillment 핸들러에서 에러가 발생한다면, <code>reportError()</code>함수가 실행되어 에러를 보고한다.</p>

<p><code>setLocalDescription()</code>의 fulfillment 핸들러가 실행되면, ICE agent는 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/icecandidate"><code>icecandidate</code></a>event들을 처리하기 시작한다.</p>

<h4 id="Session_negotiation">Session negotiation</h4>

<p>이제 다른 피어와 협상을 할 것이다. 다른 피어는 우리의 offer를 받을 것이고, <code>handleVideoOfferMsg()</code>에 전달한다. Callee에게 <code>"video-offer"</code>message가 도착 했을 때의 이야기를 계속해보자.</p>

<h5 id="Handling_the_invitation">Handling the invitation</h5>

<p>offer가 도착할 때, callee의 <code>handleVideoOfferMsg()</code>함수가 실행되고, offer를 포함한 <code>"video-offer"</code>message를 받을 것이다. 이 코드는 2가지를 해야한다. 첫째, 자기 자신의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>과 media stream을 생성해야 한다. 두번째, 받은 offer를 분석하고 애이에 대한 answer를 만들어 보내야한다.</p>

<pre class="brush: js notranslate">function handleVideoOfferMsg(msg) {
  var localStream = null;

  targetUsername = msg.name;

  createPeerConnection();

  var desc = new RTCSessionDescription(msg.sdp);

  myPeerConnection.setRemoteDescription(desc).then(function () {
    return navigator.mediaDevices.getUserMedia(mediaConstraints);
  })
  .then(function(stream) {
    localStream = stream;

    document.getElementById("local_video").srcObject = localStream;
    return myPeerConnection.addStream(localStream);
  })

// …
</pre>

<p>이 코드는 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling#Starting_a_call">Starting a call</a>에 있는 <code>invite()</code>함수와 매우 비슷하다. 먼저, <code>createPeerConnection()</code>함수를 이용해서 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>를 생성하고 구성한다. 그 후에, <code>"video-offer"</code>message로부터 얻은 SDP offer를 가지고 caller의 session description을 나타내는 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription"><code>RTCSessionDescription</code></a>object를 생성한다.</p>

<p>그 후에, session description은 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setRemoteDescription"><code>myPeerConnection.setRemoteDescription()</code></a> 안으로 전달된다. 이를 통해, 받은 offer를 caller의 session 정보로 저장한다. 설정에 성공했다면, promise fulfillment handler(<code>then()</code>clause)은 callee의 카메라와 마이크에 접근하고 stream을 설정하는 등 이전에 <code>invite()</code>에서 본 것과 같은 프로세스를 시작한다.</p>

<p>local stream이 작동한다면, 이제 SDP answer를 만든 후 caller에게 보내야 한다.</p>

<pre class="brush: js notranslate">  .then(function() {
    return myPeerConnection.createAnswer();
  })
  .then(function(answer) {
    return myPeerConnection.setLocalDescription(answer);
  })
  .then(function() {
    var msg = {
      name: myUsername,
      target: targetUsername,
      type: "video-answer",
      sdp: myPeerConnection.localDescription
    };

    sendToServer(msg);
  })
  .catch(handleGetUserMediaError);
}</pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addStream"><code>RTCPeerConnection.addStream()</code></a> 이 성공적으로 완료되었다면, 그 다음 fulfillment handler가 실행될 것이다. SDP answer string을 만들기 위해 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createAnswer"><code>myPeerConnection.createAnswer()</code></a>를 실행한다. 커넥션에서 callee의 로컬 description을 설정하기 위해 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription"><code>myPeerConnection.setLocalDescription</code></a>에 생성한 SDP를 전달한다.</p>

<p>최종 answer는 caller에게 보내져서, 어떻게 callee에게 닿을 수 있는지 알게해준다. <code>"video-answer"</code>message의 <code>sdp</code>property에 callee의 answer를 포함하고, caller에게 이 메세지를 전달한다.</p>

<p>에러가 발생하면 <code>handleGetUserMediaError()</code>으로 전달되고, <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling#Handling_getUserMedia%28%29_errors">Handling getUserMedia() errors</a>에 잘 설명되어 있다.</p>

<div class="note">
<p>caller와 마찬가지로 <code>setLocalDescription()</code>fulfillment handler가 실행되면, 브라우져는 callee가 반드시 처리해야하는 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/icecandidate"><code>icecandidate</code></a>event들을 처리하기 시작한다.</p>
</div>

<h5 id="Sending_ICE_candidates">Sending ICE candidates</h5>

<p>caller가 callee로부터 answer를 받으면 모든 것이 끝났다고 생각할 수 있지만, 그렇지 않다. 뒷단 에서는 각 피어들의 ICE agent들이 열심히 ICE candidate message들을 교환한다. 미디어 통신이 어떻게 연결될 수 있는지에 대한 방법들을 알릴 때까지, 각 피어들은 상대방에게 계속해서 candidate들을 보낸다. 이 candidate들은 너의 시그널링 서버를 통해서 전송되어야 한다. ICE는 너의 시그널링 서버에 대해 모르기 때문에, 너는 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/icecandidate"><code>icecandidate</code></a>event를 위한 핸들러를 불러서 전송된 candidate 들을 너의 코드로 직접 처리해야한다.</p>

<p>너의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/onicecandidate"><code>onicecandidate</code></a>handler는 <code>candidate</code>property가 candidate의 정보를 담고 있는 SDP(단, candidate들의 끝에는<code>null</code>이 찍혀있다) 인 이벤트들을 받는다. 이것이 너의 시그널링 서버를 통해 다른 피어에게 전송해야할 것들이다. 밑에 구현 예제가 있다.</p>

<pre class="brush: js notranslate">function handleICECandidateEvent(event) {
  if (event.candidate) {
    sendToServer({
      type: "new-ice-candidate",
      target: targetUsername,
      candidate: event.candidate
    });
  }
}</pre>

<p>이 코드에서 candidate를 포함하는 object를 만들고 다른 피어에 보낸다. <code>sendToServer()</code>함수는 위에서 이미 다뤘으며 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling#Sending_messages_to_the_signaling_server">Sending messages to the signaling server</a>에 코드가 있다. message의 property들이 의미하는 것은 다음과 같다.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>ICE candidate가 보내야하는 곳의 username. 이것을 통해 시그널링 서버가 메세지를 타겟에게 전달한다.</dd>
 <dt><code>type</code></dt>
 <dd>메세지 타입은 <code>"new-ice-candidate"</code>.</dd>
 <dt><code>candidate</code></dt>
 <dd>ICE layer가 다른 피어에게 전송하고자하는 candidate object.</dd>
</dl>

<p>메세지의 포맷(시그널링을 처리하는 모든 메세지들은)은 모두 너의 영역이고, 너가 필요한 것에 달렸다. 너가 또다른 필요한 정보가 있다면 추가할 수 있다. 메세지는 그저 JSON stringfied 되어 상대방에게 전달될 뿐이다.</p>

<div class="note">
<p>Call의 다른 피어로부터 ICE candidate가 도착할 때, <a href="https://developer.mozilla.org/en-US/docs/Web/Events/icecandidate"><code>icecandidate</code></a>event가 전송되는 것이 <strong>아님을 항상 명심해라</strong>. 대신에 너 자신이 call을 할 때 보내는 것으로, 너가 원하는 채널을 통해 data를 보낼 수 있다. WebRTC를 처음 접한다면 매우 헷갈릴 것이다.</p>
</div>

<h5 id="Receiving_ICE_candidates">Receiving ICE candidates</h5>

<p>시그널링 서버는 어떤 방법을 고르던 간에 각 ICE candidate를 목적지까지 배달한다. 이번 예제 에서는 type이 <code>"new-ice-candidate"</code>인 JSON object를 사용한다. <code>handleNewICECandidateMsg()</code>함수는 이 메세지들을 처리하기 위해 실행된다.</p>

<pre class="brush: js notranslate">function handleNewICECandidateMsg(msg) {
  var candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate)
    .catch(reportError);
}</pre>

<p>수신된 SDP를 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate"><code>RTCIceCandidate</code></a> 생성자의 인자로서 전달하여 object를 생성하고, 이 object를 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addIceCandidate"><code>myPeerConnection.addIceCandidate()</code></a> 에 전달한다. 이 함수를 통해 새로운 ICE candidate를 local ICE layer에 전달하고, 드디어 candidate 를 핸들링하는 프로세스에서 우리의 역할은 끝났다.</p>

<p>각 피어는 작동할 것으로 보이는 각 커넥션 메소드의 candidate를 다른 피어에게 보낸다. 양측은 합의에 도달하고 커넥션을 open한다. 협약을 진행 중에도 더 나은 커넥션 메소드를 찾거나, 단순히 피어가 커넥션을 설정할 때 candidate 교환이 진행 중이었을 수 있기 때문에, candidate는 여전히 송,수신 될 수 있음을 기억해라.</p>

<h5 id="Receiving_new_streams">Receiving new streams</h5>

<p>리모트 피어가 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addStream"><code>RTCPeerConnection.addStream()</code></a>를 부름으로써, 또는 stream format에 대한 renegotiation(재협상)에 의해 새로운 스트림이 커넥션에 추가되었을 때, <a href="https://developer.mozilla.org/en-US/docs/Web/Events/addstream"><code>addstream</code></a>event가 발생한다. 어떻게 처리하는지 아래 코드를 보자.</p>

<pre class="brush: js notranslate">function handleAddStreamEvent(event) {
  document.getElementById("received_video").srcObject = event.stream;
  document.getElementById("hangup-button").disabled = false;
}</pre>

<p>이 함수는 들어오는 stream을 id가 <code>"received_video"</code>인 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>element에 할당하고, 유저가 전화를 받을 수 있도록 버튼을 활성화한다.</p>

<p>이 코드가 제대로 실행된다면, 드디어 다른 피어에서 오는 비디오를 로컬 브라우저에서 볼 수 있게 된다!</p>

<h5 id="Handling_the_removal_of_streams">Handling the removal of streams</h5>

<p>리모트 피어가 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/removeStream"><code>RTCPeerConnection.removeStream()</code></a>를 호출하여 커넥션으로부터 스트림을 없애면, <a href="https://developer.mozilla.org/en-US/docs/Web/Events/removestream"><code>removestream</code></a>event가 발생하게 된다.</p>

<pre class="brush: js notranslate">function handleRemoveStreamEvent(event) {
  closeVideoCall();
}</pre>

<p>이 함수는 <code>closeVideoCall()</code>함수를 실행시켜 call이 닫히도록 만들고, 다른 커넥션을 시작할 수 있도록 기존 인터페이스를 버린다. 어떻게 코드가 동작하는지 <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling#Ending_the_call">Ending the call</a>을 참조해라.</p>

<h4 id="Ending_the_call">Ending the call</h4>

<p>There are many reasons why calls may end. A call might have completed, with one or both sides having hung up. Perhaps a network failure has occurred. Or one user might have quit their browser, or had a systen crash.</p>

<h5 id="Hanging_up">Hanging up</h5>

<p>When the user clicks the "Hang Up" button to end the call, the <code>hangUpCall()</code> function is apllied:</p>

<pre class="brush: js notranslate">function hangUpCall() {
  closeVideoCall();
  sendToServer({
    name: myUsername,
    target: targetUsername,
    type: "hang-up"
  });
}</pre>

<p><code>hangUpCall()</code> executes <code>closeVideoCall()</code>, shutting down and resetting the connection and related resources. We then build a <code>"hang-up"</code> message, sending this to the other end of the call, allowing the other peer to neatly shut down.</p>

<h5 id="Ending_the_call_2">Ending the call</h5>

<p>아래에 있는 <code>closeVideoCall()</code>함수는 stream들을 멈추고 지운 후에,<a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>object를 없앤다.</p>

<pre class="brush: js notranslate">function closeVideoCall() {
  var remoteVideo = document.getElementById("received_video");
  var localVideo = document.getElementById("local_video");

  if (myPeerConnection) {
    if (remoteVideo.srcObject) {
      remoteVideo.srcObject.getTracks().forEach(track =&gt; track.stop());
      remoteVideo.srcObject = null;
    }

    if (localVideo.srcObject) {
      localVideo.srcObject.getTracks().forEach(track =&gt; track.stop());
      localVideo.srcObject = null;
    }

    myPeerConnection.close();
    myPeerConnection = null;
  }

  document.getElementById("hangup-button").disabled = true;

  targetUsername = null;
}</pre>

<p>2개의 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a>element를 참조한 이후에, WebRTC 커넥션이 존재하는지 체크한다. 만약 있다면, call을 끊고 닫는다:</p>

<ol>
 <li>리모트와 로컬 비디오 stream에 대해서, 각 track들 마다 <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaTrack/stop"><code>MediaTrack.stop()</code></a>를 실행시킨다.</li>
 <li>양 비디오의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject"><code>HTMLMediaElement.srcObject</code></a>property를 <code>null</code>로 바꿔 stream에 관한 모든 참조를 푼다.</li>
 <li>
  <p><a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/close"><code>myPeerConnection.close()</code></a>를 불러 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection"><code>RTCPeerConnection</code></a>을 닫는다.</p>
 </li>
 <li>
  <p><code>myPeerConnection</code>변수의 값을 <code>null</code>로 바꿔서 계속 진행중인 call이 없다는 것을 전체 코드가 알게 한다. 이것은 유저가 유저 리스트에서 username을 클릭할 때 사용된다.</p>
 </li>
</ol>



<p>마지막으로, "Hang Up" 버튼의 <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/disabled"><code>disabled</code></a> property를 <code>true</code>로 바꿔서 call이 없는 동안에는 클릭이 불가능하게 만든다. 그 다음에 더이상 통화를 하지 않으므로 <code>targetUsername</code>을 <code>null</code>로 바꾼다. 이것을 통해 또 다른 유저에게 call을 하거나 새로운 call을 받을 수 있다.</p>

<h4 id="Dealing_with_state_changes">Dealing with state changes</h4>

<p>다양한 상태 변화를 너의 코드에 알리기 위해 listener를 세팅할 수 있는 다양한 이벤트들이 있다. 그 중에 다음 3가지를 사용하겠다.: {{event("iceconnectionstatechange")}}, {{event("icegatheringstatechange")}}, and {{event("signalingstatechange")}}.</p>

<h5 id="ICE_connection_state">ICE connection state</h5>

<p>커넥션 state가 바뀌면(예를들어, call이 다른쪽에서 중단 될 때) ICE layer가 <a href="https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#"><code>iceconnectionstatechange</code></a>event를 우리에게 보낸다.</p>

<pre class="brush: js notranslate">function handleICEConnectionStateChangeEvent(event) {
  switch(myPeerConnection.iceConnectionState) {
    case "closed":
    case "failed":
    case "disconnected":
      closeVideoCall();
      break;
  }
}</pre>

<p>ICE connection state가 <code>"closed"</code>, 또는<code>"failed"</code>, 또는 <code>"disconnected"</code>으로 바뀔 때 <code>closeVideoCall()</code>함수를 실행한다. 커넥션을 끊으며, 처음(또는 accept) call 상태로 돌아간다.</p>

<h5 id="ICE_signaling_state">ICE signaling state</h5>

<p>마찬가지로 <a href="https://developer.mozilla.org/en-US/docs/Web/Events/signalingstatechange"><code>signalingstatechange</code></a>event를 받을 수 있는데, 시그널링 상태가 <code>"closed"</code>으로 바뀌면 call을 완전히 종료시킨다.</p>

<pre class="brush: js notranslate">  myPeerConnection.onsignalingstatechange = function(event) {
    switch(myPeerConnection.signalingState) {
      case "closed":
        closeVideoCall();
        break;
    }
  };</pre>

<h5 id="ICE_gathering_state">ICE gathering state</h5>

<p>{{event("icegatheringstatechange")}} events are used to let you know when the ICE candidate gathering process state changes. Our example doesn't use this for anything, but we're implementing it for logging, observing via the console log how the whole process works.</p>

<pre class="brush: js notranslate">function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
</pre>

<h2 id="Next_steps">Next steps</h2>

<p>You can now <a href="https://webrtc-from-chat.glitch.me/">play with this sample</a> to see it in action. Open the Web console on both devices and look at the logged output—although you don't see it in the code as shown above, the code on the server (and on <a href="https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat">GitHub</a>) has a lot of console output so you can see the signaling and connection processes at work.</p>
