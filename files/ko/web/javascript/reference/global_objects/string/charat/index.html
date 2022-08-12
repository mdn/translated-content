---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/charAt
---
<div>{{JSRef}}</div>

<p><strong>charAt() </strong>함수는 문자열에서 특정 인덱스에 위치하는  유니코드 단일문자를 반환합니다. </p>

<div>{{EmbedInteractiveExample("pages/js/string-charat.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code><var>str</var>.charAt(<var>index</var>)</code></pre>

<h3 id="매개변수">매개변수</h3>

<ul>
 <li>0과 문자열의 길이 - 1 사이의 정수값. </li>
 <li>인자를 생략하면 기본값으로 0를 설정되고 첫 문자를 반환한다. </li>
</ul>

<dl>
 <dt><code>index</code></dt>
</dl>

<h3 id="반환_값">반환 값</h3>

<ul>
 <li>지정된 인덱스에 해당하는 유니코드 단일문자를 반환한다.</li>
 <li>만약 인덱스가 문자열 길이보다 큰 경우 빈 문자열 (예) " " 을 반환한다.  </li>
</ul>

<h2 id="설명">설명</h2>

<p>문자열 내의 문자는 왼쪽에서 오른쪽으로 순번(인덱스)이 매겨집니다. 첫 번째 문자의 순번은 0, 그리고 <code>stringName</code> 이라는 이름을 가진 문자열의 마지막 문자 순번은 <code>stringName.length - 1 </code>입니다. <code>index</code>가 문자열 길이를 벗어나면 빈 문자열을 반환하게 됩니다.</p>

<p><code>index</code>를 제공하지 않으면 기본값은 0입니다.</p>

<h2 id="예제">예제</h2>

<h3 id="문자열_내의_다른_위치에_있는_문자들을_출력하기">문자열 내의 다른 위치에 있는 문자들을 출력하기</h3>

<p>아래 예제는 문자열 <code>"Brave new world"</code>의 다른 위치에 있는 문자들을 출력합니다.</p>

<pre class="brush: js">var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
</pre>

<p>프로그램의 실행 결과는 아래와 같습니다.</p>

<pre class="brush: js">The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
</pre>

<h3 id="문자열_내의_모든_문자_얻기">문자열 내의 모든 문자 얻기</h3>

<p>아래 예제는 문자열 전체를 순회하며 각 문자가 완전한지 확인하는 프로그램입니다. 심지어 <a href="https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C_%ED%8F%89%EB%A9%B4">기본 다국어 평면(Basic Multilingual Plane)</a>에 포함되지 않은 문자들이 포함되어 있다고 하더라도 잘 동작합니다. </p>

<pre class="brush: js">var str = 'A \uD87E\uDC04 Z'; // 기본 다국어 평면에 포함되지 않는 문자를 사용합니다.
for (var i = 0, chr; i &lt; str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  }
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning a variable to represent the
  // individual character

  console.log(chr);
}

function getWholeChar(str, i) {
  var code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return ''; // Position not found
  }
  if (code &lt; 0xD800 || code &gt; 0xDFFF) {
    return str.charAt(i);
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
    if (str.length &lt;= (i + 1)) {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i + 1);
      if (0xDC00 &gt; next || next &gt; 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return str.charAt(i) + str.charAt(i + 1);
  }
  // Low surrogate (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 &gt; prev || prev &gt; 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  // We can pass over low surrogates now as the second component
  // in a pair which we have already processed
  return false;
}
</pre>

<p><a href="/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">비구조화 할당</a>을 허용하는 ECMAScript 2016 환경에서는 아래 예제 코드가 더 간결하고, 문자가 <a href="https://ko.wikipedia.org/wiki/UTF-16">서러게이트 페어</a>가 되는 것을 허용할 때는 증가해야 하는 변수를 자동적으로 증가하기에 위의 코드보다 다소 더 유연합니다.</p>

<pre class="brush: js">var str = 'A\uD87E\uDC04Z'; // We could also use a non-BMP character directly
for (var i = 0, chr; i &lt; str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i);
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  console.log(chr);
}

function getWholeCharAndI(str, i) {
  var code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return ''; // Position not found
  }
  if (code &lt; 0xD800 || code &gt; 0xDFFF) {
    return [str.charAt(i), i]; // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 &lt;= code &amp;&amp; code &lt;= 0xDBFF) {
    if (str.length &lt;= (i + 1)) {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i + 1);
      if (0xDC00 &gt; next || next &gt; 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return [str.charAt(i) + str.charAt(i + 1), i + 1];
  }
  // Low surrogate (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (0xD800 &gt; prev || prev &gt; 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  // Return the next character instead (and increment)
  return [str.charAt(i + 1), i + 1];
}
</pre>

<h3 id="기본다국어평면(Basic-Multilingual-Plane)이_아닌_문자들을_지원하도록_charAt()_수정하기">기본다국어평면(Basic-Multilingual-Plane)이 아닌 문자들을 지원하도록 <code>charAt()</code> 수정하기</h3>

<p>어떠한 non-BMP 문자들이 나타났는지 호출자가 알 필요가 없기 때문에 non-BMP 문자들을 지원하도록 하는데는 앞의 예제들이 더 자주 사용되지만, 인덱스로 문자를 선택하는데 있어서 문자열 내에 서로게이트 페어들이 하나의 문자들로 처리되길 원한다면, 아래 예제 코드를 사용하면 됩니다.</p>

<pre class="brush: js">function fixedCharAt(str, idx) {
  var ret = '';
  str += '';
  var end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 &lt; idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx &gt;= end || idx &lt; 0) {
    return '';
  }

  ret += str.charAt(idx);

  if (/[\uD800-\uDBFF]/.test(ret) &amp;&amp; /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
    // Go one further, since one of the "characters" is part of a surrogate pair
    ret += str.charAt(idx + 1);
  }
  return ret;
}
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.String.charAt")}}</p>

<h2 id="관련문서">관련문서</h2>

<ul>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
 <li>{{jsxref("String.prototype.codePointAt()")}}</li>
 <li>{{jsxref("String.prototype.split()")}}</li>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
 <li><a href="https://mathiasbynens.be/notes/javascript-unicode">JavaScript has a Unicode problem – Mathias Bynens</a></li>
</ul>
