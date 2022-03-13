---
title: 문법과 자료형
slug: Web/JavaScript/Guide/Grammar_and_types
tags:
  - Guide
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Grammar_and_types
original_slug: Web/JavaScript/Guide/Values,_variables,_and_literals
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/소개", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}</div>

<p >이 장은 JavaScript의 기본 문법과 변수 선언, 자료형 및 리터럴을 다룹니다.</p>

<h2 id="기본">기본</h2>

<p>JavaScript는 문법의 대부분을 Java와 C, C++로부터 차용하고 있으며, Awk, Perl, Python의 영향도 받았습니다.</p>

<p>JavaScript는 <strong>대소문자를 구별</strong>하며 <strong>유니코드</strong> 문자셋을 이용합니다. 따라서 다음과 같은 코드도 유효합니다.</p>

<pre class="brush: js">var 갑을 = "병정";
var Früh = "foobar"; // Früh: 독일어로 "이른"
</pre>

<p>하지만 <code>Früh</code>는 <code>früh</code>와 다릅니다. 대소문자를 구분하기 때문입니다.</p>

<p>JavaScript에서는 명령을 {{Glossary("Statement", "명령문(statement)")}}이라고 부르며, 세미콜론(<code>;</code>)으로 구분합니다.</p>

<p>명령문이 한 줄을 다 차지할 경우에는 세미콜론이 필요하지 않습니다. 그러나 한 줄에 두 개 이상의 명령문이 필요하다면 세미콜론으로 구분해야 합니다. ECMAScript는 세미콜론을 자동으로 삽입해 명령문을 끝내는 규칙(ASI)도 가지고 있습니다. (더 많은 정보는 JavaScript의 <a href="/ko/docs/Web/JavaScript/Reference/Lexical_grammar">어휘 문법 에 대한 자세한 참고서</a>를 참고하세요) 하지만, 세미콜론이 필요하지 않은 경우라도 항상 세미콜론으로 끝마치는 편이 버그 예방 차원에서 더 좋은 습관이라고 여겨집니다.</p>

<p>JavaScript의 스크립트 소스는 왼쪽에서 오른쪽으로 탐색하면서 토큰, 제어 문자, 줄바꿈 문자, 주석이나 공백으로 이루어진 입력 element의 시퀀스로 변환됩니다. 스페이스, 탭, 줄바꿈 문자는 공백으로 간주됩니다.</p>

<h2 id="주석">주석</h2>

<p><strong>주석</strong>의 구문은 C++ 및 다른 많은 언어와 똑같습니다.</p>

<pre class="brush: js">// 한 줄 주석

/* 이건 더 긴,
 * 여러 줄 주석입니다.
 */

/* 그러나, /* 중첩된 주석은 쓸 수 없습니다 */ SyntaxError */</pre>

<p>주석은 공백처럼 행동하며 스크립트 실행 시 버려집니다.</p>

<div class="blockIndicator note">
<p><strong>참고</strong>: 몇몇 자바스크립트 파일의 시작부에 <code>#!/usr/bin/env node</code>와 같은 형태의 주석 문법이 쓰이는 것을 볼 수 있습니다. 이것은 <strong>해시백 주석</strong> 문법이라고 하는데, 이 특별한 주석은 스크립트를 실행할 때 쓸 특별한 자바스크립트 인터프리터의 경로를 설정할 때 쓰입니다.  <a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Hashbang_comments">해시백 주석</a>을 참고하여 자세한 내용을 확인할 수 있습니다.</p>
</div>

<h2 id="선언">선언</h2>

<p>JavaScript의 선언에는 3가지 방법이 있습니다.</p>

<dl>
 <dt>{{jsxref("Statements/var", "var")}}</dt>
 <dd>변수를 선언. 추가로 동시에 값을 초기화.</dd>
 <dt>{{jsxref("Statements/let", "let")}}</dt>
 <dd>블록 범위(scope) 지역 변수를 선언. 추가로 동시에 값을 초기화.</dd>
 <dt>{{jsxref("Statements/const", "const")}}</dt>
 <dd>블록 범위 읽기 전용 상수를 선언.</dd>
</dl>

<h3 id="변수">변수</h3>

<p>어플리케이션에서 값에 상징적인 이름으로 변수를 사용합니다. 변수명은 {{Glossary("식별자(identifier)")}}라고 불리며 특정 규칙을 따릅니다.</p>

<p>JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야 하는 반면 이후는 숫자(0-9)일 수도 있습니다. JavaScript가 대소문자를 구분하기에, 문자는 "A"부터 "Z"(대문자)와 "a"부터 "z"(소문자)까지 모두 포함합니다.</p>

