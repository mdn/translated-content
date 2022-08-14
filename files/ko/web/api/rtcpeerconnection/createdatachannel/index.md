---
title: RTCPeerConnection.createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
translation_of: Web/API/RTCPeerConnection/createDataChannel
---
<p>{{APIRef("WebRTC")}}</p>

<p><span class="seoSummary">{{domxref("RTCPeerConnection")}} 인터페이스의 <strong><code>createDataChannel()</code></strong> 메소드는 어떤 형식의 데이터든 송신 할 수 있도록 원격 유저와 연결하는 신규 채널을 생성합니다.</span>이 방법은 이미지, 파일 전송, 문자 채팅, 게임 패킷 업데이트 등과 같은 백채널 컨텐츠에 유용하게 사용 가능합니다.</p>

<p>연결 인터페이스에 신규 채널이 처음 추가되면, 재협상 과정이 {{event("negotiationneeded")}} 이벤트를 전달하여 시작됩니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>dataChannel</em> = <em>RTCPeerConnection</em>.createDataChannel(<em>label</em>[, <em>options</em>]);</pre>

<h3 class="syntaxbox" id="매개변수">매개변수</h3>

<dl>
 <dt><code>label</code></dt>
 <dd>사람이 읽을 수 있는 채널 이름입니다. 이름의 문자열은 65,535 바이트 보다 작아야합니다.</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd><a href="#RTCDataChannelInit_dictionary"><code>RTCDataChannelInit</code> dictionary</a>가 데이터 채널에 대한 설정 옵션들을 제공합니다. </dd>
</dl>

<h3 id="RTCDataChannelInit_딕셔너리">RTCDataChannelInit 딕셔너리</h3>

<p><code>RTCDataChannelInit</code> 딕셔너리는 개발자의 필요에 따라 데이터 채널을 설정 할 때 객체로 전달되는 옵션 매개변수로 전달되는 객체에 포함 될 수 있는 다음의 필드들을 제공합니다:</p>

<dl>
 <dt><code>ordered</code> {{optional_inline}}</dt>
 <dd>이 옵션은 {{domxref("RTCDataChannel")}}에 전달된 메세지가 보내진 순서대로 상대방에게 도착해야하는지 (<code>true</code>) 아니면 순서가 달라도 허용 (<code>false</code>)이 되는지를 결정합니다. <strong>기본 값: <code>true</code>.</strong></dd>
 <dt><strong><code>maxPacketLifeTime</code> {{optional_inline}}</strong></dt>
 <dd>불안정한 모드에서 메세지를 전송 할 때 최대 몇 초 동안 전송을 시도 할 것인지를 결정하는 옵션입니다. 이 값은 16bit의 부호가 없는 정수형이지만, 각 유저 에이전트는 적절하다고 판단되는 최대 값으로 지정 할 수 있습니다. (<strong>주의</strong>: <strong><code>maxPacketLifeTime</code></strong> 혹은 <strong><code>maxRetransmits</code> </strong>옵션 둘 중 하나만 사용해야함.) <strong>기본 값: <code>null</code>.</strong></dd>
 <dt><code>maxRetransmits</code> {{optional_inline}}</dt>
 <dd>불안정한 모드에서 메세지 전송이 실패하면 최대 몇 번을 재시도 할 것인지를 결정하는 옵션입니다. 이 값은 16bit의 부호가 없는 정수형이지만, 각 유저 에이전트는 적절하다고 판단되는 최대 값으로 지정 할 수 있습니다. (<strong>주의</strong>: <strong><code>maxPacketLifeTime</code></strong> 혹은 <strong><code>maxRetransmits</code> </strong>옵션 둘 중 하나만 사용해야함.) <strong>기본 값: <code>null</code>.</strong></dd>
 <dt><code>protocol</code> {{optional_inline}}</dt>
 <dd>{{domxref("RTCDataChannel")}}에 사용되는 서브 프로토콜의 이름입니다. 존재하지 않으면 이 옵션은 빈 문자열 (<code>""</code>)입니다. <strong>기본 값: 빈 문자열, <code>""</code>.</strong> 이 문자열은 65,535 바이트 보다 작아야합니다.</dd>
 <dt><code>negotiated</code> {{optional_inline}}</dt>
 <dd>기본 값일 경우 (<code>false</code>), 데이터채널은 밴드의 대역 내에서 협상됩니다. 이 때, 한 쪽은 <code>createDataChannel</code>를 호출하고, 다른 쪽에서는 {{domxref("RTCDataChannelEvent")}} 이벤트를 <code>ondatachannel</code> <code>EventHandler</code>를 사용해서 감청합니다. 반대로 <code>true</code> 일 경우, 밴드의 대역 범위를 벗어나도 재협상이 가능해집니다. 이 때에는 양쪽에서 합의된 id를 가진 <code>createDataChannel</code>을 호출하게됩니다. <strong>기본 값: <code>false</code>. </strong></dd>
 <dt><code>id</code> {{optional_inline}}</dt>
 <dd>채널에 대한 16bit 숫자형 ID입니다. 허용되는 값은 0에서 65534 사이입니다. 이 값을 지정하지 않으면, 유저 에이전트가 알아서 ID를 지정해줍니다.</dd>
