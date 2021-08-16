---
title: 객체 초기자
slug: Web/JavaScript/Reference/Operators/Object_initializer
tags:
  - ECMAScript 2015
  - ECMAScript6
  - JSON
  - JavaScript
  - Literal
  - Methods
  - Object
  - Primary Expression
  - computed
  - mutation
  - properties
translation_of: Web/JavaScript/Reference/Operators/Object_initializer
---
<div>{{JsSidebar("Operators")}}</div>

<p>객체는 <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object"><code>new Object()</code></a>, <code><a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create">Object.create()</a></code> 또는 <em>리터럴</em> 표기법 (<em>initializer</em> 표기법)을 사용하여 초기화될 수 있습니다. 객체 초기자(object initializer)는 0개 이상인 객체 속성명 및 관련값 쌍 목록이 콤마로 분리되어 중괄호(<code>{}</code>)로 묶인 형태입니다.</p>

<p>{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}</p>

<h2 id="구문">구문</h2>

<pre class="brush: js notranslate">var o = {};
var o = { a: "foo", b: 42, c: {} };

var a = "foo", b = 42, c = {};
var o = { a: a, b: b, c: c };

var o = {
  <var>property: function </var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
};
</pre>

<h3 id="ECMAScript_2015의_새로운_표기법">ECMAScript 2015의 새로운 표기법</h3>

<pre class="brush: js notranslate">// 단축 속성명 (ES2015)
let a = "foo", b = 42, c = {}
let o = { a, b, c }

// 단축 메서드명 (ES2015)
var o = {
  <var>property</var>([<var>parameters</var>]) {}
}

// 계산된 속성명 (ES2015)
var prop = 'foo'
var o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
}</pre>

<h2 id="설명">설명</h2>

<p>객체 초기자는 {{jsxref("Object")}}의 초기화를 기술하는 표현식(expression)입니다. 객체는 객체를 설명하는 데 사용되는<em>속성</em>으로 구성됩니다. 객체의 속성값은 {{Glossary("primitive")}} 데이터 형 또는 다른 객체를 포함할 수 있습니다.</p>

<h3 id="객체_리터럴_표기법_vs_JSON">객체 리터럴 표기법 vs JSON</h3>

<p>객체 리터럴 표기법은 <strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation (<a href="/ko/docs/Glossary/JSON">JSON</a>)과 같지 않습니다. 비슷해 보이지만, 차이가 있습니다:</p>

<ul>
 <li>JSON은 <code>"property": value</code> 구문을 사용한 속성 정의<em>만</em> 허용합니다. 속성명은 큰 따옴표로 묶여야 하고, 정의는 단축(명)일 수 없습니다.</li>
 <li>JSON에서 값은 오직 문자열, 숫자, 배열, <code>true</code>, <code>false</code>, <code>null</code> 또는 다른 (JSON) 객체만 될 수 있습니다.</li>
 <li>함수 값(아래 "메서드" 참조)은 JSON에서 값에 할당될 수 없습니다.</li>
 <li>{{jsxref("Date")}} 같은 객체는 {{jsxref("JSON.parse()")}} 후에 문자열이 됩니다.</li>
 <li>{{jsxref("JSON.parse()")}}는 계산된 속성명을 거부하고 오류를 발생합니다.</li>
</ul>

<h2 id="예제">예제</h2>

<h3 id="객체_생성">객체 생성</h3>

<p>속성이 없는 빈 객체는 다음과 같이 만들 수 있습니다:</p>

<pre class="brush: js notranslate">var object = {};</pre>

<p>그러나, 리터럴(<em>literal</em>) 또는 초기자(<em>initializer</em>) 표기법의 이점은, 빠르게 중괄호 내 속성이 있는 객체를 만들 수 있다는 것입니다. 당신은 그저 쉼표로 구분된 <strong><code>키: 값</code></strong> 쌍 목록을 표기합니다.</p>

<p>다음 코드는 키가 <code>"foo"</code>, <code>"age"</code> 및 <code>"baz"</code>인 세 속성이 있는 객체를 만듭니다. 이들 키값은 문자열 <code>"bar"</code>, 숫자 <code>42</code> 그리고 세 번째 속성은 그 값으로 다른 객체를 갖습니다.</p>

<pre class="brush: js notranslate">var object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
}</pre>

<h3 id="속성_접근">속성 접근</h3>

<p>일단 객체를 생성하면, 읽거나 바꿀 수 있습니다. 객체 속성은 점 표기법 또는 각괄호 표기법을 사용하여 액세스될 수 있습니다. (자세한 사항은 <a href="/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors">속성 접근자</a> 참조.)</p>

<pre class="brush: js notranslate">object.foo; // "bar"
object["age"]; // 42

object.foo = "baz";
</pre>

<h3 id="속성_정의">속성 정의</h3>

<p>우리는 이미 초기자 구문을 사용한 속성 표기법을 배웠습니다. 가끔, 객체 안에 두고 싶은 코드 속 변수가 있습니다. 다음과 같은 코드가 보입니다:</p>

<pre class="brush: js notranslate">var a = "foo",
    b = 42,
    c = {};

var o = {
  a: a,
  b: b,
  c: c
};</pre>

<p>ECMAScript 2015의 경우, 똑같은 일을 할 수 있는 더 짧은 표기법이 있습니다:</p>

<pre class="brush: js notranslate">var a = "foo",
    b = 42,
    c = {};

// 단축 속성명 (ES6)
var o = { a, b, c }

// 다시 말해서,
console.log((o.a === {a}.a)) // true
</pre>

<h4 id="중복된_속성명">중복된 속성명</h4>

<p>속성이 같은 이름을 쓰는 경우, 두 번째 속성은 첫 번째를 겹쳐씁니다.</p>