<p>ISO 8859-1 혹은 Unicode 문자(가령 å 나 ü)도 식별자에 사용할 수 있습니다(좀 더 상세한 내용은 <a href="https://mathiasbynens.be/notes/javascript-identifiers-es6">이 블로그 글</a>을 참고). 또한 <a href="/ko/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals">Unicode escape sequences</a>도 식별자에 문자로 사용할 수 있습니다.</p>

<p>적절한 이름으로는 <code>Number_hits</code>, <code>temp99, $credit</code> 및 <code>_name</code>등입니다.</p>

<h3 id="변수_선언">변수 선언</h3>

<p>변수 선언은 아래 3가지 방법으로 가능합니다.</p>

<ul>
 <li>{{jsxref("Statements/var", "var")}} 키워드로. 예를 들어, <code>var x = 42</code>. 이 구문은 지역 및 전역 변수를 선언하는데 모두 사용될 수 있습니다.</li>
 <li>{{jsxref("Statements/let", "let")}} 키워드로. 예를 들어, <code>let y = 13</code>. 이 구문은 블록 범위 지역 변수를 선언하는데 사용될 수 있습니다. 아래 <a href="/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#변수_범위">변수 범위</a> 참고하세요.</li>
</ul>

<p>간단히 변수에 값을 할당 할 수도 있습니다. 예를 들어, <code>x = 42 </code>와 같은 구문은 <strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#Description">선언되지 않는 전역변수 </a></strong>를 만듭니다. 뿐만 아니라, 자바스크립트의 엄격한 경고를 만들어냅니다. 선언되지 않은 전역변수는 의도되지 않은 동작을 만들어내고는 합니다. 따라서 선언되지 않는 전역변수를 사용하면 안됩니다.</p>

<h3 id="변수_할당">변수 할당</h3>

<p>지정된 초기값 없이 <code>var</code> 혹은 <code>let</code> 문을 사용해서 선언된 변수는 {{jsxref("undefined")}} 값을 갖습니다.</p>

<p>선언되지 않은 변수에 접근을 시도하는 경우 {{jsxref("ReferenceError")}} 예외가 발생합니다.</p>

<pre class="brush: js">var a;
console.log("a 값은 " + a); // "a 값은 undefined"로 로그가 남음.

console.log('b 값은 ' + b); // b 값은 undefined
var b;

console.log("c 값은 " + c); // ReferenceError 예외 던짐

let x;
console.log('x 값은 ' + x); // x 값은 undefined

console.log('y 값은 ' + y); // ReferenceError 예외 던짐
let y;
</pre>

<p><code>undefined</code>를 사용하여 변수값이 있는지 확인할 수 있습니다. 아래 코드에서, <code>input</code> 변수는 값이 할당되지 않았고 <code><a href="/ko/docs/Web/JavaScript/Reference/Statements/if...else">if</a></code>문은 <code>true</code>로 평가합니다.</p>

<pre class="brush: js">var input;
if(input === undefined) {
  doThis();
} else {
  doThat();
}
</pre>

<p><code>undefined</code> 값은 <code>boolean</code> 문맥(context)에서 사용될 때 <code>false</code>로 동작합니다. 예를 들어, 아래 코드는 <code>myArray</code> 요소가 <code>undefined</code>이므로 <code>myFunction</code> 함수를 실행합니다.</p>

<pre class="brush: js">var myArray = [];
if (!myArray[0]) myFunction();
</pre>

<p><code>undefined</code> 값은 수치 문맥에서 사용될 때 <code>NaN</code>으로 변환됩니다.</p>

<pre class="brush: js">var a;
a + 2; // NaN으로 평가</pre>

<p>{{jsxref("null")}} 값을 평가할 때, 수치 문맥에서는 0으로, <code>boolean</code> 문맥에서는 <code>false</code>로 동작합니다. 예를 들면,</p>

<pre class="brush: js">var n = null;
console.log(n * 32); // 콘솔에 0 으로 로그가 남음.
</pre>

<h3 id="변수_범위">변수 범위</h3>

<p>어떤 함수의 바깥에 변수를 선언하면, 현재 문서의 다른 코드에 해당 변수를 사용할 수 있기에 <em>전역</em> 변수라고 합니다. 만약 함수 내부에 변수를 선언하면, 오직 그 함수 내에서만 사용할 수 있기에 <em>지역</em> 변수라고 부릅니다.</p>

