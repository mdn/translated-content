---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/parseFloat
---
<div>{{jsSidebar("Objects")}}</div>

<p><code><strong>parseFloat()</strong></code> 함수는 문자열을 분석해 부동소수점 실수로 반환합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">parseFloat(<em>value</em>)</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>변환할 값.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>주어진 값에서 분석한 부동소수점 수. 분석할 수 없으면 {{jsxref("NaN")}}.</p>

<h2 id="설명">설명</h2>

<p><code>parseFloat()</code>은 최상위 함수로 어떠한 객체와도 연결되어 있지 않습니다.</p>

<p><code>parseFloat()</code>은 매개변수로 주어진 값 분석하고 부동소수점 수를 반환합니다. 기호(+, -), 숫자(0-9), 소수점 또는 지수 이외의 문자를 발견하면, 그 전까지의 결과만 반환하고 문제의 문자와 그 이후는 모두 무시합니다. 위치에 상관하지 않고, 그런 문자를 발견하면 {{jsxref("NaN")}}을 반환하는 더 엄격한 방법이 필요하면 {{jsxref("Number", "Number(value)")}}를 고려하세요.</p>

<p>값이 문자열인데 첫 번째 문자를 숫자로 변환할 수 없는 경우 <code>parseFloat()</code>도 <code>NaN</code>을 반환합니다.</p>

<p>수학적으로 <code>NaN</code>은 어떤 진법에도 속하지 않습니다. {{jsxref("isNaN", "isNaN()")}} 함수를 사용해 결과 값이 <code>NaN</code>인지 확인할 수 있습니다. <code>NaN</code>을 다른 값과의 수학 연산에 사용하면 그 결과도 언제나 <code>NaN</code>이 됩니다.</p>

<p><code>parseFloat()</code>은 {{jsxref("Infinity")}}도 분석 및 반환할 수 있습니다. {{jsxref("isFinite", "isFinite()")}} 함수를 사용해 결과 값이 유한수(<code>Infinity</code>, <code>-Infinity</code>, <code>NaN</code>이 아닌 수)인지 알 수 있습니다.</p>

<p><code>parseFloat()</code>은 <code>toString</code>이나 <code>valueOf</code> 메서드를 구현한 객체도 분석할 수 있습니다. 이 때의 결과는 객체의 <code>toString()</code>, <code>valueOf()</code>의 반환 값을 <code>parseFloat()</code>에 전달한 것과 동일합니다.</p>

<h2 id="예제">예제</h2>

<h3 id="숫자를_반환하는_경우">숫자를 반환하는 경우</h3>

<p>아래 예제는 모두 <code>3.14</code>를 반환합니다.</p>

<pre class="brush: js">parseFloat(3.14);
parseFloat('3.14');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14와 숫자가 아닌 문자들');

var foo = Object.create(null);
foo.toString = function () { return "3.14"; };
parseFloat(foo);

var foo = Object.create(null);
foo.valueOf = function () { return "3.14"; };
parseFloat(foo);​​​​​
</pre>

<h3 id="NaN을_반환하는_경우"><code>NaN</code>을 반환하는 경우</h3>

<p>다음 예제는 {{jsxref("NaN")}}을 반환합니다.</p>

<pre class="brush: js">parseFloat('FF2');
</pre>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.2.3', 'parseFloat')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-parsefloat-string', 'parseFloat')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-parsefloat-string', 'parseFloat')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("javascript.builtins.parseFloat")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Global_Objects/parseInt", "parseInt()")}}</li>
 <li>{{jsxref("Number.parseFloat()")}}</li>
 <li>{{jsxref("Number.parseInt()")}}</li>
 <li>{{jsxref("Number.toFixed()")}}</li>
 <li>{{jsxref("Global_Objects/isNaN", "isNaN()")}}</li>
</ul>
