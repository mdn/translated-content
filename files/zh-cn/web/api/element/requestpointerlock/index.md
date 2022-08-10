---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
translation_of: Web/API/Element/requestPointerLock
---
<div>{{ APIRef("DOM") }}{{ seeCompatTable }}</div>

<p><strong><code>Element.requestPointerLock()</code></strong> 方法允许您异步地请求将鼠标指针锁定在指定元素上。</p>

<p>若想追踪请求成功还是失败，则需要在 {{domxref("Document")}} 级别监听 {{event("pointerlockchange")}} 和 {{event("pointerlockerror")}} 事件。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox notranslate"><em>instanceOfElement</em>.requestPointerLock();
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>


<p>{{Compat("api.Element.requestPointerLock")}}</p>
</div>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{ domxref("Document.pointerLockElement") }}</li>
 <li>{{ domxref("Document.exitPointerLock()") }}</li>
 <li><a href="/Web/API/Pointer_Lock_API">Pointer Lock</a></li>
</ul>
