---
title: 연산자 우선순위
slug: Web/JavaScript/Reference/Operators/Operator_Precedence
tags:
  - JavaScript
  - Operator
  - 연산자
  - 우선순위
translation_of: Web/JavaScript/Reference/Operators/Operator_Precedence
original_slug: Web/JavaScript/Reference/Operators/연산자_우선순위
---
<div>{{jsSidebar("Operators")}}</div>

<p><strong>연산자 우선순위</strong>는 연산자를 실행하는 순서를 결정합니다. 우선순위가 높은 연산자가 먼저 실행됩니다.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}</div>



<h2 id="우선순위와_결합성">우선순위와 결합성</h2>

<p>아래와 같이 표현할 수 있는 표현식을 생각해 봅시다. 연산자1과 연산자2의 자리에는 아무 연산자를 넣을 수 있습니다.</p>

<pre class="syntaxbox">a 연산자1 b 연산자2 c</pre>

<p>두 연산자의 우선순위(아래 표 참조)가 다를 경우, 우선순위가 높은 연산자가 먼저 실행되고 결합성은 영향을 미치지 않습니다. 아래 예제에서는 덧셈이 곱셈보다 먼저 쓰였음에도 곱셈의 우선순위가 높기 때문에 먼저 실행됩니다.</p>

<pre class="brush: js">console.log(3 + 10 * 2);   // 23을 출력
console.log(3 + (10 * 2)); // 23을 출력, 괄호는 불필요함
console.log((3 + 10) * 2); // 26을 출력, 괄호로 인해 실행 순서가 바뀜
</pre>

<p>좌결합성(왼쪽에서 오른쪽으로)은 표현식이 <code>(a 연산자1 b) 연산자2 c</code>와 같이, 우결합성(오른쪽에서 왼쪽으로)은 <code>a 연산자1 (b 연산자2 c)</code>와 같이 계산된다는 의미입니다. 대입 연산자는 우결합성이므로 다음과 같은 코드를 작성할 수 있습니다.</p>

<pre class="brush: js">a = b = 5; // a = (b = 5);와 같음
</pre>

<p>이때 대입 연산자는 대입된 값을 반환하므로 <code>a</code>와 <code>b</code>의 값이 5가 됨을 예상할 수 있습니다. 우선 <code>b</code>의 값이 5로 설정되고, 그 다음에는 <code>a</code>의 값이 우변인 <code>b = 5</code>의 반환값 5로 설정됩니다.</p>

<p>다른 예시로, 좌결합성인 다른 산술 연산자와 달리 거듭제곱 연산자 (<code>**</code>)만은 우결합성입니다. 흥미로운 점으로 표현식의 평가는 결합성과 무관하게 항상 왼쪽에서 오른쪽으로 진행됩니다.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td>코드</td>
   <td>출력</td>
  </tr>
  <tr>
   <td>
    <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 나눗셈 연산자 (/)에 주목
console.log(echo("첫째", 6) / echo("둘째", 2));
</pre>
   </td>
   <td>
    <pre>
첫째 항 평가함
둘째 항 평가함
3
</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 거듭제곱 연산자 (**)에 주목
console.log(echo("첫째", 2) ** echo("둘째", 3));</pre>
   </td>
   <td>
    <pre>
첫째 항 평가함
둘째 항 평가함
8</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>여러 연산자의 우선순위가 같을 때는 결합성을 고려합니다. 위에서와 같이 연산자가 하나이거나 연산자끼리 우선순위가 다를 경우에는 결합성이 결과에 영향을 미치지 않습니다. 아래의 예제에서 같은 종류의 연산자를 여러 번 사용했을 때 결합성이 결과에 영향을 미치는 것을 확인할 수 있습니다.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td>코드</td>
   <td>출력</td>
  </tr>
  <tr>
   <td>
    <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 나눗셈 연산자 (/)에 주목
console.log(echo("첫째", 6) / echo("둘째", 2) / echo("셋째", 3));
</pre>
   </td>
   <td>
    <pre>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
1
</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 거듭제곱 연산자 (**)에 주목
console.log(echo("첫째", 2) ** echo("둘째", 3) ** echo("셋째", 2));
</pre>
   </td>
   <td>
    <pre>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
512
</pre>
   </td>
  </tr>
  <tr>
   <td>
    <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 첫 번째 거듭제곱 연산자 주변의 괄호에 주목
