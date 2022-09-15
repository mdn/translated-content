---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Objeto
translation_of: Web/JavaScript/Reference/Global_Objects/Object
---
<div>{{JSRef}}</div>

<p>O construtor <code>Object</code> cria um wrapper de objeto.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">// Object initialiser or literal
{ [ <var>nameValuePair1</var>[, <var>nameValuePair2</var>[, ...<var>nameValuePairN</var>] ] ] }

// Called as a constructor
new Object([<var>value</var>])</pre>

<h3 id="Parametros">Parametros</h3>

<dl>
 <dt><code>nameValuePair1, nameValuePair2, ... nameValuePair<em>N</em></code></dt>
 <dd>Pares de nomes (strings) e valores (qualquer valor) em que o nome é separado do valor por dois pontos.</dd>
 <dt><code>value</code></dt>
 <dd>Qualquer valor.</dd>
</dl>

<h2 id="Descrição">Descrição</h2>

<p>O construtor <code>Object</code> cria um wrapper de objeto para o valor fornecido. Se o valor for {{jsxref ("null")}} ou {{jsxref ("undefined")}}, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um Type que corresponde ao dado valor. Se o valor já for um objeto, ele retornará o valor.</p>

<p>Quando chamado em um contexto não-construtor, o <code>object</code> se comporta de forma idêntica ao <code>new Object ()</code>.</p>

<p>Veja também <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">object initializer / literal syntax</a>.</p>

<h2 id="Propriedades_do_construtor_Object">Propriedades do construtor <code>Object</code></h2>

<dl>
 <dt><code>Object.length</code></dt>
 <dd>Tem um valor de 1.</dd>
 <dt>{{jsxref("Object.prototype")}}</dt>
 <dd>Permite a adição de propriedades a todos os objetos do tipo Object.</dd>
</dl>

<h2 id="Métodos_do_construtor_Object">Métodos do construtor <code>Object</code></h2>

<dl>
 <dt>{{jsxref("Object.assign()")}}</dt>
 <dd>Copia os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destino.</dd>
 <dt>{{jsxref("Object.create()")}}</dt>
 <dd>Cria um novo objeto com o objeto e as propriedades do protótipo especificado.</dd>
 <dt>{{jsxref("Object.defineProperty()")}}</dt>
 <dd>Adiciona a propriedade nomeada descrita por um determinado descritor a um objeto.</dd>
 <dt>{{jsxref("Object.defineProperties()")}}</dt>
 <dd>Adiciona as propriedades nomeadas descritas pelos descritores fornecidos a um objeto.</dd>
 <dt>{{jsxref("Object.entries()")}}</dt>
 <dd>Retorna uma matriz contendo todos os pares <code>[key, value]</code> das próprias propriedades de string enumeráveis ​​de um determinado objeto.</dd>
 <dt>{{jsxref("Object.freeze()")}}</dt>
 <dd>Congela um objeto: outro código não pode excluir ou alterar nenhuma propriedade.</dd>
 <dt>{{jsxref("Object.fromEntries()")}}</dt>
 <dd>Retorna um novo objeto de um iterável de pares de valor-chave (reverso à {{jsxref("Object.entries")}}).</dd>
 <dt>{{jsxref("Object.getOwnPropertyDescriptor()")}}</dt>
 <dd>Retorna um descritor de propriedade para uma propriedade nomeada em um objeto.</dd>
 <dt>{{jsxref("Object.getOwnPropertyDescriptors()")}}</dt>
 <dd>Retorna um objeto contendo todos os descritores de propriedade para um objeto.</dd>
 <dt>{{jsxref("Object.getOwnPropertyNames()")}}</dt>
 <dd>Retorna uma matriz contendo os nomes de todas as propriedades enumeráveis ​​e não enumeráveis ​​do próprio objeto fornecido.</dd>
 <dt>{{jsxref("Object.getOwnPropertySymbols()")}}</dt>
 <dd>Retorna uma matriz de todas as propriedades de símbolo encontradas diretamente sobre um determinado objeto.</dd>
 <dt>{{jsxref("Object.getPrototypeOf()")}}</dt>
 <dd>Retorna o protótipo do objeto especificado.</dd>
 <dt>{{jsxref("Object.is()")}}</dt>
 <dd>Compara se dois valores são o mesmo valor. Equivale a todos os valores de <code>NaN</code> (que diferem da Comparação de Igualdade Abstrata e da Comparação de Igualdade Estrita).</dd>
 <dt>{{jsxref("Object.isExtensible()")}}</dt>
 <dd>Determina se a extensão de um objeto é permitida.</dd>
 <dt>{{jsxref("Object.isFrozen()")}}</dt>
 <dd>Determina se um objeto foi congelado.</dd>
 <dt>{{jsxref("Object.isSealed()")}}</dt>
 <dd>Determina se um objeto está selado.</dd>
 <dt>{{jsxref("Object.keys()")}}</dt>
 <dd>Retorna uma matriz contendo os nomes de todas as propriedades de string enumeráveis ​​do objeto fornecido.</dd>
 <dt>{{jsxref("Object.preventExtensions()")}}</dt>
 <dd>Impede qualquer extensão de um objeto.</dd>
 <dt>{{jsxref("Object.seal()")}}</dt>
 <dd>Impede que outro código exclua propriedades de um objeto.</dd>
 <dt>{{jsxref("Object.setPrototypeOf()")}}</dt>
 <dd>Define o protótipo (isto é, a propriedade interna <code>[[Prototype]]</code>).</dd>
 <dt>{{jsxref("Object.values()")}}</dt>
 <dd>Retorna uma matriz contendo os valores que correspondem a todas as propriedades de string enumeráveis ​​do próprio objeto.</dd>
