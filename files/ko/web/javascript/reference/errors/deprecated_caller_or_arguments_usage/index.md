---
title: 'ReferenceError: deprecated caller or arguments usage'
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
translation_of: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">Warning: ReferenceError: deprecated caller usage (Firefox)
Warning: ReferenceError: deprecated arguments usage (Firefox)
TypeError: 'callee' and 'caller' cannot be accessed in strict mode. (Safari)
</pre>

<h2 id="에러_형식">에러 형식</h2>

<p>엄격 모드에서만 {{jsxref("ReferenceError")}} 경고가 발생합니다. JavaScript 실행이 중단되지는 않을 것입니다.   </p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>엄격모드에서, {{jsxref("Function.caller")}} 나 {{jsxref("Function.arguments")}} 속성이 사용되었고, 그러지 말아야 했습니다. 이 속성들은 사라지게 되었는데, 함수 호출자를 흘려보내거나, 비 표준이었으며, 최적화 하기 어렵고, 잠재적으로 퍼포먼스에 무리를 주었기 때문입니다.</p>

<h2 id="예">예</h2>

<h3 id="function.caller_or_arguments.callee.caller"><code>function.caller</code> or <code>arguments.callee.caller</code></h3>

<p>{{jsxref("Function.caller")}} 와 <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee.caller</a></code> 는 사라지게 되었습니다. (자세한 정보는 레퍼런스 문서를 확인해 보세요.)</p>

<pre class="brush: js example-bad">"use strict";

function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: deprecated caller usage
// "The function was called from the top!"</pre>

<h3 id="Function.arguments"><code>Function.arguments</code></h3>

<p>{{jsxref("Function.arguments")}} 는 사라졌습니다. (자세한 정보는 레퍼런스 문서를 확인해 주세요.) </p>

<pre class="brush: js example-bad">"use strict";

function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n &gt; 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);
// Warning: ReferenceError: deprecated arguments usage
</pre>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features">Deprecated and obsolete features</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a></li>
 <li>{{jsxref("Function.arguments")}}</li>
 <li>{{jsxref("Function.caller")}} and <code><a href="/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee.caller</a></code></li>
</ul>
