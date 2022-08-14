---
title: History.pushState()
slug: Web/API/History/pushState
tags:
  - API
  - DOM
  - History
  - History API
  - Method
  - Reference
  - Web
translation_of: Web/API/History/pushState
---
<div>{{APIRef("DOM")}}</div>

<p><a href="/en-US/docs/Web/HTML">HTML</a> 문서에서, <strong><code>history.pushState()</code></strong> 메서드는 브라우저의 세션 기록 스택에 상태를 추가합니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">history.pushState(<var>state</var>, <var>title</var>[, <var>url</var>]);</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>state</code></dt>
 <dd>새로운 세션 기록 항목에 연결할 상태 객체. 사용자가 새로운 상태로 이동할 때마다 {{event("popstate")}} 이벤트가 발생하는데, 이 때 이벤트 객체의 <code>state</code> 속성에 해당 상태의 복제본이 담겨 있습니다.</dd>
 <dd>상태 객체는 직렬화 가능한 객체라면 모두 가능합니다.</dd>
 <dt><code>title</code></dt>
 <dd><a href="https://github.com/whatwg/html/issues/2174">지금은 대부분의 브라우저가 <code>title</code> 매개변수를 무시하지만</a>, 미래에 쓰일 수도 있습니다. 빈 문자열을 지정하면 나중의 변경사항에도 안전할 것입니다. 아니면, 상태에 대한 짧은 제목을 제공할 수도 있습니다.</dd>
 <dt><code>url</code> {{optional_inline}}</dt>
 <dd>새로운 세션 기록 항목의 URL. <code>pushState()</code> 호출 이후에 브라우저는 주어진 URL로 탐색하지 않습니다. 그러나 이후, 예컨대 브라우저를 재시작할 경우 탐색을 시도할 수도 있습니다. 상대 URL을 지정할 수 있으며, 이 땐 현재 URL을 기준으로 사용합니다. 새로운 URL은 현재 URL과 같은 {{glossary("origin", "출처")}}를 가져야 하며, 그렇지 않을 경우 예외가 발생합니다. 지정하지 않은 경우 문서의 현재 URL을 사용합니다.</dd>
</dl>

<h2 id="설명">설명</h2>

<p>어떤 면에선 <code>pushState()</code>와 <code>window.location = "#foo"</code>가 비슷합니다. 둘 다 새로운 세션 기록 항목을 생성하고 활성화하기 때문입니다. 그러나 <code>pushState()</code>에는 몇 가지 장점이 있습니다.</p>

<ul>
 <li>새로운 URL은 같은 출처에 한해서 아무 URL이나 가능합니다. 반면 {{domxref("window.location")}} 설정은 해시만 수정해야 같은 문서에 머무릅니다.</li>
 <li>원할 경우 URL을 바꾸지 않을 수도 있습니다. 그러나 <code>window.location = "#foo"</code>는 현재 해시가 <code>#foo</code>가 아닐 때만 새로운 기록 항목을 생성합니다.</li>
 <li><code>pushState()</code>는 임의의 데이터를 세션 기록 항목에 연결할 수 있습니다. 해시 기반 방식에서는 필요한 모든 데이터를 인코딩 해 짧은 문자열로 만들어야 합니다.</li>
</ul>

<p>다만 <code>pushState()</code>는 이전 URL과 신규 URL의 해시가 다르더라도 절대 {{event("hashchange")}} 이벤트를 유발하지 않습니다.</p>

<p>HTML 외의 문서에서는 이름공간 URI가 <code>null</code>인 요소를 생성합니다.</p>

<h2 id="예제">예제</h2>

<p>다음 코드는 주어진 상태, 제목, URL을 사용해 새로운 세션 기록을 생성합니다.</p>

<pre class="brush: js">const state = { 'page_id': 1, 'user_id': 5 }
const title = ''
const url = 'hello-world.html'

history.pushState(state, title, url)</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.History.pushState")}}</p>
