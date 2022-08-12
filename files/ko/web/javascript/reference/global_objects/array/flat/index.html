---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flat
---
<div>{{JSRef}}</div>

<p><code><strong>flat()</strong></code> 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성합니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">const <em>newArr</em> = <em>arr</em>.flat([<em>depth</em>])</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>depth</code> {{optional_inline}}</dt>
 <dd>중첩 배열 구조를 평탄화할 때 사용할 깊이 값. 기본값은 1입니다.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>하위 배열을 이어붙인 새로운 배열.</p>

<h2 id="예제">예제</h2>

<h3 id="중첩_배열_평탄화">중첩 배열 평탄화</h3>

<pre class="brush: js">const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</pre>

<h3 id="배열_구멍_제거">배열 구멍 제거</h3>

<p><code>flat</code> 메서드는 배열의 구멍도 제거합니다.</p>

<pre class="brush: js">const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]</pre>

<h2 id="대안">대안</h2>

<h3 id="reduce와_concat"><code>reduce</code>와 <code>concat</code></h3>

<pre class="brush: js">const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) =&gt; acc.concat(val), []);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = arr =&gt; [].concat(...arr);</pre>

<h3 id="reduce_concat_isArray_재귀"><code>reduce</code> + <code>concat</code> + <code>isArray</code> + 재귀</h3>

<pre class="brush: js">const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d &gt; 0 ? arr.reduce((acc, val) =&gt; acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]</pre>

<h3 id="스택">스택</h3>

<pre class="brush: js">// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
  const stack = [...input];
  const res = [];
  while(stack.length) {
    // pop value from stack
    const next = stack.pop();
    if(Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatten(arr);
// [1, 2, 3, 4, 5, 6]</pre>

<h3 id="Generator_함수"><code>Generator</code> 함수</h3>

<pre class="brush: js">function* flatten(array, depth) {
    if(depth === undefined) {
      depth = 1;
    }
    for(const item of array) {
        if(Array.isArray(item) &amp;&amp; depth &gt; 0) {
          yield* flatten(item, depth - 1);
        } else {
          yield item;
        }
    }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("javascript.builtins.Array.flat")}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Array.prototype.flatMap()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
