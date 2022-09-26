---
title: Adicionando recursos à nossa demonstração de bolas pulantes
slug: Learn/JavaScript/Objects/Adding_bouncing_balls_features
translation_of: Learn/JavaScript/Objects/Adding_bouncing_balls_features
original_slug: Aprender/JavaScript/Objetos/Adding_bouncing_balls_features
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}</div>

<p class="summary">Nesta avaliação, espera-se que você use a demonstração de bolas saltantes do artigo anterior como ponto de partida e adicione alguns recursos novos e interessantes a ela.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Prerequisites:</th>
   <td>Before attempting this assessment you should have already worked through all the articles in this module.</td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>To test comprehension of JavaScript objects and object-oriented constructs</td>
  </tr>
 </tbody>
</table>

<h2 id="Ponto_de_partida">Ponto de partida</h2>

<p>Para iniciar essa avaliação, faça uma cópia local de <a href="https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index-finished.html">index-finished.html</a>, <a href="https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css">style.css</a>, e <a href="https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js">main-finished.js</a> do nosso último artigo em um novo diretório em seu computador local.</p>

<div class="note">
<p><strong>Note</strong>: Alternatively, you could use a site like <a class="external external-icon" href="http://jsbin.com/">JSBin</a> or <a class="external external-icon" href="https://thimble.mozilla.org/">Thimble</a> to do your assessment. You could paste the HTML, CSS and JavaScript into one of these online editors. If the online editor you are using doesn't have separate JavaScript/CSS panels, feel free to put them inline <code>&lt;script&gt;</code>/<code>&lt;style&gt;</code> elements inside the HTML page.</p>
</div>

<h2 id="Resumo_do_projeto">Resumo do projeto</h2>

<p>Nossa demo com bola saltitante é divertida, mas agora queremos torná-la um pouco mais interativa, adicionando um círculo maligno controlado pelo usuário, que vai comer as bolas se elas forem capturadas. Também queremos testar suas habilidades de construção de objetos criando um objeto <code>Shape()</code> genérico do qual nossas bolas e círculo maligno podem herdar. Por fim, queremos adicionar um contador de pontuação para rastrear o número de bolas a serem capturadas.</p>

<p>A imagem seguinte dá-lhe uma ideia do que deve ser o programa final:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13875/bouncing-evil-circle.png" style="display: block; margin: 0 auto;"></p>

<ul>
</ul>

<p>Para lhe dar mais uma ideia, dê uma olhada no <a href="http://mdn.github.io/learning-area/javascript/oojs/assessment/">exemplo finalizado</a> (não espreitar o código-fonte!)</p>

<h2 id="Passos_para_concluir">Passos para concluir</h2>

<p>As seções a seguir descrevem o que você precisa fazer.</p>

<h3 id="Criando_nossos_novos_objetos">Criando nossos novos objetos</h3>

<p>Primeiro de tudo, altere seu construtor <code>Ball()</code> existente para que ele se torne um construtor <code>Shape()</code> e adicione um novo construtor <code>Ball()</code>:</p>

<ol>
 <li>O construtor <code>Shape()</code>  deve definir as propriedades <code>x</code>, <code>y</code>, <code>velX</code>, e <code>velY</code> da mesma maneira que o construtor <code>Ball()</code> fez originalmente, mas não as propriedades de <code>color</code> e <code>size</code>.</li>
 <li>Também deve definir uma nova propriedade chamada <code>exists</code>, que é usada para rastrear se as bolas existem no programa (não foram comidas pelo círculo do mal). Este deve ser um booleano (<code>true</code>/<code>false</code>).</li>
 <li>O construtor <code>Ball()</code> deve herdar as propriedades <code>x</code>, <code>y</code>, <code>velX</code>, <code>velY</code>, e <code>exists</code> do construtor <code>Shape()</code>.</li>
 <li>Ele também deve definir uma propriedade <code>color</code> e uma <code>size</code>, como fez o construtor  <code>Ball()</code> original.</li>
 <li>Lembre-se de definir o <code>prototype</code> e o <code>constructor</code> do construtor <code>Ball()</code> adequadamente.</li>
</ol>

<p>As definições do método ball <code>draw()</code>, <code>update()</code>, e <code>collisionDetect()</code> devem permanecer exatamente iguais às anteriores.</p>

<p>Você também precisa adicionar um novo parâmetro à nova chamada de construtor <code>new Ball() ( ... )</code> — o parâmetro <code>exists</code> deve ser o quinto parâmetro, e deve receber um valor <code>true</code>.</p>

<p>Neste ponto, tente recarregar o código — ele deve funcionar da mesma forma que antes, com nossos objetos redesenhados.</p>

<h3 id="Definindo_EvilCircle()">Definindo EvilCircle()</h3>

