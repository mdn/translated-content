---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
translation_of: Web/API/Element/getElementsByClassName
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary">{{domxref("Element")}}의 메소드 <code><strong>getElementsByClassName()</strong></code> 는 주어진 클래스를 가진 모든 자식 엘리먼트의 실시간 {{domxref("HTMLCollection")}} 을 반환합니다.</span></p>

<p>{{domxref("Document")}}의 {{domxref("Document.getElementsByClassName", "getElementsByClassName()")}} 메소드는 도큐먼트 루트로부터 도큐먼트 전체를 탐색한다는 점을 제외하고는 동일하게 작동합니다. </p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>var <em>elements</em></var> = <em>element</em>.getElementsByClassName(<em>names</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>names</code></dt>
 <dd>검색할 클래스 혹은 클래스들을 띄어쓰기로 구분한 {{domxref("DOMString")}}</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>실시간으로 업데이트되는 해당 클래스명을 가진 요소 목록의 {{domxref("HTMLCollection")}} 이 반환됩니다.</p>

<h2 id="Usage_notes">Usage notes</h2>

<p>항상 그렇듯, 반환되는 collection은 실시간입니다. 즉, 함수가 호출된 이후에도 DOM 트리의 현재 상태가 반영됩니다. <code>names</code> 에 해당하는 클래스를 가진 요소가 하위에 추가되면, 그 요소는 즉시 collection에 나타납니다. 비슷하게, <code>names</code> 에 매칭되는 클래스를 갖고 있지 않은 요소에 매칭되는 클래스명이 적용되면, 그 요소 역시 즉시 collection에 나타나게 됩니다.</p>

<p>반대도 역시 마찬가지입니다. 클래스명이 더 이상 <code>names</code> 와 일치하지 않게 되면, collection으로 부터 즉시 제거됩니다.</p>

<div class="note">
<p><a href="/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode">호환모드</a>에서는 클래스명의 대소문자를 구분하지 않습니다. 그 외의 경우에는, 대소문자를 구분합니다.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="단일_클래스_찾기">단일 클래스 찾기</h3>

<p>요소들 중 하나의 클래스를 포함하고 있는 요소를 검색하기 위해서는, 그 클래스명을 <code>getElementsByClassName()</code>의 인자로 넣으세요:</p>

<pre class="brush: js">element.getElementsByClassName('test');</pre>

<p>아래의 예시는 <code>main</code> 이라는 <code>id</code> 를 가진 요소의 하위 요소들 중 <code>test</code>라는 클래스를 가진 모든 요소를 탐색합니다. </p>

<pre class="brush: js">document.getElementById('main').getElementsByClassName('test');</pre>

<h3 id="여러개의_클래스로_탐색하기">여러개의 클래스로 탐색하기</h3>

<p><code>red</code> 와 <code>test</code> 라는 클래스를 모두 포함하고 있는 요소를 탐색하기 위해서는 다음과 같이 합니다:</p>

<pre class="brush: js">element.getElementsByClassName('red test');</pre>

<h3 id="결과값_검토하기">결과값 검토하기</h3>

<p>collection의 개별 요소를 가져오기 위해 <code>HTMLCollection</code> 의{{domxref("HTMLCollection.item", "item()")}} 메소드를 이용하거나 표준 배열 문법을 사용할 수 있습니다. 아래는 잘못된 코드의 예시입니다. <code>"matches"</code> 는 <code>"colorbox"</code> 클래스가 삭제됨에 따라 바로 변경될것이기 때문에 <u><strong> 아래의 코드는 작동하지 않습니다.</strong></u></p>

<pre class="brush: js">var matches = element.getElementsByClassName('colorbox');

for (var i=0; i&lt;matches.length; i++) {
  matches[i].classList.remove('colorbox');
  matches.item(i).classList.add('hueframe');
}
</pre>

<p>대신 다른 방법을 사용하세요. 예시:</p>

<pre class="brush: js">var matches = element.getElementsByClassName('colorbox');

while (matches.length &gt; 0) {
  matches.item(0).classList.add('hueframe');
  matches[0].classList.remove('colorbox');
}</pre>

<p>위 코드는  <code>"colorbox"</code> 클래스를 가진 모든 자식 요소를 찾고, <code>item(0)</code> 을 호출해 <code>"hueframe"</code>이라는 클래스를 추가합니다 . 그리고 <code>"colorbox" </code> 클래스를 제거합니다(배열 표기법을 사용하여). 다른 요소 (만약 남아있다면) 가 <code>item(0)</code> 이 될 것입니다.</p>

<h3 id="배열_함수를_이용해_결과값을_필터링하기">배열 함수를 이용해 결과값을 필터링하기</h3>

<p>{{domxref("HTMLCollection")}}을 <code>this</code> 로 사용하면 {{jsxref("Array.prototype")}} 을 어떤 {{ domxref("HTMLCollection") }}에서든 사용할 수 있습니다. 아래의 예제에서는 <code>test</code> 클래스를 가진 모든 {{HTMLElement("div")}} 요소를 찾아봅니다 :</p>

<pre class="brush: js">var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement) {
  return testElement.nodeName === 'DIV';
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Element.getElementsByClassName")}}</p>
