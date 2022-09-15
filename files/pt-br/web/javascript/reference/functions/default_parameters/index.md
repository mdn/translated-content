---
title: Parâmetros Predefinidos
slug: Web/JavaScript/Reference/Functions/Default_parameters
tags:
  - ECMA2015
  - ECMAScript6
  - Function
  - Functions
  - Função
  - Funções
  - JavaScript
translation_of: Web/JavaScript/Reference/Functions/Default_parameters
original_slug: Web/JavaScript/Reference/Functions/Parametros_Predefinidos
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong>Os parâmetros predefinidos de uma função</strong> permitem que parâmetros regulares sejam inicializados com com valores iniciais caso <code>undefined</code> ou nenhum valor seja passado.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">function [nome]([<em>param1</em>[ = valorPredefinido1 ][, ..., <em>paramN</em>[ = valorPredefinidoN ]]]) {
   instruções
}
</pre>

<h2 id="Descrição">Descrição</h2>

<p>Em JavaScript, os parâmetros de funções tem <code>{{jsxref("undefined")}}</code> como valor predefinido. Contudo, em alguns casos pode ser útil utilizar algum outro valor. É nesta situação em que os parâmetros predefinidos podem ser úteis.</p>

<p>No passado, a estratégia de definir valores padrão para parâmetros era testar os valores do parâmetros no corpo da função e atribuir um valor se este for <strong><code>undefined</code>. </strong>No exemplo a seguir, se nenhum valor for fornecido para <strong>b </strong>na chamada, este valor será <code><strong>undefined</strong></code>, quando <code>a*b</code> for calculado resultaria em <code>NaN</code>. No entanto, isto é capturado na segunda linha definindo um valor padrão para b:</p>

<pre class="brush: js notranslate">function multiply(a, b) {
  b = (typeof b !== 'undefined') ? b : 1;

  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5
</pre>

<p>Com o parâmetros predefinidos a checagem no corpo da função nao é mais necessária. Agora você pode simplesmente colocar 1 como valor padrão para <code>b</code> na declaração da função:</p>

<pre class="brush: js notranslate">function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5</pre>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Passando_undefined_vs._outros_valores_falsy">Passando <code>undefined</code> vs. outros valores "falsy"</h3>

<p>Na segunda chamada aqui, mesmo se o segundo argumento é definido explicitamente como <code>undefined</code> (com exceção de <code>null</code>) quando chamado, o valor para o argumento <code>num</code> será o padrão.</p>

<pre class="notranslate"><code>function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' (num é definido para 1)
test(undefined); // 'number' (num é definido para 1 também)

// teste com outros values "falsy":
test('');        // 'string' (num é definido para '')
test(null);      // 'object' (num é definido para null)</code></pre>

<h3 id="Avaliado_em_tempo_de_chamada">Avaliado em tempo de chamada</h3>

<p>Os parâmetros predefinidos são avaliados no momento da chamada da função, então diferente de ex.: Python, um novo objeto é criado cada vez que a funçao é chamada.</p>

<pre class="brush: js notranslate">function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); //[1]
append(2); //[2], not [1, 2]

</pre>

<p>Este mesmo comportamento é aplicado para funções e variáveis:</p>

<pre class="brush: js notranslate">function callSomething(thing = something()) { return thing }

function something(){
  return "sth";
}

callSomething();  //sth</pre>

<h3 id="Parâmetros_predefinidos_estão_disponíveis_para_os_parâmetros_seguintes_à_sua_definição">Parâmetros predefinidos estão disponíveis para os parâmetros seguintes à sua definição</h3>

<p>Parâmetros que já foram avaliados ficam disponíveis para uso para os parâmetros seguintes:</p>

<pre class="brush: js notranslate">function singularAutoPlural(singular, plural = singular+"s",
                            rallyingCry = plural + " ATTACK!!!") {
  return [singular, plural, rallyingCry ];
}

//["Gecko","Geckos", "Geckos ATTACK!!!"]
singularAutoPlural("Gecko");

//["Fox","Foxes", "Foxes ATTACK!!!"]
singularAutoPlural("Fox","Foxes");

//["Deer", "Deer", "Deer ... change."]
singularAutoPlural("Deer", "Deer", "Deer peaceably and respectfully
   petition the government for positive change.")
</pre>

<p>Esta funcionalidade torna-se uma maneira direta e demonstra quantos casos extremos são manipulados.</p>

<pre class="brush: js notranslate">function go() {
  return ":P"
}

function withDefaults(a, b = 5, c = b, d = go(), e = this,
                      f = arguments, g = this.value) {
  return [a,b,c,d,e,f,g];
}
function withoutDefaults(a, b, c, d, e, f, g){
  switch(arguments.length){
    case 0:
      a
    case 1:
      b = 5
    case 2:
      c = b
    case 3:
      d = go();
    case 4:
      e = this
    case 5:
      f = arguments
    case 6:
      g = this.value;
    default:
  }
  return [a,b,c,d,e,f,g];
}

withDefaults.call({value:"=^_^="});
// [undefined, 5, 5, ":P", window, arguments, "=^_^="]


withoutDefaults.call({value:"=^_^="});
// [undefined, 5, 5, ":P", window, arguments, "=^_^="]
</pre>

<h3 id="Funções_definidadas_dentro_do_corpo_da_função">Funções definidadas dentro do corpo da função</h3>

<p>Introduzido no Gecko 33 {{geckoRelease(33)}}. Funções declaradas no corpo da função não podem ser referenciada dentro de parâmetos padrão e lançará um {{jsxref("ReferenceError")}} (atualmente um {{jsxref("TypeError")}} no SpiderMonkey, veja {{bug(1022967)}}). Parâmetros padrão são sempre executados primeiro, declarações de funções dentro do corpo de outra função são avaliadas depois.</p>

<pre class="brush: js notranslate">// Não funciona! Throws ReferenceError.
function f(a = go()) {
  function go(){return ":P"}
}
</pre>

<h3 id="Parâmetros_sem_valor_padrão_depois_de_parâmetros_com_valores_padrão">Parâmetros sem valor padrão depois de parâmetros com valores padrão</h3>

<p>Antes do Gecko 26 {{geckoRelease(26)}}, o seguinte código resultaria em um {{jsxref("SyntaxError")}}. Isto foi corrigido no {{bug(777060)}} e funciona como esperado em versões posteriores:</p>

<pre class="brush: js notranslate">function f(x=1, y) {
  return [x, y];
}

f(); // [1, undefined]
</pre>

<h3 id="Parâmetro_desestruturado_com_valores_padrões">Parâmetro desestruturado com valores padrões</h3>

<p>É possível definir valores padrões com a notação <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">destructuring assignment</a>:</p>

<pre class="brush: js notranslate">function f([x, y] = [1, 2], {z: z} = {z: 3}) {
  return x + y + z;
}

f(); // 6</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-function-definitions', 'Function Definitions')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Definição Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<div>
<p>{{Compat("javascript.functions.default_parameters")}}</p>
</div>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a class="external" href="http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values" rel="external">Original proposal at ecmascript.org</a></li>
</ul>
