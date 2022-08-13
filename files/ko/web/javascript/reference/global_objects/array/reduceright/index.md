---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
---
<div>{{JSRef}}</div>

<p><strong><code>reduceRight()</code></strong> 메서드는 누적기에 대해 함수를 적용하고 배열의 각 값 (오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야합니다.</p>

<p>{{EmbedInteractiveExample("pages/js/array-reduce-right.html")}}</p>

<p>왼쪽에서 오른쪽으로 {{jsxref("Array.prototype.reduce()")}}도 참조하십시오.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>arr</var>.reduceRight(<var>callback</var>[, <var>initialValue</var>])</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>4 개의 인수를 취하여 배열의 각 값에 대해 실행할 함수입니다.
 <dl>
  <dt><code>previousValue</code></dt>
  <dd>콜백의 마지막 호출에서 이전에 리턴 된 값 또는 제공된 경우 initialValue. (아래 참조).</dd>
  <dt><code>currentValue</code></dt>
  <dd>배열에서 처리중인 현재 요소입니다.</dd>
  <dt><code>index</code></dt>
  <dd>배열에서 처리중인 현재 요소의 인덱스입니다.</dd>
  <dt><code>array</code></dt>
  <dd>배열 reduce가 호출되었습니다.</dd>
 </dl>
 </dd>
 <dt><code>initialValue</code></dt>
 <dd>선택 과목. 콜백의 최초의 호출의 최초의 인수로서 사용하는 객체입니다.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>누적 계산의 결과를 반환합니다.</p>

<h2 id="설명">설명</h2>

<p><code>reduceRight는 배열의 구멍을 제외하고 배열에있는 각 요소에 대해 콜백 함수를 한 번 실행합니다.이 인수는 초기 값 (또는 이전 콜백 호출의 값), 현재 요소의 값, 현재 인덱스 및 반복이 일어나는 배열.</code></p>

<p>reduceRight 콜백 호출은 다음과 같습니다.</p>

<pre class="brush: js">array.reduceRight(function(previousValue, currentValue, index, array) {
  // ...
});
</pre>

<p>함수가 처음 호출 될 때 previousValue 및 currentValue는 두 값 중 하나가 될 수 있습니다. reduceValue에 대한 호출에 initialValue가 제공된 경우 previousValue는 initialValue와 같고 currentValue는 배열의 마지막 값과 같습니다. initialValue가 제공되지 않으면 previousValue는 배열의 마지막 값과 같고 currentValue는 두 번째 - 마지막 값과 같습니다.</p>

<p>배열이 비어 있고 initialValue가 제공되지 않으면 {{jsxref ( "TypeError")}}가 발생합니다. 배열에 요소가 1 개만 있어도 (위치에 관계없이) initialValue가 제공되지 않았던 경우, 또는 initialValue가 준비되어 있지만 배열이 비어있는 경우, 콜백을 호출하지 않고 솔로 값이 반환됩니다.</p>

<p>함수의 일부 실행 예제는 다음과 같습니다.</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
</pre>

<p>콜백은 네 번 호출되며 각 호출의 인수와 반환 값은 다음과 같습니다.</p>

<table>
 <thead>
  <tr>
   <th scope="col"><code>previousValue</code></th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">first call</th>
   <td><code>4</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>7</code></td>
  </tr>
  <tr>
   <th scope="row">second call</th>
   <td><code>7</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>9</code></td>
  </tr>
  <tr>
   <th scope="row">third call</th>
   <td><code>9</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>10</code></td>
  </tr>
  <tr>
   <th scope="row">fourth call</th>
   <td><code>10</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>10</code></td>
  </tr>
 </tbody>
</table>

<p>reduceRight에 의해 반환 된 값은 마지막 콜백 호출 (10)의 값이됩니다.</p>

<p>initialValue를 제공하면 결과는 다음과 같습니다.</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10);
</pre>

<table>
 <thead>
  <tr>
   <th scope="col"><code>previousValue</code></th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">first call</th>
   <td><code>10</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>14</code></td>
  </tr>
  <tr>
   <th scope="row">second call</th>
   <td><code>14</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>17</code></td>
  </tr>
  <tr>
   <th scope="row">third call</th>
   <td><code>17</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>19</code></td>
  </tr>
  <tr>
   <th scope="row">fourth call</th>
   <td><code>19</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>20</code></td>
  </tr>
  <tr>
   <th scope="row">fifth call</th>
   <td><code>20</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>20</code></td>
  </tr>
 </tbody>
</table>

<p>reduceRight에 의해 이번에 반환 된 값은 물론 20입니다.</p>

<h2 id="예제">예제</h2>

<h3 id="배열_내_모든_값의_합계_구하기">배열 내 모든 값의 합계 구하기</h3>

<pre class="brush: js">var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// sum is 6
</pre>

<h3 id="이중_배열_전개하기">이중 배열 전개하기</h3>

<pre class="brush: js">var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
</pre>

<h3 id="reduce와_reduceRight의_차이점">reduce와 reduceRight의 차이점</h3>

<pre class="brush: js">var a = ["1", "2", "3", "4", "5"];
var left  = a.reduce(function(prev, cur)      { return prev + cur; });
var right = a.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  // "12345"
console.log(right); // "54321"</pre>

<h2 id="폴리필">폴리필</h2>

<p><code>reduceRight</code>는 5 판에서 ECMA-262 표준에 추가되었습니다. 표준의 모든 구현에 존재하지 않을 수도 있습니다. 이 문제를 해결하려면 스크립트 시작 부분에 다음 코드를 삽입하여 reduceRight를 기본적으로 지원하지 않는 구현에서 사용할 수있게하십시오.</p>

<pre class="brush: js">// ECMA-262, 5 판, 15.4.4.22의 제작 단계
// 참조 : http://es5.github.io/#x15.4.4.22
if ('function' !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback /*, initialValue*/) {
    'use strict';
    if (null === this || 'undefined' === typeof this) {
      throw new TypeError('Array.prototype.reduce called on null or undefined' );
    }
    if ('function' !== typeof callback) {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length &gt;&gt;&gt; 0, k = len - 1, value;
    if (arguments.length &gt;= 2) {
      value = arguments[1];
    } else {
      while (k &gt;= 0 &amp;&amp; !(k in t)) {
        k--;
      }
      if (k &lt; 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k--];
    }
    for (; k &gt;= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>{{Compat("javascript.builtins.Array.reduceRight")}}</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
