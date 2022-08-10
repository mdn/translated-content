---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
tags:
  - JavaScript
  - 类型错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Cant_redefine_property
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Cannot redefine property: "x" (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>这种错误的起因在于试图给对象重新定义一个属性，但是该属性是<a href="/en-US/docs/Web/JavaScript/Data_structures#Properties">不可配置的</a>。 <code>configurable</code> 特性控制着该属性是否可以从对象中删除，以及它的各个特性（除 writable 之外）是否可以修改。通常使用<a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">对象初始化语句</a>定义的对象属性是可配置的。而使用 {{jsxref("Object.defineProperty()")}} 定义的属性则默认不可配置。</p>

<h2 id="示例">示例</h2>

<h3 id="使用_object.defineProperty_创建的不可配置属性">使用 object.defineProperty 创建的不可配置属性</h3>

<p>在使用 {{jsxref("Object.defineProperty()")}} 创建属性的时候，如果没有明确将其设定为可配置的，那么创建出来的属性就是不可配置的。</p>

<pre class="brush: js example-bad">var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar"});

Object.defineProperty(obj, "foo", {value: "baz"});
// TypeError: can't redefine non-configurable property "foo"
</pre>

<p>如果想要稍后重新定义的话，那么需要将 "foo" 属性设置为可配置的。</p>

<pre class="brush: js example-good">var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar", configurable: true});
Object.defineProperty(obj, "foo", {value: "baz", configurable: true});</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Data_structures#Properties">[[Configurable]]</a></li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
