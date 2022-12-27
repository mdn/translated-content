---
title: Herança e cadeia de protótipos (prototype chain)
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
tags:
  - herança intermediário JavaScript OOP
translation_of: Web/JavaScript/Inheritance_and_the_prototype_chain
original_slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
---
<div>{{jsSidebar("Advanced")}}</div>

<p>JavaScript é um pouco confuso para desenvolvedores com experiência em linguagens baseadas em classes (como Java ou C++), porque é dinâmico e não dispõe de uma implementação de uma <code>class</code> (a palavra-chave <code>class</code> foi introduzida no ES2015, mas é syntax sugar, o JavaScript permanece baseado em <code>prototype</code>).</p>

<p>Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado <code>prototype</code>. Esse objeto <code>prototype</code> também tem um atributo <code>prototype</code>, e assim por diante até o que o valor <code>null</code> seja encontrado como sendo o seu <code>prototype</code>. <code>null</code> que, por definição, não tem <code>prototype</code>, e age como um link final nesta <strong>cadeia de protótipos</strong> (prototype chain).</p>

<p>Isto muitas vezes é considerado como um dos pontos fracos do JavaScript, mas o modelo de herança prototipal é de fato mais potente do que o modelo clássico. É, por exemplo, relativamente trivial construir um "modelo clássico" (como na implementaçao de <code>class</code>), enquanto o contrário é uma tarefa muito mais difícil.</p>

<p><sup>1 </sup><em>N. da T: Como em uma implementação de fila em C, por exemplo.</em></p>

<h2 id="Herança_com_o_encadeamento_de_protótipos">Herança com o encadeamento de protótipos</h2>

<h3 id="Propriedades_de_heranças">Propriedades de heranças</h3>

<p>Objetos em JavaScript são "sacos" dinâmicos de propriedades (a que se refere as próprias propriedades) e cada um tem um link para um objeto <code>prototype</code>. Eis o que acontece quando se tenta acessar uma propriedade:</p>

<pre><code>// </code>Vamos criar um objeto o da função f com suas próprias propriedades a e b:<code>
let f = function () {
   this.a = 1;
   this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// </code>adicionar propriedades no protótipo da função f<code>
f.prototype.b = 3;
f.prototype.c = 4;</code>

// não defina o protótipo f.prototype = {b: 3, c: 4}; isso vai quebrar a cadeia de protótipos
// o. [[Prototype]] possui propriedades bec.
// o. [[Prototype]]. [[Prototype]] é Object.prototype.
// Finalmente, o. [[Prototype]]. [[Prototype]]. [[Prototype]] é nulo.
// Este é o fim da cadeia de protótipos, como nulo,
// por definição, não possui [[Prototype]].
// Assim, a cadeia completa de protótipos se parece com:
// {a: 1, b: 2} ---&gt; {b: 3, c: 4} ---&gt; Object.prototype ---&gt; null dfdf

<code>console.log(o.a); // 1
// Existe uma propriedade 'a' no objeto o? Sim, e seu valor é 1.

console.log(o.b); // 2
// Existe uma propriedade própria 'b' em o? Sim, e seu valor é 2.
// O protótipo também tem uma propriedade 'b', mas não é visitado.
// Isso é chamado de sombreamento de propriedade(Property Shadowing)

console.log(o.c); // 4
// Existe uma propriedade própria 'c' em o? Não, verifique seu protótipo.
// Existe uma propriedade 'c' própria em o. [[Prototype]]? Sim, seu valor é 4.

console.log(o.d); // undefined
// Existe uma propriedade 'd' própria em o? Não, verifique seu prototype.
// Existe uma propriedade 'd' em o. [[Prototype]]? Não, verifique seu prototype.
// o. [[Prototype]]. [[Prototype]] é Object.prototype e não há propriedade 'd' por padrão, verifique seu prototype.
// o. [[Prototype]]. [[Prototype]]. [[Prototype]] é nulo, pare de pesquisar,
// nenhuma propriedade encontrada, retorne indefinido.</code>
</pre>

<p><a href="https://repl.it/@khaled_hossain_code/prototype" style="background-color: rgb(255, 255, 255); font-family: Arial, x-locale-body, sans-serif; font-size: 1rem; letter-spacing: -0.00278rem;">Code Link</a></p>

<p>Atribuir uma propriedade a um objeto cria uma propriedade nele. A única exceção às regras de obtenção e definição de comportamento é quando há uma propriedade herdada com um <a href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters" title="Defining Getters and Setters">getter or a setter</a>.</p>

<h3 id="Herança_de_métodos">Herança de "métodos"</h3>

<p>JavaScript não tem "métodos" como os que conhecemos em linguagens baseadas em classes. Em JavaScript, qualquer função pode ser adicionada em um objeto em forma de propriedade. Uma herança de funções age como a herança de quaisquer outras propriedades que não sejam funções, e podemos inclusive realizar sobre-escrita de função (<em>method overriding</em>)!</p>

<p>Quando uma herança de função é executada, o valor de <a href="/en/JavaScript/Reference/Operators/this" title="this"><code>this</code></a> aponta para o objeto que herdou as propriedades, não para o objeto prototype onde as propriedades foram escritas originalmente.</p>

<pre class="brush: js">var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// Ao chamar 'o.m' neste caso, "this" refere-se a 'o'

var p = Object.create(o);
// 'p' é um objeto que foi herdado de 'o'

p.a = 12; // cria uma propriedade 'a' no objeto 'p'
console.log(p.m()); // 13
// Ao chamar 'p.m', 'this' refere-se a 'p'
// Então, quando 'p' herda a função de 'm' de 'o', 'this.a' representa 'p.a' que é a própria propriedade 'a' de 'p'

</pre>

<h2 id="Maneiras_de_criar_objetos_e_resultados_dos_protótipos_encadeados">Maneiras de criar objetos e resultados dos protótipos encadeados</h2>

<h3 id="Objetos_criados_com_sintaxe_de_construtores">Objetos criados com sintaxe de construtores</h3>

<pre class="brush: js">var o = {a: 1};

// O recém-criado objecto 'o' tem Object.prototype como o seu [[Prototype]]
// 'o' não tem não tem uma propriedade chamada 'hasOwnProperty'
// hasOwnProperty é uma propriedade própria de Object.prototype. Então 'o' herda hasOwnProperty de Object.prototype

// Object.prototype tem null como seu protótipo.
// o ---&gt; Object.prototype ---&gt; null

var a = ["yo", "whadup", "?"];

// Arrays herdam de Array.prototype (que tem métodos como indexOf, forEach, etc.)
// A cadeia de protótipos se parece com isso:
// a ---&gt; Array.prototype ---&gt; Object.prototype ---&gt; null

function f(){
  return 2;
}

// Funções herdam de Function.prototype (que tem métodos como call, bind, etc.)
// f ---&gt; Function.prototype ---&gt; Object.prototype ---&gt; null
</pre>

<h3 id="Com_um_construtor">Com um construtor</h3>

<p>Um "construtor" em JavaScript é "somente" uma função que passa a ser chamada com o operador <a href="/en/JavaScript/Reference/Operators/new" title="new">new</a>.</p>

<pre class="brush: js">function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertexes.push(v);
  }
};