</dl>

<h2 id="Instâncias_de_Object_e_Object_de_protótipo_de_objeto">Instâncias de <code>Object</code> e <code>Object</code> de protótipo de objeto</h2>

<p>Todos os objetos em JavaScript são descendentes do <code>Object</code>; todos os objetos herdam métodos e propriedades de {{jsxref("Object.prototype")}}, embora eles possam ser substituídos. Por exemplo, protótipos de outros construtores substituem a propriedade <code>constructor</code> e fornecer seus próprios métodos <code>toString()</code>. As alterações no objeto de protótipo <code>Object</code> são propagadas para todos os objetos, a menos que as propriedades e os métodos sujeitos a essas alterações sejam substituídos na cadeia de protótipos.</p>

<h3 id="Propriedades_(enUS)">Propriedades (enUS)</h3>

<div>{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Properties')}}</div>

<h3 id="Métodos_(enUS)">Métodos (enUS)</h3>

<div>{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Methods')}}</div>

<h2 id="Excluindo_uma_propriedade_de_um_objeto">Excluindo uma propriedade de um objeto</h2>

<p>Não há nenhum método em um Objeto para excluir suas próprias propriedades (por exemplo, como <code><a href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/delete" style="">Map.prototype.delete()</a></code>). Para isso, é necessário usar o operador delete.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_Object_com_tipos_undefined_e_null">Usando <code>Object</code> com tipos <code>undefined</code> e <code>null</code></h3>

<p>Os exemplos a seguir armazenam um <code>Object</code> vazio na variável "<code>o</code>":</p>

<pre class="brush: js">var o = new Object();
</pre>

<pre class="brush: js">var o = new Object(undefined);
</pre>

<pre class="brush: js">var o = new Object(null);
</pre>

<h3 id="Using_Object_to_create_Boolean_objects">Using <code>Object</code> to create <code>Boolean</code> objects</h3>

<p>Os exemplos a seguir armazenam objetos {{jsxref("Boolean")}} na variável "<code>o</code>":</p>

<pre class="brush: js">// equivalent to o = new Boolean(true);
var o = new Object(true);
</pre>

<pre class="brush: js">// equivalent to o = new Boolean(false);
var o = new Object(Boolean());
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificações</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Definição inicial. Implementado no JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2', 'Object')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>------------------------------------------------</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object-objects', 'Object')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Adicionado <code>Object.assign</code>, <code>Object.getOwnPropertySymbols</code>, <code>Object.setPrototypeOf</code> e <code>Object.is</code></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object-objects', 'Object')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Adicionado  <code>Object.entries</code>, <code>Object.values</code> e <code>Object.getOwnPropertyDescriptors</code>.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidade">Compatibilidade</h2>

<div>


<p>{{Compat("javascript.builtins.Object")}}</p>
</div>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Object initializer</a></li>
</ul>
