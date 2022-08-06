---
title: Trabalhando com texto — strings em JavaScript
slug: Learn/JavaScript/First_steps/Strings
translation_of: Learn/JavaScript/First_steps/Strings
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}</div>

<p class="summary">Agora vamos dar atenção às strings - isto é como é chamado em programação qualquer parte de texto. Neste artigo nós veremos tudo que você realmente deve saber sobre strings quando está aprendendo JavaScript. Como criar, fazer citações e como juntar strings.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Computação básica, um entendimento básico de HTML e CSS, e sobre o que é JavaScript.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Ganhar familiaridade com o básico de strings em JavaScript.</td>
  </tr>
 </tbody>
</table>

<h2 id="O_poder_das_palavras">O poder das palavras</h2>

<p>Palavras são muito importante para humanos - elas são uma grande parte de como nos comunicamos. Desde que a Web é largamente baseada em texto, projetada para permitir humanos a comunicar e compartilhar infomação, isto é útil para nós termos controle sobre como apresentar isso. {{glossary("HTML")}} fornece estrutura e significado para nosso texto, {{glossary("CSS")}} nos permite estilizar precisamente ele, e JavaScript contem um número de funcionalidades para manipular strings, criar mensagens de boas-vindas customizadas, mostrando rótulos quando preciso, sorteando termos de acordo como desejado e muito mais.</p>

<p>Muitos dos programas que temos visto até agora no curso está envolvido em alguma parte com manipulação de string.</p>

<h2 id="Strings_—_O_básico">Strings — O básico</h2>

