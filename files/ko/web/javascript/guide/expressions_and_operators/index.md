---
title: 표현식과 연산자
slug: Web/JavaScript/Guide/Expressions_and_Operators
tags:
  - Beginner
  - Expressions
  - Guide
  - JavaScript
  - Operators
  - 'l10n:priority'
  - 연산자
translation_of: Web/JavaScript/Guide/Expressions_and_Operators
---

<div>
  {{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions",
  "Web/JavaScript/Guide/Numbers_and_dates")}}
</div>

<p >
  이 장은 JavaScript의 표현식과 할당, 비교, 산술, 비트 계산, 논리, 문자열, 삼항 등 여러 가지 연산자를 설명합니다.
</p>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators">참고서</a>에서 구체적인 모든 연산자와 표현식의 목록도 확인할 수
  있습니다.
</p>

<h2 id="operators">연산자</h2>

<p>
  JavaScript에는 다음과 같은 유형의 연산자가 있습니다. 이 절에서는 각각의 연산자에 대해 설명하고, 연산자 우선순위에 관한
  정보를 제공합니다.
</p>

<ul>
  <li><a href="#assignment_operators">할당 연산자</a></li>
  <li><a href="#comparison_operators">비교 연산자</a></li>
  <li><a href="#arithmetic_operators">산술 연산자</a></li>
  <li><a href="#bitwise_operators">비트 연산자</a></li>
  <li><a href="#logical_operators">논리 연산자</a></li>
  <li><a href="#string_operators">문자열 연산자</a></li>
  <li><a href="#conditional_ternary_operator">조건 (삼항) 연산자</a></li>
  <li><a href="#comma_operator">쉼표 연산자</a></li>
  <li><a href="#unary_operators">단항 연산자</a></li>
  <li><a href="#relational_operators">관계 연산자</a></li>
</ul>

<p>
  JavaScript는 이항 연산자와 단항 연산자를 포함하며, 유일한 삼항 연산자로 조건 연산자도 가지고 있습니다. 이항 연산자는
  연산자의 앞과 뒤에 하나씩, 총 두 개의 피연산자가 필요합니다.
</p>

<pre class="brush: js">피연산자1 연산자 피연산자2</pre>

<p>이항 연산자의 예시로는 <code>3+4</code>와 <code>x*y</code>가 있습니다.</p>

<p>단항 연산자는 연산자의 앞이나 뒤에 하나의 피연산자가 필요합니다.</p>

<pre class="brush: js">연산자 피연산자</pre>

<p>또는</p>

<pre class="brush: js">피연산자 연산자</pre>

<p>단항 연산자의 예시로는 <code>x++</code> 또는 <code>++x</code>가 있습니다.</p>

<h3 id="assignment_operators">할당 연산자</h3>

<p>
  할당 연산자는 오른쪽 피연산자의 값을 왼쪽 피연산자에 할당합니다. 기본적인 할당 연산자는 오른쪽의 피연산자 값을 왼쪽
  피연산자 값에 할당하는 등호(<code>=</code>)로, <code>x = y</code> 는 <code>y</code>의 값을 <code>x</code>에
  할당합니다.
</p>

<p>아래의 표에서 볼 수 있듯, 연산과 할당을 동시에 수행하는 복합 할당 연산자도 존재합니다.</p>

<table class="standard-table">
  <caption>
    복합 할당 연산자
  </caption>
  <thead>
    <tr>
      <th>이름</th>
      <th>단축 연산자</th>
      <th>뜻</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Assignment">할당</a></td>
      <td><code>x = y</code></td>
      <td><code>x = y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment">더하기 할당</a></td>
      <td><code>x += y</code></td>
      <td><code>x = x + y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment">빼기 할당</a></td>
      <td><code>x -= y</code></td>
      <td><code>x = x - y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment">곱하기 할당</a></td>
      <td><code>x *= y</code></td>
      <td><code>x = x * y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Division_assignment">나누기 할당</a></td>
      <td><code>x /= y</code></td>
      <td><code>x = x / y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Remainder_assignment">나머지 할당</a></td>
      <td><code>x %= y</code></td>
      <td><code>x = x % y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment">거듭제곱 할당</a></td>
      <td><code>x **= y</code></td>
      <td><code>x = x ** y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment">왼쪽 시프트 할당</a></td>
      <td><code>x &lt;&lt;= y</code></td>
      <td><code>x = x &lt;&lt; y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment">오른쪽 시프트 할당</a></td>
      <td><code>x &gt;&gt;= y</code></td>
      <td><code>x = x &gt;&gt; y</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment"
          >부호 없는 오른쪽 시프트 할당</a
        >
      </td>
      <td><code>x &gt;&gt;&gt;= y</code></td>
      <td><code>x = x &gt;&gt;&gt; y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment">비트 AND 할당</a></td>
      <td><code>x &amp;= y</code></td>
      <td><code>x = x &amp; y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment">비트 XOR 할당</a></td>
      <td><code>x ^= y</code></td>
      <td><code>x = x ^ y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment">비트 OR 할당</a></td>
      <td><code>x |= y</code></td>
      <td><code>x = x | y</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment">논리 AND 할당</a></td>
      <td><code>x &amp;&amp;= y</code></td>
      <td><code>x &amp;&amp; (x = y)</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment">논리 OR 할당</a></td>
      <td><code>x ||= y</code></td>
      <td><code>x || (x = y)</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment">널 병합 할당</a></td>
      <td><code>x ??= y</code></td>
      <td><code>x ?? (x = y)</code></td>
    </tr>
  </tbody>
</table>

<h4 id="return_value_and_chaining">반환 값과 체이닝</h4>

<p>
  <code>x = y</code>와 같은 할당 역시 대부분의 표현식처럼 값을 반환합니다. 할당 연산자의 반환 값은 다른 할당 연산자나
  콘솔 기록 등을 통해 가져올 수 있습니다.
