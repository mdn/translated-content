---
title: JSON
slug: Glossary/JSON
translation_of: Glossary/JSON
original_slug: JSON
---
<p><strong>JSON</strong> (Notação de Objetos JavaScript) e um formato de dados permutável. Ele assemelha - se próximo a um sub tipo da sintaxe do <a href="/en-US/docs/Trash/MDN/JavaScript/About_JavaScript">JavaScript</a>, mas ele não é um tipo de script. (Veja <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON">JSON</a> em <a href="/en/JavaScript/Reference">Referências JavaScript</a> para todos os detalhes). Isto é útil quando escrevemos qualquer tipo de aplicação baseada em JavaScript, incluindo web sites e extensões de navegadores. Por exemplo, você pode armazenar informações no formato em JSON no formato de <a href="/en/DOM/document.cookie">cookies</a>, ou você pode armazenar as preferências de extensões em JSON como valor de texto nas preferências do navegador.</p>

<p>JSON e capaz de representar números, booleanos, textos, vazios, e listas (sequência ordenada de valores) e objetos (mapeamento de valores de texto) composto por estes valores (ou por outras listas e objetos). Ele não representa nativamente tipos complexos de dados como funções, expressões regulares, datas, e muito mais. (Objetos de dados por padrão inicializam como texto contendo os dados no formato ISO, enquanto eles não mudam, a informação não é completamente perdida.) Se você precisa preservar muitos valores, você pode transformar valores como eles são inicializados, ou prioritariamente descontinuados, para habilitar JSON para representar tipos de dados adicionais.</p>

<h2>Documentação</h2>

<dl>
  <dt><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/JSON">Objetos JSON</a></dt>
  <dd>Os objetos JSON contém métodos para converter valores para Notação de objetos javascript (JSON) e para converter JSON para valores.</dd>
  <dt><a href="/en/Using_native_JSON">Usando o JSON nativo</a></dt>
  <dd>Este artigo cobre o ECMAScript 5 compilando a linguagem nativa JSON somado em Gecko 1.9.1.</dd>
  <dt><a href="/en/JSON/JSONPath">Caminho JSON</a></dt>
  <dd>Caminho JSON significa o uso XPath como sintaxe para a estrutura de requisições do JSON. Ele não é o padrão, mas apresenta maneiras de requisição em JavaScript diretamente sem precisar converte - la para xml.</dd>
  <dt><a href="/en/Downloading_JSON_and_JavaScript_in_extensions">Baixando JSON e extensões em Javascript</a></dt>
  <dd>A pratica habitual encontrada em muitas extensões está usando XMLHttpRequest (ou outros mecanismos) para baixar Javascript ou <a href="/en/JSON">JSON </a>(eles são diferentes) para um site web remoto. Uma vez o conteúdo já sido baixado, a extensão escrita procedida pelo uso <a href="/en/Core_JavaScript_1.5_Reference/Functions/eval">eval()</a> para decodificar o texto contendo objetos JavaScript, a escolha e uma prática perigosa e não deve, de fato passar na revisão <a href="http://addons.mozilla.org">AMO.</a> Este artigo mostra como evitar isto.</dd>
  <dt><a href="/en/JXON">JXON</a></dt>
  <dd>JXON padrões sem perdas de Notação de Objetos JavaScript XML, ele é um nome genérico pelo qual e definida a representação da árvore dos objetos JavaScript (JSON) usando XML.</dd>
  <dt><a href="/en/JavaScript/Reference/Global_Objects/JSON/stringify"><code>Método JSON.stringify</code></a></dt>
  <dd>Converta valores para JSON, opcionalmente substituindo valores se a função for específica, ou opcionalmente incluindo somente propriedades especificas se a substituição na lista for especifica.</dd>
  <dt><a href="/en/JavaScript/Reference/Global_Objects/JSON/parse"><code>Método JSON.parse</code></a></dt>
  <dd>Analisa a string como JSON, opcionalmente transforma o valor produzido pela análise.</dd>
</dl>

<h2>Comunidade</h2>

<ul>
  <li>Veja os foruns Mozilla...</li>
  <li>{{DiscussionList("dev-tech-json","mozilla.dev.tech.json") }}</li>
</ul>

<h2>Ferramentas</h2>

<ul>
  <li><a href="/en/JavaScript/Reference/Global_Objects/JSON#Browser_compatibility">JSON polyfills</a></li>
  <li><a href="http://jsonselect.org">JSONSelect</a></li>
</ul>

<h2>Topicos Relacionados</h2>

<ul>
  <li><a href="/en/AJAX">AJAX</a>,</li>
  <li><a href="/en/JavaScript">JavaScript</a>,</li>
  <li><a href="/en/XUL">XUL</a></li>
</ul>


<h2 id="JSON_in_Firefox_2" name="JSON_in_Firefox_2">Usando JSON atráves de objetos JavaScript JSON</h2>
<p>O mais simples, fácil caminho para usar JSON e através do padrão de <a href="/en/JavaScript/Reference/Global_Objects/JSON">objetos JSON</a> em JavaScript.  Use <a href="/en/JavaScript/Reference/Global_Objects/JSON/stringify">JSON.stringify</a> para inicializar valores em JSON, e use <a href="/en/JavaScript/Reference/Global_Objects/JSON/parse">JSON.parse</a> para deserializar um valor JSON.</p>
<p>Por exemplo, para inicializar um objeto JavaScript, use o método JSON.stringify():</p>
<pre class="brush: js">var foo = {};
foo.bar = "new property";
foo.baz = 3;

var JSONfoo = JSON.stringify(foo);
</pre>
<p><code>JSONfoo</code> now holds <code>{"bar":"new property","baz":3}</code>. Para fazer JSONfoo voltar a ser um objeto JavaScript faça:</p>
<pre class="brush: js">var backToJS = JSON.parse(JSONfoo);
</pre>
<p>Para mais informações, veja a <a href="/en/JavaScript/Reference/Global_Objects/JSON">documentação de objetos JSON</a>.</p>
<h2 id="Método_toJSON()">Método toJSON()</h2>
<p>Se um objeto define o método toJSON(), JSON.stringify pode se chamar estes métodos para determinar a representação de objetos JSON. Por exemplo:</p>
<pre class="brush: js">x = {};
x.foo = "foo";
x.toJSON = function() { return "bar"; };
var json1 = JSON.stringify(x);
</pre>
<p><code>json1</code> now contains '"bar"'.</p>
<h2 id="Limitações">Limitações</h2>
<p>Você não pode inicializar objetos que sejam membros escolhidos para funções. As especificações JSON não permitem. Por exemplo:</p>
<pre class="brush: js">foo.qwerty = function(){alert('foobar');};
foo.qwerty()
var JSONfoo = JSON.toString(foo);
</pre>
<p>will raise a <code>TypeError on line XXX: No JSON representation for this object!</code></p>
<h2 id="Usando_JSON_através_do_nsIJSON">Usando JSON através do nsIJSON</h2>
<p>Versões do Firefox anteriores a 3.5 nativamente não suportam JSON, e há um único caminho para acessar as funcionalidades JSON é através do componente <code><a href="/en/XPCOM_Interface_Reference/nsIJSON" title="en/nsIJSON">nsIJSON</a>, implementado</code> desde o Firefox 3. Codificando e decodificando são executados através nsIJON's métodos de codificação e decodificação. Estes métodos não acessam o JSON através de objetos JSON, e eles somente suportam valores escolhidos por listas de objetos, sem textos, booleanos, números ou vazios. (Estes valores são suportados somente por listas e objetos: o simples número 5 não irá funcionar, mas o objeto {"valor": 5} funcionará.)</p>
<p>Por causa nsIJSON não ser tão eficaz como um objeto JSON, ele codifica e decodifica métodos já removidos para Firefox 7. Desenvolvedores devem escolher para uso objeto JSON.</p>
<p>O seguinte código inicializa um objeto JavaScript usando <code>nsIJSON</code>:</p>
<pre class="brush: js">var Ci = Components.interfaces;
var Cc = Components.classes;

var foo = {};
foo.bar = "new property";
foo.baz = 3;

var nativeJSON = Cc["@mozilla.org/dom/json;1"].createInstance(Ci.nsIJSON);
var JSONfoo = nativeJSON.encode(foo);
</pre>
<p>The <code>JSONfoo</code> variable now holds the string <code>{"bar":"new property","baz":3}</code>. To create an object corresponding to <code>JSONfoo</code>, just do:</p>
<pre class="brush: js">var backToJS = nativeJSON.decode(JSONfoo);
</pre>
<h2 id="Using_JSON" name="Using_JSON">Usando JSON em outras situações</h2>
<p>Enquanto na teoria e possível usar JSON usando <a href="/en/JavaScript/Reference/Global_Objects/eval">eval</a> (mas somente para descerializar objetos, e não para inicializar textos) ou usando <a href="https://github.com/douglascrockford/JSON-js">json2.js</a>, Está não é uma boa ideia. Isto não e seguro para analisar JSON usando eval por que ele permite muito mais sintaxe que JSON faz (Melhora para execução de um código aleatório). Como para json2.js, este problema e que ele adiciona métodos para compilação como Object.prototype, escolha o mais útil para parar a execução do código antecipando está possibilidade.</p>
<p>Você deve quase sempre usa - lo ou os métodos formulados para usar JSON em preferências para qualquer outro caminho.</p>
<h2 id="See_also" name="See_also">Veja também</h2>
<ul>
 <li><code>nsIJSON</code></li>
</ul>