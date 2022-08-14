---
title: Geolocation.watchPosition()
slug: Web/API/Geolocation/watchPosition
tags:
  - API
  - Geolocation
  - Geolocation API
  - Method
  - Reference
  - Secure context
translation_of: Web/API/Geolocation/watchPosition
---
<div>{{securecontext_header}}{{ APIref("Geolocation API") }}</div>

<p><span class="seoSummary">{{domxref("Geolocation")}} 인터페이스의 <strong><code>watchPosition()</code></strong> 메서드는 장치의 위치가 바뀔 때마다 자동으로 호출할 처리기 함수를 등록할 때 사용합니다.</span> 선택적으로 오류 발생 시 사용할 콜백 함수도 지정할 수 있습니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">navigator.geolocation.watchPosition(<em>success</em>[, <em>error</em>[, <em>options</em>]])</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>success</code></dt>
 <dd>{{domxref("GeolocationPosition")}} 객체를 입력 매개변수로 사용하는 콜백 함수.</dd>
 <dt><code>error</code> {{optional_inline}}</dt>
 <dd>{{domxref("GeolocationPositionError")}} 객체를 입력 매개변수로 사용하는 콜백 함수.</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>위치 감지 설정 옵션을 제공하는 {{domxref("PositionOptions")}} 객체.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>등록한 처리기를 식별할 때 사용하는 정수 ID. ID를 {{domxref("Geolocation.clearWatch()")}}에 전달해 등록을 해제할 수 있습니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">var id, target, options;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude &amp;&amp; target.longitude === crd.longitude) {
    console.log('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  latitude : 0,
  longitude: 0
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Geolocation.watchPosition")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Geolocation API 사용하기</a></li>
 <li>메서드가 속한 {{domxref("Geolocation")}} 인터페이스와, 접근하는 방법인 {{domxref("NavigatorGeolocation.geolocation")}}.</li>
 <li>처리기를 해제하는 {{domxref("Geolocation.clearWatch()")}} 메서드</li>
 <li>비슷한 {{domxref("Geolocation.getCurrentPosition()")}} 메서드</li>
</ul>