<p>ECMAScript 6 이전의 JavaScript는 <a href="/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Block_문">block 문</a> 범위가 없습니다. 그래서 오히려, 블록 내에 선언된 변수는 그 블록 내에 존재하는 <em>함수(혹은 전역 범위)</em>에 지역적입니다. 예를 들어서 아래의 코드는 5라는 로그를 남깁니다. <code>x</code>의 범위가 이 경우 <code>if</code>문 블록이 아니라 x가 선언된 함수(나 전역 문맥)이기 때문입니다.</p>

<pre class="brush: js">if (true) {
  var x = 5;
}
console.log(x); // 5
</pre>

<p>ECMAScript 6에 도입된 <code>let</code> 선언을 사용했을 때, 이 동작은 바뀌었습니다.</p>

<pre class="brush: js">if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y is not defined</pre>

<h3 id="변수_호이스팅">변수 호이스팅</h3>

<p>또 다른 JavaScript 변수의 특이한 점은 예외를 받지 않고도, 나중에 선언된 변수를 참조할 수 있다는 것입니다. 이 개념은 <strong>호이스팅</strong>(hoisting)으로 알려져 있습니다. 즉 JavaScript 변수가 어떤 의미에서 "끌어올려지거"나 함수나 문의 최상단으로 올려지는 것을 말합니다. 하지만, 끌어올려진 변수는 <code>undefined</code> 값을 반환합니다. 그래서 심지어 이 변수를 사용 혹은 참조한 후에 선언 및 초기화하더라도, 여전히 <code>undefined</code>를 반환합니다.</p>

<pre class="brush: js">/**
 * Example 1
 */
console.log(x === undefined); // logs "true"
var x = 3;


/**
 * Example 2
 */
// undefined 값을 반환함.
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
</pre>

<p>위 예제는 아래 예제와 동일하게 볼 수 있습니다.</p>

<pre class="brush: js">/**
 * Example 1
 */
var x;
console.log(x === undefined); // logs "true"
x = 3;

/**
 * Example 2
 */
var myvar = "my value";

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();</pre>

<p>호이스팅 때문에, 함수 내의 모든 <code>var</code> 문은 가능한 함수 상단 근처에 두는 것이 좋습니다. 이 방법은 코드를 더욱 명확하게 만들어줍니다.</p>

<p>ECMAScript 2015의 let (const)는 변수를 블록의 상단으로 올리지 않습니다.<br>
 변수가 선언되기 전에 블록 안에서 변수를 참조하게 되면 {{jsxref("ReferenceError")}}를 발생시키게 됩니다.<br>
 변수는 블록 시작부터 선언이 처리될 때까지 'temporal dead zone'에 위치하게 됩니다.</p>

<pre><code>console.log(x); // ReferenceError
let x = 3;</code>
</pre>

<h3 id="함수_호이스팅">함수 호이스팅</h3>

<p>함수에서는 단지 함수 선언만 상단으로 끌어올려집니다. 함수 표현식은 그렇지 않습니다.</p>

<pre class="brush: js">/* 함수 선언 */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* 함수 표현식 */

baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};</pre>

<h3 id="전역_변수">전역 변수</h3>

<p>전역 변수는 사실 <em>global 객체</em>의 속성(property)입니다. 웹 페이지에서 global 객체는 {{domxref("window")}} 이므로, <code>windows.<em>variable</em></code> 구문을 통해 전역 변수를 설정하고 접근할 수 있습니다.</p>

<p>그 결과, window 혹은 frame의 이름을 지정하여 한 window 혹은 frame에서 다른 window 혹은 frame에 선언된 전역 변수에 접근할 수 있습니다. 예를 들어, <code>phoneNumber</code> 라는 변수가 문서에 선언된 경우, iframe에서 <code>parent.phoneNumber</code>로 이 변수를 참조할 수 있습니다.</p>

<h2 id="상수">상수</h2>

<p>{{jsxref("Statements/const", "const")}} 키워드로 읽기 전용 상수를 만들 수 있습니다. 상수 식별자의 구문은 변수 식별자와 같습니다. 문자, 밑줄이나 달러 기호로 시작해야 하고 문자, 숫자나 밑줄을 포함할 수 있습니다.</p>

<pre class="brush: js">const PI = 3.14;
</pre>

<p>상수는 스크립트가 실행 중인 동안 대입을 통해 값을 바꾸거나 재선언될 수 없습니다. 값으로 초기화해야 합니다.</p>

