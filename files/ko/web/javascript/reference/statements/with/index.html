---
title: with
slug: Web/JavaScript/Reference/Statements/with
translation_of: Web/JavaScript/Reference/Statements/with
---
<div class="warning">Use of the <code>with</code> statement is not recommended, as it may be the source of confusing bugs and compatibility issues. See the "Ambiguity Contra" paragraph in the "Description" section below for details.</div>

<div>{{jsSidebar("Statements")}}</div>

<p><strong>with statement</strong> 는 명령문의 범위 체인을 확장합니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">with (expression)
  <em>statement</em>
</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>명령문을 평가할 때 사용되는 범위 체인에 지정된 표현식을 추가합니다. 표현식을 중괄호로 감싸는 것은 필수입니다.</dd>
 <dt><code>statement</code></dt>
 <dd>모든 구문을 말합니다. 여러개의 명령문을 실행하려면 <a href="/en-US/docs/Web/JavaScript/Reference/Statements/block" title="JavaScript/Reference/Statements/block">블록</a>명령문 ({...})을 사용하여 해당 명령문을 그룹화 하세요.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>JavaScript는 규정되지 않은 이름을 포함하는 스크립트 또는 함수의 실행 컨텍스트와 연관된 범위 체인을 검색하여 규정되지 않은 이름을 찾습니다. 'with'문은 해당 개체를 평가하는 동안 이 개체를 해당 범위 체인의 머리글에 추가합니다. 본문에 사용된 규정되지 않은 이름이 범위 체인의 속성과 일치하는 경우 이름은 속성과 속성이 포함 된 개체에 바인딩 됩니다. 그렇지 않으면, {{jsxref("ReferenceError")}} 가 발생됩니다.</p>

<div class="note"><code>with</code> 를 사용하는 것은 권장하지 않으며, ECMAScript 5 <a href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode" title="JavaScript/Strict mode">strict mode</a>에서는 금지되어 있습니다. 임시 변수에 액세스 하려는 속성이 있는 객체를 할당하는 것이 좋습니다.</div>

<h3 id="Performance_pro_contra">Performance pro &amp; contra</h3>

<p><strong>Pro:</strong> <code>with</code> 구문은 성능저하 없이 긴 객체 참조를 반복해야할 필요를 줄여서 파일 크기를 감소 시킬 수 있습니다. 'with'에 필요한 스코프 체인 변경은 연산 비용이 들지 않습니다. 'with'를 사용하면 반복되는 객체 참조를 파싱하는 인터프리터가 해소됩니다. 하지만 대게의 경우에 이 이점은 임시변수를 사용하여 원하는 객체에 대한 참조를 저장함으로써 얻을 수 있습니다.</p>

<p><strong>Contra:</strong> The <code>with</code> statement forces the specified object to be searched first for all name lookups. Therefore all identifiers that aren't members of the specified object will be found more slowly in a 'with' block. Where performance is important, 'with' should only be used to encompass code blocks that access members of the specified object.</p>

<h3 id="Ambiguity_contra">Ambiguity contra</h3>

<p><strong>Contra:</strong> The <code>with</code> statement makes it hard for a human reader or JavaScript compiler to decide whether an unqualified name will be found along the scope chain, and if so, in which object. So given this example:</p>

<pre class="brush: js">function f(x, o) {
  with (o) {
    console.log(x);
  }
}</pre>

<p>Only when <code>f</code> is called is <code>x</code> either found or not, and if found, either in <code>o</code> or (if no such property exists) in <code>f</code>'s activation object, where <code>x</code> names the first formal argument. If you forget to define <code>x</code> in the object you pass as the second argument, or if there's some similar bug or confusion, you won't get an error -- just unexpected results.</p>

<p><strong>Contra: </strong>Code using <code>with</code> may not be forward compatible, especially when used with something other than a plain object. Consider this example:</p>

<div>
<pre class="brush:js">function f(foo, values) {
  with (foo) {
    console.log(values);
  }
}
</pre>

<p>If you call <code>f([1,2,3], obj)</code> in an ECMAScript 5 environment, then the <code>values</code> reference inside the <code>with</code> statement will resolve to <code>obj</code>. However, ECMAScript 6 introduces a <code>values</code> property on {{jsxref("Array.prototype")}} (so that it will be available on every array). So, in a JavaScript environment that supports ECMAScript 6, the <code>values</code> reference inside the <code>with</code> statement could resolve to <code>[1,2,3].values</code>. However, in this particular example, {{jsxref("Array.prototype")}} has been defined with <code>values</code> in its {{jsxref("Symbol.unscopables")}} object. If it were not, one can see how this would be a difficult issue to debug.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Using_with">Using <code>with</code></h3>

<p>The following <code>with</code> statement specifies that the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" title="JavaScript/Reference/Global_Objects/Math"><code>Math</code></a> object is the default object. The statements following the <code>with</code> statement refer to the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI" title="JavaScript/Reference/Global_Objects/Math/PI"><code>PI</code></a> property and the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos" title="JavaScript/Reference/Global_Objects/Math/cos"><code>cos</code></a> and <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin" title="JavaScript/Reference/Global_Objects/Math/sin"><code>sin</code></a> methods, without specifying an object. JavaScript assumes the <code>Math</code> object for these references.</p>

<pre class="brush:js">var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat("javascript.statements.with")}}

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Statements/block", "block")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode">Strict mode</a></li>
 <li>{{jsxref("Symbol.unscopables")}}</li>
 <li>{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}</li>
</ul>
