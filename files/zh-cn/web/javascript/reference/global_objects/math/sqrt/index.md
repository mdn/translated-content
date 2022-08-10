---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sqrt
---
<div>{{JSRef}}</div>

<p><code><strong>Math.sqrt()</strong></code> 函数返回一个数的平方根，即：</p>

<p><math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>s</mi><mi>q</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} = \text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math></p>

<p>{{EmbedInteractiveExample("pages/js/math-sqrt.html")}}</p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><code>Math.sqrt(<em>x</em>) </code></pre>

<h3 id="Parameters">参数</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>一个数值</dd>
</dl>

<h2 id="Description">描述</h2>

<p>如果参数 <code>number</code> 为负值，则 <code>sqrt</code> 返回{{jsxref("NaN")}}。</p>

<p>由于 <code>sqrt</code> 是 <code>Math</code> 的静态方法，所以应该像这样使用：<code>Math.sqrt()</code>，而不是作为你创建的 <code>Math</code> 实例的方法。</p>

<h2 id="Examples">示例</h2>

<h3 id="Example_Using_Math.sqrt">使用 <code>Math.sqrt</code></h3>

<pre><code>Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0</code></pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{jsxref("Math.cbrt()")}}</li>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.pow()")}}</li>
</ul>
