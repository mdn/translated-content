---
title: Introdução a eventos
slug: Learn/JavaScript/Building_blocks/Events
tags:
  - Aprender
  - Artigo
  - Guía
  - Iniciante
  - JavaScript
  - Programando
  - eventos
translation_of: Learn/JavaScript/Building_blocks/Events
original_slug: Aprender/JavaScript/Elementos_construtivos/Events
---
<div>
<div>{{LearnSidebar}}</div>
</div>

<div>{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}</div>

<p class="summary">Eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma, se desejado. Por exemplo, se o usuário clica em um botão numa pagina web, você pode querer responder a esta ação mostrando na tela uma caixa de informações. Nesse artigo, nós iremos discutir sobre alguns conceitos importantes envolvendo eventos, e veremos como eles funcionam nos browsers. Isto não será algo cansativo para estudar; somente o que você precisar saber até agora.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Conhecimentos básicos em informática, conhecimento básico em HTML e CSS,  <a href="/en-US/docs/Learn/JavaScript/First_steps">JavaScript, primeiros passos</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Entender a teoria fundamentos dos eventos, como eles funcionam nos browsers, e como eventos podem ser diferentes dependendo do ambiente de desenvolvimento.</td>
  </tr>
 </tbody>
</table>

<h2 id="Aventuras_em_Série">Aventuras em Série</h2>

<p>Como mencionado acima, <strong>eventos </strong>são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo — o sistema irá disparar algum tipo de sinal quando o evento acontecer, além de prover um mecanismo pelo qual alguma ação automática possa ser executada (ou seja, rodar algum código) quando o evento ocorrer. Por exemplo, em um aeroporto, quando a pista está livre para um avião decolar, um sinal é repassado ao piloto, e como resultado, ele inicia a decolagem.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14077/MDN-mozilla-events-runway.png" style="display: block; margin: 0px auto;"></p>

<p>No caso da web, eventos são disparados dentro da janela do navegador, e tende a estarem anexados a algum item especifico nele — pode ser um único elemento, um conjunto de elementos, o HTML carregado na guia atual, ou toda a janela do navegador. Existem vários tipos diferentes de eventos que podem vir a acontecer, por exemplo:</p>

<ul>
 <li>O usuário clicando com o mouse sobre um certo elemento ou passando o cursor do mouse sobre um certo elemento.</li>
 <li>O usuário pressionando uma tecla do teclado.</li>
 <li>O usuário redimensionando ou fechando a janela do navegador.</li>
 <li>Uma pagina da web terminando de carregar.</li>
 <li>Um formulário sendo enviado.</li>
 <li>Um video sendo reproduzido, interrompido, ou terminando sua reprodução.</li>
 <li>Um erro ocorrendo.</li>
</ul>

<p>Você vai perceber com isso (e dando uma olhada no <a href="/en-US/docs/Web/Events">Event reference</a> MDN) que<strong> </strong>há uma <strong>série</strong> de eventos que podem  ser utilizados.</p>

<p>Cada evento disponivel possui um <strong>manipulador de eventos </strong>(event handler), que é um bloco de código (geralmente uma função JavaScript definida pelo usuário) que será executado quando o evento for disparado. Quando esse bloco de código é definido para rodar em resposta a um evento que foi disparado, nós dizemos que estamos <strong>registrando um manipulador de eventos</strong>. Note que manipuladores de eventos são, em alguns casos, chamados de <strong>ouvinte de eventos </strong>(event listeners) — <span id="result_box" lang="pt"><span>eles são praticamente intercambiáveis para nossos propósitos, embora estritamente falando, eles trabalhem juntos. Os ouvintes escutam o evento acontecendo, e o manipulador é o codigo que roda em resposta a este acontecimento.</span></span></p>

<div class="note">
<p><strong>Nota</strong>: É importante notar que eventos web não são parte do core da linguagem JavaScript — elas são definidas como parte das APIs JavaScript incorporadas ao navegador.</p>
</div>

<h3 id="Um_exemplo_simples">Um exemplo simples</h3>

<p>Vamos dar uma olhada em um simples exemplo para explicar o que nós queremos dizer aqui. Você já viu eventos e manipuladores de eventos sendo utilizados na maioria dos exemplos deste curso até agora, mas vamos recapitular somente para cimentar nosso conhecimento. No exemplo a seguir, nós temos um simples {{htmlelement("button")}} que quando pressionado, irá fazer com que o fundo mude para uma cor aleatória:</p>

<pre class="brush: html">&lt;button&gt;Change color&lt;/button&gt;</pre>

<div class="hidden">
<pre class="brush: css">button { margin: 10px };</pre>
</div>

<p>O JavaScript seria algo como:</p>

<pre class="brush: js">var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}</pre>

