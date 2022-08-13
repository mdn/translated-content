---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/includes
---
<div>{{JSRef}}</div>

<p><strong><code>includes()</code></strong> 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 <code>true</code> 또는 <code>false</code> 로 반환합니다.</p>

<p>{{EmbedInteractiveExample("pages/js/string-includes.html")}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code><var>str</var>.includes(<var>searchString</var>[, <var>position</var>])</code></pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>searchString</code></dt>
 <dd>이 문자열에서 찾을 다른 문자열.</dd>
 <dt><code>position</code> {{optional_inline}}</dt>
 <dd><code>searchString</code>을 찾기 시작할 위치. 기본값 0.</dd>
</dl>

<h3 id="반환값">반환값</h3>

<p>문자열을 찾아내면 <code>true</code>. 실패하면 <code>false</code>.</p>

<h2 id="설명">설명</h2>

<p><code>includes()</code> 메서드를 사용해 문자열 내에 찾고자 하는 다른 문자열이 있는지 확인할 수 있습니다.</p>

<h3 id="대소문자_구분">대소문자 구분</h3>

<p><code>includes()</code> 메서드는 대소문자를 구별합니다. 예를 들어 아래 코드는 <code>false</code>를 반환합니다.</p>

<pre class="brush: js">'Blue Whale'.includes('blue'); // returns false
</pre>

<h2 id="예제">예제</h2>

<h3 id="includes()_사용하기"><code>includes()</code> 사용하기</h3>

<pre class="brush: js">var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
</pre>

<h2 id="폴리필">폴리필</h2>

<p>이 메서드는 ECMAScript 6 규격에 포함되었습니다만 아직까지는 모든 JavaScrpt가 이 기능을 지원하고 있지는 않습니다. 하지만 여러분은 이 메서드를 다음과 같이 쉽게 <a href="https://en.wikipedia.org/wiki/Polyfill">polyfill</a> 할 수 있습니다.</p>

<pre class="brush: js">if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length &gt; this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>{{Compat("javascript.builtins.String.includes")}}</div>

<h2 id="String.prototype.contains">String.prototype.contains</h2>

<p>Firefox 18 - 39에서, <code>include()</code> 메서드의 이름은 <code>contains()</code>이었습니다. contains() 함수는 아래와 같은 이유로 {{bug(1102219)}}에서 <code>includes()</code>로 변경되었습니다:</p>

<p>It's been <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=789036">reported</a> that some websites using MooTools 1.2 broke on Firefox 17. This version of MooTools checks whether <code>String.prototype.contains()</code> exists and, if it doesn't,  MooTools adds its own function. With the introduction of this function in Firefox 17, the behavior of that check changed in a way that causes code based on MooTools' <code>String.prototype.contains()</code> implementation to break. As a result, the implementation was <a href="https://hg.mozilla.org/releases/mozilla-aurora/rev/086db97198a8">disabled</a> in Firefox 17 and <code>String.prototype.contains()</code> was available one version later, in Firefox 18, when <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=789036#c32">outreach to MooTools </a>was leading to the <a href="http://mootools.net/blog/2013/02/19/mootools-1-2-6-released">release of MooTools version 1.2.6</a>.</p>

<p>MooTools 1.3 forces its own version of <code>String.prototype.contains()</code>, so websites relying on it should not break. However, you should note that <a href="http://mootools.net/core/docs/1.3.2/Types/String#String-method:-contains">MooTools 1.3 signature</a> and ECMAScript 6 signatures for this method differ (on the second argument). Later, <a href="https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note">MooTools 1.5+ changed the signature to match the ES6 standard.</a></p>

<p>Firefox 48에서, <code>String.prototype.contains()</code>은 제거되었습니다. 오직 <code>String.prototype.includes()</code>만 사용할 수 있습니다.</p>

<h2 id="관련문서">관련문서</h2>

<ul>
 <li>{{jsxref("Array.prototype.includes()")}} {{experimental_inline}}</li>
 <li>{{jsxref("TypedArray.prototype.includes()")}} {{experimental_inline}}</li>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("String.prototype.startsWith()")}}</li>
 <li>{{jsxref("String.prototype.endsWith()")}}</li>
</ul>
