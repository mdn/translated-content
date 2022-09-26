---
title: Galeria de Imagens
slug: Learn/JavaScript/Building_blocks/Image_gallery
translation_of: Learn/JavaScript/Building_blocks/Image_gallery
original_slug: Aprender/JavaScript/Elementos_construtivos/Image_gallery
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}</div>

<p class="summary">Agora que analisamos os blocos de construção fundamentais do JavaScript, testaremos seu conhecimento de loops, funções, condicionais e eventos, fazendo com que você crie um item bastante comum que você verá em muitos sites — uma galeria de imagens ativadas em JavaScript.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Antes de tentar esta avaliação, você já deve ter trabalhado em todos os artigos deste módulo.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Para testar a compreensão de loops, funções, condicionais e eventos de JavaScript.</td>
  </tr>
 </tbody>
</table>

<h2 id="Ponto_de_partida">Ponto de partida</h2>

<p>Para começar esta avaliação, você deve <a href="https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/gallery/gallery-start.zip?raw=true">pegar o arquivo ZIP</a> para o exemplo e descompactá-lo em algum lugar no seu computador.</p>

<div class="note">
<p><strong>Note</strong>: Como alternativa, você pode usar um site como o <a class="external external-icon" href="http://jsbin.com/">JSBin</a> ou <a class="external external-icon" href="https://thimble.mozilla.org/">Thimble</a> para fazer sua avaliação. Você pode colar o HTML, CSS e JavaScript em um desses editores on-line. Se o editor on-line que você está usando não tiver painéis JavaScript / CSS separados, sinta-se à vontade para colocar os elementos in-line <code>&lt;script&gt;<font face="x-locale-heading-primary, zillaslab, Palatino, Palatino Linotype, x-locale-heading-secondary, serif"><span style="background-color: #fff3d4;"> e </span></font></code><code>&lt;style&gt;</code> dentro da página HTML.</p>
</div>

<h2 id="Resumo_do_projeto">Resumo do projeto</h2>

<p>Você recebeu alguns recursos de HTML, CSS e imagem e algumas linhas de código JavaScript; você precisa escrever o JavaScript necessário para transformar isso em um programa de trabalho. O corpo do HTML se parece com isto:</p>

<pre class="brush: html">&lt;h1&gt;Image gallery example&lt;/h1&gt;

&lt;div class="full-img"&gt;
  &lt;img class="displayed-img" src="images/pic1.jpg"&gt;
  &lt;div class="overlay"&gt;&lt;/div&gt;
  &lt;button class="dark"&gt;Darken&lt;/button&gt;
&lt;/div&gt;

&lt;div class="thumb-bar"&gt;

&lt;/div&gt;</pre>

<p>O exemplo é assim:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13787/gallery.png" style="display: block; margin: 0 auto;"></p>

<ul>
</ul>

<p>As partes mais interessantes do arquivo CSS do exemplo:</p>

<ul>
 <li>Absolutamente posicione os três elementos dentro do <code>full-img &lt;div&gt;</code> — o <code>&lt;img&gt;</code> no qual a imagem em tamanho normal é exibida, um <code>&lt;div&gt;</code> vazio que é dimensionado para ser do mesmo tamanho que o <code>&lt;img&gt;</code> e colocado sobre a parte superior (isso é usado para aplicar um efeito de escurecimento à imagem através de uma cor de fundo semitransparente) e um <code>&lt;button&gt;</code> que é usado para controlar o efeito de escurecimento.</li>
 <li>Defina a largura de qualquer imagem dentro da thumb-bar  <code>thumb-bar &lt;div&gt;</code> (as chamadas imagens "thumbnail") para 20%, e flutue-as para a esquerda para que elas fiquem lado a lado em uma linha.</li>
</ul>

<p>Seu JavaScript precisa:</p>

<ul>
 <li>Faça um loop em todas as imagens e, para cada uma, insira um elemento <code>&lt;img&gt;</code> dentro do <code>thumb-bar &lt;div&gt;</code> que incorporará a imagem na página.</li>
 <li>Anexe um manipulador <code>onclick</code> para cada <code>&lt;img&gt;</code> dentro do <code>thumb-bar &lt;div&gt;</code> para que, quando clicados, a imagem correspondente seja exibida no elemento <code>displayed-img &lt;img&gt;</code>.</li>
 <li>Anexe um manipulador <code>onclick</code> ao <code>&lt;button&gt;</code> para que, ao ser clicado, um efeito de escurecimento seja aplicado à imagem em tamanho normal. Quando é clicado novamente, o efeito de escurecimento é removido novamente.</li>
</ul>

<p>Para lhe dar mais uma ideia, dê uma olhada no <a href="http://mdn.github.io/learning-area/javascript/building-blocks/gallery/">exemplo finalizado</a> (não espreite o código-fonte!)</p>

<h2 id="Passos_para_concluir">Passos para concluir</h2>

<p>As seções a seguir descrevem o que você precisa fazer.</p>

<h3 id="Looping_através_das_imagens">Looping através das imagens</h3>

