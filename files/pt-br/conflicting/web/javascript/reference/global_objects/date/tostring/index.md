---
title: Date.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Date/toString
tags:
  - Date
  - JavaScript
  - Method
  - Prototipo
  - Prototype
  - Referencia
  - data
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Date/toSource
---
<div>{{JSRef}} {{obsolete_header}}</div>

<p>O método <strong><code>toSource()</code></strong> retorna uma cadeia de caracteres (<em>string</em>) representando o código fonte do objeto.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><var>dateObj</var>.toSource()
Date.toSource()</pre>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Uma <em>string </em>representando o código fonte do objeto {{jsxref("Global_Objects/Date", "Date")}}.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Função_nativa">Função nativa</h3>

<p>Para o objeto {{jsxref("Date")}} embutido, <code>toSource()</code> retorna a seguinte <em>string</em> indicando que o código fonte não está disponível:</p>

<pre class="brush: js notranslate">function Date() {
    [native code]
}
</pre>

<h2 id="Especificações">Especificações</h2>

<p>Não faz parte de nenhum padrão.</p>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.Date.toSource")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Object.prototype.toSource()")}}</li>
</ul>
