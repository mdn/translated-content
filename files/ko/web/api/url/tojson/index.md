---
title: URL.toJSON()
slug: Web/API/URL/toJSON
tags:
  - API
  - Method
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/toJSON
---
<div>{{APIRef("URL API")}}</div>

<p>{{domxref("URL")}} 인터페이스의 <strong><code>toJSON()</code></strong> 메서드는 URL을 직렬화한 {{domxref("USVString")}}을 반환합니다. 그러나, 사실상 {{domxref("URL.toString", "toString()")}}과 같습니다..</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>href</em> = <em>url</em>.toJSON()</pre>

<h3 id="반환_값">반환 값</h3>

<p>{{domxref("USVString")}}.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toJSON(); // should return the URL as a string</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL.toJSON")}}</p>
