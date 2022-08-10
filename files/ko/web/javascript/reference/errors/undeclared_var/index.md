---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
translation_of: Web/JavaScript/Reference/Errors/Undeclared_var
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">ReferenceError: assignment to undeclared variable "x" (Firefox)
ReferenceError: "x" is not defined (Chrome)
ReferenceError: Variable undefined in strict mode (Edge)
</pre>

<h2 id="에러_형식">에러 형식</h2>

<p>엄격 모드(<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>)에서만 발생하는 {{jsxref("ReferenceError")}} 경고.</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>선언되지 않은 변수로 값은 할당되었습니다. <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code> 키워드가 없이 할당이 된 것입니다. 선언된 변수와 선언되지 않은 변수 사이에는 차이가 있는데, 이는 예상치 못한 결과를 가져오며, 때문에 JavaScript 엄격모드에서는 에러를 발생시키고 있습니다.</p>

<p>선언된 변수와 선언되지 않은 변수에 대하여 기억해야 할 세 가지:</p>

<ul>
 <li>선언된 변수는 선언된 실행 맥락 내에서 요구됩니다. 선언되지 않은 변수는 항상 전역의 특성을 띱니다.</li>
 <li>선언된 변수는 코드가 실행되기 전에 생성됩니다. 선언되지 않은 변수는 실행을 위해 할당이 일어날 때까지 존재하지 않습니다.</li>
 <li>선언된 변수는 실행 맥락 내(함수나 전역적인)에서 변경 불가한 요소입니다. 선언되지 않은 변수는 변경이 가능합니다. (삭제 될 수도 있습니다.)</li>
</ul>

<p>더 많은 설명과 예제를 필요로 한다면 이 <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code> 참조문서 페이지를 보세요.</p>

<p>선언되지 않은 변수 할당에 대한 에러는 엄격 모드(<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode code</a>)에서만 발생합니다. 비-엄격 코드에서는 조용히 묵인됩니다.</p>

<h2 id="예">예</h2>

<h3 id="허용되지_않는_경우">허용되지 않는 경우</h3>

<p>이런 경우에는, 변수 "bar"는 선언되지 않은 변수가 됩니다.</p>

<pre class="brush: js example-bad">function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
</pre>

<h3 id="허용되는_경우">허용되는 경우</h3>

<p>"bar" 를 선언된 변수로 만들기 위해서, <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a> </code>키워드를 변수명 앞에 붙여줍니다.</p>

<pre class="brush: js example-good">function foo() {
  "use strict";
  var bar = true;
}
foo();</pre>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a></li>
</ul>
