---
title: 位置情報 API の使用
slug: Web/API/Geolocation_API/Using_the_Geolocation_API
tags:
  - Geolocation API
  - Guide
  - Tutorial
  - 位置情報
translation_of: Web/API/Geolocation_API/Using_the_Geolocation_API
---
<div>{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}</div>

<p><ruby>位置情報<rp> (</rp><rt>Geolocation</rt><rp>)</rp></ruby> API により、ユーザーは希望すれば自身の場所をウェブアプリケーションに通知することができるようになります。この記事では、その使い方の基本を説明します。</p>

<h2 id="The_geolocation_object" name="The_geolocation_object">geolocation オブジェクト</h2>

<p><a href="/ja/docs/Web/API/Geolocation">位置情報 API</a> は {{domxref("navigator.geolocation")}} オブジェクトを通じて利用できます。</p>

<p>このオブジェクトが存在していれば、位置情報サービスを利用することができます。よって以下のようなコードでの存在を確認することができます。</p>

<pre class="brush: js notranslate">if('geolocation' in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
</pre>

<h3 id="Getting_the_current_position" name="Getting_the_current_position">現在位置の取得</h3>

<p>ユーザーの現在位置を取得するには、 {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} メソッドを呼び出します。このメソッドはユーザーの現在位置を特定するための非同期通信を開始するとともに、位置取得デバイスから最新の情報を取得します。現在位置が特定されるとコールバック関数が実行されます。また、オプションとして第二引数にコールバック関数を指定することで、エラー発生時に実行される関数を指定することができます。省略可能な第三引数は、最大試行回数、要求待ち時間、高精度の位置情報を求めるかを指定するオブジェクトです。</p>

<div class="note">
<p><strong>注:</strong> 既定では、 {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} は低精度の結果を使いなるべく速く応答しようとします。これは、正確さに関わらず速い応答を必要とする場合に役立ちます。例えば GPS を備えている端末でも GPS が確定するまでには数分以上かかる可能性がありますので、 <code>getCurrentPosition()</code> からは (IP ロケーションや Wi-Fi による) 低精度のデータを返すことがあります。</p>
</div>

<pre class="brush: js notranslate">navigator.geolocation.getCurrentPosition((position) =&gt; {
  doSomething(position.coords.latitude, position.coords.longitude);
});</pre>

<p>上記の例では、位置情報が取得でき次第 <code>doSomething()</code> 関数が実行されます。</p>

<h3 id="Watching_the_current_position" name="Watching_the_current_position">現在位置の監視</h3>

<p>位置情報が変化した場合 (端末が移動した時やより正確な位置情報が得られた時) は、位置情報の更新と同時に呼び出されるコールバック関数を指定することができます。これは {{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} メソッドと同じ引数を持つ {{domxref("Geolocation.watchPosition","watchPosition()")}} メソッドを使うことで実現できます。コールバック関数は繰り返し呼び出され、ブラウザーは移動に応じて位置情報を更新したり、位置の特定に別の技術を使用することでより詳細な位置情報を提供したりすることが可能です。エラー発生時に呼び出されるコールバック関数は <code>getCurrentPosition()</code> と同様に任意指定であり、繰り返し呼び出される場合があります。</p>

<div class="note">
<p><strong>注:</strong> 初めに {{domxref("Geolocation.getCurrentPosition()","getCurrentPosition()")}} を呼び出すことなく、{{domxref("Geolocation.watchPosition()","watchPosition()")}} を使用することができます。</p>
</div>

<pre class="brush: js notranslate">const watchID = navigator.geolocation.watchPosition((position) =&gt; {
  doSomething(position.coords.latitude, position.coords.longitude);
});</pre>

<p>{{domxref("Geolocation.watchPosition","watchPosition()")}} メソッドは、位置監視の登録を識別する ID 番号を返します。この ID 番号を {{domxref("Geolocation.clearWatch","clearWatch()")}} メソッドに渡すことでユーザーの位置監視を終了させることができます。</p>

<pre class="brush: js notranslate">navigator.geolocation.clearWatch(watchID);
</pre>

<h3 id="Fine_tuning_response" name="Fine_tuning_response">応答の微調整</h3>

<p>{{domxref("Geolocation.getCurrentPosition","getCurrentPosition()")}} および {{domxref("Geolocation.watchPosition","watchPosition()")}} は成功時のコールバック、省略可能なエラー時のコールバック、そして省略可能な {{domxref("PositionOptions")}} オブジェクトを受け取ります。</p>

<p>このオブジェクトでは、高精度を有効にするかどうか、返された位置値の使用期限 (この期限までは、同じ位置が再度要求された場合にキャッシュされて再利用され、それ以降はブラウザーが新しい位置データを要求します)、タイムアウトする前にブラウザーがどのくらいの時間位置データを取得しようとするかを指定するタイムアウト値を指定することができます。</p>

<p>{{domxref("Geolocation.watchPosition","watchPosition")}} の呼び出しは以下のようになります:</p>

<pre class="brush: js notranslate">function success(position) {
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

<h2 id="Describing_a_position" name="Describing_a_position">位置の表現</h2>

<p>ユーザーの位置は {{domxref("GeolocationPosition")}} オブジェクトインスタンスを使用して記述され、それ自体が {{domxref("GeolocationCoordinates")}} オブジェクトインスタンスを含んでいます。</p>

<p><code>GeolocationPosition</code> インスタンスが持つ情報は2つだけで、 <code>coords</code> プロパティは <code>GeolocationCoordinates</code> インスタンスを持っており、 <code>timestamp</code> プロパティは位置データが取得された時刻を表す {{domxref("DOMTimeStamp")}} インスタンスを持ちます。</p>

<p><code>GeolocationCoordinates</code> インスタンスにはいくつかのプロパティがありますが、最も一般的に使用されるのは <code>latitude</code> and <code>longitude</code> の 2 つで、これは地図上に位置を描画するために必要なものです。そのため、多くの Geolocation 成功コールバックはとてもシンプルに見えます。</p>

<pre class="brush: js notranslate">function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}</pre>

<p>しかし <code>GeolocationCoordinates</code> オブジェクトからは、高度、速度、端末が向いている方向、高度、経度、緯度データの精度測定など、他にも多くの情報を得ることができます。</p>

<h2 id="Handling_errors" name="Handling_errors">エラーの扱い</h2>

<p><code>getCurrentPosition()</code> や <code>watchPosition()</code> の呼び出し時にエラーコールバック関数を提供する場合、最初の引数が {{domxref("GeolocationPositionError")}} オブジェクトインスタンスとなります。このオブジェクト型には二つのプロパティがあります。 <code>code</code> は返されたエラーの種類を示し、 <code>message</code> は人間が読める形でエラーコードの意味を説明します。</p>

<p>次のように使用することができます。</p>

<pre class="brush: js notranslate">function errorCallback(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
};
</pre>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では、 Geolocation API はユーザーの経度と緯度を取得するために使用されます。成功した場合、その位置を表示する <code>openstreetmap.org</code> の URL の有効なハイパーリンクが表示されます。</p>

<div class="hidden">
<pre class="brush: css notranslate">body {
  padding: 20px;
  background-color:#ffffc9
}

button {
  margin: .5rem 0;
}
</pre>
</div>

<h3 id="HTML">HTML</h3>

<pre class="brush: html; notranslate">&lt;button id = "find-me"&gt;Show my location&lt;/button&gt;&lt;br/&gt;
&lt;p id = "status"&gt;&lt;/p&gt;
&lt;a id = "map-link" target="_blank"&gt;&lt;/a&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">function geoFindMe() {

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

document.querySelector('#find-me').addEventListener('click', geoFindMe);
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples', 350, 150)}}</p>
