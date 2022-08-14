---
title: URL()
slug: Web/API/URL/URL
tags:
  - API
  - Constructor
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/URL
---
<div>{{APIRef("URL API")}}</div>

<p><code><strong>URL()</strong></code> 생성자는 매개변수로 제공한 URL을 나타내는 새로운 {{domxref("URL")}} 객체를 반환합니다.</p>

<p>주어진 기준 URL이나 결과 URL이 유효하지 않은 URL일 경우, JavaScript {{jsxref("TypeError")}} 예외가 발생합니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <var>url</var> = new URL(<var>url</var> [, <var>base</var>])
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code><var>url</var></code></dt>
 <dd>절대 또는 상대 URL을 나타내는 {{domxref("USVString")}}. <code>url</code>이 상대 URL인 경우 <code>base</code> 매개변수를 기준 URL로 사용하므로 <code>base</code>도 필수로 지정해야 합니다. 절대 URL인 경우 <code>base</code>는 무시합니다.</dd>
 <dt><code><var>base</var></code> {{optional_inline}}</dt>
 <dd><code>url</code> 매개변수가 상대 URL인 경우 사용할 기준 URL을 나타내는 {{domxref("USVString")}}. 기본값은 <code>''</code>입니다.</dd>
</dl>

<div class="note">
<p><strong>참고</strong>: <code>base</code>에는 기존에 존재하는 {{domxref("URL")}} 객체도 사용할 수 있습니다. 그러면 {{domxref("URI.href", "href")}} 속성을 사용해 스스로 문자열화합니다.</p>
</div>

<h3 id="예외">예외</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">예외</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("TypeError")}}</td>
   <td>절대 URL인 경우 <code>url</code>, 상대 URL인 경우 <code>base</code> + <code>url</code>이 유효하지 않은 URL인 경우.</td>
  </tr>
 </tbody>
</table>

<h2 id="예제">예제</h2>

<pre class="brush: js">// Base urls
let m = 'https://developer.mozilla.org';
let a = new URL("/", m);                                // =&gt; 'https://developer.mozilla.org/'
let b = new URL(m);                                     // =&gt; 'https://developer.mozilla.org/'

        new URL('en-US/docs', b);                      // =&gt; 'https://developer.mozilla.org/en-US/docs'
let d = new URL('/en-US/docs', b);                     // =&gt; 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', d);                     // =&gt; 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', a);                     // =&gt; 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto");
                                                       // =&gt; 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', '');                    // Raises a TypeError exception as '' is not a valid URL
        new URL('/en-US/docs');                        // Raises a TypeError exception as '/en-US/docs' is not a valid URL
        new URL('http://www.example.com', );           // =&gt; 'http://www.example.com/'
        new URL('http://www.example.com', b);          // =&gt; 'http://www.example.com/'

        new URL("//foo.com", "https://example.com")    // =&gt; 'https://foo.com' (see relative URLs)
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL.URL")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>생성자가 속한 {{domxref("URL")}} 인터페이스.</li>
</ul>
