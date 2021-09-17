---
title: getter
slug: Web/JavaScript/Reference/Functions/get
tags:
  - 자바스크립트
  - 함수
translation_of: Web/JavaScript/Reference/Functions/get
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong><code>get</code></strong> 구문은 객체의 프로퍼티를 그 프로퍼티를 가져올 때 호출되는 함수로 바인딩합니다.</p>

<p>{{EmbedInteractiveExample("pages/js/functions-getter.html")}}</p>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">{get <em>prop</em>() { ... } } {get <em>[expression]</em>() { ... } }</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>주어진 함수를 바인딩할 프로퍼티의 이름입니다.</dd>
 <dt>expression</dt>
 <dd>ECMAScript 2015가 도입되면서, 함수의 이름을 계산하기 위해 표현식을 사용할 수 있습니다.</dd>
</dl>

<h2 id="설명">설명</h2>

<p>어떤 프로퍼티에 접근할 때마다 그 값을 계산하도록 해야 하거나, 내부 변수의 상태를 명시적인 함수 호출 없이 보여주고 싶을 때, JavaScript의 <em>getter</em>를 이용할 수 있습니다. getter가 바인딩된 프로퍼티는 동시에 실제 값을 가질 수는 없지만, getter와 setter를 동시에 바인딩해 일종의 유사 프로퍼티(pseudo-property)를 만들 수는 있습니다.</p>

<p><code>get</code> 구문을 이용할 때는 다음을 유의하세요.</p>

<div>
<ul>
 <li>숫자나 문자열로 구성된 식별자를 이용할 수 있습니다.</li>
 <li>getter는 절대로 매개변수를 가져서는 안 됩니다. (<a class="external" href="http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/" rel="external nofollow">Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments</a> 를 참조하세요.)</li>
 <li>하나의 객체 리터럴에 또다른 getter나 데이터 바인딩은 불가능합니다. (<code>{ get x() { }, get x() { } }</code> 나 <code>{ x: ..., get x() { } }</code> 는 사용할 수 없습니다.)</li>
</ul>
</div>

<p>getter는 <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> 연산자를 이용해 삭제할 수 있습니다.</p>

<h2 id="예">예</h2>

<h3 id="getter를_객체_초기자에서_정의하기">getter를 객체 초기자에서 정의하기</h3>

<p>객체 <code>obj</code>에 유사 프로퍼티 <code>latest</code>를 생성합니다. <code>latest</code>는 배열 <code>log</code>의 마지막 요소를 반환합니다.</p>

<pre><code>var obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "test".</code></pre>

<p><code>latest</code>에 어떤 값을 할당하려고 시도해도 그 값이 바뀌지 않는다는 점을 유의하세요.</p>

<h3 id="delete연산자를_이용해_getter_삭제하기"><code>delete</code>연산자를 이용해 getter 삭제하기</h3>

<p>getter를 삭제하고 싶다면, <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code>를 이용하면 됩니다.</p>

<pre class="brush: js">delete obj.latest;
</pre>

<h3 id="defineProperty를_이용해_이미_존재하는_객체에_getter_정의하기"><code>defineProperty</code>를 이용해 이미 존재하는 객체에 getter 정의하기</h3>

<p>이미 존재하는 객체에 getter를 추가하고자 한다면, {{jsxref("Object.defineProperty()")}}를 이용하면 됩니다.</p>

<pre class="brush: js">var o = { a:0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // getter를 실행합니다. a + 1 (= 1)이 반환됩니다.</pre>

<h3 id="계산된_(computed)_프로퍼티_이름">계산된 (computed) 프로퍼티 이름</h3>

<pre class="brush: js">var expr = "foo";

var obj = {
  get [expr]() { return "bar"; }
};

console.log(obj.foo); // "bar"</pre>

<h3 id="똑똑한(Smart)_스스로_덮어쓰는(self-overwriting)_느긋한(lazy)_getter">똑똑한(Smart) / 스스로 덮어쓰는(self-overwriting) / 느긋한(lazy) getter</h3>

<p>Getter는 객체에 프로퍼티를 정의할 수 있도록 하지만, 그 프로퍼티에 접근하기 전까지는 값을 계산하지 않습니다. getter는 값을 계산하는 비용을 실제 값이 필요할 때까지 미루며, 그 값이 필요없다면 계산 비용도 들지 않습니다.</p>

<p>또다른 최적화 기법으로는 계산 미루기와 함께 프로퍼티 값을 나중에 접근하기 위해 캐싱하는 것이 있습니다. 이를<strong> 똑똑한(smart), 혹은 메모화된(<a href="https://en.wikipedia.org/wiki/Memoization">memoized</a>) getter</strong>라고 부릅니다. 값은 getter가 호출될 때 처음 계산되며, 캐싱됩니다. 이후의 호출에는 다시 계산하지 않고 이 캐시값을 반환합니다. 이는 다음과 같은 상황에 유용합니다.</p>

<ul>
 <li>값의 계산 비용이 큰 경우. (RAM이나 CPU 시간을 많이 소모하거나, worker thread를 생성하거나, 원격 파일을 불러오는 등)</li>
 <li>값이 당장은 필요하지 않지만 나중에 사용되어야 할 경우, 혹은 절대로 이용되지 않을 수도 있는 경우.</li>
 <li>값이 여러 차례 이용되지만 절대 변경되지 않아 매번 다시 계산할 필요가 없는 경우, 혹은 다시 계산되어서는 안 되는 경우.</li>
</ul>

<p>똑똑한 getter는 값을 다시 계산하지 않기 때문에, 값의 변경이 예상되는 경우에는 똑똑한 getter를 이용해서는 안 됩니다.</p>

<p>다음 예제에서, 객체는 원래 프로퍼티로 getter를 가집니다. 프로퍼티를 가져올 때, getter는 삭제되며 대신 명시적인 값이 저장됩니다. 최종적으로 값을 반환합니다.</p>

<pre class="brush: js">get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById("bookmarked-notification-anchor");
},</pre>

<p>Firefox 코드의 경우,  <code><a href="/en-US/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()">defineLazyGetter()</a></code> 함수를 정의하고 있는 XPCOMUtils.jsm 모듈을 참조하세요.</p>

<h3 id="get_Vs._defineProperty"><code>get</code> Vs. <code>defineProperty</code></h3>

<p>While using the <code>get</code> 키워드와 {{jsxref("Object.defineProperty()")}}를 사용하면 비슷한 결과를 얻지만, {{jsxref("classes")}}에서 사용되는 두 가지 경우에는 미묘한 차이가 있습니다.</p>

<p>get을 사용할 때 속성은 {{jsxref("Object.defineProperty()")}} 를 사용하는 동안 객체의 프로토 타입에 정의 될 것이고, 속성은 그것이 적용되는 인스턴스에 정의 될 것입니다.</p>

<pre class="brush: js"><code>class Example {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"
console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
// undefined
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'hello'));
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }</code></pre>

<p> </p>

<h2 id="스펙">스펙</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">스펙</th>
   <th scope="col">상태</th>
   <th scope="col">설명</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>최초로 정의되었습니다.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>계산된 프로퍼티 이름이 추가되었습니다.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.functions.get")}}</p>

<p> </p>

<h2 id="참조">참조</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a></li>
 <li>{{jsxref("Operators/delete", "delete")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.defineGetter", "__defineGetter__")}}</li>
 <li>{{jsxref("Object.defineSetter", "__defineSetter__")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">Defining Getters and Setters</a> in JavaScript Guide</li>
</ul>