var g = new Graph();
// 'g' é um objeto com as propriedades 'vertexes' e 'edges'.
// g.[[Prototype]] é o valor de Graph.prototype quando new Graph() é executada.
</pre>

<h3 id="Com_Object.create">Com Object.create</h3>

<p>ECMAScript 5 introduziu o novo método: <a href="/en/JavaScript/Reference/Global_Objects/Object/create" title="create">Object.create</a>. Invocando este método podemos criar novos objetos. O prototype destes novos objetos é o primeiro argumento do método:</p>

<pre class="brush: js">var a = {a: 1};
// a ---&gt; Object.prototype ---&gt; null

var b = Object.create(a);
// b ---&gt; a ---&gt; Object.prototype ---&gt; null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---&gt; b ---&gt; a ---&gt; Object.prototype ---&gt; null

var d = Object.create(null);
// d ---&gt; null
console.log(d.hasOwnProperty); // undefined, porque não herda de Object.prototype
</pre>

<div>
<h3 id="Performance">Performance</h3>

<p>O tempo de pesquisa para as propriedades que estão no alto da cadeia de protótipos pode ter um impacto negativo no desempenho, e isso pode ser significativo no código em que o desempenho é crítico. Além disso, tentar acessar propriedades inexistentes irá sempre atravessar a cadeia cheia do protótipo (full prototype chain).</p>

<p>Porém, quando estamos interagindo com as propriedades de um objeto, <strong>toda</strong> propriedade que está na cadeia do prototype (prototype chain) vai ser enumerada.</p>

<p>Para verificar se um objeto tem uma propriedade definida em si mesmo e não em algum lugar na sua cadeia de protótipo, é necessário usar o método <a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"><code>hasOwnProperty</code></a> que todos os objetos herdam do Object.prototype.</p>

<p><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"><code>hasOwnProperty</code></a> é a única alternativa em JavaScript que lida com propriedades sem atravessar a cadeia de protótipos.</p>


<div class="note">Observação: <strong>Não</strong> é suficiente apenas verificar se o valor da propriedade é <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" title="/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">undefined</a></code> para saber se ela existe. A propriedade pode muito bem existir e não ter sido inicializada, sendo assim o seu valor undefined.</div>

<div>
<h3 id="Má_Pratica_Estender_protótipos_nativos">Má Pratica: Estender protótipos nativos</h3>

<p>Um erro frequentemente cometido por programadores é estender um Object.prototype.</p>

<p>Esta técnica é chamada de "monkey patching" e quebra o encapsulamento. Não existe uma boa razão para desorganizar tipos nativos do JavaScript para adicionar uma nova funcionalidade ao mesmo. </p>

<p>O único bom motivo para estender um protótipo nativo do JavaScript é para dar suporte a novas "features" do JavaScript; por exemplo: Array.forEach, etc.</p>
</div>

<div>
<h3 id="Conclusão">Conclusão</h3>

<p>É essencial entender bem  "prototypal inheritance" antes de escrever códigos complexos. Tome cuidado com o tamanho da sua cadeia de protótipos, quebre a cadeia caso necessário para evitar problemas de performance. Nunca estenda protótipos nativos a menos que seja para conseguir compatibilidade com novas "features" do JavaScript.</p>


</div>
</div>

<p>{{ languages( {"zh-cn": "zh-cn/JavaScript/Guide/Inheritance_and_the_prototype_chain" } ) }}</p>
