---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
tags:
  - ECMAScript6
  - Generator
  - Iterator
  - JavaScript
translation_of: Web/JavaScript/Reference/Statements/function*
---
<div>{{jsSidebar("Statements")}}</div>

<p><code><strong>function*</strong></code> 선언 (끝에 별표가 있는 <code>function</code> keyword) 은 <em>generator function</em> 을 정의하는데, 이 함수는 {{jsxref("Global_Objects/Generator","Generator")}} 객체를 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}</div>



<p>generator function 은 {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} 생성자와 {{jsxref("Operators/function*", "function* expression")}} 을 사용해서 정의할 수 있습니다.</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox">function* <em>name</em>([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) {
   <em>statements</em>
}
</pre>

<dl>
 <dt><code>name</code></dt>
 <dd>함수명.</dd>
</dl>

<dl>
 <dt><code>param</code></dt>
 <dd>함수에 전달되는 인수의 이름. 함수는 인수를 255개까지 가질 수 있다.</dd>
</dl>

<dl>
 <dt><code>statements</code></dt>
 <dd>함수의 본체를 구성하는 구문들.</dd>
</dl>

<h2 id="설명">설명</h2>

<p>Generator는 빠져나갔다가 나중에 다시 돌아올 수 있는 함수입니다. 이때 컨텍스트(변수 값)는 출입 과정에서 저장된 상태로 남아 있습니다.</p>

<p>Generator 함수는 호출되어도 즉시 실행되지 않고, 대신 함수를 위한 <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator">Iterator</a> 객체가 반환됩니다. Iterator의 <code>next()</code> 메서드를 호출하면 Generator 함수가 실행되어 <strong>{{jsxref("Operators/yield", "yield")}}</strong> 문을 만날 때까지 진행하고, 해당 표현식이 명시하는 Iterator로부터의 반환값을 반환합니다. <strong>{{jsxref("Operators/yield*", "yield*")}}</strong> 표현식을 마주칠 경우, 다른 Generator 함수가 위임(delegate)되어 진행됩니다.</p>

<p>이후 <code>next()</code> 메서드가 호출되면 진행이 멈췄던 위치에서부터 재실행합니다. <code>next()</code> 가 반환하는 객체는 <code>yield</code>문이 반환할 값(yielded value)을 나타내는 <code>value</code> 속성과, Generator 함수 안의 모든 <code>yield</code> 문의 실행 여부를 표시하는 boolean 타입의 <code>done</code> 속성을 갖습니다. <code>next()</code> 를 인자값과 함께 호출할 경우, 진행을 멈췄던 위치의 <code>yield</code> 문을  <code>next()</code> 메서드에서 받은 인자값으로 치환하고 그 위치에서 다시 실행하게 됩니다.</p>

<h2 id="예시">예시</h2>

<h3 id="간단한_예제">간단한 예제</h3>

<pre class="brush: js">function* idMaker(){
  var index = 0;
  while(index &lt; 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...
</pre>

<h3 id="yield*_를_사용한_예제">yield* 를 사용한 예제</h3>

<pre class="brush: js">function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
</pre>

<h3 id="Generator_에_인자값을_넘기는_예제">Generator 에 인자값을 넘기는 예제</h3>

<pre class="brush: js">function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();
gen.next('pretzel'); // pretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise
</pre>

<h3 id="Generator_는_생성자로서_사용될_수_없다">Generator 는 생성자로서 사용될 수 없다</h3>

<pre><code>function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor"</code></pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("javascript.statements.generator_function")}}</p>

<h2 id="관련_항목">관련 항목</h2>

<ul>
 <li>{{jsxref("Operators/function*", "function* expression")}}</li>
 <li>{{jsxref("GeneratorFunction")}} object</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol">The Iterator protocol</a></li>
 <li>{{jsxref("Operators/yield", "yield")}}</li>
 <li>{{jsxref("Operators/yield*", "yield*")}}</li>
 <li>{{jsxref("Function")}} object</li>
 <li>{{jsxref("Statements/function", "function declaration")}}</li>
 <li>{{jsxref("Operators/function", "function expression")}}</li>
 <li>{{jsxref("Functions_and_function_scope", "Functions and function scope")}}</li>
 <li>Other web resources:
  <ul>
   <li><a href="http://facebook.github.io/regenerator/">Regenerator</a> an ES2015 generator compiler to ES5</li>
   <li><a href="http://www.youtube.com/watch?v=qbKWsbJ76-s">Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013</a></li>
   <li><a href="https://www.youtube.com/watch?v=ZrgEZykBHVo&amp;list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&amp;index=1">Hemanth.HM: The New gen of *gen(){}</a></li>
   <li><a href="http://taskjs.org/">Task.js</a></li>
  </ul>
 </li>
</ul>
