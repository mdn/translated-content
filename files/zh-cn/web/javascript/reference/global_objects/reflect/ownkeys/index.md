---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
tags:
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
---
<div>{{JSRef}}</div>

<p>静态方法 <code><strong>Reflect</strong></code><strong><code>.ownKeys()</code></strong> 返回一个由目标对象自身的属性键组成的数组。</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-ownkeys.html")}}</div>



<h2 id="语法">语法</h2>

<pre class="syntaxbox">Reflect.ownKeys(target)
</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>获取自身属性键的目标对象。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>由目标对象的自身属性键组成的 {{jsxref("Array")}}。 </p>

<h3 id="异常">异常</h3>

<p>如果目标不是 {{jsxref("Object")}}，抛出一个 {{jsxref("TypeError")}}。</p>

<h2 id="描述">描述</h2>

<p><code>Reflect.ownKeys</code> 方法返回一个由目标对象自身的属性键组成的数组。它的返回值等同于<code>{{jsxref("Object.getOwnPropertyNames")}}(target).concat({{jsxref("Object.getOwnPropertySymbols")}}(target))。</code></p>

<h2 id="示例">示例</h2>

<h3 id="使用_Reflect.ownKeys()">使用 <code>Reflect.ownKeys()</code></h3>

<pre class="brush: js">Reflect.ownKeys({z: 3, y: 2, x: 1}); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

var sym = Symbol.for("comet");
var sym2 = Symbol.for("meteor");
var obj = {[sym]: 0, "str": 0, "773": 0, "0": 0,
           [sym2]: 0, "-1": 0, "8": 0, "second str": 0};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
</ul>
