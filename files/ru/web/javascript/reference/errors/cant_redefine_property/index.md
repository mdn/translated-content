---
title: >-
  TypeError: can't redefine non-configurable property "x"(Тип ошибки: не удаётся
  переопределить настраиваемое свойство "x")
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
translation_of: Web/JavaScript/Reference/Errors/Cant_redefine_property
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщения">Сообщения</h2>

<pre class="syntaxbox">TypeError: невозможно изменить свойство, недоступное для записи {x} (Edge)
TypeError: невозможно переопределить не настраиваемое свойство "x" (Firefox)
TypeError: не удаётся переопределить свойство: "x" (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки </h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_не_так">Что не так?</h2>

<p>Была предпринята попытка переопределить свойство, но это свойство не настраивается. Настраиваемый атрибут определяет, можно ли удалить свойство из объекта и можно ли изменить его атрибуты (отличные от доступных для записи). Обычно свойства объекта, созданного инициализатором объекта, настраиваются. Однако, например, при использовании {{jsxref("Object.defineProperty()")}}, свойство не настраивается по умолчанию.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Не_настраиваемые_свойства_созданные_Object.defineProperty">Не настраиваемые свойства, созданные <code>Object.defineProperty</code></h3>

<p>The {{jsxref("Object.defineProperty()")}} создаёт не настраиваемые свойства, если они не указаны как настраиваемые.</p>

<pre class="brush: js example-bad">var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar"});

Object.defineProperty(obj, "foo", {value: "baz"});
// TypeError: не удаётся переопределить не настраиваемое свойство "foo"
</pre>

<p>Вам нужно будет установить свойство "foo" в конфигурируемое, если вы собираетесь переопределить его позже в коде.</p>

<pre class="brush: js example-good">var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar", configurable: true});
Object.defineProperty(obj, "foo", {value: "baz", configurable: true});</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Data_structures#Properties">[[Configurable]]</a></li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