<p>Agora é hora de conhecer o cara mau — o <code>EvilCircle()</code>! Nosso jogo só envolverá um círculo maligno, mas ainda vamos defini-lo usando um construtor que herda de <code>Shape()</code> para lhe dar alguma prática. Você pode querer adicionar outro círculo ao aplicativo mais tarde, que pode ser controlado por outro jogador, ou ter vários círculos malignos controlados por computador. Você provavelmente não vai dominar o mundo com um único círculo maligno, mas fará por essa avaliação.</p>

<p>O construtor <code>EvilCircle()</code> deve herdar  <code>x</code>, <code>y</code>, <code>velX</code>, <code>velY</code>, e <code>exists</code> de <code>Shape()</code>, mas <code>velX</code> e <code>velY</code> devem sempre ser iguais a 20.</p>

<p>Você deveria fazer algo como <code>Shape.call(this, x, y, 20, 20, exists);</code></p>

<p>Ele também deve definir suas próprias propriedades, da seguinte maneira:</p>

<ul>
 <li><code>color</code> — <code>'white'</code></li>
 <li><code>size</code> — <code>10</code></li>
</ul>

<p>Novamente, lembre-se de definir suas propriedades herdadas como parâmetros no construtor e defina as propriedades <code>prototype</code> e <code>constructor</code> corretamente.</p>

<h3 id="Definindo_os_métodos_de_EvilCircle()">Definindo os métodos de EvilCircle()</h3>

<p><code>EvilCircle()</code> deve ter quatro métodos, conforme descrito abaixo.</p>

<h4 id="draw()"><code>draw()</code></h4>

<p>Este método tem o mesmo propósito que o método <code>draw()</code> de <code>Ball()</code>: Ele desenha a instância do objeto na tela. Ele funcionará de maneira muito semelhante, portanto, você pode começar copiando a definição <code>Ball.prototype.draw</code>. Você deve então fazer as seguintes alterações:</p>

<ul>
 <li>Nós queremos que o círculo do mal não seja preenchido, mas apenas tenha uma linha externa (traço). Você pode conseguir isso atualizando <code><a href="/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle">fillStyle</a></code> e <code><a href="/en-US/docs/Web/API/CanvasRenderingContext2D/fill">fill()</a></code> para <code><a href="/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle">strokeStyle</a></code> e <code><a href="/en-US/docs/Web/API/CanvasRenderingContext2D/stroke">stroke()</a></code>.</li>
 <li>Também queremos tornar o traço um pouco mais espesso, para que você possa ver o círculo maligno com mais facilidade. Isso pode ser obtido definindo um valor para <code><a href="/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth">lineWidth</a></code> em algum lugar após a chamada  <code><a href="/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath">beginPath()</a></code> (3 será suficiente).</li>
</ul>

<h4 id="checkBounds()"><code>checkBounds()</code></h4>

<p>Este método fará a mesma coisa que a primeira parte da função <code>update()</code> do <code>Ball()</code> — olhe para ver se o círculo do mal vai sair da borda da tela, e pare de fazer isso. Novamente, você pode simplesmente copiar a definição de <code>Ball.prototype.update</code>, mas há algumas alterações que você deve fazer:</p>

<ul>
 <li>Livre-se das duas últimas linhas - não queremos atualizar automaticamente a posição do círculo maligno em todos os quadros, pois estaremos mudando isso de alguma outra forma, como você verá abaixo.</li>
 <li>Dentro das instruções <code>if()</code>, se os testes retornam true, não queremos atualizar o <code>velX</code>/<code>velY</code>; Em vez disso, queremos alterar o valor de <code>x</code>/<code>y</code> para que o círculo maligno seja devolvido na tela um pouco. Adicionar ou subtrair (conforme apropriado) a propriedade <code>size</code> do círculo maligno faria sentido.</li>
</ul>

<h4 id="setControls()"><code>setControls()</code></h4>

<p>Esse método adicionará um ouvinte de evento  <code>onkeydown</code> ao objeto <code>window</code> para que, quando determinadas teclas do teclado forem pressionadas, possamos mover o círculo maligno ao redor. O bloco de código a seguir deve ser colocado dentro da definição do método:</p>

<pre class="brush: js">var _this = this;
window.onkeydown = function(e) {
    if (e.keyCode === 65) {
      _this.x -= _this.velX;
    } else if (e.keyCode === 68) {
      _this.x += _this.velX;
    } else if (e.keyCode === 87) {
      _this.y -= _this.velY;
    } else if (e.keyCode === 83) {
      _this.y += _this.velY;
    }
  }</pre>

<p>Assim, quando uma tecla é pressionada, a propriedade <a href="/en-US/docs/Web/API/KeyboardEvent/keyCode">keyCode</a> é consultada para ver qual tecla é pressionada. Se for um dos quatro representados pelos códigos de teclas especificados, o círculo maligno se moverá para a esquerda / direita / para cima / para baixo.</p>

<ul>
 <li>Para um ponto de bônus, deixe-nos saber a quais chaves os códigos de teclas específicos estão mapeados.</li>
 <li>Para outro ponto de bônus, você pode nos dizer por que precisamos definir <code>var _this = this;</code> na posição em que está? É algo a ver com o escopo da função.</li>
