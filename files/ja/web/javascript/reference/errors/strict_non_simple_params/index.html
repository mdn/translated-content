---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="メッセージ">メッセージ</h2>

<pre class="syntaxbox">Firefox:
SyntaxError: "use strict" not allowed in function with default parameter
SyntaxError: "use strict" not allowed in function with rest parameter
SyntaxError: "use strict" not allowed in function with destructuring parameter

Chrome:
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("SyntaxError")}}。</p>

<h2 id="何がうまくいかなかったのか？">何がうまくいかなかったのか？</h2>

<p>次の引数のうちいずれかを持つ関数の先頭に <code>"use strict"</code> ディレクティブが書かれています:</p>

<ul>
 <li>{{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}</li>
 <li>{{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}</li>
 <li>{{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}</li>
</ul>

<p>ECMAScript 仕様に則って、このような関数の先頭では <code>"use strict"</code> を使用できません。</p>

<h2 id="例">例</h2>

<h3 id="Function_ステートメント">Function ステートメント</h3>

<p>このケースでは、関数 <code>sum</code> は既定値を持つ引数 <code>a=1</code> と <code>b=2</code> を持っています:</p>

<pre class="brush: js example-bad">function sum(a=1, b=2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
</pre>

<p>関数を <a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モード</a>にしたい、かつスクリプト全体、またはエンクロージャー関数が strict モードになってもよいなら、<code>"use strict"</code> ディレクティブを関数の外側に移動できます:</p>

<pre class="brush: js example-good">"use strict";
function sum(a=1, b=2) {
  return a + b;
}
</pre>

<h3 id="Function_式">Function 式</h3>

<p>function 式では、別の回避策をとることができます:</p>

<pre class="brush: js example-bad">var sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
</pre>

<p>これは、次の式に変換できます:</p>

<pre class="brush: js example-good">var sum = (function() {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
</pre>

<h3 id="アロー関数">アロー関数</h3>

<p>アロー関数が <code>this</code> 変数にアクセスする必要がある場合、アロー関数をエンクロージャー関数として使用できます:</p>

<pre class="brush: js example-bad">var callback = (...args) =&gt; {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
</pre>

<p>これは、次の式に変換できます:</p>

<pre class="brush: js example-good">var callback = (() =&gt; {
  "use strict";
  return (...args) =&gt; {
    return this.run(args);
  };
})();
</pre>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{jsxref("Strict_mode", "Strict mode", "", 1)}}</li>
 <li>{{jsxref("Statements/function", "function statement", "", 1)}}</li>
 <li>{{jsxref("Operators/function", "function expression", "", 1)}}</li>
 <li>{{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}</li>
 <li>{{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}</li>
 <li>{{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}</li>
</ul>
