---
title: 동치 비교 및 동일성
slug: Web/JavaScript/Equality_comparisons_and_sameness
tags:
  - Comparison
  - Equality
  - Intermediate
  - JavaScript
  - SameValue
  - SameValueZero
  - Sameness
translation_of: Web/JavaScript/Equality_comparisons_and_sameness
---
<div>{{jsSidebar("Intermediate")}}</div>

<div class="summary">
<p>ES2015에는 4가지 같음(equality) 알고리즘이 있습니다:</p>

<ul>
 <li>추상적(abstract) 같음 비교 (<code>==</code>)</li>
 <li>엄격한(strict) 같음 비교 (<code>===</code>): <code>Array.prototype.indexOf</code>, <code>Array.prototype.lastIndexOf</code> 및 <code>case</code> 절 매칭에 쓰임</li>
 <li>등가0(SameValueZero): <code>Map</code> 및 <code>Set</code> 연산뿐만 아니라 <code>%TypedArray%</code> 및 <code>ArrayBuffer</code> 생성자, 그리고 ES2016에 예정된 <code>String.prototype.includes</code>에 쓰임</li>
 <li>등가(SameValue): 그 외 모든 곳에 쓰임</li>
</ul>

<p>JavaScript는 3가지 서로 다른 값 비교 연산을 제공합니다:</p>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity">===</a>를 사용하는 엄격한 같음 (또는 "삼중 등호" 또는 "항등(identity)"),</li>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality">==</a>를 사용하는 느슨한(loose) 같음 ("이중 등호"),</li>
 <li>그리고 <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is"><code>Object.is</code></a> (ECMAScript 2015에 새로 들임).</li>
</ul>

<p>어느 연산을 쓸 지 그 선택은 당신이 어떤 종류의 비교를 수행하기 위해 찾고 있는 지에 달렸습니다.</p>

<p> </p>

<ul>
 <li>이중 equals (<code>==</code>)는 두 가지를 비교할 때 유형 변환을 수행하고 IEEE 754를 준수하기 위해 <code>NaN</code>, <code>-0</code> 및 <code>+0</code>을 특별히 처리합니다 (그래서<code>NaN != NaN</code>이고 <code>-0 == +0</code>입니다);</li>
 <li>트리플 equals (<code>===</code>)는 이중 equals (<code>NaN</code>, <code>-0</code> 및 <code>+0</code>의 특수 처리 포함)와 동일한 비교를 수행하지만 유형 변환은 수행하지 않습니다. 형식이 다른 경우 <code>false</code>가 반환됩니다.</li>
 <li><code>Object.is</code>는 형식 변환을하지 않으며 <code>NaN</code>, <code>-0</code> 및 <code>+0</code>에 대한 특수 처리를 수행하지 않습니다 (특수 숫자 값을 제외하고는 <code>===</code>와 동일한 동작을 제공함).</li>
</ul>

<p> </p>
</div>

<p>이들 사이의 구분은 모두 원시형(primitive) 처리와 관련이 있습니다. 매개 변수가 구조적, 개념적으로 유사한 지 비교하는 것이 없습니다. 같은 구조를 가지지만 개체 자체가 각각인 비원시형(non-primitive) 개체 x 및 y의 경우 위의 모든 형태(form)는 false로 평가됩니다.</p>

<h2 id="를_사용하는_엄격한_같음"><code>===</code>를 사용하는 엄격한 같음</h2>

<p>엄격한 같음(strict equality)은 두 값이 같은 지 비교합니다. 어느 값도 비교되기 전에 어떤 다른 값으로 남몰래 변환되지 않습니다. 둘이 서로 다른 형이면, 둘은 같지 않다고 여깁니다. 그렇지 않고 둘이 같은 형이고 숫자가 아닌 경우, 같은 값이면 같다고 여깁니다. 끝으로, 둘이 숫자인 경우, 둘 다 <code>NaN</code>이 아닌 같은 값이거나 하나는 <code>+0</code> 또 하나는 <code>-0</code>인 경우 같다고 여깁니다.</p>

<pre class="brush: js">var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
</pre>

