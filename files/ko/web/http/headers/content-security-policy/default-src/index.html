---
title: 'CSP: default-src'
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
translation_of: Web/HTTP/Headers/Content-Security-Policy/default-src
---
<div>
<p>{{HTTPSidebar}}</p>

<p>HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) <code><strong>default</strong></code><strong><code>-src</code></strong> 구문은 다른  CSP 구문이 정의되지 않았을때 이를 대체하는 용도로 사용됩니다.  as a fallback for the other CSP {{Glossary("fetch directive", "fetch directives")}}. 다음과 같은 구문이 없는 경우,  <code>default-src</code> 구문을 찾아서 사용합니다:</p>

<ul>
 <li>{{CSP("child-src")}}</li>
 <li>{{CSP("connect-src")}}</li>
 <li>{{CSP("font-src")}}</li>
 <li>{{CSP("frame-src")}}</li>
 <li>{{CSP("img-src")}}</li>
 <li>{{CSP("manifest-src")}}</li>
 <li>{{CSP("media-src")}}</li>
 <li>{{CSP("object-src")}}</li>
 <li>{{CSP("script-src")}}</li>
 <li>{{CSP("style-src")}}</li>
 <li>{{CSP("worker-src")}}</li>
</ul>

<table>
 <tbody>
  <tr>
   <th scope="row">CSP version</th>
   <td>1</td>
  </tr>
  <tr>
   <th scope="row">Directive type</th>
   <td>{{Glossary("Fetch directive")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<p>하나 이상의 출처가 <code>default-src</code> 정책에 의해서 허용될 수 있습니다:</p>

<pre>Content-Security-Policy: default-src &lt;source&gt;;
Content-Security-Policy: default-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources">Sources</h3>

<p>&lt;source&gt; 에는 다음에 항목이 포함됩니다. </p>

<dl>
 <dt>&lt;host-source&gt;</dt>
 <dd>부수적으로 <a href="/en-US/docs/URIs_and_URLs">URL scheme</a> 및/또는 port 번호가 포함된 도메인 또는 IP 주소와 같은 인터넷 호스트, 또한 사이트의 주소 및 포트에 와일트 카드를 사용할 수 도 있습니다 (<code>'*'</code>), 이를 사용하면 모든 주소 또는 포트에서의 유효함을 나타냅니다.<br>
 예:
 <ul>
  <li><code>http://*.example.com</code>:  <code>http:</code> 를 사용하는 모든 서브도메인에서 매칭됩</li>
  <li><code>mail.example.com:443</code>: 443 포트로 mail.example.com에 접근하는 경우 매칭됨</li>
  <li><code>https://store.example.com</code>: store.example.com를 <code>https:</code>로 접근하는 경우 매칭됨</li>
 </ul>
 </dd>
 <dt>&lt;scheme-source&gt;</dt>
 <dd> 'http:' 또는 'https:'와 같은 스키마.<strong> 콜론이 필수적이며, 작은 따음표는 사용하지 않아야 합니다.</strong>  스키마도 지정할 수 있습니다 (추천하지 않음).
 <ul>
  <li><code>data:</code><a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"><code>data:</code> URIs</a> 를 컨텐츠 출처로 허용합니다. 이것은 안전하지 않습니다. <em>공격자가 임의의 데이터를 주입할 수도 있기 때문에 script에는 사용하지 마십시오.</em></li>
  <li><code>mediastream:</code><a href="/en-US/docs/Web/API/MediaStream_API"><code>mediastream:</code> URIs</a> 을 콘텐츠 출처로 허용합니다.</li>
  <li><code>blob:</code><a href="/en-US/docs/Web/API/Blob"><code>blob:</code> URIs</a>을 콘텐츠 출처로 허용합니다.</li>
  <li><code>filesystem:</code><a href="/en-US/docs/Web/API/FileSystem"><code>filesystem:</code> URIs</a> 을 콘텐츠 출처로 허용합니다.</li>
 </ul>
 </dd>
 <dt><code>'self'</code></dt>
 <dd>동일한 URL 체계와 포트를 포함하여 보호되는 파일의 원본을 참조합니다.  작은 따음표가 필수적으로 있어야 합니다. 일부 브라우저에서는 <code>blob</code> 와 <code>filesystem</code> 를 source 지시문에서 제외합니다. 이러한 콘텐츠 타입을 허용해야 하는 사이트는 데이터 attribute를 사용하여 지정할 수 있습니다.</dd>
 <dt><code>'unsafe-inline'</code></dt>
 <dd>인라인 {{HTMLElement("script")}} 태그, <code>javascript:</code> URLs, 인라인 이벤트 핸들러, 그리고 인라인 {{HTMLElement("style")}} 태그와 같은 인라인 요소들을 모두 허용합니다. 작은 따음표를 사용해야만 합니다.</dd>
 <dt><code>'unsafe-eval'</code></dt>
 <dd><code>eval()</code> 및 문자열에서 코드를 생성하는 함수의 사용을 허용합니다. 작은 따음표를 사용해야만 합니다.</dd>
 <dt><code>'none'</code></dt>
 <dd>아무것도 참조 되지 않습니다. 즉 아무런 URL도 매치되지 않습니다. 작은 따음표를 사용해야만 합니다.</dd>
 <dt>'nonce-&lt;base64-value&gt;'</dt>
 <dd>암호화 nonce 값을 이용하여 특정 인라인 스크립트에 대하여 허용합니다(nonce는 한번만 사용). 서버는 CSP정책을 전송할 때마다 고유한 nonce를 생성해야만 합니다. 리소스 정책을 우회하는 것은 간단한 일이기 때문에 의심 할 여지가 없는 nonce 값을 제공하는 것이 중요합니다. <a href="/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script">unsafe inline script</a> 예제를 참고해주세요. nonce는 <code>'unsafe-inline'</code> 와 함께 사용할 경우 모던 브라우저에서는 사용하게 되면  <code>'unsafe-inline'</code>가 무시되지만, 구형 브라우저에서는 nonce가 적용되지 않습니다.</dd>
 <dt>'&lt;hash-algorithm&gt;-&lt;base64-value&gt;'</dt>
 <dd>스크립트 또는 스타일의  sha256, sha384 or sha512 해쉬. 이것은 대쉬: 로 구분된 해쉬를 사용된 암호화 알고리즘과 base64로 인코딩한 스크립트 및 스타일로 구성됩니다. 해쉬를 생성할 때 절대로 &lt;script&gt; 또는 &lt;style&gt; 태그를 포함하지말고 대소문자와 앞 뒤의 공백을 주의해야 합니다.<a href="/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script">unsafe inline script</a> 예제를 참고해주세요. CSP 2.0에서는 인라인 스크립트에서만 적용 가능하지만,  CSP 3.0에서는 외부 스크립트를 <code>script-src</code> 에서 허용하기 위해서 사용합니다.</dd>
 <dt>'strict-dynamic'</dt>
 <dd>The <code>strict-dynamic</code> source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any whitelist or source expressions such as <code>'self'</code> or <code>'unsafe-inline'</code> will be ignored. See <a href="/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic">script-src</a> for an example.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="default-src의_상속_불가"><code>default-src</code>의 상속 불가</h3>

<p>다른 구문이 지정되면 default-src는 더 이상 영향을 주지 않습니다. 아래의 헤더는 </p>

<pre>Content-Security-Policy: default-src 'self'; script-src https://example.com</pre>

<p>다음과 같습니다:</p>

<pre>Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> and send us a pull request.</p>

<p>{{Compat("http.headers.csp.default-src")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{CSP("connect-src")}}</li>
 <li>{{CSP("font-src")}}</li>
 <li>{{CSP("frame-src")}}</li>
 <li>{{CSP("img-src")}}</li>
 <li>{{CSP("manifest-src")}}</li>
 <li>{{CSP("media-src")}}</li>
 <li>{{CSP("object-src")}}</li>
 <li>{{CSP("script-src")}}</li>
 <li>{{CSP("style-src")}}</li>
 <li>{{CSP("worker-src")}}</li>
</ul>
</div>
