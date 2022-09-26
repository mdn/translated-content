---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - Error
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/toString
---
<div>
 {{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}</div>
<h2 id="Summary">Сводка</h2>
<p>Метод <code><strong>toString()</strong></code> возвращает строку, представляющую указанный объект {{jsxref("Error")}}.</p>
<h2 id="Syntax">Синтаксис</h2>
<pre class="syntaxbox"><code><var>e</var>.toString()</code></pre>
<h2 id="Description">Описание</h2>
<p>Объект {{jsxref("Error")}} переопределяет метод {{jsxref("Object.prototype.toString()")}}, унаследованный всеми объектами. Его семантика следующая (предполагается, что объекты {{jsxref("Object")}} и {{jsxref("String")}} имеют свои изначальные значения):</p>
<pre class="brush: js">Error.prototype.toString = function() {
  'use strict';

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = (name === undefined) ? 'Error' : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? '' : String(msg);

  if (name === '') {
    return msg;
  }
  if (msg === '') {
    return name;
  }

  return name + ': ' + msg;
};
</pre>
<h2 id="Examples">Примеры</h2>
<pre class="brush: js">var e = new Error('непоправимая ошибка');
print(e.toString()); // 'Error: непоправимая ошибка'

e.name = undefined;
print(e.toString()); // 'Error: непоправимая ошибка'

e.name = '';
print(e.toString()); // 'непоправимая ошибка'

e.message = undefined;
print(e.toString()); // 'Error'

e.name = 'привет';
print(e.toString()); // 'привет'
</pre>
<h2 id="Specifications">Спецификации</h2>
{{Specifications}}
<h2 id="Browser_compatibility">Совместимость с браузерами</h2>
<div>
<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>
<ul>
 <li>{{jsxref("Error.prototype.toSource()")}}</li>
</ul>