<p>상수에 대한 범위 규칙은 <code>let</code> 블록 범위 변수와 동일합니다. 만약 <code>const</code> 키워드가 생략된 경우에는, 식별자는 변수를 나타내는 것으로 간주됩니다.</p>

<p>상수는 같은 범위에 있는 함수나 변수와 동일한 이름으로 선언할 수 없습니다. 예를 들어,</p>

<pre class="brush: js">// 오류가 발생합니다
function f() {};
const f = 5;

// 역시 오류가 발생합니다
function f() {
  const g = 5;
  var g;

  //statements
}
</pre>

<p>그러나, 상수에 할당된 객체의 속성은 보호되지 않아서 다음의 문은 문제없이 실행됩니다.</p>

<pre class="brush: js">const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';
</pre>

<p>또한, 배열의 내용도 보호되지 않아서 다음의 문도 문제없이 실행됩니다.</p>

<pre class="brush: js">const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
</pre>

<h2 id="데이터_구조_및_형">데이터 구조 및 형</h2>

<h3 id="데이터_형">데이터 형</h3>

<p>최신 ECMAScript 표준은 7가지 데이터 형을 정의합니다.</p>

<ul>
 <li>6가지 {{Glossary("Primitive", "원시")}} 데이터 형
  <ul>
   <li>{{Glossary("Boolean")}}. true와 false</li>
   <li>{{Glossary("null")}}. null 값을 나타내는 특별한 키워드. JavaScript는 대소문자를 구분하므로, null은 Null, NULL 혹은 다른 변형과도 다릅니다.</li>
   <li>{{Glossary("undefined")}}. 값이 저장되어 있지 않은 최상위 속성.</li>
   <li>{{Glossary("Number")}}. 정수 또는 실수형 숫자. 예:42 혹은 3.14159.</li>
   <li>{{Glossary("String")}}. 문자열. 예:"안녕"</li>
   <li>{{Glossary("Symbol")}}. (ECMAScript 6에 도입) 인스턴스가 고유하고 불변인 데이터 형.</li>
  </ul>
 </li>
 <li>그리고 {{Glossary("Object")}}</li>
</ul>

<p>이 데이터 형이 비교적 많지 않지만, 어플리케이션에 유용한 기능을 수행할 수 있습니다. {{jsxref("Object", "객체")}}와 {{jsxref("Function", "함수")}}는 언어의 다른 기본 요소입니다. 객체는 값을 위한 컨테이너, 함수는 어플리케이션이 수행할 수 있는 절차(procedure)로 생각할 수 있습니다.</p>

<h3 id="자료형_변환">자료형 변환</h3>

<p>JavaScript는 동적 형지정(정형) 언어입니다. 이는 변수를 선언할 때 데이터 형을 지정할 필요가 없음을 의미합니다. 또한 데이터 형이 스크립트 실행 도중 필요에 의해 자동으로 변환됨을 뜻합니다. 그래서, 예를 들어, 다음과 같이 변수를 정의할 수 있습니다.</p>

<pre class="brush: js">var answer = 42;</pre>

<p>그리고 나중에, 동일한 변수에 문자열 값을 할당할 수도 있습니다. 아래와 같이,</p>

<pre class="brush: js">answer = "Thanks for all the fish...";
</pre>

<p>JavaScript는 동적 형지정 언어이므로, 이 할당은 오류 메시지가 발생하지 않습니다.</p>

<p>숫자와 문자열 값 사이에 + 연산자를 포함한 식에서, JavaScript는 숫자 값을 문자열로 변환합니다. 예를 들어, 아래와 같은 문이 있습니다.</p>

<pre class="brush: js">x = "The answer is " + 42 // "The answer is 42"
y = 42 + " is the answer" // "42 is the answer"</pre>

<p>다른 연산자를 포함한 식의 경우, JavaScript는 숫자 값을 문자열로 변환하지 않습니다. 예를 들면,</p>

<pre class="brush: js">"37" - 7 // 30
"37" + 7 // 377
</pre>

<h3 id="문자열을_숫자로_변환하기">문자열을 숫자로 변환하기</h3>

<p>숫자를 나타내는 값이 문자열로 메모리에 있는 경우, 변환을 위한 메서드가 있습니다.</p>

<ul>
 <li>{{jsxref("parseInt", "parseInt()")}}</li>
 <li>{{jsxref("parseFloat", "parseFloat()")}}</li>
</ul>

<p><code>parseInt</code>는 오직 정수만 반환하므로, 소수에서는 사용성이 떨어집니다. 게다가 <code>parseInt</code>를 잘 사용하기 위해서는 항상 진법(Radix) 매개변수를 포함해야 합니다. 진법 매개변수는 변환에 사용될 진법을 지정하는데 사용됩니다.</p>

