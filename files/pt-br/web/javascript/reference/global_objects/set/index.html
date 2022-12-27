---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
tags:
  - ECMAScript 2015
  - JavaScript
  - Objetos
  - Objetos Globais
  - conjuntos
translation_of: Web/JavaScript/Reference/Global_Objects/Set
---
<div>{{JSRef("Global_Objects", "Set")}}</div>

<h2 id="Sumário">Sumário</h2>

<p>O objeto <strong><code>Set</code></strong> permite que você armazene valores <em>únicos</em> de qualquer tipo, desde {{Glossary("Primitive", "valores primitivos")}} a referências a objetos.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox"> new Set([iterable]);</pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt>iterable</dt>
 <dd>Se um <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">objeto iterável </a>é passado, todos os seus elementos serão adicionados ao novo Set. Se tal parâmetro não for específicado, ou se seu valor for <code>null</code>, o novo <code>Set</code> estará vazio.</dd>
</dl>

<h2 id="Descrição">Descrição</h2>

<p>Objetos <code style="font-style: normal; line-height: 1.5;">Set</code> são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. Um valor no <code style="font-style: normal; line-height: 1.5;">Set</code> <strong>pode ocorrer apenas uma vez</strong>; ele é único na coleção do <code style="font-style: normal; line-height: 1.5;">Set</code>.</p>

<h3 id="Igualdade_de_valores">Igualdade de valores</h3>

<p>Como cada valor no Set deve ser único, a igualdade será checada e não é baseada no mesmo algoritmo que aquele usado no operador ===. Especificamente, para <code>Set</code>s, <code>+0</code> (que é exatamente igual a - 0) e <code>- 0</code> são valores diferentes. No entanto, isto foi modificado na última especificação ECMAScript 2015. Iniciado com o Gecko 29.0 {{geckoRelease("29")}} ({{bug("952870")}}) e pelo  <a href="https://code.google.com/p/v8/issues/detail?id=3069">recent nightly Chrome</a>, +0 e -0 são tratados com sendo o mesmo valor em objetos conjunto (Set). Também, <code>NaN</code> e <code>undefined </code>podem ser armazenados em um conjunto Set.</p>

<h2 id="Properties" name="Properties">Propriedades</h2>

<dl>
 <dt><code>Set.length</code></dt>
 <dd><p>O valor da propriedade comprimento é 0.</p>
 <p>Para contar o número de elementos de um <code>Set</code>, use {{jsxref("Set.prototype.size")}}.</p></dd>
 <dt>{{jsxref("Set.@@species", "get Set[@@species]")}}</dt>
 <dd>A função construtora usada para criar objetos derivados.</dd>
 <dt>{{jsxref("Set.prototype")}}</dt>
 <dd>Representa o prototype do constructor do <code>Set</code>. Permite a adição de propriedades para todos os objetos do tipo <code>Set</code>.</dd>
</dl>

<h2 id="Boolean_instances" name="Boolean_instances">Instâncias <code>Set</code> </h2>

<p>Todas as instâncias de <code>Set</code> herdam de {{jsxref("Set.prototype")}}.</p>

<h3 id="Propriedades">Propriedades</h3>

<p>{{page('pt-BR/Web/JavaScript/Reference/Global_Objects/Set/prototype','Properties')}}</p>

<h3 id="Métodos">Métodos</h3>

<p>{{page('pt-BR/Web/JavaScript/Reference/Global_Objects/Set/prototype','Methods')}}</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Utilizando_o_objeto_Set">Utilizando o objeto <code>Set</code></h3>

<pre class="brush: js">var meuSet = new Set();

meuSet.add(1); // meuSet [1]
meuSet.add(5); // meuSet [1, 5]
meuSet.add(5); // 5 já foi adicionando, portanto, meuSet [1, 5]
meuSet.add("texto");
var o = {a: 1, b: 2};
meuSet.add(o);

