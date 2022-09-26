---
title: Gerador de histórias bobas
slug: Learn/JavaScript/First_steps/Silly_story_generator
translation_of: Learn/JavaScript/First_steps/Silly_story_generator
original_slug: Learn/JavaScript/First_steps/Gerador_de_historias_bobas
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}</div>

<p class="summary">Nesta avaliação, você será encarregado de utilizar parte do conhecimento que você adquiriu nos artigos deste módulo e aplicá-lo para criar um aplicativo divertido que gera histórias bobas aleatórias. Divirta-se!</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Antes de tentar esta avaliação, você já deve ter trabalhado com todos os artigos deste módulo.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Testar a compreensão dos fundamentos de JavaScript, como variáveis, números, operadores, cadeias de caracteres e matrizes.</td>
  </tr>
 </tbody>
</table>

<h2 id="Ponto_de_partida">Ponto de partida</h2>

<p>Para começar esta avaliação, você deve:</p>

<ul>
 <li><a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html">Pegue o arquivo HTML</a> para o exemplo e salve uma cópia local deste arquivo como index.html em um novo diretório em algum local do seu computador. Este arquivo ainda contém o CSS para estilizar o exemplo contido no arquivo.</li>
 <li>Vá para a <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt">página que contém o texto bruto</a> e matenha-a aberta em uma aba separada do navegador em algum lugar. Você precisará dela mais tarde.</li>
</ul>

<div class="note">
<p><strong>Nota</strong>: Alternativamente, você pode utilizar um site como <a class="external external-icon" href="http://jsbin.com/">JSBin</a> ou <a class="external external-icon" href="https://thimble.mozilla.org/">Thimble</a> para fazer a sua avaliação. Você pode colar o HTML, CSS e javaScript em um desses editores online. Se o editor online que você estiver utilizando não possuir um painel separado para javaScript, sinta-se a vontade para inseri-lo em um elemento &lt;script&gt; dentro da página HTML.</p>
</div>

<h2 id="Resumo_do_projeto">Resumo do projeto</h2>

<p>Você recebeu algum HTML/CSS em bruto e algumas strings de texto e funções de JavaScript; Você precisa escrever o JavaScript necessário para transformar este em um programa funcional, que faz o seguinte:</p>

<ul>
 <li>Gera uma história boba quando o botão "Gerar história aleatória" é pressionado.</li>
 <li>Substitui o nome padrão "Bob" na história com um nome personalizado, somente se um nome personalizado for inserido no campo de texto "Inserir nome personalizado" antes que o botão de geração seja pressionado.</li>
 <li>Gera outra história boba aleatória se você pressionar novamente o botão (e novamente...)</li>
</ul>

<p>A seguinte captura de tela mostra um exemplo do que o programa concluído deve produzir:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13667/assessment-1.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<p>Para dar-lhe mais uma ideia, <a href="http://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/">dê uma olhada no exemplo concluído</a> (sem espreitar o código fonte!)</p>

<h2 id="Passos_para_completar">Passos para completar</h2>

<p>As seções a seguir descrevem o que você precisa fazer.</p>

<p>Configuração básica:</p>

<ol>
 <li>Crie um novo arquivo chamado main.js, no mesmo diretório que o arquivo index.html.</li>
 <li>Aplique o arquivo JavaScript externo ao seu HTML inserindo um elemento {{htmlelement ("script")}} no seu HTML referenciando o main.js. Coloque-o antes da etiqueta de fechamento {{htmlelement("body")}}.</li>
</ol>

<p>Variáveis e funções iniciais:</p>

<ol>
 <li>No arquivo de texto cru, copie todo o código abaixo do cabeçalho "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" e cole-o no topo do arquivo main.js. Isso dá a você três variáveis que armazenam referências ao campo de texto "Inserir nome personalizado" (customName), o botão "Gerar história aleatória" (randomizar), E o elemento {{htmlelement ("p")}} na parte inferior do corpo HTML para onde a história será copiada (história), respectivamente. Além disso, você tem uma função chamada randomValueFromArray () que recebe um vetor e retorna um dos itens armazenados dentro do vetor aleatoriamente.</li>
 <li>Agora, veja a segunda seção do arquivo de texto bruto - "2. RAW TEXT STRINGS". Ele contém strings de texto que atuarão como entrada em nosso programa. Gostaríamos que você armazenasse essas strings dentro de variáveis no main.js:
  <ol>
   <li>Armazene a primeira, grande e longa linha de texto dentro de uma variável chamada storyText.</li>
   <li>Armazene o primeiro conjunto de três strings dentro de um vetor chamado insertX.</li>
   <li>Armazene o segundo conjunto de três strings dentro de um vetor chamado insertY.</li>
   <li>Armazene o terceiro conjunto de três strings dentro de um vetor chamado insertZ.</li>
  </ol>
 </li>
</ol>

<p>Colocando o manipulador de eventos e a função incompleta:</p>

<ol>
 <li>Agora volte ao arquivo de texto bruto.</li>
 <li>Copie o código encontrado abaixo do cabeçalho "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" E cole ele na parte inferior do arquivo main.js. Isto:
  <ul>
   <li>Adicione um ouvinte de evento de clique à variável randomize para que, quando o botão que ele representa, for clicado, a função <code>result()</code> seja executada.</li>
   <li>Adicione a função <code>result()</code> parcialmente concluída ao seu código. Para o restante da avaliação, você estará preenchendo linhas dentro desta função para completá-la e fazê-la funcionar corretamente.</li>
  </ul>
 </li>
