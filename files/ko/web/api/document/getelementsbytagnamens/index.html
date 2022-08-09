---
title: Document.getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
tags:
  - API
  - DOM
  - NeedsMarkupWork
  - NeedsSpecTable
  - getElementsByTagNameNS
  - 레퍼런스
  - 메소드
translation_of: Web/API/Document/getElementsByTagNameNS
---
<div>{{APIRef("DOM")}}</div>

<p>주어진 네임스페이스에 속하는 태그명을 갖는 엘리먼트의 목록을 반환합니다. 루트 노드를 포함해 전체 다큐먼트를 대상으로 탐색합니다.</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="syntaxbox"><var>elements</var> = document.getElementsByTagNameNS(<var>namespace</var>, <var>name</var>)
</pre>

<ul>
 <li><var>elements</var> 는 트리에 나타난 순서로 발견된 살아있는 {{DOMxRef("NodeList")}} 입니다(하지만 아래를 확인하세요).</li>
 <li><var>namespace</var> 는 탐색하기 위한 엘리먼트의 네임스페이스 URI 입니다({{domxref("Node.namespaceURI", "element.namespaceURI")}}) 를 확인하세요).</li>
 <li><var>name 은 탐색할 엘리먼트의 로컬명 또는 모든 엘리먼트에 일치하는 특별 값 <code>*</code> 입니다</var>({{domxref("Node.localName", "element.localName")}} 를 확인하세요).</li>
</ul>

<p class="note"><strong>노트:</strong> W3C 명세는 <code>elements</code> 를 <code>NodeList</code> 라고 하였지만, Gecko 와 Internet Explorer 에서는 {{DOMxRef("HTMLCollection")}} 을 반환합니다. Opera 는<code>NodeList</code> 를 반환하지만 <code>namedItem</code> 메소드를 구현해 <code>HTMLCollection</code> 과 유사하게 만듭니다. 2012 년 1월 기준으로, WebKit 브라우저만 순수한 <code>NodeList</code> 를 반환합니다. 자세한 내용은 <a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=14869">bug 14869</a> 를 확인하세요.</p>

<p class="note"><strong>노트:</strong> 현재 이 메소드의 파라미터는 대소문자를 구분하지만, Firefox 3.5 와 그 이전에는 그렇지 않았습니다. 자세한 내용은 <a href="/ko/docs/Mozilla/Firefox/Releases/3.6#DOM">Firefox 3.6 개발자 릴리즈 노트</a>와 {{domxref("Element.getElementsByTagNameNS")}} 의 브라우저 호환성 섹션을 확인하세요.</p>

<h2 id="Example" name="Example">예시</h2>

<p>다음 예시에서 <code>getElementsByTagNameNS</code> 는 특정 부모 노트로부터 시작하고 위에서 아래로 해당 DOM 의 부모노드를 재귀적으로 탐색하여 태그 <code>name</code> 파라미터에 일치하는 자식 엘리먼트를 찾습니다.</p>

<p><code>getElementByTagName</code> 이 실행된 노드가 <code>document</code> 노드가 아닐 때, {{domxref("element.getElementsByTagNameNS")}} 메소드가 사용됨을 유의하세요.</p>

<p>다음 예시를 사용하려면, .xhtml 확장의 새 파일로 복사/붙여넣기 하세요.</p>

<pre class="brush: html">&lt;html xmlns="<a class="external" href="http://www.w3.org/1999/xhtml" rel="freelink">http://www.w3.org/1999/xhtml</a>"&gt;

&lt;head&gt;
&lt;title&gt;getElementsByTagNameNS example&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function getAllParaElems()
{
  var allParas = document.getElementsByTagNameNS("<a class="external" href="http://www.w3.org/1999/xhtml" rel="freelink">http://www.w3.org/1999/xhtml</a>", "p");

  var num = allParas.length;

  alert("There are " + num + " &amp;lt;p&amp;gt; elements in this document");
}


function div1ParaElems()
{
  var div1 = document.getElementById("div1")
  var div1Paras = div1.getElementsByTagNameNS("<a class="external" href="http://www.w3.org/1999/xhtml" rel="freelink">http://www.w3.org/1999/xhtml</a>", "p");

  var num = div1Paras.length;

  alert("There are " + num + " &amp;lt;p&amp;gt; elements in div1 element");
}


function div2ParaElems()
{
  var div2 = document.getElementById("div2")
  var div2Paras = div2.getElementsByTagNameNS("<a class="external" href="http://www.w3.org/1999/xhtml" rel="freelink">http://www.w3.org/1999/xhtml</a>", "p");

  var num = div2Paras.length;

  alert("There are " + num + " &amp;lt;p&amp;gt; elements in div2 element");
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body style="border: solid green 3px"&gt;
&lt;p&gt;Some outer text&lt;/p&gt;
&lt;p&gt;Some outer text&lt;/p&gt;

  &lt;div id="div1" style="border: solid blue 3px"&gt;
    &lt;p&gt;Some div1 text&lt;/p&gt;
    &lt;p&gt;Some div1 text&lt;/p&gt;
    &lt;p&gt;Some div1 text&lt;/p&gt;

    &lt;div id="div2" style="border: solid red 3px"&gt;
    &lt;p&gt;Some div2 text&lt;/p&gt;
    &lt;p&gt;Some div2 text&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;p&gt;Some outer text&lt;/p&gt;
&lt;p&gt;Some outer text&lt;/p&gt;

&lt;button onclick="getAllParaElems();"&gt;
 show all p elements in document&lt;/button&gt;&lt;br /&gt;

&lt;button onclick="div1ParaElems();"&gt;
 show all p elements in div1 element&lt;/button&gt;&lt;br /&gt;

&lt;button onclick="div2ParaElems();"&gt;
 show all p elements in div2 element&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="지원하지_않는_다른_브라우저를_위한_잠재적인_대안">지원하지 않는 다른 브라우저를 위한 잠재적인 대안</h2>

<p>원하는 브라우저가 XPath 를 지원하지 않는다면, 원하는 로컬명과 네임스페이스를 갖는 모든 태그를 찾기 위한 다른 접근법(모든 자식을 거쳐 DOM 을 횡단, 모든 @xmlns 인스턴스 식별 등)이 필요하지만, XPath 가 훨씬 빠릅니다(Explorer 에 적용하려면, 아래의 함수에서 XPath 대신 <a class="external" href="http://www.davidflanagan.com/javascript5/display.php?n=21-10&amp;f=21/10.js">이 래퍼 클래스같은</a> XPath 래퍼를 호출할 수 있습니다(Explorer 는 다른 API 로 XPath 를 지원합니다).)</p>

<pre class="brush: js">function getElementsByTagNameNSWrapper (ns, elName, doc, context) {
 if (!doc) {
  doc = document;
 }
 if (!context) {
  context = doc;
 }

 var result = doc.evaluate('//*[local-name()="'+elName+'" and namespace-uri() = "'+ns+'"]', context, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        var a = [];
        for(var i = 0; i &lt; result.snapshotLength; i++) {
            a[i] = result.snapshotItem(i);
        }
        return a;
}
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Document.getElementsByTagNameNS")}}</p>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li>{{DOMxRef("Element.getElementsByTagNameNS()")}}</li>
</ul>
