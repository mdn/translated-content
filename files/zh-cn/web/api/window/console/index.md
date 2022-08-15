---
title: Window.console
slug: Web/API/Window/console
---
<p>{{ APIRef }}</p>

<p>只读属性 Window.console 返回一个对{{domxref("Console")}}对象的引用，Window.console 提供了向浏览器控制台输出日志信息的方法。这些方法仅应该用于调试，并不应该用来给最终用户呈现信息。</p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><em>var consoleObj</em> = <em>window</em>.console;
</pre>

<h2 id="Example">示例</h2>

<h3 id="输出信息">输出信息</h3>

<p>第一个例子向控制台输出文字。</p>

<pre class="brush: js">console.log("An error occurred while loading the content");
</pre>

<p>下边这个例子向控制台打印一个对象，可以通过点击展开组件查看对象的各项属性。</p>

<pre class="brush: js">console.dir(someObject);</pre>

<p>更多示例参考 {{SectionOnPage("/en-US/docs/Web/API/Console", "Usage")}}。</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<div class="note">
<p>当前各种浏览器之间的实现还有很多差异，推动一致的工作也在进行当中。</p>
</div>