</ol>

<p>Completando a função <code>result()</code>:</p>

<ol>
 <li>Crie uma nova variável chamada <code>newStory</code>, e defina seu valor como igual a <code>storyText</code>. Isso é necessário para que possamos criar uma nova história aleatória toda vez que o botão for pressionado e a função for executada. Se fizermos alterações diretamente no <code>storyText</code>, só poderemos gerar uma nova história uma vez.</li>
 <li>Crie três novas variáveis chamadas <code>xItem</code>, <code>yItem</code>, e <code>zItem</code>, e torne-as iguais ao resultado da chamada da função <code>randomValueFromArray()</code> em seus três arrays (o resultado em cada caso será um item aleatório de cada array em que é chamado). Por exemplo, você pode chamar a função e fazer com que ela retorne uma string aleatória de <code>insertX</code> escrevendo <code>randomValueFromArray(insertX)</code>.</li>
 <li>Em seguida, queremos substituir os três espaços reservados na variável <code>newStory</code> — <code>:insertx:</code>, <code>:inserty:</code>, e <code>:insertz:</code> — com strings armazenadas em <code>xItem</code>, <code>yItem</code>, e <code>zItem</code>. Existe um método de string específico que irá ajudá-lo aqui - em cada caso, faça a chamada para o método igual a <code>newStory</code>,então cada vez que é chamado, newStory é igual a si mesmo, mas com substituições feitas. Assim, cada vez que o botão é pressionado, esses espaços reservados são substituídos por uma string boba aleatória. Como uma dica adicional, o método em questão substitui apenas a primeira ocorrência da subseqüência de caracteres encontrada, portanto, talvez seja necessário fazer uma das chamadas duas vezes.</li>
 <li>Dentro do primeiro bloco <code>if</code>, adicione outra chamada de método de substituição de string para substituir o nome 'Bob' encontrado na string <code>newStory</code> pela variável <code>name</code>. Neste bloco estamos dizendo "Se um valor foi inserido na entrada de texto <code>customName</code>, substitua Bob na história por esse nome personalizado ".</li>
 <li>Dentro do segundo bloco <code>if</code>, estamos verificando se o botão de opção <code>uk</code> foi selecionado. Se assim for, converteremos os valores de peso e temperatura na história de libras e Fahrenheit em graus centígrados. O que você precisa fazer é o seguinte:
  <ol>
   <li>Procure as fórmulas para converter libras em pedras e Fahrenheit em centígrados.</li>
   <li>Dentro da linha que define a variável <code>weight</code>, substitua 300 por um cálculo que converta 300 libras em pedras. Concatene <code>' stone'</code> no final do resultado da chamada geral <code>Math.round()</code>.</li>
   <li>Dentro da linha que define a variável <code>temperature</code>, substitua 94 por um cálculo que converta 94 graus Fahrenheit em graus centígrados. Concatene <code>' centigrade'</code> no resultado da chamada geral <code>Math.round()</code>.</li>
   <li>Apenas sob as duas definições de variáveis, adicione mais duas linhas de substituição de string que substituem '94 fahrenheit' pelo conteúdo da variável <code>temperature</code>, e '300 libras' com o conteúdo da variável <code>weight</code>.</li>
  </ol>
 </li>
 <li>Finalmente, na segunda e última linha da função, torne a propriedade<code>textContent</code> da variável <code>story</code>  (que faz referência ao parágrafo) igual a <code>newStory</code>.</li>
</ol>

<h2 id="Dicas_e_sugestões">Dicas e sugestões</h2>

<ul>
 <li>Você não precisa editar o HTML de nenhuma maneira, exceto para adicionar o JavaScript ao seu HTML.</li>
 <li>Se você não tiver certeza se o JavaScript é aplicado ao seu HTML corretamente, tente remover todo o restante do arquivo JavaScript temporariamente, adicionando um pouco de JavaScript que você sabe que criará um efeito óbvio, salvando e atualizando. Por exemplo, o seguinte transforma o plano de fundo do elemento {{htmlelement ("html")}} em vermelho - para que a janela inteira do navegador fique vermelha se o JavaScript for aplicado corretamente:
  <pre class="brush: js">document.querySelector('html').style.backgroundColor = 'red';</pre>
 </li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round">Math.round()</a> é um método JavaScript integrado que simplesmente arredonda o resultado de um cálculo para o número inteiro mais próximo.</li>
</ul>

<h2 id="Avaliação">Avaliação</h2>

<p>Se você estiver seguindo esta avaliação como parte de um curso organizado, você está apto a entregar seu trabalho ao seu professor/mentor para avaliação. Se você é auto-didata, então você pode consultar o guia de marcação com bastante facilidade perguntando  no <a href="https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294">tópico do Discurso da área de aprendizagem</a>, ou no no canal <a href="irc://irc.mozilla.org/mdn">#mdn</a> IRC no <a href="https://wiki.mozilla.org/IRC">IRC Mozilla</a>. Tente realizar o exercício primeiro  — não há nada a ganhar com a trapaça!</p>

<p>{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}</p>
