---
title: Function（函数）
slug: Glossary/Function
tags:
  - IIFE
  - 函数
  - 术语
translation_of: Glossary/Function
---
<p><strong>function</strong>，<strong>函数</strong>，是一个可以被其他代码或其自身调用的代码片段，或者是一个指向该函数的{{Glossary("variable", "变量")}} 。当函数被调用时，{{Glossary("Argument", "参数")}}被作为输入传递给函数，并且函数可以返回输出。在 {{glossary("JavaScript")}} 中，函数也是一个{{glossary("object", "对象")}}。</p>

<p>函数名是作为函数声明或函数表达式的一部分声明的{{Glossary("identifier", "标识符")}}。函数的{{Glossary("scope", "作用域")}}取决于函数名是一个声明还是表达式。</p>

<h3 id="不同类型的函数">不同类型的函数</h3>

<p><strong>匿名函数</strong>是一个没有函数名的函数：</p>

<pre class="brush: js">function () {};
// or using the ECMAScript 2015 arrow notation
() =&gt; {};
</pre>

<p><strong>命名函数</strong>是具有函数名称的函数：</p>

<pre class="brush: js">function foo() {}
// or using the ECMAScript 2015 arrow notation
const foo = () =&gt; {};
</pre>

<p><strong>内部函数</strong>是另一个函数内的函数（下面例子中的 <code>square</code>）。外部函数是包含一个函数的函数（下面例子中的 <code>addSquares</code>）：</p>

<pre class="brush: js">function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};
//Using ECMAScript 2015 arrow notation
const addSquares = (a,b) =&gt; {
   const square = x =&gt; x*x;
   return square(a) + square(b);
};
</pre>

<p><strong>递归函数</strong>是调用自身的函数。可参考{{Glossary("Recursion", "递归")}}。</p>

<pre class="brush: js">function loop(x) {
   if (x &gt;= 10)
      return;
   loop(x + 1);
};
//Using ECMAScript 2015 arrow notation
const loop = x =&gt; {
   if (x &gt;= 10)
      return;
   loop(x + 1);
};
</pre>

<p><strong><code>立即调用函数表达式</code></strong>（{{glossary("IIFE")}}）是一种被加载到浏览器的编译器之后直接调用的函数。识别 IIFE 的方法是通过在函数声明的末尾定位额外的左和右括号。</p>

<pre class="brush: js">// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
​function foo() {
    console.log('Hello Foo');
}();
*/

(function foo() {
    console.log("Hello Foo");
}());

(function food() {
    console.log("Hello Food");
})();

</pre>

<p>如果你想进一步了解 IIFE, 可参考以下的维基百科的页面：<a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression">Immediately Invoked Function Expression</a></p>

<h2 id="了解更多">了解更多</h2>

<h3 id="技术参考">技术参考</h3>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
 <li><a href="/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow Functions</a></li>
</ul>