</p>

<pre class="brush: js">
const z = (x = y);  // const z = x = y와 같음

console.log(z);     // x = y 할당의 반환 값을 기록
console.log(x = y); // 또는 반환 값을 직접 기록
</pre>

<p>
  반환 값은 위쪽 표의 "뜻" 열에서 등호(<code>=</code>)의 오른쪽 표현식 값과 동일합니다. 즉 <code>(x = y)</code>는
  <code>y</code>를 반환하고, <code>(x += y)</code>는 <code>x + y</code>의 결과를, <code>(x **= y)</code>는
  <code>x ** y</code>의 결과를 반환합니다.
</p>

<p>
  논리 할당인 <code>(x &amp;&amp;= y)</code>, <code>(x ||= y)</code>, <code>(x ??= y)</code>의 경우에는 할당 부분을
  제외한 논리 연산의 결과를 반환합니다. 따라서 각각 <code>x &amp;&amp; y</code>, <code>x || y</code>,
  <code>x ?? y</code>의 결과를 반환합니다.
</p>

<p>반환 값은 <em>할당 전</em>의 값을 사용한 논리 연산의 결과임에 주의하세요.</p>

<p>
  할당 표현식 여러 개를 체이닝할 경우에는 각각의 할당을 <strong>오른쪽에서 왼쪽으로</strong> 평가합니다. 다음의 예제를
  봐주세요.
</p>

<ul>
  <li><code>w = z = x = y</code>는 <code>w = (z = (x = y))</code> 또는 <code>x = y; z = y; w = y</code>와 같습니다.</li>
  <li>
    <code>z += x *= y</code>는 <code>z += (x *= y)</code> 또는 <code>tmp = x * y; x *= y; z += tmp</code>와 같습니다.
    (<code>tmp</code>라는 변수를 새로 선언하지는 않습니다)
  </li>
</ul>

<h4 id="destructuring">구조 분해</h4>

<p>
  더 복잡한 할당에 사용할 수 있는
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">구조 분해 할당</a>은 배열 리터럴과 객체
  리터럴을 생성할 때와 비슷한 구문을 사용해서 배열과 객체에서 데이터를 추출할 수 있는 JavaScript 표현식입니다.
</p>

<pre class="brush: js">
var foo = ['one', 'two', 'three'];

// 구조 분해 미활용
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// 구조 분해 활용
var [one, two, three] = foo;
</pre>

<h3 id="comparison_operators">비교 연산자</h3>

<p>
  비교 연산자는 피연산자를 서로 비교하고, 비교 결과가 참인지에 따라 논리 값을 반환합니다. 피연산자로는 숫자, 문자열,
  논리형, 객체 값을 사용할 수 있습니다. 문자열은 Unicode 값을 사용한 표준 사전식 순서를 기반으로 비교합니다. 만약 두
  피연산자가 서로 다른 타입일 경우, JavaScript가 피연산자를 비교하기에 적합한 타입으로 변환하며, 대개 숫자로 변환해
  비교하는 결과를 낳습니다. 비교 연산에서 발생하는 타입 변환의 유일한 예외는
  <code>===</code>와 <code>!==</code> 연산자를 사용해 엄격 일치와 불일치 비교를 수행하는 경우입니다. 두 연산자는
  비교하기 전에 피연산자를 변환하려는 시도를 하지 않습니다. 다음과 같은 예제 변수 <code>var1</code>과
  <code>var2</code>를 가정할 때, 아래의 표에서 비교 연산자의 종류와, 각각 <code>true</code>를 반환하는 예제 코드를 볼 수
  있습니다.
</p>

<pre>
var var1 = 3;
var var2 = 4;
</pre>

<table class="standard-table">
  <caption>
    비교 연산자
  </caption>
  <thead>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">설명</th>
      <th scope="col"><code>true</code>를 반환하는 예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Equality">동등</a> (<code>==</code>)</td>
      <td>피연산자가 서로 같으면 <code>true</code>를 반환합니다.</td>
      <td>
        <code>3 == var1<br />"3" == var1<br />3 == '3'</code>
      </td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Inequality">부등</a> (<code>!=</code>)</td>
      <td>피연산자가 서로 다르면 <code>true</code>를 반환합니다.</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality">일치</a> (<code>===</code>)</td>
      <td>
        두 피연산자의 값과 타입이 모두 같은 경우 <code>true</code>를 반환합니다. {{jsxref("Object.is")}}와
        <a href="/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness">JavaScript에서의 같음</a>을 참고하세요.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Strict_inequality">불일치</a>
        (<code>!==</code>)
      </td>
      <td>피연산자의 값 또는 타입이 서로 다를 경우 <code>true</code>를 반환합니다.</td>
      <td>
        <code>var1 !== "3"<br />3 !== '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Greater_than">큼</a>
        (<code>&gt;</code>)
      </td>
      <td>왼쪽 피연산자가 오른쪽 피연산자보다 크면 <code>true</code>를 반환합니다.</td>
      <td>
        <code>var2 &gt; var1<br />"12" &gt; 2</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">크거나 같음</a>
        (<code>&gt;=</code>)
      </td>
      <td>왼쪽 피연산자가 오른쪽 피연산자와 같거나 크면 <code>true</code>를 반환합니다.</td>
      <td>
        <code>var2 &gt;= var1<br />var1 &gt;= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Less_than">작음</a>
        (<code>&lt;</code>)
      </td>
      <td>왼쪽 피연산자가 오른쪽 피연산자보다 작으면 <code>true</code>를 반환합니다.</td>
      <td>
        <code>var1 &lt; var2<br />"2" &lt; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">작거나 같음</a>
        (<code>&lt;=</code>)
      </td>
      <td>왼쪽 피연산자가 오른쪽 피연산자와 같거나 작으면 <code>true</code>를 반환합니다.</td>
      <td>
        <p>
          <code>var1 &lt;= var2<br />var2 &lt;= 5</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

