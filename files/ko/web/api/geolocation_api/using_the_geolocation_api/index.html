---
title: Geolocation API 사용하기
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
tags:
  - Geolocation API
  - Guide
  - Intermediate
translation_of: Web/API/Geolocation_API/Using_the_Geolocation_API
original_slug: WebAPI/Using_geolocation
---
<p>{{securecontext_header}}{{APIRef("Geolocation API")}}<br>
 <strong>Geolocation API</strong>는 사용자의 현재 위치를 가져오는 API로, 지도에 사용자 위치를 표시하는 등 다양한 용도로 사용할 수 있습니다. 이 안내서는 Geolocation API의 기초적 사용법을 설명합니다.</p>

<h2 id="geolocation_객체"><code>geolocation</code> 객체</h2>

<p><a href="/ko/docs/Web/API/Geolocation_API">Geolocation API</a>는 {{domxref("navigator.geolocation")}} 객체를 통해 사용할 수 있습니다.</p>

<p><code>geolocation</code> 객체가 존재하는 경우 위치 정보 서비스를 지원하는 것입니다. 존재 여부는 다음과 같이 알아낼 수 있습니다.</p>

<pre class="brush: js">if('geolocation' in navigator) {
  /* 위치정보 사용 가능 */
} else {
  /* 위치정보 사용 불가능 */
}
</pre>

<h3 id="현재_위치_가져오기">현재 위치 가져오기</h3>

<p>{{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}} 메서드를 호출해서 사용자의 현재 위치를 얻을 수 있습니다. <code>getCurrentPosition()</code>은 사용자의 위치를 탐지하는 비동기 요청을 초기화하고, 위치 관련 하드웨어에 최신 정보를 요청합니다. 위치를 알아낸 후에는 지정한 콜백 함수를 호출합니다. 선택적으로, 이 과정 중 오류가 발생하면 호출할 오류 콜백을 두 번째 매개변수로 지정할 수도 있습니다. 세 번째 매개변수 역시 선택 항목이며, 위치 정보의 최대 수명, 요청의 최대 대기시간, 고정밀 위치정보 여부 등의 옵션을 담은 객체입니다.</p>

<div class="note">
<p><strong>참고:</strong> {{domxref("Geolocation.getCurrentPosition", "getCurrentPosition()")}}의 기본값에서는 최대한 빠르게 낮은 정밀도의 응답을 반환합니다. 정확하지 않더라도 빠른 정보가 필요한 상황에서 유용합니다. 예를 들어, GPS 기능을 가진 장비는 보정 과정에 수 분이 걸릴 수도 있으므로 IP 위치와 WiFi 등 정확하지 않은 출처에 기반한 위치 정보를 반환할 수 있습니다.</p>
</div>

<pre class="brush: js">navigator.geolocation.getCurrentPosition((position) =&gt; {
  doSomething(position.coords.latitude, position.coords.longitude);
});</pre>

<p>위의 예제는 사용자 위치가 확인되면 <code>doSomething()</code> 함수를 실행합니다.</p>

<h3 id="현재_위치_추적하기">현재 위치 추적하기</h3>

<p>장치가 이동했거나 더 정확한 정보를 사용할 수 있어서 위치 정보가 바뀐 경우 호출할 콜백 함수를 {{domxref("Geolocation.watchPosition","watchPosition()")}} 메서드로 설정할 수 있으며, {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}}과 같은 매개변수를 받습니다. 콜백은 계속해서 호출될 수 있으므로, 브라우저가 사용자의 이동 시, 또는 고정밀 위치 기술을 사용할 수 있는 시점에 새로운 위치 정보를 제공할 수 있습니다. <code>getCurrentPosition()</code>과 마찬가지로 선택 사항인 오류 콜백 역시 여러 번 호출할 수 있습니다.</p>

<div class="note">
<p><strong>참고:</strong> {{domxref("Geolocation.getCurrentPosition", "getCurrentPosition()")}}을 먼저 호출하지 않고도 {{domxref("Geolocation.watchPosition", "watchPosition()")}}을 사용할 수 있습니다.</p>
</div>

<pre class="brush: js">const watchID = navigator.geolocation.watchPosition((position) =&gt; {
  doSomething(position.coords.latitude, position.coords.longitude);
});</pre>

