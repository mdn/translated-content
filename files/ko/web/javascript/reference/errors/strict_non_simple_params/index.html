---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
translation_of: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Firefox:
SyntaxError: "use strict" not allowed in function with default parameter
SyntaxError: "use strict" not allowed in function with rest parameter
SyntaxError: "use strict" not allowed in function with destructuring parameter

Chrome:
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}}.</p>

<h2 id="무엇이_잘못_되었을까요">무엇이 잘못 되었을까요?</h2>

<p> <code>"use strict"</code> 지시문은 다음 매개변수 중 한 개가 있는 함수의 맨 위에 작성됩니다:</p>

<ul>
 <li>{{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}</li>
 <li>{{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}</li>
 <li>{{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}</li>
</ul>

<p><code>"use strict"</code> 지시문은 ECMAScript 동작에 따라 이러한 함수의 맨 위에 허용되지 않습니다.</p>

<h2 id="Examples">Examples</h2>

<h3 id="기능_명세서">기능 명세서</h3>

<p>다음은 함수 <code>sum</code> 에는 기본 매개 변수 <code>a=1</code> 및 <code>b=2</code>가 있는 경우입니다:</p>

<pre class="brush: js example-bad">function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  'use strict';
  return a + b;
}
</pre>

<p>함수가 <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> 모드에 있어야 하고 전체 스크립트 또는 포함된 함수가 <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>에 있어도 괜찮으면 함수 외부에서 <code>"use strict"</code> 지시문을 이동할 수 있습니다:</p>

<pre class="brush: js example-good">'use strict';
function sum(a = 1, b = 2) {
  return a + b;
}
</pre>

<h3 id="함수_표현식">함수 표현식</h3>

<p>함수 표현식은 또 다른 해결방법을 사용할 수 있습니다:</p>

<pre class="brush: js example-bad">var sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  'use strict';
  return a + b;
};
</pre>

<p>이것은 다음 표현식으로 변환 될 수 있습니다:</p>

<pre class="brush: js example-good">var sum = (function() {
  'use strict';
  return function sum([a, b]) {
    return a + b;
  };
})();
</pre>

<h3 id="화살표_함수">화살표 함수</h3>

<p>화살표 함수가 <code>this</code>에 접근해야 하는 경우에는,  둘러싼 함수로 화살표 함수를 사용할 수 있습니다:</p>

<pre class="brush: js example-bad">var callback = (...args) =&gt; {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  'use strict';
  return this.run(args);
};
</pre>

<p>이것은 다음 표현식과 같이 변환될 수 있습니다:</p>

<pre class="brush: js example-good">var callback = (() =&gt; {
  'use strict';
  return (...args) =&gt; {
    return this.run(args);
  };
})();
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Strict_mode", "Strict mode", "", 1)}}</li>
 <li>{{jsxref("Statements/function", "function statement", "", 1)}}</li>
 <li>{{jsxref("Operators/function", "function expression", "", 1)}}</li>
 <li>{{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}</li>
 <li>{{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}</li>
 <li>{{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}</li>
</ul>