<p>엄격한 같음은 거의 항상 사용하는 올바른 비교 연산입니다. 숫자를 뺀 모든 값에 대해, 분명한 의미(semantics)를 사용합니다: 값은 그 자체와만 같습니다(/ 단지 그 자체입니다). 숫자는 서로 다른 두 극단 상황(edge case)을 얼버무리기(gloss over) 위해 약간 다른 의미를 사용합니다. 첫째는 부동 소수점 0은 양이든 음이든 하나의 부호를 지닙니다. 이는 특정 수학상의 해결책을 나타내는 데 유용하지만, 대부분의 상황에 <code>+0</code>과 <code>-0</code>의 차이에 신경쓰지 않기에, 엄격한 같음은 둘을 같은 값으로 다룹니다. 둘째는 부동 소수점은 not-a-number 값(<code>NaN</code>) 개념을 포함합니다, 특정 잘못 정의된(ill-defined) 수학 문제의 해결책을 보여주기 위해: 예를 들어, 양의 무한대(infinity)에 추가된 음의 무한대. 엄격한 같음은 <code>NaN</code>을 다른 모든 값과 같지 않게 다룹니다 -- 자신 포함. (<code>(x !== x)</code>가 <code>true</code>인 유일한 경우는 <code>x</code>가 <code>NaN</code>일 때입니다.)</p>

<h2 id="를_사용하는_느슨한_같음">==를 사용하는 느슨한 같음</h2>

<p>느슨한 같음(loose equality)은 두 값이 같은 지 비교합니다, 두 값을 공통(common) 형으로 변환한 <em>후</em>에. 변환 후 (하나 또는 양쪽이 변환을 거칠 수 있음), 최종 같음 비교는 꼭 <code>===</code>처럼 수행됩니다. 느슨한 같음은 대칭(<em>symmetric</em>)입니다: <code>A == B</code>는 <code>A</code> 및 <code>B</code>가 어떤 값이든 항상 <code>B == A</code>와 같은 의미를 갖습니다 (적용된 변환의 순서 말고는).</p>

<p>같음 비교는 다양한 형의 피연산자에 대해 다음과 같이 수행됩니다:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row"> </th>
   <th colspan="7" scope="col" style="text-align: center;">피연산자 B</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row"> </th>
   <td> </td>
   <td style="text-align: center;">Undefined</td>
   <td style="text-align: center;">Null</td>
   <td style="text-align: center;">Number</td>
   <td style="text-align: center;">String</td>
   <td style="text-align: center;">Boolean</td>
   <td style="text-align: center;">Object</td>
  </tr>
  <tr>
   <th colspan="1" rowspan="6" scope="row">피연산자 A</th>
   <td>Undefined</td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td>Null</td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>true</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
  </tr>
  <tr>
   <td>Number</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>A === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A == ToPrimitive(B)</code></td>
  </tr>
  <tr>
   <td>String</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === B</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A == ToPrimitive(B)</code></td>
  </tr>
  <tr>
   <td>Boolean</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === B</code></td>
   <td style="text-align: center;"><code>ToNumber(A) === ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
   <td style="text-align: center;"><code>ToNumber(A) == ToPrimitive(B)</code></td>
  </tr>
  <tr>
   <td>Object</td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>false</code></td>
   <td style="text-align: center;"><code>ToPrimitive(A) == B</code></td>
   <td style="text-align: center;"><code>ToPrimitive(A) == B</code></td>
   <td style="text-align: center;"><code>ToPrimitive(A) == ToNumber(B)</code></td>
   <td style="text-align: center;"><code>A === B</code></td>
  </tr>
 </tbody>
</table>

<p>위 표에서, <code>ToNumber(A)</code>는 비교 전에 그 인수를 숫자로 변환하려고 시도합니다. 그 동작(behavior)은 <code>+A</code>(단항 + 연산자)에 해당합니다. <code>ToPrimitive(A)</code>는 그 객체 인수를 원시형 값으로 변환하려고 시도합니다, 다양한 순서로 <code>A</code>의 <code>A.toString</code> 및 <code>A.valueOf</code> 메서드 호출을 시도하여.</p>