<div class="note">
  <p>
    <strong>참고:</strong> <code>=&gt;</code>는 연산자가 아니라
    <a href="/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions">화살표 함수</a>의 표기법입니다.
  </p>
</div>

<h3 id="arithmetic_operators">산술 연산자</h3>

<p>
  산술 연산자는 두 개의 숫자 값(리터럴 또는 변수)을 피연산자로 받아서 하나의 숫자 값을 반환합니다. 표준 산술 연산자는
  더하기(<code>+</code>), 빼기(<code>-</code>), 곱하기(<code>*</code>), 나누기(<code>/</code>)입니다. 이 연산자들은
  대부분의 다른 프로그래밍 언어에서 부동소수점 값을 연산할 때와 동일하게 동작합니다. (0 으로 나눌 경우
  {{jsxref("Infinity")}}를 반환하는 것에 주의하세요) 예를 들어,
</p>

<pre class="brush: js">
1 / 2;              // 0.5
1 / 2 == 1.0 / 2.0; // 참
</pre>

<p>
  JavaScript는 표준 산술 연산자(<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) 외에도 아래의 표에
  나열된 산술 연산자를 제공합니다.
</p>

<table class="standard-table">
  <caption>
    산술 연산자
  </caption>
  <thead>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">설명</th>
      <th scope="col">예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Remainder">나머지</a>
        (<code>%</code>)
      </td>
      <td>이항 연산자입니다. 두 피연산자를 나눴을 때의 나머지를 반환합니다.</td>
      <td>12 % 5 는 2를 반환합니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Increment">증가</a>
        (<code>++</code>)
      </td>
      <td>
        단항 연산자입니다. 피연산자에 1을 더합니다. 전위 연산자(<code>++x</code>)로 사용하면 피연산자에 1을 더한 값을
        반환합니다. 반면 후위 연산자(<code>x++</code>)로 사용한 경우 피연산자에 1을 더하기 전의 값을 반환합니다.
      </td>
      <td>
        <code>x</code>가 3일 때, <code>++x</code>는 <code>x</code>에 4를 할당한 후 4를 반환합니다. 반면
        <code>x++</code>는 3을 먼저 반환한 후 <code>x</code>에 4를 할당합니다.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Decrement">감소</a>
        (<code>--</code>)
      </td>
      <td>단항 연산자입니다. 피연산자에서 1을 뺍니다. 반환 값은 증가 연산자처럼 동작합니다.</td>
      <td>
        <code>x</code>가 3일 때, <code>--x</code>는 <code>x</code>에 2를 할당한 후 2를 반환합니다. 반면
        <code>x--</code>는 3을 먼저 반환한 후 <code>x</code>에 2를 할당합니다.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation">단항 부정</a>
        (<code>-</code>)
      </td>
      <td>단항 연산자입니다. 피연산자의 부호를 반대로 바꾼 값을 반환합니다.</td>
      <td><code>x</code>가 3일 때, <code>-x</code>는 -3을 반환합니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus">단항 플러스</a>
        (<code>+</code>)
      </td>
      <td>단항 연산자입니다. 피연산자가 숫자 타입이 아니면 숫자로 변환을 시도합니다.</td>
      <td>
        <code>+"3"</code>은 <code>3</code>을 반환합니다.<br />
        <code>+true</code>는 <code>1</code>을 반환합니다.
      </td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation">거듭제곱</a> (<code>**</code>)</td>
      <td><code>base^exponent</code>, 즉 <code>base</code>를 <code>exponent</code>로 거듭제곱한 결과를 반환합니다.</td>
      <td>
        <code>2 ** 3</code>은 <code>8</code>을 반환합니다.<br />
        <code>10 ** -1</code>은 <code>0.1</code>을 반환합니다.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="bitwise_operators">비트 연산자</h3>

<p>
  비트 연산자는 피연산자를 10진수, 16진수, 8진수 숫자로 취급하지 않고, 대신 비트 32개의 집합으로 취급합니다. 예를 들어,
  10진수 9는 2진수 1001로 나타냅니다. 비트 연산자는 이러한 이진법 표현에 대해 연산을 수행하지만, 반환할 땐 JavaScript
  표준 숫자로 반환합니다.
</p>

<p>아래의 표에서 JavaScript 비트 연산자의 요약본을 볼 수 있습니다.</p>

<table class="standard-table">
  <caption>
    비트 연산자
  </caption>
  <thead>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">사용법</th>
      <th scope="col">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND">비트 AND</a>
      </td>
      <td><code>a &amp; b</code></td>
      <td>두 피연산자의 각 자리 비트의 값이 모두 1인 위치에 1을 반환합니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_OR">비트 OR</a>
      </td>
      <td><code>a | b</code></td>
      <td>두 피연산자의 각 자리 비트의 값이 모두 0인 위치에 0을 반환합니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR">비트 XOR</a>
      </td>
      <td><code>a ^ b</code></td>
      <td>
        두 피연산자의 각 자리 비트의 값이 서로 같은 위치에 0을 반환합니다.<br />
        [두 피연산자의 각 자리 비트의 값이 서로 다른 위치에 1을 반환합니다.]
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT">비트 NOT</a>
      </td>
      <td><code>~ a</code></td>
      <td>피연산자의 각 자리의 비트를 뒤집습니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Left_shift">왼쪽 시프트</a>
      </td>
      <td><code>a &lt;&lt; b</code></td>
      <td><code>a</code>의 이진 표현을 <code>b</code>만큼 왼쪽으로 이동하고, 오른쪽은 0으로 채웁니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Right_shift">오른쪽 시프트</a>
      </td>
      <td><code>a &gt;&gt; b</code></td>
      <td><code>a</code>의 이진 표현을 <code>b</code>만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">부호 없는 오른쪽 시프트</a>
      </td>
      <td><code>a &gt;&gt;&gt; b</code></td>
      <td>
        <code>a</code>의 이진 표현을 <code>b</code>만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다. 왼쪽은
        0으로 채웁니다.
      </td>
    </tr>
  </tbody>
