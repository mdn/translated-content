---
title: HTMLInputElement.labels
slug: Web/API/HTMLInputElement/labels
translation_of: Web/API/HTMLInputElement/labels
---
<div>{{APIRef("DOM")}}</div>

<p> <code><strong>HTMLInputElement.labels</strong></code> 为只读属性，它返回一个{{domxref("NodeList")}} 实例，绑定当前的{{HTMLElement("input")}} 节点的{{HTMLElement("label")}} 元素。</p>



<h2 id="语法">语法</h2>

<pre class="syntaxbox">var <var>labelElements</var> = <var>input</var>.labels;
</pre>

<h3 id="Return_value">Return value</h3>

<p> {{domxref("NodeList")}} 包含 <code>&lt;label&gt;</code> 元素和 <code>&lt;input&gt;</code> 元素.</p>

<h2 id="实例">实例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;label id="label1" for="test"&gt;Label 1&lt;/label&gt;
&lt;input id="test"/&gt;
&lt;label id="label2" for="test"&gt;Label 2&lt;/label&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">window.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("test");
  for(var i = 0; i &lt; input.labels.length; i++) {
    console.log(input.labels[i].textContent); // "Label 1" and "Label 2"
  }
});</pre>

<p>{{EmbedLiveSample("Example", "100%", 30)}}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.HTMLInputElement.labels")}}</p>
