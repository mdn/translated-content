---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
tags:
  - ECMAScript6
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Math
  - Method
  - Reference
  - Référence(2)
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log1p
---
<div>{{JSRef("Global_Objects", "Math")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>Math.log1p()</code></strong> возвращает натуральный (по основанию {{jsxref("Math.E", "e")}}) логарифм 1 + числа, то есть</p>

<p><math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>-</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x &gt; -1, \mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math></p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code>Math.log1p(<var>x</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Число.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Если значение <code>x</code> меньше -1, возвращаемое значение всегда будет равным {{jsxref("Global_Objects/NaN", "NaN")}}.</p>

<p>Поскольку метод <code>log1p()</code> является статическим методом объекта <code>Math</code>, вы всегда должны использовать его как <code>Math.log1p()</code>, а не пытаться вызывать метод на созданном экземпляре объекта <code>Math</code> (поскольку объект <code>Math</code> не является конструктором).</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_Math.log1p">Пример: использование метода <code>Math.log1p()</code></h3>

<pre class="brush: js">Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
</pre>

<h2 id="Polyfill">Полифил</h2>

<p>Этот метод может эмулироваться следующим способом:</p>

<pre class="brush: js">Math.log1p = Math.log1p || function(x) {
  return Math.log(1 + x);
};
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.log10()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Math.log2()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Math.pow()")}}</li>
</ul>