</table>

<h4 id="bitwise_logical_operators">비트 논리 연산자</h4>

<p>개념적으로, 비트 논리 연산자는 다음과 같이 동작합니다.</p>

<ul>
  <li>
    두 피연산자를 32비트 정수로 변환해서 비트(0 과 1)의 연속으로 표현합니다. 숫자가 32비트를 초과할 경우 가장 큰
    비트부터 버립니다. 다음은 32비트가 넘는 정수의 변환 예제입니다.
    <pre>
전: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
후:                1010 0000 0000 0000 0110 0000 0000 0001
</pre
    >
  </li>
  <li>
    왼쪽 피연산자의 각 비트와 오른쪽 피연산자의 각 비트를 순서대로 쌍으로 만듭니다. 즉, 첫 비트는 첫 비트와, 두 번째
    비트는 두 번째 비트와, ... 32번째 비트는 32번째 비트와 짝을 짓습니다.
  </li>
  <li>연산자를 각각의 비트 쌍에 대해 적용한 결과를 비트 단위로 구축합니다.</li>
</ul>

<p>
  예를 들어, 9의 이진 표현은 1001이고, 15의 이진 표현은 1111입니다. 비트 연산자를 이 두 값에 적용했을 때의 결과는 다음과 같습니다.
</p>

<table class="standard-table">
  <caption>
    비트 연산자 예제
  </caption>
  <thead>
    <tr>
      <th scope="col">표현식</th>
      <th scope="col">결과</th>
      <th scope="col">이진법 설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>15 &amp; 9</code></td>
      <td><code>9</code></td>
      <td><code>1111 &amp; 1001 = 1001</code></td>
    </tr>
    <tr>
      <td><code>15 | 9</code></td>
      <td><code>15</code></td>
      <td><code>1111 | 1001 = 1111</code></td>
    </tr>
    <tr>
      <td><code>15 ^ 9</code></td>
      <td><code>6</code></td>
      <td><code>1111 ^ 1001 = 0110</code></td>
    </tr>
    <tr>
      <td><code>~15</code></td>
      <td><code>-16</code></td>
      <td><code>~ 0000 0000 ... 0000 1111 = 1111 1111 ... 1111 0000</code></td>
    </tr>
    <tr>
      <td><code>~9</code></td>
      <td><code>-10</code></td>
      <td><code>~ 0000 0000 ... 0000 1001 = 1111 1111 ... 1111 0110</code></td>
    </tr>
  </tbody>
</table>

<p>
  참고로, 비트 NOT 연산자를 사용하면 32개의 비트를 모두 반전하는데, 가장 큰 (맨 왼쪽) 비트가 1이면 음수를 나타냅니다(2의
  보수 표현법). <code>~x</code>는 <code>-x - 1</code>과 같은 값으로 평가됩니다.
</p>

<h4 id="bitwise_shift_operators">비트 시프트 연산자</h4>

<p>
  비트 시프트 연산자는 시프트를 적용할 값과, 시프트할 자릿수를 피연산자로 받습니다. 시프트 방향은 사용하는 연산자에 따라
  다릅니다.
</p>

<p>
  시프트 연산자는 피연산자를 32비트 정수로 변환하고, 결과 값을 {{jsxref("Number")}}나 {{jsxref("BigInt")}}로 반환합니다.
  정확히는, 왼쪽 피연산자가 <code>BigInt</code>면 <code>BigInt</code>를 반환하고, 그 외에는 <code>Number</code>를
  반환합니다.
</p>

<p>아래의 표에서 시프트 연산자의 종류를 볼 수 있습니다.</p>

<table class="standard-table">
  <caption>
    비트 시프트 연산자
  </caption>
  <thead>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">설명</th>
      <th scope="col">예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Left_shift">왼쪽 시프트 (<code>&lt;&lt;</code>)</a>
      </td>
      <td>
        왼쪽 피연산자를 오른쪽 피연산자만큼 왼쪽으로 시프트합니다. 왼쪽으로 넘치는 비트는 버리고, 오른쪽을 0으로
        채웁니다.
      </td>
      <td><code>9&lt;&lt;2</code>는, 1001을 왼쪽으로 2번 시프트하면 100100이므로 36입니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Right_shift">오른쪽 시프트 (<code>&gt;&gt;</code>)</a>
      </td>
      <td>
        왼쪽 피연산자를 오른쪽 피연산자만큼 오른쪽으로 시프트합니다. 오른쪽으로 넘치는 비트는 버리고, 왼쪽은 제일 큰
        비트의 값으로 채웁니다.
      </td>
      <td>
        <code>9&gt;&gt;2</code>는, 1001을 오른쪽으로 2번 시프트하면 10이므로 2입니다. 마찬가지로
        <code>-9&gt;&gt;2</code>는, 부호를 유지하므로 -3을 반환합니다.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift"
          >부호 없는 오른쪽 시프트 (<code>&gt;&gt;&gt;</code>)</a
        >
      </td>
      <td>
        왼쪽 피연산자를 오른쪽 피연산자만큼 오른쪽으로 시프트합니다. 오른쪽으로 넘치는 비트는 버리고, 왼쪽은 0으로
        채웁니다.
      </td>
      <td>
        <code>19&gt;&gt;&gt;2</code>는, 10011을 오른쪽으로 2번 시프트하면 100이므로 4입니다. 양의 수에 대해서는 오른쪽
        시프트와 부호 없는 오른쪽 시프트 둘 다 같은 결과를 반환합니다.
      </td>
    </tr>
  </tbody>
