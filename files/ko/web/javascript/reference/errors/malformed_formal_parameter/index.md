---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
translation_of: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: malformed formal parameter (Firefox)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="무엇이_잘못_되었을까요">무엇이 잘못 되었을까요?</h2>

<p>코드에는 최소한 두 개의 인수가 전달 된 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code> 생성자가 있습니다. 마지막 인수는 작성중인 새 함수의 소스코드 입니다.  나머지는 모두 새 함수의 인수 목록을 구성합니다.</p>

<p>인수 목록이 어딘가 잘못되었습니다. 아마도 실수로 인수 이름으로 if 또는 var와 같은 키워드를 선택했거나 인수 목록에 갈곳 잃은 구두점이 있을 수 있습니다. 또는 실수로 숫자나 개체와 같은 잘못된 값을 전달한 것일 수 있습니다.</p>

<h2 id="그래_내_문제가_해결됐어._근데_왜_말_안해줬어">그래, 내 문제가 해결됐어. 근데 왜 말 안해줬어?</h2>

<p>틀림 없이 오류 메세지의 표현은 다소 이상한 부분이 있습니다. "공식 매개 변수"는 "함수 인수"를 말하는 좋은 방법입니다. 우리는 "잘못된 형식의 단어를 사용했다"라고 표현 합니다.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">var f = Function('x y', 'return x + y;');
// SyntaxError (missing a comma)

var f = Function('x,', 'return x;');
// SyntaxError (extraneous comma)

var f = Function(37, "alert('OK')");
// SyntaxError (numbers can't be argument names)
</pre>

<h3 id="Valid_cases">Valid cases</h3>

<pre class="brush: js example-good">var f = Function('x, y', 'return x + y;');  // correctly punctuated

var f = Function('x', 'return x;');

// if you can, avoid using Function - this is much faster
var f = function(x) { return x; };
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Functions">About functions</a></li>
 <li><a href="https://www.gutenberg.org/ebooks/84"><em>Frankenstein</em> by Mary Wollstonecraft Shelley, full e-text</a> ("Cursed (although I curse myself) be the hands that formed you! You have made me wretched beyond expression. You have left me no power to consider whether I am just to you or not. Begone! Relieve me from the sight of your detested form.")</li>
</ul>
