---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Non-standard
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
---
<div>{{JSRef("Global_Objects", "Object")}} {{non-standard_header}} {{deprecated_header}}</div>

<h2 id="Summary">Сводка</h2>
<p>Метод <strong><code>__lookupGetter__()</code></strong> возвращает функцию, привязанную к геттеру указанного свойства.</p>

<h2 id="Syntax">Синтаксис</h2>
<pre class="syntaxbox"><code><var>obj</var>.__lookupGetter__(<var>sprop</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>
<dl>
 <dt><code>sprop</code></dt>
 <dd>Строка, содержащая имя свойства, чей геттер должен быть возвращён.</dd>
</dl>

<h2 id="Description">Описание</h2>
<p>Если для свойства объекта был определён геттер, то на него невозможно сослаться через это свойство, поскольку оно ссылается на возвращаемое значение геттера. Метод <code>__lookupGetter__()</code> может использоваться для получения ссылки на геттер.</p>
<p>Сегодня это возможно сделать стандартным способом через {{jsxref("Object.getOwnPropertyDescriptor()")}} и {{jsxref("Object.getPrototypeOf()")}}.</p>

<h2 id="Examples">Примеры</h2>
<pre class="brush: js">var obj = {
  get foo() {
    return Math.random() &gt; 0.5 ? 'foo' : 'bar';
  }
};


// Нестандартный и устаревший способ
obj.__lookupGetter__('foo');
// (function() { return Math.random() &gt; 0.5 ? 'foo' : 'bar'; })


// Способ, совместимый со стандартом
Object.getOwnPropertyDescriptor(obj, 'foo').get;
// (function() { return Math.random() &gt; 0.5 ? 'foo' : 'bar'; })
</pre>

<h2 id="Specifications">Спецификации</h2>
<p>Не является частью какой-либо спецификации.</p>

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>
<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>
<ul>
 <li>{{jsxref("Object.prototype.__lookupSetter__()")}}</li>
 <li>оператор {{jsxref("Operators/get", "get")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}} и {{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object.prototype.__defineGetter__()")}}</li>
 <li>{{jsxref("Object.prototype.__defineSetter__()")}}</li>
 <li><a href="/ru/docs/Web/JavaScript/Guide_ru/Working_with_Objects#.D0.9E.D0.BF.D1.80.D0.B5.D0.B4.D0.B5.D0.BB.D0.B5.D0.BD.D0.B8.D0.B5_.D0.B3.D0.B5.D1.82.D1.82.D0.B5.D1.80.D0.BE.D0.B2_.D0.B8_.D1.81.D0.B5.D1.82.D1.82.D0.B5.D1.80.D0.BE.D0.B2">Руководство по JS: определение геттеров и сеттеров</a></li>
</ul>