</table>

<h3 id="logical_operators">논리 연산자</h3>

<p>
  논리 연산자는 보통 불리언(논리) 값과 함께 사용해서 불리언 값을 반환합니다. 그러나
  <code>&amp;&amp;</code>와 <code>||</code> 연산자는 사실 두 피연산자 중 하나를 반환하는 것으로, 만약 둘 중 하나가
  불리언 값이 아니라면 논리 연산자의 반환 값도 불리언 값이 아닐 수 있습니다. 아래의 표에서 논리 연산자의 설명을 볼 수
  있습니다.
</p>

<table class="standard-table">
  <caption>
    논리 연산자
  </caption>
  <tbody>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">사용법</th>
      <th scope="col">설명</th>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_AND">논리 AND</a>
        (<code>&amp;&amp;</code>)
      </td>
      <td>
        <code>expr1 &amp;&amp; expr2</code>
      </td>
      <td>
        <code>expr1</code>을 <code>false</code>로 변환할 수 있으면 <code>expr1</code>을 반환합니다. 그 외의 경우에는
        <code>expr2</code>를 반환합니다. 따라서 불리언 값과 함께 사용한 경우, 둘 다 참일 때 <code>true</code>를, 그
        외에는 <code>false</code>를 반환합니다.
      </td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR">논리 OR</a> (<code>||</code>)</td>
      <td><code>expr1 || expr2</code></td>
      <td>
        <code>expr1</code>을 <code>true</code>로 변환할 수 있으면 <code>expr1</code>을 반환합니다. 그 외의 경우에는
        <code>expr2</code>를 반환합니다. 따라서 불리언 값과 함께 사용한 경우, 둘 중 하나가 참일 때 <code>true</code>를,
        그 외에는 <code>false</code>를 반환합니다.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_NOT">논리 NOT</a>
        (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        단일 피연산자를 <code>true</code>로 변환할 수 있으면 <code>false</code>를 반환합니다. 그 외에는
        <code>true</code>를 반환합니다.
      </td>
    </tr>
  </tbody>
</table>

<p>
  <code>false</code>로 변환할 수 있는 표현식은 평가 결과가 {{jsxref("null")}}, <code>0</code>, {{jsxref("NaN")}}, 빈
  문자열(<code>""</code>), {{jsxref("undefined")}}인 경우입니다.
</p>

<p>다음 코드는 <code>&amp;&amp;</code> (논리 AND) 연산자의 예제입니다.</p>

<pre class="brush: js">
var a1 =  true &amp;&amp; true;     // t &amp;&amp; t returns true
var a2 =  true &amp;&amp; false;    // t &amp;&amp; f returns false
var a3 = false &amp;&amp; true;     // f &amp;&amp; t returns false
var a4 = false &amp;&amp; (3 == 4); // f &amp;&amp; f returns false
var a5 = "Cat" &amp;&amp; "Dog";    // t &amp;&amp; t returns Dog
var a6 = false &amp;&amp; "Cat";    // f &amp;&amp; t returns false
var a7 = "Cat" &amp;&amp; false;    // t &amp;&amp; f returns false
</pre>

<p>다음 코드는 <code>||</code> (논리 OR) 연산자의 예제입니다.</p>

<pre class="brush: js">
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = "Cat" || "Dog";    // t || t returns Cat
var o6 = false || "Cat";    // f || t returns Cat
var o7 = "Cat" || false;    // t || f returns Cat
</pre>

<p>다음 코드는 <code>!</code> (논리 NOT) 연산자의 예제입니다.</p>

<pre class="brush: js">
var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !"Cat"; // !t returns false
</pre>

<h4 id="short-circuit_evaluation">단락 평가</h4>

<p>
  논리 연산자는 왼쪽에서 오른쪽의 순서로 평가하므로, 다음 규칙을 사용해서 "단락"(short-circuit) 평가가 가능한지
  판별합니다.
</p>

<ul>
  <li>
    <code>false &amp;&amp; <em>아무거나</em></code
    >는 거짓으로 단락 평가합니다.
  </li>
  <li>
    <code>true || <em>아무거나</em></code
    >는 참으로 단락 평가합니다.
  </li>
</ul>

<p>
  논리 규칙은 위의 단락 평가가 항상 옳음을 보증합니다. <em>아무거나</em> 부분의 표현식은 평가도 하지 않으므로, 해당
  표현식에서 유발하게 되는 부수 효과도 전혀 발생하지 않음에 주의하세요.
</p>

<p>
  참고로 <code>||</code>을 사용한 두 번째 단락 평가의 경우, 최근 코드에서는 새로운
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">널 병합 연산자</a>
  (<code>??</code>)를 사용할 수도 있습니다. 널 병합 연산자는 첫 번째 연산자가 "<a href="/ko/docs/Glossary/Nullish"
    >널과 유사</a
  >"한, 즉 {{jsxref("null")}}이거나 {{jsxref("undefined")}}일 때만 두 번째 피연산자를 반환합니다. <code>''</code>와
  <code>0</code>도 유효한 값이라면 널 병합 연산자가 기본 값을 나타낼 때 더 좋은 선택지입니다.
</p>

<h3 id="string_operators">문자열 연산자</h3>

<p>
  문자열에 사용할 수 있는 비교 연산자들 외에도, 문자열 연결(<code>+</code>) 연산자는 두 문자열의 값을 서로 연결한 새로운
  문자열을 반환합니다.
</p>

<p>예를 들어,</p>

<pre class="brush: js">console.log('나만의 ' + '문자열'); // 콘솔에 "나만의 문자열"을 기록</pre>

<p>단축 할당 연산자인 <code>+=</code> 또한 문자열을 연결결할 때 사용할 수 있습니다.</p>

<p>예를 들어,</p>

<pre class="brush: js">
var mystring = '한';
mystring += '글'; // "한글"로 평가되며, mystring에 "한글"을 할당함
</pre>

<h3 id="conditional_ternary_operator">조건 (삼항) 연산자</h3>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">조건 연산자</a>는 JavaScript에서 세 개의
  피연산자를 받는 유일한 연산자입니다. 조건 연산자는 주어진 조건에 따라 두 값 중 하나를 반환합니다. 구문은 다음과
  같습니다.
</p>

<pre class="brush: js">condition ? val1 : val2</pre>

<p>
  만약 <code>condition</code>이 참이라면, 조건 연산자는 <code>val1</code>을 반환하고, 그 외에는 <code>val2</code>를
  반환합니다. 다른 연산자를 사용할 수 있는 곳이라면 조건 연산자도 사용할 수 있습니다.
</p>

<p>에들 들어,</p>

<pre class="brush: js">
var status = (age &gt;= 18) ? "성인" : "미성년자";
</pre>

<p>
  위의 명령문은 <code>age</code>가 18 이상이라면 <code>status</code> 변수에 "성인"을 할당하고, 그렇지 않으면
  "미성년자"를 할당합니다.
</p>

<h3 id="comma_operator">쉼표 연산자</h3>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/Comma_Operator">쉼표 연산자</a>(<code>,</code>)는 두 피연산자를
  모두 평가하고, 오른쪽 피연산자의 값을 반환합니다. 쉼표 연산자는 주로 <code>for</code> 반복문 안에서 사용해서 한 번의
  반복으로 다수의 변수를 변경할 때 사용합니다. 그 외의 상황에 사용하는 것은, 꼭 필요하지 않다면 좋지 않은 코드 스타일로
  여겨집니다. 대개 쉼표 연산자보다는 두 개의 분리된 명령문을 사용하는 편이 낫습니다.
</p>

<p>
  쉼표 연산자의 예제로는, <code>a</code>가 2차원 배열로서 10행 10열의 요소를 가지고 있다면, 다음 코드는 쉼표 연산자를
  사용해서 두 개의 변수를 한꺼번에 업데이트하는 모습을 보입니다. 코드의 실행 결과는 <code>a</code>의 요소를 대각선((0,
  0), (1, 1), (2, 2), ...)으로 출력한 것입니다.
</p>

<pre class="brush: js">
var x = [0,1,2,3,4,5,6,7,8,9];
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i &lt;= j; i++, j--);
//                                   ^
  console.log('a[' + i + '][' + j + ']= ' + a[i][j])
