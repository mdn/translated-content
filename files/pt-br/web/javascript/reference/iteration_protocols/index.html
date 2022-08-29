---
title: Iteration protocols
slug: Web/JavaScript/Reference/Iteration_protocols
translation_of: Web/JavaScript/Reference/Iteration_protocols
---
<div>{{jsSidebar("More")}}</div>

<div>Algumas adições do ECMAScript 2015 não são novos <em>built-ins</em> ou uma nova sintaxe, mas protocolos. Estes protocolos podem ser implementados por qualquer objeto desde que respeitando algumas convenções.</div>

<div> </div>

<div>Existem dois protocolos: O <em>protocolo iterável</em> (<a href="#The_iterable_protocol">iterable protocol</a>) e o <em>protocolo iterador </em>(<a href="#The_iterator_protocol">iterator protocol</a>).</div>

<h2 id="O_protocolo_iterável_(iterable_protocol)">O protocolo iterável (iterable protocol)</h2>

<p>O protocolo <strong>iterável </strong>permite que objetos JavaScript definam ou personalizem seu comportamento de iteração, como valores em um loop do construtor {{jsxref("Statements/for...of", "for..of")}}. Alguns tipos <em>built-in</em> são <em><a href="#Built-in_iterables">built-in iterables</a></em> com um comportamento de iteração padrão, tal como {{jsxref("Array")}} ou {{jsxref("Map")}}, enquanto outros tipos (como {{jsxref("Object")}}) não são assim.</p>

<p>Para ser <strong>iterável</strong>, um objeto deve implementar o método <strong>@@iterator</strong>, o que significa que o objeto (ou um dos objetos acima de sua <a href="/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">cadeia de protótipos</a>) deve ter uma propriedade com uma chave <strong>@@iterator </strong>que está disponível via constante <code>{{jsxref("Symbol.iterator")}}</code>:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>[Symbol.iterator]</code></td>
   <td>Uma função de zero argumentos que retorna um objeto, em conformidade com o <a href="/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols">protocolo iterador</a>.</td>
  </tr>
 </tbody>
</table>

<p>Sempre que um objeto precisa ser iterado (como no início de um loop <code>for..of</code>), o método <code>@@iterator</code> é chamado sem argumentos e o retorno do <strong>iterador</strong> é usado para obter os valores a serem iterados.</p>

<h2 id="O_protocolo_iterador_(iterator_protocol)">O protocolo iterador (iterator protocol)</h2>

<p>O protocolo <strong>iterador</strong> define uma maneira padrão de produzir uma sequência de valores (finito ou infinito).</p>

<p>Um objeto é um iterador quando implementa um método <code><strong>next()</strong></code><strong> </strong>com a semântica adiante:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Propriedade</th>
   <th scope="col">Valor</th>
  </tr>
  <tr>
   <td><code>next</code></td>
   <td>
    <p>Uma função sem argumentos que retorna um objeto com duas propriedades:</p>

    <ul>
     <li><code>done</code> (boolean)

      <ul>
       <li>Tem o valor <code>true</code> se o iterador ultrapassar o final da sequência iterada. Nesse caso <code>value</code> opcionalmente especifica o valor de retorno do iterador. </li>
       <li>Tem o valor <code>false</code> se o iterador foi capaz de produzir o próximo valor na sequência. Isso é equivalente a não especificar a propriedade  <code>done</code>.</li>
      </ul>
     </li>
     <li><code>value</code> - qualquer valor JavaScript retornado pelo iterador. Pode ser omitido quando <code>done</code> é <code>true</code>.</li>
    </ul>

    <p>O método <code>next</code> sempre retorna um objeto com propriedades apropriadas, incluindo <code>done</code> e <code>value</code>. Se um valor não-objeto é retornado (tal como <code>false</code> ou <code>undefined</code>), será lançado um {{jsxref("TypeError")}} ("iterator.next() retorna o valor de um não-objeto").</p>
   </td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p>Não é possível saber de forma reflexiva se um determinado objeto implementa o protocolo do iterador, no entanto, é fácil criar um objeto que satisfaça tanto o iterador quanto os protocolos iteráveis (como mostrado no exemplo abaixo). Fazer isso permite que um iterador seja consumido pelas várias sintaxes que iteráveis esperam. Assim, raramente é desejável implementar o protocolo do iterador sem também implementar iteráveis. </p>

<pre class="brush: js"><code>var myIterator = {
    next: function() {
        // ...
    },
    [Symbol.iterator]: function() { return this }
};</code>
</pre>
</div>

<h2 id="Exemplos_de_uso_do_protocolo_de_iteração">Exemplos de uso do protocolo de iteração</h2>

<p>Uma {{jsxref("String")}} é um exemplo de um objeto iterable built-in:</p>

<pre class="brush: js">var someString = 'hi';
typeof someString[Symbol.iterator];          // "function"
</pre>

<p><a href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator">O iterador padrão</a> de uma string retorna as posições dos caracteres de uma string um por um:</p>

<pre class="brush: js">var iterator = someString[Symbol.iterator]();
iterator + '';                               // "[object String Iterator]"

iterator.next();                             // { value: "h", done: false }
iterator.next();                             // { value: "i", done: false }
iterator.next();                             // { value: undefined, done: true }</pre>

<p>Alguns construtores built-in, como <em><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread syntax</a></em>, usam o mesmo protocolo de iteração interiormente:</p>

