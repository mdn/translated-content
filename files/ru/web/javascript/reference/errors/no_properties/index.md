---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
tags:
  - JavaScript
  - TypeError
  - Ошибки
translation_of: Web/JavaScript/Reference/Errors/No_properties
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>У {{jsxref("null")}} и {{jsxref("undefined")}} нет свойств, к которым можно было бы обратиться.</p>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: js example-bad">null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("null")}}</li>
 <li>{{jsxref("undefined")}}</li>
</ul>
