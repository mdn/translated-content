---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
---
<div>{{JSRef}}</div>

<p><strong><code>Symbol.unscopables </code></strong>指用于指定对象值，其对象自身和继承的从关联对象的 with 环境绑定中排除的属性名称。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}</div>

<h2 id="描述">描述</h2>

<p>可以在任何对象上定义 <code>@@unscopables</code> symbol (<code>Symbol.unscopables</code>)，用于排除属性名称并与 <code>with</code> 环境绑定在一起作为词法变量公开。 请注意，如果使用 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a>，语句将不可用，并且可能也不需要 symbol。</p>

<p>在 <code>unscopables</code> 对象上设置属性为 true，将使其 <em>unscopable</em> 并且因此该属性也将不会在词法环境变量中出现。 如果设置属性为 <code>false</code> ，则将使其可 <code>scopable</code> 并且该属性会出现在词法环境变量中。</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="示例">示例</h2>

<p>下列的代码可兼容 ES5 及以下版本。然而，在 ECMAScript 2015 (ES6) 或其后续版本中，{{jsxref("Array.prototype.keys()")}} 方法才会出现。意味着内部 <code>with</code> 环境“关键字” 存在该方法，但变量中不会存在。 也就是说，当 <code>unscopable</code>s symbol 被展示时，内置的<code>unscopables </code>设置是由 {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} 展示并实现的， 一些 Array 的方法 将作为 scoped 放入 <code>with</code> 语句中。</p>

<pre class="brush: js">var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
</pre>

<p>你也可以为你自己的对象设置 <code>unscopables</code> 。</p>

<pre class="brush: js">var obj = {
  foo: 1,
  bar: 2
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true
};

with(obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}</li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/with">with</a></code> statement (not available in <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">Strict mode</a>)</li>
</ul>