<p>Nesse código, nós guardamos uma referência ao botão dentro de uma variável chamada <code>btn</code>, usando a função {{domxref("Document.querySelector()")}}. Também definimos uma função que retorna um número aleatório. A terceira parte do código é o manipulador de eventos. A variável <code>btn</code> aponta para um elemento <code>&lt;button&gt;</code>, e esse tipo de objeto tem um número de eventos que podem ser disparados nele, assim sendo, manipuladores de eventos estão disponíveis.</p>

<p>Esse código rodará sempre que o evento de clique for disparado pelo elemento <code>&lt;button&gt;</code>, isto é, sempre que um usuário clicar nele.</p>

<p>Um exemplo de saída seria:</p>

<p>{{ EmbedLiveSample('A_simple_example', '100%', 200, "", "", "hide-codepen-jsfiddle") }}</p>

<h3 id="Não_são_apenas_paginas_da_web">Não são apenas paginas da web</h3>

<p>Outra coisa que vale mencionar a esse ponto é que eventos não são exclusivos ao JavaScript — muitas linguagens de programação possuem algum tipo de modelo de evento, e a maneira que elas funcionam irão, frequentemente, diferenciar-se da maneira que funciona em JavaScript. De fato, o modelo de evento no JavaScript para web pages difere dos outros modelos de evento do próprio JavaScript quando usados em outros ambientes.</p>

<p>Por exemplo, <a href="/en-US/docs/Learn/Server-side/Express_Nodejs">Node.js</a> é um interpretador de código JavaScript muito popular que permite desenvolvedores a usarem JavaScript para construir aplicações de rede e do lado do servidor. O <a href="https://nodejs.org/docs/latest-v5.x/api/events.html">Node.js event model</a> depende dos ouvintes para escutar eventos e emissores para emitir eventos periodicamente. — não parece tão diferente, mas o código é bem diferente, fazendo uso de funções como <code>on()</code> para registrar um ouvinte de evento e  <code>once()</code> para registrar um ouvinte de evento que cancela o registro depois de ter sido executado uma vez. Os <a href="https://nodejs.org/docs/latest-v8.x/api/http.html#http_event_connect">Documentos do evento de conexão HTTP</a> fornecem um bom exemplo de uso.</p>

<p>Como outro exemplo, agora você também pode usar o JavaScript para criar complementos entre navegadores — aprimoramentos da funcionalidade do navegador — usando uma tecnologia chamada <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions">WebExtensions</a>. O modelo de eventos é semelhante ao modelo de eventos da Web, mas um pouco diferente — as propriedades dos event listeners são camel-cased, onde cada palavra é iniciada com maiúsculas e unidas sem espaços (por exemplo, <code>onMessage</code> em vez de <code>onmessage</code>), e precisam ser combinadas com a função <code>addListener</code>. Veja a página <a href="/en-US/Add-ons/WebExtensions/API/runtime/onMessage#Examples">runtime.onMessage</a> para um exemplo.</p>

<p>Você não precisa entender nada sobre outros ambientes nesse estágio do aprendizado; nós só queríamos deixar claro que os eventos podem diferir em diferentes ambientes de programação.</p>

<h2 id="Formas_de_usar_eventos_da_web">Formas de usar eventos da web</h2>

<p>Há várias maneiras diferentes de adicionar código de ouvinte de evento a páginas da Web para que ele seja executado quando o evento associado for disparado. Nesta seção, revisaremos os diferentes mecanismos e discutiremos quais devem ser usados.</p>

<h3 id="Propriedades_do_manipulador_de_eventos">Propriedades do manipulador de eventos</h3>

<p>Essas são as propriedades que existem para conter o código do manipulador de eventos que vimos com mais frequência durante o curso. Voltando ao exemplo acima:</p>

<pre class="brush: js">var btn = document.querySelector('button');

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}</pre>

<p>A propriedade <code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onclick">onclick</a></code> é a propriedade do manipulador de eventos que está sendo usada nesta situação. É essencialmente uma propriedade como qualquer outra disponível no botão (por exemplo, <code><a href="/en-US/docs/Web/API/Node/textContent">btn.textContent</a></code>, ou <code><a href="/en-US/docs/Web/API/HTMLElement/style">btn.style</a></code>), mas é um tipo especial — quando você configura para ser igual a algum código, esse código será executado quando o evento é acionado no botão.</p>

<p>Você também pode definir a propriedade handler para ser igual a um nome de função nomeado (como vimos em <a href="/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function">Construa sua própria função</a>). O seguinte funcionaria da mesma forma:</p>

<pre class="brush: js">var btn = document.querySelector('button');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;</pre>

<p>Há muitas propriedades diferentes de manipulador de eventos disponíveis. Vamos fazer um experimento.</p>

<p>Primeiro de tudo, faça uma cópia local do <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerproperty.html">random-color-eventhandlerproperty.html</a>, e abra-o no seu navegador. É apenas uma cópia do exemplo de cor aleatória simples com o qual já estamos jogando neste artigo. Agora tente alterar <code>btn.onclick</code> para os seguintes valores diferentes, por sua vez, e observando os resultados no exemplo:</p>