<p>문자열을 숫자로 변환하는 대안은 +(단항 더하기) 연산자입니다.</p>

<pre class="brush: js">"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// 참고: 괄호는 명확성을 위해 추가, 필요한 것은 아닙니다.
</pre>

<h2 id="리터럴">리터럴</h2>

<p>JavaScript에서 값을 나타내기 위해 리터럴을 사용합니다. 이는 말 그대로 스크립트에 부여한 고정값으로, 변수가 아닙니다. 이 절에서는 다음과 같은 형태의 리터럴을 설명합니다.</p>

<ul>
 <li>{{anch("배열_리터럴", "배열 리터럴")}}</li>
 <li>{{anch("불린_리터럴", "불린 리터럴")}}</li>
 <li>{{anch("부동_소수점_리터럴", "부동 소수점 리터럴")}}</li>
 <li>{{anch("정수", "정수")}}</li>
 <li>{{anch("객체_리터럴", "객체 리터럴")}}</li>
 <li>{{anch("정규식_리터럴", "정규식 리터럴")}}</li>
 <li>{{anch("문자열_리터럴", "문자열 리터럴")}}</li>
</ul>

<h3 id="배열_리터럴">배열 리터럴</h3>

<p>배열 리터럴은 0개 이상의 식(expression) 목록입니다. 각 식은 배열 요소를 나타내고 대괄호(<code>[]</code>)로 묶입니다. 배열 리터럴을 사용하여 배열을 만들 때, 그 요소로 지정된 값으로 초기화되고, 그 길이는 지정된 인수의 갯수로 설정됩니다.</p>

<p>아래 예제는 요소가 3개로 길이가 3인 coffees 배열을 만듭니다.</p>

<pre class="brush: js">var coffees = ["French Roast", "Colombian", "Kona"];
</pre>

<div class="note">
<p><strong>참고:</strong> 배열 리터럴은 일종의 객체 이니셜라이저(initialiizer)입니다. <a href="/ko/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers">Using Object Initializers</a> 참고.</p>
</div>

<p>배열이 최상단 스크립트에서 리터럴을 사용하여 만들어진 경우, JavaScript는 배열 리터럴을 포함한 식을 평가할 때마다 배열로 해석합니다. 게다가, 함수에서 사용되는 리터럴은 함수가 호출될 때마다 생성됩니다.</p>

<p>배열 리터럴은 배열 객체입니다. 배열 객체에 대한 자세한 내용은 {{jsxref("Array")}}와 <a href="/ko/docs/Web/JavaScript/Guide/Indexed_collections">Indexed collections</a> 참고.</p>

<h4 id="배열_리터럴의_추가_쉼표">배열 리터럴의 추가 쉼표</h4>

<p>배열 리터럴에서 모든 요소를 지정할 필요는 없습니다. 만약 잇달아 두 개의 쉼표를 두면, 배열은 지정되지 않은 요소를 <code>undefined</code>로 만듭니다. 다음 예제는 <code>fish</code> 배열을 만듭니다.</p>

<pre class="brush: js">var fish = ["Lion", , "Angel"];
</pre>

<p>이 배열은 값이 있는 두 요소와 빈 요소 하나를 가집니다(<code>fish[0]</code>은 "Lion", <code>fish[1]</code>은 <code>undefined</code>, <code>fish[2]</code>는 "Angel").</p>

<p>만약 요소 목록을 후행(trailing) 쉼표로 끝낸다면, 그 쉼표는 무시됩니다. 다음 예제에서, 배열의 길이는 3입니다. <code>myList[3]</code>은 없습니다. 목록의 다른 모든 쉼표는 새로운 요소를 나타냅니다.</p>

<div class="note">
<p><strong>참고:</strong> 후행 쉼표는 구버전 브라우저에서 오류를 유발할 수 있으므로 제거하는게 최선입니다.</p>
</div>

<pre class="brush: js">var myList = ['home', , 'school', ];
</pre>

<p>아래 예제에서, 배열의 길이는 4이며, <code>myList[0]</code>과 <code>myList[2]</code>는 값이 빠졌습니다.</p>

<pre class="brush: js">var myList = [ , 'home', , 'school'];
</pre>

<p>아래 예제에서, 배열의 길이는 4이며, <code>myList[1]</code>과 <code>myList[3]</code>은 값이 빠졌습니다. 마지막 쉼표는 무시됩니다.</p>

