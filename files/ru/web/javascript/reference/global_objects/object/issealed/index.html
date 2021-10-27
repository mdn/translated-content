---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
tags:
  - ECMAScript5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isSealed
---
<div>
 {{JSRef("Global_Objects", "Object")}}</div>
<h2 id="Summary">Сводка</h2>
<p>Метод <code><strong>Object.isSealed()</strong></code> определяет, является ли объект запечатанным.</p>
<h2 id="Syntax">Синтаксис</h2>
<pre class="syntaxbox"><code>Object.isSealed(<var>obj</var>)</code></pre>
<h3 id="Parameters">Параметры</h3>
<dl>
 <dt>
  <code>obj</code></dt>
 <dd>
  Проверяемый объект.</dd>
</dl>
<h2 id="Description">Описание</h2>
<p>Возвращает <code>true</code>, если объект является запечатанным, иначе возвращает <code>false</code>. Объект является запечатанным, если он является не {{jsxref("Object.isExtensible", "расширяемым", "", 1)}} и если все его свойства являются не настраиваемыми и, следовательно, не удаляемыми (но не обязательно не записываемыми).</p>
<h2 id="Examples">Примеры</h2>
<pre class="brush: js">// По умолчанию объекты не запечатаны.
var empty = {};
assert(Object.isSealed(empty) === false);

// Если вы сделаете пустой объект не расширяемым, он по определению станет запечатанным.
Object.preventExtensions(empty);
assert(Object.isSealed(empty) === true);

// То же самое не верно для не пустого объекта, пока все его свойства не станут не настраиваемыми.
var hasProp = { fee: 'fie foe fum' };
Object.preventExtensions(hasProp);
assert(Object.isSealed(hasProp) === false);

// Но сделав все его свойства не настраиваемыми, объект становится запечатанным.
Object.defineProperty(hasProp, 'fee', { configurable: false });
assert(Object.isSealed(hasProp) === true);

// Простейшим способом запечатать объект, конечно, является использование метода Object.seal.
var sealed = {};
Object.seal(sealed);
assert(Object.isSealed(sealed) === true);

// Запечатанный объект по определению является не расширяемым.
assert(Object.isExtensible(sealed) === false);

// Запечатанный объект может быть замороженным, но это не всегда так.
assert(Object.isFrozen(sealed) === true); // все свойства также являются не записываемыми

var s2 = Object.seal({ p: 3 });
assert(Object.isFrozen(s2) === false); // свойство 'p' всё ещё записываемое

var s3 = Object.seal({ get p() { return 0; } });
assert(Object.isFrozen(s3) === true); // для свойств доступа значение имеет только их настраиваемость
</pre>
<h2 id="Notes">Примечания</h2>
<p>В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6 такой аргумент будет рассматриваться, как простой запечатанный объект и метод просто вернёт <code>true</code>.</p>
<pre class="brush: js">&gt; Object.isSealed(1)
TypeError: 1 is not an object // код ES5

&gt; Object.isSealed(1)
true                          // код ES6
</pre>
<h2 id="Specifications">Спецификации</h2>
{{Specifications}}
<h2 id="Browser_compatibility">Совместимость с браузерами</h2>
<div>
<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>
<ul>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.isFrozen()")}}</li>
</ul>