<p>Já fornecemos a você linhas que armazenam uma referência à <code>thumb-bar &lt;div&gt;</code> dentro de uma variável chamada <code>thumbBar</code>, cria um novo elemento <code>&lt;img&gt;</code> define seu atributo <code>src</code> como um valor de espaço reservado <code>xxx</code>, e acrescenta essa nova  <code>&lt;img&gt;</code> elemento dentro do <code>thumbBar</code>.</p>

<p>Você precisa:</p>

<ol>
 <li>Coloque a seção de código abaixo do comentário "Looping through images" dentro de um loop que percorre todas as 5 imagens — você só precisa percorrer cinco números, um representando cada imagem.</li>
 <li>Em cada iteração de loop, substitua o valor de espaço reservado <code>xxx</code> por uma string que seja igual ao caminho para a imagem em cada caso. Estamos definindo o valor do atributo <code>src</code> para esse valor em cada caso. Tenha em mente que, em cada caso, a imagem está dentro do diretório de imagens e seu nome é <code>pic1.jpg</code>, <code>pic2.jpg</code>, etc.</li>
</ol>

<h3 id="Adicionando_um_manipulador_onclick_a_cada_imagem_em_miniatura">Adicionando um manipulador onclick a cada imagem em miniatura</h3>

<p>Em cada iteração de loop, você precisa adicionar um manipulador <code>onclick</code> ao atual <code>newImage</code> — isso deve:</p>

<ol>
 <li>Encontre o valor do atributo <code>src</code> da imagem atual. Isto pode ser feito executando a função <code><a href="/en-US/docs/Web/API/Element/getAttribute">getAttribute()</a></code> no <code>&lt;img&gt;</code> em cada caso e passando um parâmetro de <code>"src"</code> em cada caso. Mas como conseguir a imagem? O uso do <code>newImage.getAttribute()</code> não funcionará, pois o loop é concluído antes de os manipuladores de eventos serem aplicados; fazer desta forma resultaria no retorno do valor <code>src</code> do último <code>&lt;img&gt;</code> para todos os casos. Para resolver isso, tenha em mente que, no caso de cada manipulador de eventos, o <code>&lt;img&gt;</code> é o destino do manipulador. Que tal obter as informações do objeto de evento?</li>
 <li>Rode uma função, passando o valor <code>src</code> retornado como um parâmetro. Você pode chamar essa função como quiser.</li>
 <li>Esta função do manipulador de eventos deve definir o valor do atributo <code>src</code> do <code>displayed-img &lt;img&gt;</code> para o valor <code>src</code> passado como um parâmetro. Já fornecemos uma linha que armazena uma referência ao <code>&lt;img&gt;</code> relevante em uma variável chamada <code>displayedImg</code>. Note que queremos uma função nomeada definida aqui.</li>
</ol>

<h3 id="Escrevendo_um_manipulador_que_executa_o_botão_escurecer_clarear">Escrevendo um manipulador que executa o botão escurecer / clarear</h3>

<p>Isso só deixa o nosso escurecer / clarear <code>&lt;button&gt;</code> — nós já fornecemos uma linha que armazena uma referência ao <code>&lt;button&gt;</code> em uma variável chamada <code>btn</code>. Você precisa adicionar um manipulador <code>onclick</code> que:</p>

<ol>
 <li>Verifica o nome da classe atual definido no <code>&lt;button&gt;</code> — você pode novamente fazer isso usando <code>getAttribute()</code>.</li>
 <li>Se o nome da classe for <code>"dark"</code>, altera a classe <code>&lt;button&gt;</code> para <code>"light"</code> (usando <code><a href="/en-US/docs/Web/API/Element/setAttribute">setAttribute()</a></code>), seu conteúdo de texto para "Lighten", e o {{cssxref("background-color")}} da sobreposição <code>&lt;div&gt;</code> para <code>"rgba(0,0,0,0.5)"</code>.</li>
 <li>Se o nome da classe não for <code>"dark"</code>, a classe <code>&lt;button&gt;</code> será alterada para <code>"dark"</code>, o conteúdo de texto de volta para "Darken", e o {{cssxref("background-color")}} da sobreposição <code>&lt;div&gt;</code> para <code>"rgba(0,0,0,0)"</code>.</li>
</ol>

<p>As linhas seguintes fornecem uma base para alcançar as mudanças estipuladas nos pontos 2 e 3 acima.</p>

<pre class="brush: js">btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;</pre>

<h2 id="Dicas_e_sugestões">Dicas e sugestões</h2>

<ul>
 <li>Você não precisa editar o HTML ou CSS de forma alguma.</li>
</ul>

<h2 id="Avaliação">Avaliação</h2>

<p>Se você está seguindo esta avaliação como parte de um curso organizado, você deve poder dar seu trabalho ao seu professor / mentor para marcação. Se você é auto-didata, então pode obter o guia de marcação com bastante facilidade, perguntando no tópico de <a href="https://discourse.mozilla.org/t/image-gallery-assessment/24687">discussão sobre este exercício</a>, ou no canal <a href="irc://irc.mozilla.org/mdn">#mdn</a> IRC da <a href="https://wiki.mozilla.org/IRC">Mozilla IRC</a>. Tente o exercício primeiro — não há nada a ganhar com a trapaça!</p>

<p>{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}</p>

<p> </p>

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

<p> </p>
