---
title: DOMParser
slug: Web/API/DOMParser
translation_of: Web/API/DOMParser
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary">The <strong><code>DOMParser</code></strong> 인터페이스는 DOM {{domxref("Document")}} 문서에 맞는 {{Glossary("XML")}} 및 {{Glossary("HTML")}} 소스 코드를 해석할 수 있는 기반을 제공한다 .</span></p>

<div class="note">
<p><strong>참고:</strong> {{domxref("XMLHttpRequest")}} 객체로도 인식 가능한 URL 주소로부터 직접 XML 및 HTML 문서를 해석하여 {{domxref("XMLHttpRequest.response", "response")}} 속성을 통해 <code>Document</code> 객체로 제공한다.</p>
</div>

<p>반대로 DOM 구조를 XML 및 HTML 소스 코드로 제공하는 방식은 {{domxref("XMLSerializer")}} 인터페이스를 참고하도록 한다.</p>

<p>HTML 문서의 경우, {{domxref("Element.innerHTML")}} 속성과 {{domxref("Element.outerHTML", "outerHTML")}} 속성을 통해 DOM 구조를 새로운 방식으로 변경할 수 있다. 또한 이들 속성을 통해 HTML 구조의 하위에 있는 HTML 구조도 불러올 수 있다.</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox notranslate">let <var>domparser</var> = new DOMParser()​​</pre>

<h2 id="메소드">메소드</h2>

<h3 id="domxrefDOMParser.parseFromString_1">{{domxref("DOMParser.parseFromString()", "", "", "1")}}</h3>

<h4 id="문법_2">문법</h4>

<pre class="syntaxbox notranslate">let <var>doc</var> = domparser.parseFromString(<var>string, <var>mimeType</var>)</var></pre>

<h4 id="반환">반환</h4>

<p> <strong><code><a href="#Argument02">mimeType</a></code></strong> 인자를 통해 정의한 형식에 따른 {{domxref("Document")}} 또는{{domxref("XMLDocument")}} 문서를 반환한다.</p>

<h4 id="인자">인자</h4>

<p>이 메소드에는 2개의 인자가 제공되는데, 모두 필수값이다.</p>

<dl>
 <dt><code><var>string</var></code></dt>
 <dd>해석할 {{domxref("DOMString")}} 문자열. 반드시 {{Glossary("HTML")}}, {{Glossary("xml")}}, {{Glossary("xhtml+xml")}} 또는 {{Glossary("svg")}} 문서 형식에 맞아야 한다.</dd>
 <dt id="Argument02"><code><var>mimeType</var></code></dt>
 <dd>
 <p>아래 표에 정의한 형식을 반환 값으로 제공할 {{domxref("DOMString")}} 문자열.</p>

 <table class="standard-table" style="max-width: 60ch;">
  <thead>
   <tr>
    <th scope="col"><code><var>mimeType</var></code></th>
    <th scope="col"><code><var>doc</var>.constructor</code></th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>text/html</code></td>
    <td><code>{{domxref("Document")}}</code></td>
   </tr>
   <tr>
    <td><code>text/xml</code></td>
    <td><code>{{domxref("XMLDocument")}}</code></td>
   </tr>
   <tr>
    <td><code>application/xml</code></td>
    <td><code>{{domxref("XMLDocument")}}</code></td>
   </tr>
   <tr>
    <td><code>application/xhtml+xml</code></td>
    <td><code>{{domxref("XMLDocument")}}</code></td>
   </tr>
   <tr>
    <td><code>image/svg+xml</code></td>
    <td><code>{{domxref("XMLDocument")}}</code></td>
   </tr>
  </tbody>
 </table>
 </dd>
</dl>

<h2 id="예제">예제</h2>

<h3 id="XML_해석">XML 해석</h3>

<p>parser 변수를 통해 새로이 해석할 객체를 만들었다면, 이제 <code>parseFromString()</code> 메소드를 통해 XML 문서를 해석할 수 있다.</p>

<pre class="brush: js notranslate">let <var>parser</var> = new DOMParser()
let <var>doc</var> = parser.parseFromString(<var>stringContainingXMLSource</var>, "application/xml")
</pre>

