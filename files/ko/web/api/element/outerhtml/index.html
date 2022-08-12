---
title: Element.outerHTML
slug: Web/API/Element/outerHTML
tags:
  - API
  - DOM
  - DOM Parsing
  - Element
  - Parsing
  - Property
  - Reference
  - Serializing
translation_of: Web/API/Element/outerHTML
---
<div>{{APIRef("DOM")}}</div>

<p><code>outerHTML</code> 속성은 요소(element)의 자식 요소를 포함하여 요소를 나타내는 직렬화된 HTML 파편을 가져옵니다. 또한 주어진 문자열에서 파싱한 노드로 요소를 대체할 수 있습니다.</p>

<p>요소의 내용만을 HTML 형태로 가져오거나 설정하기 위해서는 {{domxref("Element.innerHTML", "innerHTML")}} 속성을 대신 사용하십시오.</p>

<h2 id="Syntax" name="Syntax">문법</h2>

<pre class="eval"><em>var content</em> = <em>element</em>.outerHTML;

<em>element</em>.outerHTML = <em>htmlString</em>;
</pre>

<h3 id="값">값</h3>

<p><code>outerHTML</code>로 값을 읽어올 때는 요소와 요소의 자식 요소가 직렬화된 HTML이 포함된 {{domxref("DOMString")}}을 반환합니다. <code>outerHTML</code>로 값을 설정할 때는 요소와 요소의 모든 자식 요소를 <code>htmlString</code> 형태로 파싱된 새로운 DOM 트리 구조로 대체합니다.</p>

<h3 id="예외">예외</h3>

<dl>
 <dt><code>SyntaxError</code></dt>
 <dd>유효하지 않은 HTML 문자열을 사용해 <code>outerHTML</code>을 설정하도록 시도할 경우 <code>SyntaxError</code> 예외가 발생합니다. </dd>
 <dt><code>NoModificationAllowedError</code></dt>
 <dd>{{domxref("Document.documentElement")}}와 같이 {{domxref("Document")}}의 바로 아래 자식 요소에 <code>outerHTML</code>을 설정하도록 시도할 경우 <code>NoModificationAllowedError</code> 예외가 발생합니다.</dd>
</dl>

<h2 id="Examples" name="Examples">예제</h2>

<p>다음은 요소의 <code>outerHTML</code> 속성을 가져오는 예시입니다.</p>

<pre class="brush: js">// HTML:
// &lt;div id="d"&gt;&lt;p&gt;Content&lt;/p&gt;&lt;p&gt;Further Elaborated&lt;/p&gt;&lt;/div&gt;

d = document.getElementById("d");
console.log(d.outerHTML);

// '&lt;div id="d"&gt;&lt;p&gt;Content&lt;/p&gt;&lt;p&gt;Further Elaborated&lt;/p&gt;&lt;/div&gt;'
// 위 문자열이 콘솔창에 출력됩니다.
</pre>

<p>다음은 <code>outerHTML</code> 속성으로 노드를 대체하는 예시입니다.</p>

<pre class="brush: js">// HTML:
// &lt;div id="container"&gt;&lt;div id="d"&gt;This is a div.&lt;/div&gt;&lt;/div&gt;

container = document.getElementById("container");
d = document.getElementById("d");
console.log(container.firstChild.nodeName); // "DIV"를 출력합니다.

d.outerHTML = "&lt;p&gt;This paragraph replaced the original div.&lt;/p&gt;";
console.log(container.firstChild.nodeName); // "P"를 출력합니다.

// #d의 div 요소가 문서 트리에서 제거되고,
// 새 p 요소로 대체되었습니다.
</pre>

<h2 id="참고">참고</h2>

<p>부모 요소가 없는 요소에 <code>outerHTML</code> 속성을 설정하려고 하면 변경되지 않습니다. 많은 브라우저는 예외를 발생시킵니다. 아래는 예시입니다.</p>

<pre class="brush: js">var div = document.createElement("div");
div.outerHTML = "&lt;div class=\"test\"&gt;test&lt;/div&gt;";
// 많은 브라우저에서 DOMException 예외를 발생시킵니다.
console.log(div.outerHTML); // 결과: "&lt;div&gt;&lt;/div&gt;"</pre>

<p>또한, 문서 내의 요소가 변경되더라도 변수의 <code>outerHTML</code> 속성은 원본 요소를 계속 참조합니다.</p>

<pre class="brush: js">var p = document.getElementsByTagName("p")[0];
console.log(p.nodeName); // "P"를 출력합니다.
p.outerHTML = "&lt;div&gt;This div replaced a paragraph.&lt;/div&gt;";
console.log(p.nodeName); // 여전히 "P"를 출력합니다.
</pre>

<h2 id="Specification" name="Specification">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Element.outerHTML")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>DOM 트리를 XML이나 HTML으로 직렬화하는 {{domxref("XMLSerializer")}}</li>
 <li>XML이나 HTML을 파싱하여 DOM 트리로 변환하는 {{domxref("DOMParser")}}</li>
 <li>{{domxref("HTMLElement.outerText")}}</li>
</ul>
