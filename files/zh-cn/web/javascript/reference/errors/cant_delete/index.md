---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
tags:
  - JavaScript
  - 严格模式
  - 类型错误
  - 错误
translation_of: Web/JavaScript/Reference/Errors/Cant_delete
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="消息">消息</h2>

<pre class="syntaxbox">TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
TypeError: Cannot delete property 'x' of #&lt;Object&gt; (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}} 只出现在严格模式下。</p>

<h2 id="哪里有问题？">哪里有问题？</h2>

<p>尝试删除某个属性，但是这个属性是 <a href="/en-US/docs/Web/JavaScript/Data_structures#Properties">不可配置的</a>。<code>configurable</code>属性控制是否该属性能从对象上删除，以及它的属性（除了<code>writable</code>）能否被修改。</p>

<p>这个错误仅仅在<a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">严格模式</a>下出现。在非严格模式下，这个操作返回 <code>false</code>。</p>

<h2 id="示例">示例</h2>

<p>不可配置的属性并不特别常见，但是它们可以使用 {{jsxref("Object.defineProperty()")}} 或 {{jsxref("Object.freeze()")}} 创建。</p>

<pre class="brush: js example-bad">'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
delete obj.score;  // TypeError

'use strict';
var obj = {};
Object.defineProperty(obj, 'foo', {value: 2, configurable: false});
delete obj.foo;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop();  // TypeError
</pre>

<p>也有一些内建于 JavaScript 的不可配置属性。你可能会尝试删除一个数学常量。</p>

<pre class="brush: js example-bad">'use strict';
delete Math.PI;  // TypeError</pre>

<h2 id="另见">另见</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete operator</a></li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
</ul>