<h4 id="Error_handling" name="Error_handling">오류 대응</h4>

<p>만약 해석에 실패할 경우, <code>DOMParser</code> 객체는 예외를 발생시키지 않고, 아래와 같은 오류 문서를 반환한다.</p>

<pre class="brush:xml notranslate">&lt;parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml"&gt;
  <var>(영문 오류 내용)</var>
  &lt;sourcetext&gt;<var>(오류가 발생한 XML 소스 조각)</var>&lt;/sourcetext&gt;
&lt;/parsererror&gt;
</pre>

<p>또한 해석 오류를 <a href="/en-US/docs/Error_Console" title="Error Console">오류 콘솔</a>에서도 볼 수 있으며, 여기에 후술할(역주: geckoRelease) 문서 URI도 포함된다</p>

<h3 id="SVG_및_HTML_해석">SVG 및 HTML 해석</h3>

<p>The <code>DOMParser</code> 객체는 {{geckoRelease("10.0")}} 규격에 맞는 SVG 문서도 해석할 수 있으며,{{geckoRelease("12.0")}} 규격에 맞는 HTML 문서를 해석할 수 있다. MIME 형식에 따라 아래와 같이 다른 객체가 반환될 수 있다.</p>

<ol>
 <li>IME 형식이 <code>text/xml</code>이면, <code>XMLDocument</code> 객체가 반환된다.</li>
 <li>MIME 형식이 <code>image/svg+xml</code>이면, <code>SVGDocument</code> 객체가 반환된다.</li>
 <li>MIME 형식이 <code>text/html</code>이면, <code>HTMLDocument</code> 객체가 반환된다.</li>
</ol>

<pre class="brush: js notranslate">let parser = new DOMParser()
let doc = parser.parseFromString(stringContainingXMLSource, "application/xml")
// Document 객체가 반환되지만, SVGDocument 및 HTMLDocument 객체가 아니다.

parser = new DOMParser();
doc = parser.parseFromString(stringContainingSVGSource, "image/svg+xml")
// SVGDocument 객체가 반환되며, 이 또한 Document 객체이기도 하다.

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html")
// HTMLDocument 객체가 반환되며, 이 또한 Document 객체이기도 하다.
</pre>

<h2 id="DOMParser_HTML_확장">DOMParser HTML 확장</h2>

<pre class="brush: js notranslate">/*
 * DOMParser HTML 확장
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * 이 구현체에 대한 보증이 없으므로 주의해서 사용할 것.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function(DOMParser) {
	"use strict";

	var proto = DOMParser.prototype,
        nativeParse = <span style="font-size: 1rem;">proto</span><span style="font-size: 1rem;">.parseFromString</span>;

	// Firefox/Opera/IE 에서 지원하지 않는 형식에 오류 발생
	try {
		// WebKit returns null on unsupported types
		if ((new DOMParser()).parseFromString("", "text/html")) {
			// text/html parsing is natively supported
			return;
		}
	} catch (ex) {}

	<span style="font-size: 1rem;">proto</span><span style="font-size: 1rem;">.parseFromString = function(markup, type) {</span>
		if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
			var
			  doc = document.implementation.createHTMLDocument("")
			;
	      		if (markup.toLowerCase().indexOf('&lt;!doctype') &gt; -1) {
        			doc.documentElement.innerHTML = markup;
      			}
      			else {
        			doc.body.innerHTML = markup;
      			}
			return doc;
		} else {
			return <span style="font-size: 1rem;">nativeParse</span><span style="font-size: 1rem;">.apply(this, arguments);</span>
		}
	};
}(DOMParser));
</pre>

<h2 id="규격">규격</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-parsing-and-serialization', 'DOM parsing')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("api.DOMParser", 3)}}</p>

<h2 id="See_also" name="See_also">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Parsing_and_serializing_XML" title="Parsing_and_serializing_XML">XML 문서 직렬화와 해석</a> </li>
 <li>{{domxref("XMLHttpRequest")}}</li>
 <li>{{domxref("XMLSerializer")}}</li>
 <li>{{jsxref("JSON.parse()")}} - {{jsxref("JSON")}} 문서에 대해 같은 역할을 제공한다.</li>
</ul>
