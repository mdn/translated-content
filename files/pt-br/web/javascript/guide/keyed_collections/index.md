---
title: Coleções chaveadas
slug: Web/JavaScript/Guide/Keyed_collections
tags:
  - Coleções
  - Guía
  - JavaScript
  - Map
  - configuração
translation_of: Web/JavaScript/Guide/Keyed_collections
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}</div>

<p class="summary">Este capítulo apresenta coleções de dados que são ordenados por uma chave; Objetos Map e Set contêm elementos que são iteráveis em ordem de inserção.</p>

<h2 id="Mapas">Mapas</h2>

<h3 id="Objeto_Map"><code>Objeto Map</code></h3>

<p>ECMAScript 6 apresenta uma nova estrutura de dados para mapear valores para valores. Um objeto {{jsxref("Map")}} é um simples mapa de chave/valor que pode ter seus elementos iterados por ordem de inserção.</p>

<p>O código a seguir mostra algumas operações básicas com um <code>Map</code>. Veja também a página de referência do {{jsxref("Map")}} para mais exemplos e a API completa. Você pode usar um laço {{jsxref("Statements/for...of","for...of")}} para retornar um array de<code> [chave, valor]</code> para cada iteração.</p>

<pre class="brush: js">var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
</pre>

<h3 id="Object_e_Map_comparados"><code>Object</code> e <code>Map</code> comparados</h3>

<p>Tradicionalmente, {{jsxref("Object", "objetos", "", 1)}} tem sido usado para mapear strings para valores. Objetos permitem que você defina chaves para valores, recupere esses valores, exclua chaves e detecte se algo está armazenado em uma chave. Objetos <code>Map</code>, contudo, possuem algumas vantagens que os tornam mapas melhores.</p>

<ul>
 <li>As chaves de um <code>Objeto</code> são {{jsxref("Global_Objects/String","Strings")}}, onde elas podem ser de qualquer valor para um <code>Map</code>.</li>
 <li>Você pode obter o tamanho de um <code>Map</code> facilmente enquanto que para um <code>Object, </code>você tem que obter manualmente o seu tamanho.</li>
 <li>A iteração de mapas é por ordem de inserção dos elementos.</li>
 <li>Um <code>Object</code> tem um protótipo, então existem chaves padrão no mapa. (este pode ser ignorado usando <code>map = Object.create(null)</code>).</li>
</ul>

<p>Estes dois tipos podem ajudar você a decidir se usa um <code>Map</code> ou um <code>Object</code>:</p>

<ul>
 <li>Use mapas sobre objetos quando as chaves forem desconhecidas até a execução,  e quando todas as chaves são do mesmo tipo e todos valores são do mesmo tipo.</li>
 <li>Use mapas caso haja a necessidade de armazenar valores primitivos como chaves, porque objetos tratam cada chave como uma string ou um valor numérico, valor booleano ou qualquer outro valor primitivo.</li>
 <li>Use objetos quando há uma lógica que opera em elementos individuais.</li>
</ul>

<h3 id="Objeto_WeakMap"><code>Objeto WeakMap</code></h3>

<p>O objeto {{jsxref("WeakMap")}} é uma coleção de pares de chave/valor em que as <strong>chaves são somente objetos</strong> e seus valores podem ser valores arbitrários. As referências do objeto nas chaves são <em>fracamente</em> mantidas, isso significa que eles são alvo da garbage collection (coleta de lixo) se não houver nenhuma outra referência para o objeto. A API <code>WeakMap</code> é a mesma API do <code>Map</code>.</p>

<p>Uma diferença para objetos <code>Map</code> é que chaves <code>WeakMap</code> não são enumeráveis (isto é, não há um método que dê a você uma lista de chaves). Se eles fossem, a lista dependeria do estado da coleta de lixo, introduzindo um não-determinismo.</p>

<p>Para mais informações e código de exemplo, veja também "Por quê <em>Weak</em>Map?" na página de referência {{jsxref("WeakMap")}}.</p>

<p>Um caso de uso de objetos <code>WeakMap</code> é armazenar dados privados para um objeto ou ocultar detalhes de implementação. O exemplo a seguir é Nick Fitzgerald a partir de um post <a href="http://fitzgeraldnick.com/weblog/53/">"Ocultando detalhes de implementação com WeakMaps ECMAScript 6" </a>em seu blog. Os dados privados e métodos pertencem ao objeto e são armazenados nos objetos WeakMap <code>privados</code>. Tudo exposto na instância e o protótipo é público, todo o restante é inacessível a partir do mundo externo por que <code>privado </code>não é exportado pelo módulo.</p>

