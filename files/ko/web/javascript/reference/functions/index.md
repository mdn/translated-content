---
title: 함수
slug: Web/JavaScript/Reference/Functions
tags:
  - 생성자
  - 인자
  - 파라미터
  - 함수
translation_of: Web/JavaScript/Reference/Functions
---
<div>{{jsSidebar("Functions")}}</div>

<p>일반적으로, 함수는 함수 외부 (또는 재귀(recursion)의 경우엔 내부) 코드에 의해 <em>호출될</em> 수 있는 "하위프로그램"입니다. 프로그램 그 자체처럼, 함수는 함수 몸통(<em>function body</em>)이라고 하는 일련의 구문(statement)으로 구성됩니다. 값은 함수에 <em>전달될</em> 수 있고 함수는 값을 <em>반환</em>합니다.</p>

<p>JavaScript에서, 함수는 다른 객체처럼 속성 및 메서드를 가질 수 있기에 일급(first-class) 객체입니다. 다른 객체와 함수를 구별하는 것은 함수는 호출될 수 있다는 것입니다. 간단히 말해, 함수는 <code><a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Function">Function</a></code> 객체입니다.</p>

<p>더 많은 예제와 설명은, <a href="/ko/docs/Web/JavaScript/Guide/함수">JavaScript 함수 안내서</a>를 참조하세요.</p>

<h2 id="설명">설명</h2>

<p>JavaScript에서 모든 함수는 <code>Function</code> 객체입니다. <code>Function</code> 객체의 속성(property) 및 메서드에 관한 정보는 {{jsxref("Function")}} 참조.</p>

<p>기본값 이외의 값을 반환하려면, 함수는 반환할 값을 지정하는 <code><a href="/ko/docs/Web/JavaScript/Reference/Statements/return">return</a></code> 문이 있어야 합니다. return 문이 없는 함수는 기본값을 반환합니다. <code><a href="/ko/docs/Web/JavaScript/Reference/Operators/new">new</a></code> 키워드로 호출되는 <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor">생성자</a>의 경우에, 기본값은 자신의 <code>this</code> 매개변수 값입니다. 다른 모든 함수의 경우, 기본 반환값은 {{jsxref("undefined")}}입니다.</p>

<p>함수 호출의 매개변수는 함수의 <em>인수</em>입니다. 인수는 함수에 <em>값으로</em> 전달됩니다. 함수가 인수값을 바꾸면, 이 변화는 전역 또는 호출한 함수에 반영되지 않습니다. 그러나, 객체 참조(reference)는 값이지만 특별합니다: 함수가 참조된 객체의 속성을 바꾸면, 그 변화는 다음 예에서와 같이 함수 밖에서도 바뀌는 것을 볼 수 있습니다:</p>

<pre class="brush: js">/* 함수 'myFunc' 선언 */
function myFunc(theObject) {
   theObject.brand = "Toyota";
 }

 /*
  * 변수 'mycar' 선언;
  * 새 객체를 만들고 초기화;
  * 'mycar'에 객체 참조를 할당
  */
 var mycar = {
   brand: "Honda",
   model: "Accord",
   year: 1998
 };

 /* Logs 'Honda' */
 console.log(mycar.brand);

 /* 객체 참조를 함수에 전달 */
 myFunc(mycar);

 /*
  * 함수에 의해 바뀌었기에 객체의
  * 'brand' 속성의 값으로 'Toyota' 출력.
  */
 console.log(mycar.brand);
</pre>

<p><a href="/ko/docs/Web/JavaScript/Reference/Operators/this"><code>this</code> 키워드</a>는 현재 실행 중인 함수를 참조하지 않습니다, 그래서 심지어 함수 몸통 내에서도 이름으로 <code>Function</code> 객체를 참조해야 합니다.</p>

<h2 id="함수_정의하기">함수 정의하기</h2>

<p>함수를 정의하는 여러 방법이 있습니다:</p>

<h3 id="함수_선언_function_문">함수 선언 (<code>function</code> 문)</h3>

