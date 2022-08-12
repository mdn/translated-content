---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
tags:
  - Function
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Function/call
---
<div>{{JSRef}}</div>

<p><code><strong>call()</strong></code> 메소드는 주어진 <code>this</code> 값 및 각각 전달된 인수와 함께 함수를 호출합니다.</p>

<div class="blockIndicator note">
<p><strong>주의:</strong> 이 함수 구문은 {{jsxref("Function.prototype.apply", "apply()")}}와 거의 동일하지만, <code>call()</code>은 <strong>인수 목록</strong>을, 반면에 <code>apply()</code>는 <strong>인수 배열 하나</strong>를 받는다는 점이 중요한 차이점입니다.</p>
</div>

<p>{{EmbedInteractiveExample("pages/js/function-call.html")}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><code><var>func</var>.call(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...]]])</code></pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>thisArg</code></dt>
 <dd><em><code>func</code></em> 호출에 제공되는 <code>this</code>의 값.</dd>
</dl>

<div class="blockIndicator note">
<dl>
 <dd></dd>
 <dd>
 <p><code>this</code>는 메소드에 의해 보이는 실제값이 아닐 수 있음을 주의하세요: 메소드가 {{jsxref("Functions_and_function_scope/Strict_mode", "비엄격 모드", "", 1)}} 코드 내 함수인 경우, {{jsxref("Global_Objects/null", "null")}} 및 {{jsxref("Global_Objects/undefined", "undefined")}}는 전역 객체로 대체되고 원시값은 객체로 변환됩니다.</p>
 </dd>
</dl>
</div>

<p><code>arg1, arg2, ...</code></p>

<dl>
 <dd>객체를 위한 인수.</dd>
</dl>

<h3 id="반환값Return_Value">반환값(Return Value)</h3>

<p><code>this</code> 와 arguments 를 매개로 호출된 함수의 반환값</p>

<h2 id="설명">설명</h2>

<p><code>call()</code>은 이미 할당되어있는 다른 객체의 함수/메소드를 호출하는 해당 객체에 재할당할때 사용됩니다. <code>this</code>는 현재 객체(호출하는 객체)를 참조합니다. 메소드를 한번 작성하면 새 객체를 위한 메소드를 재작성할 필요 없이 <code>call()</code>을 이용해 다른 객체에 상속할 수 있습니다.</p>

<h2 id="예">예</h2>

<h3 id="객체의_생성자_연결에_call_사용">객체의 생성자 연결에 <code>call</code> 사용</h3>

<p>Java와 비슷하게, 객체의 생성자 연결(chain)에 <code>call</code>을 사용할 수 있습니다. 다음 예에서, <code>Product</code> 객체의 생성자는 <code>name</code> 및 <code>price</code> 를 매개변수로 정의됩니다. 다른 두 함수 <code>Food</code> 및 <code>Toy</code>는 <code>this</code> 및 <code>name</code>과 <code>price</code>를 전달하는 <code>Product</code>를 호출합니다. <code>Product</code>는 <code>name</code> 및 <code>price</code> 속성을 초기화하고, 특수한 두 함수(Food 및 Toy)는 <code>category</code>를 정의합니다.</p>

<pre class="brush: js">function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price &lt; 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
</pre>

<h3 id="익명_함수_호출에_call_사용">익명 함수 호출에 <code>call</code> 사용</h3>

<p>이 예제에서는 익명 함수를 만들고 배열 내 모든 객체에서 이를 호출하기 위해 <code>call</code>을 사용합니다. 여기서 익명 함수의 주목적은 배열 내 객체의 정확한 인덱스를 출력할 수 있는 모든 객체에 print 함수를 추가하는 것 입니다.</p>

<div class="blockIndicator note">
<p><code>this</code> 값으로 객체 전달이 반드시 필요하지는 않지만, 해당 예제에서는 설명의 목적으로 사용했습니다. </p>
</div>

<pre class="brush: js">var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i &lt; animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
</pre>

<h3 id="함수_호출_및_this를_위한_문맥_지정에_call_사용">함수 호출 및 '<code>this</code>'를 위한 문맥 지정에 <code>call</code> 사용</h3>

<p>아래 예제에서, <code>greet</code>을 호출하면 <code>this</code> 값은 객체 <code>obj</code>에 바인딩됩니다.</p>

<pre class="brush: js">function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
</pre>

<h3 id="첫번째_인수_지정_없이_함수_호출에_call_사용">첫번째 인수 지정 없이 함수 호출에 <code>call</code> 사용</h3>

<p>아래 예제에서, <code>display</code> 함수에 첫번째 인수를 전달하지 않고 호출합니다. 첫번째 인수를 전달하지 않으면, <code>this</code>의 값은 전역 객체에 바인딩됩니다.</p>

<pre class="brush: js">var sData = 'Wisen';
function display(){
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen
</pre>

<div class="blockIndicator note">
<p><strong> 주의:</strong> 엄격 모드(strict mode)에서, <code>this</code> 는 <code>undefined</code>값을 가집니다. See below.</p>
</div>

<pre>'use strict';

var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined
</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Function.call")}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li>
  <h2 id="jsxrefFunction.prototype.bind">{{jsxref("Function.prototype.bind()")}}</h2>
 </li>
 <li>{{jsxref("Function.prototype.apply()")}}</li>
 <li>
  <p><a href="/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript">객체 지향 JavaScript 소개</a></p>
 </li>
</ul>
