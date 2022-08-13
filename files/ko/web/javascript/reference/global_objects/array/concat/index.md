---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/concat
---
<div>{{JSRef}}</div>

<p><code><strong>concat()</strong></code> 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. </p>

<ul>
 <li>기존배열을 변경하지 않습니다. </li>
 <li> 추가된 새로운 배열을 반환합니다.</li>
</ul>

<div>{{EmbedInteractiveExample("pages/js/array-concat.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>array</var>.concat([value1[, value2[, ...[, <var>valueN</var>]]]])</pre>

<h3 id="매개변수">매개변수</h3>

<ul>
 <li>배열 또는 값 </li>
 <li>만약 value1 ~ valueN 인자를 생략하면 기존배열의 얕은 복사본을 반환.</li>
</ul>

<dl>
 <dt><code>valueN</code> {{optional_inline}}</dt>
 <dd>자세한 내용은 아래 설명을 참고하세요.</dd>
</dl>

<h3 id="반환값">반환값</h3>

<p>새로운 {{jsxref("Array")}} 객체.</p>

<h2 id="설명">설명</h2>

<p><code>concat</code>은 메서드를 호출한 배열 뒤에 각 인수를 순서대로 붙여 새로운 배열을 만듭니다. 인수가 배열이면 그 구성요소가 순서대로 붙고, 배열이 아니면 인수 자체가 붙습니다. 중첩 배열 내부로 재귀하지 않습니다.</p>

<p><code>concat</code>은 <code>this</code>나 인수로 넘겨진 배열의 내용을 바꾸지 않고, 대신 주어진 배열을 합친 뒤 그 얕은 사본을 반환합니다. 새 배열에는 원본 배열의 요소를 다음과 같은 방법으로 복사합니다.</p>

<ul>
 <li>실제 객체가 아닌 객체 참조: <code>concat</code>은 새 배열에 참조를 복사합니다. 원본 배열과 새 배열에서 같은 객체를 가리키게 됩니다. 즉, 참조하는 객체를 수정하면 그 내용이 새 배열과 원본 배열 둘 다에서 나타납니다.</li>
 <li>문자열, 숫자, 불리언 등 자료형({{jsxref("String")}}, {{jsxref("Number")}}, {{jsxref("Boolean")}} 객체 아님): <code>concat</code>은 새 배열에 문자열과 수의 값을 복사합니다.</li>
</ul>

<div class="note">
<p><strong>참고:</strong> 배열이나 값을 이어붙여도 원본은 변하지 않으며, 새로운 배열이나 원본 배열을 조작해도 서로 영향을 받지 않습니다.</p>
</div>

<h2 id="예제">예제</h2>

<h3 id="배열_두_개_이어붙이기">배열 두 개 이어붙이기</h3>

<p>다음 예제는 두 개의 배열을 이어붙입니다.</p>

<pre class="brush: js">const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];

alpha.concat(numeric);
// 결과: ['a', 'b', 'c', 1, 2, 3]
</pre>

<h3 id="배열_세_개_이어붙이기">배열 세 개 이어붙이기</h3>

<p>다음 예제는 세 개의 배열을 이어붙입니다.</p>

<pre class="brush: js">const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

num1.concat(num2, num3);
// 결과: [1, 2, 3, 4, 5, 6, 7, 8, 9]
</pre>

<h3 id="배열에_값_이어붙이기">배열에 값 이어붙이기</h3>

<p>다음 코드는 배열에 세 개의 값을 이어붙입니다.</p>

<pre class="brush: js">const alpha = ['a', 'b', 'c'];

alpha.concat(1, [2, 3]);
// 결과: ['a', 'b', 'c', 1, 2, 3]
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>{{Compat("javascript.builtins.Array.concat")}}</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} — 배열의 뒤에 요소 추가/제거</li>
 <li>{{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} — 배열의 앞에 요소 추가/제거</li>
 <li>{{jsxref("Array.splice", "splice")}} — 배열의 특정 위치에 요소 추가/제거</li>
 <li>{{jsxref("String.prototype.concat()")}}</li>
</ul>