<pre class="brush: js">var myList = ['home', , 'school', , ];
</pre>

<p>추가 쉼표의 동작을 이해하는 것은 JavaScript를 언어로서 이해하는데 중요하지만, 코드를 작성할 때는 빠진 요소의 값을 명시적으로 undefined로 선언하는 것이 코드의 명확성과 유지보수성을 높입니다.</p>

<h3 id="불리언_리터럴">불리언 리터럴</h3>

<p>불리언 형은 <code>true</code>와 <code>false</code>의 리터럴 값을 가집니다.</p>

<p>원시 불린 값 <code>true</code> 및 <code>false</code>와 Boolean 객체의 true 및 false 값을 혼동하지 마세요. Boolean 객체는 원시 불린 데이터 형을 감싸는 래퍼(wrapper)입니다. 더 많은 정보는 {{jsxref("Boolean")}}을 참고하세요.</p>

<h3 id="정수_리터럴">정수 리터럴</h3>

<p>정수는 10진, 16진, 8진 및 2진수로 표현될 수 있습니다.</p>

<ul>
 <li>10진 정수 리터럴은 선행 0(zero)이 아닌 숫자열로 이루어집니다.</li>
 <li>정수 리터럴에서 선행 0(zero)이나 선행 0o(혹은 0O)은 8진수임을 나타냅니다. 8진 정수는 오직 숫자 0-7만 포함할 수 있습니다.</li>
 <li>선행 0x(나 0X)는 16진수임을 나타냅니다. 16진 정수는 숫자 0-9 및 문자 a-f, A-F를 포함할 수 있습니다.</li>
 <li>선행 0b(나 0B)는 2진수임을 나타냅니다. 2진 정수는 오직 숫자 0과 1만 포함할 수 있습니다.</li>
</ul>

<p>다음은 정수 리터럴 예제입니다.</p>

<pre class="eval">0, 117 및 -345 (10진수)
015, 0001 및 -0o77 (8진수)
0x1123, 0x00111 및 -0xF1A7 (16진수)
0b11, 0b0011 및 -0b11 (2진수)
</pre>

<p>더 많은 정보는 <a href="/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals">Lexical grammar reference의 Numeric literals</a>를 참고하세요.</p>

<h3 id="부동_소수점_리터럴">부동 소수점 리터럴</h3>

<p>부동 소수점 리터럴은 아래와 같은 부분으로 이루어집니다.</p>

<ul>
 <li>부호("+"나 "-")가 달릴 수 있는 10진 정수,</li>
 <li>소수점("."),</li>
 <li>소수(또 다른 10진수),</li>
 <li>지수.</li>
</ul>

<p>지수부는 "e"나 "E" 다음에 오며 부호("+"나 "-")가 달릴 수 있는 정수입니다. 부동 소수점 리터럴은 적어도 숫자 하나와 소수점 혹은 "e"(나 "E")가 있어야 합니다.</p>

<p>더 간결하게 설명하면, 구문은 다음과 같습니다.</p>

<pre class="eval">[(+|-)][digits][.digits][(E|e)[(+|-)]digits]
</pre>

<p>예를 들면,</p>

<pre class="eval">3.1415926
-.123456789
-3.1E+12
.1e-23
</pre>

<h3 id="객체_리터럴">객체 리터럴</h3>

<p>객체 리터럴은 중괄호({})로 묶인 0개 이상인 객체의 속성명과 관련 값 쌍 목록입니다. 문의 시작에 객체 리터럴을 사용해서는 안됩니다. 이는 {가 블록의 시작으로 해석되기 때문에 오류를 이끌거나 의도한 대로 동작하지 않습니다.</p>

<p>아래는 객체 리터럴의 예제입니다. <code>car</code> 객체의 첫째 요소는 <code>myCar</code> 속성을 정의하고 문자열 <code>"Saturn"</code>을 할당합니다. 반면 둘째 요소인 <code>getCar</code> 속성은 <code>function (carTypes("Honda"))</code>을 호출한 결과가 즉시 할당됩니다. 셋째 요소 <code>special</code> 속성은 기존 변수 <code>sales</code>를 사용합니다.</p>

<pre class="brush: js">var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {

  }
    return "Sorry, we don't sell " + name + ".";
}

var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
</pre>

<p>게다가, 속성명으로 숫자나 문자열 리터럴을 사용하거나 또다른 객체 리터럴 내부에 객체를 중첩할 수도 있습니다. 아래 예제는 이 옵션을 사용합니다.</p>