<p>전통 및 ECMAScript에 따르면, 모든 객체는 <code>undefined</code> 및 <code>null</code>과 느슨하게 같지 않습니다. 그러나 대부분의 브라우저는 일부 문맥(context)에서 <code>undefined</code>값을 모방하는(<em>emulate</em>) 것처럼 행동하기 위해 매우 좁은 부류의 객체(특히, 모든 페이지에 대한 <code>document.all</code> 객체)에 허용합니다. 느슨한 같음이 그러한 문맥 중 하나입니다: <code>null == A</code> 및 <code>undefined == A</code>는 A가 <code>undefined</code>를 <em>모방</em>하는 객체인 경우, 그리고 그 경우에만 true로 평가합니다. 다른 모든 경우에 객체는 결코 <code>undefined</code> 또는 <code>null</code>과 느슨하게 같지 않습니다.</p>

<p> </p>

<p>전통적으로 ECMAScript에 따르면 모든 객체는 <code>undefined</code> 및 <code>null</code>과 느슨하게 같지 않습니다. 그러나 대부분의 브라우저는 일부 문맥(context)에서 정의되지 않은 값(<code>undefined</code>)을 모방하는(<em>emulate</em>) 것처럼 동작하는 매우 좁은 개체 클래스 (특히 모든 페이지의 <code>document.all</code> 개체)를 허용합니다. Loose equality는 다음과 같은 컨텍스트 중 하나입니다. <code>null == A</code> 및 <code>undefined == A</code>는 <code>undefined</code>를 에뮬레이트하는 객체 인 경우에만 true로 평가됩니다. 다른 모든 경우에는 객체가 <code>undefined</code>거나 <code>null</code>이 될 수 없습니다.</p>

<pre class="brush: js">var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// 둘 다 false, 드문 경우를 제외하고는
console.log(obj == null);
console.log(obj == undefined);
</pre>

<p>대부분의 경우 느슨한 같음을 사용하는 것은 바람직하지 않습니다. strict equality를 사용한 비교의 결과는 예측하기가 쉽고 형 강제(coercion) 변환이 일어나지 않기에 평가가 빠를 수 있습니다.</p>

<p> </p>

<h2 id="Same-value_equality">Same-value equality</h2>

<p>등가(same-value) 같음은 최종 사용 사례(use case)를 다룹니다: 두 값이 모든 문맥에서 <em>기능상 같은지</em> 여부를 결정하는. (이 사용 사례는 <a href="https://ko.wikipedia.org/wiki/리스코프_치환_원칙" title="Liskov substitution principle">리스코프 치환 원칙</a>의 실례를 보입니다.) 다음은 불변 속성(property)을 변화시키려 시도할 때 일어나는 한 사례입니다:</p>

