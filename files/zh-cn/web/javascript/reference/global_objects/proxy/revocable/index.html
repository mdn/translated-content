---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
tags:
  - ECMAScript6
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
---
<div>{{JSRef("Global_Objects", "Proxy")}}</div>

<p><code><strong>Proxy.revocable()</strong></code> 方法可以用来创建一个可撤销的代理对象。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">Proxy.revocable(target, handler);
</pre>

<dl>
 <dt><code>target</code></dt>
 <dd>将用 <code>Proxy</code> 封装的目标对象。可以是任何类型的对象，包括原生数组，函数，甚至可以是另外一个代理对象。</dd>
 <dt><code>handler</code></dt>
 <dd>一个对象，其属性是一批可选的函数，这些函数定义了对应的操作被执行时代理的行为。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>返回一个包含了代理对象本身和它的撤销方法的可撤销 <code>Proxy</code> 对象。</p>

<h2 id="描述">描述</h2>

<p>该方法的返回值是一个对象，其结构为： <code>{"proxy": proxy, "revoke": revoke}</code>，其中：</p>

<dl>
 <dt><code>proxy</code></dt>
 <dd>表示新生成的代理对象本身，和用一般方式 <code>new Proxy(target, handler)</code> 创建的代理对象没什么不同，只是它可以被撤销掉。</dd>
 <dt><code>revoke</code></dt>
 <dd>撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象。</dd>
</dl>

<p>一旦某个代理对象被撤销，它将变得几乎完全不可调用，在它身上执行任何的<strong>可代理操作</strong>都会抛出 {{jsxref("TypeError")}} 异常（注意，可代理操作一共有 {{jsxref("Proxy", "14 种", "#Methods_of_the_handler_object")}}，执行这 14 种操作以外的操作不会抛出异常）。一旦被撤销，这个代理对象便不可能被直接恢复到原来的状态，同时和它关联的<strong>目标对象</strong>以及<strong>处理器对象</strong>都有可能被垃圾回收掉。再次调用撤销方法 <code>revoke()</code> 则不会有任何效果，但也不会报错。</p>

<h2 id="示例">示例</h2>

<pre class="brush: js">var revocable = Proxy.revocable({}, {
  get(target, name) {
    return "[[" + name + "]]";
  }
});
var proxy = revocable.proxy;
proxy.foo;              // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // 抛出 TypeError
proxy.foo = 1           // 还是 TypeError
delete proxy.foo;       // 又是 TypeError
typeof proxy            // "object"，因为 typeof 不属于可代理操作
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
</ul>