</pre>

<h3 id="unary_operators">단항 연산자</h3>

<p>단항 연산은 오직 하나의 피연산자만 사용하는 연산입니다.</p>

<h4 id="delete"><code>delete</code></h4>

<p>
  <code><a href="/ko/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code
  >연산자는 객체의 속성을 삭제합니다. 구문은 다음과 같습니다.
</p>

<pre class="brush: js">
delete object.property;
delete object[propertyKey];
delete objectName[index];
</pre>

<p>
  위의 구문에서, <code>objectName</code>은 객체의 이름이고, <code>property</code>는 객체에 존재하는 속성,
  <code>propertyKey</code>는 존재하는 속성을 가리키는 문자열이나 심볼입니다.
</p>

<p>
  <code>delete</code> 연산자가 속성을 성공적으로 삭제한 이후, 해당 속성을 접근하려고 하면 <code>undefined</code>가
  반환됩니다. <code>delete</code>는 속성을 제거할 수 있는 경우에는 <code>true</code>를 반환하고, 제거할 수 없을 땐
  <code>false</code>를 반환합니다.
</p>

<pre class="brush: js">
delete Math.PI;     // false 반환 (설정 불가한 속성 삭제 불가)

var myobj = {h: 4};
delete myobj.h;     // true 반환 (사용자 정의 속성 삭제 가능)
</pre>

<h5 id="deleting_array_elements">배열의 원소 삭제하기</h5>

<p>
  배열도 평범한 객체이므로, 기술적으로는 <code>delete</code>를 사용해서 요소를 제거하는 것이 가능합니다. 그러나 이는
  좋은 방법이 아니므로 피해야 합니다. 배열의 속성을 제거해도 배열 길이 속성은 영향을 받지 않으며, 다른 요소의 인덱스도
  그대로 남아있습니다. 이런 동작을 원한다면 단순히 값을 <code>undefined</code>로 덮어쓰는 편이 훨씬 낫습니다. 실제로
  배열을 변형하고자 하면 {{jsxref("Array.splice", "splice")}}와 같은 다양한 배열 메서드를 사용하세요.
</p>

<h4 id="typeof"><code>typeof</code></h4>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/typeof"><code>typeof</code> 연산자</a>는 다음과 같은 방법으로
  사용합니다.
</p>

<pre class="brush: js">
typeof operand
typeof (operand)
</pre>

<p>
  <code>typeof</code> 연산자는 평가 전의 피연산자 타입을 나타내는 문자열을 반환합니다. <code>operand</code>는 문자열,
  변수, 키워드, 객체 등 타입을 알아낼 값입니다. 주위의 괄호는 선택 사항입니다.
</p>

<p>다음과 같은 변수를 가정하겠습니다.</p>

<pre class="brush: js">
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();
</pre>

<p><code>typeof</code> 연산자는 위의 변수들에 대해서 다음과 같은 값을 반환합니다.</p>

<pre class="brush: js">
typeof myFun;     // "function" 반환
typeof shape;     // "string" 반환
typeof size;      // "number" 반환
typeof foo;       // "object" 반환
typeof today;     // "object" 반환
typeof dontExist; // "undefined" 반환
</pre>

<p>키워드 <code>true</code>와 <code>null</code>에 대해서는 다음과 같은 결과를 반환합니다.</p>

<pre class="brush: js">
typeof true; // "boolean" 반환
typeof null; // "object" 반환
</pre>

