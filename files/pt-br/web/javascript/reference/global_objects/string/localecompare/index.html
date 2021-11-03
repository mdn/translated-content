---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
tags:
  - Internacionalização
  - JavaScript
  - Prototipo
  - Referencia
  - String
  - localeCompare()
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/String/localeCompare
---
<div>{{JSRef}}</div>

<p>O método <code>localeCompare()</code> retorna um número que indica se uma string de referência vem antes ou depois, ou é a mesma que a string fornecida na ordem de classificação.</p>

<div>{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}</div>



<p>Os novos argumentos <em><code>locales</code></em> e <em><code>options</code></em> permitem que os aplicativos especifiquem o idioma cuja ordem da ordenação deve ser usada e personalizem o comportamento da função. Em implementações mais antigas, que ignoram os argumentos <em><code>locales</code></em> e <em><code>options</code></em>, a localidade e a ordem de classificação usadas são totalmente dependentes da implementação.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><code><var>referenceStr</var>.localeCompare(<var>compareString</var>[, <var>locales</var>[, <var>options</var>]])</code></pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code><var>compareString</var></code></dt>
 <dd>A string com a qual a <em><code>referenceStr</code></em> é comparada.</dd>
 <dt><code><var>locales</var></code> <var>e </var><code><var>options</var></code></dt>
 <dd>
 <p>Esses argumentos personalizam o comportamento da função e permitem que os aplicativos especifiquem o idioma cujas convenções de formatação devem ser usadas. Em implementações que ignoram os argumentos <em><code>locales</code></em> e <em><code>options</code></em>, a localidade usada e a forma da string retornada são inteiramente dependentes da implementação.</p>

 <p>Consulte o <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator">construtor </a><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator">Intl.Collator()</a></code> para obter detalhes sobre esses parâmetros e como usá-los.</p>
 </dd>
</dl>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>Um número <strong>negativo</strong> se <em><code>referenceStr</code></em> ocorrer antes de <em><code>compareString</code></em>. Um número <strong>positivo</strong> se o <em><code>referenceStr</code></em> ocorrer após <em><code>compareString</code></em>. <code>0</code> se eles forem equivalentes.</p>

<h2 id="Descrição">Descrição</h2>

<p>Retorna um inteiro indicando se <em><code>referenceStr</code></em> vem antes, depois ou é equivalente a <em><code>compareString</code></em>.</p>

<ul>
 <li>Negativo quando o <em><code>referenceStr</code></em> ocorre antes de <em><code>compareString</code></em></li>
 <li>Positivo quando o <em><code>referenceStr</code></em> ocorre após <em><code>compareString</code></em></li>
 <li>Retorna <code>0</code> se eles forem equivalentes</li>
</ul>

<div class="blockIndicator warning">
<p><strong>NÃO confie em valores de retorno exatos de -1 ou 1!</strong></p>

<p>Os resultados de números inteiros negativos e positivos variam entre os navegadores (bem como entre as versões dos navegadores) porque a especificação W3C exige apenas valores negativos e positivos. Alguns navegadores podem retornar <code>-2</code> ou <code>2</code>, ou mesmo algum outro valor negativo ou positivo.</p>
</div>

<h2 id="Performance">Performance</h2>

<p>Ao comparar um grande número de strings, como na classificação de grandes arrays, é melhor criar um objeto {{jsxref("Global_Objects/Collator", "Intl.Collator")}} e usar a função fornecida por sua propriedade {{jsxref("Collator.prototype.compare", "compare")}}.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_localeCompare">Usando <code>localeCompare()</code></h3>

<pre class="brush: js notranslate">// A letra "a" está antes de "c" produzindo um valor negativo
'a'.localeCompare('c'); // -2 ou -1 (ou algum outro valor negativo)

// Alfabeticamente, a palavra "verificar" vem depois de "contra", produzindo um valor positivo
'verificar'.localeCompare('contra'); // 2 ou 1 (ou algum outro valor positivo)

// "a" e "a" são equivalentes, resultando em um valor neutro de zero
'a'.localeCompare('a'); // 0
</pre>

<h3 id="Ordenar_um_array">Ordenar um array</h3>

<p><code>localeCompare()</code> permite a ordenação sem distinção entre maiúsculas e minúsculas em um array.</p>

<pre class="brush: js notranslate">let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort( (a, b) =&gt; a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
</pre>

<h3 id="Verifique_o_suporte_do_navegador_para_os_novos_argumentos">Verifique o suporte do navegador para os novos argumentos</h3>

<p>Os argumentos <em><code>locales</code></em> e <em><code>options</code></em> ainda não são suportados em todos os navegadores.</p>

<p>Para verificar se uma implementação os suporta, use o argumento <code>"i"</code> (um requisito de rejeição das tags de linguagem ilegal) e procure uma exceção {{jsxref ("RangeError")}}:</p>

<pre class="brush: js notranslate">function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare('bar', 'i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
</pre>

<h3 id="Usando_locales">Usando <code>locales</code></h3>

<p>Os resultados fornecidos por <code>localeCompare()</code> variam entre os idiomas. Para obter a ordem de classificação do idioma usado na interface do usuário de seu aplicativo, certifique-se de especificar esse idioma (e possivelmente alguns idiomas substitutos) usando o argumento <em><code>locales</code></em>:</p>

<pre class="brush: js notranslate">console.log('ä'.localeCompare('z', 'de')); // um valor negativo: em alemão, ä é classificado antes de z
console.log('ä'.localeCompare('z', 'sv')); // um valor positivo: em sueco, ä é classificado após z
</pre>

<h3 id="Usando_options">Usando <code>options</code></h3>

<p>Os resultados fornecidos por <code>localeCompare()</code> podem ser personalizados usando o argumento <em><code>options</code></em>:</p>

<pre class="brush: js notranslate">// em alemão, ä tem a como letra base
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0

// em sueco, ä e a são letras de base separadas
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // um valor positivo
</pre>

<h3 id="Ordenação_numérica">Ordenação numérica</h3>

<pre class="brush: js notranslate">// por padrão, "2" &gt; "10"
console.log(<span class="message-body-wrapper"><span class="message-flex-body"><span class="devtools-monospace message-body">"2".localeCompare("10")</span></span></span>); // 1

// numeric using options:
console.log(<span class="message-body-wrapper"><span class="message-flex-body"><span class="devtools-monospace message-body">"2".localeCompare("10", undefined, {numeric: true})</span></span></span>); // -1

// numeric using locales tag:
console.log(<span class="message-body-wrapper"><span class="message-flex-body"><span class="devtools-monospace message-body">"2".localeCompare("10", "en-u-kn-true")</span></span></span>); // -1
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.localecompare', 'String.prototype.localeCompare')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sup-String.prototype.localeCompare', 'String.prototype.localeCompare')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("javascript.builtins.String.localeCompare")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Global_Objects/Collator", "Intl.Collator")}}</li>
</ul>
