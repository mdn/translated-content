---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
tags:
- ECMAScript 2015
- JavaScript
- Method
- Reference
- String
- Polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/raw
---
<div>{{JSRef}}</div>

<p>
    <strong><code>String.raw()</code></strong> 메서드는 <a
        href="/ko/docs/Web/JavaScript/Reference/Template_literals">템플릿 리터럴</a>의 태그 함수입니다. 이는 Pyhon의 <code>r</code>접두사 또는
    C#의 문자열 리터럴의
    <code>@</code> 접두사와 유사합니다. (그러나 동일 하지는 않습니다. 이 문제에 관해서는 여기 <a
        href="https://bugs.chromium.org/p/v8/issues/detail?id=5016">이슈</a>를 참조하십시오.) 이 메서드는 템플릿 리터럴의 윈시 문자열을 가져오는데
    사용됩니다.
    즉, 대체(예: <code>${foo}</code>)는 처리되지만 이스케이프(예: <code>\n</code>)는 처리되지 않습니다.
</p>
<p></p>

<p> </p>

<div>{{EmbedInteractiveExample("pages/js/string-raw.html")}}</div>



<p> </p>

<h2 id="구문">구문</h2>

<pre class="brush: js">String.raw(callSite, ...substitutions)

String.raw`templateString`
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
    <dt><code><var>callSite</var></code></dt>
    <dd>정해진 형식의 템플릿 호출 개체 예:
        <code>{ raw: ['foo', 'bar', 'baz'] }</code>.
    </dd>
    <dt><code><var>...substitutions</var></code></dt>
    <dd>대체값을 포함합니다.</dd>
    <dt><code><var>templateString</var></code></dt>
    <dd>{{jsxref("template_literals", "템플릿 리터럴", "", 1)}}, 선택사항으로 대체를 포함 예:(<code>${...}</code>).</dd>
</dl>

<h3 id="반환값">반환값</h3>

<p>주어진 템플릿 리터럴의 원시 문자열 형식.</p>

<h3 id="예외">예외</h3>

<dl>
    <dt>{{jsxref("TypeError")}}</dt>
    <dd>첫번째 인자의 객체의 포맷이 올바르지 않은 경우 {{jsxref("TypeError")}}예외가 발생(throw)한다.</dd>
</dl>
<h2 id="설명">설명</h2>

<p><code>String.raw()</code>의 경우 보통 템플릿 리터럴과 많이 사용하고, 첫번째 구문의 경우 잘 사용되지 않습니다.
왜냐하면 자바스크립트 엔진이  당신을 위해서 자동으로 적절한 인수로 호출해주기 때문입니다. ( 다른 <a
    href="/ko/docs/Web/JavaScript/Reference/Template_literals#tagged_template_literals">태그 메서드</a>들과 마찬가지로).</p>

<p><code>String.raw()</code>은 템플릿 리터럴의 유일한 내장 함수입니다. 기본 템플릿 기능과 동일하게 작동하며 연결을 수행합니다.  JavaScript 코드를 사용하여 다시 구현할 수도 있습니다.</p>
<h2 id="예시">예시</h2>

<h3 id="String.raw_사용">String.raw() 사용</h3>

<pre class="brush: js">String.raw`Hi\n${2+3}!`;
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', substitutions are processed.

// Normally you would not call String.raw() as a function,
// but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
// Notice the first argument is an object with a 'raw' property,
// whose value is an iterable representing the separated strings
// in the template literal.
// The rest of the arguments are the substitutions.

// The first argument’s 'raw' value can be any iterable, even a string!
// For example, 'test' is treated as ['t', 'e', 's', 't'].
// The following is equivalent to
// `t${0}e${1}s${2}t`:
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
    <li><code>String.raw</code>의 폴리필은 여기를 참고<a
            href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a></li>
    <li><a href="/ko/docs/Web/JavaScript/Reference/Template_literals">Template literals</a>
    </li>
    <li>{{jsxref("String")}}</li>
    <li><a href="/ko/docs/Web/JavaScript/Reference/Lexical_grammar">Lexical grammar</a>
    </li>
</ul>
