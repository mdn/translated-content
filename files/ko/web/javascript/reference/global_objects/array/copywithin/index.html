---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---
<div>{{JSRef}}</div>

<p><strong><code>copyWithin()</code></strong> 메서드는 배열의 일부를 얕게 복사한 뒤, 동일한 배열의 다른 위치에 덮어쓰고 그 배열을 반환합니다. 이 때, 크기(배열의 길이)를 수정하지 않고 반환합니다.</p>

<p>{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>arr</var>.copyWithin(<var>target[, start[, end]]</var>)
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>복사한 시퀀스(값)를 넣을 위치를 가리키는 0 기반 인덱스. 음수를 지정하면 인덱스를 배열의 끝에서부터 계산합니다.<br>
 <br>
 <code>target</code>이 <code>arr.length</code>보다 크거나 같으면 아무것도 복사하지 않습니다. <code>target</code>이 <code>start</code> 이후라면 복사한 시퀀스를 <code>arr.length</code>에 맞춰 자릅니다.</dd>
 <dt><code>start</code> {{optional_inline}}</dt>
 <dd>복사를 시작할 위치를 가리키는 0 기반 인덱스. 음수를 지정하면 인덱스를 배열의 끝에서부터 계산합니다.<br>
 <br>
 기본값은 0으로, <code>start</code>를 지정하지 않으면 배열의 처음부터 복사합니다.</dd>
 <dt><code>end</code> {{optional_inline}}</dt>
 <dd>복사를 끝낼 위치를 가리키는 0 기반 인덱스. <code>copyWithin</code>은 <code>end</code> 인덱스 이전까지 복사하므로 <code>end</code> 인덱스가 가리키는 요소는 제외합니다. 음수를 지정하면 인덱스를 배열의 끝에서부터 계산합니다.<br>
 <br>
 기본값은 <code>arr.length</code>로, <code>end</code>를 지정하지 않으면 배열의 끝까지 복사합니다.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>수정한 배열.</p>

<h2 id="설명">설명</h2>

<p><code>copyWithin</code>은 C와 C++의 <code>memmove</code>처럼 작동하고, 복사와 대입이 하나의 연산에서 이루어지므로 {{jsxref("Array")}}의 데이터를 이동할 때 사용할 수 있는 고성능 메서드입니다. {{jsxref("TypedArray.prototype.copyWithin()", "TypedArray")}}의 동명 메서드에서 이 특징이 두드러집니다. 붙여넣은 시퀀스의 위치가 복사한 범위와 겹치더라도 최종 결과는 원본 배열에서 복사한 것과 같습니다.</p>

<p><code>copyWithin</code> 함수는 제네릭 함수로, <code>this</code> 값이 {{jsxref("Array")}} 객체일 필요는 없습니다.</p>

<p><code>copyWithin</code> 메서드는 변경자 메서드로, <code>this</code>의 길이는 바꾸지 않지만 내용을 바꾸며 필요하다면 새로운 속성을 생성합니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 TypedArray는 Array의 하위 클래스
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 아직 ES2015를 사용할 수 없는 환경에서
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
</pre>

<h2 id="폴리필">폴리필</h2>

<pre><code>if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin = function(target, start/*, end*/) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length &gt;&gt;&gt; 0;

    // Steps 6-8.
    var relativeTarget = target &gt;&gt; 0;

    var to = relativeTarget &lt; 0 ?
      Math.max(len + relativeTarget, 0) :
      Math.min(relativeTarget, len);

    // Steps 9-11.
    var relativeStart = start &gt;&gt; 0;

    var from = relativeStart &lt; 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 12-14.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end &gt;&gt; 0;

    var final = relativeEnd &lt; 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 15.
    var count = Math.min(final - from, len - to);

    // Steps 16-17.
    var direction = 1;

    if (from &lt; to &amp;&amp; to &lt; (from + count)) {
      direction = -1;
      from += count - 1;
      to += count - 1;
    }

    // Step 18.
    while (count &gt; 0) {
      if (from in O) {
        O[to] = O[from];
      } else {
        delete O[to];
      }

      from += direction;
      to += direction;
      count--;
    }

    // Step 19.
    return O;
  };
}</code></pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>{{Compat("javascript.builtins.Array.copyWithin")}}</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
</ul>
