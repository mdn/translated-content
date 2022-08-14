---
title: NodeList
slug: Web/API/NodeList
tags:
  - DOM
  - Interface
translation_of: Web/API/NodeList
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>NodeList</code> </strong>객체는 일반적으로 {{domxref("element.childNodes")}}와 같은 속성(property)과 {{domxref("document.querySelectorAll")}} 와 같은 메서드에 의해 반환되는  <a href="https://developer.mozilla.org/ko/docs/Glossary/Node/DOM">노드</a>의 콜렉션입니다.</p>

<div class="note">
<p><code>NodeList</code> 가 <code>Array</code> 는 아니지만, <code>forEach()</code> 를 사용하여 반복할 수 있습니다. 또한 {{jsxref("Array.from()")}} 을 사용하여 <code>Array</code> 로 변환 할 수도 있습니다.</p>

<p>그러나 일부 오래된 브라우저는 아직<code>NodeList.forEach()</code> 또는 <code>Array.from()</code> 를 구현하지 않았습니다. 이것은 {{jsxref("Array.forEach()", "Array.prototype.forEach()")}} 를 사용하여 회피할 수 있습니다. — 이 <a href="https://developer.mozilla.org/ko/docs/Web/API/NodeList$edit#Example">문서</a>의 예제를 참조하세요.</p>
</div>

<p>경우에 따라, <code>NodeList</code>는 라이브 콜렉션으로, DOM의 변경 사항을 실시간으로 콜렉션에 반영합니다. 예를 들어, {{domxref("Node.childNodes")}} 는 실시간입니다:</p>

<pre class="brush: js notranslate">var parent = document.getElementById('parent');
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"
parent.appendChild(document.createElement('div'));
console.log(child_nodes.length); // should output "3"
</pre>

<p>다른 경우 <code>NodeList</code>는 정적 콜렉션입니다. DOM을 변경해도 콜렉션 내용에는 영향을 주지 않습니다. {{domxref("document.querySelectorAll()")}} 은 정적 <code>NodeList</code>를 반환합니다.</p>

<p><code>NodeList</code>의 항목(items)을 순회(iterate)하거나, 특히 리스트의 길이를 캐시(cache)해야 할 때, 이 구분을 유지하는것이 좋습니다.</p>

<h2 id="속성Properties">속성(Properties)</h2>

<dl>
 <dt>{{domxref("NodeList.length")}}</dt>
 <dd><code>NodeList</code>의 노드의 개수를 반환합니다.</dd>
</dl>

<h2 id="메서드Methods">메서드(Methods)</h2>

<dl>
 <dt>{{domxref("NodeList.item()")}}</dt>
 <dd>리스트 내 항목(item)의 인덱스를 반환하고, 인덱스가 범위 외의 경우일 땐 <code>null</code>을 반환합니다.</dd>
 <dd><code>nodeList[idx]</code>의 대안으로 사용할 수 있습니다.(<code>i</code> 가범위를 벗어날 때(out-of-bounds) <code>undefined</code> 를 반환합니다.) 이것은 비 자바스크립트 언어 DOM 구현에 유용합니다.</dd>
 <dt>{{domxref("NodeList.entries()")}}</dt>
 <dd>{{jsxref("Iteration_protocols","iterator")}} 를 반환하여 코드가 콜렉션에 포함된 모든 키/값 쌍을 순회할 수 있도록 합니다. (이 경우 키는 0부터 시작하는 숫자이고, 값은 노드가 됩니다.)</dd>
 <dt>{{domxref("NodeList.forEach()")}}</dt>
 <dd><code>NodeList</code>의 요소(element)마다 한 번씩, 인자로 전달 받은 함수를 실행하여 요소를 인수(argument)로 함수에 전달합니다.</dd>
 <dt>{{domxref("NodeList.keys()")}}</dt>
 <dd>{{jsxref("Iteration_protocols", "iterator")}}를 반환하여 콜렉션에 포함된 키/값 쌍의 모든 키를 코드가 순회하도록 합니다. (이 경우 키는 0부터 시작하는 숫자입니다.)</dd>
 <dt>{{domxref("NodeList.values()")}}</dt>
 <dd>콜렉션에 포함된 키/값 쌍의 모든 값(nodes)을 코드가 순회할 수 있게 해주는 {{jsxref("Iteration_protocols", "iterator")}}를 반환합니다.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>for 루프를 사용하여 <code>NodeList</code>의 항목을 반복할 수 있습니다.</p>

