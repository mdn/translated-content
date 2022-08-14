---
title: Element.innerHTML
slug: Web/API/Element/innerHTML
translation_of: Web/API/Element/innerHTML
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary">{{domxref("Element")}} 속성(property) <strong><code>innerHTML</code></strong> 은 요소(element) 내에 포함 된 HTML 또는 XML 마크업을 가져오거나 설정합니다.</span></p>

<div class="note"><strong>주의: </strong>{{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("noembed")}} 노드가 (&amp;), (&lt;), (&gt;) 문자를 포함하는 텍스트 노드를 자식으로 가지고 있다면, <code>innerHTML</code>은 이러한 문자들을 각각 <code>"&amp;amp;"</code>, <code>"&amp;lt;"</code> ,<code>"&amp;gt;"</code>로 반환합니다. {{domxref("Node.textContent")}}를 사용하여 이러한 텍스트 노드 내용의 원본을 복사할 수 있습니다.</div>

<p>요소(element)의 내용을 변경하는 대신 HTML을 문서(document)에 삽입하려면, {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}} 메서드를 사용하십시오.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">const <var>content</var> = <var>element</var>.innerHTML;

<var>element</var>.innerHTML = <var>htmlString</var>;
</pre>

<h3 id="Value">Value</h3>

<p>요소(element)의 자손의 HTML 직렬화를 포함하는 {{domxref("DOMString")}} 입니다. Setting the value of <code>innerHTML</code> 의 값을 설정(대입)하면 요소의 모든 자손이 제거되고, 문자열 htmlString에 지정된 HTML을 파싱하고, 생성된 노드로 대체합니다.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
 <dt><code>SyntaxError</code></dt>
 <dd>HTML의 양식에 맞지 않는 문자열을 사용하여, <code>innerHTML</code> 의 값을 설정하려는 시도가 있었습니다.</dd>
 <dt><code>NoModificationAllowedError</code></dt>
 <dd>부모가 {{domxref("Document")}}인 노드에 HTML을 삽입하려고 했습니다.</dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<p><code>innerHTML</code> 속성(property)은 페이지가 처음 로드 된 이후의 모든 변경 사항을 포함하여, 페이지의 현재 HTML 소스를 검사하는데 사용할 수 있습니다.</p>

<h3 id="Reading_the_HTML_contents_of_an_element">Reading the HTML contents of an element</h3>

<p><code>innerHTML</code> 를 읽으면 유저 에이전트(user agent)가 요소의 자손으로 구성된 HTML 또는 XML조각을 직렬화 합니다. 그 결과는 문자열로 반환합니다.</p>

<pre class="brush: js">let contents = myElement.innerHTML;</pre>

<p>이를 통해 요소의 컨텐트 노드에 대한 HTML 마크업을 볼 수 있습니다.</p>

<div class="note">
<p><strong>주의:</strong> 반환 된 HTML, XML 파편은 요소의 현재 내용일 기반으로 생성됩니다. 따라서 반환 된 마크업과 양식이 본래의 페이지 마크업과 일치하지 않을 수 있습니다.</p>
</div>

<h3 id="Replacing_the_contents_of_an_element">Replacing the contents of an element</h3>

<p><code>innerHTML</code> 값을 설정하면 요소의 기존 내용(content)을 새 내용으로 쉽게 변경할 수 있습니다.</p>

<p>예를 들어, 문서(document)의 {{domxref("Document.body", "body")}} 속성(attribute)을 지우면, 문서의 전체 내용을 지울 수 있습니다.</p>

<pre class="brush: js">document.body.innerHTML = "";</pre>

<p>이 예제는 문서의 현재 HTML 마크업을 가져오고, <code>"&lt;"</code> 문자를 HTML 엔터티 <code>"&amp;lt;"</code> 로 대체하합니다. 그러면 HTML을 원시 텍스트(raw text - 파싱 이전의 모습)로 반환합니다. 이것을 {{HTMLElement("pre")}} 요소로 래핑합니다. 그러면 <code>innerHTML</code> 값은 새 문자열로 변경됩니다. 그 결과, 문서의 내용은 페이지의 전체 소스 코드의 출력으로 대체됩니다.</p>

<pre class="brush: js">document.documentElement.innerHTML = "&lt;pre&gt;" +
         document.documentElement.innerHTML.replace(/&lt;/g,"&amp;lt;") +
            "&lt;/pre&gt;";</pre>

<h4 id="Operational_details">Operational details</h4>

<p><code>innerHTML</code> 값을 설정할 때, 정확히 어떤 일이 발생하나요? 값을 설정하면, 유저 에이전트는 다음 단계를 따르게 됩니다.</p>

<ol>
 <li>지정한 값은 HTML 또는 XML(문서 타입에 따라)로 파싱되어, {{domxref("DocumentFragment")}} 객체가 새 요소에 대한 새로운 노드 DOM 노드 집합을 나타냅니다.</li>
 <li>내용이 대체되는 요소가 {{HTMLElement("template")}} 요소 인 경우, <code>&lt;template&gt;</code> 요소의 {{domxref("HTMLTemplateElement.content", "content")}} 속성(attribute)은 1단계에서 작성한 새  <code>DocumentFragment</code> 로 대체됩니다.</li>
 <li>다른 모든 요소의 경우, 요소의 내용은 새 <code>DocumentFragment</code> 의 노드로 대체됩니다.</li>
</ol>