<p>숫자와 문자열에서는 다음과 같은 결과를 반환합니다.</p>

<pre class="brush: js">
typeof 62;            // "number" 반환
typeof 'Hello world'; // "string" 반환
</pre>

<p>객체의 속성에 사용하면 속성이 갖고 있는 값의 타입을 반환합니다.</p>

<pre class="brush: js">
typeof document.lastModified; // "string" 반환
typeof window.length;         // "number" 반환
typeof Math.LN2;              // "number" 반환
</pre>

<p>메서드와 함수에 대해선 다음과 같은 결과를 반환합니다.</p>

<pre class="brush: js">
typeof blur;        // "function" 반환
typeof eval;        // "function" 반환
typeof parseInt;    // "function" 반환
typeof shape.split; // "function" 반환
</pre>

<p>사전 정의된 객체에 대해선 다음과 같은 결과를 반환합니다.</p>

<pre class="brush: js">
typeof Date;     // "function" 반환
typeof Function; // "function" 반환
typeof Math;     // "object" 반환
typeof Option;   // "function" 반환
typeof String;   // "function" 반환
</pre>

<h4 id="void"><code>void</code></h4>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/void"><code>void</code> 연산자</a>는 다음과 같이 사용합니다.
</p>

<pre class="brush: js">
void (expression)
void expression
</pre>

<p>
  <code>void</code> 연산자는 표현식을 평가할 때 값을 반환하지 않도록 지정합니다. <code>expression</code>은 평가할
  JavaScript 표현식입니다. 주위 괄호는 선택 사항이지만, 사용하면 좋습니다.
</p>

<h3 id="relational_operators">관계 연산자</h3>

<p>관계 연산자는 피연산자를 서로 비교하고, 비교 결과가 참인지에 따라 불리언 값을 반환합니다.</p>

<h4 id="in"><code>in</code></h4>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> 연산자</a>는 지정한 속성이 지정한 객체에
  존재할 경우 <code>true</code>를 반환합니다. 구문은 다음과 같습니다.
</p>

<pre class="brush: js">propNameOrNumber in objectName</pre>

<p>
  <code>propNameOrNumber</code>는 속성이나 배열 인덱스를 나타내는 문자열, 숫자, 심볼 표현식이며
  <code>objectName</code>은 객체의 이름입니다.
</p>

<p>다음 코드는 <code>in</code> 연산자의 예제입니다.</p>

<pre class="brush: js">
// 배열
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees;        // true 반환
3 in trees;        // true 반환
6 in trees;        // false 반환
"bay" in trees;    // false 반환 (인덱스에 위치한 값이 아니라
                   // 인덱스 자체를 지정해야 함)
"length" in trees; // true 반환 (length는 Array의 속성임)

// 내장 객체
"PI" in Math;          // true 반환
var myString = new String("coral");
"length" in myString;  // true 반환

// 사용자 정의 객체
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar;  // true 반환
"model" in mycar; // true 반환
</pre>

<h4 id="instanceof"><code>instanceof</code></h4>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code> 연산자</a>는 지정한 객체가
  지정한 객체 타입에 속하면 <code>true</code>를 반환합니다.
</p>

<pre class="brush: js">objectName instanceof objectType</pre>

<p>
  <code>objectName</code>은 <code>objectType</code>과 비교할 객체의 이름이고, <code>objectType</code>은
  {{jsxref("Date")}}, {{jsxref("Array")}}와 같은 객체 타입입니다.
</p>

<p>
  런타임에 객체의 타입을 확인할 필요가 있으면 <code>instanceof</code> 연산자를 사용하세요. 예컨대 예외 처리 시에, 잡아낸
  예외의 타입에 따라 다른 방법으로 처리할 수 있습니다.
</p>

<p>
  다음의 코드는 <code>instanceof</code> 연산자를 사용해서 <code>theDay</code> 객체가 <code>Date</code> 객체인지 알아내는
  예제입니다. <code>theDay</code> 객체는 <code>Date</code> 객체이기 때문에, <code>if</code> 명령문 안의 내용이
  실행됩니다.
</p>

<pre class="brush: js">
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // 실행할 명령문
}
</pre>

<h3 id="Operator_precedence">연산자 우선순위</h3>

<p>
  연산자의 우선순위는 표현식을 평가할 때 연산자를 적용하는 순서를 결정합니다. 괄호를 사용하면 우선순위를 바꿀 수
  있습니다.
</p>

<p>아래 표는 우선순위가 높은 순서에서 낮은 순서로 연산자를 나열합니다.</p>

<table class="standard-table">
  <caption>
    연산자 우선순위
  </caption>
  <thead>
    <tr>
      <th scope="col">연산자 유형</th>
      <th scope="col">개별 연산자</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>맴버 접근</td>
      <td><code>. []</code></td>
    </tr>
    <tr>
      <td>인스턴스 호출/생성</td>
      <td><code>() new</code></td>
    </tr>
    <tr>
      <td>증감</td>
      <td><code>! ~ - + ++ -- typeof void delete</code></td>
    </tr>
    <tr>
      <td>곱하기/나누기 연산자</td>
      <td><code>* / %</code></td>
    </tr>
    <tr>
      <td>더하기/빼기 연산자</td>
      <td><code>+ -</code></td>
    </tr>
    <tr>
      <td>비트 시프트</td>
      <td><code>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</code></td>
    </tr>
    <tr>
      <td>관계</td>
      <td><code>&lt; &lt;= &gt; &gt;= in instanceof</code></td>
    </tr>
    <tr>
      <td>동등/일치</td>
      <td><code>== != === !==</code></td>
    </tr>
    <tr>
      <td>비트 AND</td>
      <td><code>&amp;</code></td>
    </tr>
    <tr>
      <td>비트 XOR</td>
      <td><code>^</code></td>
    </tr>
    <tr>
      <td>비트 OR</td>
      <td><code>|</code></td>
    </tr>
    <tr>
      <td>논리 AND</td>
      <td><code>&amp;&amp;</code></td>
    </tr>
    <tr>
      <td>논리 OR</td>
      <td><code>||</code></td>
    </tr>
    <tr>
      <td>조건</td>
      <td><code>?:</code></td>
    </tr>
    <tr>
      <td>할당</td>
      <td>
        <code>= += -= *= /= %= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;= &amp;= ^= |= &amp;&amp;= ||= ??= </code>
      </td>
    </tr>
    <tr>
      <td>쉼표</td>
      <td><code>,</code></td>
    </tr>
  </tbody>
