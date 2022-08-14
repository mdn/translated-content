---
title: URL
slug: Web/API/URL
tags:
  - API
  - Interface
  - Overview
  - Reference
  - URI
  - URL
  - URL API
  - Web
translation_of: Web/API/URL
---
<div>{{APIRef("URL API")}}</div>

<p><span class="seoSummary"><strong><code>URL</code></strong> 인터페이스는 {{glossary("URL")}}을 분석, 생성, 정규화, 인코딩 할 때 사용하며, URL의 각 구성요소를 쉽게 읽고 쓸 수 있는 속성을 제공합니다.</span> <code>URL</code> 객체 생성은 생성자에 전체 URL 문자열, 또는 상대 URL과 기준 URL을 생성자에 전달해 진행합니다. 이렇게 생성한 URL 객체를 사용해 URL을 쉽게 바꾸거나 읽을 수 있습니다.</p>

<p>브라우저가 아직 {{domxref("URL.URL", "URL()")}} 생성자를 지원하지 않을 땐 {{domxref("Window")}} 인터페이스의 <code>Window.URL</code> 속성으로 <code>URL</code> 객체에 접근할 수 있습니다. 개발에 사용하기 전, 프로젝트의 지원 대상 브라우저를 확인하고, 이런 절차를 추가해야 하는지 결정하세요.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="생성자">생성자</h2>

<dl>
 <dt>{{domxref("URL.URL", "new URL()")}}</dt>
 <dd>주어진 절대 URL, 또는 상대 URL과 기준 URL 문자열을 사용해 생성한 <code>URL</code> 객체를 생성하고 반환합니다.</dd>
</dl>

<h2 id="속성">속성</h2>

<dl>
 <dt>{{domxref("URL.hash", "hash")}}</dt>
 <dd><code>'#'</code>과 URL의 프래그먼트 식별자를 담은 {{domxref("USVString")}}입니다.</dd>
 <dt>{{domxref("URL.host", "host")}}</dt>
 <dd>URL의 도메인(호스트 이름), <code>':'</code>, 포트를 담은 {{domxref("USVString")}}입니다.</dd>
 <dt>{{domxref("URL.hostname", "hostname")}}</dt>
 <dd>URL의 도메인을 담은 {{domxref("USVString")}}입니다.</dd>
 <dt>{{domxref("URL.href", "href")}}</dt>
 <dd>전체 URL을 반환하는 문자열화 속성입니다.</dd>
 <dt>{{domxref("URL.origin", "origin")}} {{readonlyInline}}</dt>
 <dd>URL의 {{glossary("origin", "출처")}}, 즉 스킴, 도메인, 포트를 담은 {{domxref("USVString")}}입니다.</dd>
 <dt>{{domxref("URL.password", "password")}}</dt>
 <dd>도메인 이름 이전에 지정된 비밀번호를 담은 {{domxref("USVString")}}입니다.</dd>
 <dt>{{domxref("URL.pathname", "pathname")}}</dt>
 <dd><code>'/'</code>와 URL의 경로를 담은 {{domxref("USVString")}}입니다.</dd>
 <dt>{{domxref("URL.port", "port")}}</dt>
 <dd>URL의 포트 번호를 담은 {{domxref("USVString")}}입니다.</dd>
 <dt>{{domxref("URL.protocol", "protocol")}}</dt>
 <dd>URL의 {{glossary("protocol", "프로토콜")}} 스킴을 담은 {{domxref("USVString")}}입니다. 마지막 <code>':'</code>을 포함합니다.</dd>
 <dt>{{domxref("URL.search", "search")}}</dt>
 <dd>URL의 매개변수 문자열을 나타내는 {{domxref("USVString")}}입니다. 어떤 매개변수라도 존재하는 경우 <code>'?'</code> 문자로 시작해, 모든 매개변수를 포함합니다.</dd>
 <dt>{{domxref("URL.searchParams", "searchParams")}} {{readonlyInline}}</dt>
 <dd><code>search</code> 속성의 매개변수 각각에 접근할 수 있는 {{domxref("URLSearchParams")}} 객체입니다.</dd>
 <dt>{{domxref("URL.username","username")}}</dt>
 <dd>도메인 이름 이전에 지정된 사용자 이름을 담은 {{domxref("USVString")}}입니다.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<dl>
 <dt>{{domxref("URL.toString", "toString()")}}</dt>
 <dd>전체 URL을 담은 {{domxref("USVString")}}을 반환합니다. {{domxref("URL.href")}}와 동일하나, <code>toString()</code>으로는 URL을 편집할 수 없습니다.</dd>
 <dt>{{domxref("URL.toJSON", "toJSON()")}}</dt>
 <dd>전체 URL을 담은 {{domxref("USVString")}}을 반환합니다. {{domxref("URL.href")}}와 동일한 문자열을 반환합니다.</dd>
</dl>

<h2 id="정적_메서드">정적 메서드</h2>

<dl>
 <dt>{{domxref("URL.createObjectURL", "createObjectURL()")}}</dt>
 <dd>고유한 블롭 URL, 즉 <code>blob:</code> 을 스킴으로 하고, 브라우저 내의 객체를 가리키는 고유한 불투명 문자열을 그 뒤에 붙인 {{domxref("DOMString")}}을 반환합니다.</dd>
 <dt>{{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}</dt>
 <dd>이전에 {{domxref("URL.createObjectURL()")}}로 생성한 객체 URL을 취소합니다.</dd>
</dl>

<h2 id="사용_일람">사용 일람</h2>

<p>생성자는 <code>url</code> 매개변수를 받으며, URL이 상대 URL인 경우 선택적으로 <code>base</code> 매개변수를 지정해 기준으로 사용할 수 있습니다.</p>

<pre class="brush: js">const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
</pre>

<p>URL 속성을 사용해 URL을 만들 수 있습니다.</p>

<pre class="brush: js">url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"
</pre>

<p>URL은 {{RFC(3986)}}의 규칙을 따라 인코딩 됩니다.</p>

<pre class="brush: js">url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
</pre>

<p>{{domxref("URLSearchParams")}} 인터페이스를 사용해 URL 쿼리 문자열을 생성하거나 조작할 수 있습니다.</p>

<p>현재 URL의 검색 매개변수를 가져오려면 다음과 같은 코드를 사용하세요.</p>

<pre class="brush: js">// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"</pre>

<p>{{domxref("URL.toString", "toString()")}} 메서드는 단순히 {{domxref("URL.href", "href")}} 속성의 값을 반환하는 것이므로, URL 정규화와 인코딩에 생성자를 직접 사용할 수 있습니다.</p>

<pre class="brush: js">const response = await fetch(new URL('http://www.example.com/démonstration.html'));</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.URL")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/URL_API">URL API</a></li>
 <li>{{domxref("URLSearchParams")}}.</li>
</ul>
