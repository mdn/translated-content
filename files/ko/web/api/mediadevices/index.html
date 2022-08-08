---
title: MediaDevices
slug: Web/API/MediaDevices
tags:
  - API
  - Interface
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Reference
  - Screen Capture API
  - WebRTC
translation_of: Web/API/MediaDevices
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p><span class="seoSummary"><strong><code>MediaDevices</code></strong> 인터페이스는 카메라, 마이크, 공유 화면 등 현재 연결된 미디어 입력 장치로의 접근 방법을 제공하는 인터페이스입니다. 다르게 말하자면, 미디어 데이터를 제공하는 모든 하드웨어로 접근할 수 있는 방법입니다.</span></p>

<h2 id="속성">속성</h2>

<p>부모 인터페이스인 {{domxref("EventTarget")}}의 속성을 상속합니다.</p>

<h2 id="Handlers" name="Handlers">이벤트</h2>

<dl>
 <dt><code><a href="/ko/docs/Web/API/MediaDevices/devicechange_event">devicechange</a></code></dt>
 <dd>사용자 컴퓨터에 미디어 입출력 장치가 추가되거나 제거됐을 때 발생합니다.<br>
 <code><a href="/ko/docs/Web/API/MediaDevices/ondevicechange">ondevicechange</a></code> 속성으로도 사용할 수 있습니다.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<p>부모 인터페이스인 {{domxref("EventTarget")}}의 메서드를 상속합니다.</p>

<dl>
 <dt>{{ domxref("MediaDevices.enumerateDevices", "enumerateDevices()") }}</dt>
 <dd>시스템에서 사용 가능한 미디어 입출력 장치의 정보를 담은 배열을 가져옵니다.</dd>
 <dt>{{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}</dt>
 <dd>{{domxref("MediaStreamTrack")}} 인터페이스가 지원하는 제약을 나타내는 {{domxref("MediaTrackSupportedConstraints")}} 호환 객체를 반환합니다.</dd>
 <dd class="hidden">See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API", "Capabilities and constraints")}} to learn more about constraints and how to use them.</dd>
 <dt>{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}</dt>
 <dd>{{domxref("MediaStream")}}으로 캡처해 공유나 녹화 용도로 사용할  화면 혹은 화면의 일부(창)를 선택하도록 사용자에게 요청합니다. <code>MediaStream</code>으로 이행하는 {{jsxref("Promise")}}를 반환합니다.</dd>
 <dt>{{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}</dt>
 <dd>사용자에게 권한을 요청한 후, 시스템의 카메라와 오디오 각각 혹은 모두 활성화하여, 장치의 입력 데이터를 비디오/오디오 트랙으로 포함한 {{domxref("MediaStream")}}을 반환합니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<pre class="brush:js">'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var constraints = window.constraints = {
  audio: false,
  video: true
};
var errorElement = document.querySelector('#errorMsg');

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  var videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using video device: ' + videoTracks[0].label);
  stream.onremovetrack = function() {
    console.log('Stream ended');
  };
  window.stream = stream; // make variable available to browser console
  video.srcObject = stream;
})
.catch(function(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
        constraints.video.width.exact + ' px is not supported by your device.');
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.');
  }
  errorMsg('getUserMedia error: ' + error.name, error);
});

function errorMsg(msg, error) {
  errorElement.innerHTML += '&lt;p&gt;' + msg + '&lt;/p&gt;';
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("api.MediaDevices")}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>인터페이스가 속한 <a href="/ko/docs/Web/API/Media_Streams_API">Media Capture and Streams API</a></li>
 <li>{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} 메서드를 정의하는 <a href="/ko/docs/Web/API/Screen_Capture_API">Screen Capture API</a></li>
 <li><a href="/ko/docs/Web/API/WebRTC_API">WebRTC API</a></li>
 <li>장치에 접근할 때 사용할 <code>MediaDevices</code> 객체의 참조를 반환하는 {{domxref("Navigator.mediaDevices")}}</li>
</ul>
