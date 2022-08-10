---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
tags:
- API
- HTML DOM
- HTMLElement
- Method
- Reference
browser-compat: api.HTMLElement.click
translation_of: Web/API/HTMLElement/click
---
<div>
  <div>{{ APIRef("HTML DOM") }}</div>
</div>

<p>The <code><strong>HTMLElement.click()</strong></code>方法可以用来模拟鼠标左键单击一个元素。</p>

<p>当在支持 <code>click()</code> 方法的元素上使用该方法（例如
  {{HTMLElement("input")}}) ，将会产生该元素的一个点击事件。这个事件会冒泡上升到文档树（或事件链）中更高的元素，并触发它们的点击事件。</p>

<h2 id="Syntax">语法</h2>

<pre class="brush: js"><em>element</em>.click()</pre>

<h2 id="Example">用例</h2>

<p>当鼠标移动过复选框时模拟一个点击事件：</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form&gt;
  &lt;input type="checkbox" id="myCheck" onmouseover="myFunction()" onclick="alert('click event occurred')"&gt;
&lt;/form&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">// 当鼠标滑过（mouse-over）执行 myFunction
function myFunction() {
  document.getElementById("myCheck").click();
}
</pre>

<h2 id="Specifications">规范</h2>

{{Specifications}}

<h2 id="Browser_compatibility">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">参见</h2>

<ul>
  <li>有关的事件处理
    <ul>
      <li>{{domxref("GlobalEventHandlers.onclick")}}</li>
      <li>{{domxref("GlobalEventHandlers.ondblclick")}}</li>
      <li>{{domxref("GlobalEventHandlers.onauxclick")}}</li>
    </ul>
  </li>
</ul>