</ul>

<h4 id="collisionDetect()"><code>collisionDetect()</code></h4>

<p>Este método irá agir de forma muito semelhante ao método<code><font face="Arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;"> </span></font></code><code>collisionDetect()</code> do <code>Ball()</code>, então você pode usar uma cópia disso como base deste novo método. Mas há algumas diferenças:</p>

<ul>
 <li>Na declaração  <code>if</code> externa, você não precisa mais verificar se a bola atual na iteração é igual à bola que está fazendo a verificação - porque ela não é mais uma bola, é o círculo do mal! Em vez disso, você precisa fazer um teste para ver se a bola que está sendo checada existe (com qual propriedade você poderia fazer isso?). Se não existe, já foi comido pelo círculo do mal, por isso não há necessidade de verificá-lo novamente.</li>
 <li>Na instrução  <code>if</code> interna, você não quer mais que os objetos mudem de cor quando uma colisão é detectada — em vez disso, você quer definir quaisquer bolas que colidam com o círculo maligno para não existir mais (novamente, como você pensa? d fazer isso?).</li>
</ul>

<h3 id="Trazendo_o_círculo_do_mal_para_o_programa">Trazendo o círculo do mal para o programa</h3>

<p>Agora nós definimos o círculo do mal, precisamos realmente fazer isso aparecer em nossa cena. Para fazer isso, você precisa fazer algumas alterações na função <code>loop()</code>.</p>

<ul>
 <li>Primeiro de tudo, crie uma nova instância de objeto do círculo do mal (especificando os parâmetros necessários) e, em seguida, chame seu método <code>setControls()</code>. Você só precisa fazer essas duas coisas uma vez, não em todas as iterações do loop.</li>
 <li>No ponto em que você percorre todas as bolas e chama as funções <code>draw()</code>, <code>update()</code>, e <code>collisionDetect()</code> para cada uma, faça com que essas funções sejam chamadas apenas se a bola atual existir.</li>
 <li>Chame os métodos <code>draw()</code>, <code>checkBounds()</code>, e <code>collisionDetect()</code> da instância do mal ball em cada iteração do loop.</li>
</ul>

<h3 id="Implementando_o_contador_de_pontuação">Implementando o contador de pontuação</h3>

<p>Para implementar o contador de pontuação, siga os seguintes passos:</p>

<ol>
 <li>No seu arquivo HTML, adicione um elemento {{HTMLElement("p")}} logo abaixo do elemento {{HTMLElement("h1")}} contendo o texto "Contagem de bolas:".</li>
 <li>No seu arquivo CSS, adicione a seguinte regra na parte inferior:
  <pre class="brush: css">p {
  position: absolute;
  margin: 0;
  top: 35px;
  right: 5px;
  color: #aaa;
}</pre>
 </li>
 <li>Em seu JavaScript, faça as seguintes atualizações:
  <ul>
   <li>Crie uma variável que armazene uma referência ao parágrafo.</li>
   <li>Mantenha uma contagem do número de bolas na tela de alguma forma.</li>
   <li>Incrementar a contagem e exibir o número atualizado de bolas cada vez que uma bola é adicionada à cena.</li>
   <li>Decrementar a contagem e exibir o número atualizado de bolas cada vez que o círculo maligno come uma bola (faz com que ele não exista).</li>
  </ul>
 </li>
</ol>

<h2 id="Dicas_e_sugestões">Dicas e sugestões</h2>

<ul>
 <li>Essa avaliação é bastante desafiadora. Tome cada passo devagar e com cuidado.</li>
 <li>Pode ser uma idéia manter uma cópia separada da demo depois que você fizer com que cada estágio funcione, para que você possa consultá-la caso se encontre em apuros mais tarde.</li>
</ul>

<h2 id="Avaliação">Avaliação</h2>

<p>Se você está seguindo esta avaliação como parte de um curso organizado, você deve poder dar seu trabalho ao seu professor / mentor para marcação. Se você é auto-didata, então você pode obter o guia de marcação com bastante facilidade, perguntando no tópico de <a href="https://discourse.mozilla.org/t/adding-features-to-our-bouncing-balls-demo-assessment/24689">discussão para este exercício</a>, ou no canal de <a href="irc://irc.mozilla.org/mdn">#mdn</a> IRC da <a href="https://wiki.mozilla.org/IRC">Mozilla IRC</a>. Tente o exercício primeiro — não há nada a ganhar com a trapaça!</p>

<p>{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}</p>

<p> </p>

<h2 id="Neste_módulo">Neste módulo</h2>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics">Object basics</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS">Object-oriented JavaScript for beginners</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes">Object prototypes</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Inheritance">Inheritance in JavaScript</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON">Working with JSON data</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object_building_practice">Object building practice</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features">Adding features to our bouncing balls demo</a></li>
</ul>

<p> </p>
