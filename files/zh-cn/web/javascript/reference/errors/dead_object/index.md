---
title: 'TypeError: can''t access dead object'
slug: Web/JavaScript/Reference/Errors/Dead_object
tags:
  - JavaScript
  - 插件
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Dead_object
---
<div>{{JSSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">TypeError: can't access dead object
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>为了提高内存使用效率以及防止内存泄露，Firefox 浏览器不允许插件在 DOM 所在的父页面被销毁后对 DOM 对象保持强引用。死对象指的是在 DOM 被销毁后依然持有对 DOM 元素的强引用 (处于活跃状态)。为了避免这样的问题，对处于外部文档中的 DOM 节点的引用应该被存储于一个专属于那个文档的对象当中，并且在文档卸载的时候将其清理，或者使用<a href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getWeakReference">弱引用</a>方式进行存储。</p>

<h2 id="Checking_if_an_object_is_dead">Checking if an object is dead</h2>

<p><a href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils">Components.utils</a> offers a <code>isDeadWrapper()</code> method, which privileged code might use.</p>

<pre class="brush: js">if (Components.utils.isDeadWrapper(window)) {
  // dead
}</pre>

<p>Unprivileged code has no access to Component.utils and might just be able catch the exception.</p>

<pre class="brush: js">try {
  String(window);
}
catch (e) {
  console.log("window is likely dead");
}</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/">What does “can’t access dead object” mean?</a></li>
 <li><a href="/en-US/docs/Extensions/Common_causes_of_memory_leaks_in_extensions">Common causes of memory leaks in extensions</a></li>
 <li><a href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils">Components.utils</a></li>
 <li><a href="/en-US/docs/Mozilla/Zombie_compartments">Zombie Compartments</a></li>
</ul>
