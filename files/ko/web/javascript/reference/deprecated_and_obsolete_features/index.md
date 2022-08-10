---
title: Deprecated and obsolete features
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
tags:
  - Deprecated
  - JavaScript
  - Obsolete
translation_of: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---
<div>{{JsSidebar("More")}}</div>

<p>본 페이지는 자바스크립트의 제외 예정인(즉, 아직 사용할 수 있지만 제거 계획이 있는) 기능과 제외된(즉, 더 이상 사용할 수 없는) 기능을 나열합니다.</p>

<h2 id="제외_예정_기능">제외 예정 기능</h2>

<p>아래 기능은 아직 사용할 수 있지만, 언젠가 제거될 예정이므로 주의를 기울여야 합니다. 작성한 코드가 항목 중 하나를 포함하고 있다면 제거해야 합니다.</p>

<h3 id="RegExp_속성">RegExp 속성</h3>

<p>아래 속성은 제외 예정입니다. 이는 {{jsxref("String.replace")}} 사용에 영향을 주지 않습니다.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Property</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.n", "$1-$9")}}</td>
   <td>
    <p>Parenthesized substring matches, if any.<br>
     <strong>Warning:</strong> Using these properties can result in problems, since browser extensions can modify them. Avoid them!</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.input", "$_")}}</td>
   <td>See <code>input</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.multiline", "$*")}}</td>
   <td>See <code>multiline</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
   <td>See <code>lastMatch</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastParen", "$+")}}</td>
   <td>See <code>lastParen</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.leftContext", "$`")}}</td>
   <td>See <code>leftContext</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.rightContext", "$'")}}</td>
   <td>See <code>rightContext</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.input", "input")}}</td>
   <td>The string against which a regular expression is matched.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastMatch", "lastMatch")}}</td>
   <td>The last matched characters.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastParen", "lastParen")}}</td>
   <td>The last parenthesized substring match, if any.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.leftContext", "leftContext")}}</td>
   <td>The substring preceding the most recent match.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.rightContext", "rightContext")}}</td>
   <td>The substring following the most recent match.</td>
  </tr>
 </tbody>
</table>

<p>The following are now properties of <code>RegExp</code> instances, no longer of the <code>RegExp</code> object:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Property</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.global", "global")}}</td>
   <td>Whether or not to test the regular expression against all possible matches in a string, or only against the first.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.ignoreCase", "ignoreCase")}}</td>
   <td>Whether or not to ignore case while attempting a match in a string.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.lastIndex", "lastIndex")}}</td>
   <td>The index at which to start the next match.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.multiline", "multiline")}}</td>
   <td>Whether or not to search in strings across multiple lines.</td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp.source", "source")}}</td>
   <td>패턴의 텍스트.</td>
  </tr>
 </tbody>
</table>

<h3 id="RegExp_메서드">RegExp 메서드</h3>

<ul>
 <li>{{jsxref("RegExp.compile", "compile()")}} 메서드는 제외될 예정입니다.</li>
 <li><code>valueOf</code> 메서드는 더 이상 <code>RegExp</code> 전용이 아닙니다. {{jsxref("Object.valueOf()")}}를 사용하세요.</li>
</ul>

<h3 id="Function_속성">Function 속성</h3>

<ul>
 <li>The {{jsxref("Global_Objects/Function/caller", "caller")}} and {{jsxref("Global_Objects/Function/arguments", "arguments")}} properties are deprecated, because they leak the function caller. Instead of the arguments property, you should use the {{jsxref("Functions/arguments", "arguments")}} object inside function closures.</li>
</ul>

<h3 id="Legacy_generator">Legacy generator</h3>

<ul>
 <li>{{jsxref("Statements/Legacy_generator_function", "Legacy generator function statement")}} and {{jsxref("Operators/Legacy_generator_function", "Legacy generator function expression")}} are deprecated. Use {{jsxref("Statements/function*", "function* statement")}} and {{jsxref("Operators/function*", "function* expression")}} instead.</li>
 <li>{{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 Array comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} and {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 Generator comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} are deprecated.</li>
</ul>

<h3 id="Iterator">Iterator</h3>

<ul>
 <li>{{jsxref("Global_Objects/StopIteration", "StopIteration")}} is deprecated.</li>
 <li>{{jsxref("Global_Objects/Iterator", "Iterator")}} is deprecated.</li>
</ul>

<h3 id="Object_methods">Object methods</h3>

<ul>
 <li>{{jsxref("Object.watch", "watch")}} and {{jsxref("Object.unwatch", "unwatch")}} are deprecated. Use {{jsxref("Proxy")}} instead.</li>
 <li><code>__iterator__</code> is deprecated.</li>
 <li>{{jsxref("Object.noSuchMethod", "__noSuchMethod__")}} is deprecated. Use {{jsxref("Proxy")}} instead.</li>
</ul>

<h3 id="Date_methods">Date methods</h3>

<ul>
 <li>{{jsxref("Global_Objects/Date/getYear", "getYear")}} and {{jsxref("Global_Objects/Date/setYear", "setYear")}} are affected by the Year-2000-Problem and have been subsumed by {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} and {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}}.</li>
 <li>You should use {{jsxref("Global_Objects/Date/toISOString", "toISOString")}} instead of the deprecated {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}} method in new code.</li>
 <li>{{jsxref("Global_Objects/Date/toLocaleFormat", "toLocaleFormat")}} is deprecated.</li>
</ul>

<h3 id="Functions">Functions</h3>

<ul>
 <li>{{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}} are deprecated. Use regular {{jsxref("Operators/function", "functions")}} or {{jsxref("Functions/Arrow_functions", "arrow functions", "", 1)}} instead.</li>
</ul>

<h3 id="Proxy">Proxy</h3>

<ul>
 <li><a href="/en-US/docs/Archive/Web/Old_Proxy_API">Proxy.create</a> and <a href="/en-US/docs/Archive/Web/Old_Proxy_API">Proxy.createFunction</a> are deprecated. Use {{jsxref("Proxy")}} instead.</li>
 <li>The following traps are obsolete:
  <ul>
   <li><code>hasOwn</code> ({{bug(980565)}}, Firefox 33).</li>
   <li><code>getEnumerablePropertyKeys</code> ({{bug(783829)}}, Firefox 37)</li>
   <li><code>getOwnPropertyNames</code> ({{bug(1007334)}}, Firefox 33)</li>
   <li><code>keys</code> ({{bug(1007334)}}, Firefox 33)</li>
  </ul>
 </li>
</ul>

<h3 id="Escape_sequences">Escape sequences</h3>

<ul>
 <li>Octal escape sequences (\ followed by one, two, or three octal digits) are deprecated in string and regular expression literals.</li>
 <li>The {{jsxref("Global_Objects/escape", "escape")}} and {{jsxref("Global_Objects/unescape", "unescape")}} functions are deprecated. Use {{jsxref("Global_Objects/encodeURI", "encodeURI")}}, {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Global_Objects/decodeURI", "decodeURI")}} or {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} to encode and decode escape sequences for special characters.</li>
</ul>

<h3 id="String_methods">String methods</h3>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/tag/HTML%20wrapper%20methods">HTML wrapper methods</a> like {{jsxref("String.prototype.fontsize")}} and {{jsxref("String.prototype.big")}}.</li>
 <li>{{jsxref("String.prototype.quote")}} is removed from Firefox 37.</li>
 <li>non standard <code>flags</code> parameter in {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, and {{jsxref("String.prototype.replace")}} are deprecated.</li>
</ul>

<h2 id="Obsolete_features">Obsolete features</h2>

<p>These obsolete features have been entirely removed from JavaScript and can no longer be used as of the indicated version of JavaScript.</p>

<h3 id="Object">Object</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Property</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Object/count", "__count__")}}</td>
   <td>Returns the number of enumerable properties directly on a user-defined object.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Object/Parent", "__parent__")}}</td>
   <td>Points to an object's context.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Object/eval", "Object.prototype.eval()")}}</td>
   <td>Evaluates a string of JavaScript code in the context of the specified object.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.observe()")}}</td>
   <td>Asynchronously observing the changes to an object.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.unobserve()")}}</td>
   <td>Remove observers.</td>
  </tr>
  <tr>
   <td>{{jsxref("Object.getNotifier()")}}</td>
   <td>Creates an object that allows to synthetically trigger a change.</td>
  </tr>
 </tbody>
</table>

<h3 id="Function">Function</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Property</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Function/arity", "arity")}}</td>
   <td>Number of formal arguments.</td>
  </tr>
 </tbody>
</table>

<h3 id="Array">Array</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <td>Property</td>
   <td>Description</td>
  </tr>
  <tr>
   <td>{{jsxref("Array.observe()")}}</td>
   <td>Asynchronously observing changes to Arrays.</td>
  </tr>
  <tr>
   <td>{{jsxref("Array.unobserve()")}}</td>
   <td>Remove observers.</td>
  </tr>
 </tbody>
</table>

<h3 id="Number">Number</h3>

<ul>
 <li>{{jsxref("Number.toInteger()")}}</li>
</ul>

<h3 id="ParallelArray">ParallelArray</h3>

<ul>
 <li>{{jsxref("ParallelArray")}}</li>
</ul>

<h3 id="Statements">Statements</h3>

<ul>
 <li>{{jsxref("Statements/for_each...in", "for each...in")}} is deprecated. Use {{jsxref("Statements/for...of", "for...of")}} instead.</li>
 <li>Destructuring {{jsxref("Statements/for...in", "for...in")}} is deprecated. Use {{jsxref("Statements/for...of", "for...of")}} instead.</li>
 <li>let blocks and let expressions are obsolete.</li>
</ul>

<h3 id="E4X">E4X</h3>

<p>See <a href="/en-US/docs/Archive/Web/E4X">E4X</a> for more information.</p>

<h3 id="Sharp_variables">Sharp variables</h3>

<p>See <a href="/en-US/docs/Archive/Web/Sharp_variables_in_JavaScript">Sharp variables in JavaScript</a> for more information.</p>
