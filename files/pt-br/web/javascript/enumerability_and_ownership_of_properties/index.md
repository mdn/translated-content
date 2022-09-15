---
title: Enumerabilidade e posse de propriedades
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
tags:
  - JavaScript
translation_of: Web/JavaScript/Enumerability_and_ownership_of_properties
original_slug: Web/JavaScript/Enumerabilidade_e_posse_de_propriedades
---
<div>{{JsSidebar("Mais")}}</div>

<div><br>
Propriedades enumeráveis são aquelas propriedades cuja flag interna [[Enumerable]] é verdadeira (true), que é o padrão para propriedades criadas via assinatura simples ou através de um inicializador (propriedades definidas através de  <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a> e tipo padrão [[Enumerable]] falso (false)).</div>

<div> </div>

<div>Propriedades enumeráveis aparecem em <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> loops exceto se o nome da propriedade for um objeto <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">Symbol</a>. Posse de propriedades é determinada pelo fato da propriedade pertencer ao objeto diretamente e não a uma cadeira de protótipos. Propriedades de um objeto pode também ser recuperadas diretamente. Há um número de built-in de detecção, iteração/enumeração e recuperação de propriedades,  com o gráfico mostrando que estão disponíveis. </div>

<div> </div>

<div>O código de exemplo a seguir demostra como obter as categorias que faltam.</div>

<div> </div>

<div> </div>

<table>
 <caption>Propriedade de enumerabilidade e posse - métodos internos de detecção, recuperação, e iteração</caption>
 <tbody>
  <tr>
   <th>Funcionalidade</th>
   <th>Próprio objeto</th>
   <th>
    <p>Próprio objeto e sua cadeia de caracteres</p>
   </th>
   <th>Somente cadeia de protótipos</th>
  </tr>
  <tr>
   <td>Detecção</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerável</th>
       <th scope="col">Não enumerável</th>
       <th scope="col">Enumerável e Não enumerável</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code> e não <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Não disponível sem código extra</td>
   <td>Não disponível sem código extra</td>
  </tr>
  <tr>
   <td>Recuperação</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerável</th>
       <th scope="col">Não enumerável</th>
       <th scope="col">Enumerável e Não enumerável</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></td>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code> filtrou-se para incluir as propriedades quando não passado <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Não disponível sem código extra</td>
   <td>Não disponível sem código extra</td>
  </tr>
  <tr>
   <td>Iteração</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerável</th>
       <th scope="col">Não enumerável</th>
       <th scope="col">Enumerável e Não enumerável</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>Iterar <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></td>
       <td>
        <p>itera <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a> </code>filtrou-se para incluir as propriedades quando não passado <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></p>
       </td>
       <td><code><font face="Open Sans, Arial, sans-serif">iterar </font><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Enumerável</th>
       <th scope="col">Não enumerável</th>
       <th scope="col">Enumerável e Não enumerável</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td><code><a href="/en-US/docs/JavaScript/Reference/Statements/for...in" title="/en-US/docs/JavaScript/Reference/Statements/for...in">for..in</a></code></td>
       <td>Não disponível sem código extra</td>
       <td>Não disponível sem código extra</td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Não disponível sem código extra</td>
  </tr>
 </tbody>
</table>

<h2 id="Obtendo_propriedades_por_enumerabilidadeposse">Obtendo propriedades por enumerabilidade/posse</h2>

<p> </p>

<p>Note que não é o algoritmo mais eficiente para todos os casos, mas útil para uma demonstração rápida.</p>

<ul>
 <li>Detecção pode ocorrer por <code>SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) &gt; -1</code></li>
 <li>Iteração pode ocorrer por <code>SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});</code> (ou use<code> filter()</code>, <code>map()</code>, etc.)</li>
</ul>

<pre class="brush: js">var SimplePropertyRetriever = {
    getOwnEnumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
         // Ou poderia usar for..in filtrado com hasOwnProperty ou apenas isto: return Object.keys(obj);
    },
    getOwnNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    },
    getOwnEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
        // Ou apenas use: return Object.getOwnPropertyNames(obj);
    },
    getPrototypeEnumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    },
    getPrototypeNonenumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    },
    getPrototypeEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    },
    getOwnAndPrototypeEnumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
        // Ou poderia usar filtrado for..in
    },
    getOwnAndPrototypeNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    },
    getOwnAndPrototypeEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    },
    // Private static property checker callbacks
    _enumerable : function (obj, prop) {
        return obj.propertyIsEnumerable(prop);
    },
    _notEnumerable : function (obj, prop) {
        return !obj.propertyIsEnumerable(prop);
    },
    _enumerableAndNotEnumerable : function (obj, prop) {
        return true;
    },
    // Inspirado por http://stackoverflow.com/a/8024294/271577
    _getPropertyNames : function getAllPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb) {
        var props = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function (prop) {
                    if (props.indexOf(prop) === -1 &amp;&amp; includePropCb(obj, prop)) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }
};</pre>

<h2 id="Tabela_de_Detecção">Tabela de Detecção</h2>

<table>
 <thead>
  <tr>
   <th scope="row"> </th>
   <th scope="col"><code>in</code></th>
   <th scope="col"><code>for..in</code></th>
   <th scope="col"><code>hasOwnProperty</code></th>
   <th scope="col"><code>propertyIsEnumerable</code></th>
   <th scope="col"><code>in Object.keys</code></th>
   <th scope="col"><code>in Object.getOwnPropertyNames</code></th>
   <th scope="col">in Object.getOwnPropertyDescriptors</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Enumerável</th>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
  </tr>
  <tr>
   <th scope="row">Não enumerável</th>
   <td>true</td>
   <td>false</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>true</td>
   <td>true</td>
  </tr>
  <tr>
   <th scope="row">Inherited Enumerable</th>
   <td>true</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
  <tr>
   <th scope="row">Inherited Nonenumerable</th>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
  <tr>
   <th scope="row">Account for Symbols keys</th>
   <td>true</td>
   <td>false</td>
   <td>true</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>true</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Operators/in" title="/en-US/docs/JavaScript/Reference/Operators/in">in</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Statements/for...in" title="/en-US/docs/JavaScript/Reference/Statements/for...in">for..in</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></li>
 <li><code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors</a></code></li>
</ul>
