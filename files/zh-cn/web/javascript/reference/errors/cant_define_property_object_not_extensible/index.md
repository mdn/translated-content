---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
  - 类型错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

<pre class="syntaxbox">TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>通常情况下，对象是可以进行扩展的，即可以向其添加新的属性。然而当使用 {{jsxref("Object.preventExtensions()")}} 将一个对象标记为不再可以扩展的情况下，就无法对该对象添加在其被标记为不可扩展之前所拥有的属性之外的新属性了。</p>

<h2 id="示例">示例</h2>

<p>在<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a>下，向已经标记为不可扩展的对象添加新属性会报 TypeError 错误。而在非严格模式下，添加属性 “x” 会被静默忽略。</p>

<pre class="brush: js example-bad">'use strict';

var obj = {};
Object.preventExtensions(obj);

obj.x = 'foo';
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>在<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a>和非严格模式下两种模式下，调用{{jsxref("Object.defineProperty()")}} 向标记为不可扩展的对象添加新属性都会报 TypeError 错误。</p>

<pre class="brush: js example-bad">var obj = { };
Object.preventExtensions(obj);

Object.defineProperty(obj,
  'x', { value: "foo" }
);
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>为了修复这个错误，你可以彻底移除 {{jsxref("Object.preventExtensions()")}} 语句，或者将其移动位置，使得属性在对象被标记为不可扩展之前添加。当然如果不需要试图添加的属性的话，你也可以将其移除。</p>

<pre class="brush: js example-good">'use strict';

var obj = {};
obj.x = 'foo'; // add property first and only then prevent extensions

Object.preventExtensions(obj);</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
</ul>