<p>Em um primeiro relance, strings são tratadas de forma parecida como números, mas quando vamos mais a fundo, você começa a ver algumas diferenças importantes. Vamos começar a entrar em linhas básicas no console para nos familiarizar. Nós vamos fornecer abaixo (você pode também <a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html">abrir isto no console</a> em uma guia ou janela separada, ou usar o  <a href="/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">console do navegador</a> se você preferir).</p>

<div class="hidden">
<h6 id="Código_oculto">Código oculto</h6>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;JavaScript console&lt;/title&gt;
    &lt;style&gt;
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0C323D;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0C323D;
        color: #809089;
      }

      div {
        clear: both;
      }

    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;


  &lt;/body&gt;

  &lt;script&gt;
    var geval = eval;
    function createInput() {
      var inputDiv = document.createElement('div');
      var inputPara = document.createElement('p');
      var inputForm = document.createElement('input');

      inputDiv.setAttribute('class','input');
      inputPara.textContent = '&gt;';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      if(document.querySelectorAll('div').length &gt; 1) {
        inputForm.focus();
      }

      inputForm.addEventListener('change', executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch(e) {
        var result = 'error — ' + e.message;
      }

      var outputDiv = document.createElement('div');
      var outputPara = document.createElement('p');

      outputDiv.setAttribute('class','output');
      outputPara.textContent = 'Result: ' + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = '0.5';

      createInput()
    }

    createInput();

  &lt;/script&gt;
&lt;/html&gt;</pre>
</div>

<p>{{ EmbedLiveSample('Hidden_code', '100%', 300, "", "", "hide-codepen-jsfiddle") }}</p>

<h3 id="Criando_uma_string">Criando uma string</h3>

<ol>
 <li>Para começar, digite as linhas seguintes:
  <pre class="brush: js">var string = 'The revolution will not be televised.';
string;</pre>
  Como fizemos com números, nós declaramos uma variável, inicializando-a com um valor string, e então retornamos o valor. A única diferença aqui é que quando escrevemos uma string, você precisa colocá-la entre aspas.</li>
 <li>Se você não fez isso, ou esqueceu uma das aspas, você recebeu um erro. Experimente digitar as linhas seguintes:
  <pre class="brush: js example-bad">var badString = This is a test;
var badString = 'This is a test;
var badString = This is a test';</pre>
  Estas linhas não funcionam porque todo texto sem aspas são interpretados como um nome de variável, propriedade do nome, palavra reservada ou algo assim. Se o navegador não puder encontrar, então um é erro é apresentado (ex.: "faltando; declaração anterior"). Se o navegador puder ver onde a string começa, mas não conseguir encontrar o fim, como indicado com as segundas aspas, é retornado um erro (com "string não terminada"). Se seu programa retorna tais erros, então volte e verifique todas suas strings para ter certeza que não faltam aspas.</li>
 <li>O seguinte funcionará se você definiu previamente a variável <code>string</code> - tente isto agora:
  <pre class="brush: js">var badString = string;
badString;</pre>
  <code>badString</code> é agora definido para ter o mesmo valor de <code>string</code>.</li>
</ol>

<h3 id="Aspas_simples_x_aspas_duplas">Aspas simples x aspas duplas</h3>

<ol>
 <li>Em JavaScript, você pode escolher aspas simples ou duplas para envolver suas strings. Ambas linhas abaixo funcionará bem:
  <pre class="brush: js">var sgl = 'Single quotes.';
var dbl = "Double quotes";
sgl;
dbl;</pre>
 </li>
 <li>Há poucas diferenças entre as duas, e qual você usar é de preferência pessoal. Você deve escolher uma e permanecer nela, entretanto; diferentes aspas no código pode ser confuso, especialmente se você usa diferentes aspas na mesma string! O seguinte retornará erro:
  <pre class="brush: js example-bad">var badQuotes = 'What on earth?";</pre>
 </li>
 <li>O navegador interpretará como a string não tivesse fechada, porque o outro tipo de aspas pode aparecer dentro da sua string. Por exemplo, ambos exemplos abaixo são okay:
  <pre class="brush: js">var sglDbl = 'Would you eat a "fish supper"?';
var dblSgl = "I'm feeling blue.";
sglDbl;
dblSgl;</pre>
 </li>
 <li>Entretanto, você não pode incluir o mesmo tipo de aspas dentro da sua string, se você usa para conter seu texto. O seguinte será um erro, como é confuso para o navegador onde a string termina:
  <pre class="brush: js example-bad">var bigmouth = 'I've got no right to take my place...';</pre>
  Isto nos leva muito bem ao nosso próximo assunto.</li>
</ol>

<h3 id="Caracteres_de_escape_na_string">Caracteres de escape na string</h3>

<p>Para corrigir o problema anterior, nós precisamos escapar o problema da aspa. Caracteres de escape significa que nós fazemos algo para ter certeza que eles são reconhecidos como texto, não parte do código. Em JavaScript, nós fazemos isso colocando uma barra invertida logo antes do caracter.Tente isso:</p>

<pre class="brush: js">var bigmouth = 'I\'ve got no right to take my place...';
bigmouth;</pre>

<p>Isto funciona bem. Você pode escapar outros caracteres do mesmo jeito, ex.: <code>\"</code>,  e há alguns códigos especiais também. Veja <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation">Notação de escape</a> para mais detalhes.</p>

<h2 id="Concatenando_strings">Concatenando strings</h2>

<ol>
 <li>Concatenar é uma palavra chique da programação que significa "colocar junto". Para colocar strings juntas em JavaScript, usamos o operador (+), o mesmo usamos para adicionar números, mas neste contexto é algo diferente. Vamos tentar este exemplo no console.
  <pre class="brush: js">var one = 'Hello, ';
var two = 'how are you?';
var joined = one + two;
joined;</pre>
  O resultado disso é uma variável chamada <code>joined</code>, que contém o valor "Hello, how are you?".</li>
 <li>No último exemplo, nós somente juntamos duas strings, mas você pode fazer quantas quiser, contanto que inclua um <code>+</code> entre cada uma.Experimente isso:
  <pre class="brush: js">var multiple = one + one + one + one + two;
multiple;</pre>
 </li>
 <li>Você pore usar um mix de variáveis e strings reais. Tente isso:
  <pre class="brush: js">var response = one + 'I am fine — ' + two;
response;</pre>
 </li>
</ol>

<div class="note">
<p><strong>Nota</strong>: Quando você coloca uma string atual no seu código dentro de aspas simples ou duplas, é chamada uma <strong>string literal</strong>.</p>
</div>

<h3 id="Concatenação_em_contexto">Concatenação em contexto</h3>

<p>Vamos dar uma olhada na concatenação em ação — aqui está um exemplo do curso anterior:</p>

<pre class="brush: html">&lt;button&gt;Pressione-me&lt;/button&gt;</pre>

<pre class="brush: js">var button = document.querySelector('button');

button.onclick = function() {
  var nome = prompt('Qual é o seu nome?');
  alert('Olá ' + nome + ', prazer em conhecê-lo!');
}</pre>

<p>{{ EmbedLiveSample('Concatenation_in_context', '100%', 50, "", "", "hide-codepen-jsfiddle") }}</p>

<p>Aqui estamos usando uma função {{domxref("Window.prompt()", "Window.prompt()")}} na linha 4, a qual pergunta ao usuário para responder uma questão via uma caixa de diálogo, então armazena o texto em uma variável — neste caso <code>nome</code>. Nós então usamos uma função {{domxref("Window.alert()", "Window.alert()")}} na linha 5 para mostrar outra caixa de diálogo contendo nossa string montada de duas strings literais e a variável <code>name</code>,via concatenação.</p>

<h3 id="Números_x_strings">Números x strings</h3>

<ol>
 <li>Então o que acontece quando tentamos adicionar (ou concatenar) uma string e um número? Vamos tentar isso no console:
  <pre class="brush: js">'Front ' + 242;
</pre>
  Você pode esperar um erro disto, mas funciona correto. Tentando representar  uma string como um número, realmente não faz sentido. Mas representando um número como string, faz. Então o navegador espertamente converte o número em string e concatena as duas.</li>
 <li>Você pode fazer isto até com dois números — você pode forçar um número a ser string colocando ele entre aspas. Experimente o seguinte (nós estamos usando o operador <code>typeof</code> para checar o que a variável é, se um número ou string):
  <pre class="brush: js">var myDate = '19' + '67';
typeof myDate;</pre>
 </li>
 <li>Se você tem uma variável numérica que precisa converter em string, mas não mudar completamente, ou uma string e quer converter em número, você pode usar a construção seguinte:
  <ul>
   <li>O objeto {{jsxref("Number")}} converterá qualquer coisa passada em um número, se for possível. Tente o seguinte:
    <pre class="brush: js">var myString = '123';
var myNum = Number(myString);
typeof myNum;</pre>
   </li>
   <li>Por outro lado, todo número tem um método chamado <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString">toString()</a></code> que converterá para a string equivalente. Tente isto:
    <pre class="brush: js">var myNum = 123;
var myString = myNum.toString();
typeof myString;</pre>
   </li>
  </ul>
  Estas construções podem ser bem úteis em algumas situações. Por exemplo, se o usuário colocar um número em um campo de texto, isso será uma string. Entretanto, se você quiser adicionar este número a algo, você precisa que seja um número, então você pode passar isto através do <code>Number()</code> para poder manipular.Nós fizemos exatamente isto no nosso <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L61">Number Guessing Game, in line 61</a>.</li>
</ol>

<h2 id="Conclusão">Conclusão</h2>

<p>Então isto é o basico sobre strings em JavaScript. No próximo artigo nós iremos continuar daqui, vendo alguns métodos de construção de strings disponíveis em JavaScript e como nós podemos usá-los para manipular nossa string da forma como quisermos.</p>

<p>{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}</p>



<h2 id="Neste_módulo">Neste módulo</h2>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript">O que é JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/A_first_splash">Um primeiro mergulho em JavaScript</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong">O que deu errado? Solução de erros em JavaScript</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables">Armazenando a informação que você precisa — Variáveis</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math">Matemática básica em JavaScript — números e operadores</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings">Manipulando texto — strings em JavaScript</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods">Métodos úteis de strings</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays">Arrays</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator">Avaliação: gerador de história boba</a></li>
</ul>
