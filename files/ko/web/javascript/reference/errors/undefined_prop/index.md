---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
translation_of: Web/JavaScript/Reference/Errors/Undefined_prop
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">ReferenceError: reference to undefined property "x" (Firefox)
</pre>

<h2 id="에러_형식">에러 형식</h2>

<p>엄격 모드(<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>)에서만 발생하는 {{jsxref("ReferenceError")}} 경고.</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>이 스크립트는 존재하지 않는 객체의 속성에 접근을 시도했습니다. 요소에 접근하는 방법에는 두 가지가 있습니다.; 더 자세히 알고 싶으시다면, 속성 접근자(<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessors</a>) 참조 문서를 봐주세요. </p>

<p>정의되지 않은 속성 참조에 대한 에러는 엄격 모드 코드(<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode code</a>)에서만 발생합니다. 비-엄격모드의 코드에서는 존재하지 않는 속성에 대한 접근은 조용히 무시됩니다.</p>

<h2 id="예">예</h2>

<h3 id="허용되지_않는_경우">허용되지 않는 경우</h3>

<p>이 경우에는, 속성 <code>bar</code> 는 정의되지 않은 속성으로, <code>ReferenceError</code> 가 발생합니다.</p>

<pre class="brush: js example-bad">"use strict";

var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
</pre>

<h3 id="허용되는_경우">허용되는 경우</h3>

<p>에러를 피하기 위해서는, 접근을 시도하기 앞서, 객체에 <code>bar</code> 에 대한 정의를 추가하거나 <code>bar</code> 속성의 존재 여부를 확인해야 합니다.; 아래와 같이 {{jsxref("Object.prototype.hasOwnProperty()")}} method)를 사용하는 것이 하나의 방법이 될 수 있습니다.:</p>

<pre class="brush: js example-good">"use strict";

var foo = {};

// bar 속성을 정의한다.

foo.bar = "moon";
console.log(foo.bar); // "moon"

// bar에 접근하기 전에 존재 하는지 확인한다.

if (foo.hasOwnProperty("bar") {
  console.log(foo.bar);
}</pre>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a></li>
</ul>
