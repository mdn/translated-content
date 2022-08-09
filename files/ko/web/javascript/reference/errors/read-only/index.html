---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
translation_of: Web/JavaScript/Reference/Errors/Read-only
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">TypeError: "x" is read-only (Firefox)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #&lt;Object&gt; (Chrome)
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
</pre>

<h2 id="에러_유형">에러 유형</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="무엇이_잘못_된_걸까">무엇이 잘못 된 걸까?</h2>

<p>전역변수 또는 객체 프로퍼티가 읽기 전용으로 할당된 경우입니다.(엄밀히 따지자면 <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Writable_attribute">쓰기가 불가능한 데이터 속성입니다.</a>)</p>

<p>이 에러는 <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">엄격모드</a>에서만 등장합니다.  엄격하지 않은 모드에서는 읽기전용 속성은 묵시적으로 무시됩니다.</p>

<h2 id="예시">예시</h2>

<h3 id="적절하지_않은_예">적절하지 않은 예</h3>

<p>읽기 전용 속성은 아주 흔한 것은 아니지만, {{jsxref("Object.defineProperty()")}} 나 {{jsxref("Object.freeze()")}} 를 이용해 만들어 질 수 있습니다.</p>

<pre class="brush: js example-bad">'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
obj.score = 0;  // TypeError

'use strict';
Object.defineProperty(this, 'LUNG_COUNT', {value: 2, writable: false});
LUNG_COUNT = 3;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError
</pre>

<p>자바 스크립트에는 몇 가지 읽기 전용 속성이 내장되어 있습니다. 아마도 수학적 상수를 재정의하려고 한 것 같습니다.</p>

<pre class="brush: js example-bad">'use strict';
Math.PI = 4;  // TypeError
</pre>

<p>이렇게는 불가능합니다.</p>

<p>전역변수 <code>undefined</code>  또한 읽기전용으로, 사람들이 모두 좋아하지 않는 "undefined is not a function" 에러가 다음과 같은 경우 등장합니다:</p>

<pre class="brush: js example-bad">'use strict';
undefined = function() {};  // TypeError: "undefined" is read-only
</pre>

<h3 id="적절한_예">적절한 예</h3>

<pre class="brush: js example-good">'use strict';
var obj = Object.freeze({name: 'Score', points: 157});
obj = {name: obj.name, points: 0};   // replacing it with a new object works

'use strict';
var LUNG_COUNT = 2;  // a `var` works, because it's not read-only
LUNG_COUNT = 3;  // ok (anatomically unlikely, though)
</pre>

<h2 id="더보기">더보기</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li><a href="https://www.answers.com/Q/Which_animals_have_three_lungs">"Which animals have three lungs?" on answers.com</a></li>
 <li><a href="https://aliens.wikia.com/wiki/Klingon">Klingons</a> (another answer to that query)</li>
</ul>