<h3 id="Security_considerations">Security considerations</h3>

<p><code>innerHTML</code> 이 웹 페이지에 텍스트를 삽입하는데 사용되는 것은 종종 볼 수 있습니다. 이것은 사이트의 공격 경로가 되어 잠재적인 보안 위험이 발생할 수 있습니다.</p>

<pre class="brush: js">const name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// ...

name = "&lt;script&gt;alert('I am John in an annoying alert!')&lt;/script&gt;";
el.innerHTML = name; // harmless in this case</pre>

<p>이것은 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">cross-site scripting</a> 공격처럼 보일 수 있지만, 결과는 무해합니다. HTML5 는 <code>innerHTML</code> 과 함께 삽입된 {{HTMLElement("script")}} 태그가 <a href="https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0">실행되지 않도록 </a>지정합니다.</p>

<p>그러나 {{HTMLElement("script")}} 요소를 사용하지 않고, 자바스크립트를 실행하는 방법이 있으므로, <code>innerHTML</code> 을 사용하여 제어할 수 없는 문자열을 설정할 때 마다 여전히 보안위험이 있습니다. 예를들어:</p>

<pre class="brush: js">const name = "&lt;img src='x' onerror='alert(1)'&gt;";
el.innerHTML = name; // shows the alert</pre>

<p>따라서 일반 텍스트를 삽입 할 때는 <code>innerHTML</code> 을 사용하지 않는 것이 좋습니다. 대신  {{domxref("Node.textContent")}}를 사용하십시오. 이것은 전달 된 내용을 HTML로 파싱하지 않고 원시 텍스트(raw text)로 삽입합니다.</p>

<div class="warning">
<p><strong>경고:</strong> 프로젝트가 보안 점검을 거치게 되는 프로젝트인 경우, <code>innerHTML</code> 을 사용하면 코드가 거부 될 가능성이 높습니다. 예를 들어, <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions">브라우저 확장</a>에서  <a href="https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation"><code>innerHTML</code>을 사용하고</a> <a href="https://addons.mozilla.org/">addons.mozilla.org</a>에 확장을 제출하면 자동 검토 프로세스를 통과하지 못합니다.</p>
</div>

<h2 id="Example">Example</h2>

<p>이 예제에서는 <code>innerHTML</code> 을 사용하여 메시지를 웹 페이지의 상자에 기록하는 매커니즘을 만듭니다.</p>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function log(msg) {
  var logElem = document.querySelector(".log");

  var time = new Date();
  var timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "&lt;br/&gt;";
}

log("Logging mouse events inside this container...");
</pre>

<p><code>log()</code> 함수는 {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}}을 사용하여 {{jsxref("Date")}} 객체에서 현재 시간을 가져 오고, 타임 스탬프와 메시지 텍스트가 있는 문자열을 작성하여 로그 출력을 만듭니다. 그런 다음 메시지는 클래스 <code>"log"</code>가 있는 상자에 추가됩니다.</p>

<p>{{domxref("MouseEvent")}} 기반 이벤트 ({{event("mousedown")}}, {{event("click")}}, {{event("mouseenter")}}와 같은) 정보를 기록하는 두 번째 메서드를 추가합니다:</p>

<pre class="brush: js">function logEvent(event) {
  var msg = "Event &lt;strong&gt;" + event.type + "&lt;/strong&gt; at &lt;em&gt;" +
            event.clientX + ", " + event.clientY + "&lt;/em&gt;";
  log(msg);
}</pre>

<p>그리고나서, 우리의 로그가 들어있는 상자에 여러 마우스 이벤트에 대한 이벤트 핸들러로 사용합니다.</p>

<pre class="brush: js">var boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);</pre>

<h3 id="HTML">HTML</h3>

<p>HTML은 우리의 예제에서 아주 간단합니다.</p>

<pre class="brush: html">&lt;div class="box"&gt;
  &lt;div&gt;&lt;strong&gt;Log:&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="log"&gt;&lt;/div&gt;
&lt;/div&gt;</pre>

<p>클래스 <code>"box"</code>를 갖는 {{HTMLElement("div")}} 는 레이아웃을 위한 컨테이너 입니다. class가 <code>"log"</code> 인 <code>&lt;div&gt;</code> 는 로그 텍스트 자체의 컨테이너 입니다.</p>

<h3 id="CSS">CSS</h3>

<p>다음 CSS는 우리의 예제 내용을 꾸밉니다.</p>

<pre class="brush: css">.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}</pre>

<h3 id="Result">Result</h3>

<p>결과 컨텐츠는 다음과 같습니다. 마우스를 상자 안팎으로 움직이거나 클릭하고 로그에서 출력을 볼 수 있습니다.</p>

<p>{{EmbedLiveSample("Example", 640, 350)}}</p>

<h2 id="Specification">Specification</h2>

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
   <td>{{SpecName('DOM Parsing', '#dom-element-innerhtml', 'Element.innerHTML')}}</td>
   <td>{{Spec2('DOM Parsing')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.Element.innerHTML")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("Node.textContent")}} 과 {{domxref("Node.innerText")}}</li>
 <li>{{domxref("Element.insertAdjacentHTML()")}}</li>
 <li>DOM 트리에 HTML 파싱하기: {{domxref("DOMParser")}}</li>
 <li>XML 또는 HTML을 DOM 트리로 직렬화 하기: {{domxref("XMLSerializer")}}</li>
</ul>
