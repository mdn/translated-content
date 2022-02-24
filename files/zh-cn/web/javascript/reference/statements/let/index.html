---
title: let
slug: Web/JavaScript/Reference/Statements/let
tags:
  - ECMAScript 2015
  - ECMAScript6
  - JavaScript
  - let
  - 变量
  - 变量声明
  - 声明
translation_of: Web/JavaScript/Reference/Statements/let
---
<div>{{jsSidebar("Statements")}}</div>



<div><strong>let</strong> 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值。</div>

<div>{{EmbedInteractiveExample("pages/js/statement-let.html")}}</div>



<h2 id="语法">语法</h2>

<pre class="syntaxbox">let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>var1</code>, <code>var2</code>, …, <code>varN</code></dt>
 <dd>变量名。必须是合法的标识符。</dd>
 <dt><code>value1</code>, <code>value2</code>, …, <code>valueN</code> </dt>
 <dd>变量的初始值。可以是任意合法的表达式。</dd>
</dl>

<h2 id="描述">描述</h2>

<p><strong><code>let</code></strong>允许你声明一个作用域被限制在 {{jsxref("statements/block", "块")}}级中的变量、语句或者表达式。与 {{jsxref("statements/var", "var")}} 关键字不同的是， {{jsxref("statements/var", "var")}}声明的变量只能是全局或者整个函数块的。 {{jsxref("statements/var", "var")}} 和 <code>let</code> 的不同之处在于后者是在编译时才初始化（<a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂存死区">见下面</a>）。</p>

<p>就像{{jsxref("statements/const", "const", "Description")}} 一样，<code>let</code>不会在全局声明时（在最顶部的范围）创建{{domxref('window')}} 对象的属性。</p>

<p>可以从<a href="https://stackoverflow.com/questions/37916940/js-why-let-have-this-name">这里</a>了解我们为什么使用“<strong>let</strong>”。</p>

<h3 id="作用域规则">作用域规则</h3>

<p><code><strong>let</strong></code>声明的变量只在其声明的块或子块中可用，这一点，与<code><strong>var</strong></code>相似。二者之间最主要的区别在于<code><strong>var</strong></code>声明的变量的作用域是整个封闭函数。</p>

<pre class="brush: js">function varTest() {
  var x = 1;
  {
    var x = 2;  // 同样的变量!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // 不同的变量
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
</pre>

<p>在程序和方法的最顶端，<strong><code>let</code></strong>不像 <strong><code>var</code></strong> 一样，<strong><code>let</code></strong>不会在全局对象里新建一个属性。比如：</p>

<p>位于函数或代码顶部的<strong><code>var</code></strong>声明会给全局对象新增属性, 而<strong><code>let</code></strong>不会。例如:</p>

<pre class="brush: js">var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
</pre>

<h3 id="模仿私有成员">模仿私有成员</h3>

<p>在处理<a href="https://developer.mozilla.org/en-US/docs/Glossary/Constructor">构造函数</a>的时候，可以通过<code><strong>let</strong></code>声明而不是闭包来创建一个或多个私有成员。</p>

<pre class="brush: js">var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1</pre>

<p>可以使用<code>var</code>创建和闭包具有相同隐私模式的局部变量，但是它们需要函数作用域（通常是模块模式中的IIFE），而不仅仅是上面示例中的块作用域。</p>

<h3 id="重复声明">重复声明</h3>

<p>在同一个函数或块作用域中重复声明同一个变量会引起{{jsxref("SyntaxError")}}。</p>

<pre class="brush: js example-bad">if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
</pre>

<p>在 <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/switch"><code>switch</code></a> 语句中只有一个块，你可能因此而遇到错误。</p>

<pre class="brush: js example-bad">let x = 1;
switch(x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
</pre>

<p>然而，需要特别指出的是，一个嵌套在 case 子句中的块会创建一个新的块作用域的词法环境，就不会产生上诉重复声明的错误。</p>

<pre>let x = 1;

switch(x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
</pre>

<h3 id="暂存死区">暂存死区</h3>

<p>与通过  <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting">var</a></code> 声明的有初始化值 <code>undefined</code> 的变量不同，通过 <code>let</code> 声明的变量直到它们的定义被执行时才初始化。在变量初始化前访问该变量会导致 <code><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/ReferenceError">ReferenceError</a></code>。该变量处在一个自块顶部到初始化处理的“暂存死区”中。</p>

<pre class="brush: js">function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}</pre>

<h3 id="暂存死区与_typeof">暂存死区与 <code>typeof</code></h3>

<p>与通过<code>var</code>声明的变量, 有初始化值 <code>undefined</code>和只是未声明的变量不同的是，如果使用<code>typeof</code>检测在暂存死区中的变量, 会抛出<code>ReferenceError</code>异常:</p>

<pre><code>// prints out 'undefined'
console.log(typeof undeclaredVariable);

// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;</code>
</pre>

<h3 id="暂存死区和静态作用域词法作用域的相关例子">暂存死区和静态作用域/词法作用域的相关例子</h3>

<p>由于词法作用域，表达式<code>(foo + 55)</code>内的标识符<code>foo</code>被认为是if块的foo变量，而不是值为33的块外面的变量foo。</p>

<p>在同一行，这个if块中的<code>foo</code>已经在词法环境中被创建了，但是还没有到达（或者终止）它的初始化（这是语句本身的一部分）。</p>

<p>这个if块里的<code>foo</code>还依旧在暂存死区里。</p>

<pre class="brush: js example-bad">function test(){
   var foo = 33;
   if (foo) {
      let foo = (foo + 55); // ReferenceError
   }
}
test();</pre>

<p>在以下情况下，这种现象可能会使您感到困惑。 <code>let n of n.a</code>已经在for循环块的私有范围内。因此，标识符<code>n.a</code>被解析为位于指令本身("let n")中的“ n”对象的属性“ a”。</p>

<p>在没有执行到它的初始化语句之前，它仍旧存在于暂存死区中。</p>

<pre class="brush: js example-bad">function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) { // ReferenceError
    console.log(n);
  }
}

go({a: [1, 2, 3]});</pre>

<h2 id="其他情况">其他情况</h2>

<p>用在块级作用域中时, <strong><code>let</code></strong>将变量的作用域限制在块内, 而<code><strong>var</strong></code>声明的变量的作用域是在函数内.</p>

<pre class="brush: js">var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2</pre>

<p>而这种<code><strong>var</strong></code> 与 <strong><code>let</code></strong>合并的声明方式会报<code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError">SyntaxError</a></code>错误, 因为<code><strong>var</strong></code>会将变量提升至块的顶部, 这会导致隐式地重复声明变量.</p>

<pre class="brush: js example-bad">let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}</pre>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-let-and-const-declarations', 'Let and Const Declarations')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Initial definition. Does not specify let expressions or let blocks.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Let and Const Declarations')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("javascript.statements.let")}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/var"><code>var</code></a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a></li>
 <li><a href="https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/">ES6 In Depth: <code>let</code> and <code>const</code></a></li>
 <li><a href="https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/">Breaking changes in <code>let</code> and <code>const</code> in Firefox 44.</a></li>
 <li><a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md">You Don't Know JS: Scope &amp; Closures: Chapter 3: Function vs. Block Scope</a></li>
 <li><a href="https://stackoverflow.com/a/33198850/1125029">StackOverflow: What is the Temporal Dead Zone.</a></li>
 <li><a href="https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable">StackOverflow: What is the difference between using let and var?</a></li>
</ul>
