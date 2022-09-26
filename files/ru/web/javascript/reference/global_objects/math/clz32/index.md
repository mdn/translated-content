---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
tags:
  - ECMAScript6
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Math
  - Method
  - Reference
  - Référence(2)
translation_of: Web/JavaScript/Reference/Global_Objects/Math/clz32
---
<div>{{JSRef("Global_Objects", "Math")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>Math.clz32()</code></strong> возвращает количество ведущих нулевых битов в 32-битном двоичном представлении числа.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code>Math.clz32(<var>x</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Число.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Название <code>clz32</code> является сокращением для более длинного <code>CountLeadingZeroes32</code> (<code>ПосчтитатьВедущиеНули32</code>).</p>

<p>Если значение <code>x</code> не является числом, оно будет сначала преобразовано в число, а потом в 32-битное беззнаковое целое число.</p>

<p>Если преобразованное 32-битное беззнаковое целое число равно <code>0</code>, метод вернёт <code>32</code>, поскольку все биты в числе равны <code>0</code>.</p>

<p>Этот метод особенно полезен для систем, которые компилируются в JS, например, для <a href="/ru/docs/Emscripten">Emscripten</a>.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_Math.clz32">Пример: использование метода <code>Math.clz32()</code></h3>

<pre class="brush: js">Math.clz32(1);                // 31
Math.clz32(1000);             // 22
Math.clz32();                 // 32

[NaN, Infinity, -Infinity, 0, -0, null, undefined, 'foo', {}, []].filter(
function(n) {
  return Math.clz32(n) !== 32
});                           // []

Math.clz32(true);             // 31
Math.clz32(3.5);              // 30
</pre>

<h2 id="Polyfill">Полифил</h2>

<pre class="brush: js">Math.clz32 = Math.clz32 || function(value) {
  value = Number(value) &gt;&gt;&gt; 0;
  return value !== 0 ? 31 - Math.floor(Math.log(value + 0.5) / Math.log(2)) : 32;
};
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Global_Objects/Math", "Math")}}</li>
</ul>
