---
title: XML 파싱 및 직렬화
slug: Web/Guide/Parsing_and_serializing_XML
tags:
  - AJAX
  - Add-ons
  - DOM
  - Extensions
  - JSON
  - JXON
  - XML
  - XMLHttpRequest
  - 가이드
translation_of: Web/Guide/Parsing_and_serializing_XML
original_slug: Web/Guide/XML_파싱_및_직렬화
---
<p>웹 상에서 XML을 파싱하고 직렬화할 때 사용할 수 있는 객체는 다음과 같습니다.</p>

<ul>
 <li><strong>DOM 트리를 문자열로 직렬화</strong>하는<strong> </strong><a href="/en/XMLSerializer" title="en/XMLSerializer">XMLSerializer</a></li>
 <li><strong>XML 문서 상의 각기 다른 부분들을 (비 XML 문법을 사용하여) 문자열로 직렬화</strong>하는 <a class="internal" href="/en/XPath" title="en/XPath">XPath</a></li>
 <li>XML을 파싱하여 <strong>문자열을 DOM 트리로 변환</strong>하는 <a href="/en/DOM/DOMParser" title="en/DOMParser">DOMParser</a></li>
 <li><strong>URL을 사용하여 주소화 가능한(URL-addressable) 리소스를 DOM 트리로</strong> 파싱하는 <a href="/en/nsIXMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a></li>
</ul>

<h2 id="Part_1_XML_문서_생성법">Part 1: XML 문서 생성법</h2>

<p>XML 문서 생성법은 다음과 같습니다. (XML 문서는 <code>Document</code>의 인스턴스 입니다.)</p>

<h3 id="문자열을_DOM_트리로_파싱">문자열을 DOM 트리로 파싱</h3>

