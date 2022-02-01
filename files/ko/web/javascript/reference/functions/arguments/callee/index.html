---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
tags:
  - Deprecated
  - Functions
  - JavaScript
  - Property
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments/callee
browser-compat: javascript.functions.arguments.callee
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong><code>arguments.callee</code></strong> 속성(property)은 현재 실행 중인 함수를 포함합니다.</p>

<h2 id="설명">설명</h2>

<p><code>callee</code>는 <code>arguments</code> 객체의 속성입니다. 그 함수의 몸통(body) 내에서 현재 실행 중인 함수를 참조하는 데 쓰일 수 있습니다. 이는 함수의 이름을 알 수 없는 경우에 유용합니다, 가령 이름 없는 함수 식(또한 "익명 함수"라 함) 내에서.</p>

<div class="warning"><strong>경고:</strong> ECMAScript 제5판(ES5) 은 <a href="/ko/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode">엄격 모드</a>에서 <code>arguments.callee()</code>의 사용을 금합니다. function 식(expression)에 이름을 주거나 함수 자체를 호출해야 하는 곳에 function 선언을 사용하여 <code>arguments.callee()</code> 사용을 피하세요.</div>

<h3 id="arguments.callee는_왜_ES5_엄격_모드에서_제거되었나요"><code>arguments.callee</code>는 왜 ES5 엄격 모드에서 제거되었나요?</h3>

<p>(<a href="http://stackoverflow.com/a/235760/578288">olliej의 Stack Overflow 답변</a>에서 고쳐씀)</p>

<p>초기 버전 JavaScript는 유명(named) 함수 식을 허용하지 않습니다. 그리고 이 때문에 재귀(recursive) 함수 식을 만들 수 없습니다.</p>

<p>예를 들어, 이 구문은 작동됩니다:</p>

<pre class="brush: js">function factorial (n) {
    return !(n &gt; 1) ? 1 : factorial(n - 1) * n;
}

[1,2,3,4,5].map(factorial);</pre>

<p>하지만 다음은:</p>

<pre class="brush: js">[1,2,3,4,5].map(function (n) {
    return !(n &gt; 1) ? 1 : /* what goes here? */ (n - 1) * n;
});</pre>

<p>아닙니다. 이를 우회하기 위해 <code>arguments.callee</code>가 추가되었고 이와 같이 할 수 있습니다</p>

<pre class="brush: js">[1,2,3,4,5].map(function (n) {
    return !(n &gt; 1) ? 1 : arguments.callee(n - 1) * n;
});</pre>

<p>그러나, 이는 실로 정말 나쁜 해결책이었습니다. 이는 (다른 <code>arguments</code>, <code>callee</code> 및 <code>caller</code> 문제와 함께) 일반적인 경우에 인라인 및 tail 재귀를 불가능케 하기에 (tracing 등을 통해 선택한 경우에 그것을 달성할 수 있지만 최고의 코드는 검사가 달리 필요하지 않기에 차선입니다.) 다른 주요 문제는 그 재귀 호출이 다른 <code>this</code> 값을 갖는 것입니다. 가령:</p>

<pre class="brush: js">var global = this;

var sillyFunction = function (recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        alert("This is: " + this);
    } else {
        alert("This is the global");
    }
}

sillyFunction();</pre>

<p>ECMAScript 3은 유명(named) 함수 식을 허용해서 이 문제를 해결했습니다. 예를 들면:</p>

<pre class="brush: js">[1,2,3,4,5].map(function factorial (n) {
    return !(n &gt; 1) ? 1 : factorial(n-1)*n;
});</pre>

<p>이는 많은 이점이 있습니다:</p>

<ul>
 <li>함수는 코드 내부에서 다른 함수처럼 호출될 수 있습니다</li>
 <li>외부 범위(outer scope)에서 변수를 만들지 않습니다 (<a href="http://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope">IE 8 아래는 제외하고</a>)</li>
 <li>arguments 객체에 액세스하는 것보다 성능이 더 낫습니다</li>
</ul>

<p>사라지게 됐던 또 다른 기능은 <code>arguments.callee.caller</code> 또는 더 명확하게 <code>Function.caller</code>였습니다. 이는 왜일까요? 자, 어느 시점에서든 당신은 모든 함수의 스택 상 가장 깊은 caller를 찾을 수 있고 위에서 말했듯이 호출 스택 보기는 한 가지 주요 효과가 있습니다: 이는 큰 수의 최적화를 불가능 또는 훨씬 훨씬 더 어렵게 합니다. 예를 들어, 함수 <code>f</code>가 익명(unknown) 함수를 호출하지 않음을 보장할 수 없는 경우, <code>f</code>를 인라인하는 게 가능하지 않습니다. 원래 사소하게 인라인 가능했을 지도 모를 모든 호출 사이트가 다수의 guard를 축적함을 뜻합니다:</p>

<pre class="brush: js">function f (a, b, c, d, e) { return a ? b * c : d * e; }</pre>

<p>JavaScript 인터프리터가 제공된 모든 인수가 호출이 행해진 그 시점에 숫자임을 보장할 수 없다면, 인라인된 코드 앞에 모든 인수에 대한 검사 삽입이 필요합니다. 그렇지 않으면 그 함수를 인라인할 수 없습니다. 이제 이 특정한 경우에 스마트 인터프리터는 더 최적이고 사용되지 않을 값은 확인하지 않을 검사를 재배열할 수 있어야 합니다. 그러나 많은 경우에 그건 그냥 가능하지 않고 그러므로 인라인은 불가능하게 됩니다.</p>

<h2 id="예">예</h2>

<h3 id="익명_재귀_함수에서_arguments.callee_사용하기">익명 재귀 함수에서 <code>arguments.callee</code> 사용하기</h3>

<p>재귀 함수는 자신을 참조할 수 있어야 합니다. 보통, 함수는 그 이름으로 자신을 참조합니다. 그러나, 익명 함수(<a href="/ko/docs/Web/JavaScript/Reference/Operators/function">함수 식</a> 또는 <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Function"><code>Function</code> 생성자</a>로 생성될 수 있는)는 이름이 없습니다. 그러므로 그를 참조하는 액세스 가능한 변수가 없는 경우, 함수가 자신을 참조할 수 있는 유일한 방법은 <code>arguments.callee</code>에 의해서입니다.</p>

<p>다음 예는 차례로 팩토리얼 함수를 정의하고 반환하는 함수를 정의합니다. 이 예는 매우 실용적이지 않고 같은 결과가 <a href="/ko/docs/Web/JavaScript/Reference/Operators/function">유명 함수 식</a>으로 달성될 수 없는 경우가 거의 없습니다.</p>

<pre class="brush: js">function create() {
   return function(n) {
      if (n &lt;= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var result = create()(5); // 반환값 120 (5 * 4 * 3 * 2 * 1)</pre>

<h3 id="좋은_대안_없는_arguments.callee의_사용">좋은 대안 없는 <code>arguments.callee</code>의 사용</h3>

<p>그러나, 다음과 같은 경우에는 <code>arguments.callee</code>에 대안이 없습니다. 그래서 그 사라짐(deprecation)은 버그가 될 수 있습니다 ({{Bug("725398")}} 참조):</p>

<pre class="brush: js">function createPerson (sIdentity) {
    var oPerson = new Function("alert(arguments.callee.identity);");
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson("John Smith");

john();</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
</ul>
