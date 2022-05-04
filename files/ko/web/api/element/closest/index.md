---
title: Element.closest()
slug: Web/API/Element/closest
translation_of: Web/API/Element/closest
---
<div>{{APIRef('DOM')}}</div>



<div>기준 {{domxref("Element")}} 에서부터 <code><strong>closest()</strong></code> 메소드를 통해 자신부터 부모 요소 단위로 출발하여 각 요소가 지정한 선택자에 만족할 때까지 탐색한다(문서 루트까지 이동). 이 중 가장 가깝게 조건에 만족한 부모 요소가 반환되며, 조건에 만족한 요소가 없으면 <code>null</code> 값을 반환한다.</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var <var>closestElement</var> = <var>targetElement</var>.closest(<var>selectors</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
 <li><code><var>selectors</var></code> CSS 선택자가 들어가는 {{domxref("DOMString")}} 개체 문자열, 예)<br>
  <code>"p:hover, .toto + q"</code>.</li>
</ul>

<h3 id="Result_value">Result value</h3>

<ul>
 <li><code><var>closestElement</var></code> 기준 요소를 포함하여 부모 요소 단위로 선택자 조건에 가장 가까운 {{domxref("Element")}} 객체를 가져오며, <code>null</code> 값이 될 수 있다.</li>
</ul>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>{{exception("SyntaxError")}} : CSS 선택자 (<code><var>selectors</var></code>)가 올바른 선택자 식이 아닐 경우.</li>
</ul>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;article&gt;
  &lt;div id="div-01"&gt;Here is div-01
    &lt;div id="div-02"&gt;Here is div-02
      &lt;div id="div-03"&gt;Here is div-03&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// id=div-02 조건이 만족하므로 속성을 가진 부모 요소가 반환된다.

var r2 = el.closest("div div");
// div 요소에 만족한 요소 중 div 자식을 가리키므로, id=div-03 자신이 만족된다.

var r3 = el.closest("article &gt; div");
// 가장 가까운 article 요소 바로 하위의 div 요소 id=div-01 속성을 가진 요소가 반환된다.

var r4 = el.closest(":not(div)");
// div 요소가 아닌 가장 가까운 부모 article 요소가 반환된다.</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>아래 폴리필은 <code>Element.closest()</code>, 메소드를 지원하지 않는 브라우저를 위한 방법이지만, <code>element.matches()</code> 메소드를 사용하므로 IE 9 이상에서 동작한다.</p>

<pre class="brush: js">if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null &amp;&amp; el.nodeType === 1);
    return null;
  };
}</pre>

<p>만약 정말 IE 8 지원을 고려해야 한다면, 아래 폴리필을 사용할 수 있다. 그러나 해당 폴리필은 성능이 매우 느리며, IE 8 특성 상 CSS 2.1 사양의 선택자까지밖에 사용할 수 없다. 또한 실제 운영 시 약간의 지연이 발생할 수 있다.</p>

<pre class="brush: js">if (window.Element &amp;&amp; !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i &gt;= 0 &amp;&amp; matches.item(i) !== el) {};
    } while ((i &lt; 0) &amp;&amp; (el = el.parentElement));
    return el;
  };
}
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
   <td>{{SpecName('DOM WHATWG', '#dom-element-closest', 'Element.closest()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>


<p>{{Compat("api.Element.closest")}}</p>

<h3 id="Compatibility_notes">Compatibility notes</h3>

<ul>
 <li>Edge 15-18 브라우저에서는, <code>document.createElement(tagName).closest(tagName)</code> 식이 직접적이던 간접적이던 요소와 연결되지 않았다면 <code>null</code> 값을 반환한다. 예를 들면, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document" title="The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."><code>Document</code></a>객체 내에서 생성한 일반 DOM 요소에서 일어난다.</li>
</ul>
</div>

<h2 id="같이보기">같이보기</h2>

<ul>
 <li>{{domxref("Element")}} 인터페이스.</li>
 <li>
  <div class="syntaxbox"><a href="/en-US/docs/Web/Guide/CSS/Getting_started/Selectors">선택자 구문</a></div>
 </li>
 <li>
  <div class="syntaxbox">선택자 구문을 사용하는 다른 메소드: {{domxref("element.querySelector()")}} 및 {{domxref("element.matches()")}}.</div>
 </li>
</ul>