</dl>

<div class="note">
<p><code>RTCDataChannelInit</code> 딕셔너리를 사용해서 설정이 가능한 옵션들은 {{domxref("RTCDataChannel")}} 인터페이스에서 설정이 가능한 특성들의 서브 셋을 뜻합니다.</p>
</div>

<h3 id="반환_값">반환 값</h3>

<p>지정한 <code>label</code>을 가지고, <code>options</code>에 지정한 옵션들을 사용하여 설정된 신규 {{domxref("RTCDataChannel")}} 객체입니다. 각 매개변수들을 지정하지 않으면, 기본 값으로 설정되어 생성됩니다.</p>

<h3 id="예외처리">예외처리</h3>

<dl>
 <dt><code>InvalidStateError</code></dt>
 <dd>{{domxref("RTCPeerConnection")}}가 닫혀있음을 뜻합니다.</dd>
 <dt><code>TypeError</code></dt>
 <dd>이 에러는 여러 상황에서 발생이 가능합니다:
 <ul>
  <li>label 혹은 프로토콜 문자열이 너무 길어서 발생합니다. 해당 문자열은 65,535바이트보다 작아야합니다. </li>
  <li><code>id</code>가 65535여서 발생합니다. 이 값은 유효한 부호가 없는 16bit 이지만, <code>id</code> 값으로 허용되는 범위를 벗어나게됩니다. (0-65534 까지만 허용)</li>
 </ul>
 </dd>
 <dt><code>SyntaxError</code></dt>
 <dd><code>maxPacketLifeTime</code> 와 <code>maxRetransmits</code> 옵션에 모두 값이 지정되면 발생합니다. 둘 중 하나에만 non-<code>null</code> 값을 지정해야 합니다.</dd>
 <dt><code>ResourceInUse</code></dt>
 <dd><code>id</code> 값이 지정되었지만, 다른 {{domxref("RTCDataChannel")}}에서 이미 같은 이름을 사용 중이면 발생합니다.</dd>
 <dt><code>OperationError</code></dt>
 <dd>지정한 <code>id</code>가 이미 사용 중이거나, <code>id</code>가 지정되지 않았다면 모든 ID들이 사용 중이기 때문에 WebRTC 레이어에서 자동으로 <code>id</code> 생성이 불가능 할 때 발생합니다.</dd>
</dl>

<h2 id="예시">예시</h2>

<p>아래의 예제에서는 어떻게 데이터 채널을 생성하고, 생성 할 때 메세지를 전송하고 수신하는 이벤트인 {{event("open")}}와 {{event("message")}}에대한 핸들러를 설정합니다. (onnegotiationneeded는 이미 설정이 되었다고 가정하고 간소화한 예입니다.)</p>

<pre class="brush: js">// Offerer side

var pc = new RTCPeerConnection(options);
var channel = pc.createDataChannel("chat");
channel.onopen = function(event) {
  channel.send('Hi you!');
}
channel.onmessage = function(event) {
  console.log(event.data);
}</pre>

<pre class="brush: js">// Answerer side

var pc = new RTCPeerConnection(options);
pc.ondatachannel = function(event) {
  var channel = event.channel;
﻿  channel.onopen = function(event) {
    channel.send('Hi back!');
  }
  channel.onmessage = function(event) {
    console.log(event.data);
  }
}</pre>

<p>다른 방법으로는 양쪽에서 합의한 id를 사용하여 보다 대칭적인 대역 밴드 외 협상이 가능합니다. (id는 0입니다):</p>

<pre class="brush: js">// Both sides

var pc = new RTCPeerConnection(options);
var channel = pc.createDataChannel("chat", {negotiated: true, id: 0});
channel.onopen = function(event) {
  channel.send('Hi!');
}
channel.onmessage = function(event) {
  console.log(event.data);
}</pre>

<p>연결 및 채널이 구성되는 예를 더 자세히 알고 싶다면, <a href="/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample">A simple RTCDataChannel sample</a>를 참조하십시오.</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("api.RTCPeerConnection.createDataChannel")}}

<h2 id="참조">참조</h2>

<ul>
 <li>{{domxref("RTCDataChannel")}}</li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample">A simple RTCDataChannel sample</a></li>
 <li>{{domxref("RTCPeerConnection")}}</li>
</ul>
