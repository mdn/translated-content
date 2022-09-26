---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
tags:
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Math
  - Method
  - Reference
  - Référence(2)
translation_of: Web/JavaScript/Reference/Global_Objects/Math/atanh
---
<div>{{JSRef("Global_Objects", "Math")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>Math.atanh()</code></strong> возвращает гиперболический арктангенс числа, то есть</p>

<p><math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mrow><mo>(</mo><mrow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><mo>)</mo></mrow><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arctanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, что</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ уникальный } \; y \; \text{такой, что} \; \tanh(y) = x</annotation></semantics></math></p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code>Math.atanh(<var>x</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Число.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Поскольку метод <code>atanh()</code> является статическим методом объекта <code>Math</code>, вы всегда должны использовать его как <code>Math.atanh()</code>, а не пытаться вызывать метод на созданном экземпляре объекта <code>Math</code> (поскольку объект <code>Math</code> не является конструктором).</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_Math.atanh">Пример: использование метода <code>Math.atanh()</code></h3>

<pre class="brush: js">Math.atanh(-2);  // NaN
Math.atanh(-1);  // -Infinity
Math.atanh(0);   // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1);   // Infinity
Math.atanh(2);   // NaN
</pre>

<p>Для значений, меньших -1 или больших 1, метод <code>Math.atanh()</code> возвращает {{jsxref("NaN")}}.</p>

<h2 id="Polyfill">Полифил</h2>

<p>Для <math><semantics><mrow><mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow><annotation encoding="TeX">\left|x\right| &lt; 1</annotation></semantics></math>, мы имеем <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {artanh} (x) = \frac{1}{2}\ln \left( \frac{1 + x}{1 - x} \right)</annotation></semantics></math>, так что этот метод может эмулироваться следующим образом:</p>

<pre class="brush: js">Math.atanh = Math.atanh || function(x) {
  return Math.log((1+x)/(1-x)) / 2;
};
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Math.acosh()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Math.asinh()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Math.cosh()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Math.sinh()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Math.tanh()")}} {{experimental_inline}}</li>
</ul>
