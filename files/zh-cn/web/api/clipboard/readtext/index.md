---
title: Clipboard.readText()
slug: Web/API/Clipboard/readText
tags:
  - API
  - Async Clipboard API
  - Clip
  - Clipboard
  - readText
  - 复制
  - 粘贴
translation_of: Web/API/Clipboard/readText
---
<div>{{APIRef("Clipboard API")}}</div>

<div><strong>{{domxref("Clipboard")}}</strong> 接口的<strong><code>readText()</code></strong>方法解析系统剪贴板的文本内容返回一个{{jsxref("Promise")}} 。</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">var <em>promise</em> = navigator.clipboard.readText()</pre>

<h3 id="参数">参数</h3>

<p>None.</p>

<h3 id="返回值">返回值</h3>

<p>A {{jsxref("Promise")}} that resolves with a {{domxref("DOMString")}} containing the textual contents of the clipboard. Returns an empty string if the clipboard is empty, does not contain text, or does not include a textual representation among the {{domxref("DataTransfer")}} objects representing the clipboard's contents.</p>

<p>要从剪贴板中读取非文本内容，请改用{{domxref("Clipboard.read", "read()")}}方法。您可以使用 {{domxref("Clipboard.writeText", "writeText()")}}将文本写入剪贴板</p>

<h2 id="例子">例子</h2>

<p>此示例检索剪贴板的文本内容，并将返回的文本插入元素的内容中。</p>

<pre class="brush: js">navigator.clipboard.readText().then(
  clipText =&gt; document.getElementById("outbox").innerText = clipText);</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.Clipboard.readText")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Clipboard_API">Clipboard API</a></li>
 <li>{{domxref("Clipboard.writeText()")}}</li>
 <li>{{domxref("Clipboard.write()")}}</li>
</ul>
