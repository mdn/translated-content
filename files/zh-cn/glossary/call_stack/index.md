---
title: Call stack（调用栈）
slug: Glossary/Call_stack
tags:
  - 术语
  - 编程
  - 调用栈
translation_of: Glossary/Call_stack
---
<p>调用栈是解释器（比如浏览器中的 JavaScript 解释器）追踪函数执行流的一种机制。当执行环境中调用了多个{{glossary("function","函数")}}时，通过这种机制，我们能够追踪到哪个函数正在执行，执行的函数体中又调用了哪个函数。</p>

<ul>
 <li>每调用一个函数，解释器就会把该函数添加进调用栈并开始执行。</li>
 <li>正在调用栈中执行的函数还调用了其它函数，那么新函数也将会被添加进调用栈，一旦这个函数被调用，便会立即执行。</li>
 <li>当前函数执行完毕后，解释器将其清出调用栈，继续执行当前执行环境下的剩余的代码。</li>
 <li>当分配的调用栈空间被占满时，会引发“堆栈溢出”错误。</li>
</ul>

<pre class="brush: js notranslate"><code>function greeting() {
   // [1] Some codes here
   sayHi();
   // [2] Some codes here
}
function sayHi() {
   return "Hi!";
}

// 调用 `greeting` 函数
greeting();

// [3] Some codes here</code>
</pre>

<p>上面的代码会按照如下流程这样执行：</p>

<ol>
 <li>忽略前面所有函数，直到 <code>greeting()</code> 函数被调用。</li>
 <li>把 <code>greeting()</code> 添加进调用栈列表。</li>
 <li>执行 <code>greeting()</code> 函数体中的所有代码。<br>

  <pre class="notranslate"><code>调用栈列表:
- greeting</code></pre>
 </li>
 <li>代码执行到 <code>sayHi()</code> 时，该函数被调用。</li>
 <li>把 <code>sayHi()</code> 添加进调用栈列表。</li>
 <li>执行 <code>sayHi()</code> 函数体中的代码，直到全部执行完毕。<br>

  <pre class="brush: plain notranslate"><code>调用栈列表:
- sayHi
- greeting
</code></pre>
 </li>
 <li>返回来继续执行 <code>greeting()</code> 函数体中 <code>sayHi()</code> 后面的代码。</li>
 <li>删除调用栈列表中的 <code>sayHi()</code> 函数。</li>
 <li>当 <code>greeting()</code> 函数体中的代码全部执行完毕，返回到调用 <code>greeting()</code> 的代码行，继续执行剩下的 JS 代码。<br>

  <pre class="notranslate"><code>调用栈列表:
- greeting</code></pre>
 </li>
 <li>删除调用栈列表中的 <code>greeting()</code> 函数。</li>
</ol>

<p>一开始，我们得到一个空空如也的调用栈。随后，每当有函数被调用都会自动地添加进调用栈，执行完函数体中的代码后，调用栈又会自动地移除这个函数。最后，我们又得到了一个空空如也的调用栈。</p>

<h2 id="了解更多">了解更多</h2>

<h3 id="基础知识">基础知识</h3>

<ul>
 <li>Wikipedia 上的 {{Interwiki("wikipedia", "调用栈")}}</li>
 <li><a href="/zh-CN/docs/Glossary">MDN Web 文档中的术语</a>
  <ul>
   <li>{{Glossary("Call stack")}}</li>
   <li>{{Glossary("Function")}}</li>
  </ul>
 </li>
</ul>
