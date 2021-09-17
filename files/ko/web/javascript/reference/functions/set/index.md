---
title: setter
slug: Web/JavaScript/Reference/Functions/set
translation_of: Web/JavaScript/Reference/Functions/set
browser-compat: javascript.functions.set
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong><code>set</code></strong> syntax는 어떤 객체의 속성에 이 속성을 설정하려고 할 때 호출되는 함수를 바인드한다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">{set <em>prop</em>(<em>val</em>) { . . . }}
{set [expression](<em>val</em>) { . . . }}</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>주어진 함수를 바인드할 속성의 이름</dd>
</dl>

<dl>
 <dt><code>val</code></dt>
 <dd><code>prop에 설정될 값을 가지고 있는 변수의 별명.</code></dd>
 <dt>expression</dt>
 <dd>ECMAScript 6부터는, 주어진 함수에 바인드 되는 속성 이름은 계산(computed)을 통해 얻을 수 있고 이것을 위한 expressions을 사용할 수 있다.</dd>
</dl>

<h2 id="설명">설명</h2>

<p> 자바스크립트에서, setter는 특정한 속성에 값이 변경되어 질 때마다 함수를 실행하는데 사용될 수 있다. Setter는 유사(pseudo)-property 타입을 생성하는 getter와 함께 가장 자주 사용된다. 실제 값을 가지는 property와 이  property의 setter 를  동시에 갖는 것은 불가능하다.</p>

<p><code>set</code> 문법을 사용할 때 다음을 주의한다:</p>

<div>
<ul>
 <li>숫자혹은 문자로된 식별자를 가질 수 있다;</li>
 <li>한 개의 파라메터만 가질 수 있다.(더 자세한 정보는 <a class="external" href="http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/" rel="external nofollow">Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments</a>를 본다);</li>
 <li>오브젝트 리터럴에 동일한 property에 대한  다른 set나  데이터 항목이 올 수 없다.<br>
  ( <code>{ set x(v) { }, set x(v) { } }</code> 그리고 <code>{ x: ..., set x(v) { } }</code> 는 허용되지 않는다.)</li>
</ul>
</div>

<p>setter는   <a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete" title="en-US/docs/JavaScript/Reference/Operators/Special/delete"><code>delete</code></a> operator를 사용하여 제거할 수 있다.</p>

<h2 id="예">예</h2>

<h3 id="새로운_객체의_setter를_객체의_initializer에서_정의하기">새로운 객체의 setter를 객체의 initializer에서 정의하기 </h3>

<p>다음은 객체 o의 유사 프로러티(pseudo-property )인 <code>current를 정의한다. 이것은 값이 설정될 때, 이 값으로 로그를 갱신 한다.</code></p>

<pre class="brush: js">var o = {
  set current (str) {
    this.log[this.log.length] = str;
  },
  log: []
}
</pre>

<p>다음 사항에 주의한다. current는 정의 되지 않았고 이것에 접근하는 모든 시도는 undefined 값을 얻게될 것이다.</p>

<h3 id="delete_operator로_setter를_제거하기"><code>delete</code> operator로 setter를 제거하기</h3>

<p>만약 setter를 제거하기 원한다면, 그냥 그것을 <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> 하면 된다:</p>

<pre class="brush: js">delete o.current;
</pre>

<h3 id="defineProperty를_사용하여_이미_존재하는_객체에_setter를_정의하기"><code>defineProperty를 사용하여 이미 존재하는 객체에 </code>setter를 정의하기</h3>

<p>setter를 이미 존재하는 object에 나중에 언제라도 추가하기 위해서, {{jsxref("Object.defineProperty()")}}를 사용한다.</p>

<pre class="brush: js">var o = { a:0 };

Object.defineProperty(o, "b", { set: function (x) { this.a = x / 2; } });

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a) // 5</pre>

<h3 id="연산된(computed)_property_name_사용하기">연산된(computed) property name 사용하기</h3>

<div class="note">
<p><strong>Note:</strong> 계산된(Computed) properties는 실험적인 기술이고,  ECMAScript 6 proposal의 부분이다. 아직 많은 브라우저가 지원하지 않는다. 이것 때문에 지원하지 않는 환경에서는  문법 오류가 발생할 것이다.</p>
</div>

<pre class="brush: js">var expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = "baz";      // run the setter
console.log(obj.baz); // "baz"
</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a></li>
 <li>{{jsxref("Operators/delete", "delete")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.defineGetter", "__defineGetter__")}}</li>
 <li>{{jsxref("Object.defineSetter", "__defineSetter__")}}</li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">Defining Getters and Setters</a> in JavaScript Guide</li>
</ul>
