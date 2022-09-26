---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
---
<div>{{JSRef("Global_Objects", "Object")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <code><strong>isPrototypeOf()</strong></code> проверяет, входит ли объект в цепочку прототипов другого объекта.</p>

<div class="note">
<p><strong>Обратите внимание:</strong> метод <code>isPrototypeOf()</code> отличается от оператора {{jsxref("Operators/instanceof", "instanceof")}}. Выражение "<code>object instanceof AFunction</code>" проверяет, присутствует ли в цепочке прототипов объекта <code>object</code> объект <code>AFunction.prototype</code>, а не сам объект <code>AFunction</code>.</p>
</div>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>prototypeObj</var>.isPrototypeOf(<var>object</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>prototypeObj</code></dt>
 <dd>Объект, проверяемый на каждую ссылку в цепочке прототипов аргумента <strong>object</strong>.</dd>
 <dt><code>object</code></dt>
 <dd>Объект, в чьей цепочке прототипов производится поиск.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Метод <code>isPrototypeOf()</code> позволяет вам проверять, существует ли объект в цепочке прототипов другого объекта.</p>

<p>Например, рассмотрим следующую цепочку прототипов:</p>

<pre class="brush: js">function Fee() {
  // ...
}

function Fi() {
  // ...
}
Fi.prototype = new Fee();

function Fo() {
  // ...
}
Fo.prototype = new Fi();

function Fum() {
  // ...
}
Fum.prototype = new Fo();
</pre>

<p>Если позже вы создадите экземпляр объекта <code>Fum</code> и захотите проверить, что прототип <code>Fi</code> существует в цепочке прототипов <code>Fum</code>, вы можете сделать следующее:</p>

<pre class="brush: js">var fum = new Fum();
// ...

if (Fi.prototype.isPrototypeOf(fum)) {
  // здесь безопасно что-то делать
}
</pre>

<p>Таким образом, вместе с оператором {{jsxref("Operators/instanceof", "instanceof")}}, это особенно пригождается, если у вас есть код, который может работать только с объектами, имеющими определённую цепочку прототипов, к примеру, чтобы он мог гарантировать, что в объекте присутствуют определённые методы или свойства.</p>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Operators/instanceof", "instanceof")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object.setPrototypeOf()")}}</li>
 <li>{{jsxref("Object.prototype.__proto__")}}</li>
</ul>
