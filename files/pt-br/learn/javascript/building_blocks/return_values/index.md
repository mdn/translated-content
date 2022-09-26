---
title: Valores de retorno de função
slug: Learn/JavaScript/Building_blocks/Return_values
translation_of: Learn/JavaScript/Building_blocks/Return_values
original_slug: Aprender/JavaScript/Elementos_construtivos/Return_values
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}</div>

<p class="summary">Há um último conceito essencial para discutirmos neste curso, para fechar nossa visão das funções — valores de retorno. Algumas funções não retornam um valor significativo após a conclusão, mas outras o fazem, e é importante entender quais são seus valores, como utilizá-los em seu código e como fazer com que suas próprias funções personalizadas retornem valores úteis. Nós vamos cobrir tudo isso abaixo.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>
    <p>Conhecimento básico de internet, compreenção básica de HTML e CSS, <a href="/en-US/docs/Learn/JavaScript/First_steps">JavaScript primeiros passos</a>, <a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions">Funções — reutilizando blocos de código</a>.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Entender os valores de retorno de uma função, e como utilizá-los</td>
  </tr>
 </tbody>
</table>

<h2 id="Quais_são_os_valores_de_retorno">Quais são os valores de retorno?</h2>

<p><strong>Valores de retorno</strong> são exatamente como soam — valores retornados pela função quando são concluídos. Você já conheceu os valores de retorno várias vezes, embora possa não ter pensado neles explicitamente. Vamos voltar para algum código familiar:</p>

<pre class="brush: js">var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made</pre>

<p>Nós vimos exatamente este bloco de código em nosso primeiro artigo de função. Estamos invocando a função <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace">replace()</a> na string <code>myText</code> e passando a ela dois parâmetros — a substring para localizar e a substring para substituí-la. Quando essa função é concluída (termina a execução), ela retorna um valor, que é uma nova string com a substituição feita. No código acima, estamos salvando esse valor de retorno como o valor da variável  <code>newString</code>.</p>

<p>Se você observar a página de referência MDN da função de substituição, verá uma seção chamada <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Return_value">Valor de retorno</a>. É muito útil conhecer e entender quais valores são retornados por funções, portanto, tentamos incluir essas informações sempre que possível.</p>

<p>Algumas funções não retornam um valor de retorno como tal (em nossas páginas de referência, o valor de retorno é listado como <code>void</code> ou <code>undefined</code> em tais casos). Por exemplo, na <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html#L50">função displayMessage()</a> que criamos no artigo anterior, nenhum valor específico é retornado como resultado da função que está sendo chamada. Apenas faz uma caixa aparecer em algum lugar na tela — é isso!</p>

<p>Geralmente, um valor de retorno é usado onde a função é uma etapa intermediária em um cálculo de algum tipo. Você quer chegar a um resultado final, que envolve alguns valores. Esses valores precisam ser calculados por uma função, que retorna os resultados para que possam ser usados no próximo estágio do cálculo.</p>

<h3 id="Usando_valores_de_retorno_em_suas_próprias_funções">Usando valores de retorno em suas próprias funções</h3>

<p>Para retornar um valor de uma função personalizada, você precisa usar ... aguarde por isso ... a palavra-chave <a href="/en-US/docs/Web/JavaScript/Reference/Statements/return">return</a>. Vimos isso em ação recentemente em nosso exemplo <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html">random-canvas-circles.html</a>. Nossa função <code>draw()</code> desenha 100 círculos aleatórios em algum lugar em um HTML {{htmlelement("canvas")}}:</p>

<pre class="brush: js">function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i &lt; 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}</pre>

<p>Dentro de cada iteração de loop, três chamadas são feitas para a função <code>random()</code> , para gerar um valor aleatório para a coordenada x do círculo atual, coordenada y e raio, respectivamente. A função <code>random()</code> recebe um parâmetro — um número inteiro — e retorna um número aleatório inteiro entre 0 e esse número. Se parece com isso:</p>

<pre class="brush: js">function randomNumber(number) {
  return Math.floor(Math.random()*number);
}</pre>

<p>Isso pode ser escrito da seguinte maneira:</p>

<pre class="brush: js">function randomNumber(number) {
  var result = Math.floor(Math.random()*number);
  return result;
}</pre>

<p>Mas a primeira versão é mais rápida de escrever e mais compacta.</p>

<p>Estamos retornando o resultado do cálculo <code>Math.floor(Math.random()*number)</code> cada vez que a função é chamada. Esse valor de retorno aparece no ponto em que a função foi chamada e o código continua. Então, por exemplo, se nós rodássemos a seguinte linha:</p>

<pre class="brush: js">ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);</pre>

<p>e as três chamadas <code>random()</code> retornaram os valores 500, 200 e 35, respectivamente, a linha seria executada como se fosse isso:</p>

<pre class="brush: js">ctx.arc(500, 200, 35, 0, 2 * Math.PI);</pre>

<p>As chamadas de função na linha são executadas primeiro e seus valores de retorno substituem as chamadas de função, antes que a própria linha seja executada.</p>

<h2 id="Aprendizagem_ativa_nossa_própria_função_de_valor_de_retorno">Aprendizagem ativa: nossa própria função de valor de retorno</h2>

<p>Vamos escrever nossas próprias funções com valores de retorno.</p>

