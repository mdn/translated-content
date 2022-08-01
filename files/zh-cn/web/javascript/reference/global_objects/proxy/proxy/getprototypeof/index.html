---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
  - 方法
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
original_slug: Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf
---
<div>{{JSRef("Global_Objects", "Proxy")}}</div>

<p><strong><code>handler.getPrototypeOf()</code></strong> 是一个代理（Proxy）方法，当读取代理对象的原型时，该方法就会被调用。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}</div>



<h2 id="语法">语法</h2>

<pre class="brush: js">const <var>p</var> = new Proxy(<var>obj</var>, {
  getPrototypeOf(<var>target</var>) {
  ...
  }
});
</pre>

<h3 id="参数">参数</h3>

<p>当 <code>getPrototypeOf</code> 方法被调用时，<code>this</code> 指向的是它所属的处理器对象。</p>

<dl>
 <dt><code>target</code></dt>
 <dd>被代理的目标对象。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p><code>getPrototypeOf</code> 方法的返回值必须是一个对象或者 <code>null</code>。</p>

<h2 id="描述">描述</h2>

<p>在 JavaScript 中，下面这五种操作（方法/属性/运算符）可以触发 JS 引擎读取一个对象的原型，也就是可以触发 <code>getPrototypeOf()</code> 代理方法的运行：</p>

<ul>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object/proto", "__proto__")}}</li>
 <li>{{jsxref("Object.prototype.isPrototypeOf()")}}</li>
 <li>{{jsxref("Operators/instanceof", "instanceof")}}</li>
</ul>

<p>如果遇到了下面两种情况，JS 引擎会抛出 {{jsxref("TypeError")}} 异常：</p>

<ul>
 <li><code>getPrototypeOf()</code> 方法返回的不是对象也不是 <code>null。</code></li>
 <li>目标对象是不可扩展的，且 <code>getPrototypeOf()</code> 方法返回的原型不是目标对象本身的原型。</li>
</ul>

<h2 id="示例">示例</h2>

<h3 id="基本用法">基本用法</h3>

<pre class="brush: js">var obj = {};
var proto = {};
var handler = {
    getPrototypeOf(target) {
        console.log(target === obj);   // true
        console.log(this === handler); // true
        return proto;
    }
};

var p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto);    // true
</pre>

<h3 id="5_种触发_getPrototypeOf_代理方法的方式">5 种触发 getPrototypeOf 代理方法的方式</h3>

<pre class="brush: js">var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
</pre>

<h3 id="两种情况下的异常">两种情况下的异常</h3>

<pre class="brush: js">var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return "foo";
    }
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
    getPrototypeOf(target) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.getPrototypeOf()")}}</li>
</ul>