<ul>
 <li><code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onfocus">btn.onfocus</a></code> e <code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onblur">btn.onblur</a></code> — A cor mudará quando o botão estiver focado e fora de foco (tente pressionar a guia para aba no botão e desligar novamente). Eles geralmente são usados para exibir informações sobre como preencher campos de formulário quando eles estão focalizados ou exibir uma mensagem de erro se um campo de formulário tiver acabado de ser preenchido com um valor incorreto.</li>
 <li><code><a href="/en-US/docs/Web/API/GlobalEventHandlers/ondblclick">btn.ondblclick</a></code> — A cor só será alterada quando for clicada duas vezes.</li>
 <li><code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onkeypress">window.onkeypress</a></code>, <code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onkeydown">window.onkeydown</a></code>, <code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onkeyup">window.onkeyup</a></code> — A cor mudará quando uma tecla for pressionada no teclado. <code>keypress</code> refere-se a um pressionamento geral (botão para baixo e depois para cima), enquanto <code>keydown</code> e <code>keyup</code> refere-se apenas a parte do pressionamento da tecla para baixo e de soltar a tecla para cima, respectivamente. Note que não funciona se você tentar registrar este manipulador de eventos no próprio botão — nós tivemos que registrá-lo no objeto <a href="/en-US/docs/Web/API/Window">window</a>, que representa toda a janela do navegador.</li>
 <li><code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onmouseover">btn.onmouseover</a></code> e <code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onmouseout">btn.onmouseout</a></code> — A cor mudará quando o ponteiro do mouse for movido, de modo que comece a passar o mouse sobre o botão, ou quando parar de passar o mouse sobre o botão e sair dele, respectivamente.</li>
</ul>

<p>Alguns eventos são muito gerais e estão disponíveis praticamente em qualquer lugar (por exemplo, um manipulador  <code>onclick</code> pode ser registrado em quase qualquer elemento), enquanto alguns são mais específicos e úteis apenas em certas situações (por exemplo, faz sentido usar <a href="/en-US/docs/Web/API/GlobalEventHandlers/GlobalEventHandlers.onplay">onplay</a> apenas em elementos específicos, como {{htmlelement("video")}}).</p>

<h3 id="Manipuladores_de_eventos_in-line_-_não_use_esses">Manipuladores de eventos in-line - não use esses</h3>

<p>Você também pode ver um padrão como este em seu código:</p>

<pre class="brush: html">&lt;button onclick="bgChange()"&gt;Press me&lt;/button&gt;
</pre>

<pre class="brush: js">function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}</pre>

<div class="note">
<p><strong>Nota</strong>:  Você pode encontrar o <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerattributes.html">código fonte completo</a> para este exemplo no GitHub (também <a href="http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventhandlerattributes.html">veja isso executando em tempo real</a>).</p>
</div>

<p>O método mais antigo de registrar manipuladores de eventos encontrados na Web envolveu <strong>atributos HTML de manipulador de eventos</strong> (também conhecidos como <strong>manipuladores de eventos inline</strong>) como o mostrado acima — o valor do atributo é literalmente o código JavaScript que você deseja executar quando o evento ocorre. O exemplo acima chama uma função definida dentro de um elemento {{htmlelement("script")}} na mesma página, mas você também pode inserir JavaScript diretamente dentro do atributo, por exemplo:</p>

<pre class="brush: html">&lt;button onclick="alert('Hello, this is my old-fashioned event handler!');"&gt;Press me&lt;/button&gt;</pre>

<p>Você encontrará equivalentes de atributo HTML para muitas das propriedades do manipulador de eventos; no entanto, você não deve usá-los — eles são considerados uma prática ruim. Pode parecer fácil usar um atributo manipulador de eventos se você estiver apenas fazendo algo realmente rápido, mas eles se tornam rapidamente incontroláveis e ineficientes.</p>

<p>Para começar, não é uma boa ideia misturar o seu HTML e o seu JavaScript, pois é difícil analisar — manter seu JavaScript em um só lugar é melhor; se estiver em um arquivo separado, você poderá aplicá-lo a vários documentos HTML.</p>

<p>Mesmo em um único arquivo, os manipuladores de eventos in-line não são uma boa ideia. Um botão está OK, mas e se você tivesse 100 botões? Você teria que adicionar 100 atributos ao arquivo; isso rapidamente se tornaria um pesadelo de manutenção. Com JavaScript, você poderia facilmente adicionar uma função de manipulador de eventos a todos os botões da página, não importando quantos fossem, usando algo assim:</p>

<pre class="brush: js">var buttons = document.querySelectorAll('button');

for (var i = 0; i &lt; buttons.length; i++) {
  buttons[i].onclick = bgChange;
}</pre>

