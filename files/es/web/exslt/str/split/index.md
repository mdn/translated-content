---
title: split
slug: Web/EXSLT/str/split
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/str/split
---
<p>{{XsltRef}}</p>

<p><br>
 <code>str:split()</code> divide una cadena usando una cadena patrón que determina donde deberían ocurrir las divisiones y devuelve un conjunto de nodos que contiene las cadenas resultantes.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">str:split(<em>cadena</em>,<em>patron</em>)
</pre>

<h3 id="Argumentos" name="Argumentos">Argumentos</h3>

<dl>
 <dt><code><em>cadena</em></code></dt>
 <dd>La cadena a dividir.</dd>
 <dt><code><em>patron</em></code></dt>
 <dd>El patrón que indica por donde dividir la cadena.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>Un conjunto de nodos de elementos <code>token</code>, donde cada uno contiene un trozo (token) de la <code><em>cadena</em></code>.</p>

<p>Por ejemplo:</p>

<pre class="eval">str:split('libro, teléfono, ordenador, silla', ', ')
</pre>

<p>Devuelve un conjunto de nodos como este:</p>

<pre class="eval">&lt;token&gt;libro&lt;/token&gt;
&lt;token&gt;teléfono&lt;/token&gt;
&lt;token&gt;ordenador&lt;/token&gt;
&lt;token&gt;silla&lt;/token&gt;
</pre>

<h3 id="Definido_en" name="Definido_en">Definido en</h3>

<p><a class="external" href="http://www.exslt.org/str/functions/split/index.html">EXSLT - STR:SPLIT</a></p>

<h3 id="Implementaci.C3.B3n_en_Gecko" name="Implementaci.C3.B3n_en_Gecko">Implementación en Gecko</h3>

<p>Implementado en Gecko 1.9 y posteriores.</p>