meuSet.add({a: 1, b: 2}); //  o está referenciando outro objeto

meuSet.has(1); // true
meuSet.has(3); // false, 3 não foi adicionado ao set (Conjunto)
meuSet.has(5);              // true
meuSet.has(Math.sqrt(25));  // true
meuSet.has("Texto".toLowerCase()); // true
meuSet.has(o); // true

meuSet.size; // 5

meuSet.delete(5); // remove 5 do set
meuSet.has(5);    // false, 5 já foi removido

meuSet.size; // 4, nós simplesmente removemos um valor

console.log(meuSet) // Set { 1, 'texto', { a: 1, b: 2 }, { a: 1, b: 2 } }
</pre>



<h3 id="Iterando_objetos_Set">Iterando objetos <code>Set</code></h3>

<pre class="brush: js">// iterar sobre os itens em set
// loga os itens na ordem: 1, "texto"
for (let item of meuSet) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of meuSet.keys()) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of meuSet.values()) console.log(item);

// loga os itens na ordem: 1, "texto"
//(key e value são os mesmos aqui)
for (let [key, value] of meuSet.entries()) console.log(key);

// converte Set para um Array
var meuArr = [v for (v of mySet)]; // [1, "some text"]

// o seguinte também funcionará se for executado em um documento HTML
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// a conversão entre Set e Array
mySet2 = Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// intersecção pode ser simulado via
var intersection = new Set([...set1].filter(x =&gt; set2.has(x)));

// Iterar entradas set com forEach
meuSet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4</pre>

<h3 id="Implementando_operações_básicas_entre_conjuntos">Implementando operações básicas entre conjuntos</h3>

<pre class="brush: js">function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function uniao(setA, setB) {
    var _uniao = new Set(setA);
    for (var elem of setB) {
        _uniao.add(elem);
    }
    return _uniao;
}

function interseccao(setA, setB) {
    var _interseccao = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _interseccao.add(elem);
        }
    }
    return _interseccao;
}

function diferencaSimetrica(setA, setB) {
    var _diferenca = new Set(setA);
    for (var elem of setB) {
        if (_diferenca.has(elem)) {
            _diferenca.delete(elem);
        } else {
            _diferenca.add(elem);
        }
    }
    return _diferenca;
}

function diferenca(setA, setB) {
    var _diferenca = new Set(setA);
    for (var elem of setB) {
        _diferenca.delete(elem);
    }
    return _diferenca;
}

//Exemplos
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // =&gt; true
uniao(setA, setC); // =&gt; Set [1, 2, 3, 4, 5, 6]
interseccao(setA, setC); // =&gt; Set [3, 4]
diferencaSimetrica(setA, setC); // =&gt; Set [1, 2, 5, 6]
diferenca(setA, setC); // =&gt; Set [1, 2]</pre>

<h3 id="Relação_com_objetos_Array">Relação com objetos <code>Array</code> </h3>

<pre class="brush: js">var myArray = ["value1", "value2", "value3"];

// Use o construtor regular de Set para transformar um array dentro de um Set
var mySet = new Set(myArray);

mySet.has("value1"); // retorna true

// Use o operador de propagação para transformar um Set em um Array.
alert(uneval([...mySet])); // Irá mostrar-lhe exatamente o mesmo Array como myArray</pre>

<h3 id="Removendo_elementos_duplicados_de_um_Array">Removendo elementos duplicados de um <code>Array</code></h3>

<pre class="brush: js">// Use para remover elementos duplicados de um Array

const numeros = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numeros)])

// [2, 3, 4, 5, 6, 7, 32]</pre>

<h3 id="Relação_com_objetos_String">Relação com objetos <code>String</code></h3>

<pre class="brush: js">var texto = 'India';

var meuSet = new Set(texto);  // Set ['I', 'n', 'd', 'i', 'a']
meuSet.size;  // 5</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-set-objects', 'Set')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definição inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-set-objects', 'Set')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("javascript.builtins.Set")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>