<div class="note">
<p><strong>Nota</strong>: Separar sua lógica de programação do seu conteúdo também torna seu site mais amigável aos mecanismos de pesquisa.</p>
</div>

<h3 id="addEventListener_e_removeEventListener">addEventListener() e removeEventListener()</h3>

<p>O mais novo tipo de mecanismo de evento é definido na Especificação de Eventos Nível 2 do <a href="https://www.w3.org/TR/DOM-Level-2-Events/">Document Object Model (DOM)</a>, que fornece aos navegadores uma nova função — <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code>. Isso funciona de maneira semelhante às propriedades do manipulador de eventos, mas a sintaxe é obviamente diferente. Poderíamos reescrever nosso exemplo de cor aleatória para ficar assim:</p>

<pre class="brush: js">var btn = document.querySelector('button');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);</pre>

<div class="note">
<p><strong>Nota</strong>: Você pode encontrar o <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-addeventlistener.html">código fonte completo</a> para este exemplo no GitHub (também <a href="http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-addeventlistener.html">veja isso executando em tempo real</a>).</p>
</div>

<p>Dentro da função <code>addEventListener()</code>, especificamos dois parâmetros — o nome do evento para o qual queremos registrar esse manipulador, e o código que compreende a função do manipulador que queremos executar em resposta a ele. Note que é perfeitamente apropriado colocar todo o código dentro da função <code>addEventListener()</code>, em uma função anônima, assim:</p>

<pre class="brush: js">btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});</pre>

<p>Esse mecanismo tem algumas vantagens sobre os mecanismos mais antigos discutidos anteriormente. Para começar, há uma função de contraparte, <code><a href="/en-US/docs/Web/API/EventTarget/removeEventListener">removeEventListener()</a></code>, que remove um listener adicionado anteriormente. Por exemplo, isso removeria o listener definido no primeiro bloco de código nesta seção:</p>

<pre class="brush: js">btn.removeEventListener('click', bgChange);</pre>

<p>Isso não é significativo para programas pequenos e simples, mas para programas maiores e mais complexos, pode melhorar a eficiência para limpar antigos manipuladores de eventos não utilizados. Além disso, por exemplo, isso permite que você tenha o mesmo botão executando ações diferentes em circunstâncias diferentes — tudo o que você precisa fazer é adicionar / remover manipuladores de eventos conforme apropriado.</p>

<p>Em segundo lugar, você também pode registrar vários manipuladores para o mesmo ouvinte. Os dois manipuladores a seguir não seriam aplicados:</p>

<pre class="brush: js">myElement.onclick = functionA;
myElement.onclick = functionB;</pre>

<p>Como a segunda linha sobrescreveria o valor de  <code>onclick</code> definido pelo primeiro. Isso funcionaria, no entanto:</p>

<pre class="brush: js">myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);</pre>

<p>Ambas as funções serão executadas quando o elemento for clicado.</p>

<p>Além disso, há vários outros recursos e opções poderosos disponíveis com esse mecanismo de eventos. Estes são um pouco fora do escopo deste artigo, mas se você quiser ler sobre eles, dê uma olhada nas páginas de referência <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code> e <code><a href="/en-US/docs/Web/API/EventTarget/removeEventListener">removeEventListener()</a></code>.</p>

<h3 id="Qual_mecanismo_devo_usar">Qual mecanismo devo usar?</h3>

<p>Dos três mecanismos, você definitivamente não deve usar os atributos do manipulador de eventos HTML — estas são desatualizadas e más práticas, como mencionado acima.</p>

<p>Os outros dois são relativamente intercambiáveis, pelo menos para usos simples:</p>

<ul>
 <li>As propriedades do manipulador de eventos têm menos poder e opções, mas melhor compatibilidade entre navegadores (sendo suportado desde o Internet Explorer 8). Você provavelmente deve começar com estes como você está aprendendo.</li>
 <li>Eventos DOM Nível 2 (<code>addEventListener()</code>, etc.) são mais poderosos, mas também podem se tornar mais complexos e menos bem suportados (suportados desde o Internet Explorer 9). Você também deve experimentá-los e tentar usá-los sempre que possível.</li>
</ul>

<p>As principais vantagens do terceiro mecanismo são que você pode remover o código do manipulador de eventos, se necessário, usando <code>removeEventListener()</code>, e você pode adicionar vários listeners do mesmo tipo aos elementos, se necessário. Por exemplo, você pode chamar <code>addEventListener('click', function() { ... })</code> em um elemento várias vezes, com diferentes funções especificadas no segundo argumento. Isso é impossível com as propriedades do manipulador de eventos porque qualquer tentativa subseqüente de definir uma propriedade sobrescreverá as anteriores, por exemplo:</p>

<pre class="brush: js">element.onclick = function1;
element.onclick = function2;
etc.</pre>