<pre class="brush: js">[...someString]                              // ["h", "i"]</pre>

<p>Podemos redefinir o comportamento de iteração fornecendo nosso próprio <code>@@iterator</code>:</p>

<pre><code>var someString = new String('hi');           // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function() {
  return { // this is the iterator object, returning a single element, the string "bye"
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: 'bye', done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};</code></pre>

<p>Observe como redefinir <code>@@iterator</code> afeta o comportamento built-in que faz uso do protocolo de iteração:</p>

<pre class="brush: js">[...someString];                             // ["bye"]
someString + '';                             // "hi"
</pre>

<h2 id="Exemplos_de_Iteráveis">Exemplos de Iteráveis</h2>

<h3 id="Iteráveis_Built-in">Iteráveis Built-in</h3>

<p>{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} and {{jsxref("Set")}} são todos iteráveis internos, porque cada um dos seus objetos protótipos implementa um método <code>@@</code><code>iterator</code>.</p>

<h3 id="Iteráveis_definidos_pelo_usuário">Iteráveis definidos pelo usuário</h3>

<p>Nós podemos fazer nossos próprios iterables assim:</p>

<pre><code>var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]</code></pre>

<h3 id="Built-in_APIs_que_aceitam_iteráveis">Built-in APIs que aceitam iteráveis</h3>

<p>Existem muitas APIs que aceitam iteráveis, por exemplo: {{jsxref("Map", "Map([iterable])")}}, {{jsxref("WeakMap", "WeakMap([iterable])")}}, {{jsxref("Set", "Set([iterable])")}} e {{jsxref("WeakSet", "WeakSet([iterable])")}}:</p>

<pre><code>var myObj = {};
new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2);               // "b"
new WeakMap([[{}, 'a'], [myObj, 'b'], [{}, 'c']]).get(myObj); // "b"
new Set([1, 2, 3]).has(3);                               // true
new Set('123').has('2');                                 // true
new WeakSet(function* () {
    yield {};
    yield myObj;
    yield {};
}()).has(myObj);                                         // true</code></pre>

<p>Veja também {{jsxref("Promise.all", "Promise.all(iterable)")}}, {{jsxref("Promise.race", "Promise.race(iterable)")}} e {{jsxref("Array.from", "Array.from()")}}.</p>

<h3 id="Sintaxe_que_espera_iteráveis">Sintaxe que espera iteráveis</h3>

<p>Some statements and expressions expect iterables, for example the <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for-of</a></code> loops, <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread operator</a>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield*">yield*</a></code>, and <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">destructuring assignment</a>:</p>

<pre><code>for(let value of ['a', 'b', 'c']){
    console.log(value);
}
// "a"
// "b"
// "c"

[...'abc']; // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(['a', 'b', 'c']);
a // "a"</code></pre>

<h3 id="Iteráveis_não_bem_formados">Iteráveis não bem formados</h3>

<p>If an iterable's <code>@@iterator</code> method doesn't return an iterator object, then it's a non-well-formed iterable. Using it as such is likely to result in runtime exceptions or buggy behavior:</p>

<pre><code>var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () =&gt; 1
[...nonWellFormedIterable] // TypeError: [] is not a function</code></pre>

<h2 id="Iterator_examples">Iterator examples</h2>

<h3 id="Simple_iterator">Simple iterator</h3>

<pre><code>function makeIterator(array) {
    var nextIndex = 0;

    return {
       next: function() {
           return nextIndex &lt; array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true</code></pre>

<h3 id="Infinite_iterator">Infinite iterator</h3>

<pre><code>function idMaker() {
    var index = 0;

    return {
       next: function(){
           return {value: index++, done: false};
       }
    };
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...</code></pre>

<h3 id="Com_um_gerador">Com um gerador</h3>

<pre><code>function* makeSimpleGenerator(array) {
    var nextIndex = 0;

    while (nextIndex &lt; array.length) {
        yield array[nextIndex++];
    }
}

var gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true



function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...</code></pre>

<h3 id="Com_uma_classe_ES2015">Com uma classe ES2015</h3>

<pre><code>class SimpleClass {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () =&gt; {
        if (this.index &lt; this.data.length) {
          return {value: this.data[this.index++], done: false};
        } else {
          this.index = 0; //If we would like to iterate over this again without forcing manual update of the index
          return {done: true};
        }
      }
    };
  }
}

const simple = new SimpleClass([1,2,3,4,5]);

for (const val of simple) {
  console.log(val);  //'0' '1' '2' '3' '4' '5'
}</code></pre>

<h2 id="Um_objeto_gerador_um_iterador_ou_iterável">Um objeto gerador um iterador ou iterável?</h2>

<p>Um objeto gerador é tanto iterador quanto iterável:</p>

<pre><code>var aGeneratorObject = function* () {
    yield 1;
    yield 2;
    yield 3;
}();
typeof aGeneratorObject.next;
// "function", because it has a next method, so it's an iterator
typeof aGeneratorObject[Symbol.iterator];
// "function", because it has an @@iterator method, so it's an iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable
[...aGeneratorObject];
// [1, 2, 3]</code></pre>

<h2 id="Especificações">Especificações</h2>

<div id="compat-desktop"> </div>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-iteration', 'Iteration')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definição inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-iteration', 'Iteration')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>Para mais informações sobre <em>generators </em>ES2015, consulte <a href="/pt-BR/docs/Web/JavaScript/Reference/Statements/function*">a documentação de function*.</a></li>
</ul>