console.log((echo("첫째", 2) ** echo("둘째", 3)) ** echo("셋째", 2));</pre>
   </td>
   <td>
    <pre>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
64</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>위의 예제에서 나눗셈은 좌결합성이므로 <code>6 / 3 / 2</code>는 <code>(6 / 3) / 2</code>와 같습니다. 한편 거듭제곱은 우결합성이므로 <code>2 ** 3 ** 2</code>는 <code>2 ** (3 ** 2)</code>와 같습니다. 그러므로 <code>(2 ** 3) ** 2</code>는 괄호로 인해 실행 순서가 바뀌기 때문에 위 표와 같이 64로 평가됩니다.</p>

<p>우선순위는 결합성보다 항상 우선하므로, 거듭제곱과 나눗셈을 같이 사용하면 나눗셈보다 거듭제곱이 먼저 계산됩니다. 예를 들어 <code>2 ** 3 / 3 ** 2</code>는 <code>(2 ** 3) / (3 ** 2)</code>와 같으므로 0.8888888888888888로 계산됩니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">3 &gt; 2 &amp;&amp; 2 &gt; 1
// true를 반환

3 &gt; 2 &gt; 1
// 3 &gt; 2는 true인데, 부등호 연산자에서 true는 1로 변환되므로
// true &gt; 1은 1 &gt; 1이 되고, 이는 거짓이다.
// 괄호를 추가하면 (3 &gt; 2) &gt; 1과 같다.</pre>

<h2 id="표">표</h2>

