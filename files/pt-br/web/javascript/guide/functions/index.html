---
title: Funções
slug: Web/JavaScript/Guide/Functions
tags:
  - Funções JavaScript
  - Guia(2)
  - Iniciante
  - JavaScript
translation_of: Web/JavaScript/Guide/Functions
original_slug: Web/JavaScript/Guide/Funções
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}</div>

<p class="summary">Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.</p>

<p>Veja também o capítulo de <a href="/pt-BR/docs/Web/JavaScript/Reference/Functions">referência sobre funções JavaScript</a> para conhecer os detalhes.</p>

<h2 id="Defining_functions" name="Defining_functions">Definindo Funções</h2>

<h3 id="Declarando_uma_função">Declarando uma função</h3>

<p>A <strong>definição da função </strong>(também chamada de <strong>declaração de função</strong>) consiste no uso da palavra chave <a href="/pt-BR/docs/JavaScript/Reference/Statements/function" title="function"><code>function</code></a>, seguida por:</p>

<ul>
 <li>Nome da Função.</li>
 <li>Lista de argumentos para a função, entre parênteses e separados por vírgulas.</li>
 <li>Declarações JavaScript que definem a função, entre chaves <code>{ }</code>.</li>
</ul>

<p>Por exemplo, o código a seguir define uma função simples chamada <code>square</code>:</p>

<pre class="brush: js">function square(numero) {
  return numero * numero;
}
</pre>

<p>A função <code>square</code> recebe um argumento chamado <code>numero</code>. A função consiste em uma instrução que indica para retornar o argumento da função (isto é, <code>numero</code>) multiplicado por si mesmo. A declaração <a href="/pt-BR/docs/JavaScript/Reference/Statements/return" title="return"><code>return</code></a> especifica o valor retornado pela função.</p>

<pre class="brush: js">return numero * numero;
</pre>

<p>Parâmetros primitivos (como um número) são passados para as funções por <strong>valor</strong>; o valor é passado para a função, mas se a função altera o valor do parâmetro, esta mudança não reflete globalmente ou na função chamada.</p>

<p>Se você passar um objeto (ou seja, um  <a href="/pt-BR/docs/JavaScript/Glossary" title="en-US/docs/JavaScript/Glossary">valor não primitivo</a>, tal como {{jsxref("Array")}} ou um objeto definido por você) como um parâmetro e a função alterar as propriedades do objeto, essa mudança é visível fora da função, conforme mostrado no exemplo a seguir:</p>

<pre class="brush: js">function minhaFuncao(objeto) {
  objeto.make = "Toyota";
}

var meucarro = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = meucarro.make;     // x recebe o valor "Honda"

minhaFuncao(meucarro);
y = meucarro.make;     // y recebe o valor "Toyota"
                    // (a propriedade make foi alterada pela função)
</pre>

<h3 id="Expressão_de_função">Expressão de função</h3>

<p>Embora a declaração de função acima seja sintaticamente uma declaração, funções também podem ser criadas por uma <strong>expressão de função</strong>. Tal função pode ser <strong>anônima</strong>; ele não tem que ter um nome. Por exemplo, a função <code style="font-size: 14px;">square</code> poderia ter sido definida como:</p>

<pre class="brush: js">var square = function(numero) {return numero * numero};
var x = square(4) //x recebe o valor 16</pre>

<p>No entanto, um nome pode ser fornecido com uma expressão de função e pode ser utilizado no interior da função para se referir a si mesma, ou em um debugger para identificar a função em stack traces:</p>

<pre class="brush: js" style="font-size: 14px;">var fatorial = function fac(n) {return n&lt;2 ? 1 : n*fac(n-1)};

console.log(fatorial(3));
</pre>

<p>As expressões de função são convenientes ao passar uma função como um argumento para outra função. O exemplo a seguir mostra uma função <code>map </code>sendo definida e, em seguida, chamada com uma função anônima como seu primeiro parâmetro:</p>