<ol>
 <li>Primeiro de tudo, faça uma cópia local do arquivo <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library.html">function-library.html</a> do GitHub. Esta é uma página HTML simples contendo um campo de texto {{htmlelement("input")}} e um parágrafo. Há também um elemento {{htmlelement("script")}} no qual armazenamos uma referência a ambos os elementos HTML em duas variáveis. Esta pequena página permitirá que você insira um número na caixa de texto e exiba diferentes números relacionados a ele no parágrafo abaixo.</li>
 <li>Vamos adicionar algumas funções úteis para este elemento <code>&lt;script&gt;</code>. Abaixo das duas linhas existentes de JavaScript, adicione as seguintes definições de função:
  <pre class="brush: js">function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  var x = num;
  while (x &gt; 1) {
    num *= x-1;
    x--;
  }
  return num;
}</pre>
  As funções <code>squared()</code> e <code>cubed()</code> são bastante óbvias — elas retornam o quadrado ou cubo do número dado como um parâmetro. A função <code>factorial()</code> retorna o  <a href="https://pt.wikipedia.org/wiki/Fatorial">fatorial</a> do número fornecido.</li>
 <li>Em seguida, vamos incluir uma maneira de imprimir informações sobre o número digitado na entrada de texto. Digite o seguinte manipulador de eventos abaixo das funções existentes:
  <pre class="brush: js">input.onchange = function() {
  var num = input.value;
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '.';
  }
}</pre>

  <p>Aqui estamos criando um manipulador de eventos <code>onchange</code> que é executado sempre que o evento de mudança é acionado na entrada de texto — ou seja, quando um novo valor é inserido na entrada de texto e enviado (insira um valor e pressione tab por exemplo). Quando essa função anônima é executada, o valor existente inserido na entrada é armazenado na variável <code>num</code>.</p>

  <p>Em seguida, fazemos um teste condicional — se o valor inserido não for um número, imprimiremos uma mensagem de erro no parágrafo. O teste analisa se a expressão <code>isNaN(num)</code> retorna true. Usamos a função <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN">isNaN()</a> para testar se o valor num não é um número — se for, retorna <code>true</code>, e, se não, <code>false</code>.</p>

  <p>Se o teste retorna <code>false</code>, o valor  <code>num</code> é um número, então imprimimos uma frase dentro do elemento de parágrafo informando o que é o quadrado, o cubo e o fatorial do número. A sentença chama as funções <code>squared()</code>, <code>cubed()</code>, e <code>factorial()</code> para obter os valores necessários.</p>
 </li>
 <li>Salve seu código, carregue-o em um navegador e experimente.</li>
</ol>

<div class="note">
<p><strong>Nota</strong>: Se você tiver problemas para fazer o exemplo funcionar, sinta-se à vontade para verificar seu código na <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library-finished.html">versão finalizada no GitHub</a> (<a href="http://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html">consulte também sua execução</a>), ou peça ajuda.</p>
</div>

<p>Neste ponto, gostaríamos que você escrevesse algumas funções e as adicionasse à biblioteca. Como sobre o quadrado ou raiz cúbica do número, ou a circunferência de um círculo com um raio de comprimento <code>num</code>?</p>

<p>Este exercício trouxe alguns pontos importantes além de ser um estudo sobre como usar a declaração de <code>return</code>. Além disso, temos:</p>

<ul>
 <li>Analisamos outro exemplo de como escrever erros em nossas funções. Geralmente, é uma boa ideia verificar se os parâmetros necessários foram fornecidos e, no tipo de dados correto, e se eles são opcionais, que algum tipo de valor padrão é fornecido para permitir isso. Desta forma, o seu programa terá menos probabilidade de lançar erros.</li>
 <li>Pense na ideia de criar uma biblioteca de funções. À medida que você avança na sua carreira de programação, você começará a fazer o mesmo tipo de coisas uma e outra vez. É uma boa idéia começar a manter sua própria biblioteca de funções utilitárias que você usa com muita frequência — você pode então copiá-las para o seu novo código, ou até mesmo aplicá-las a qualquer página HTML onde você precisar.</li>
</ul>

<h2 id="Conclusão">Conclusão</h2>

<p>Então, temos isso — funções são divertidas, muito úteis e, embora haja muito o que falar em relação à sua sintaxe e funcionalidade, bastante compreensíveis, dados os artigos certos para se estudar.</p>

<p>Se houver algo que você não entendeu, fique à vontade para ler o artigo novamente ou entre em <a href="/en-US/Learn#Contact_us">contato conosco</a> para pedir ajuda.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions">Funções detalhadas</a> — um guia detalhado cobrindo informações relacionadas a funções mais avançadas.</li>
 <li><a href="https://www.impressivewebs.com/callback-functions-javascript/">Funções de retorno de chamada em JavaScript</a> — um padrão JavaScript comum é passar uma função para outra função como um argumento, que é então chamado dentro da primeira função. Isso está um pouco além do escopo deste curso, mas vale a pena ser estudado em pouco tempo.</li>
</ul>

<p>{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals">Making decisions in your code — conditionals</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code">Looping code</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions">Functions — reusable blocks of code</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function">Build your own function</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Return_values">Function return values</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events">Introduction to events</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery">Image gallery</a></li>
</ul>
