---
title: 'RangeError: precision is out of range'
slug: Web/JavaScript/Reference/Errors/Precision_range
translation_of: Web/JavaScript/Reference/Errors/Precision_range
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">RangeError: precision {0} out of range (Firefox)
RangeError: toExponential() argument must be between 0 and 20 (Chrome)
RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
</pre>

<h2 id="에러_형식">에러 형식</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>아래의 메소드들 중 하나에서,  실행 인자(argument)가 정확도의 범위를 벗어났습니다. :</p>

<ul>
 <li>{{jsxref("Number.prototype.toExponential()")}}</li>
 <li>{{jsxref("Number.prototype.toFixed()")}}</li>
 <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
</ul>

<p>이 메소드들에게 허용된 범위는 0부터 20 (또는 21)까지 입니다. 하지만, ECMAScript 스펙은 아래의 범위까지 확장하여 허용하고 있습니다.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Method</th>
   <th scope="col">Firefox (SpiderMonkey)</th>
   <th scope="col">Chrome, Opera (V8)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Number.prototype.toExponential()")}}</td>
   <td>0 부터 100</td>
   <td>0 부터 20</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.prototype.toFixed()")}}</td>
   <td>-20 부터 100</td>
   <td>0 부터 20</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.prototype.toPrecision()")}}</td>
   <td>1 부터 100</td>
   <td>1 부터 21</td>
  </tr>
 </tbody>
</table>

<h2 id="예">예</h2>

<h3 id="유효하지_않은_경우">유효하지 않은 경우</h3>

<pre class="brush: js example-bad">77.1234.toExponential(-1);  // RangeError
77.1234.toExponential(101); // RangeError

2.34.toFixed(-100);         // RangeError
2.34.toFixed(1001);         // RangeError

1234.5.toPrecision(-1);     // RangeError
1234.5.toPrecision(101);    // RangeError
</pre>

<h3 id="유효한_경우">유효한 경우</h3>

<pre class="brush: js example-good">77.1234.toExponential(4); // 7.7123e+1
77.1234.toExponential(2); // 7.71e+1

2.34.toFixed(1); // 2.3
2.35.toFixed(1); // 2.4 (note that it rounds up in this case)

5.123456.toPrecision(5); // 5.1235
5.123456.toPrecision(2); // 5.1
5.123456.toPrecision(1); // 5
</pre>

<h2 id="참조">참조</h2>

<ul>
 <li>{{jsxref("Number.prototype.toExponential()")}}</li>
 <li>{{jsxref("Number.prototype.toFixed()")}}</li>
 <li>{{jsxref("Number.prototype.toPrecision()")}}</li>
</ul>
