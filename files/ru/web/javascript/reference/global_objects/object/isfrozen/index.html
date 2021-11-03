---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
tags:
  - ECMAScript5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
---
<div>{{JSRef("Global_Objects", "Object")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <code><strong>Object.isFrozen()</strong></code> определяет, был ли объект заморожен.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code>Object.isFrozen(<var>obj</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>Проверяемый объект.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Объект является замороженным только в том случае, если он не {{jsxref("Object.isExtensible()", "расширяем", "", 1)}}, все его свойства являются не настраиваемыми и все его свойства данных (то есть такие, которые не являются свойствами доступа с функциями сеттера или геттера) являются не записываемыми.</p>

<h2 id="Examples">Примеры</h2>

<pre class="brush: js">// Новый объект является расширяемым, так что он не заморожен.
assert(Object.isFrozen({}) === false);

// Пустой не расширяемый объект по определению заморожен.
var vacuouslyFrozen = Object.preventExtensions({});
assert(Object.isFrozen(vacuouslyFrozen) === true);

// Новый объект с одним свойством является расширяемым, поэтому он не заморожен.
var oneProp = { p: 42 };
assert(Object.isFrozen(oneProp) === false);

// Предотвращение расширения объекта всё ещё не делает его замороженным,
// поскольку свойство всё ещё остаётся настраиваемым (и записываемым).
Object.preventExtensions(oneProp);
assert(Object.isFrozen(oneProp) === false);

// ...но при удалении этого свойства объект становится замороженным по определению.
delete oneProp.p;
assert(Object.isFrozen(oneProp) === true);

// Не расширяемый объект с не записываемым, но всё ещё настраиваемым свойством, не является замороженным.
var nonWritable = { e: 'plep' };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, 'e', { writable: false }); // делаем свойство не записываемым
assert(Object.isFrozen(nonWritable) === false);

// Изменение свойства на не настраиваемое делает объект замороженным.
Object.defineProperty(nonWritable, 'e', { configurable: false }); // делаем свойство не настраиваемым
assert(Object.isFrozen(nonWritable) === true);

// Не расширяемый объект с не настраиваемым, но всё ещё записываемым свойством, также не является замороженным.
var nonConfigurable = { release: 'кракен!' };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, 'release', { configurable: false });
assert(Object.isFrozen(nonConfigurable) === false);

// Изменение свойства на не записываемое делает объект замороженным.
Object.defineProperty(nonConfigurable, 'release', { writable: false });
assert(Object.isFrozen(nonConfigurable) === true);

// Не расширяемый объект с настраиваемым свойством доступа не является замороженным.
var accessor = { get food() { return 'ням'; } };
Object.preventExtensions(accessor);
assert(Object.isFrozen(accessor) === false);

// ...но сделав это свойство не настраиваемым, объект становится замороженным.
Object.defineProperty(accessor, 'food', { configurable: false });
assert(Object.isFrozen(accessor) === true);

// Самым же простым способом заморозить объект можно через вызов на нём метода Object.freeze.
var frozen = { 1: 81 };
assert(Object.isFrozen(frozen) === false);
Object.freeze(frozen);
assert(Object.isFrozen(frozen) === true);

// По определению, замороженный объект является не расширяемым.
assert(Object.isExtensible(frozen) === false);

// Также, по определению, замороженный объект является запечатанным.
assert(Object.isSealed(frozen) === true);
</pre>

<h2 id="Notes">Примечания</h2>

<p>В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение {{jsxref("Global_Objects/TypeError", "TypeError")}}. В ES6 такой аргумент будет рассматриваться, как простой замороженный объект и метод просто вернёт <code>true</code>.</p>

<pre class="brush: js">&gt; Object.isFrozen(1)
TypeError: 1 is not an object // код ES5

&gt; Object.isFrozen(1)
true                          // код ES6
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<div>{{Compat}}</div>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.isSealed()")}}</li>
</ul>
