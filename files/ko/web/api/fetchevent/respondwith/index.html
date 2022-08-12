---
title: FetchEvent.respondWith()
slug: Web/API/FetchEvent/respondWith
translation_of: Web/API/FetchEvent/respondWith
---
<p>{{APIRef("Service Workers API")}}{{SeeCompatTable}}</p>

<p><span class="seoSummary">{{domxref("FetchEvent")}}의 <strong><code>respondWith()</code></strong> 메소드는 브라우저의 기본 fetch 핸들링을 막고, 당신 스스로 {{domxref("Response")}}에 대한 promise를 제공할 수 있게 허락합니다.</span></p>

<p>대부분의 상황에서 당신은 수신자가 이해하는 어떠한 응답이라도 제공할 수 있습니다. 예를 들어, {{HTMLElement('img')}} 엘리먼트가 해당 요청을 시작했다면, 응답 객체는 이미지 데이터를 필요로 합니다. 보안적인 이유들로, 여기엔 몇가지 전역 규칙이 존재합니다.</p>

<ul>
 <li>You can only return {{domxref("Response")}} objects of {{domxref("Response.type", "type")}} "<code>opaque</code>" if the {{domxref("fetchEvent.request")}} object's {{domxref("request.mode", "mode")}} is "<code>no-cors</code>".  This prevents the leaking of private data.</li>
 <li>You can only return {{domxref("Response")}} objects of {{domxref("Response.type", "type")}} "<code>opaqueredirect</code>" if the {{domxref("fetchEvent.request")}} object's {{domxref("request.mode", "mode")}} is "<code>manual</code>".</li>
 <li>You cannot return {{domxref("Response")}} objects of {{domxref("Response.type", "type")}} "<code>cors</code>" if the {{domxref("fetchEvent.request")}} object's {{domxref("request.mode", "mode")}} is "<code>same-origin</code>".</li>
</ul>

<h3 id="Specifying_the_final_URL_of_a_resource">Specifying the final URL of a resource</h3>

<p>From Firefox 59 onwards, when a service worker provides a {{domxref("Response")}} to {{domxref("FetchEvent.respondWith()")}}, the {{domxref("Response.url")}} value will be propagated to the intercepted network request as the final resolved URL.  If the {{domxref("Response.url")}} value is the empty string, then the {{domxref("Request.url","FetchEvent.request.url")}} is used as the final URL.</p>

<p>In the past the {{domxref("Request.url","FetchEvent.request.url")}} was used as the final URL in all cases.  The provided {{domxref("Response.url")}} was effectively ignored.</p>

<p>This means, for example, if a service worker intercepts a stylesheet or worker script, then the provided {{domxref("Response.url")}} will be used to resolve any relative {{cssxref("@import")}} or {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} subresource loads ({{bug(1222008)}}).</p>

<p>For most types of network request this change has no impact because you can't observe the final URL.  There are a few, though, where it does matter:</p>

<ul>
 <li>If a {{domxref("WindowOrWorkerGlobalScope.fetch()", "fetch()")}} is intercepted, then you can observe the final URL on the result's {{domxref("Response.url")}}.</li>
 <li>If a <a href="/en-US/docs/Web/API/Web_Workers_API">worker</a> script is intercepted, then the final URL is used to set <code><a href="/en-US/docs/Web/API/WorkerGlobalScope/location">self.location</a></code> and used as the base URL for relative URLs in the worker script.</li>
 <li>If a stylesheet is intercepted, then the final URL is used as the base URL for resolving relative {{cssxref("@import")}} loads.</li>
</ul>

<p>Note that navigation requests for {{domxref("Window","Windows")}} and {{domxref("HTMLIFrameElement","iframes")}} do NOT use the final URL.  The way the HTML specification handles redirects for navigations ends up using the request URL for the resulting {{domxref("Window.location")}}.  This means sites can still provide an "alternate" view of a web page when offline without changing the user-visible URL.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">fetchEvent.respondWith(
  // Promise that resolves to a Response.
​)</pre>

<h3 id="Parameters">Parameters</h3>

<p>A {{jsxref("Promise")}} for a {{domxref("Response")}}.</p>

<h3 id="Return_value">Return value</h3>

<p>Void.</p>

<h3 id="Exceptions">Exceptions</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Notes</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>NetworkError</code></td>
   <td>A network error is triggered on certain combinations of {{domxref("Request.mode","FetchEvent.request.mode")}} and {{domxref("Response.type")}}  values, as hinted at in the "global rules" listed above.</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This fetch event tries to return a response from the cache API, falling back to the network otherwise.</p>

<pre class="brush: js">addEventListener('fetch', event =&gt; {
  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function() {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(event.request);
    // Return it if we found one.
    if (cachedResponse) return cachedResponse;
    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  }());
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.FetchEvent.respondWith")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Using Service Workers</a></li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker ready?</a></li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a></li>
</ul>