<pre class="brush: js notranslate">for (var i = 0; i &lt; myNodeList.length; ++i) {
  var item = myNodeList[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
}
</pre>

<p><strong>리스트의 항목(items)을 열거하기 위해 <a href="/en-US/docs/JavaScript/Reference/Statements/for...in" title="JavaScript/ Reference/Statements/for...in">for...in</a> 또는 <a href="/en-US/docs/JavaScript/Reference/Statements/for_each...in" title="JavaScript/ Reference/Statements/for each...in">for each...in</a>를 사용하지 않길 바랍니다.</strong> <code>NodeList</code>의 길이와 항목 속성까지 열거합니다. 또한 스크립트가 요소({{domxref("element")}}) 객체만 처리한다고 가정하면 오류가 발생할 수 있습니다. 게다가, <code>for..in</code>은 고정된 순서로 각 속성들을 접근한다는 보장이 없습니다.</p>

<p><code><a href="/en-US/docs/JavaScript/Reference/Statements/for...of" title="/en-US/docs/JavaScript/Reference/Statements/for...of">for...of</a></code> 루프는 <code>NodeList</code> 객체를 올바르게 반복합니다.</p>

<pre class="brush: js notranslate">var list = document.querySelectorAll( 'input[type=checkbox]' );
for (var item of list) {
  item.checked = true;
}</pre>

<p>최신 브라우저는 반복자(iterator) 메서드인 {{domxref("NodeList.forEach()", "forEach()")}}만이 아니라, {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}}, {{domxref("NodeList.keys()", "keys()")}} 까지도 지원합니다.</p>

<p>인터넷 익스플로러의 호환을 위해서는 {{jsxref("Array.forEach()", "Array.prototype.forEach")}} 를 사용하는 방법도 있습니다.</p>

<pre class="brush: js notranslate"><code>var list = document.querySelectorAll( 'input[type=checkbox]' );
Array.prototype.forEach.call(list, function (item) {
  item.checked = true;
});</code>
</pre>

<h2 id="Array로_변환하는_법">Array로 변환하는 법</h2>

<p>NodeList의 컨텐츠를 Array의 메소드를 통해 다루는 것이 더 쉬울 때도 있다. 아래는 NodeList 객체를 Array로 변환하는 기법이다.</p>

<pre class="brush: js notranslate">var div_list = document.querySelectorAll('div'); // returns NodeList
var div_array = Array.prototype.slice.call(div_list); // converts NodeList to Array</pre>

<h2 id="Specifications">NodeList prototype</h2>

<p>NodeList에 프로토타입을 추가할 수도 있다.</p>

<pre class="brush: js notranslate"><code>var elements = document.querySelectorAll(".suggestions");

NodeList.prototype.addEventListener = function(event, func) {
    this.forEach(function(content, item) {
       content.addEventListener(event, func);
    });
}

function log() {
    console.log(this, " was clicked");
}

elements.addEventListener("click", log);
//or
elements.addEventListener("click", function() {
    console.log(this, "  awas clicked");
});
// 클릭된 요소로부터 출력될 요소는 둘 모두 HTML 요소가 된다.</code></pre>

<p><font face="consolas, Liberation Mono, courier, monospace">forEach에 대한 자세한 내용은 </font><a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" title="Web/JavaScript/Reference/Global_Objects/Array/forEach">Array.prototype.forEach()</a>를 참조하길 바란다.</p>

<h2 id="명세서">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.NodeList")}}</p>
