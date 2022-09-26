---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
  - Исключение
translation_of: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre>TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_произошло_не_так">Что произошло не так?</h2>

<p>Обычно, объект расширяемый и к нему можно добавить новые свойства. Однако в этой ситуации {{jsxref("Object.preventExtensions()")}} сделал объект нерасширяемым, так что у него не может появиться других свойств, отличных от тех, которые были объявлены когда объект стал нерасширяемым.</p>

<h2 id="Примеры">Примеры</h2>

<p>В строгом режиме при попытке добавить новые свойства в нерасширяемый объект возникает ошибка TypeError. В нестрогом режиме добавление свойства "x" игнорируется.</p>

<pre class="brush: js example-bad">'use strict';

var obj = {};
Object.preventExtensions(obj);

obj.x = 'foo';
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>В обеих, строгом и нестрогом режимах, вызов {{jsxref("Object.defineProperty()")}} вызывает исключение при добавлении нового свойства в нерасширяемый объект.</p>

<pre class="brush: js example-bad">var obj = { };
Object.preventExtensions(obj);

Object.defineProperty(obj,
  'x', { value: "foo" }
);
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>Чтобы исправить эту ошибку, необходимо удалить вызов {{jsxref("Object.preventExtensions()")}} полностью или переместить его в положение, чтобы сначала свойство добавлялось, а потом объект помечался как нерасширяемый. Конечно вы также можете удалить свойство, которое пытались добавить, если оно вам не нужно.</p>

<pre class="brush: js example-good">'use strict';

var obj = {};
obj.x = 'foo'; // add property first and only then prevent extensions

Object.preventExtensions(obj);</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
</ul>
