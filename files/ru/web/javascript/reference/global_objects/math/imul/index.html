---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
tags:
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Math
  - Method
  - Reference
  - Référence(2)
translation_of: Web/JavaScript/Reference/Global_Objects/Math/imul
---
<div>{{JSRef("Global_Objects", "Math")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>Math.imul()</code></strong> возвращает результат перемножения в стиле C двух 32-битных чисел.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code>Math.imul(<var>a</var>, <var>b</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>a</code></dt>
 <dd>Первое число.</dd>
 <dt><code>b</code></dt>
 <dd>Второе число.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Метод <code>Math.imul()</code> позволяет выполнять быстрое перемножение двух 32-битных чисел с семантикой C. Эта возможность полезна для таких проектов, как <a href="http://en.wikipedia.org/wiki/Emscripten">Emscripten</a>. Поскольку метод <code>imul()</code> является статическим методом объекта <code>Math</code>, вы всегда должны использовать его как <code>Math.imul()</code>, а не пытаться вызывать метод на созданном экземпляре объекта <code>Math</code> (поскольку объект <code>Math</code> не является конструктором).</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_Math.imul">Пример: использование метода <code>Math.imul()</code></h3>

<pre class="brush: js">Math.imul(2, 4);          // 8
Math.imul(-1, 8);         // -8
Math.imul(-2, -2);        // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
</pre>

<h2 id="Polyfill">Полифил</h2>

<p>Этот метод может эмулироваться следующим способом:</p>

<pre class="brush: js">Math.imul = Math.imul || function(a, b) {
  var ah = (a &gt;&gt;&gt; 16) &amp; 0xffff;
  var al = a &amp; 0xffff;
  var bh = (b &gt;&gt;&gt; 16) &amp; 0xffff;
  var bl = b &amp; 0xffff;
  // сдвиг на 0 бит закрепляет знак в старшей части числа
  // окончательный |0 преобразует беззнаковое значение обратно в знаковое значение
  return ((al * bl) + (((ah * bl + al * bh) &lt;&lt; 16) &gt;&gt;&gt; 0)|0);
};
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>
