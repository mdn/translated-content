---
title: 함수
slug: Glossary/Function
tags:
  - 익명함수
  - 즉시 실행 함수
  - 함수
translation_of: Glossary/Function
---
<p><strong>함수</strong>는 다른 코드에서 또는 자신에 의해 호출되거나 함수 레퍼런스를 저장한 {{Glossary("variable", "변수")}}에 의해 호출될 수 있는  코드조각이다. 함수가 호출될 때 함수의 입력으로 {{Glossary("Argument", "인수")}} 가 전달되고 함수는 선택적으로 출력값을 반환할 수 있다.  또한 {{glossary("JavaScript")}}에서 함수는 {{glossary("object", "객체")}}가 될 수도 있다.</p>

<p>함수명은 함수 선언문 또는 함수 표현식의 일부로써 선언된 {{Glossary("identifier","식별자")}}이다. 함수 이름의 {{Glossary("scope","범위")}}는 함수 이름의 선언식 또는 표현식인지에 따라 결정된다.</p>

<h3 id="여러_함수_형식들">여러 함수 형식들</h3>

<p><strong>익명 함수</strong>는 함수명이 없는 함수이다. 함수 표현식만 익명 일 수 있으며, 함수 선언식에는 반드시 이름이 있어야한다 :</p>

<pre class="brush: js">// When used as a function expression
(function () {});

// or using the ECMAScript 2015 arrow notation
() =&gt; {};</pre>

<p><strong>이름있는 함수</strong>는 함수명을 갖는 함수이다 :</p>

<pre class="brush: js">// Function declaration
function foo() {};

// Named function expression
(function bar() {});

// or using the ECMAScript 2015 arrow notation
const foo = () =&gt; {};</pre>

<p><strong>안쪽 함수</strong>는 다른함수 내부에서 정의된 함수이다(아래 예에서는 square). <strong>바깥 함수</strong>는 함수를 포함하고 있는 함수이다(아래 예에서는 addSquares):</p>

<pre class="brush: js">function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};

//Using ECMAScript 2015 arrow notation
const addSquares = (a,b) =&gt; {
   const square = x =&gt; x*x;
   return square(a) + square(b);
};</pre>

<p><strong>재귀호출 함수</strong>는 자기 자신을 호출하는 함수이다. {{Glossary("recursion","재귀호출" )}} 참조.</p>

<pre class="brush: js">function loop(x) {
   if (x &gt;= 10)
      return;
   loop(x + 1);
};

//Using ECMAScript 2015 arrow notation
const loop = x =&gt; {
   if (x &gt;= 10)
      return;
   loop(x + 1);
};</pre>

<p><strong>즉시 실행 함수 표현 </strong>(IIFE)은 브라우저 컴파일러에 함수가 로드된 후 직접 호출되는 함수이다.  IIFE를 식별하는 방법은 함수 선언의 끝에 여분의 왼쪽과 오른쪽 괄호를 두는 것이다. 이런 함수표현식의 형식은 많은 장점을 갖고 있지만 여기서는 일일이 설명하지 않는다.</p>

<pre class="brush: js">// Declared functions can't be called immediately this way
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
​function foo() {
    console.log('Hello Foo');
}();
*/

// Function expressions, named or anonymous, can be called immediately
(function foo() {
    console.log("Hello Foo");
}());

(function food() {
    console.log("Hello Food");
})();

(() =&gt; console.log('hello world'))();</pre>

<p>IIFE에 대해 더 많은 설명이 필요하다면 위키피디아의 다음 페이지를 확인 바란다: <a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression">Immediately Invoked Function Expression</a></p>

<h2 id="더_알아보기">더 알아보기</h2>

<h3 id="기술적_참조">기술적 참조</h3>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" title="en-US/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
</ul>