<pre class="brush: js" style="font-size: 14px;">function map(f,a) {
  var result = []; // Cria um novo Array
  var i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
</pre>

<p>O código a seguir:</p>

<pre class="brush: js" style="font-size: 14px;">map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
</pre>

<p>retorna [0, 1, 8, 125, 1000].</p>

<p>Em JavaScript, uma função pode ser definida com base numa condição. Por exemplo, a seguinte definição de função define <code>minhaFuncao</code> somente se <code>num</code>  é igual a 0:</p>

<pre class="brush: js">var minhaFuncao;
if (num == 0){
  minhaFuncao = function(objeto) {
    objeto.make = "Toyota"
  }
}</pre>

<p><span style="line-height: 1.572;">Além de definir funções, você também pode usar o construtor </span>{{jsxref("Function")}} <span style="line-height: 1.572;">para criar funções a partir de uma string<code> </code>em tempo real, como no método </span>{{jsxref("eval()")}}<span style="line-height: 1.572;">.</span></p>

<p>Um <strong>método</strong> é uma função invocada por um objeto. Leia mais sobre objetos e métodos em <a href="/pt-BR/docs/JavaScript/Guide/Working_with_Objects" title="en-US/docs/JavaScript/Guide/Working with Objects">Trabalhando com Objetos</a>.</p>

<h2 id="Calling_functions" name="Calling_functions">Chamando funções</h2>

<p>A definição de uma função não a executa. Definir a função é simplesmente nomear a função e especificar o que fazer quando a função é chamada. Chamar a função executa realmente as ações especificadas com os parâmetros indicados. Por exemplo, se você definir a função <code>square</code>, você pode chamá-la do seguinte modo: </p>

<pre class="brush: js">square(5);
</pre>

<p>A declaração anterior chama a função com o argumento 5. A função executa as instruções e retorna o valor 25.</p>

<p>Funções devem estar no escopo quando são chamadas, mas a declaração de uma função pode ser puxada para o topo (aparecem abaixo da chamada no código), como neste exemplo:</p>

<pre>console.log(square(5));
/* ... */
function square(n){return n*n}
</pre>

<p>O escopo de uma função é a função na qual ela é declarada, ou todo o programa se ela é declarada no nível superior.</p>

<div class="note">
<p>Nota: Isso funciona apenas quando a definição da função usa a sintaxe acima (ex., <code>function funcNome(){ })</code>. O código a seguir não vai funcionar.</p>
</div>

<pre class="brush: js">console.log(square(5));
var square = function (n) {
  return n * n;
}
</pre>

<p>Os argumentos de uma função não estão limitados a strings e números. Você pode passar objetos para uma função. A função <code>show_props</code> (definido em <a href="/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_Properties">Trabalhando com Objetos</a>) é um exemplo de uma função que recebe um objeto como um argumento.</p>

<p>Um função pode chamar a si mesma. Por exemplo, a função que calcula os fatoriais recursivamente:</p>

<pre class="brush: js">function fatorial(n){
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * fatorial(n - 1));
}
</pre>

<p>Você poderia, então, calcular os fatoriais de um a cinco:</p>

<pre class="brush: js">var a, b, c, d, e;
a = fatorial(1); // a recebe o valor 1
b = fatorial(2); // b recebe o valor 2
c = fatorial(3); // c recebe o valor 6
d = fatorial(4); // d recebe o valor 24
e = fatorial(5); // e recebe o valor 120
</pre>

<p>Há outras maneiras de chamar funções. Muitas vezes há casos em que uma função precisa ser chamada dinamicamente, ou o número de argumentos de uma função varia, ou em que o contexto da chamada de função precisa ser definido para um objeto específico determinado em tempo de execução. Acontece que as funções são, por si mesmas, objetos, e esses objetos por sua vez têm métodos (veja objeto {{jsxref("Function")}}). Um desses, o método {{jsxref("Function.apply", "apply()")}}, pode ser usado para atingir esse objetivo.</p>

<h2 class="deki-transform" id="Function_scope" name="Function_scope">Escopo da função</h2>

<p>As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, porque a variável está definida apenas no escopo da função. No entanto, uma função pode acessar todas variáveis e funções definida fora do escopo onde ela está definida. Em outras palavras, a função definida no escopo global pode acessar todas as variáveis definidas no escopo global. A função definida dentro de outra função também pode acessar todas as variáveis definidas na função hospedeira e outras variáveis ao qual a função hospedeira tem acesso.</p>