<p>다음 표는 우선순위 내림차순(21부터 1까지)으로 정렬되어 있습니다.</p>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>우선순위</th>
   <th>연산자 유형</th>
   <th>결합성</th>
   <th>연산자</th>
  </tr>
  <tr>
   <td>21</td>
   <td>{{jsxref("Operators/Grouping", "그룹", "", 1)}}</td>
   <td>없음</td>
   <td><code>( … )</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="5">20</td>
   <td>{{jsxref("Operators/Property_Accessors", "멤버 접근", "#점_표기법", 1)}}</td>
   <td>좌결합성</td>
   <td><code>… . …</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/Property_Accessors", "계산된 멤버 접근","#괄호_표기법", "1")}}</td>
   <td>좌결합성</td>
   <td><code>… [ … ]</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/new","new")}} (매개변수 리스트 존재)</td>
   <td>없음</td>
   <td><code>new … ( … )</code></td>
  </tr>
  <tr>
   <td>
    <p><a href="/ko/docs/Web/JavaScript/Guide/Functions">함수 호출</a></p>
   </td>
   <td>좌결합성</td>
   <td><code>… ( <var>… </var>)</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining">Optional chaining</a></td>
   <td>좌결합성</td>
   <td><code>?.</code></td>
  </tr>
  <tr>
   <td rowspan="1">19</td>
   <td>{{jsxref("Operators/new","new")}} (매개변수 리스트 생략)</td>
   <td>우결합성</td>
   <td><code>new …</code></td>
  </tr>
  <tr>
   <td rowspan="2">18</td>
   <td>{{jsxref("Operators/Arithmetic_Operators","후위 증가","#Increment", 1)}}</td>
   <td colspan="1" rowspan="2">없음</td>
   <td><code>… ++</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/Arithmetic_Operators","후위 감소","#Decrement", 1)}}</td>
   <td><code>… --</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="10">17</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT">논리 NOT</a></td>
   <td colspan="1" rowspan="10">우결합성</td>
   <td><code>! …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT">비트 NOT</a></td>
   <td><code>~ …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus">단항 양부호</a></td>
   <td><code>+ …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation">단항 부정</a></td>
   <td><code>- …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment">전위 증가</a></td>
   <td><code>++ …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement">전위 감소</a></td>
   <td><code>-- …</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/typeof", "typeof")}}</td>
   <td><code>typeof …</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/void", "void")}}</td>
   <td><code>void …</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/delete", "delete")}}</td>
   <td><code>delete …</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/await", "await")}}</td>
   <td><code>await …</code></td>
  </tr>
  <tr>
   <td>16</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation">거듭제곱</a></td>
   <td>우결합성</td>
   <td><code>… ** …</code></td>
  </tr>
  <tr>
   <td rowspan="3">15</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication">곱셈</a></td>
   <td colspan="1" rowspan="3">좌결합성</td>
   <td><code>… * …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division">나눗셈</a></td>
   <td><code>… / …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder">나머지</a></td>
   <td><code>… % …</code></td>
  </tr>
  <tr>
   <td rowspan="2">14</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition">덧셈</a></td>
   <td colspan="1" rowspan="2">좌결합성</td>
   <td><code>… + …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction">뺄셈</a></td>
   <td><code>… - …</code></td>
  </tr>
  <tr>
   <td rowspan="3">13</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">비트 왼쪽 시프트</a></td>
   <td colspan="1" rowspan="3">좌결합성</td>
   <td><code>… &lt;&lt; …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">비트 오른쪽 시프트</a></td>
   <td><code>… &gt;&gt; …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">비트 부호 없는 오른쪽 시프트</a></td>
   <td><code>… &gt;&gt;&gt; …</code></td>
  </tr>
  <tr>
   <td rowspan="6">12</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator">미만</a></td>
   <td colspan="1" rowspan="6">좌결합성</td>
   <td><code>… &lt; …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than__or_equal_operator">이하</a></td>
   <td><code>… &lt;= …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator">초과</a></td>
   <td><code>… &gt; …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator">이상</a></td>
   <td><code>… &gt;= …</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/in", "in")}}</td>
   <td><code>… in …</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/instanceof", "instanceof")}}</td>
   <td><code>… instanceof …</code></td>
  </tr>
  <tr>
   <td rowspan="4">11</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality">동등</a></td>
   <td colspan="1" rowspan="4">좌결합성</td>
   <td><code>… == …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality">부등</a></td>
   <td><code>… != …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity">일치</a></td>
   <td><code>… === …</code></td>
  </tr>
  <tr>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity">불일치</a></td>
   <td><code>… !== …</code></td>
  </tr>
  <tr>
   <td>10</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND">비트 AND</a></td>
   <td>좌결합성</td>
   <td><code>… &amp; …</code></td>
  </tr>
  <tr>
   <td>9</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR">비트 XOR</a></td>
   <td>좌결합성</td>
   <td><code>… ^ …</code></td>
  </tr>
  <tr>
   <td>8</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR">비트 OR</a></td>
   <td>좌결합성</td>
   <td><code>… | …</code></td>
  </tr>
  <tr>
   <td>7</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">널 병합 연산자</a></td>
   <td>좌결합성</td>
   <td><code>… ?? …</code></td>
  </tr>
  <tr>
   <td>6</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND">논리 AND</a></td>
   <td>좌결합성</td>
   <td><code>… &amp;&amp; …</code></td>
  </tr>
  <tr>
   <td>5</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR">논리 OR</a></td>
   <td>좌결합성</td>
   <td><code>… || …</code></td>
  </tr>
  <tr>
   <td>4</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">조건</a></td>
   <td>우결합성</td>
   <td><code>… ? … : …</code></td>
  </tr>
  <tr>
   <td rowspan="13">3</td>
   <td rowspan="13"><a href="/ko/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">할당</a></td>
   <td rowspan="13">우결합성</td>
   <td><code>… = …</code></td>
  </tr>
  <tr>
   <td><code>… += …</code></td>
  </tr>
  <tr>
   <td><code>… -= …</code></td>
  </tr>
  <tr>
   <td><code>… **= …</code></td>
  </tr>
  <tr>
   <td><code>… *= …</code></td>
  </tr>
  <tr>
   <td><code>… /= …</code></td>
  </tr>
  <tr>
   <td><code>… %= …</code></td>
  </tr>
  <tr>
   <td><code>… &lt;&lt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;&gt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &amp;= …</code></td>
  </tr>
  <tr>
   <td><code>… ^= …</code></td>
  </tr>
  <tr>
   <td><code>… |= …</code></td>
  </tr>
  <tr>
   <td rowspan="2">2</td>
   <td>{{jsxref("Operators/yield", "yield")}}</td>
   <td colspan="1" rowspan="2">우결합성</td>
   <td><code>yield …</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Operators/yield*", "yield*")}}</td>
   <td><code>yield* …</code></td>
  </tr>
  <tr>
   <td>1</td>
   <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comma_Operator">쉼표 / 시퀀스</a></td>
   <td>좌결합성</td>
   <td><code>… , …</code></td>
  </tr>
 </tbody>
</table>
