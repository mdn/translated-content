---
title: Document.getElementById()
slug: Web/API/Document/getElementById
tags:
  - API
  - DOM
  - Document
  - Elements
  - Method
  - Reference
  - Web
translation_of: Web/API/Document/getElementById
---
<div>{{ ApiRef("DOM") }}</div>

<p><code><strong>Document.getElementById()</strong></code> 메서드는 주어진 문자열과 일치하는 {{domxref("Element.id", "id")}} 속성을 가진 요소를 찾고, 이를 나타내는 {{domxref("Element")}} 객체를 반환합니다. ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용합니다.</p>

<p>ID가 없는 요소에 접근하려면 {{domxref("Document.querySelector()")}}를 사용하세요. 모든 {{Glossary("CSS selector", "선택자")}}를 사용할 수 있습니다.</p>

<h2 id=".EA.B5.AC.EB.AC.B8" name=".EA.B5.AC.EB.AC.B8">구문</h2>

<pre class="syntaxbox">document.getElementById(<em>id</em>);
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><strong><code>id</code></strong></dt>
 <dd>찾으려는 요소 ID. ID는 대소문자를 구분하는 문자열로, 문서 내에서 유일해야 합니다. 즉, 하나의 값은 하나의 요소만 사용할 수 있습니다.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>주어진 ID와 일치하는 DOM 요소를 나타내는 {{domxref("Element")}} 객체. 문서 내에 주어진 ID가 없으면 <code>null</code>.</p>

<h2 id="예제" name="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html line-numbers  language-html">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;getElementById 예제&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p id="para"&gt;어떤 글&lt;/p&gt;
  &lt;button onclick="changeColor('blue');"&gt;blue&lt;/button&gt;
  &lt;button onclick="changeColor('red');"&gt;red&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js line-numbers  language-js">function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}
</pre>

<h3 id="결과">결과</h3>

<p>{{ EmbedLiveSample('예제', 250, 100) }}</p>

<h2 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">용법</h2>

<p>메서드 이름 중 <code>"Id"</code>의 대소문자가 정확해야 합니다. <code>getElementByID()</code>가 자연스러워 보일지라도 유효하지 않은 이름이기에 사용할 수 없습니다.</p>

<p>{{domxref("Document.querySelector()")}}나 {{domxref("Document.querySelectorAll()")}}과는 달리 <code>getElementById()</code>는 전역 <code>document</code> 객체의 메서드로만 사용할 수 있고, DOM의 다른 객체는 메서드로 가지고 있지 않습니다. ID 값은 문서 전체에서 유일해야 하며 "국지적"인 버전을 쓸 이유가 없기 때문입니다.</p>

<h3 id="예제_2" name="예제_2">예제</h3>

<pre class="brush: html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="parent-id"&gt;
        &lt;p&gt;hello word1&lt;/p&gt;
        &lt;p id="test1"&gt;hello word2&lt;/p&gt;
        &lt;p&gt;hello word3&lt;/p&gt;
        &lt;p&gt;hello word4&lt;/p&gt;
    &lt;/div&gt;
    &lt;script&gt;
        var parentDOM = document.getElementById('parent-id');
        var test1=parentDOM.getElementById('test1');
        //throw error
        //Uncaught TypeError: parentDOM.getElementById is not a function
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><code>id</code>에 맞는 요소가 없을 때 <code>getElementById()</code>는 <code>null</code>을 반환합니다. 매개변수 <code>id</code>가 대소문자를 구분한다는 점을 기억하세요. <code>document.getElementById("<strong>M</strong>ain")</code>는 <code>&lt;div id="<strong>m</strong>ain"&gt;</code> 대신 <code>null</code>을 반환하는데 "M"과 "m"을 구분하기 때문입니다.</p>

<p><strong>문서에 없는 요소</strong>는 <code>getElementById()</code>가 팀색하지 않습니다. 요소를 동적으로 생성해서 ID를 부여하더라도, {{domxref("Node.insertBefore()")}}나 비슷한 메서드로 문서 트리에 삽입해야 <code>getElementById()</code>로 접근할 수 있습니다.</p>

<pre class="brush: js line-numbers  language-js">var element = document.createElement('div');
element.id = 'testqq';
var el = document.getElementById('testqq'); // el이 null!
</pre>

<p><strong>HTML이 아닌 문서</strong>. DOM 구현체는 요소의 어떤 속성이 ID인지 알고 있어야 합니다. 문서의 DTD가 정의하고 있지 않으면, 속성명이 "id"라고 해도 ID 유형인건 아닙니다. <a href="/ko/docs/XHTML" title="en-US/docs/XHTML">XHTML</a>, <a href="/ko/docs/XUL" title="en-US/docs/XUL">XUL</a> 등 자주 쓰이는 문서의 경우 <code>id</code> 속성을 ID 유형으로 정의하고 있습니다. ID 유형의 속성이 어떤 것인지 모르는 다른 구현의 경우 <code>null</code>을 반환합니다.</p>

<h2 id="Specification">명세</h2>

{{Specifications}}

<h2 id="Browser_Compatibility" name="Browser_Compatibility">브라우저 호환성</h2>

<p>{{Compat("api.Document.getElementById")}}</p>

<h2 id="See_also" name="See_also">같이 보기</h2>

<ul>
 <li>{{domxref("Document")}}는 문서 안의 요소에 접근할 수 있는 다른 메서드와 속성으로의 참조를 가지고 있습니다.</li>
 <li>{{domxref("Document.querySelector()")}}를 사용하면 <code>'div.myclass'</code> 처럼 선택자로 요소를 탐색할 수 있습니다.</li>
 <li><a href="/ko/docs/xml/xml:id" title="en-US/docs/xml/id">xml:id</a> - <code>getElementById()</code>가 (Ajax 호출 등으로 받은) XML 문서에서 "xml:id" 속성 값을 사용할 수 있도록 도와주는 메서드를 가지고 있습니다.</li>
</ul>

<p> </p>