<p>함수 선언을 위한 특별한 구문이 있습니다 (자세한 사항은 <a href="/ko/docs/Web/JavaScript/Reference/Statements/function">function 문</a> 참조):</p>

<pre class="brush: js">function <em>name</em>([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) {
   <em>statements</em>
}
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>함수 이름.</dd>
</dl>

<dl>
 <dt><code>param</code></dt>
 <dd>함수에 전달되는 인수의 이름. 함수는 255개까지 인수를 가질 수 있습니다.</dd>
</dl>

<dl>
 <dt><code>statements</code></dt>
 <dd>함수의 몸통을 구성하는 문.</dd>
</dl>

<h3 id="함수_표현식_function_식">함수 표현식 (<code>function</code> 식)</h3>

<p>함수 식(expression)은 함수 선언과 비슷하고 구문이 같습니다 (자세한 사항은 <a href="/ko/docs/Web/JavaScript/Reference/Operators/function">function 식</a> 참조):</p>

<p>함수 표현식(expression)은 함수 선언과 비슷하고 구문이 같습니다 (자세한 내용은 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function">function expression</a> 참조). 함수 표현식은 더 큰 표현식의 일부일 수 있습니다. "이름이 붙은(named)"함수 표현식 (예 : 호출 스택에서 표현식 이름 사용하는경우) 또는 "익명"함수 표현식을 정의 할 수 있습니다. 함수 표현식은 선언이 되지 않은 상태에서 사용할 수 없기 때문에 함수를 사용하기 전에 코드에 함수코드가 존제해야 사용 할 수 있습니다.</p>

<pre class="brush: js">function [<em>name</em>]([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) {
   <em>statements</em>
}
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>함수 이름. 함수가 익명(anonymous) 함수로 알려진 경우, 생략될 수 있음.</dd>
</dl>

<dl>
 <dt><code>param</code></dt>
 <dd>함수에 전달되는 인수의 이름. 함수는 255개까지 인수를 가질 수 있습니다.</dd>
 <dt><code>statements</code></dt>
 <dd>함수의 몸통을 구성하는 문.</dd>
</dl>

<p>다음은 익명 함수 표현식의 예입니다 (<code>이름</code> 이 사용되지 않음):</p>

<pre class="brush: js"><code>var myFunction = function() {
    statements
}</code></pre>

<p>It is also possible to provide a name inside the definition in order to create a <strong>named</strong> function expression:</p>

<pre class="brush: js"><code>var myFunction = function namedFunction(){
    statements
}</code></pre>

<p>One of the benefits of creating a named function expression is that in case we encountered an error, the stack trace will contain the name of the function, making it easier to find the origin of the error.</p>

<p>As we can see, both examples do not start with the <code>function</code> keyword. Statements involving functions which do not start with <code>function</code> are function expressions.</p>

<p>When functions are used only once, a common pattern is an <a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE">IIFE (Immediately Invokable Function Expression)</a>.</p>

<pre class="brush: js"><code>(function() {
    statements
})();</code></pre>

<p>IIFE are function expressions that are invoked as soon as the function is declared.</p>

<h3 id="생성기_함수_선언_function*_문">생성기 함수 선언 (<code>function*</code> 문)</h3>

<p>생성기 함수 선언을 위한 특별한 구문이 있습니다 (자세한 사항은 {{jsxref('Statements/function*', 'function* statement')}} 참조):</p>

<pre class="brush: js">function* <em>name</em>([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) {
   <em>statements</em>
}
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>함수 이름.</dd>
</dl>

<dl>
 <dt><code>param</code></dt>
 <dd>함수에 전달되는 인수의 이름.</dd>
</dl>

<dl>
 <dt><code>statements</code></dt>
 <dd>함수의 몸통을 구성하는 문.</dd>
</dl>

<h3 id="생성기_함수_식_function*_식">생성기 함수 식 (<code>function*</code> 식)</h3>

<p>생성기 함수 식은 생성기 함수 선언과 비슷하고 구문이 같습니다 (자세한 사항은 {{jsxref('Operators/function*', 'function* expression')}} 참조):</p>

<pre class="brush: js">function* [<em>name</em>]([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) {
   <em>statements</em>
}
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>함수 이름. 함수가 익명 함수인 경우 생략될 수 있음.</dd>
</dl>

<dl>
 <dt><code>param</code></dt>
 <dd>함수에 전달되는 인수의 이름.</dd>
 <dt><code>statements</code></dt>
 <dd>함수의 몸통을 구성하는 문.</dd>
</dl>

<h3 id="화살표_함수_표현식_>">화살표 함수 표현식 (=&gt;)</h3>

<p>화살표 함수 식은 구문이 더 짧고 어휘상(lexically) <code>this</code> 값을 바인딩합니다 (자세한 사항은 <a href="/ko/docs/Web/JavaScript/Reference/Functions/애로우_펑션">화살표 함수</a> 참조):</p>

<pre class="brush: js">([param[, param]]) =&gt; {
   statements
}

param =&gt; expression
</pre>

<dl>
 <dt><code>param</code></dt>
 <dd>인수의 이름. 0개 인수는 <code>()</code>로 표시돼야 합니다. 인수가 1개뿐이면, 괄호는 필요치 않습니다. (<code>foo =&gt; 1</code>처럼)</dd>
 <dt><code>statements or expression</code></dt>
 <dd>선언문이 여러개인 경우 괄호로 묶여야 합니다. 단일 식(expression)은 괄호가 필요 없습니다. 그리고 식은 암시적으로(implicit) 함수의 반환값이 됩니다.</dd>
</dl>

<h3 id="Function_constructor"><code>Function</code> constructor</h3>

<div class="note">
<p><strong>참고</strong> : <code>Function</code> constructor를 사용하여 함수를 만드는 것은 권장되지 않습니다. 함수 본문을 일부 JS 엔진 최적화를 방해 할 수있는 문자열로 사용해야하고 다른 문제를 유발할 수 있기 때문입니다.</p>
</div>

<p>다른 모든 객체처럼, {{jsxref("Function")}} 객체는 <code>new</code> 연산자를 사용하여 생성될 수 있습니다:</p>

<pre class="brush: js">new Function (<em>arg1</em>, <em>arg2</em>, ... <em>argN</em>, <em>functionBody</em>)
</pre>

<dl>
 <dt><code>arg1, arg2, ... arg<em>N</em></code></dt>
 <dd>형식 매개변수로 함수에 의해 사용되는 0개 이상의 이름. 각각은 알맞은 JavaScript 식별자(identifier)여야 합니다.</dd>
</dl>

<dl>
 <dt><code>functionBody</code></dt>
 <dd>함수 몸통을 구성하는 JavaScript 문을 포함하는 문자열.</dd>
</dl>

<p>함수로 <code>Function</code> 생성자 호출(<code>new</code> 연산자 사용 없이)하는 것은 생성자로 호출하는 것과 같습니다.</p>

<h3 id="GeneratorFunction_생성자"><code>GeneratorFunction</code> 생성자</h3>

<div class="note">
<p><strong>주의:</strong> <code>GeneratorFunction</code>은 전역 객체가 아니지만 생성기 함수 인스턴스로부터 얻을 수 있습니다(자세한 사항은 {{jsxref("GeneratorFunction")}} 참조).</p>
</div>

<div class="note">
<p><strong>주의:</strong> <code>GeneratorFunction</code> 생성자를 사용하여 함수를 만드는 것은 권장되지 않습니다. 함수 본문을 일부 JS 엔진 최적화를 방해 할 수있는 문자열로 사용해야하고 다른 문제를 유발할 수 있기 때문입니다.</p>
</div>

<p>다른 모든 객체처럼, {{jsxref("GeneratorFunction")}} 객체는 <code>new</code> 연산자를 사용하여 생성될 수 있습니다:</p>

<pre class="brush: js">new GeneratorFunction (<em>arg1</em>, <em>arg2</em>, ... <em>argN</em>, <em>functionBody</em>)
</pre>

<dl>
 <dt><code>arg1, arg2, ... arg<em>N</em></code></dt>
 <dd>형식 인수명으로 함수에 의해 사용되는 0개 이상의 이름. 각각은 유효한 JavaScript 식별자 규칙을 따르는 문자열 또는 콤마로 구분된 그러한 문자열 목록이어야 합니다; 예를 들어 "<code>x</code>", "<code>theValue</code>" 또는 "<code>a,b</code>".</dd>
</dl>

<dl>
 <dt><code>functionBody</code></dt>
 <dd>함수 정의를 구성하는 JavaScript 문을 포함하는 문자열.</dd>
</dl>

<p>함수로서 <code>Function</code> 생성자 호출(<code>new</code> 연산자 사용 없이)은 생성자로서 호출하는 것과 같은 효과입니다.</p>

<h2 id="Function_매개변수">Function 매개변수</h2>

<h3 id="기본_매개변수">기본 매개변수</h3>

<p>기본(default) 함수 매개변수는 전달된 값이 없거나 <code>undefined</code>인 경우 기본값으로 초기화되는 형식 매개변수를 허용합니다. 자세한 사항은, <a href="/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters">기본 매개변수</a> 참조.</p>

<h3 id="나머지_매개변수">나머지 매개변수</h3>

<p>나머지(rest) 매개변수 구문은 부정(indefinite)수인 인수를 배열로 나타내는 것을 허용합니다. 자세한 사항은, <a href="/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters">나머지 매개변수</a> 참조.</p>

<h2 id="arguments_객체"><code>arguments</code> 객체</h2>

<p><code>arguments</code> 객체를 사용하여 함수 내에서 함수의 인수를 참조할 수 있습니다. <a href="/ko/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a> 참조.</p>

<ul>
 <li><code><a href="/ko/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a></code>: 현재 실행 중인 함수에 전달된 인수를 포함하는 배열 같은 객체.</li>
 <li><code><a href="/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee">arguments.callee</a></code> {{Deprecated_inline}} : 현재 실행 중인 함수.</li>
 <li><code><a href="/ko/docs/Web/JavaScript/Reference/Functions/arguments/caller">arguments.caller</a></code> {{Obsolete_inline}} : 현재 실행 중인 함수를 호출한 함수.</li>
 <li><code><a href="/ko/docs/Web/JavaScript/Reference/Functions/arguments/length">arguments.length</a></code>: 함수에 전달된 인수의 수.</li>
</ul>

<h2 id="메서드_함수_정의하기">메서드 함수 정의하기</h2>

<h3 id="getter_및_setter_함수">getter 및 setter 함수</h3>

<p>모든 표준 내장 객체 또는 새로운 속성 추가를 지원하는 사용자 정의 객체에 getter(accessor 메서드) 및 setter(mutator 메서드)를 정의할 수 있습니다. getter 및 setter를 정의하는 구문은 객체 리터럴 구문을 사용합니다.</p>

<dl>
 <dt><a href="/ko/docs/Web/JavaScript/Reference/Functions/get">get</a></dt>
 <dd>
 <p>객체 속성을 그 속성이 검색되는 경우 호출되는 함수에 바인딩합니다.</p>
 </dd>
 <dt><a href="/ko/docs/Web/JavaScript/Reference/Functions/set">set</a></dt>
 <dd>객체 속성을 그 속성을 설정하려는 시도가 있는 경우 호출되는 함수에 바인딩합니다.</dd>
</dl>

<h3 id="메서드_정의_구문">메서드 정의 구문</h3>

<p>ECMAScript 2015를 시작으로, getter 및 setter와 비슷한 단축 구문으로 자신의 메서드를 정의할 수 있습니다. 더 자세한 정보는 <a href="/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions">메서드 정의</a> 참조.</p>

<pre class="brush: js">var obj = {
  foo() {},
  bar() {}
};</pre>

<h2 id="생성자_vs._선언문_vs._표현식">생성자 vs. 선언문 vs. 표현식</h2>

<p>다음을 비교해보세요:</p>

<p><code>Function</code> <em>constructor로 정의된 함수를 </em>변수<code>multiply</code>에 할당.</p>

<pre class="brush: js"><code>var multiply = new Function('x', 'y', 'return x * y');</code></pre>

<p>이름이 <code>multiply</code>인 함수 선언:</p>

<pre class="brush: js">function multiply(x, y) {
   return x * y;
}
</pre>

<p>변수 <code>multiply</code>에 할당된 익명(anonymous) 함수의 <em>function 식</em>:</p>

<pre class="brush: js">var multiply = function(x, y) {
   return x * y;
};
</pre>

<p>변수 <code>multiply</code>에 할당된 이름이 <code>func_name</code>인 함수의 <em>function 식</em>:</p>

<pre class="brush: js">var multiply = function func_name(x, y) {
   return x * y;
};
</pre>

<h3 id="차이">차이</h3>

<p>모두 거의 같은 일을 하지만 약간 미묘한 차이가 있습니다:</p>

<p>함수 이름과 함수가 할당 된 변수 사이에는 차이가 있습니다. 함수 이름을 변경할 수 없으며 함수가 할당 된 변수는 다시 할당 할 수 있습니다. 함수 이름은 함수 본문(body)내에서만 사용할 수 있습니다. 함수 본문(body) 외부에서 사용하려고 하면 오류가 발생합니다. (함수 이름이 <code>var</code> 문을 통해 이전에 선언 된 경우에는 정의되지 않습(<code>undefined</code>)니다.</p>

<p>예를 들어:</p>

<pre class="brush: js">var y = function x() {};
alert(x); // 오류 발생
</pre>

<p>함수 이름은 <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/toString"><code>Function</code>의 toString 메서드</a>를 통해 직렬화되는 경우에도 보입니다.</p>

<p>반면에 함수가 할당 된 변수는 함수의 범위(scope)가 포함되도록 보장 된 범위로만 제한됩니다.</p>

<p>예제 4에서 볼 수 있듯이 함수 이름은 함수가 할당 된 변수와 다를 수 있습니다. 그들은 서로에게 아무런 관련이 없습니다. 함수 선언은 함수 이름과 동일한 이름의 변수도 만듭니다. 따라서 함수 표현식으로 정의 된 함수와 달리 함수 선언으로 정의 된 함수는 정의 된 범위에서 함수 선언의 이름으로 액세스 할 수 있습니다.</p>

<p>'<code>new Function</code>'으로 정의된 함수는 함수 이름이 없습니다. 그러나, <a href="/ko/docs/SpiderMonkey">SpiderMonkey</a> JavaScript 엔진에서는, 함수의 직렬화된 형태가 마치 그 이름이 "anonymous"인 것처럼 보입니다. 예를 들어, <code>alert(new Function())</code>은 다음을 출력합니다:</p>

<pre class="brush: js">function anonymous() {
}
</pre>

<p>함수가 실제로는 이름이 없기에, <code>anonymous</code>는 함수 내에서 액세스될 수 있는 변수가 아닙니다.</p>

<p>다음 코드는 오류가 날 것입니다:</p>

<pre class="brush: js">var foo = new Function("alert(anonymous);");
foo();
</pre>

<p>function 식 또는 <code>Function</code> 생성자에 의해 정의된 함수와는 달리, function 선언으로 정의된 함수는 function 자체의 선언 전에 사용될 수 있습니다. 예를 들어:</p>

<pre class="brush: js">foo(); // alerts FOO!
function foo() {
   alert('FOO!');
}
</pre>

<p>함수 표현식(function expression)이나 함수 선언(function declaration)에 의해 정의 된 함수는 현재 범위를 상속합니다. 즉,이 함수는 클로저를 형성합니다. 반면에 <code>Function</code> 생성자가 정의한 함수는 전역 범위 (모든 함수가 상속) 이외의 다른 범위를 상속하지 않습니다.</p>

<pre class="brush: js"><code>/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a varible with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    cons();
}
myFunc();

/*
 * Logs:-
 * 9  - for 'decl' by function declaration (current scope)
 * 9  - for 'expr' by function expression (current scope)
 * 5  - for 'cons' by Function constructor (global scope)
 */</code></pre>

<p>function 식 및 function 선언에 의해 정의된 함수는 한 번만 구문 분석됩니다, 반면에 <code>Function</code> 생성자에 의해 정의된 함수는 아닙니다. 즉, <code>Function</code> 생성자에 전달된 함수 몸통 문자열은 생성자가 호출될 때마다 구문 분석되어야 합니다. function 식이 매번 closure를 만들더라도, 함수 몸통은 다시 구문 분석되지 않습니다, 그래서 function 식은 "<code>new Function(...)</code>"보다 여전히 더 빠릅니다. 따라서 <code>Function</code> 생성자는 보통 가능한 한 피해야 합니다.</p>

<p>함수 식과 함수 선언으로 정의 된 함수는 한 번만 구문 분석되지만 <code>Function</code> 생성자로 정의 된 함수는 구문 분석되지 않습니다. 즉, <code>Function</code> 생성자에 전달 된 함수 본문 문자열은 생성자가 호출 될 때마다 파싱되어야합니다. 함수식이 매번 클로저(closure)를 만들지만 함수 본문은 다시 파싱되지 않으므로 함수 식은 여전히 ​​"<code>new Function (...)</code>"보다 빠릅니다. 따라서 <code>Function</code> 생성자는 가능한 피하는 것이 좋습니다.</p>

<p>그러나 <code>Function constructor</code>의 문자열을 구문 분석하여 생성된 함수 내에 중첩된 function 식 및 function 선언은 반복해서 구문 분석되지 않음에 주의해야 합니다. 예를 들면:</p>

<pre class="brush: js">var foo = (new Function("var bar = \'FOO!\';\nreturn(function() {\n\talert(bar);\n});"))();
foo(); // 함수 몸통 문자열의 "function() {\n\talert(bar);\n}" 부분은 다시 구문 분석되지 않습니다.</pre>

<p>function 선언은 매우 쉽게 (그리고 종종 무심코) function 식으로 바뀝니다. function 선언은 다음 어느 쪽이든 function 식이 되는 것을 중단합니다:</p>

<ul>
 <li>식의 일부가 된 경우</li>
 <li>더 이상 함수 또는 스크립트 자체의 "source 요소"가 아닌 경우. "source 요소"는 스크립트 또는 함수 몸통에서 중첩되지 않은 문입니다:</li>
</ul>

<pre class="brush: js">var x = 0;               // source 요소
if (x == 0) {            // source 요소
   x = 10;               // source 요소가 아님
   function boo() {}     // source 요소가 아님
}
function foo() {         // source 요소
   var y = 20;           // source 요소
   function bar() {}     // source 요소
   while (y == 10) {     // source 요소
      function blah() {} // source 요소가 아님
      y++;               // source 요소가 아님
   }
}
</pre>

<h3 id="예">예</h3>

<pre class="brush: js">// function 선언
function foo() {}

// function 식
(function bar() {})

// function 식
x = function hello() {}


if (x) {
   // function 식
   function world() {}
}


// function 선언
function a() {
   // function 선언
   function b() {}
   if (0) {
      // function 식
      function c() {}
   }
}
</pre>

<h2 id="블록_레벨_함수">블록 레벨 함수</h2>

<p>ES2015 (ES6)를 시작으로 <a href="/ko/docs/Web/JavaScript/Reference/Strict_mode">엄격 모드</a>에서, 블록 내부 함수는 이제 그 블록 범위가 됩니다. ES6 이전에, 블록 레벨 함수는 엄격 모드에서 금지됐습니다.</p>

<pre class="brush: js">'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// 비엄격 모드에서는 f() === 2
</pre>

<h3 id="비엄격_코드에서_블록_레벨_함수">비엄격 코드에서 블록 레벨 함수</h3>

<p>한 마디로: 안됩니다.</p>

<p>비엄격 코드에서, 블록 내부 function 선언은 이상하게 동작합니다. 예를 들면:</p>

<pre class="brush: js">if (shouldDefineZero) {
   function zero() {     // 위험: 호환성 위험
      console.log("This is zero.");
   }
}
</pre>

<p>ES2015는 <code>shouldDefineZero</code>가 false인 경우, 그러면 <code>zero</code>는 결코 정의되어서는 안된다고 합니다, 그 블록이 실행된 적이 없기에. 그러나, 이는 표준의 새로운 일부입니다. 역사상, 이는 지정되지 않은 채 방치되었고 일부 브라우저는 블록이 실행됐든 아니든 <code>zero</code>를 정의할 겁니다.</p>

<p><a href="/ko/docs/Web/JavaScript/Reference/Strict_mode">엄격 모드</a>에서, ES2015를 지원하는 모든 브라우저는 이를 같은 식으로 다룹니다: <code>zero</code>는 <code>shouldDefineZero</code>가 true이고 <code>if</code> 블록 범위인 경우에만 정의됩니다.</p>

<p>조건부 함수를 정의하는 더 안전한 방법은 function 식을 변수에 할당하는 것입니다:</p>

<pre class="brush: js">var zero;
if (0) {
   zero = function() {
      console.log("This is zero.");
   };
}
</pre>

<h2 id="예제">예제</h2>

<h3 id="형식_갖춘_숫자_반환하기">형식 갖춘 숫자 반환하기</h3>

<p>다음 함수는 선행 0으로 채워진 형식 갖춘(formatted) 숫자 표현을 포함하는 문자열을 반환합니다.</p>

<pre class="brush: js">// 이 함수는 선행 0으로 채워진 문자열을 반환
function padZeros(num, totalLen) {
   var numStr = num.toString();             // 문자열로 반환값을 초기화
   var numZeros = totalLen - numStr.length; // 0의 개수 계산
   for (var i = 1; i &lt;= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return numStr;
}
</pre>

<p>다음 문은 padZeros 함수를 호출합니다.</p>

<pre class="brush: js">var result;
result = padZeros(42,4); // 반환값 "0042"
result = padZeros(42,2); // 반환값 "42"
result = padZeros(5,4);  // 반환값 "0005"
</pre>

<h3 id="함수_존재_여부_결정하기">함수 존재 여부 결정하기</h3>

<p><code>typeof</code> 연산자를 사용하여 함수가 존재하는지 여부를 결정할 수 있습니다. 다음 예에서, <code>window</code> 객체가 함수인 <code>noFunc</code>이라고 하는 속성이 있는지 결정하기 위해 테스트가 수행됩니다. 있으면, 사용됩니다; 그렇지 않으면 무언가 다른 행동을 취합니다.</p>

<pre class="brush: js"> if ('function' == typeof window.noFunc) {
   // noFunc() 사용
 } else {
   // 뭔가 다른 것 수행
 }
</pre>

<p><code>if</code> 테스트에는, <code>noFunc</code>에 대한 참조가 사용되고—실제 함수가 호출되지 않도록 함수 이름 뒤에 괄호 "()"가 없음을 주의하세요.</p>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">명세</th>
   <th scope="col">상태</th>
   <th scope="col">설명</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>초기 정의. JavaScript 1.0에서 구현됨</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-13', 'Function Definition')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>신규: 화살표 함수, 생성기 함수, 기본 매개변수, 나머지 매개변수.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.functions")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Statements/function", "function 문")}}</li>
 <li>{{jsxref("Operators/function", "function 식")}}</li>
 <li>{{jsxref("Statements/function*", "function* 문")}}</li>
 <li>{{jsxref("Operators/function*", "function* 식")}}</li>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
 <li>{{jsxref("Functions/애로우_펑션", "화살표 함수")}}</li>
 <li>{{jsxref("Functions/Default_parameters", "기본 매개변수")}}</li>
 <li>{{jsxref("Functions/rest_parameters", "나머지 매개변수")}}</li>
 <li>{{jsxref("Functions/arguments", "arguments 객체")}}</li>
 <li>{{jsxref("Functions/get", "getter")}}</li>
 <li>{{jsxref("Functions/set", "setter")}}</li>
 <li>{{jsxref("Functions/Method_definitions", "메서드 정의")}}</li>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Functions">함수 및 함수 범위</a></li>
</ul>
