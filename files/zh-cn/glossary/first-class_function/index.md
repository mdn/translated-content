---
title: First-class Function（头等函数）
slug: Glossary/First-class_Function
tags:
  - 函数
  - 术语
  - 编程
translation_of: Glossary/First-class_Function
---
<p>当一门编程语言的函数可以被当作变量一样用时，则称这门语言拥有<strong>头等函数</strong>。例如，在这门语言中，函数可以被当作参数传递给其他函数，可以作为另一个函数的返回值，还可以被赋值给一个变量。</p>

<h2 id="示例_把函数赋值给变量">示例 | 把函数赋值给变量</h2>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js"><code>const foo = function() {
   console.log("foobar");
}
// 用变量来调用它
foo();</code></pre>

<p>这里我们把一个匿名函数赋值给一个{{glossary("Variable", "变量")}}，然后我们在这个变量后面加上一对圆括号 <code>()</code> 来调用这个函数。</p>

<div class="note">
<p><strong>备注：</strong> 即使你的函数有自己的函数名称，你仍然可以用这个变量名去调用它。给函数命名只会方便你调试，但不会影响我们调用它。</p>
</div>

<h2 id="示例_传递一个函数作为参数">示例 | 传递一个函数作为参数</h2>

<h3 id="JavaScript_2">JavaScript</h3>

<pre class="brush: js"><code>function sayHello() {
   return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// 传递 `sayHello` 作为 `greeting` 函数的参数
greeting(sayHello, "JavaScript!"); // Hello, JavaScript!</code></pre>

<p>这里我们传递 <code>sayHello()</code> 函数作为 <code>greeting()</code> 函数的参数，这就印证了头等函数定义所说的——我们把函数当作<strong>值</strong>或者说是<strong>变量</strong>来对待。</p>

<div class="note">
<p><strong>备注：</strong> 回调函数：我们把一个函数作为参数传递给另外一个函数，那么我们就称这个函数为回调函数。<code>sayHello()</code> 函数就是一个回调函数。</p>
</div>

<h2 id="示例_返回一个函数">示例 | 返回一个函数</h2>

<h3 id="JavaScript_3">JavaScript</h3>

<pre class="brush: js"><code>function sayHello() {
   return function() {
      console.log("Hello!");
   }
}</code>
</pre>

<p>在这个例子中，我们需要从另外一个函数中返回一个函数，<em>之所以可以返回一个函数，是因为在 Javascript 中，函数可被作为<strong>值</strong>来对待。</em></p>

<div class="note">
<p><strong>备注：</strong> 高阶函数（Higher-Order Function）：一个返回另外一个函数的函数被称为高阶函数。</p>
</div>

<p>我们再来看看上面的例子：假如我们需要调用 <code>sayHello</code> 这个函数，然后让它返回一个<strong>匿名函数</strong>，我们有两种方法：</p>

<h3 id="1-_用一个变量">1- 用一个变量</h3>

<pre class="brush: js"><code>const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc(); // Hello!</code>
</pre>

<p>用这种方法，它返回一个 <code>Hello!</code> 的消息。</p>

<div class="note">
<p><strong>备注：</strong> 你要用另外一个变量来调用它。如果你直接用 <code>sayHello</code> 来调用这个函数，它会返回这个函数自身，而不会调用它里面被返回的函数。</p>
</div>

<h3 id="2-_使用双括号">2- 使用双括号</h3>

<pre class="brush: js"><code>function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();</code>
</pre>

<p>我们使用双括号 <code>()()</code> 来调用 <code>sayHello()</code> 返回的函数。</p>

<h2 id="了解更多">了解更多</h2>

<h3 id="常识">常识</h3>

<ul>
 <li>{{Interwiki("wikipedia", "First-class functions", "First-class functions")}} 在维基百科</li>
</ul>
