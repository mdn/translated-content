---
title: var 描述
slug: Web/JavaScript/Reference/Statements/var
tags:
  - JavaScript
  - Statement
  - 声明
translation_of: Web/JavaScript/Reference/Statements/var
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>var</code> 声明语句</strong>声明一个变量，并可选地将其初始化为一个值。</p>

<p>{{EmbedInteractiveExample("pages/js/statement-var.html")}}</p>



<h2 id="语法">语法</h2>

<pre class="syntaxbox">var <em>varname1 [</em>= <em>value1] [</em>, <em>varname2 [</em>= <em>value2] </em><em>... [</em>, <em>varnameN [</em>= <em>valueN]]]</em>;</pre>

<dl>
 <dt><code>varnameN</code></dt>
 <dd>变量名。变量名可以定义为任何合法标识符。</dd>
 <dt><code>valueN</code></dt>
 <dd>变量的初始化值。该值可以是任何合法的表达式。默认值为 <code>undefined</code>。</dd>
</dl>

<h2 id="Description">描述</h2>

<p>变量声明，无论发生在何处，都在执行任何代码之前进行处理。用 <code>var</code> 声明的变量的作用域是它当前的执行上下文，它可以是嵌套的函数，或者对于声明在任何函数外的变量来说是全局。如果你重新声明一个 JavaScript 变量，它将不会丢失其值。</p>

<p>当赋值给未声明的变量, 则执行赋值后, 该变量会被隐式地创建为全局变量（它将成为全局对象的属性）。</p>

<p>声明和未声明变量之间的差异是：</p>

<p>1. 声明变量的作用域限制在其声明位置的上下文中，而非声明变量总是全局的。</p>

<pre class="brush: js">function x() {
  y = 1;   // 在严格模式（strict mode）下会抛出 ReferenceError 异常
  var z = 2;
}

x();

console.log(y); // 打印 "1"
console.log(z); // 抛出 ReferenceError: z 未在 x 外部声明
</pre>

<p>2. 声明变量在任何代码执行前创建，而非声明变量只有在执行赋值操作的时候才会被创建。</p>

<pre class="brush: js">console.log(a);                // 抛出ReferenceError。
console.log('still going...'); // 打印"still going..."。</pre>

<pre class="brush: js">var a;
console.log(a);                // 打印"undefined"或""（不同浏览器实现不同）。
console.log('still going...'); // 打印"still going..."。</pre>

<p>3. 声明变量是它所在上下文环境的不可配置属性，非声明变量是可配置的（如非声明变量可以被删除）。</p>

<pre class="brush: js">var a = 1;
b = 2;

delete this.a; // 在严格模式（strict mode）下抛出TypeError，其他情况下执行失败并无任何提示。
delete this.b;

console.log(a, b); // 抛出ReferenceError。
// 'b'属性已经被删除。
</pre>

<p>由于这三个差异，未能声明变量将很可能导致意想不到的结果。因此，<strong>建议始终声明变量，无论它们是在函数还是全局作用域内</strong>。 而且，在 ECMAScript 5 <a href="/zh-CN/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a>下，分配给未声明的变量会引发错误。</p>

<h3 id="变量提升">变量提升</h3>

<p>由于变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明。这意味着变量可以在声明之前使用，这个行为叫做“hoisting”。“hoisting”就像是把所有的变量声明移动到函数或者全局代码的开头位置。</p>

<pre class="brush: js">bla = 2
var bla;
// ...

// 可以隐式地（implicitly）将以上代码理解为：

var bla;
bla = 2;
</pre>

<p>因此，建议始终在作用域顶部声明变量（全局代码的顶部和函数代码的顶部），这可以清楚知道哪些变量是函数作用域（本地），哪些变量在作用域链上解决。</p>

<p>重要的是，提升将影响变量声明，而不会影响其值的初始化。当到达赋值语句时，该值将确实被分配：</p>

<pre class="brush: js">function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

// is implicitly understood as:
function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}</pre>

<h2 id="Examples">例子</h2>

<h3 id="声明并初始化两个变量：">声明并初始化两个变量：</h3>

<pre class="brush: js">var a = 0, b = 0;
</pre>

<h3 id="给两个变量赋值成字符串值：">给两个变量赋值成字符串值：</h3>

<pre class="brush: js">var a = "A";
var b = a;

// 等效于：

var a, b = a = "A";
</pre>

<p>留意其中的顺序：</p>

<pre class="brush: js">var x = y, y = 'A';
console.log(x + y); // undefinedA
</pre>

<p>在这里，<code>x</code> 和 <code>y</code> 在代码执行前就已经创建了，而赋值操作发生在创建之后。当"<code>x = y</code>"执行时，<code>y</code> 已经存在，所以不抛出<code>ReferenceError</code>，并且它的值是'<code>undefined</code>'。所以 <code>x</code> 被赋予 undefined 值。然后，<code>y</code> 被赋予'A'。于是，在执行完第一行之后，<code>x === undefined &amp;&amp; y === 'A'</code> 才出现了这样的结果。</p>

<h3 id="多个变量的初始化">多个变量的初始化</h3>

<pre class="brush: js">var x = 0;

function f(){
  var x = y = 1; // x在函数内部声明，y不是！
}
f();

console.log(x, y); // 0, 1
// x 是全局变量。
// y 是隐式声明的全局变量。 </pre>

<h3 id="隐式全局变量和外部函数作用域">隐式全局变量和外部函数作用域</h3>

<p>看起来像是隐式全局作用域的变量也有可能是其外部函数变量的引用。</p>

<pre class="brush: js">var x = 0;  // x是全局变量，并且赋值为0。

console.log(typeof z); // undefined，因为z还不存在。

function a() { // 当a被调用时，
  var y = 2;   // y被声明成函数a作用域的变量，然后赋值成2。

  console.log(x, y);   // 0 2

  function b() {       // 当b被调用时，
    x = 3;  // 全局变量x被赋值为3，不生成全局变量。
    y = 4;  // 已存在的外部函数的y变量被赋值为4，不生成新的全局变量。
    z = 5;  // 创建新的全局变量z，并且给z赋值为5。
  }         // (在严格模式下（strict mode）抛出ReferenceError)

  b();     // 调用b时创建了全局变量z。
  console.log(x, y, z);  // 3 4 5
}

a();                   // 调用a时同时调用了b。
console.log(x, z);     // 3 5
console.log(typeof y); // undefined，因为y是a函数的本地（local）变量。</pre>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Initial definition. Implemented in JavaScript 1.0</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.2', 'var statement')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-variable-statement', 'variable statement')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-variable-statement', 'variable statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("javascript.statements.var")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a></li>
</ul>
