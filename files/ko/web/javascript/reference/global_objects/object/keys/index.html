---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
  - Polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Object/keys
browser-compat: javascript.builtins.Object.keys
---
<div>{{JSRef}}</div>


<p><code><strong>Object.keys()</strong></code> 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과

     동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
    </p>

<div>{{EmbedInteractiveExample("pages/js/object-keys.html")}}</div>


<h2 id="Syntax">구문</h2>

<pre class="brush: js">Object.keys(<var>obj</var>)</pre>

<h3 id="Parameters">매개변수</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>열거할 수 있는 속성 이름들을 반환 받을 객체</dd>
</dl>

<h3 id="Return_value">반환 값</h3>

<p>전달된 객체의 열거할 수 있는 모든 속성 이름들을 나타내는 문자열 배열
</p>

<h2 id="Description">설명</h2>

<p><code>Object.keys()</code> 는 전달된 객체에서 직접 찾은 열거할 수 있는 속성 이름에 해당하는 문자열 배열을 반환합니다.
     속성 이름의 순서는 객체의 속성을 수동으로 반복하여 지정하는 것과 동일합니다.</p>

<h2 id="Examples">예시</h2>

<h3 id="Using_Object.keys">Using Object.keys</h3>

<pre class="brush: js">// 단순 배열
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 배열형 객체
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 키와 순서가 무작위인 배열형 객체
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo 는 열거할 수 없는 속성입니다.
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
</pre>

<p>만약 열거할 수 없는 속성도 포함한 속성 이름들을 원한다면, 다음을 참고할 수 있습니다.
    {{jsxref("Object.getOwnPropertyNames()")}}.</p>
 
<h3 id="Non-object_coercion">비객체 강제 형변환</h3>

<p>ES5에서, 이 메서드의 인수에 비객체(원시형)을 전달할 경우, {{jsxref("TypeError")}}가 발생합니다.</p>

<p>ES2015부터는 객체가 아닌 인수는 객체로 강제 변환됩니다. </p>

<pre class="brush: js">// ES5
Object.keys('foo');  // TypeError: "foo" is not an object

// ES2015+
Object.keys('foo');  // ["0", "1", "2"]
</pre>

<h2 id="Polyfill">폴리필</h2>

<p><code>Object.keys</code>를 지원하지 않는 환경에서 사용하시려면 다음 스니펫을 복사하십시오.</p>

<pre class="brush: js">// From https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' &amp;&amp; (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i &lt; dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
</pre>

<p>위의 코드에는 다른 창에서 객체를 전달했을 때 IE7 (그리고 아마 IE8)에서는 열거할 수 없는 키가 포함되어 있습니다.</p>

<p>간단한 브라우저 폴리필은 다음을 참고하세요. <a href="https://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html">Javascript - Object.keys Browser Compatibility</a>.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility">브라우저 호환성</h2>


<p>{{Compat}}</p>

<h2 id="See_also">같이 보기</h2>

<ul>
  <li><code>Object.keys</code> 의 폴리필 코드는 아래에서 확인할 수 있습니다. <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
  <li><a
      href="/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability
      and ownership of properties</a></li>
  <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
  <li>{{jsxref("Object.create()")}}</li>
  <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
  <li>{{jsxref("Object.values()")}}</li>
  <li>{{jsxref("Object.entries()")}}</li>
</ul>
