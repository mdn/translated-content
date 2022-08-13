---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
translation_of: Web/JavaScript/Reference/Global_Objects/Array/map
---
<div>{{JSRef("Global_Objects", "Array")}}</div>

<h2 id="Summary" name="Summary">Resumo</h2>

<p>O método <strong>map()</strong> invoca a função <code>callback</code> passada por argumento para cada elemento do Array e devolve um novo Array como resultado.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="syntaxbox"><code><var>arr</var>.map(<var>callback</var>[, <var>thisArg</var>])</code></pre>

<h3 id="Parameters" name="Parameters">Parâmetros</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:
 <dl>
  <dt><code>valorAtual</code></dt>
  <dd>O valor do elemento original do Array de origem. </dd>
  <dt><code>indice</code></dt>
  <dd>O índice do elemento atual que está sendo processado no array.</dd>
  <dt><code>array</code></dt>
  <dd>O Array de origem.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>Opcional. Valor a ser utilizado como o <em><code>this</code></em> no momento da execução da função <code>callback</code>.</dd>
</dl>

<h2 id="Description" name="Description">Descrição</h2>

<p>O método <strong><code>map</code></strong> chama a função <code>callback</code> recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função <code>callback</code> é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como <code>undefined</code>, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.</p>

<p>A função <code>callback</code> é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.</p>

<p>Se o parametro <code>thisArg</code> foi passado para o método <code>map</code>, ele será repassado para a função <code>callback</code> no momento da invocação para ser utilizado como o <code>this</code>. Caso contrário, o valor {{jsxref("Global_Objects/undefined", "undefined")}} será repassado para uso como o <em><code>this</code></em>. O valor do <code>this</code> a ser repassado para o <code>callback</code> deve respeitar as <a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">regras para determinar como o this é acessado por uma função</a> (em inglês).</p>

<p>O método <code>map</code> não modifica o array original. No entanto, a função <code>callback</code> invocada por ele pode fazê-lo.</p>

<p>A lista de elementos que serão processados pelo <code>map</code> é montada antes da primeira invocação à função <code>callback</code>. Se um elemento for acrescentado ao array original após a chamada ao <code>map</code>, ele não será visível para o <code>callback</code>. Se os elementos existentes forem modificados, os valores que serão repassados serão os do momento em que o método <code>map</code> invocar o <code>callback</code>. Elementos removidos não serão visitados.</p>

<h2 id="Examples" name="Examples">Exemplos</h2>

<h3 id="Example_Mapping_an_array_of_numbers_to_an_array_of_square_roots" name="Example:_Mapping_an_array_of_numbers_to_an_array_of_square_roots">Exemplo: Mapeando um array de números para um array de raízes quadradas</h3>

<p>O código a seguir mapeia um array de números e cria um novo array contendo o valor da raiz quadrada de cada número do primeiro array.</p>

<pre class="brush: js">var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]
</pre>

<h3 id="Example_Mapping_an_array_of_numbers_using_a_function_containing_an_argument" name="Example:_Mapping_an_array_of_numbers_using_a_function_containing_an_argument">Exemplo: Mapeando um array de números usando uma função <code>callback</code> que contém um argumento</h3>

<p>O código a seguir mostrar como o método <code>map</code> funciona quando a função <code>callback</code> possui apenas um argumento. Esse argumento será automaticamente atribuído para cada elemento do array conforme o <code>map</code> itera sobre o array original.</p>

<pre class="brush: js">var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
</pre>

<h3 id="Example_using_map_generically" name="Example:_using_map_generically">Exemplo: usando <code>map</code> genericamente</h3>

<p>Esse exemplo demonstra como usar o map em um {{jsxref("Global_Objects/String", "String")}} para recuperar a representação em ASCII de cada caracter em um array de bytes:</p>

<pre class="brush: js">var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a agora vale [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
</pre>

<h3 id="Example_using_map_generically_querySelectorAll" name="Example:_using_map_generically_querySelectorAll">Exemplo: usando <code>map</code> genericamente com <code>querySelectorAll</code></h3>

<p>Esse exemplo demonstra como iterar sobre uma coleção de objetos recuperada através de querySelectorAll. Nesse caso, vamos pegar todos os options selecionados na tela e imprimir no console:</p>

<pre class="brush: js">var elems = document.querySelectorAll('select option:checked');
var values = [].map.call(elems, function(obj) {
  return obj.value;
});
</pre>

<h3 id="Exemplo_Usando_map_para_inverter_uma_string">Exemplo: Usando <code>map</code> para inverter uma string</h3>

<pre class="brush: js">var str = '12345';
[].map.call(str, function(x) {
  return x;
}).reverse().join('');

// Output: '54321'
// Bonus: utilize '===' para verificar se a string original e a nova string são palíndromos
</pre>

<h3 id="Example_Tricky_use_case" name="Example:_Tricky_use_case">Exemplo: Caso de uso mais complexo</h3>

<p><a href="http://www.wirfs-brock.com/allen/posts/166">(inspirado nesse post)</a> (em inglês)</p>

<p>É uma prática comum utilizar o callback com apenas um argumento (o elemento atual do array original). Algumas funções também são comumente utilizadas com um argumento, mesmo tendo argumentos adicionais opcionais. Esses hábitos podem resultar em comportamentos indesejado:</p>

<pre class="brush: js">// Considere:
['1', '2', '3'].map(parseInt);
// Enquanto era de se esperar [1, 2, 3]
// O resultado atual é [1, NaN, NaN]

// <code>parseInt é normalmente usado com apenas um argumento, mas ele possui dois</code>.
// O primeiro é uma expressão, e o segundo o radical.
// Para a função callback, o Array.prototype.map repassa 3 argumentos:
// o elemento corrente, o indice e o array original
// O terceiro argumento é ignorado pelo parseInt, mas o segundo não, o que certamente gerou o comportamento inesperado. Veja o post para maiores detalhes

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// O resultado atual é um array de números (como esperado)

// Bonus: Um jeito mais simples de conseguir o mesmo resultado sem nenhuma "pegadinha do Malandro":
['1', '2', '3'].map(Number); // [1, 2, 3]
</pre>

<h2 id="Polyfill" name="Polyfill">Polyfill</h2>

<p>(veja definição em <a href="https://pt.wikipedia.org/wiki/Polyfill">Polyfill</a>)</p>

<p>O método <code>map</code> foi introduzido ao padrão ECMA-262 na sua 5ª edição, o que significa que ele pode não estar presente em todas as implementações desse padrão. Você pode contornar esse problema inserindo o código a seguir no início dos seus scripts, permitindo o uso do <code>map</code> mesmo que ele não esteja sendo suportado nativamente. Esse algoritmo é exatamente o especificado no ECMA-262 5ª edição, assumindo que {{jsxref("Global_Objects/Object", "Object")}}, {{jsxref("Global_Objects/TypeError", "TypeError")}}, e {{jsxref("Global_Objects/Array", "Array")}} tenham seus valores originais, e que <code style="font-style: normal;">callback.call</code> avalie para o valor original de <code style="font-style: normal;">{{jsxref("Function.prototype.call")}}</code>.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    //  1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length &gt;&gt;&gt; 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length &gt; 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k &lt; len
    while (k &lt; len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
</pre>

<h2 id="Specifications" name="Specifications">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.19', 'Array.prototype.map')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Definição inicial implementada no JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.map', 'Array.prototype.map')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidade com os browsers</h2>

<div>{{Compat("javascript.builtins.Array.map")}}</div>

<h2 id="See_also" name="See_also">Veja também</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Map")}} object</li>
 <li>{{jsxref("Array.from()")}}</li>
</ul>