<pre class="brush: js">// As seguintes variáveis são definidas no escopo global
var num1 = 20,
    num2 = 3,
    nome = "Chamahk";

// Esta função é definida no escopo global
function multiplica() {
  return num1 * num2;
}

multiplica(); // Retorna 60

// Um exemplo de função aninhada
function getScore () {
  var num1 = 2,
      num2 = 3;

  function add() {
    return nome + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Retorna "Chamahk scored 5"
</pre>

<h2 id="Scope_and_the_function_stack" name="Scope_and_the_function_stack">Escopo e a pilha de função</h2>

<h3 id="Recursion" name="Recursion">Recursão</h3>

<p>Uma função pode referir-se e chamar a si própria. Há três maneiras de uma função referir-se a si mesma:</p>

<ol>
 <li>o nome da função</li>
 <li><code><a href="/pt-BR/docs/JavaScript/Reference/Functions_and_function_scope/arguments/callee">arguments.callee</a></code></li>
 <li>uma variável no escopo que se refere a função</li>
</ol>

<p>Por exemplo, considere a seguinte definição de função:</p>

<pre class="brush: js">var foo = function bar() {
   // declaracoes
};
</pre>

<p>Dentro do corpo da função, todos, a seguir, são equivalentes:</p>

<ol>
 <li><code>bar()</code></li>
 <li><code>arguments.callee()</code></li>
 <li><code>foo()</code></li>
</ol>

<p>Uma função que chama a si mesma é chamada de função recursiva. Em alguns casos, a recursividade é análoga a um laço. Ambos executam o código várias vezes, e ambos necessitam de uma condição (para evitar um laço infinito, ou melhor, recursão infinita, neste caso). Por exemplo,  o seguinte laço:</p>

<pre class="brush: js">var x = 0;
while (x &lt; 10) { // "x &lt; 10" a condição do laço
   // faça coisas
   x++;
}
</pre>

<p>pode ser convertido em função recursiva e uma chamada para a função:</p>

<pre class="brush: js">function loop(x) {
   if (x &gt;= 10) // "x &gt;= 10" a condição de parada (equivalente a "!(x &lt; 10)")
      return;
   // faça coisas
   loop(x + 1); // chamada recursiva
}
loop(0);
</pre>

<p>No entanto, alguns algoritmos não podem ser simples laços iterativos. Por exemplo, conseguir todos os nós da estrutura de uma árvore (por exemplo, o <a href="/pt-BR/docs/Web/API/Document_Object_Model">DOM</a>) é mais fácil se feito recursivamente:</p>

<pre class="brush: js">function walkTree(node) {
   if (node == null) //
      return;
   // faça algo com o nó
   for (var i = 0; i &lt; node.childNodes.length; i++) {
      walkTree(node.childNodes[i]);
   }
}
</pre>

<p>Em comparação ao laço da função, cada chamada recursiva realiza outras chamadas recursivas.</p>

<p>É possível converter qualquer algoritmo recursivo para um não recursivo, mas muitas vezes a lógica é muito mais complexa e exige o uso de pilhas. Na verdade a própria recursão usa pilha: a pilha de função.</p>

<p>O comportamento da pilha pode ser vista a seguir no exemplo:</p>

<pre class="brush: js">function foo(i) {
   if (i &lt; 0)
      return;
   document.writeln('begin:' + i);
   foo(i - 1);
   document.writeln('end:' + i);
}
foo(3);
</pre>

<p>que produz:</p>

<pre>begin:3
begin:2
begin:1
begin:0
end:0
end:1
end:2
end:3
</pre>

<h3 id="Nested_functions_and_closures" name="Nested_functions_and_closures">Funções aninhadas e closures</h3>

<p>Você pode aninhar uma função dentro de outra. A função aninhada (interna) é acessível apenas para a função que a contém (exterior). Isso constitui também uma <em><code>closure</code></em>. Uma closure é uma expressão (tipicamente uma função) que pode ter variáveis livres em conjunto com um ambiente que conecta estas variáveis (que "fecha" a expressão).</p>

<p>Uma vez que uma função aninhada é uma closure, isto significa que uma função aninhada pode "herdar" os argumentos e variáveis de sua função de contenção. Em outras palavras, a função interior contém o escopo da função exterior.</p>

<p>Em resumo:</p>

<ul>
 <li>A função interna só pode ser acessada a partir de declarações em função externa.</li>
 <li>A função interna forma uma closure: a função  interna pode usar os argumentos e variáveis da função externa, enquanto a função externa não pode usar os argumentos e variáveis da função interna.</li>
</ul>

<p>O exemplo a seguir mostra as funções aninhadas:</p>

<pre class="brush: js">function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
}
a = addSquares(2,3); // retorna 13
b = addSquares(3,4); // retorna 25
c = addSquares(4,5); // retorna 41
</pre>

<p>Uma vez que a função interna forma uma <em>closure</em>, você pode chamar a função externa e especificar argumentos para a função externa e interna:</p>

<pre class="brush: js">function fora(x) {
   function dentro(y) {
      return x + y;
   }
   return dentro;
}
fn_inside = fora(3); // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
result = fn_inside(5); // retorna 8

result1 = fora(3)(5); // retorna 8
</pre>

<h3 id="Efficiency_considerations" name="Efficiency_considerations">Preservação  de variáveis</h3>

<p>Observe como <code>x</code> é preservado quando <code>dentro</code> é retornado. Uma <em>closure</em> deve preservar os argumentos e variáveis em todos os escopos que ela referencia. Uma vez que cada chamada fornece potencialmente argumentos diferentes, uma nova closure é criada para cada chamada de <code>fora</code>. A memória só poderá ser liberada quando o <code>dentro</code> retornado já não é mais acessível.</p>

<p>Isso não é diferente de armazenar referências em outros objetos, mas muitas vezes é menos óbvio, porque um não define diretamente as referências e não pode inspecioná-las.</p>

<h3 id="Multiply-nested_functions" name="Multiply-nested_functions">Múltiplas funções aninhadas</h3>

<p>Funções podem ter múltiplo aninhamento, por exemplo, a função (A) contém a função (B) que contém a função (C). Tanto as funções B e C formam uma <em>closure</em>, então B pode acessar A, e C pode acessar B. Além disso, uma vez que C pode acessar B que pode acessar A, C também pode acessar A. Assim, a <em>closure</em> pode conter vários escopos; eles recursivamente contém o escopo das funções que os contém. Isso é chamado <em><code>encadeamento de escopo</code></em>. (O motivo de ser chamado "encadeamento" será explicado mais tarde).</p>

<p>Considere o seguinte exemplo:</p>

<pre class="brush: js">function A(x) {
   function B(y) {
      function C(z) {
         alert(x + y + z);
      }
      C(3);
   }
   B(2);
}
A(1); // Exibe um alerta com o valor 6 (1 + 2 + 3)
</pre>

<p>Neste exemplo, <code>C</code> acessa <code>y</code> do <code>B</code> e <code>x</code> do <code>A</code>. Isso pode ser feito porque:</p>

<ol>
 <li>B forma uma <em>closure</em> incluindo <code>A</code>, isto é, <code>B</code> pode acessar argumentos e variáveis de <code>A</code>.</li>
 <li>C forma uma <em>closure </em>incluindo <code>B</code>.</li>
 <li> Devido a closure <code>B</code> inclui <code>A</code>, a <em>closure</em> <code>C</code> inclui <code>A</code>, <code>C</code> pode acessar tanto argumentos e variáveis de <code>B</code> como de <code>A</code>. Em outras palavras, <code>C</code> <em>encadeia </em>o escopo de <code>B</code> e <code>A</code>, nesta ordem.</li>
</ol>

<p>O inverso, no entanto, não é verdadeiro. <code>A</code> não pode acessar <code>C</code>, porque <code>A</code> não pode acessar qualquer argumento ou variável de <code>B</code>. Assim, <code>C</code> é privado somente a <code>B</code>.</p>

<h3 id="Name_conflicts" name="Name_conflicts">Conflitos de nome</h3>

<p>Quando dois argumentos ou variáveis nos escopos da <em>closure</em> tem o mesmo nome, há um <em>conflito de nome</em>. Mas escopos internos tem prioridade, por isso o escopo mais interno tem a maior prioridade, enquanto que o escopo mais externo tem a menor. Esta é a cadeia de escopo. O primeiro da cadeia é o escopo mais interno, e o último é o escopo mais externo. Considere o seguinte:</p>

<pre class="brush: js">function fora() {
   var x = 10;
   function dentro(x) {
      return x;
   }
   return dentro;
}
result = fora()(20); // retorna 20 em vez de 10
</pre>

<p>O  conflito de nome acontece na declaração <code>return x</code> e está entre o parâmetro <code>x</code> de <code>dentro</code> e a variável <code>x</code> de <code>fora</code>. A cadeia de escopo aqui é {<code>dentro</code>, <code>fora</code>, objeto global}. Por isso o <code>x</code> de <code>dentro</code> tem precedência sobre o <code>x</code> de <code>fora</code>, e 20 (<code>x</code> de <code>dentro</code>) é retornado em vez de 10 (<code>x</code> de fora).</p>

<h2 id="Closures" name="Closures">Closures</h2>

<p><em>Closures </em>são um dos recursos mais poderosos de JavaScript. JavaScript permite o aninhamento de funções e garante acesso completo à função interna a todas as variáveis e funções definidas dentro da função externa (e todas as outras variáveis e funções que a função externa tem acesso). No entanto, a função externa não tem acesso às variáveis e funções definidas dentro da função interna. Isto proporciona uma espécie de segurança para as variáveis da função interna. Além disso, uma vez  que a função interna tem acesso ao escopo da função externa, as variáveis e funções definidas na função externa vão durar na memória mais do que a própria função externa, isto se a função interna permanecer na memória mais tempo do que a função externa. Uma <em>closure</em> é criada quando a função interna é de alguma forma disponibilizada para qualquer escopo fora da função externa.</p>

<pre class="brush: js">var pet = function(nome) {          // A função externa define uma variável "nome"
      var getNome = function() {
        return nome;                // A função interna tem acesso à variável "nome"  da função externa
      }

      return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
    },
    myPet = pet("Vivie");

myPet();                            // Retorna "Vivie"
</pre>

<p>Ela pode ser  mais complexa que o código acima. Um objeto contendo métodos para manipular as variáveis da função externa pode ser devolvida.</p>

<pre class="brush: js">var criarPet = function(nome) {
  var sex;

  return {
    setNome: function(newNome) {
      nome = newNome;
    },

    getNome: function() {
      return nome;
    },

    getSex: function() {
      return sex;
    },

    setSex: function(newSex) {
      if(typeof newSex == "string" &amp;&amp; (newSex.toLowerCase() == "macho" || newSex.toLowerCase() == "fêmea")) {
        sex = newSex;
      }
    }
  }
}

var pet = criarPet("Vivie");
pet.getNome();                  // Vivie

pet.setNome("Oliver");
pet.setSex("macho");
pet.getSex();                   // macho
pet.getNome();                  // Oliver
</pre>

<p>Nos códigos acima, a variável <code>nome</code> da função externa é acessível para as funções internas, e não há nenhuma outra maneira para acessar as variáveis internas, exceto pelas funções internas. As variáveis internas da função interna atuam como armazenamento seguro para as funções internas. Elas armazenam "persistentes", mas seguros, os dados com os quais as funções internas irão trabalhar. As funções não tem  que ser atribuídas a uma variável, ou ter um nome.</p>

<pre class="brush: js">var getCode = (function(){
  var secureCode = "0]Eal(eh&amp;2";    // Um código que não queremos que pessoas de fora sejam capazes de modificar

  return function () {
    return secureCode;
  };
})();

getCode();    // Retorna o secureCode
</pre>

<p>Há, no entanto, uma série de armadilhas que se deve ter cuidado ao usar closures. Se uma função fechada define uma variável com o mesmo nome de uma variável em um escopo externo, não há nenhuma maneira de se referir para a variável em um escopo externo novamente.</p>

<pre class="brush: js">var createPet = function(nome) {  // Função externa define uma variável chamada "nome"
  return {
    setNome: function(nome) {    // Função fechada define uma variável chamada "nome"
      nome = nome;               // ??? Como podemos acessar o "nome" definido pela função externa ???
    }
  }
}
</pre>

<p>A palavra reservada <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this">this</a> é muito complicada em <em>closures,</em> elas têm de ser usadas com muito cuidado. O objeto ao que <code>this</code> se refere depende completamente de onde a função foi chamada, ao invés de onde ela foi definida.</p>

<h2 id="Using_the_arguments_object" name="Using_the_arguments_object">Usando objeto de argumentos</h2>

<p>Os argumentos de uma função são mantidos em um objeto do tipo array. Dentro de uma função, você pode endereçar os argumentos passados para ele conforme: </p>

<pre class="brush: js">arguments[i]
</pre>

<p>onde <code>i</code> é um número ordinal do argumento, começando com zero. Então, o primeiro argumento passado para a função seria <code>arguments[0]</code>. O número total de argumentos é indicado por <code>arguments.length</code>.</p>

<p>Usando o objeto <code>arguments</code>, você pode chamar a função com mais argumentos do que o formalmente declarado. Isso muitas vezes é útil se você não sabe de antemão quantos argumentos serão passados para a função. Você pode usar <code>arguments.length</code> para determinar a quantidade de argumentos passados para a função, e então acessar cada argumento usando o objeto <code>arguments</code>.</p>

<p>Por exemplo, considere uma função que concatena várias <em>strings</em>. O argumento formal para a função é uma <em>string</em> que especifica os caracteres que separam os itens para concatenar.  A função definida como segue:</p>

<pre class="brush: js">function myConcat(separador) {
   var result = "", // inicializa a lista
       i;
   // itera por meio de argumentos
   for (i = 1; i &lt; arguments.length; i++) {
      result += arguments[i] + separador;
   }
   return result;
}
</pre>

<p>Você pode passar qualquer quantidade de argumentos para esta função, e ela concatena cada argumento na <em>string</em> "list":</p>

<pre class="brush: js">// retorna "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// retorna "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// retorna "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
</pre>

<div class="note">
<p>Nota: A variável <code>arguments</code> é "como um array", mas não é um array. Ela é como um array pois possui um índice numerado e a propriedade <code>length</code>. No entanto, não possui todos os métodos de manipulação de array. </p>
</div>

<p>Veja objeto {{jsxref("Function")}} na referência do JavaScript para maiores informações.</p>

<h2 id="Function_parameters" name="Function_parameters">Parâmetros de função</h2>

<p>Começando com ECMAScript 6, há dois tipos novos de parâmetros: parâmetros padrão e parâmetros rest.</p>

<h3 id="Parâmetros_padrão">Parâmetros padrão</h3>

<p>Em JavaScript, parâmetros padrões de funções são <code>undefined</code>. No entanto, em algumas situações pode ser útil definir um valor padrão diferente. Isto é onde os parâmetros padrão podem ajudar.</p>

<p>No passado, a estratégia geral para definir padrões era testar os valores de parâmetro no corpo da função e atribuir um valor se eles fossem <code>undefined</code>. Se, no exemplo a seguir, nenhum valor é fornecido para <code>b</code> na chamada, seu valor seria <code>undefined</code> ao avaliar <code>a*b</code> e a chamada para <code>multiplicar</code> retornaria <code>NaN</code>. No entanto, isso é pego com a segunda linha neste exemplo:</p>

<pre class="brush: js"><code>function multiplicar(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a*b;
}

multiplicar(5); // 5</code></pre>

<p>Com parâmetros padrão, a verificação no corpo da função não é mais necessária. Agora você pode simplesmente colocar <code>1</code> como valor padrão para <code>b</code> no campo de declaração de parâmetros:</p>

<pre class="brush: js"><code>function multiplicar(a, b = 1) {
  return a*b;
}

multiplicar(5); // 5</code></pre>

<p>Mais detalhes, consulte <a href="/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters">parâmetros padrão</a> na referência.</p>

<h3 id="Parâmetros_rest">Parâmetros rest</h3>

<p>A sintaxe de <a href="/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters">parâmetro rest</a> permite representar um número indefinido de argumentos como um <em>array</em>. No exemplo, usamos parâmetros <em>rest</em> para coletar argumentos do segundo argumento ao último. Então os multiplicamos pelo primeiro argumento. Neste exemplo é usado uma <em>arrow function</em>, que será introduzida na próxima seção.</p>

<pre class="brush: js"><code>function multiplicar(multiplicador, ...args) {
  return args.map(x =&gt; multiplicador * x);
}

var arr = multiplicar(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]</code></pre>

<h2 id="Arrow_functions" name="Arrow_functions">Funções de seta</h2>

<p>Uma <a href="/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions">expressão função de seta</a> (anteriormente conhecida como <strong>função de seta gorda</strong>) tem uma sintaxe pequena em comparação com a expressão de função e lexicalmente vincula o valor <code>this</code>. Funções de seta são sempre anônimas. Consulte também no blog hacks.mozilla.org no post: "<a href="https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/">ES6 In Depth: Arrow functions</a>".</p>

<p>Dois fatores influenciaram a introdução de funções de seta: funções mais curtas e o léxico <code>this</code>.</p>

<h3 id="Funções_curtas">Funções curtas</h3>

<p>Em alguns padrões funcionais, funções curtas são bem-vindas. Compare:</p>

<pre class="brush: js"><code>var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s =&gt; s.length );</code></pre>