</table>

<p>
  각각의 연산자로 향하는 링크를 포함한 더 자세한 표는
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#ㅅable">JavaScript 참고서</a>에서 찾을 수
  있습니다.
</p>

<h2 id="expressions">표현식</h2>

<p><b>표현식</b>이란 값으로 이행하는 임의의 유효한 코드 단위를 말합니다.</p>

<p>
  구문적으로 유효한 표현식은 모두 어떤 값으로 이행하지만, 개념적으로는 두 가지로 나뉩니다. 하나는 부수 효과가 있는(예시:
  변수에 값을 할당) 표현식이고, 다른 하나는 평가하면 어떤 값으로 이행하는 표현식입니다.
</p>

<p>
  <code>x = 7</code>은 앞의 범주에 포함됩니다. 이 표현식은 <code>=</code> 연산자를 사용해서 값 7을 <code>x</code> 변수에
  할당합니다. 표현식 자체도 7로 평가됩니다.
</p>

<p>
  <code>3 + 4</code>는 뒤쪽 범주로 들어갑니다. 이 표현식은 <code>+</code> 연산자를 사용해서 3과 4를 더하지만, 결과인 7을
  변수에 할당하지는 않습니다.
</p>

<p>JavaScript의 표현식은 다음과 같은 범주로 구분할 수 있습니다.</p>

<ul>
  <li>산수: 숫자, 예컨대 3.14159로 평가됩니다. 보통 <a href="#arithmetic_operators">산술 연산자</a>를 사용합니다.</li>
  <li>
    문자열: 문자열, 예컨대 "프레디", "234" 등으로 평가됩니다. 보통 <a href="#string_operators">문자열 연산자</a>를
    사용합니다.
  </li>
  <li>논리: 참이나 거짓으로 평가됩니다. 대개 <a href="#logical_operators">논리 연산자</a>를 포함합니다.</li>
  <li>일차 표현식: JavaScript의 키워드와 일반 표현식입니다.</li>
  <li>좌변 표현식: 좌변 값은 할당의 목적지입니다.</li>
</ul>

<h3 id="primary_expressions">일차 표현식</h3>

<p>JavaScript의 키워드와 일반 표현식입니다.</p>

<h4 id="this"><code>this</code></h4>

<p>
  현재 객체를 참조하려면
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/this"><code>this</code> 키워드</a>를 사용하세요. 일반적으로
  <code>this</code>는 메서드의 호출 객체를 참조합니다. 다음과 같이, <code>this</code>를 점이나 대괄호 표기법과 함께
  사용하세요.
</p>

<pre class="brush: js">
this['propertyName']
this.propertyName
</pre>

<p>
  최대와 최소 값을 받아서, 어떤 객체의 <code>value</code> 속성 유효성을 검증하는 <code>validate</code>라는 함수를
  가정해봅시다.
</p>

<pre class="brush: js">
function validate(obj, lowval, hival) {
  if ((obj.value &lt; lowval) || (obj.value &gt; hival))
    console.log("Invalid Value!");
}
</pre>

<p>
  다음과 같이, 각 양식 요소의 {{domxref("GlobalEventHandlers/onchange", "onchange")}} 이벤트 처리기에서
  <code>validate</code>를 호출할 때 <code>this</code>를 사용해서 양식 요소의 참조를 제공할 수 있습니다.
</p>

<pre class="brush: html">
&lt;p&gt;18과 99 사이의 수를 입력:&lt;/p&gt;
&lt;input type="text" name="age" size=3 onchange="validate(this, 18, 99);"&gt;
</pre>

<h4 id="grouping_operator">그룹 연산자</h4>

<p>
  그룹연산자 <code>()</code>는 표현식 평가의 우선순위를 조절합니다. 예를 들어, 곱하기와 나누기보다 더하기와 빼기 연산을
  먼저 수행할 수 있습니다.
</p>

<pre class="brush:js">
var a = 1;
var b = 2;
var c = 3;

// 기본 우선순위에서는
a + b * c;     // 7
// 이런 순서로 평가함
a + (b * c);   // 7

// 우선순위 재정의
// 곱하기보다 더하기를 먼저 수행
(a + b) * c;   // 9

// ...하면 아래와 같음
a * c + b * c; // 9
</pre>

<h3 id="left-hand-side_expressions">좌변 표현식</h3>

<p>좌변 값은 할당의 목적지입니다.</p>

<h4 id="new"><code>new</code></h4>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> 연산자</a>를 사용하면 사용자 정의 객체
  타입이나 내장 객체 타입의 인스턴스를 생성할 수 있습니다. 아래 코드처럼 사용하세요.
</p>

<pre class="brush: js">
var objectName = new objectType([param1, param2, ..., paramN]);
</pre>

<h4 id="super">super</h4>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/super">super 키워드</a>는 객체의 부모가 가진 함수를 호출할 때
  사용합니다. 예를 하나 들면, <a href="/ko/docs/Web/JavaScript/Reference/Classes">클래스</a>에서 부모의 생성자를
  호출해야 할 때 유용하게 쓸 수 있습니다.
</p>

<pre class="brush: js">
super([arguments]); // 부모 생성자 호출
super.functionOnParent([arguments]);
</pre>

<div>{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}</div>
