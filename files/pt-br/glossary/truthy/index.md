---
title: Truthy
slug: Glossary/Truthy
tags:
  - CodingScripting
  - Glossário
  - JavaScript
translation_of: Glossary/Truthy
original_slug: Glossario/Truthy
---
<p>Em {{Glossary("JavaScript")}}, um valor <strong>truthy</strong> é um valor que se traduz em verdadeiro quando avaliado em um contexto {{Glossary("Booleano")}}. Todos os valores são <strong>truthy</strong> a menos que eles sejam definidos como {{Glossary("Falsy", "falsy")}} (ou seja., exceto para <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, e <code>NaN</code>).</p>

<p>O {{Glossary("JavaScript")}} usa {{Glossary("Type_Conversion", "coerção")}} de tipo em contextos booleanos.</p>

<p>Exemplos de valores <em>truthy</em> em JavaScript (que se traduzirão em true, e então executar o bloco <code>if</code>):</p>

<pre><code>if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)</code></pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{Glossary("Falsy")}}</li>
 <li>{{Glossary("Type_Conversion", "Coercion")}}</li>
 <li>{{Glossary("Boolean")}}</li>
</ul>
