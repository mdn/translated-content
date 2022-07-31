---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/every
browser-compat: javascript.builtins.Array.every
---

<div>{{JSRef}}</div>

<p>
  <code><strong>every()</strong></code> 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지
  테스트합니다. Boolean 값을 반환합니다.
</p>

<div>{{EmbedInteractiveExample("pages/js/array-every.html", 'shorter')}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// 화살표 함수
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

// 콜백 함수
every(callbackFn)
every(callbackFn, thisArg)

// 인라인 콜백 함수
every(function callbackFn(element) { ... })
every(function callbackFn(element, index) { ... })
every(function callbackFn(element, index, array){ ... })
every(function callbackFn(element, index, array) { ... }, thisArg)
</pre>

<h3 id="Parameters">매개변수</h3>

<dl>
  <dt><code>callbackFn</code></dt>
  <dd>
    각 요소를 시험할 함수. 다음 세 가지 인수를 받습니다.
    <dl>
      <dt>
        <code><var>요소</var></code>
      </dt>
      <dd>배열에서 처리되는 현재 요소</dd>
      <dt><code>index</code> {{Optional_inline}}</dt>
      <dd>처리할 현재 요소의 인덱스.</dd>
      <dt><code>array</code> {{Optional_inline}}</dt>
      <dd><code>every</code>를 호출한 배열.</dd>
    </dl>
  </dd>
  <dt><code>thisArg</code> {{Optional_inline}}</dt>
  <dd>
    <code><var>callbackFn</var></code
    >을 실행할 때 <code>this</code>로 사용하는 값.
  </dd>
</dl>

<h3 id="Return_value">반환 값</h3>

<p>
  <code>callbackFn</code>이 모든 배열 요소에 대해 참({{Glossary("truthy")}})인 값을 반환하는 경우
  <code><strong>true</strong></code
  >, 그 외엔 <code><strong>false</strong></code
  >.
</p>

<h2 id="Description">설명</h2>

<p>
  <code>every</code>는 <code>callback</code>이 {{glossary("falsy", "거짓")}}을 반환하는 요소를 찾을
  때까지 배열에 있는 각 요소에 대해 한 번씩 <code>callbackFn</code> 함수를 실행합니다. 해당하는
  요소를 발견한 경우 <code>every</code>는 즉시 <code>false</code>를 반환합니다. 그렇지 않으면, 즉
  모든 값에서 참을 반환하면 <code>true</code>를 반환합니다.
</p>

<div class="notecard note">
  <p><strong>참고:</strong> 빈 배열에서 호출하면 무조건 <code>true</code>를 반환합니다!</p>
</div>

<p>
  할당한 값이 있는 배열의 인덱스에서만 <code>callbackFn</code>을 호출합니다. 삭제했거나 값을 할당한
  적이 없는 인덱스에서는 호출하지 않습니다.
</p>

<p>
  <code>callbackFn</code>은 요소의 값, 해당 요소의 인덱스 및 순회하고 있는 배열 세 가지 인수와 함께
  호출됩니다.
</p>

<p>
  <code>thisArg</code> 매개변수를 <code>every</code>에 제공한 경우 <code>callbackFn</code>의
  <code>this</code>로 사용됩니다. 그 외엔 {{jsxref("undefined")}}값을 사용합니다. 최종적으로
  <code>callbackFn</code>이 볼 수 있는 <code>this</code>의 값은
  <a href="/ko/docs/Web/JavaScript/Reference/Operators/this"
    >함수가 볼 수 있는 <code>this</code>를 결정하는 평소 규칙</a
  >을 따릅니다.
</p>

<p><code>every</code>는 호출한 배열을 변형하지 않습니다.</p>

<p>
  <code>every</code>가 처리하는 요소의 범위는 <code>callbackFn</code>의 첫 호출 전에 설정됩니다.
  <code>every</code> 호출 이후로 배열에 추가하는 요소는 <code>callbackFn</code>이 방문하지 않습니다.
  배열에 존재하는 요소가 변경된 경우, <code>callbackFn</code>에 <code>every</code>가 방문하는 시점의
  값을 전달합니다. 삭제한 요소는 방문하지 않습니다.
</p>

<p>
  <code>every</code>는 (이산)수학에서 전칭(∀) 정량자(quantifier, 한정자)처럼 행동합니다.
  특히, 빈 배열에 대해서는 <code>true</code>를 반환합니다. (이는
  <a href="http://en.wikipedia.org/wiki/Empty_set#Common_problems">공집합</a>의 모든 요소가 어떠한
  주어진 조건도 만족하는
  <a
    href="http://en.wikipedia.org/wiki/Vacuous_truth#Vacuous_truths_in_mathematics"
   
    >공허한 참</a
  >입니다.)
</p>

<h2 id="Polyfill">폴리필</h2>

<p>
  <code>every</code>는 ECMA-262 표준 제5판에 추가됐으므로 어떤 표준 구현체에서는 사용하지 못할 수도
  있습니다. 다른 모든 코드 이전에 아래 코드를 포함하면 <code>every</code>를 지원하지 않는 환경에서도
  사용할 수 있습니다. 아래 알고리즘은 {{jsxref("Object")}}와 {{jsxref("TypeError")}}가 변형되지
  않고, <code>callbackfn.call</code>의 계산 값이 원래의 {{jsxref("Function.prototype.call")}}과 같은
  경우 ECMA-262 제5판이 명시한 것과 동일합니다.
</p>

<pre class="brush: js">
if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length &gt;&gt;&gt; 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== 'function') {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length &gt; 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k &lt; len
    while (k &lt; len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callbackfn with T as the this value and argument list
        //     containing kValue, k, and O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
</pre>

<h2 id="Examples">예제</h2>

<h3 id="Testing_size_of_all_array_elements">모든 배열 요소의 크기 테스트</h3>

<p>다음 예는 배열의 모든 요소가 10보다 더 큰지 테스트합니다.</p>

<pre class="brush: js">
function isBigEnough(element, index, array) {
  return element &gt;= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
</pre>

<h3 id="Using_arrow_functions">화살표 함수 사용</h3>

<p>
  <a href="/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions">화살표 함수</a>는 같은
  테스트에 대해 더 짧은 구문을 제공합니다.
</p>

<pre class="brush: js">
[12, 5, 8, 130, 44].every(elem =&gt; elem &gt;= 10); // false
[12, 54, 18, 130, 44].every(elem =&gt; elem &gt;= 10); // true</pre
>

<h3 id="Affecting_Initial_Array_modifying_appending_and_deleting">
  초기 배열에 영향주기(수정, 추가, 삭제)
</h3>

<p>아래 예제는 배열이 수정될 때 <code>every</code> 메서드의 행위를 테스트합니다.</p>

<pre class="brush: js">
// ---------------
// 요소 수정
// ---------------
let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) =&gt; {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -&gt; ${elem}`)
  return elem &lt; 2
})

// 3회 순회하지만 앞선 2회의 순회는 수정이 일어나지 않습니다.
//
// 1st iteration: [1,1,3,4][0] -&gt; 1
// 2nd iteration: [1,1,2,4][1] -&gt; 1
// 3rd iteration: [1,1,2,3][2] -&gt; 2

// ---------------
// 요소 추가
// ---------------
arr = [1, 2, 3];
arr.every( (elem, index, arr) =&gt; {
  arr.push('new')
  console.log(`[${arr}][${index}] -&gt; ${elem}`)
  return elem &lt; 4
})

// 새로운 요소가 추가된 후에도 3회 순회합니다.
//
// 1st iteration: [1, 2, 3, new][0] -&gt; 1
// 2nd iteration: [1, 2, 3, new, new][1] -&gt; 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -&gt; 3

// ---------------
// 요소 삭제
// ---------------
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) =&gt; {
  arr.pop()
  console.log(`[${arr}][${index}] -&gt; ${elem}`)
  return elem &lt; 4
})

// 기존 요소가 `pop()` 됨에 따라 2회만 순회합니다.
//
// 1st iteration: [1,2,3][0] -&gt; 1
// 2nd iteration: [1,2][1] -&gt; 2
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">같이 보기</h2>

<ul>
  <li>
    <code>Array.prototype.every</code>의 폴리필은
    <a href="https://github.com/zloirock/core-js#ecmascript-array"><code>core-js</code></a
    >에서 가능합니다
  </li>
  <li>{{jsxref("Array.prototype.forEach()")}}</li>
  <li>{{jsxref("Array.prototype.some()")}}</li>
  <li>{{jsxref("Array.prototype.find()")}}</li>
  <li>{{jsxref("TypedArray.prototype.every()")}}</li>
</ul>
