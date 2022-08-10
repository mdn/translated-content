---
title: Window.close()
slug: Web/API/Window/close
tags:
  - API
  - DOM
  - Window
  - 参考
  - 方法
translation_of: Web/API/Window/close
---
<div>{{APIRef}}</div>

<p><code><strong>Window.close()</strong></code> 方法关闭当前窗口或某个指定的窗口。</p>

<p>该方法只能由 {{domxref("Window.open()")}} 方法打开的窗口的 <code>window</code> 对象来调用。如果一个窗口不是由脚本打开的，那么，在调用该方法时，JavaScript 控制台会出现类似下面的错误：<code>不能使用脚本关闭一个不是由脚本打开的窗口。</code> 或 <code>Scripts may not close windows that were not opened by script.</code> 。</p>

<p>同时也要注意，对于由 <code><a href="/zh-CN/docs/Web/API/HTMLIFrameElement/contentWindow">HTMLIFrame​Element​.content​Window</a></code> 返回的 {{domxref("Window")}} 对象，<code>close()</code> 也没有效果。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">window.close();</pre>

<h2 id="例子">例子</h2>

<h3 id="关闭一个由_window.open方法打开的窗口">关闭一个由 <code>window.open()</code>方法打开的窗口</h3>

<p>这个例子展示了如何使用这个方法关闭使用 {{domxref("window.open()")}} 打开的窗口</p>

<pre class="brush: js">// 用于存储将要打开的窗口（的引用）的全局变量
var openedWindow;

function openWindow() {
  openedWindow = window.open('moreinfo.htm');
}

function closeOpenedWindow() {
  openedWindow.close();
}
</pre>

<h3 id="关闭当前窗口">关闭当前窗口</h3>

<p>当直接调用 window 对象的 <code>close()</code> 方法而非在一个 window 实例上调用 <code>close()</code> 时，浏览器会关闭最前面的窗口，无论是不是你的脚本创建的这个窗口。（Firefox 35.0.1：脚本不能关闭不是他打开的窗口）</p>

<pre class="brush: js">function closeCurrentWindow() {
  window.close();
}
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.Window.close")}}</p>
