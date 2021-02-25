---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Constructor
  - Function
  - JavaScript
  - 函数
  - 构造器
translation_of: Web/JavaScript/Reference/Global_Objects/Function
---
<div>{{JSRef}}</div>

<div>每个 JavaScript 函数实际上都是一个 <code>Function</code> 对象。运行 <code>(function(){}).constructor === Function // true</code> 便可以得到这个结论。</div>

<h2 id="构造函数">构造函数</h2>

<p><strong><code>Function</code> 构造函数</strong>创建一个新的 <code>Function</code> <strong>对象</strong>。直接调用此构造函数可用动态创建函数，但会遇到和 {{jsxref("eval")}} 类似的的安全问题和(相对较小的)性能问题。然而，与 <code>eval</code> 不同的是，<code>Function</code> 创建的函数只能在全局作用域中运行。</p>

<div>{{EmbedInteractiveExample("pages/js/function-constructor.html")}}</div>



<h2 id="语法">语法</h2>

<pre class="syntaxbox"><code>new Function ([<var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]],] <var>functionBody</var>)</code></pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>arg1, arg2, ... arg<em>N</em></code></dt>
 <dd>被函数使用的参数的名称必须是合法命名的。参数名称是一个有效的JavaScript标识符的字符串，或者一个用逗号分隔的有效字符串的列表;例如“<code>×</code>”，“<code>theValue</code>”，或“<code>a,b</code>”。</dd>
 <dt><code>functionBody</code></dt>
 <dd>一个含有包括函数定义的 JavaScript 语句的<strong>字符串</strong>。</dd>
</dl>

<h2 id="描述">描述</h2>

<p>使用 <code>Function</code> 构造器生成的 <code>Function</code> 对象是在函数创建时解析的。这比你使用<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function">函数声明</a>或者<a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/function">函数表达式</a>并在你的代码中调用更为低效，因为使用后者创建的函数是跟其他代码一起解析的。</p>

<p>所有被传递到构造函数中的参数，都将被视为将被创建的函数的参数，并且是相同的标示符名称和传递顺序。<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval"><span class="hidden"> </span></a></p>

<p>以调用函数的方式调用 <code>Function</code> 的构造函数（而不是使用 <code>new</code> 关键字) 跟以构造函数来调用是一样的。</p>

<h2 id="属性和方法">属性和方法</h2>

<p>全局的 <code>Function</code> 对象没有自己的属性和方法，但是，因为它本身也是一个函数，所以它也会通过原型链从自己的原型链 {{jsxref("Function.prototype")}} 上继承一些属性和方法。</p>

<h2 id="原型对象">原型对象</h2>

<h3 id="属性">属性</h3>

<div>{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype', '属性')}}</div>

<h3 id="方法">方法</h3>

<div>{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype', '方法')}}</div>

<h2 id="实例">实例</h2>

<p><code>Function</code> 实例从 {{jsxref("Function.prototype")}} 继承了一些属性和方法。 同其他构造函数一样， 你可以改变构造函数的原型从而使得所有的 <code>Function</code> 实例的属性和方法发生改变。</p>

<h2 id="示例">示例</h2>

<h3 id="传入参数调用_Function_构造函数">传入参数调用 Function 构造函数</h3>

<p>下面的代码会创建一个需要两个参数的 <code>Function</code> 对象。</p>

<pre class="brush: js">// 可以直接在 JavaScript 控制台中运行

// 创建了一个能返回两个参数和的函数
const adder = new Function("a", "b", "return a + b");

// 调用函数
adder(2, 6);
// &gt; 8
</pre>

<p>参数 "<code>a</code>" 和 "<code>b</code>" 是参数的名字，在函数体中被使用，"<code>return a + b</code>"。</p>

<h3 id="Function_构造器与函数声明之间的不同">Function 构造器与函数声明之间的不同</h3>

<p>由 <code>Function</code> 构造器创建的函数不会创建当前环境的闭包，它们总是被创建于全局环境，因此在运行时它们只能访问全局变量和自己的局部变量，不能访问它们被 <code>Function</code> 构造器创建时所在的作用域的变量。这一点与使用 {{jsxref("eval")}} 执行创建函数的代码不同。</p>

<pre class="brush: js">var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // 这里的 x 指向最上面全局作用域内的 x
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // 这里的 x 指向上方本地作用域内的 x
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
</pre>

<p>虽然这段代码可以在浏览器中正常运行，但在 Node.js 中 <code>f1()</code> 会产生一个“找不到变量 <code>x</code> ”的 <code>ReferenceError</code>。这是因为在 Node 中顶级作用域不是全局作用域，而 <code>x</code> 其实是在当前模块的作用域之中。</p>

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
   <td>Initial definition. Implemented in JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.3', 'Function')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-function-objects', 'Function')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function-objects', 'Function')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("javascript.builtins.Function")}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Functions", "函数与函数作用域")}}</li>
 <li>{{jsxref("Statements/function", "函数声明")}}</li>
 <li>{{jsxref("Operators/function", "函数表达式")}}</li>
 <li>{{jsxref("Statements/function*", "function* 声明")}}</li>
 <li>{{jsxref("Operators/function*", "function* 表达式")}}</li>
 <li>{{jsxref("AsyncFunction")}}</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
</ul>
