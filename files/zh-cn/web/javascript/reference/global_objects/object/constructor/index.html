---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
tags:
  - JavaScript
  - Object
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/constructor
---
<p>{{JSRef}}</p>

<p>返回创建实例对象的 {{jsxref("Object")}} 构造函数的引用。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。对原始类型来说，如<code>1</code>，<code>true</code>和<code>"test"</code>，该值只可读。</p>

<h2 id="Description">描述</h2>

<p>所有对象都会从它的原型上继承一个 <code>constructor</code> 属性：</p>

<pre class="brush: js">var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array // true

var n = new Number(3);
n.constructor === Number; // true</pre>

<h2 id="Examples">示例</h2>

<h3 id="Example_Displaying_the_constructor_of_an_object">打印一个对象的构造函数</h3>

<p>以下示例创建一个原型，<code>Tree</code>，以及该类型的对象，即<code>theTree</code>。 然后打印<code>theTree</code>对象的<code>constructor</code>属性。</p>

<pre class="brush:js">function Tree(name) {
   this.name = name;
}

var theTree = new Tree("Redwood");
console.log( "theTree.constructor is " + theTree.constructor );</pre>

<p>打印输出：</p>

<pre class="brush:js">theTree.constructor is function Tree(name) {
    this.name = name;
}</pre>

<h3 id="Example_Changing_the_constructor_of_an_object">改变对象的 constructor</h3>

<p>下面的例子展示了如何修改基本类型对象的 <code>constructor</code> 属性的值。只有 <code>true</code>, <code>1</code> 和 <code>"test"</code> 的不受影响，因为创建他们的是只读的原生构造函数（native constructors）。这个例子也说明了依赖一个对象的 <code>constructor</code> 属性并不安全。</p>

<pre class="brush:js">function Type() { };

var	types = [
	new Array,
    [],
	new Boolean,
    true,        // remains unchanged
	new Date,
	new Error,
	new Function,
	function(){},
	Math,
	new Number,
	1,           // remains unchanged
	new Object,
	{},
	new RegExp,
	/(?:)/,
	new String,
	"test"       // remains unchanged
];

for(var i = 0; i &lt; types.length; i++) {
	types[i].constructor = Type;
	types[i] = [ types[i].constructor, types[i] instanceof Type, types[i].toString() ];
};

console.log( types.join("\n") );
</pre>

<p>此示例显示以下输出：</p>

<pre class="brush: js">function Type() {},false,
function Type() {},false,
function Type() {},false,false
function Boolean() {
    [native code]
},false,true
function Type() {},false,Mon Sep 01 2014 16:03:49 GMT+0600
function Type() {},false,Error
function Type() {},false,function anonymous() {

}
function Type() {},false,function () {}
function Type() {},false,[object Math]
function Type() {},false,0
function Number() {
    [native code]
},false,1
function Type() {},false,[object Object]
function Type() {},false,[object Object]
function Type() {},false,/(?:)/
function Type() {},false,/(?:)/
function Type() {},false,
function String() {
    [native code]
},false,test
</pre>



<h3 id="改变函数的_constructor">改变函数的 constructor</h3>

<p>大多数情况下，此属性用于定义一个构造函数，并使用<strong>new</strong>和继承原型链进一步调用它。</p>

<pre class="brush: js">function Parent() {}
Parent.prototype.parentMethod = function parentMethod() {};

function Child() {}
Child.prototype = Object.create(Parent.prototype); // re-define child prototype to Parent prototype

Child.prototype.constructor = Child; // return original constructor to Child</pre>

<p>但为什么我们需要在这里执行最后一行？很不幸正确答案是 - 看情况而定。</p>

<p>让我们来尝试定义在哪些情况下，重新分配原始构造函数会发挥重要作用，以及在什么时候它就是额外的未使用的（无效的）代码行。</p>

<p>试想下一种情况：该对象具有创建自身的<strong>create</strong>方法。</p>

<pre class="brush: js">function Parent() {};
function CreatedConstructor() {}

CreatedConstructor.prototype = Object.create(Parent.prototype);

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
}

new CreatedConstructor().create().create(); // error undefined is not a function since constructor === Parent
</pre>

<p>在上面的示例中，将显示异常，因为构造函数链接到Parent。</p>

<p>为了避免它，只需分配您将要使用的必要构造函数。</p>

<pre class="brush: js">function Parent() {};
function CreatedConstructor() {}

CreatedConstructor.prototype = Object.create(Parent.prototype);
CreatedConstructor.prototype.constructor = CreatedConstructor; // set right constructor for further using

CreatedConstructor.prototype.create = function create() {
  return new this.constructor();
}

new CreatedConstructor().create().create(); // it's pretty fine</pre>

<p>好的，现在很清楚为什么更改构造函数会很有用。</p>

<p>让我们再考虑一个案例。</p>

<pre class="brush: js">function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y:0 };
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition;
}

function Child(x, y) {
  this.position = {
    x: x,
    y: y
  };
}

Child.prototype = Object.create(ParentWithStatic.prototype);
Child.prototype.constructor = Child;

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  var position = this.position;
  var startPosition = this.constructor.getStartPosition(); // error undefined is not a function, since the constructor is Child

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y
  }
};</pre>

<p>对于此示例，我们需要保持父构造函数继续正常工作。</p>

<p><strong>总结</strong>：手动设置或更新构造函数可能会导致不同且有时令人困惑的后果。为了防止它，只需在每个特定情况下定义构造函数的角色。在大多数情况下，不使用构造函数，并且不需要重新分配构造函数。</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Initial definition. Implemented in JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.4.1', 'Object.prototype.constructor')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.prototype.constructor', 'Object.prototype.constructor')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.constructor', 'Object.prototype.constructor')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容">浏览器兼容</h2>

<p>{{Compat("javascript.builtins.Object.constructor")}}</p>