<div class="note">
<p><strong>Nota</strong>: Se você for chamado para oferecer suporte a navegadores anteriores ao Internet Explorer 8 em seu trabalho, poderá encontrar dificuldades, pois esses navegadores antigos usam modelos de eventos diferentes dos navegadores mais recentes. Mas não tenha medo, a maioria das bibliotecas JavaScript (por exemplo, <code>jQuery</code>) tem funções internas que abstraem as diferenças entre navegadores. Não se preocupe muito com isso neste estágio de sua jornada de aprendizado.</p>
</div>

<h2 id="Outros_conceitos_de_evento">Outros conceitos de evento</h2>

<p>Nesta seção, abordaremos brevemente alguns conceitos avançados que são relevantes para os eventos. Não é importante entendê-las totalmente neste momento, mas pode servir para explicar alguns padrões de código que você provavelmente encontrará ao longo do tempo.</p>

<h3 id="Objetos_de_evento">Objetos de evento</h3>

<p>Às vezes, dentro de uma função de manipulador de eventos, você pode ver um parâmetro especificado com um nome como <code>event</code>, <code>evt</code>, ou simplesmente <code>e</code>. Isso é chamado de <strong>event object</strong>, e é passado automaticamente para os manipuladores de eventos para fornecer recursos e informações extras. Por exemplo, vamos reescrever nosso exemplo de cor aleatória novamente:</p>

<pre class="brush: js">function bgChange(e) {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);</pre>

<div class="note">
<p><strong>Nota</strong>: Você pode encontrar o <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventobject.html">código fonte completo</a> para este exemplo no GitHub (também <a href="http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html">veja isso executando em tempo real</a>).</p>
</div>

<p>Aqui você pode ver que estamos incluindo um objeto de evento, <strong>e</strong>, na função, e na função definindo um estilo de cor de fundo em <code>e.target</code> — que é o próprio botão. A propriedade <code>target</code> do objeto de evento é sempre uma referência ao elemento em que o evento acabou de ocorrer. Portanto, neste exemplo, estamos definindo uma cor de fundo aleatória no botão, não na página.</p>

<div class="note">
<p><strong>Note</strong>: Você pode usar qualquer nome que desejar para o objeto de evento — você só precisa escolher um nome que possa ser usado para referenciá-lo dentro da função de manipulador de eventos. <code>e</code>/<code>evt</code>/<code>event</code> são mais comumente usados pelos desenvolvedores porque são curtos e fáceis de lembrar. É sempre bom manter um padrão.</p>
</div>