<h3 id="Léxico_this">Léxico this</h3>

<p>Até as funções de seta, cada nova função definia seu próprio valor <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">this</a> (um novo objeto no caso de um construtor, indefinido em chamadas de função no modo estrito, o objeto de contexto se a função é chamada como um "método de objeto", etc.). Isso pode ser irritante com um estilo de programação orientada a objetos.</p>

<pre class="brush: js">function Pessoa() {      // O construtor Pessoa() define 'this' como sendo ele.
    this.idade = 0;
    setInterval(function crescer() {    // No modo não estrito, a função crescer define 'this'
            // como o objeto global, o que é diferente do 'this'
            // definido pelo construtor Pessoa().
            this.idade++;
     }, 1000);
}
var p = new Pessoa();</pre>

<p>No ECMAScript 3/5, este problema foi resolvido atribuindo o valor em <code>this</code> a uma variável que poderia ser fechada.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">Pessoa</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">var</span> self <span class="operator token">=</span> <span class="keyword token">this</span><span class="punctuation token">;</span> <span class="comment token">// Alguns preferem 'that' em vez de 'self'. </span>
                   <span class="comment token">// Escolha um e seja consistente.</span>
  self<span class="punctuation token">.</span></code><code>idade </code><code class="language-js"><span class="operator token">=</span> <span class="number token">0</span><span class="punctuation token">;</span>

  <span class="function token">setInterval</span><span class="punctuation token">(</span><span class="keyword token">function</span> crescer<span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// A chamada de retorno refere-se à variável 'self' na qual</span>
    <span class="comment token">// o valor é o objeto esperado.</span>
    self<span class="punctuation token">.</span></code><code>idade</code><code class="language-js"><span class="operator token">++</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span> <span class="number token">1000</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<p>Como alternativa, uma <a href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">função vinculada</a> poderia ser criada para que o valor da propriedade <code>this</code> seja passado para a função <code>crescer()</code>.</p>

<p>Funções de seta capturam o valor <code>this</code> do contexto delimitado, então o código a seguir funciona conforme o esperado.</p>

<pre><code>function Pessoa(){
  this.idade = 0;

  setInterval(() =&gt; {
    this.idade++; // propriedade |this|refere ao objeto pessoa
  }, 1000);
}

var p = new Pessoa();</code></pre>

<h2 id="Funções_pré-definidas">Funções pré-definidas</h2>

<p>JavaScript tem várias funções pré-definidas:</p>

<dl>
 <dt>{{jsxref("Global_Objects/eval", "eval()")}}</dt>
 <dd>
 <p>O método <code><strong>eval()</strong></code> avalia código JavaScript representado como uma <em>string</em>.</p>
 </dd>
 <dt>{{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline}}</dt>
 <dd>
 <p>O método <code><strong>uneval()</strong></code> cria uma representação de <em>string</em> do código-fonte de um  {{jsxref("Object")}}.</p>
 </dd>
 <dt>{{jsxref("Global_Objects/isFinite", "isFinite()")}}</dt>
 <dd>
 <p>A função global <code><strong>isFinite()</strong></code> determina se o valor passado é um número finito. Se necessário, o parâmetro é primeiro convertido para um número.</p>
 </dd>
 <dt>{{jsxref("Global_Objects/isNaN", "isNaN()")}}</dt>
 <dd>
 <p>A função <code><strong>isNaN()</strong></code> determina se um valor é {{jsxref("Global_Objects/NaN", "NaN")}} ou não. Nota: coerção dentro da função <code>isNaN</code> tem <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Description">regras interessantes</a>; você pode, alternativamente, querer usar {{jsxref("Number.isNaN()")}}, como definido no ECMAScript 6,  ou você pode usar <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a> </code>para determinar se o valor não é um número.</p>
 </dd>
 <dt>{{jsxref("Global_Objects/parseFloat", "parseFloat()")}}</dt>
 <dd>
 <p>A função <code><strong>parseFloat()</strong></code> analisa um argumento do tipo <em>string</em> e retorna um número de ponto flutuante.</p>
 </dd>
 <dt>{{jsxref("Global_Objects/parseInt", "parseInt()")}}</dt>
 <dd>
 <p>A função <code><strong>parseInt()</strong></code> analisa um argumento do tipo <em>string</em> e retorna um inteiro da base especificada (base do sistema numérico).</p>
 </dd>
 <dt>{{jsxref("Global_Objects/decodeURI", "decodeURI()")}}</dt>
 <dd>
 <p>A função <code><strong>decodeURI()</strong></code> decodifica uma <em>Uniform Resource Identifier</em> (URI) criada anteriormente por {{jsxref("Global_Objects/encodeURI", "encodeURI")}} ou por uma rotina similar.</p>
 </dd>
 <dt>{{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}</dt>
 <dd>
 <p>O método <code><strong>decodeURIComponent()</strong></code> decodifica um componente <em>Uniform Resource Identifier</em> (URI) criado anteriormente por {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} ou por uma rotina similar.</p>
 </dd>
 <dt>{{jsxref("Global_Objects/encodeURI", "encodeURI()")}}</dt>
 <dd>
 <p>O método <code><strong>encodeURI()</strong></code> codifica um Uniform Resource Identifier (URI), substituindo cada ocorrência de determinados caracteres por um, dois, três, ou quatro sequências de escape que representa a codificação UTF-8 do caractere (só serão quatro sequências de escape para caracteres compostos de dois caracteres "substitutos").</p>
 </dd>
 <dt>{{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}</dt>
 <dd>
 <p>O método <code><strong>encodeURIComponent()</strong></code> codifica um componente <em>Uniform Resource Identifier</em> (URI), substituindo cada ocorrência de determinados caracteres por um, dois, três, ou quatro sequências de escape que representa a codificação UTF-8 do caractere (só serão quatro sequências de escape para caracteres compostos de dois caracteres "substitutos").</p>
 </dd>
 <dt>{{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline}}</dt>
 <dd>
 <p>O método obsoleto <code><strong>escape()</strong></code> calcula uma nova <em>string</em> na qual certos caracteres foram substituídos por uma sequência de escape hexadecimal. Use {{jsxref("Global_Objects/encodeURI", "encodeURI")}} ou {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} em vez disso.</p>
 </dd>
 <dt>{{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline}}</dt>
 <dd>
 <p>O método obsoleto <code><strong>unescape()</strong></code> calcula uma nova <em>string</em> na qual sequências de escape hexadecimais são substituídas pelo caractere que ela representa. As sequências de escape podem ser introduzidas por uma função como {{jsxref("Global_Objects/escape", "escape")}}. Por <code>unescape()</code> estar obsoleto, use {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} ou {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} ao invés dele.</p>
 </dd>
</dl>

<p>{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}</p>