<pre class="brush: js notranslate">var a = {x: 1, x: 2};
console.log(a); // {x: 2}
</pre>

<p>ECMAScript 5 엄격 모드 코드에서, 중복된 속성명은 {{jsxref("SyntaxError")}}로 간주됐습니다. 런타임에 중복을 가능케 하는 속성 계산명 도입으로, ECMAScript 2015는 이 제한을 제거했습니다.</p>

<pre class="brush: js notranslate">function haveES6DuplicatePropertySemantics(){
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // 오류 미 발생, 중복 속성명은 엄격 모드에서 허용됨
    return true;
  } catch (e) {
    // 오류 발생, 중복은 엄격 모드에서 금지됨
    return false;
  }
}</pre>

<h3 id="메서드_정의">메서드 정의</h3>

<p>객체의 속성은 <a href="/ko/docs/Web/JavaScript/Reference/Functions">함수</a>나 <a href="/ko/docs/Web/JavaScript/Reference/Functions/get">getter</a> 또는 <a href="/ko/docs/Web/JavaScript/Reference/Functions/set">setter</a> 메서드를 참조할 수도 있습니다.</p>

<pre class="brush: js notranslate">var o = {
  <var>property: function </var>([<var>parameters</var>]) {},
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {},
};</pre>

<p>ECMAScript 2015에서는, 단축 표기법을 이용할 수 있습니다, 그래서 키워드 "<code>function</code>"은 더 이상 필요치 않습니다.</p>

<pre class="brush: js notranslate">// 단축 메서드 명 (ES6)
var o = {
  <var>property</var>([<var>parameters</var>]) {},
}</pre>

<p>ECMAScript 2015에는 값이 생성기 함수인 속성을 간결하게 정의하는 법도 있습니다:</p>

<pre class="brush: js notranslate">var o = {
  *<var>generator</var>() {
    ...........
  }
};</pre>

<p>ECMAScript 5에서는 다음과 같이 작성할 수 있습니다 (하지만 ES5는 생성기가 없음을 주의하세요):</p>

<pre class="brush: js notranslate">var o = {
  generator<var>Method: function* </var>() {
    ...........
  }
};</pre>

<p>메서드에 관한 자세한 사항 및 예는, <a href="/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions">메서드 정의</a> 참조.</p>

<h3 id="계산된_속성명">계산된 속성명</h3>

<p>ECMAScript 2015를 시작으로, 객체 초기화 구문은 계산된 속성명(computed property name)도 지원합니다. 각괄호 <code>[]</code> 안에 식을 넣을 수 있고, 식이 계산되고 그 결과가 속성명으로 사용됩니다. 이는 이미 속성을 읽고 설정하는 데 사용했을 수 있는 <a href="/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors">속성 접근자</a> 구문의 각괄호 표기법을 연상시킵니다.  </p>

<p>이제 당신은 객체 리터럴에서도 같은 구문을 쓸 수 있습니다:</p>

<pre class="brush: js notranslate">// 계산된 속성명 (ES6)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // { size: 12, mobileSize: 4 }</pre>

<h3 id="전개_속성">전개 속성</h3>

<p><a href="https://github.com/tc39/proposal-object-rest-spread">ECMASCript의 나머지/전개 속성</a> 제안 (stage 4) 으로 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">전개(spread)</a> 속성이 객체 리터럴에 추가됩니다. 이 속성은 제공된 객체의 열거 가능한(enumerable) 속성을 새 객체로 복사합니다.</p>

<p>(<code>prototype</code>을 제외하는) 얕은 복제(Shallow-cloning) 나 객체 합침(merging objects)이 이제{{jsxref("Object.assign()")}} 보다 짧은 문법으로 가능해집니다.</p>

<pre class="notranslate">let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }</pre>

<div class="blockIndicator warning">
<p>{{jsxref("Object.assign()")}}는 <a href="/ko/docs/Web/JavaScript/Reference/Functions/set">setters</a>를 작동시키지만, 전개 연산자(spread operator)는 아니라는 걸 주목하세요!</p>
</div>

<h3 id="프로토타입_변이">프로토타입 변이</h3>

<p><code>__proto__: value</code> 또는 <code>"__proto__": value</code> 형태의 속성 정의는 이름이 <code>__proto__</code>인 속성을 만들지 않습니다. 대신, 제공된 값이 객체 또는 <a href="/ko/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>이면, 생성된 객체의 <code>[[Prototype]]</code>을 그 값으로 바꿉니다. (값이 객체나 null이 아니면, 객체는 바뀌지 않습니다.)</p>

<pre class="brush: js notranslate">var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { "__proto__": protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
</pre>

<p>단일 프로토타입 변이(mutation)만 객체 리터럴에 허용됩니다: 다중 프로토타입 변이는 구문 오류입니다.</p>

<p>"colon" 표기법을 쓰지 않는 속성 정의는 프로토타입 변이가 아닙니다: 그들은 다른 이름을 사용하는 비슷한 정의와 동일하게 동작하는 속성 정의입니다.</p>

<pre class="brush: js notranslate">var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = { __proto__() { return "hello"; } };
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
</pre>

<h2 id="스펙">스펙</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Specification</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object-initializer', 'Object Initializer')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.operators.object_initializer")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors">속성 접근자</a></li>
 <li><code><a href="/ko/docs/Web/JavaScript/Reference/Functions/get">get</a></code> / <code><a href="/ko/docs/Web/JavaScript/Reference/Functions/set">set</a></code></li>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions">메서드 정의</a></li>
 <li><a href="/ko/docs/Web/JavaScript/Reference/Lexical_grammar">어휘 문법</a></li>
</ul>