<p><code>e.target</code> é incrivelmente útil quando você deseja definir o mesmo manipulador de eventos em vários elementos e fazer algo com todos eles quando ocorre um evento neles. Você pode, por exemplo, ter um conjunto de 16 blocos que desaparecem quando são clicados. É útil poder sempre apenas definir a coisa para desaparecer como <code>e.target</code>, ao invés de ter que selecioná-lo de alguma forma mais difícil. No exemplo a seguir (veja <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/useful-eventtarget.html">useful-eventtarget.html</a> para o código-fonte completo; veja também a <a href="http://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html">execução ao vivo</a> aqui), criamos 16 elementos {{htmlelement("div")}} usando JavaScript. Em seguida, selecionamos todos eles usando {{domxref("document.querySelectorAll()")}}  e, em seguida, percorremos cada um deles, adicionando um manipulador onclick a cada um, de modo que uma cor aleatória seja aplicada a cada um deles quando clicados:</p>

<pre class="brush: js">var divs = document.querySelectorAll('div');

for (var i = 0; i &lt; divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}</pre>

<p>A saída é a seguinte (tente clicar em cima — divirta-se):</p>

<div class="hidden">
<h6 id="Hidden_example">Hidden example</h6>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Useful event target example&lt;/title&gt;
    &lt;style&gt;
      div {
        background-color: red;
        height: 100px;
        width: 25%;
        float: left;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script&gt;
      for (var i = 1; i &lt;= 16; i++) {
        var myDiv = document.createElement('div');
        document.body.appendChild(myDiv);
      }

      function random(number) {
        return Math.floor(Math.random()*number);
      }

      function bgChange() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        return rndCol;
      }

      var divs = document.querySelectorAll('div');

      for (var i = 0; i &lt; divs.length; i++) {
        divs[i].onclick = function(e) {
          e.target.style.backgroundColor = bgChange();
        }
      }
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
</div>

<p>{{ EmbedLiveSample('Hidden_example', '100%', 400, "", "", "hide-codepen-jsfiddle") }}</p>

<p>A maioria dos manipuladores de eventos que você encontrará apenas tem um conjunto padrão de propriedades e funções (métodos) disponíveis no objeto de evento (consulte a referência de objeto {{domxref("Event")}} para obter uma lista completa). Alguns manipuladores mais avançados, no entanto, adicionam propriedades especializadas contendo dados extras que precisam para funcionar. A <a href="/en-US/docs/Web/API/MediaRecorder_API">Media Recorder API</a>, por exemplo, tem um evento <code>dataavailable</code> que é acionado quando algum áudio ou vídeo é gravado e está disponível para fazer algo com (por exemplo, salvá-lo ou reproduzi-lo). O objeto de evento do manipulador correspondente <a href="/en-US/docs/Web/API/MediaRecorder/ondataavailable">ondataavailable</a> tem uma propriedade de dados disponível contendo os dados de áudio ou vídeo gravados para permitir que você acesse e faça algo com ele.</p>

<h3 id="Evitando_o_comportamento_padrão">Evitando o comportamento padrão</h3>

<p>Às vezes, você se deparará com uma situação em que deseja interromper um evento fazendo o que ele faz por padrão. O exemplo mais comum é o de um formulário da Web, por exemplo, um formulário de registro personalizado. Quando você preenche os detalhes e pressiona o botão Enviar, o comportamento natural é que os dados sejam enviados para uma página específica no servidor para processamento, e o navegador seja redirecionado para uma página de "mensagem de sucesso" de algum tipo (ou a mesma página, se outra não for especificada.)</p>

<p>O problema surge quando o usuário não submete os dados corretamente - como desenvolvedor, você deve interromper o envio para o servidor e fornecer uma mensagem de erro informando o que está errado e o que precisa ser feito para corrigir as coisas. Alguns navegadores suportam recursos automáticos de validação de dados de formulário, mas como muitos não oferecem isso, é recomendável não depender deles e implementar suas próprias verificações de validação. Vamos dar uma olhada em um exemplo simples.</p>

<p>Primeiro, um formulário HTML simples que requer que você digite seu primeiro e último nome:</p>

<pre class="brush: html">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="fname"&gt;First name: &lt;/label&gt;
    &lt;input id="fname" type="text"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="lname"&gt;Last name: &lt;/label&gt;
    &lt;input id="lname" type="text"&gt;
  &lt;/div&gt;
  &lt;div&gt;
     &lt;input id="submit" type="submit"&gt;
  &lt;/div&gt;
&lt;/form&gt;
&lt;p&gt;&lt;/p&gt;</pre>

<div class="hidden">
<pre class="brush: css">div {
  margin-bottom: 10px;
}
</pre>
</div>

<p>Agora algum JavaScript — aqui nós implementamos uma verificação muito simples dentro de um manipulador de evento onsubmit (o evento submit é disparado em um formulário quando é enviado) que testa se os campos de texto estão vazios. Se estiverem, chamamos a função <code><a href="/en-US/docs/Web/API/Event/preventDefault">preventDefault()</a></code> no objeto de evento — que interrompe o envio do formulário — e, em seguida, exibir uma mensagem de erro no parágrafo abaixo do nosso formulário para informar ao usuário o que está errado:</p>

<pre class="brush: js">var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}</pre>

<p>Obviamente, isso é uma validação de forma bastante fraca — ela não impediria o usuário de validar o formulário com espaços ou números inseridos nos campos, por exemplo — mas está tudo bem, por exemplo. A saída é a seguinte:</p>

<p>{{ EmbedLiveSample('Preventing_default_behavior', '100%', 140, "", "", "hide-codepen-jsfiddle") }}</p>

<div class="note">
<p><strong>Nota</strong>: para o código fonte completo, veja <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/preventdefault-validation.html">preventdefault-validation.html</a> (também veja isso <a href="http://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html">executando em tempo real</a> aqui.)</p>
</div>

<h3 id="Borbulhamento_e_captura_de_eventos">Borbulhamento e captura de eventos</h3>

