---
title: 回调函数
slug: Glossary/Callback_function
tags:
  - Callback
  - 回调函数
translation_of: Glossary/Callback_function
---
<p>被作为实参传入另一函数，并在该外部函数内被调用，用以来完成某些任务的函数，称为回调函数。</p>

<p>例如：</p>

<pre class="brush: js">function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('请输入你的名字。');
  callback(name);
}

processUserInput(greeting);</pre>

<p>以上范例为 {{glossary("synchronous","同步")}} 回调，它是立即执行的。</p>

<p>然而需要注意的是，回调函数经常被用于继续执行一个{{glossary("asynchronous","异步")}} 完成后的操作，它们被称为异步回调。例如，这个简单 的 <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/maps-example.html">maps-example.html</a> 例子（<a href="http://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html">live 链接点此</a>）使用了 Google Maps 以及 Geolocation 的 API 来展示您设备的当前位置。</p>

<p>由于从 GPS 得到设备坐标信息的操作为异步的（我们不知道何时数据会被返回），所以 {{domxref("Geolocation.getCurrentPosition()")}} 方法接收一个匿名回调函数作为形参，而该回调函数则接收传回的坐标数据作为形参。该函数只在坐标数据返回后才执行。</p>

<h2 id="了解更多"><strong>了解更多</strong></h2>

<h3 id="基础知识"><strong>基础知识</strong></h3>

<ul>
 <li>在维基百科中的{{interwiki("wikipedia", "回调函数", "回调函数")}} </li>
</ul>
