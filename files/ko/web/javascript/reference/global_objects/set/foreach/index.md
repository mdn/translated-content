---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/forEach
---
<div>{{JSRef}}</div>

<p><code><strong>forEach()</strong></code> 메서드는 주어진 함수를 <code>Set</code> 요소 각각에 대해 삽입 순서대로 실행합니다.</p>

<div>{{EmbedInteractiveExample("pages/js/set-prototype-foreach.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><em>mySet</em>.forEach(<em>callback</em>[, <var>thisArg</var>]<code>)</code></pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>각 요소에 대해 실행할 함수. 다음 세 가지 인수를 받습니다.</dd>
 <dd>
 <dl>
  <dt><code>currentValue</code>, <code>currentKey</code></dt>
  <dd>처리할 현재 요소. <code>Set</code>은 키를 갖지 않으므로 두 인수 모두에 값을 전달합니다.</dd>
  <dt><code>set</code></dt>
  <dd><code>forEach()</code>를 호출한 <code>Set</code>.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd><code>callback</code>을 실행할 때 <code>this</code>로 사용할 값.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>{{jsxref("undefined")}}.</p>

<h2 id="설명">설명</h2>

<p><code>forEach()</code> 메서드는 주어진 <code>callback</code>을 <code>Set</code>에 존재하는 요소에 대해 한 번씩 실행합니다. 삭제한 값에 대해선 실행하지 않습니다. 그러나 존재하되 값이 {{jsxref("undefined")}}인 경우엔 실행합니다.</p>

<p><code>callback</code>은 다음 세 인수와 함께 호출됩니다.</p>

<ul>
 <li><strong>요소 값</strong></li>
 <li><strong>요소 키</strong></li>
 <li><strong>순회 중인 <code>Set</code> 객체</strong></li>
</ul>

<p>그러나 <code>Set</code>은 키 값을 사용하지 않으므로, 처음 두 개의 매개변수 모두 <strong>요소 값</strong>을 받습니다. 이는 {{jsxref("Map.foreach", "Map")}}과 {{jsxref("Array.forEach","Array")}}에서 사용하는 <code>forEach()</code>와 동일한 형태를 유지하기 위해서입니다.</p>

<p><code>thisArg</code> 매개변수를 <code>forEach()</code>에 제공한 경우 <code>callback</code>을 호출할 때 전달해 <code>this</code>의 값으로 쓰입니다. 전달하지 않으면 <code>undefined</code>를 사용하며, 최종 <code>this</code> 값은 {{jsxref("Operators/this", "함수의 <code>this</code>를 결정하는 평소 규칙", "", 0)}}을 따릅니다.</p>

<p><code>forEach()</code>는 각각의 값을 한 번씩 방문하지만, 순회를 끝내기 전에 제거하고 다시 추가한 값은 예외입니다. 방문하기 전 제거한 값에 대해서는 <code>callback</code>을 호출하지 않습니다. <code>forEach()</code>가 끝나기 전 추가한 요소는 방문합니다.</p>

<p><code>forEach()</code>는 <code>Set</code> 객체의 요소에 대해 <code>callback</code>을 실행만 하며 값을 반환하지는 않습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="Set의_내용물_기록하기"><code>Set</code>의 내용물 기록하기</h3>

<p>다음 코드는 <code>Set</code>의 요소 각각을 새로운 줄에 기록합니다.</p>

<pre class="brush:js">function logSetElements(value1, value2, set) {
    console.log('s[' + value1 + '] = ' + value2);
}

new Set(['foo', 'bar', undefined]).forEach(logSetElements);

// 콘솔 로그:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Set.forEach")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Map.prototype.forEach()")}}</li>
</ul>
