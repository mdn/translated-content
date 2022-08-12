---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
translation_of: Web/JavaScript/Reference/Errors/Not_a_constructor
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메세지">메세지</h2>

<pre class="syntaxbox">TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: SIMD is not a constructor
TypeError: Atomics is not a constructor
</pre>

<h2 id="오류_유형">오류 유형</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="뭐가_잘못된_거죠">뭐가 잘못된 거죠?</h2>

<p>객체 혹은 변수를 생성자로 사용하려고 했습니다, 하지만 객체(혹은 변수)가 생성자가 아닙니다. 생성자가 무엇인지에 대한 자세한 정보는 {{Glossary("constructor")}} 혹은 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> operator</a> 를 참조하시기 바랍니다.</p>

<p>{{jsxref("String")}} 혹은 {{jsxref("Array")}}와 같이 <code>new</code>,를 사용하여 생성할 수 있는 전역 객체들이 있습니다. 하지만 일부 전역 객체들은 그렇지 않고 속성과 메서드가 정적입니다. 다음의 자바스크립트 표준 내장 객체들은 생성자가 아닙니다: {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("SIMD")}}, {{jsxref("Atomics")}}.</p>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">Generator functions</a> 또한 생성자로 사용될 수 없습니다.</p>

<h2 id="예시">예시</h2>

<h3 id="유효하지_않은_경우">유효하지 않은 경우</h3>

<pre class="brush: js example-bad">var Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
</pre>

<h3 id="car_생성자">car 생성자</h3>

<p>자동차(car) 객체를 만들고자 한다고 가정합니다. 이 객체의 타입을 <code>car</code>라 하고 make, model, and year 세 개의 프로퍼티를 갖습니다. 이를 위해 다음과 같은 함수를 작성할 것입니다:</p>

<pre class="brush: js">function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
</pre>

<p>이제 다음과 같이 <code>mycar</code> 라 불리는 객체를 생성할 수 있습니다:</p>

<pre class="brush: js">var mycar = new Car('Eagle', 'Talon TSi', 1993);</pre>

<h3 id="프라미스_이용">프라미스 이용</h3>

<p>즉시 실행되는 프라미스를 반환하는 경우에는 <em>새로운 Promise(...)</em>를 생성할 필요가 없습니다.</p>

<p>아래는 올바른 방법이 아닙니다(<a href="https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise#Constructor">프라미스 생성자</a>가 제대로 호출되고 있지 않습니다). <code>TypeError: this is not a constructor</code> 예외를 던지게 됩니다:</p>

<pre class="brush: js example-bad">return new Promise.resolve(true);
</pre>

<p>대신, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve">Promise.resolve()</a> 혹은 <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject">Promise.reject()</a> <a href="https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods">정적 메서드</a>를 사용하십시오:</p>

<pre class="brush: js">// This is legal, but unnecessarily long:
return new Promise((resolve, reject) =&gt; { resolve(true); })

// Instead, return the static method:
return Promise.resolve(true);
return Promise.reject(false);
</pre>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{Glossary("constructor")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> operator</a></li>
</ul>