<pre class="brush: js">var car = { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
</pre>

<p>객체 속성명은 빈 문자열 포함 어떤 문자열도 될 수 있습니다. 속성명이 유효한 JavaScript {{Glossary("식별자")}}나 숫자가 아닌 경우, 따옴표로 묶여야 합니다. 또한 유효한 식별자가 아닌 속성명은 점(<code>.</code>) 속성으로 접근할 수 없습니다. 대신 배열 같은 표기법("<code>[]</code>")으로 접근하고 값을 설정할 수 있습니다.</p>

<pre class="bursh: js">var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}
console.log(unusualPropertyNames."");   // SyntaxError: Unexpected string
console.log(unusualPropertyNames[""]);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames["!"]); // Bang!
</pre>

<h4 id="향상된_객체_리터럴">향상된 객체 리터럴</h4>

<p>ES2015에서, 객체 리터럴은 구성에서 프로토타입 설정, foo: foo 할당을 위한 단축 표기, 메서드 정의, super 클래스 호출 및 식으로 동적인 속성명 계산을 지원하기 위해 확장됐습니다. 그에 따라 객체 리터럴 및 클래스 선언이 함께 더 가까워지고, 객체 기반 설계는 같은 일부 편의기능으로 득을 볼 수 있습니다.</p>

<pre class="bursh: js">var obj = {
    // __proto__
    __proto__: theProtoObj,
    // ‘handler: handler’의 단축 표기
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() =&gt; 42)() ]: 42
};</pre>

<p>아래를 참고하세요.</p>