<pre class="brush: js">// 불변(immutable) NEGATIVE_ZERO 속성을 Number 생성자에 추가.
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v)
{
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
</pre>

<p><code>Object.defineProperty</code>는 변경 불가능한 속성을 변경하려고 시도 할 때 예외를 throw하지만 실제 변경이 요청되지 않으면 아무 것도 수행하지 않습니다. <code>v</code>가 <code>-0</code>이면, 변경 사항이 요청되지 않고 오류가 발생하지 않습니다. 내부적으로, 불변의 property가 재정의 (redefined)되었을 때, 새롭게 지정된 값은 같은 값의 동등성을 사용해 현재의 값과 비교됩니다.</p>

<p>Same-value equality는 {{jsxref("Object.is")}} 메서드로 제공됩니다.</p>

<h2 id="Same-value-zero_equality">Same-value-zero equality</h2>

<p>등가 같음과 비슷하지만 +0과 -0이 같다고 여깁니다.</p>

<h2 id="스펙_내_추상적_같음_엄격한_같음_및_등가">스펙 내 추상적 같음, 엄격한 같음 및 등가</h2>

<p>In ES5, the comparison performed by <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators"><code>==</code></a> is described in <a href="http://ecma-international.org/ecma-262/5.1/#sec-11.9.3">Section 11.9.3, The Abstract Equality Algorithm</a>. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators"><code>===</code></a> comparison is <a href="http://ecma-international.org/ecma-262/5.1/#sec-11.9.6">11.9.6, The Strict Equality Algorithm</a>. (Go look at these. They're brief and readable. Hint: read the strict equality algorithm first.) ES5 also describes, in <a href="http://ecma-international.org/ecma-262/5.1/#sec-9.12">Section 9.12, The SameValue Algorithm</a> for use internally by the JS engine. It's largely the same as the Strict Equality Algorithm, except that 11.9.6.4 and 9.12.4 differ in handling {{jsxref("Number")}}s. ES2015 simply proposes to expose this algorithm through {{jsxref("Object.is")}}.</p>

<p>We can see that with double and triple equals, with the exception of doing a type check upfront in 11.9.6.1, the Strict Equality Algorithm is a subset of the Abstract Equality Algorithm, because 11.9.6.2–7 correspond to 11.9.3.1.a–f.</p>

<h2 id="같음_비교를_이해하기_위한_모델은">같음 비교를 이해하기 위한 모델은?</h2>

<p>ES2015 이전에, 이중 등호 및 삼중 등호에 대해 하나가 다른 하나의 "확장"판이라고 (말)했을 지 모릅니다. 예를 들어, 누군가는 이중 등호는 삼중 등호의 확장판이라고 합니다, 전자는 후자가 하는 모든 것을 하지만 그 피연산자에 형 변환을 하기에. 가령, <code>6 == "6"</code>. (대신에, 이중 등호는 기준선이고 삼중 등호는 향상판이라고 하는 이도 있습니다, 두 피연산자가 같은 형이길 요구하고 그래서 별도 제약을 추가하기에. 어느 게 더 이해하기 좋은 모델인지는 당신이 상태(things)를 보기 위해 선택한 방법에 달렸습니다.)</p>

<p>However, this way of thinking about the built-in sameness operators is not a model that can be stretched to allow a place for ES2015's {{jsxref("Object.is")}} on this "spectrum". {{jsxref("Object.is")}} isn't simply "looser" than double equals or "stricter" than triple equals, nor does it fit somewhere in between (i.e., being both stricter than double equals, but looser than triple equals). We can see from the sameness comparisons table below that this is due to the way that {{jsxref("Object.is")}} handles {{jsxref("NaN")}}. Notice that if <code>Object.is(NaN, NaN)</code>evaluated to <code>false</code>, we <em>could</em> say that it fits on the loose/strict spectrum as an even stricter form of triple equals, one that distinguishes between <code>-0</code> and <code>+0</code>. The {{jsxref("NaN")}} handling means this is untrue, however. Unfortunately, {{jsxref("Object.is")}} simply has to be thought of in terms of its specific characteristics, rather than its looseness or strictness with regard to the equality operators.</p>

<p> </p>

<table>
 <caption>Sameness Comparisons</caption>
 <thead>
  <tr>
   <th scope="col">x</th>
   <th scope="col">y</th>
   <th scope="col"><code>==</code></th>
   <th scope="col"><code>===</code></th>
   <th scope="col"><code>Object.is</code></th>
   <th scope="col"><code>SameValueZero</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>undefined</code></td>
   <td><code>undefined</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>null</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>'foo'</code></td>
   <td><code>'foo'</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>-0</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>-0</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>'0'</code></td>
   <td><code>0</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>'17'</code></td>
   <td><code>17</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>[1, 2]</code></td>
   <td><code>'1,2'</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>new String('foo')</code></td>
   <td><code>'foo'</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>undefined</code></td>
   <td><code>true</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>undefined</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>{ foo: 'bar' }</code></td>
   <td><code>{ foo: 'bar' }</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>new String('foo')</code></td>
   <td><code>new String('foo')</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>null</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>NaN</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>'foo'</code></td>
   <td><code>NaN</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>NaN</code></td>
   <td><code>NaN</code></td>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>true</code></td>
   <td><code>true</code></td>
  </tr>
 </tbody>
</table>

<p> </p>

<h2 id="jsxref(Object.is)_대신_삼중_등호를_사용하는_경우">{{jsxref("Object.is")}} 대신 삼중 등호를 사용하는 경우</h2>

<p>In general, the only time {{jsxref("Object.is")}}'s special behavior towards zeros is likely to be of interest is in the pursuit of certain meta-programming schemes, especially regarding property descriptors, when it is desirable for your work to mirror some of the characteristics of {{jsxref("Object.defineProperty")}}. If your use case does not require this, it is suggested to avoid {{jsxref("Object.is")}} and use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators" title="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators"><code>===</code></a> instead. Even if your requirements involve having comparisons between two {{jsxref("NaN")}} values evaluate to <code>true</code>, generally it is easier to special-case the {{jsxref("NaN")}} checks (using the {{jsxref("isNaN")}} method available from previous versions of ECMAScript) than it is to work out how surrounding computations might affect the sign of any zeros you encounter in your comparison.</p>

<p>여기 당신 코드에서 그 자체를 드러내기 위해 <code>-0</code>과 <code>+0</code> 사이의 구별을 일으킬 수도 있는 철저하지 않은(in-exhaustive) 내장 메서드 및 연산자 목록이 있습니다:</p>

<dl>
 <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#-_.28Unary_Negation.29"><code>- (unary negation)</code></a><span style="font-size: 1rem; letter-spacing: -0.00278rem;"> </span></dt>
</dl>

<pre class="syntaxbox">let stoppingForce = obj.mass * -obj.velocity</pre>

<dl>
 <dd>
 <p><code>obj.velocity</code>가 <code>0</code>인 (또는 <code>0</code>으로 계산하는) 경우, <code>-0</code>이 그 자리에 소개되고 <code>stoppingForce</code>로 전해집니다. </p>
 </dd>
 <dt>{{jsxref("Math.atan2")}}</dt>
 <dt>{{jsxref("Math.ceil")}}</dt>
 <dt>{{jsxref("Math.pow")}}</dt>
 <dt>{{jsxref("Math.round")}}<span style="font-size: 1rem; letter-spacing: -0.00278rem;"> </span></dt>
 <dd>In some cases,it's possible for a <code>-0</code> to be introduced into an expression as a return value of these methods even when no <code>-0</code> exists as one of the parameters. For example, using {{jsxref("Math.pow")}} to raise {{jsxref("Infinity", "-Infinity")}} to the power of any negative, odd exponent evaluates to <code>-0</code>. Refer to the documentation for the individual methods. </dd>
</dl>

<dl>
 <dt>{jsxref("Math.floor")}}</dt>
 <dt>{{jsxref("Math.max")}}</dt>
 <dt>{{jsxref("Math.min")}}</dt>
 <dt>{{jsxref("Math.sin")}}</dt>
 <dt>{{jsxref("Math.sqrt")}}</dt>
 <dt>{{jsxref("Math.tan")}}<span style="font-size: 1rem; letter-spacing: -0.00278rem;"> </span></dt>
 <dd>It's possible to get a <code>-0</code> return value out of these methods in some cases where a <code>-0</code> exists as one of the parameters. E.g., <code>Math.min(-0, +0)</code> evaluates to <code>-0</code>. Refer to the documentation for the individual methods.</dd>
