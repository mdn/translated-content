---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
tags:
  - Internacionalização
  - JavaScript
  - Prototipo
  - Referencia
  - String
  - metodo
  - toLocaleUpperCase()
translation_of: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
---
<div>{{JSRef}}</div>

<p>O método <code>toLocaleUpperCase()</code> retorna o valor da string em maiúsculas, de acordo com qualquer mapeamento de caixa de texto específico da localidade.</p>

<div>{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}</div>



<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><var>str</var>.toLocaleUpperCase()
<var>str</var>.toLocaleUpperCase(locale)
<var>str</var>.toLocaleUpperCase([locale, locale, ...])
</pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code>locale</code></dt>
 <dd>Opcional. O parâmetro <code>locale</code> indica a localização a ser usada para converter para maiúsculas de acordo com qualquer mapeamento de caixa de texto específico da localidade. Se vários locais forem fornecidos em um {{jsxref("Array")}}, a <a href="https://tc39.es/ecma402/#sec-bestavailablelocale">melhor localidade disponível</a> é usada. A localidade padrão é a localidade atual do ambiente do host.</dd>
</dl>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>Uma nova string que representa a string original convertida em maiúsculas, de acordo com qualquer mapeamento de caixa de texto específico da localidade.</p>

<h3 id="Exceções">Exceções</h3>

<ul>
 <li>Um {{jsxref("RangeError")}} ("invalid language tag: xx_yy") é lançado se um argumento <code>locale</code> não for uma tag de idioma válido.</li>
 <li>Um {{jsxref("TypeError")}} ("invalid element in locales argument") é lançado se um elemento do array não for do tipo string.</li>
</ul>

<h2 id="Descrição">Descrição</h2>

<p>O método <code>toLocaleUpperCase()</code> retorna o valor da string convertida em maiúsculas de acordo com qualquer mapeamento de caixa de texto específico da localidade. <code>toLocaleUpperCase()</code> não afeta o valor da string em si. Na maioria dos casos, ele produzirá o mesmo resultado que {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}, mas para alguns locais, como turco, cujos mapeamentos de caixa de texto não seguem o mapeamento de caixa de texto padrão em Unicode, pode haver um resultado diferente.</p>

<p>Observe também que a conversão não é necessariamente um mapeamento de caracteres 1:1, pois alguns caracteres podem resultar em dois (ou até mais) caracteres quando transformados em maiúsculas. Portanto, o comprimento da string resultante pode ser diferente do comprimento da string de entrada. Isso também implica que a conversão não é estável, então, por exemplo, o seguinte pode retornar <code>false</code>:<br>
 <code>x.toLocaleLowerCase() === x.toLocaleUpperCase(). toLocaleLowerCase()</code></p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_toLocaleUpperCase">Usando <code>toLocaleUpperCase()</code></h3>

<pre class="brush: js notranslate">'alfabeto'.toLocaleUpperCase(); // 'ALFABETO'

'Gesäß'.toLocaleUpperCase(); // 'GESÄSS'

'i\u0307'.toLocaleUpperCase('lt-LT'); // 'I'

let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
'i\u0307'.toLocaleUpperCase(locales); // 'I'</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.tolocaleuppercase', 'String.prototype.toLocaleUpperCase')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sup-string.prototype.tolocaleuppercase', 'String.prototype.toLocaleUpperCase')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.String.toLocaleUpperCase")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("String.prototype.toLocaleLowerCase()")}}</li>
 <li>{{jsxref("String.prototype.toLowerCase()")}}</li>
 <li>{{jsxref("String.prototype.toUpperCase()")}}</li>
</ul>