<p>O assunto final a ser abordado aqui é algo que você não encontrará com frequência, mas pode ser uma dor real se você não entender. Borbulhamento e captura de eventos são dois mecanismos que descrevem o que acontece quando dois manipuladores do mesmo tipo de evento são ativados em um elemento. Vamos dar uma olhada em um exemplo para facilitar isso — abra o exemplo show-video-box.html em uma nova guia (e o <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html">código-fonte</a> em outra guia). Ele também está disponível ao vivo abaixo:</p>

<div class="hidden">
<h6 id="Hidden_video_example">Hidden video example</h6>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Show video box example&lt;/title&gt;
    &lt;style&gt;
      div {
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 480px;
        height: 380px;
        border-radius: 10px;
        background-color: #eee;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1));
      }

      .hidden {
        left: -50%;
      }

      .showing {
        left: 50%;
      }

      div video {
        display: block;
        width: 400px;
        margin: 40px auto;
      }

    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;button&gt;Display video&lt;/button&gt;

    &lt;div class="hidden"&gt;
      &lt;video&gt;
        &lt;source src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.mp4" type="video/mp4"&gt;
        &lt;source src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.webm" type="video/webm"&gt;
        &lt;p&gt;Your browser doesn't support HTML5 video. Here is a &lt;a href="rabbit320.mp4"&gt;link to the video&lt;/a&gt; instead.&lt;/p&gt;
      &lt;/video&gt;
    &lt;/div&gt;

    &lt;script&gt;

      var btn = document.querySelector('button');
      var videoBox = document.querySelector('div');
      var video = document.querySelector('video');

      btn.onclick = function() {
        displayVideo();
      }

      function displayVideo() {
        if(videoBox.getAttribute('class') === 'hidden') {
          videoBox.setAttribute('class','showing');
        }
      }

      videoBox.addEventListener('click',function() {
        videoBox.setAttribute('class','hidden');
      });

      video.addEventListener('click',function() {
        video.play();
      });

    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
</div>

<p>{{ EmbedLiveSample('Hidden_video_example', '100%', 500, "", "", "hide-codepen-jsfiddle") }}</p>

<p>Este é um exemplo bastante simples que mostra e oculta um {{htmlelement("div")}} com um elemento {{htmlelement("video")}} dentro dele:</p>

<pre class="brush: html">&lt;button&gt;Display video&lt;/button&gt;

&lt;div class="hidden"&gt;
  &lt;video&gt;
    &lt;source src="rabbit320.mp4" type="video/mp4"&gt;
    &lt;source src="rabbit320.webm" type="video/webm"&gt;
    &lt;p&gt;Your browser doesn't support HTML5 video. Here is a &lt;a href="rabbit320.mp4"&gt;link to the video&lt;/a&gt; instead.&lt;/p&gt;
  &lt;/video&gt;
&lt;/div&gt;</pre>

<p>Quando o {{htmlelement("button")}} é clicado, o vídeo é exibido, alterando o atributo de classe em <code>&lt;div&gt;</code> de <code>hidden</code> para <code>showing</code> (o CSS do exemplo contém essas duas classes, que posicione a caixa fora da tela e na tela, respectivamente):</p>

<pre class="brush: js">btn.onclick = function() {
  videoBox.setAttribute('class', 'showing');
}</pre>

<p>Em seguida, adicionamos mais alguns manipuladores de eventos <code>onclick</code> — o primeiro ao <code>&lt;div&gt;</code> e o segundo ao <code>&lt;video&gt;</code>. A ideia é que, quando a área do <code>&lt;div&gt;</code> fora do vídeo for clicada, a caixa deve ser ocultada novamente; quando o vídeo em si é clicado, o vídeo deve começar a tocar.</p>

<pre>videoBox.onclick = function() {
  videoBox.setAttribute('class', 'hidden');
};

video.onclick = function() {
  video.play();
};</pre>

<p>Mas há um problema — atualmente, quando você clica no vídeo, ele começa a ser reproduzido, mas faz com que o <code>&lt;div&gt;</code> também fique oculto ao mesmo tempo. Isso ocorre porque o vídeo está dentro do <code>&lt;div&gt;</code> — é parte dele — portanto, clicar no vídeo realmente executa os dois manipuladores de eventos acima.</p>

<h4 id="Borbulhando_e_capturando_explicados">Borbulhando e capturando explicados</h4>

<p>Quando um evento é acionado em um elemento que possui elementos pai (por exemplo, o {{htmlelement("video")}} no nosso caso), os navegadores modernos executam duas fases diferentes — a fase de  <strong>captura </strong>e a fase de <strong>bubbling</strong>.</p>

<p>Na fase de <strong>captura</strong>:</p>

<ul>
 <li>O navegador verifica se o ancestral mais externo do elemento ({{htmlelement("html")}}) tem um manipulador de eventos <code>onclick</code> registrado nele na fase de captura e o executa em caso afirmativo.</li>
 <li>Em seguida, ele passa para o próximo elemento dentro de <code>&lt;html&gt;</code>  e faz a mesma coisa, depois o próximo, e assim por diante até alcançar o elemento que foi realmente clicado.</li>
</ul>

<p>Na fase de <strong>bubbling</strong>, ocorre exatamente o oposto:</p>

<ul>
 <li>O navegador verifica se o elemento que realmente foi clicado tem um manipulador de eventos <code>onclick</code> registrado nele na fase de bubbling e o executa em caso afirmativo.</li>
 <li>Em seguida, ele passa para o próximo elemento ancestral imediato e faz a mesma coisa, depois o próximo, e assim por diante, até alcançar o elemento <code>&lt;html&gt;</code>.</li>
</ul>

<p><a href="https://mdn.mozillademos.org/files/14075/bubbling-capturing.png"><img alt="" src="https://mdn.mozillademos.org/files/14075/bubbling-capturing.png" style="display: block; height: 452px; margin: 0px auto; width: 960px;"></a></p>

<p>(Clique na imagem para um diagrama maior)</p>

<p>Nos navegadores modernos, por padrão, todos os manipuladores de eventos são registrados na fase de bubbling. Portanto, em nosso exemplo atual, quando você clica no vídeo, o evento de clique passa do elemento <code>&lt;video&gt;</code> para o elemento <code>&lt;html&gt;</code> Pelo caminho:</p>

<ul>
 <li>Ele encontra o manipulador <code>video.onclick...</code> e o executa, então o vídeo começa a ser reproduzido pela primeira vez.</li>
 <li>Em seguida, ele encontra o manipulador <code>videoBox.onclick...</code> e o executa, então o vídeo também está oculto.</li>
</ul>

<h4 id="Corrigindo_o_problema_com_stopPropagation">Corrigindo o problema com stopPropagation()</h4>

<p>Este é um comportamento irritante, mas existe uma maneira de corrigir isso! O objeto de evento padrão tem uma função disponível chamada <code><a href="/en-US/docs/Web/API/Event/stopPropagation">stopPropagation()</a></code>, que quando invocada no objeto de evento de um manipulador, faz com que o manipulador seja executado, mas o evento não borbulha mais acima na cadeia, portanto, mais nenhum manipulador rodará.</p>

<p>Podemos, portanto, consertar nosso problema atual alterando a segunda função do manipulador no bloco de códigos anterior para isto:</p>

<pre class="brush: js">video.onclick = function(e) {
  e.stopPropagation();
  video.play();
};</pre>

<p>Você pode tentar fazer uma cópia local do código-fonte <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html">show-video-box.html source code</a> e tentar corrigi-lo sozinho, ou observar o resultado corrigido em <a href="http://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html">show-video-box-fixed.html</a> (veja também o <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box-fixed.html">código-fonte</a> aqui).</p>

<div class="note">
<p><strong>Nota</strong>: Por que se preocupar em capturar e borbulhar? Bem, nos velhos tempos em que os navegadores eram muito menos compatíveis entre si do que são agora, o Netscape usava apenas captura de eventos, e o Internet Explorer usava apenas borbulhamento de eventos. Quando o W3C decidiu tentar padronizar o comportamento e chegar a um consenso, eles acabaram com esse sistema que incluía ambos, que é o único navegador moderno implementado.</p>
</div>

<div class="note">
<p><strong>Note</strong>: Como mencionado acima, por padrão, todos os manipuladores de eventos são registrados na fase de bubbling, e isso faz mais sentido na maioria das vezes. Se você realmente quiser registrar um evento na fase de captura, registre seu manipulador usando <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code>, e defina a propriedade terceira opcional como <code>true</code>.</p>
</div>

<h4 id="Delegação_de_eventos">Delegação de eventos</h4>

<p>O borbulhar também nos permite aproveitar a <strong>delegação de eventos</strong> — esse conceito depende do fato de que, se você quiser que algum código seja executado quando clicar em qualquer um de um grande número de elementos filho, você pode definir o ouvinte de evento em seu pai e ter os eventos que acontecem neles confluem com o pai, em vez de precisar definir o ouvinte de evento em cada filho individualmente.</p>

<p>Um bom exemplo é uma série de itens de lista — Se você quiser que cada um deles apareça uma mensagem quando clicado, você pode definir o ouvinte de evento <code>click</code> no pai <code>&lt;ul&gt;</code>,  e ele irá aparecer nos itens da lista.</p>

<p>Este conceito é explicado mais adiante no blog de David Walsh, com vários exemplos — veja <a href="https://davidwalsh.name/event-delegate">Como funciona a delegação de eventos em JavaScript.</a></p>

<h2 id="Conclusão">Conclusão</h2>

<p>Agora você deve saber tudo o que precisa saber sobre os eventos da Web nesse estágio inicial. Como mencionado acima, os eventos não são realmente parte do núcleo do JavaScript — eles são definidos nas APIs da Web do navegador.</p>

<p>Além disso, é importante entender que os diferentes contextos nos quais o JavaScript é usado tendem a ter diferentes modelos de evento — de APIs da Web a outras áreas, como WebExtensions de navegador e Node.js (JavaScript do lado do servidor). Não esperamos que você entenda todas essas áreas agora, mas certamente ajuda a entender os fundamentos dos eventos à medida que você avança no aprendizado do desenvolvimento da web.</p>

<p>Se houver algo que você não entendeu, fique à vontade para ler o artigo novamente, ou <a href="/en-US/Learn#Contact_us">entre em contato conosco</a> para pedir ajuda.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="http://www.quirksmode.org/js/events_order.html">Event order</a> (discussion of capturing and bubbling) — an excellently detailed piece by Peter-Paul Koch.</li>
 <li><a href="http://www.quirksmode.org/js/events_access.html">Event accessing</a> (discussion of the event object) — another excellently detailed piece by Peter-Paul Koch.</li>
 <li><a href="/en-US/docs/Web/Events">Event reference</a></li>
</ul>

<p>{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}</p>

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