</dl>

<dl>
 <dt><code><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">~</a></code></dt>
 <dt><code><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">&lt;&lt;</a></code></dt>
 <dt><code><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators">&gt;&gt;</a></code></dt>
 <dd>이러한 연산자 각각은 내부에서 ToInt32 알고리즘을 사용합니다. 내부 32-bit 정수형에는 0에 대해 한 표현만 있기에, <code>-0</code>은 역(inverse) 연산 후 왕복 여행(round trip, 이중 역 연산)에 살아남지 못합니다. 가령, <code>Object.is(~~(-0), -0)</code>와 <code>Object.is(-0 &lt;&lt; 2 &gt;&gt; 2, -0)</code>는 <code>false</code>로 평가합니다.</dd>
</dl>

<p>Relying on {{jsxref("Object.is")}} when the signedness of zeros is not taken into account can be hazardous. Of course, when the intent is to distinguish between <code>-0</code> and <code>+0</code>, it does exactly what's desired.</p>

<h2 id="Caveat_jsxref(Object.is)_and_NaN">Caveat: {{jsxref("Object.is")}} and NaN</h2>

<p>The {{jsxref("Object.is")}} specification treats all instances of {{jsxref("NaN")}} as the same object. However, since <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a> are available, we can have distinct instances, which don't behave identically in all contexts. For example:</p>

<pre><code>var f2b = x =&gt; new Uint8Array(new Float64Array([x]).buffer);
var b2f = x =&gt; new Float64Array(x.buffer)[0];
var n = f2b(NaN);
n[0] = 1;
var nan2 = b2f(n);
nan2;
// &gt; NaN
Object.is(nan2, NaN);
// &gt; true
f2b(NaN);
// &gt; Uint8Array(8) [0, 0, 0, 0, 0, 0, 248,127)
f2b(nan2);
// &gt; Uint8Array(8) [1, 0, 0, 0, 0, 0, 248,127)</code></pre>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="http://dorey.github.io/JavaScript-Equality-Table/">JS 비교 표</a></li>
</ul>
