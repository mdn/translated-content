---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
tags:
  - JavaScript
  - 类型错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/No_non-null_object
---
<div>{{JSSidebar("Errors")}}</div>

<h2 id="提示信息">提示信息</h2>

<pre class="syntaxbox">TypeError: "x" is not a non-null object (Firefox)
TypeError: Property description must be an object: "x" (Chrome)
TypeError: Invalid value used in weak set (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>在期待出现对象类型的值的地方而没有提供。{{jsxref("null")}} 不是对象类型，因此不起作用。必须在给定的场景下提供一个合适的对象。</p>

<h2 id="示例">示例</h2>

<h3 id="期望的属性描述器">期望的属性描述器</h3>

<p>当使用诸如 {{jsxref("Object.create()")}} 或 {{jsxref("Object.defineProperty()")}} 及{jsxref("Object.defineProperties()")}} 方法时，可选的属性描述器参数需要提供一个描述器对象。提供非对象类型的值（例如数字）将会报错：</p>

<pre class="brush: js example-bad">Object.defineProperty({}, 'key', 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, 'key', null);
// TypeError: null is not a non-null object
</pre>

<p>一个合法的描述器对象类似于下面这样：</p>

<pre class="brush: js example-good">Object.defineProperty({}, 'key', { value: 'foo', writable: false });
</pre>

<h3 id="WeakMap_和_WeakSet_对象需要对象类型的键"><code>WeakMap</code> 和 <code>WeakSet</code> 对象需要对象类型的键</h3>

<p>{{jsxref("WeakMap")}} 和 {{jsxref("WeakSet")}} 对象只能存储对象类型的键，而不能使用其他类型的。</p>

<pre class="brush: js example-bad">var ws = new WeakSet();
ws.add('foo');
// TypeError: "foo" is not a non-null object</pre>

<p>用对象类型的值来替换：</p>

<pre class="brush: js example-good">ws.add({foo: 'bar'});
ws.add(window);
</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}</li>
 <li>{{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}</li>
</ul>
