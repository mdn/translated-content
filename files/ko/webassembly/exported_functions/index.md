---
title: Exported WebAssembly functions
slug: WebAssembly/Exported_functions
translation_of: WebAssembly/Exported_functions
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">Exported WebAssembly functions는 JavaScript에서 WebAssembly 함수를 나타내는 방법입니다. 여기서는 이 함수들에 대해 더 자세히 설명합니다.</p>

<h2 id="Exported..._뭐요">Exported... 뭐요?</h2>

<p>내보낸 WebAssembly 함수는 기본적으로 JavaScript에서 WebAssembly 함수를 나타내는 JavaScript 래퍼입니다. 호출 할 때 배경에서 백그라운드로 액티비티를 가져와 wasm이 작업 할 수있는 유형 (예 : JavaScript 숫자를 Int32로 변환)으로 변환하고, 인수가 wasm 모듈 내부의 함수로 전달되고, 함수가 호출되며, 결과가 변환되어 JavaScript로 다시 전달됩니다.</p>

<p>두 가지 방법으로 내 보낸 WebAssembly 함수를 검색 할 수 있습니다.</p>

<ul>
 <li>기존 테이블에서 <code><a href="/en-US/docs/WebAssembly/API/Table/get">Table.prototype.get()</a></code>을 호출합니다.</li>
 <li><code><a href="/en-US/docs/WebAssembly/API/Instance/exports">Instance.exports</a></code>를 통해 wasm 모듈 인스턴스에서 내보낸 함수에 액세스합니다.</li>
</ul>

<p>어느 쪽이든, 기본 함수에 대해 동일한 종류의 래퍼를 사용합니다. JavaScript의 관점에서 볼 때, 모든 wasm 함수가 JavaScript 함수이기도하지만 - 내보낸 wasm 함수 객체 인스턴스에 의해 캡슐화되며 액세스 할 수있는 제한된 방법이 있습니다.</p>

<h2 id="An_example">An example</h2>

<p>예제를 보겠습니다. (GitHub의 <a href="https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html">table-set.html</a>로 찾을 수 있으며 실시간으로 보기(<a href="https://mdn.github.io/webassembly-examples/other-examples/table-set.html">running live also</a>)도 참고하시고. wasm <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat">text representation</a> 표현도 확인하세요).</p>

<pre class="brush: js">var otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(obj =&gt; {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
  otherTable.set(0,tbl.get(0));
  otherTable.set(1,tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});</pre>

<p>{{jsxref("WebAssembly.Table")}}생성자를 사용하여 JavaScript에서 테이블 (<code>otherTable</code>)을 만든 다음 {{jsxref("WebAssembly.instantiateStreaming()")}}를 메서드를 사용하여 table.wasm를 우리가 만든 페이지에 로드합니다.</p>

<p> </p>

<p>그런 다음 모듈에서 함수를 내보내고 <code><a href="/en-US/docs/WebAssembly/API/Table/get">tbl.get()</a></code>을 통해 참조하는 함수를 검색하고 각 함수를 호출 한 결과를 콘솔에 기록합니다. 그런 다음 <code>set()</code>을 사용하여 <code>otherTable</code> 테이블에 tbl 테이블과 동일한 함수에 대한 참조가 포함되도록합니다.</p>

<p>이를 증명하기 위해 우리는 이러한 참조를 <code>otherTable</code>에서 다시 검색하여 그 결과를 콘솔에도 출력하므로 동일한 결과를 얻을 수 있습니다.</p>

<h2 id="They_are_real_functions">They are real functions</h2>

<p>앞의 예에서 각 <code><a href="/en-US/docs/WebAssembly/API/Table/get">Table.prototype.get()</a></code> 호출의 반환 값은 내 보낸 WebAssembly 함수입니다. 이전에 우리가 이야기했던 대로입니다.</p>

<p>이것들은 WebAssembly 함수에 대한 래퍼 (wrapper)가 될뿐만 아니라 실제 JavaScript 함수임을 주목할 필요가 있습니다. 위의 예제를 <a href="/en-US/docs/WebAssembly#Browser_compatibility">WebAssembly-supporting browser</a>에 로드하고 콘솔에서 다음 줄을 실행하세요.</p>

<pre class="brush: js">var testFunc = otherTable.get(0);
typeof testFunc;</pre>

<p>그러면 결과 함수(<code>function</code>)가 반환됩니다. 그런 다음 JavaScript에서 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call()</a></code>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">bind()</a></code> 등의 다른 <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">functions</a>를 수행 할 수 있는 기능을 수행 할 수 있습니다. <code>testFunc.toString()</code>은 흥미로운 결과를 반환합니다.</p>

<pre class="brush: js">function 0() {
    [native code]
}</pre>

<p>이렇게하면 wrapper-type의 본질에 대해 더 많이 알 수 있습니다.</p>

<p>exported WebAssembly functions에 대해 알아야 할 몇 가지 사항은 다음과 같습니다.</p>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length">length</a> 속성은 wasm 함수 시그니처에 선언 된 인수의 개수입니다.</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name">name</a> 속성은 wasm 모듈에서 함수의 인덱스에 대한 <code>toString()</code> 결과입니다.</li>
 <li>i64 유형 값을 사용하거나 가져 오는 내 보낸 wasm 함수를 호출하려고하면 JavaScript는 현재 i64를 정확하게 표현할 방법이 없기 때문에 현재 오류가 발생합니다. 이후에 개선 될 것입니다. - 새로운 int64 유형이 wasm에 의해 사용될 수 있도록 향후 표준으로 고려되고 있습니다.</li>
</ul>