<div style="overflow: hidden;">
<pre class="brush: js">var sMyString = '&lt;a id="a"&gt;&lt;b id="b"&gt;hey!&lt;/b&gt;&lt;/a&gt;';
var oParser = new DOMParser();
var oDOM = oParser.parseFromString(sMyString, "text/xml");
// 루트 요소의 이름, 또는 에러 메시지를 출력합니다.
dump(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
</pre>
</div>

<h3 id="자바스크립트_객체_트리를_시작점으로_하여_XML_문서를_생성(JXON)">자바스크립트 객체 트리를 시작점으로 하여 XML 문서를 생성(JXON)</h3>

<p><a class="internal" href="/en/JXON#Reverse_Algorithms" title="en/JXON – Reverse Algorithms">JXON 역(reverse) 알고리즘</a>을 참고하세요.</p>

<h3 id="URL_주소화_가능한(URL-addressable)_리소스를_DOM_트리로_파싱">URL 주소화 가능한(URL-addressable) 리소스를 DOM 트리로 파싱</h3>

<h4 id="XMLHttpRequest를_사용합니다">XMLHttpRequest를 사용합니다</h4>

<p>다음은 URL 주소화 가능한 XML 파일을 DOM 트리로 읽어들인 후 파싱하는 예시 코드입니다.</p>

<pre class="brush: js">var xhr = new XMLHttpRequest();
xhr.onload = function() {
  dump(xhr.responseXML.documentElement.nodeName);
}
xhr.onerror = function() {
  dump("Error while getting XML.");
}
xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
</pre>

<p><code>xhr.responseXML는</code> {{domxref("Document")}}의 인스턴스입니다.</p>

<h2 id="Part_2_특정_XML_문서의_콘텐츠를_직렬화하는_방법">Part 2: 특정 XML 문서의 콘텐츠를 직렬화하는 방법</h2>

<p>Part 1에서 생성한 XML 문서의 콘텐츠를 직렬화할 수 있는 방법은 다음과 같습니다.</p>

<h3 id="DOM_트리를_문자열로_직렬화">DOM 트리를 문자열로 직렬화</h3>

<p>제일 먼저 <a href="/en/How_to_create_a_DOM_tree" title="en/How_to_create_a_DOM_tree">DOM 트리 생성법</a>에 나와 있는 대로 DOM 트리를 생성합니다. 다른 방법으로는 {{ domxref("XMLHttpRequest") }}에서 얻어낸 DOM 트리를 사용하는 방법이 있습니다.</p>

<p>이제 <code>doc</code>(DOM 트리)를 문자열로 직렬화 해 봅시다.</p>

<pre class="brush: js">var oSerializer = new XMLSerializer();
var sXML = oSerializer.serializeToString(doc);</pre>

<p><code>new XMLSerializer()</code> 생성자는 JS XPCOM 컴포넌트(혹은 <a class="internal" href="/en/JavaScript_code_modules" title="En/JavaScript modules">JS module</a>) 내에서는 사용이 불가능합니다. 대신, 다음과 같은 코드를 작성하세요.</p>

<pre class="brush: js">var oSerializer = Components.classes["@mozilla.org/xmlextras/xmlserializer;1"]
                            .createInstance(Components.interfaces.nsIDOMSerializer);
var sXML = oSerializer.serializeToString(doc);
</pre>

<h4 id="DOM_트리를_문자열로_예쁘게(pretty)_직렬화">DOM 트리를 문자열로 "예쁘게(pretty)" 직렬화</h4>

<p><code><a href="/en/XMLSerializer" title="XMLSerializer">XMLSerializer</a>와</code> <a href="/en/E4X" title="en/E4X">E4X</a>를 사용하면 DOM 트리를 <a class="external" href="http://en.wikipedia.org/wiki/Pretty-print">예쁘게 출력(pretty print</a>) 할 수 있습니다. 우선, <a href="/en/How_to_create_a_DOM_tree" title="en/How_to_create_a_DOM_tree">DOM 트리 생성법</a> 글을 참고하여 DOM 트리를 생성합니다. 혹은 {{ domxref("XMLHttpRequest") }}를 통해 DOM 트리를 뽑아내는 방법도 있습니다. 아래 코드에서 변수 <code>doc</code>는 DOM 트리를 가지고 있습니다.</p>

<pre class="brush: js">var oSerializer = new XMLSerializer();
var sPrettyXML = XML(oSerializer.serializeToString(doc)).toXMLString();</pre>

<p>들여쓰기는 두 번 스페이스가 들어간 것과 같게 되어 있습니다. 좀 더 효율적인 코드를 작성하거나 들여쓰기 문자열을 임의로 설정하고 싶다면 {{ domxref("treeWalker") }}를 사용하십시오.</p>

<div class="note"><strong>Note:</strong> E4X <code>toXMLString</code> 메소드를 쓴다면, <strong>CDATA 요소가 없어지거나</strong>, 요소 안에 담긴 텍스트만 남을 수 있습니다. 그러므로 만약 XML 내에 CDATA 요소가 들어 있다면, <span style="background-color: #f5f6f5;">위에 나온 메소드는 그다지 유용하지 않을 수도 있습니다.</span></div>

<pre class="brush: xml">&lt;content&gt;&lt;![CDATA[This is the content]]&gt;&lt;/content&gt;
</pre>

<p>위의 코드는 다음과 같이 변환됩니다.</p>

<pre class="brush: xml">&lt;content&gt;This is the content&lt;/content&gt;</pre>

<h3 id="DOM_트리를_자바스크립트_객체_트리로_직렬화_(JXON)">DOM 트리를 자바스크립트 객체 트리로 직렬화 (JXON)</h3>

<p><a href="/en/JXON" title="en/JXON">JXON</a> (lossless <strong>J</strong>avaScript <strong>X</strong>ML <strong>O</strong>bject <strong>N</strong>otation, 무손실 자바스크립트 XML 객체 표기법)은 XML을 사용하여 자바스크립트 객체를 표현하는 방법입니다. XML 문서의 일부분만 나오게 하고 싶다면, 문서 전체를 JSON으로 변환하지 말고 <a class="internal" href="/en/XPath" title="en/XPath">XPath</a>를 사용하세요! 이 외의 상황이라면 <a class="internal" href="/en/JXON" title="en/JXON">JSON에 관한 글</a>을 참조하세요.</p>

<h3 id="DOM_트리를_파일로_직렬화">DOM 트리를 파일로 직렬화</h3>

<p>먼저, <a href="/en/How_to_create_a_DOM_tree" title="en/How_to_create_a_DOM_tree">DOM 트리 생성법</a> 글에 나와 있는 대로 DOM 트리를 생성하세요. 만약 {{ domxref("XMLHttpRequest") }}를 사용하여 이미 DOM 트리가 존재한다면 이 절의 마지막 부분으로 건너 뛰십시오.</p>

<p>이제 DOM 트리인 <code>doc</code>를 파일로 직렬화 해봅시다. 파일에 대해 더 알아보고 싶다면, <a href="/en/Code_snippets/File_I//O" title="en/Code_snippets/File_I//O">모질라에서 파일 사용과 관련하여</a>를 참조하세요.</p>

<pre class="brush: js">var oFOStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
var oFile = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsILocalFile); // get profile folder
oFile.append("extensions"); // extensions sub-directory
oFile.append("{5872365E-67D1-4AFD-9480-FD293BEBD20D}"); // GUID of your extension
oFile.append("myXMLFile.xml"); // filename
oFOStream.init(oFile, 0x02 | 0x08 | 0x20, 0664, 0); // write, create, truncate
(new XMLSerializer()).serializeToStream(doc, oFOStream, ""); // rememeber, doc is the DOM tree
oFOStream.close();
</pre>

<h3 id="XMLHttpRequest_객체를_파일로_직렬화">XMLHttpRequest 객체를 파일로 직렬화</h3>

<p>이미 {{ domxref("XMLHttpRequest") }}를 사용하여 DOM 트리를 보유한 상태라면, 위의 코드를 사용하되 <code>serializer.serializeToStream(doc, oFOStream, "")</code> <code>부분을</code> <code>serializer.serializeToStream(xmlHttpRequest.responseXML.documentElement, oFOStream, "")</code>로 대체하십시오. <code>xmlHttpRequest은</code> <code>XMLHttpRequest</code>의 인스턴스입니다.</p>

<p>위 코드는 서버에서 XML을 찾아낸 후 문자열 스트림으로 재직렬화(re-serialize)한다는 것을 알아두세요. 필요에 따라 <code>xmlHttpRequest.responseText</code>를 곧장 건너뛸 수 있습니다.</p>

<h3 id="HTML_문서를_직렬화">HTML 문서를 직렬화</h3>

<p>만약 보유한 DOM이 HTML 문서라면 다음과 같이 간단하게 직렬화할 수 있습니다.</p>

<pre class="brush: js">var serialized = document.documentElement.innerHTML;
</pre>

<h2 id="참고_자료">참고 자료</h2>

<ul>
 <li><a class="internal" href="/en/XPath" title="en/XPath">XPath</a></li>
 <li><a href="/en/nsIXMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a></li>
 <li><a href="/en/JXON" title="en/JXON">JXO</a></li>
</ul>
