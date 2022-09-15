---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
tags:
  - Internacionalização
  - JavaScript
  - Prototipo
  - Referencia
  - String
  - metodo
  - toLocaleLowerCase()
translation_of: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
---
<div>{{JSRef}}</div>

<p>O método <code>toLocaleLowerCase()</code> retorna o valor da string em minúsculas, de acordo com qualquer mapeamento de caixa de texto específico da localidade.</p>

<div>{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}</div>



<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><var>str</var>.toLocaleLowerCase()
<var>str</var>.toLocaleLowerCase(locale)
<var>str</var>.toLocaleLowerCase([locale, locale, ...])
</pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code>locale</code></dt>
 <dd>Opcional. O parâmetro <code>locale</code> indica o local a ser usado para converter para minúsculas de acordo com qualquer mapeamento de caixa de texto específico da localidade. Se várias localidades forem fornecidas em um {{jsxref("Array")}}, a <a href="https://tc39.es/ecma402/#sec-bestavailablelocale">melhor localidade disponível</a> é usada. A localidade padrão é a localidade atual do ambiente do host.</dd>
</dl>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>Uma nova string que representa a string original convertida em minúsculas, de acordo com qualquer mapeamento da caixa de texto específico da localidade.</p>

<h3 id="Exceções">Exceções</h3>

<ul>
 <li>Um {{jsxref("RangeError")}} (" invalid language tag: xx_yy ") é lançado se um argumento <code>locale</code> não for uma tag de idioma válido.</li>
 <li>Um {{jsxref("TypeError")}} (" invalid element in locales argument ") é lançado se um elemento do array não for do tipo string.</li>
</ul>

<h2 id="Descrição">Descrição</h2>

<p>O método <code>toLocaleLowerCase()</code> retorna o valor da string convertida em minúsculas de acordo com qualquer mapeamento da caixa de texto específico da localidade. <code>toLocaleLowerCase()</code> não afeta o valor da string original. Na maioria dos casos, ele produzirá o mesmo resultado que {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}, mas para alguns locais, como turco, cujos mapeamentos da caixa de texto não seguem o mapeamento padrão em Unicode, pode haver um resultado diferente.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_toLocaleLowerCase">Usando <code>toLocaleLowerCase()</code></h3>

<pre class="brush: js notranslate">'ALFABETO'.toLocaleLowerCase(); // 'alfabeto'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sup-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.String.toLocaleLowerCase")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("String.prototype.toLocaleUpperCase()")}}</li>
 <li>{{jsxref("String.prototype.toLowerCase()")}}</li>
 <li>{{jsxref("String.prototype.toUpperCase()")}}</li>
</ul>
