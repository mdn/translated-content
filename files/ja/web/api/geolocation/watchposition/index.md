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
<p>{{securecontext_header}}{{ APIref("Geolocation API") }}</p>

<p><span class="seoSummary">{{domxref("Geolocation")}} の <strong><code>watchPosition()</code></strong> メソッドは、端末の位置が変化するたびに自動的に呼び出されるハンドラー関数を登録するために用いられます。</span>また必要に応じてエラー処理コールバック関数を指定することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">navigator.geolocation.watchPosition(<var>success</var>[, <var>error</var>[, <var>options</var>]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>success</var></code></dt>
 <dd>コールバック関数で、 {{domxref("GeolocationPosition")}} オブジェクトを入力引数として受け取るものです。</dd>
 <dt><code><var>error</var></code> {{optional_inline}}</dt>
 <dd>任意のコールバック関数で、 {{domxref("GeolocationPositionError")}} オブジェクトを入力引数として受け取るものです。</dd>
 <dt><code><var>options</var></code> {{optional_inline}}</dt>
 <dd>任意の {{domxref("PositionOptions")}} オブジェクトで、位置を監視する構成オプションを提供します。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>登録されたハンドラーを識別する ID を返します。この ID を {{domxref("Geolocation.clearWatch()")}} メソッドに渡してハンドラーの登録を解除することができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">var id, target, options;

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

<h2 id="Speicfications" name="Speicfications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Geolocation', '#dom-geolocation-watchposition', 'watchPosition()')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Geolocation.watchPosition")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Geolocation_API/Using">Geolocation API の使用</a></li>
 <li>所属するインターフェイス {{domxref("Geolocation")}} と、アクセス方法である {{domxref("NavigatorGeolocation.geolocation")}}。</li>
 <li>逆の操作: {{domxref("Geolocation.clearWatch()")}}</li>
 <li>類似のメソッド: {{domxref("Geolocation.getCurrentPosition()")}}</li>
</ul>
