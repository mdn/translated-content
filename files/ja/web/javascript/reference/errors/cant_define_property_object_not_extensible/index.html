---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
tags:
- Error
- Errors
- JavaScript
- TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "can't define property "x": "obj" is not extensible" は {{jsxref("Object.preventExtensions()")}} でオブジェクトが拡張可能ではなくなったため、その時点で存在していたプロパティを設定できなかった際に発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: js">TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>通常、オブジェクトは拡張可能で、新しいプロパティを追加できます。しかしこの場合は、{{jsxref("Object.preventExtensions()")}} がオブジェクトをもはや拡張できないものに設定しているため、拡張不可のマークが付けられたときにあったプロパティ以上のプロパティを追加できません。</p>

<h2 id="Examples">例</h2>

<h3 id="Adding_new_properties_to_a_non-extensible_objects">Adding new properties to a
  non-extensible objects</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モード</a>では、拡張不可のオブジェクトに新しいプロパティを追加しようとすると <code>TypeError</code> が発生します。非 strict モードでは、"x" プロパティの追加は暗黙的に無視されます。</p>

<pre class="brush: js example-bad">'use strict';

var obj = {};
Object.preventExtensions(obj);

obj.x = 'foo';
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">strict モード</a>と非 strict モード共に、拡張不可のオブジェクトに新しいプロパティを追加しようとして {{jsxref("Object.defineProperty()")}} を呼び出すと、例外が発生します。</p>

<pre class="brush: js example-bad">var obj = { };
Object.preventExtensions(obj);

Object.defineProperty(obj,
  'x', { value: "foo" }
);
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>このエラーを修正するには、{{jsxref("Object.preventExtensions()")}} の呼び出しを削除するか、オブジェクトが拡張不可とマークされる前にプロパティを追加するように移動する必要があります。もちろん、必要がないのであれば、追加しようとしているプロパティを削除しても構いません。</p>

<pre class="brush: js example-good">'use strict';

var obj = {};
obj.x = 'foo'; // プロパティを追加してから拡張不可にする

Object.preventExtensions(obj);</pre>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("Object.preventExtensions()")}}</li>
</ul>
