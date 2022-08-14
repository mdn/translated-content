---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
tags:
  - Array
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
---
<div>{{JSRef}}</div>

<p><code><strong>toLocaleString()</strong></code> 메서드는 배열의 요소를 나타내는 문자열을 반환합니다. 요소는 <code>toLocaleString</code> 메서드를 사용하여 문자열로 변환되고 이 문자열은 locale 고유 문자열(가령 쉼표 “,”)에 의해 분리됩니다.</p>

<p>{{EmbedInteractiveExample("pages/js/array-tolocalestring.html")}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><var>arr</var>.toLocaleString([locales[, options]]);</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>locales</code> {{optional_inline}}</dt>
 <dd>A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the <code>locales</code> argument, see the {{jsxref("Intl")}} page.</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>An object with configuration properties, for numbers see {{jsxref("Number.prototype.toLocaleString()")}}, and for dates see {{jsxref("Date.prototype.toLocaleString()")}}.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>배열의 요소를 표현하는 문자열.</p>

<h2 id="설명">설명</h2>

<p>배열의 요소는 <code>toLocaleString</code> 메서드를 사용하여 문자열로 변환됩니다:</p>

<ul>
 <li><code>Object</code>: {{jsxref("Object.prototype.toLocaleString()")}}</li>
 <li><code>Number</code>: {{jsxref("Number.prototype.toLocaleString()")}}</li>
 <li><code>Date</code>: {{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>

<h2 id="예제">예제</h2>

<h3 id="toLocaleString_사용"><code>toLocaleString</code> 사용</h3>

<pre class="brush: js">var number = 1337;
var date = new Date();
var myArr = [number, date, 'foo'];

var str = myArr.toLocaleString();

console.log(str);
// '1337,6.12.2013 19:37:35,foo' 출력(log)
// Europe/Berlin 시간대로 German (de-DE) locale에서 실행하는 경우
</pre>

<h2 id="폴리필">폴리필</h2>

<pre class="brush: js">// https://tc39.github.io/ecma402/#sup-array.prototype.tolocalestring
if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, 'toLocaleString', {
    value: function(locales, options) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var a = Object(this);

      // 2. Let len be ? ToLength(? Get(A, "length")).
      var len = a.length &gt;&gt;&gt; 0;

      // 3. Let separator be the String value for the
      //    list-separator String appropriate for the
      //    host environment's current locale (this is
      //    derived in an implementation-defined way).
      // NOTE: In this case, we will use a comma
      var separator = ',';

      // 4. If len is zero, return the empty String.
      if (len === 0) {
        return '';
      }

      // 5. Let firstElement be ? Get(A, "0").
      var firstElement = a[0];
      // 6. If firstElement is undefined or null, then
      //  a.Let R be the empty String.
      // 7. Else,
      //  a. Let R be ?
      //     ToString(?
      //       Invoke(
      //        firstElement,
      //        "toLocaleString",
      //        « locales, options »
      //       )
      //     )
      var r = firstElement == null ?
        '' : firstElement.toLocaleString(locales, options);

      // 8. Let k be 1.
      var k = 1;

      // 9. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let S be a String value produced by
        //   concatenating R and separator.
        var s = r + separator;

        // b. Let nextElement be ? Get(A, ToString(k)).
        var nextElement = a[k];

        // c. If nextElement is undefined or null, then
        //   i. Let R be the empty String.
        // d. Else,
        //   i. Let R be ?
        //     ToString(?
        //       Invoke(
        //        nextElement,
        //        "toLocaleString",
        //        « locales, options »
        //       )
        //     )
        r = nextElement == null ?
          '' : nextElement.toLocaleString(locales, options);

        // e. Let R be a String value produced by
        //   concatenating S and R.
        r = s + r;

        // f. Increase k by 1.
        k++;
      }

      // 10. Return R.
      return r;
    }
  });
}
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Array.toLocaleString")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Array.prototype.toString()")}}</li>
 <li>{{jsxref("Intl")}}</li>
 <li>{{jsxref("Object.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Number.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>
