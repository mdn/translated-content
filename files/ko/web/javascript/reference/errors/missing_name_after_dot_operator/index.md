---
title: 'SyntaxError: missing name after . operator'
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
translation_of: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">SyntaxError: missing name after . operator
</pre>

<h2 id="에러_타입">에러 타입</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="무엇이_잘_못_되었을까">무엇이 잘 못 되었을까?</h2>

<p>점 연산자 (<code>.</code>)는 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">프로퍼티 접근</a>을 위해 사용합니다. 접근해야 하는 프로퍼티 명은 제대로 명시 해야 합니다. 연산 프로퍼티에 접근하려면, 점 연산자를 사용하지 않고 대괄호를 사용하는 것으로 프로퍼티 접근 방식을 바꿔야 합니다. 이런 방식들이 표현식의 계산을 수행시켜줄 것입니다. 아마 당신은 연결을 하려고 했을 것입니다. 이 경우에는 더하기 연산자(<code>+</code>)가 필요합니다. 아래의 예제를 봐주세요. </p>

<h2 id="예제">예제</h2>

<h3 id="프로퍼티_접근">프로퍼티 접근</h3>

<p>JavaScript <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">프로퍼티 접근자</a>는 점(.) 또는 대괄호(<code>[]</code>) 중 하나만 사용한다. 대괄호는 연산 프로퍼티에 접근을 허용합니다.   </p>

<pre class="brush: js example-bad">var obj = { foo: { bar: "baz", bar2: "baz2" } };
var i = 2;

obj.[foo].[bar]
// SyntaxError: missing name after . operator

obj.foo."bar"+i;
// SyntaxError: missing name after . operator
</pre>

<p>이 코드를 고치려면, 오브젝트에 이런 식으로 접근해야 합니다.:</p>

<pre class="brush: js example-good">obj.foo.bar; // "baz"
// 또는 대신에
obj["foo"]["bar"]; // "baz"

// 연산 프로퍼티는 대괄호가 필요합니다.
obj.foo["bar" + i]; // "baz2"
</pre>

<h3 id="프로퍼티_접근_vs._연결">프로퍼티 접근 vs. 연결</h3>

<p>다른 프로그램 언어를 사용하다 왔다면 ( {{Glossary("PHP")}} 같은), 점 연산자(<code>.</code>)와 연결 연산자(<code>+</code>)를 혼동해서 쓰기가 더 쉬울 것입니다.</p>

<pre class="brush: js example-bad">console.log("Hello" . "world");

// SyntaxError: missing name after . operator</pre>

<p>대신에 결합을 위해서는 더하기 표식을 사용해야 합니다.:</p>

<pre class="brush: js example-good">console.log("Hello" + "World");</pre>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">Property accessors</a></li>
</ul>
