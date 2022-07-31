---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
tags:
  - Proxy 代理 拦截
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
original_slug: Web/JavaScript/Reference/Global_Objects/Proxy/handler/preventExtensions
---
<div>{{JSRef}}</div>

<p><strong><code>handler.preventExtensions()</code></strong> 方法用于设置对{{jsxref("Object.preventExtensions()")}}的拦截</p>

<p>{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}</p>

<h2 id="语法">语法</h2>

<pre class="brush: js">var p = new Proxy(target, {
  preventExtensions: function(target) {
  }
});
</pre>

<h3 id="参数">参数</h3>

<p>以下参数传递给 <code>preventExtensions</code> 方法。它会绑定到这个 handler.</p>

<dl>
 <dt><code>target</code></dt>
 <dd>所要拦截的目标对象。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p><code>preventExtensions</code> 方法返回一个布尔值。</p>

<h2 id="描述">描述</h2>

<p><code><strong>handler.preventExtensions()</strong></code> 拦截 {{jsxref("Object.preventExtensions()")}}返回一个布尔值。</p>

<h3 id="拦截">拦截</h3>

<p>这个 trap 可以拦截这些操作：</p>

<ul>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>

<h3 id="约束">约束</h3>

<p>如果违反了下列规则，proxy 则会抛出一个 {{jsxref("TypeError")}}:</p>

<ul>
 <li>如果目标对象是可扩展的，那么只能返回 <code>false</code></li>
</ul>

<h2 id="示例">示例</h2>

<p>以下代码演示了如何拦截{{jsxref("Object.preventExtensions()")}}。</p>

<pre class="brush: js">var p = new Proxy({}, {
  preventExtensions: function(target) {
    console.log('called');
    Object.preventExtensions(target);
    return true;
  }
});

console.log(Object.preventExtensions(p)); // "called"
                                          // false
</pre>

<p>以下代码违反了约束。</p>

<pre class="brush: js">var p = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(p); // 抛出类型错误
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>