<p>{{domxref("Geolocation.watchPosition","watchPosition()")}} 메서드는 위치 추적 요청의 고유 식별자를 나타내는 숫자값을 반환합니다. 해당 식별자를 {{domxref("Geolocation.clearWatch","clearWatch()")}} 메서드에 전달해서 추적을 종료할 수 있습니다.</p>

<pre class="brush: js">navigator.geolocation.clearWatch(watchID);
</pre>

<h3 id="응답_미세_조정">응답 미세 조정</h3>

<p>{{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}}과 {{domxref("Geolocation.watchPosition","watchPosition()")}} 둘 다 성공 콜백, 실패 콜백 외에도 <a href="/ko/docs/Web/API/PositionOptions"><code>PositionOptions</code></a> 객체를 받을 수 있습니다.</p>

<p><code>PositionsOptions</code> 객체를 사용하면 고정밀도 활성화 여부, 위치 정보의 캐시 수명(수명이 끝나기 전까지는 이전에 반환한 위치 정보를 저장해뒀다가, 같은 요청을 또 받을 경우 그대로 반환합니다), 그리고 위치 정보 요청의 응답을 대기할 최대 대기시간을 지정할 수 있습니다.</p>

<p>옵션 객체를 사용한 {{domxref("Geolocation.watchPosition","watchPosition")}}의 호출 예시는 다음과 같습니다.</p>

<pre class="brush: js">function success(position) {
  doSomething(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert('Sorry, no position available.');
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};

const watchID = navigator.geolocation.watchPosition(success, error, options);</pre>

<h2 id="위치_표현">위치 표현</h2>

<p>사용자의 위치는 {{domxref("GeolocationPosition")}} 객체를 담은 {{domxref("GeolocationCoordinates")}} 객체를 사용하여 표현합니다.</p>

<p><code>GeolocationPosition</code>은 단 두 가지만 가집니다. 하나는 <code>GeolocationCoordinates</code> 인스턴스를 가진 <code>coords</code> 속성이고, 다른 하나는 위치 정보의 기록 시점을 나타내는 {{domxref("DOMTimeStamp")}} 인스턴스입니다.</p>

<p>GeolocationCoordinates 인스턴스는 다수의 속성을 갖지만, 그 중 가장 많이 쓰게 될 항목은 지도의 지점을 가리킬 때 사용할 <code>latitude</code>와 <code>longitude</code>입니다. 따라서 대부분의 <code>Geolocation</code> 성공 콜백은 아래와 같이 꽤 간단한 형태입니다.</p>

<pre class="brush: js">function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}</pre>

<p>그러나 <code>GeolocationCoordinates</code> 객체에서 고도, 속도, 장치의 방향, 위경도와 고도의 정확도 등 다른 다양한 정보도 가져올 수 있습니다.</p>

<h2 id="오류_처리">오류 처리</h2>

<p><code>getCurrentPosition()</code> 또는 <code>watchPosition()</code>에 오류 콜백을 제공한 경우, 콜백은 첫 번째 매개변수로 <a href="/ko/docs/Web/API/GeolocationPositionError"><code>GeolocationPositionError</code></a> 객체를 받습니다. 해당 객체는 오류의 유형을 나타내는 <code>code</code> 속성과, 사람이 읽을 수 있는 형태로 오류 코드의 뜻을 설명한 <code>message</code> 속성을 갖습니다.</p>

<p>다음 형태로 사용할 수 있습니다.</p>

<pre class="brush: js">function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
};</pre>

<h2 id="examples">예제</h2>

<p>다음 예제는 Geolocation API를 사용해 사용자의 위경도를 가져옵니다. 성공한 경우, 사용자의 위치를 가리키는 <code>openstreetmap.org</code> 링크를 생성해 하이퍼링크에 할당합니다.</p>

<div class="hidden">
<pre class="brush: css">body {
  padding: 20px;
  background-color:#ffffc9
}

button {
  margin: .5rem 0;
}</pre>
</div>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;button id = "find-me"&gt;Show my location&lt;/button&gt;&lt;br/&gt;
&lt;p id = "status"&gt;&lt;/p&gt;
&lt;a id = "map-link" target="_blank"&gt;&lt;/a&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample('예제', 350, 150)}}</p>
