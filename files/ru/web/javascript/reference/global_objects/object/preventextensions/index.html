---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
tags:
  - ECMAScript5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---
<div>{{JSRef("Global_Objects", "Object")}}</div>

<p>Метод <code><strong>Object.preventExtensions()</strong></code> предотвращает добавление новых свойств к объекту (то есть, предотвращает расширение этого объекта в будущем).</p>

<p>{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="brush: js"><code>Object.preventExtensions(<var>obj</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>Объект, который нужно сделать нерасширяемым.</dd>
</dl>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Объект, который делается нерасширяемым.</p>

<h2 id="Description">Описание</h2>

<p>Объект называется расширяемым, если к нему могут быть добавлены новые свойства. <code>Object.preventExtensions()</code> помечает объект как нерасширяемый, так что он никогда не будет иметь других свойств, кроме тех, что были у него на момент пометки его нерасширяемым. Обратите внимание, что, в общем случае, свойства нерасширяемого объекта всё ещё могут быть <em>удалены</em>. Попытка добавить новые свойства к нерасширяемому объекту потерпит неудачу, либо молча, либо с выбрасыванием исключения {{jsxref("Global_Objects/TypeError", "TypeError")}} (как правило, но не обязательно, это происходит в {{jsxref("Functions_and_function_scope/Strict_mode", "строгом режиме", "", 1)}}).</p>

<p>Метод <code>Object.preventExtensions()</code> предотвращает добавление только собственных свойств. Свойства всё ещё могут быть добавлены в прототип объекта. Однако, вызов <code>Object.preventExtensions()</code> на объекте также предотвращает расширение его свойства {{jsxref("Object.proto", "__proto__")}} {{deprecated_inline}}.</p>

<p>Если превратить расширяемый объект в нерасширяемый возможно, в ECMAScript 5 нет никакого способа сделать обратную операцию.</p>

<h2 id="Examples">Примеры</h2>

<pre class="brush: js">// Object.preventExtensions возвращает объект, который нужно сделать нерасширяемым.
var obj = {};
var obj2 = Object.preventExtensions(obj);
assert(obj === obj2);

// Объекты по умолчанию являются расширяемыми.
var empty = {};
assert(Object.isExtensible(empty) === true);

// ...но это может быть изменено.
Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);

// Object.defineProperty выбрасывает исключение при добавлении нового свойства в нерасширяемый объект.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, 'new', { value: 8675309 }); // выбросит TypeError

// В строгом режиме, попытки добавить новые свойства к нерасширяемому объекту, будут выбрасывать исключение TypeError.
function fail() {
  'use strict';
  nonExtensible.newProperty = 'ОШИБКА'; // выбросит TypeError
}
fail();

// РАСШИРЕНИЕ (работает только в движках, поддерживающих свойство __proto__
// (которое является устаревшим. Используйте вместо него метод Object.getPrototypeOf)):
// нерасширяемые объекты неизменны.
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: 'hai' }; // выбросит TypeError
</pre>

<h2 id="Notes">Примечания</h2>

<p>В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6 такой аргумент будет рассматриваться как простой нерасширяемый объект и метод его просто вернёт.</p>

<pre class="brush: js">&gt; Object.preventExtensions(1)
TypeError: 1 is not an object // код ES5

&gt; Object.preventExtensions(1)
1                             // код ES6
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<div>{{Compat}}</div>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.isSealed()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.isFrozen()")}}</li>
</ul>