<pre class="brush: js">var foo = {a: "alpha", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two
</pre>

<h3 id="정규식_리터럴">정규식 리터럴</h3>

<p>정규식 리터럴은 (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">정규식 상세</a>) 슬래시 사이에 감싸인 패턴입니다. 다음은 정규식 리터럴 예제입니다.</p>

<pre class="brush: js">var re = /ab+c/;</pre>

<h3 id="문자열_리터럴">문자열 리터럴</h3>

<p>문자열 리터럴은 큰 따옴표(<code>"</code>) 혹은 작은 따옴표(<code>'</code>)로 묶인 0개 이상의 문자입니다. 문자열은 같은 형 따옴표, 즉 큰 따옴표 쌍이나 작은 따옴표 쌍으로 구분되어야 합니다. 아래는 문자열 리터럴의 예제입니다.</p>

<pre class="brush: js">"foo"
'bar'
"1234"
"one line \n another line"
"John's cat"
</pre>

<p>문자열 리터럴 값은 문자열 객체의 모든 메서드를 호출할 수 있습니다. JavaScript는 자동으로 문자열 리터럴을 임시 문자열 객체로 변환, 메서드를 호출하고 나서 임시 문자열 객체를 폐기합니다. 또한 문자열 리터럴에서도 <code>String.length</code> 속성을 사용할 수 있습니다.</p>

<pre class="brush: js">console.log("John's cat".length)
// 공백을 포함한 문자열 내 심볼 갯수가 출력됩니다.
// 여기서는, 10.
</pre>

<p>ES2015에서는, 템플릿 리터럴도 사용할 수 있습니다. 템플릿 문자열은 문자열 구성을 위한 달콤한 구문을 제공합니다. 이는 Perl, Python 등에 있는 문자열 삽입(interpolation) 기능과 비슷합니다. 마음대로, 문자열 구성을 사용자 정의하고 인젝션 공격을 피하거나 문자열 콘텐츠로 더 고레벨 데이터 구조를 구성하기 위한 태그가 추가될 수 있습니다.</p>

<pre class="brush: js">// 기본적인 문자열 리터럴 생성
`In JavaScript '\n' is a line-feed.`

// 여러 줄 문자열
`In JavaScript this is
 not legal.`

// 문자열 삽입
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Construct an HTTP request prefix is used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&amp;b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);</pre>

<p>꼭 문자열 객체를 사용할 필요가 없는 경우 문자열 리터럴을 사용해야 합니다. 문자열 객체에 대해 자세한 사항은 {{jsxref("String")}}을 참고하세요.</p>

<h4 id="문자열에서_특수_문자_사용">문자열에서 특수 문자 사용</h4>

<p>보통 문자에 더해서, 문자열에 아래 예제와 같이 특수 문자도 포함할 수 있습니다.</p>

<pre class="brush: js">"one line \n another line"
</pre>

<p>다음 표는 JavaScript 문자열에 사용할 수 있는 특수 문자 목록입니다.</p>

<table>
 <caption>표: JavaScript 특수 문자</caption>
 <thead>
  <tr>
   <th scope="col">문자</th>
   <th scope="col">뜻</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>\0</code></td>
   <td>Null Byte</td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>Backspace</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>Form feed</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>New line</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>Carriage return</td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>Tab</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>Vertical tab</td>
  </tr>
  <tr>
   <td><code>\'</code></td>
   <td>Apostrophe 혹은 작은 따옴표</td>
  </tr>
  <tr>
   <td><code>\"</code></td>
   <td>큰 따옴표</td>
  </tr>
  <tr>
   <td><code>\\</code></td>
   <td>백슬래시</td>
  </tr>
  <tr>
   <td><code>\<em>XXX</em></code></td>
   <td>Latin-1 인코딩 문자는 0 - 377 사이 8진수 3자리까지 지정될 수 있습니다. 예를 들어, \251은 copyright 심볼을 표현하는 8진수 시퀀스입니다.</td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><code>\x<em>XX</em></code></td>
   <td>Latin-1 인코딩 문자는 00 - FF 사이의 16진수 2자리로 지정될 수 있습니다. 예를 들어, \xA9는 copyright 심볼을 표현하는 16진수 시퀀스입니다.</td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><code>\u<em>XXXX</em></code></td>
   <td>유니코드 문자는 16진수 4자리로 지정될 수 있습니다. 예를 들어, \u00A9는 copyright 심볼을 표현하는 유니코드 열입니다. <a href="/ko/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals">Unicode escape sequences</a>를 참고하세요.</td>
  </tr>
  <tr>
   <td><code>\u<em>{XXXXX}</em></code></td>
   <td>유니코드 코드 포인트 이스케이프. 예를 들어, \u{2F804}는 간단한 유니코드 이스케이프 \uD87E\uDC04와 같습니다.</td>
  </tr>
 </tbody>
</table>

<h4 id="문자_이스케이프">문자 이스케이프</h4>

<p>표에 없는 문자의 경우 전행 백슬래시는 무시되지만, 이 용법은 더 이상 사용되지 않으며, 사용을 피해야 합니다.</p>

<p>전행 백슬래시와 함께 문자열 안에 따옴표를 사용할 수 있습니다. 이것을 따옴표 <em>이스케이프</em>라고 합니다. 예를 들어,</p>

<pre class="brush: js">var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
</pre>

<p>이 코드의 결과는,</p>

<pre class="eval">He read "The Cremation of Sam McGee" by R.W. Service.
</pre>

<p>백슬래시를 문자열 내에 포함시키기 위해서는, 백슬래시 문자를 이스케이프 해야 합니다. 예를 들어, 파일 경로 <code>c:\temp</code>를 문자열에 할당하기 위해서는 아래와 같이 사용합니다.</p>

<pre class="brush: js">var home = "c:\\temp";
</pre>

<p>또한 줄바꿈 역시 전행 백슬래시로 이스케이프할 수 있습니다. 백슬래시와 줄바꿈 모두 문자열 값에서는 사라집니다.</p>

<pre class="brush: js">var str = "this string \
is broken \
across multiple\
lines."
console.log(str);   // this string is broken across multiplelines.
</pre>

<p>JavaScript에는 "heredoc" 구문은 없지만, 줄바꿈 이스케이프와 각 줄 끝 이스케이프된 줄바꿈을 추가하여 흉내낼 수 있습니다.</p>

<pre class="brush: js">var poem =
"Roses are red,\n\
Violets are blue.\n\
I'm schizophrenic,\n\
And so am I."
</pre>

<p>ECMAScript 2015에서는 템플릿 리터럴(<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings"><strong>template literals</strong></a>)이라는 새로운 리터럴이 소개되었습니다. 이 것은 다중 문자열을 포함한 많은 새로운 기능을 가지고 있습니다!</p>

<pre dir="rtl"><code>var poem =
`Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`</code>
</pre>

<h2 id="추가_정보">추가 정보</h2>

<p>이 장은 선언과 형에 대한 기본 구문에 초점을 맞춥니다. JavaScript 언어 구조에 대해 더 많이 배우려면, 다음 장을 참고하세요.</p>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling">흐름 제어와 오류 처리</a></li>
 <li><a href="/ko/docs/Web/JavaScript/Guide/Loops_and_iteration">루프와 반복</a></li>
 <li><a href="/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98">함수</a></li>
 <li><a href="/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators">식과 연산자</a></li>
</ul>

<p>다음 장에서는, 흐름 제어 구조와 오류 처리를 살핍니다.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/소개", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}</p>