<pre class="brush: js">const privates = new WeakMap();

function Public() {
  const me = {
    // Dados privados vem aqui
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Faça coisas com dado privado em `me`...
};

module.exports = Public;
</pre>

<h2 id="Conjuntos">Conjuntos</h2>

<h3 id="Objeto_Set"><code>Objeto Set</code></h3>

<p>Objetos {{jsxref("Set")}} são coleções de valores. Você pode iterar seus elementos em ordem de inserção. Um valor em um <code>Set</code> só pode ocorrer uma vez;  ele é único em uma coleção <code>Set</code>.</p>

<p>O código a seguir mostra algumas operações básicas com um <code>Set</code>. Veja também a página de referência {{jsxref("Set")}} para mais exemplos e a API completa.</p>

<pre class="brush: js">var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
</pre>

<h3 id="Conversão_entre_Array_e_Set">Conversão entre Array e Set</h3>

<p>Você pode criar um {{jsxref("Array")}} a partir de um Set usando {{jsxref("Array.from")}} ou o <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">operador de propagação</a>. Além disso, o construtor <code>Set</code> aceita um <code>Array</code> para converter em outra direção. Observe novamente que objetos <code>Set</code> armazenam valores únicos, então quaisquer elementos duplicados de um Array são excluídos quando convertidos.</p>

<pre class="brush: js">Array.from(mySet);
[...mySet2];

mySet2 = new Set([1,2,3,4]);
</pre>

<h3 id="Array_e_Set_comparados"><code>Array</code> e <code>Set</code> comparados</h3>

<p>Tradicionalmente, um conjunto de elementos tem sido armazenados em arrays JavaScript em muitas situações. O novo objeto <code>Set</code>, contudo, tem algumas vantagens:</p>

<ul>
 <li>Checar se um elemento existe em uma coleção usando {{jsxref("Array.indexOf", "indexOf")}} para arrays é lento.</li>
 <li>Objetos <code>Set</code> permitem que você exclua elementos por seu valor. Com um array você teria que unir baseado no índice do elemento.</li>
 <li>O valor {{jsxref("NaN")}} não pode ser encontrado com <code>indexOf</code> no array.</li>
 <li>Objetos <code>Set</code> armazenam valores únicos, você não tem que manter o controle de duplicidades manualmente por você mesmo.</li>
</ul>

<h3 id="Objeto_WeakSet"><code>Objeto WeakSet</code></h3>

<p>Objetos {{jsxref("WeakSet")}} são coleções de objetos. Um objeto no <code>WeakSet</code> só pode ocorrer uma vez; Isto é único em coleções <code>WeakSet</code> e objetos não são enumeráveis.</p>

<p>As principais diferenças para objetos {{jsxref("Set")}} são:</p>

<ul>
 <li>Em contraste com <code>Sets</code>, <code>WeakSets</code> são <strong>apenas coleções de objetos</strong> e não de valores arbritários de qualquer tipo.</li>
 <li>O <code>WeakSet</code> é <em>fraco</em>: Referências para objetos são fracamente realizadas na coleção. Se não há outra referência para um objeto armazenado no <code>WeakSet</code>, eles podem ser coletados pelo coletor de lixo.  Isso significa também que não há uma lista de objetos correntes armazenados na coleção. <code>WeakSets</code> não são enumeráveis.</li>
</ul>

<p>Os casos de uso do objeto <code>WeakSet</code> são limitados. Eles não vão desperdiçar memória para ser seguro o uso de elementos DOM como chaves e marcá-los para propósitos de controle, por exemplo.</p>

<h2 id="Igualdade_de_chave_e_valor_do_Map_and_Set">Igualdade de chave e valor do <code>Map</code> and <code>Set</code></h2>

<p>Ambos, a igualdade de chaves de objetos <code>Map</code> e a igualdade de valor de objetos <code>Set</code>, são baseados no "<a href="https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero">algoritmo mesmo valor de zero</a>":</p>

<ul>
 <li>Igualdade funciona como o operador de comparação de identidade <code>===</code>.</li>
 <li><code>-0</code> e <code>+0</code> são considerados iguais.</li>
 <li>{{jsxref("NaN")}} é considerado igual a ela mesmo (contrário de <code>===</code>).</li>
</ul>

<p>{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}</p>
